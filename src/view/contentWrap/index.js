import React from 'react'
import allComponent from './contConfig'
import {PullToRefresh,Toast} from 'antd-mobile'
import fetchJsonp from 'fetch-jsonp'
import IframeWrap from '../../components/IframeWrap'


class ContentWrap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight-100,
      touchStartY:0, //记录初始的
      data: [],
      showIframe:false,
      showUrl:'',
      deviceId:"15365673"+ parseInt(Math.random()*10000)
    };
  }
  async handlerRefesh(){
    this.setState({ refreshing: true })
    let t = await this.getData()
    Toast.info(t.length > 0 ? `已更新${t.length}条数据` : '无数据', 1, null, false);
    if(this.state.down){
      this.setState({ refreshing: false,data:t.concat(this.state.data)})
    }else{
      this.setState({ refreshing: false,data:this.state.data.concat(t)})
    }
  }
  async getData(){
    Toast.loading(`加载中`,3)
    let url = `http://is.snssdk.com/api/news/feed/v51/?category=${this.props.category}&device_id=${this.state.deviceId}&&tt_from=pull`
    let res = await fetchJsonp(url)
    let result = await res.json()
    let t = result.data.map(e=>(JSON.parse(e.content)))
    Toast.hide({showIframe:123})
    return t
  }
  handleStart(e) {
    this.setState({
      touchStartY: e.targetTouches[0].clientY
    })
    e.stopPropagation();
  }
  handleMove(e) {
    let y = e.targetTouches[0].clientY
    this.setState({
      down: y - this.state.touchStartY >= 0
    })
  }
  async componentDidMount() {
    if(this.state.data.length===0){
      let t = await this.getData()
      this.setState({
        data: t.concat(this.state.data),
      })
    }
  }
  showDetailInfo(url){
    this.setState({showIframe:true,showUrl:url})
  }
  hideDetailInfo(){
    this.setState({showIframe:false,showUrl:''})
  }
  toHump(name) {
    var re = /_(\w)/g;
    let t = name.replace(re, function ($0, $1) {
      return $1.toUpperCase();
    })
    return t.substring(0, 1).toUpperCase() + t.substring(1);
  }
  render(){
    let name = this.toHump(this.props.category)
    let RenderComponents = allComponent[name]
    return(
      <>          
          <PullToRefresh
            onTouchStart={this.handleStart.bind(this)}
            onTouchMove={this.handleMove.bind(this)}
            ref={el => this.ptr = el}
            damping={80}
            style={{position: 'relative', overflow: 'auto', height: this.state.height}}
            direction={this.state.down ? 'down' : 'up'}
            refreshing={this.state.refreshing}
            onRefresh={this.handlerRefesh.bind(this)}>
              <RenderComponents dataList = {this.state.data} show={this.state.down} clickFun={this.showDetailInfo.bind(this)} />
          </PullToRefresh >
        {this.state.showIframe&&<IframeWrap clickFun={this.hideDetailInfo.bind(this)}   show ={this.state.showIframe} url={this.state.showUrl}/>}
      </>
    )
  }  
}
export default ContentWrap;