(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{96:function(e,t,a){"use strict";a.r(t);var n=a(181),r=a.n(n),l=a(10),i=a.n(l),s=a(11),c=a.n(s),m=a(12),u=a.n(m),o=a(13),p=a.n(o),h=a(14),g=a.n(h),d=(a(182),a(183)),f=a.n(d),E=a(0),k=a.n(E),w=(a(85),f.a.Item),y=function(e){function t(){return i()(this,t),u()(this,p()(t).apply(this,arguments))}return g()(t,e),c()(t,[{key:"getTime",value:function(e){var t=new Date(1e3*e),a=[t.getFullYear(),t.getMonth()+1,t.getDate()].map(function(e){return e<10?"0"+e:e}),n=r()(a,3);return[n[0],n[1],n[2]].join("-")}},{key:"shouldComponentUpdate",value:function(e,t){return!(e.dataList.length===this.props.dataList.length)}},{key:"render",value:function(){var e=this,t=this.props.dataList;return console.log(t),k.a.createElement(f.a,{className:"my-list",style:{position:"relative"}},t.map(function(t){var a=t.title,n=t.middle_image,r=t.image_list,l=t.article_url,i=t.source,s=t.publish_time,c=e.getTime(s);return n&&!r?k.a.createElement(w,{wrap:!0,onClick:function(){return e.props.clickFun(l)},extra:k.a.createElement("img",{style:{width:"100%",height:"auto"},src:n.url.replace("webp","jpg")||"",alt:""}),key:t.item_id},k.a.createElement("span",{style:{fontSize:"14px"}},a),k.a.createElement("div",{className:"pushInfo"},k.a.createElement("span",{className:"source"},i),k.a.createElement("span",{className:"time"},c))):r&&r.length?k.a.createElement(w,{onClick:function(){return e.props.clickFun(l)},wrap:!0,key:t.item_id},k.a.createElement("span",{style:{fontSize:"14px"}},a),k.a.createElement("ul",{className:"imageList"},r.map(function(e,t){return k.a.createElement("li",{key:t},k.a.createElement("img",{src:e.url.replace("webp","jpg"),alt:""}))})),k.a.createElement("div",{className:"pushInfo"},k.a.createElement("span",{className:"source"},i),k.a.createElement("span",{className:"time"},c))):null}))}}]),t}(k.a.Component);t.default=y}}]);