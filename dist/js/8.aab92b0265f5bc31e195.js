(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{190:function(t,e,n){},198:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},37:function(t,e,n){"use strict";n.r(e);n(192);var a=n(193),r=n.n(a),i=n(38),s=n.n(i),o=(n(184),n(185)),c=n.n(o),u=n(58),h=n.n(u),l=n(10),f=n.n(l),d=n(11),p=n.n(d),m=n(12),w=n.n(m),g=n(13),v=n.n(g),y=n(14),k=n.n(y),b=n(0),S=n.n(b),E=n(88),I=n(196),_=n.n(I),x=(n(188),n(189)),D=n.n(x),R=n(1),C=n.n(R),T=n(56),N=n.n(T),M=(n(190),function(t){function e(t){var n;return f()(this,e),(n=w()(this,v()(e).call(this,t))).iframeRef=S.a.createRef(),n.state={},n}return k()(e,t),p()(e,[{key:"componentDidMount",value:function(){console.log(this.iframeRef),c.a.loading("加载中",6,null,!0),this.iframeRef.current.onload=function(){c.a.hide()}}},{key:"render",value:function(){var t=document.getElementById("newsContent"),e=this.props,n=e.url,a=e.show,r=e.clickFun;console.log(n,a);var i=S.a.createElement("div",{className:"iframe-content"},S.a.createElement("iframe",{title:"ff",src:n,ref:this.iframeRef,frameBorder:"0",scrolling:"auto"}),S.a.createElement("div",{className:"header"},S.a.createElement("div",{className:"btn"},S.a.createElement(D.a,{type:"primary",size:"small",onClick:function(){return r()}},"关闭"))));return N.a.createPortal(a?i:null,t)}}]),e}(S.a.Component));M.propTypes={url:C.a.string.isRequired,show:C.a.bool.isRequired};var U=M,O=function(t){function e(t){var n;return f()(this,e),(n=w()(this,v()(e).call(this,t))).state={refreshing:!1,down:!0,height:document.documentElement.clientHeight-100,touchStartY:0,data:[],showIframe:!1,showUrl:"",deviceId:"15365673"+parseInt(1e4*Math.random())},n}return k()(e,t),p()(e,[{key:"handlerRefesh",value:function(){var t=h()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({refreshing:!0}),t.next=3,this.getData();case 3:e=t.sent,c.a.info(e.length>0?"已更新".concat(e.length,"条数据"):"无数据",1,null,!1),this.state.down?this.setState({refreshing:!1,data:e.concat(this.state.data)}):this.setState({refreshing:!1,data:this.state.data.concat(e)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){var t=h()(s.a.mark(function t(){var e,n,a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c.a.loading("加载中",3),e="http://is.snssdk.com/api/news/feed/v51/?category=".concat(this.props.category,"&device_id=").concat(this.state.deviceId,"&&tt_from=pull"),t.next=4,_()(e);case 4:return n=t.sent,t.next=7,n.json();case 7:return a=t.sent,r=a.data.map(function(t){return JSON.parse(t.content)}),c.a.hide({showIframe:123}),t.abrupt("return",r);case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleStart",value:function(t){this.setState({touchStartY:t.targetTouches[0].clientY}),t.stopPropagation()}},{key:"handleMove",value:function(t){var e=t.targetTouches[0].clientY;this.setState({down:e-this.state.touchStartY>=0})}},{key:"componentDidMount",value:function(){var t=h()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==this.state.data.length){t.next=5;break}return t.next=3,this.getData();case 3:e=t.sent,this.setState({data:e.concat(this.state.data)});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"showDetailInfo",value:function(t){this.setState({showIframe:!0,showUrl:t})}},{key:"hideDetailInfo",value:function(){this.setState({showIframe:!1,showUrl:""})}},{key:"toHump",value:function(t){var e=t.replace(/_(\w)/g,function(t,e){return e.toUpperCase()});return e.substring(0,1).toUpperCase()+e.substring(1)}},{key:"render",value:function(){var t=this,e=this.toHump(this.props.category),n=E.default[e];return S.a.createElement(S.a.Fragment,null,S.a.createElement(r.a,{onTouchStart:this.handleStart.bind(this),onTouchMove:this.handleMove.bind(this),ref:function(e){return t.ptr=e},damping:80,style:{position:"relative",overflow:"auto",height:this.state.height},direction:this.state.down?"down":"up",refreshing:this.state.refreshing,onRefresh:this.handlerRefesh.bind(this)},S.a.createElement(n,{dataList:this.state.data,show:this.state.down,clickFun:this.showDetailInfo.bind(this)})),this.state.showIframe&&S.a.createElement(U,{clickFun:this.hideDetailInfo.bind(this),show:this.state.showIframe,url:this.state.showUrl}))}}]),e}(S.a.Component);e.default=O},39:function(t,e,n){"use strict";n.r(e);n(99);var a=n(100),r=n.n(a),i=n(198),s=n.n(i),o=n(10),c=n.n(o),u=n(11),h=n.n(u),l=n(12),f=n.n(l),d=n(13),p=n.n(d),m=n(14),w=n.n(m),g=n(0),v=n.n(g),y=n(37),k=function(t){function e(){return c()(this,e),f()(this,p()(e).apply(this,arguments))}return w()(e,t),h()(e,[{key:"render",value:function(){var t=[{title:"热点",category:"news_hot",component:"NewsHot"},{title:"视频",category:"video",component:"Video"},{title:"社会",category:"news_society",component:"NewsSociety"},{title:"娱乐",category:"news_entertainment",component:"NewsEntertainment"},{title:"问答",category:"question_and_answer"},{title:" 科技",category:"news_tech"},{title:" 汽车",category:"news_car"},{title:" 财经",category:"news_finance"},{title:"军事",category:"news_military"},{title:"国际",category:"news_world"}];return v.a.createElement("div",{id:"newsContent"},v.a.createElement(r.a,{swipeable:!1,useOnPan:!1,tabs:t,prerenderingSiblingsNumber:3,distanceToChangeTab:.3,renderTabBar:function(t){return v.a.createElement(r.a.DefaultTabBar,s()({},t,{page:3}))}},t.map(function(t){return v.a.createElement(y.default,s()({key:t.category},t))})))}}]),e}(v.a.Component);e.default=k}}]);