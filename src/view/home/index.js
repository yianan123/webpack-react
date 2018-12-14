import React from 'react'
import {DatePicker, List,Toast,Button,Icon} from 'antd-mobile';
import './index.scss'
var maxDate =  new Date()
class Home extends React.Component {
    state = {
        date: '',
        data:{},
        isDisable:true
    }
    async componentWillMount() {
        // let t = await this.getData()
        this.setState({date:new Date()})
        let t =  this.formatDate(new Date())
        let item = await  this.getData(t)
        this.setState({data:item})
        this.resScrollToUp()
    }
    async handlerDateChange(a) {
        this.setState({date: a})
        this.setDisable(a)
        var date = new Date(a)
        let t =  this.formatDate(date)
        let item = await  this.getData(t)
        this.setState({data:item})
        this.resScrollToUp()
    }
    setDay(t) {
        let day = this.state.date
        var date = t === '-' ? new Date(day - 24 * 60 * 60 * 1000) : new Date(day - 0 + 24 * 60 * 60 * 1000)
        this.handlerDateChange(date)
    }
    setDisable(a) {
        var i = new Date()
        console.log(i, a)
        if (i.getFullYear() === a.getFullYear() && i.getMonth() === a.getMonth() && i.getDate() === a.getDate()) {
            this.setState({ isDisable: true })
        } else {
            this.setState({ isDisable: false })
        }
    }
    resScrollToUp(){
       this.ptr.scrollTo(0,0)
    }
    async getData(date){
        Toast.loading(`加载中`,3)
        let url = `https://interface.meiriyiwen.com/article/day?dev=1&date=${date}`
        let res = await fetch(url)
        let result = await res.json()
        Toast.hide({showIframe:123})
        return result.data
    }
    formatDate(date){
        let [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(e => e < 10 ? "0" + e : e)
       return [year,month,day].join('')
    }
    render() {
        let {author,content,title} = this.state.data
        return (
            <div className='homeContent'>
                <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <DatePicker
                        mode="date"
                        value={this.state.date}
                        maxDate={maxDate}
                        onChange={this.handlerDateChange.bind(this)}>
                        <List.Item arrow="horizontal">请选择日期</List.Item>
                    </DatePicker>
                </List>
                <div className='page-content' ref={el => this.ptr = el} style={{height:document.documentElement.clientHeight-90}}>
                    <div className='title'>{title}</div>
                    <div style={{textAlign:'right',fontSize:'14px',color:'#888',paddingRight:'10px'}}>——{author}</div>
                    <div className='content' dangerouslySetInnerHTML={{__html: content}} ></div>
                    <div className='anbtn'>
                        <Button type='primary' onClick={this.setDay.bind(this,'-')} style={{borderTopRightRadius:'0px',borderBottomRightRadius:'0px',marginRight:'1px'}}  inline size="small" ><Icon size='xxs' type='left' style={{verticalAlign:'middle'}} ></Icon>前一天</Button>
                        <Button type='primary' disabled={this.state.isDisable} onClick={this.setDay.bind(this,'+')}  style={{borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px'}} inline size="small" >后一天<Icon size='xxs' type='right' style={{verticalAlign:'middle'}} ></Icon></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home