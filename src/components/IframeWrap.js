import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {Button,Toast} from 'antd-mobile'
import './iframe.scss'

class Iframe extends React.Component{
    constructor(props){
        super(props)
        this.iframeRef = React.createRef();
        this.state ={
        }                  
    }
    componentDidMount(){
        console.log( this.iframeRef )
        Toast.loading('加载中', 6, null, true)
        this.iframeRef.current.onload=function(){
            Toast.hide()
        }
    }
    render(){
        let dom = document.getElementById('newsContent')
        let {url,show,clickFun} = this.props
        console.log(url,show)
        let c = (
            <div className='iframe-content' >
                <iframe title='ff' src={url}  ref={this.iframeRef}  frameBorder="0" scrolling="auto"></iframe>
                <div className='header'>
                    <div className='btn'>
                         <Button type="primary" size='small' onClick={()=>clickFun()} >关闭</Button>
                    </div>
                </div>
            </div>
        )
        return ReactDOM.createPortal(
            show?c:null,
            dom
        )
    }

}
Iframe.propTypes = {
    url:PropTypes.string.isRequired,
    show:PropTypes.bool.isRequired
}
export default Iframe