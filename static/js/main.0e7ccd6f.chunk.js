(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);a(60),a(85);var n=a(0),r=a.n(n),s=a(31),c=a.n(s),o=a(17),i=a.n(o),l=a(54),u=a(55),p=a(57),d=a(56),h=a(58),f=a(5),m=(a(108),function(e){var t=e.id,a=e.fetchedUser,n=e.dataUser;return r.a.createElement(f.Panel,{id:t},r.a.createElement(f.PanelHeader,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0435"),a&&r.a.createElement(f.Group,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},r.a.createElement(f.ListItem,{before:a.photo_200?r.a.createElement(f.Avatar,{src:a.photo_200}):null,description:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430"},"".concat(a.first_name," ").concat(a.last_name))),n&&r.a.createElement(f.Group,{title:"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b"},r.a.createElement(f.List,null,r.a.createElement(f.Cell,{indicator:r.a.createElement(f.Counter,null,"5")},"\u0414\u0440\u0443\u0437\u044c\u044f"))))}),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",http_web_site:"https://pso31.ru/active_pso/vkapp/",userData:null,fetchedUser:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),fetch(e.state.http_web_site+"/api/method/users.Get.php?user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({userData:t.response}),console.log(t.response)});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(f.View,{activePanel:this.state.activePanel},r.a.createElement(m,{id:"home",fetchedUser:this.state.fetchedUser,dataUser:this.state.userData}))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(b,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(109)}},[[59,1,2]]]);
//# sourceMappingURL=main.0e7ccd6f.chunk.js.map