(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),o=a(18),i=a.n(o),l=a(57),p=a(58),u=a(60),d=a(59),m=a(61),h=a(1),f=(a(110),a(10)),E=a.n(f),_=function(e){var t=e.id,a=e.fetchedUser,n=e.dataUser;return r.a.createElement(h.Panel,{id:t},r.a.createElement(h.PanelHeader,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0435"),a&&r.a.createElement(h.Group,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},r.a.createElement(h.ListItem,{before:a.photo_200?r.a.createElement(h.Avatar,{src:a.photo_200}):null,description:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430"},"".concat(a.first_name," ").concat(a.last_name))),n&&r.a.createElement(h.Group,{title:"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b"},r.a.createElement(h.List,null,r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_likes:"-1")},"\u041b\u0430\u0439\u043a\u0438"),r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_flikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u043f\u0435\u0440\u0432\u044b\u043c"),r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_tlikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432 \u0447\u0438\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u044b\u0445"),r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_alllikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u0441\u0442\u043e\u0432 \u0437\u0430 \u0434\u0435\u043d\u044c"),r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_gposts:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043f\u043e\u0441\u0442\u044b"),r.a.createElement(h.Cell,{indicator:r.a.createElement(E.a,{type:"primary"},n?n.p_gcomm:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"))))},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",http_web_site:"https://pso31.ru/active_pso/vkapp/",userData:null,photoState:!1,fetchedUser:null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),fetch(e.state.http_web_site+"/api/method/users.Get.php?user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({userData:t.response}),console.log(t.response)}),fetch(e.state.http_web_site+"/api/method/users.setPhoto.php?user_id="+e.state.fetchedUser.id+"&photo="+e.state.fetchedUser.photo_200).then(function(e){return e.json()}).then(function(t){return e.setState({photoState:!0}),console.log(t.response)});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(h.View,{activePanel:this.state.activePanel},r.a.createElement(_,{id:"home",fetchedUser:this.state.fetchedUser,dataUser:this.state.userData}))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(b,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.1c591eea.chunk.js.map