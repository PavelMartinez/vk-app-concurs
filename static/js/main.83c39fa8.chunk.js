(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);a(67),a(92);var n=a(0),r=a.n(n),s=a(33),l=a.n(s),i=a(18),o=a.n(i),c=a(58),p=a(59),m=a(64),d=a(60),u=a(65),h=a(19),E=a(1),f=(a(114),a(61)),y=a.n(f),_=a(62),b=a.n(_),v=a(63),k=a.n(v),S=a(10),g=a.n(S),C=function(e){var t=e.id,a=e.fetchedUser,n=e.dataUser,s=e.spinner;return r.a.createElement(E.Panel,{id:t},r.a.createElement(E.PanelHeader,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0435"),a&&r.a.createElement(E.Group,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},r.a.createElement(E.ListItem,{before:a.photo_200?r.a.createElement(E.Avatar,{src:a.photo_200}):null,description:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430"},"".concat(a.first_name," ").concat(a.last_name))),s&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"colomn"}},r.a.createElement(E.Spinner,{size:"large",style:{marginTop:20}})),r.a.createElement(E.Group,{title:"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b"},r.a.createElement(E.List,null,r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_likes:"-1")},"\u041b\u0430\u0439\u043a\u0438"),r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_flikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u043f\u0435\u0440\u0432\u044b\u043c"),r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_tlikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432 \u0447\u0438\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u044b\u0445"),r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_alllikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u0441\u0442\u043e\u0432 \u0437\u0430 \u0434\u0435\u043d\u044c"),r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_gposts:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043f\u043e\u0441\u0442\u044b"),r.a.createElement(E.Cell,{indicator:r.a.createElement(g.a,{type:"primary"},n?n.p_gcomm:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"))))},U=function(e){var t=e.id,a=e.dataUser,n=e.top,s=e.spinner,l=e.place;return r.a.createElement(E.Panel,{id:t},r.a.createElement(E.PanelHeader,null,"\u0422\u043e\u043f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),s&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"colomn"}},r.a.createElement(E.Spinner,{size:"large",style:{marginTop:20}})),r.a.createElement(E.List,null,n.length>0&&n.map(function(e,t){return r.a.createElement(E.Cell,{"data-top-id":e.id,indicator:t+1,href:"//vk.com/id"+e.user_id,key:t,title:"\u041a\u043e\u0440\u043e\u043b\u044c \u043b\u0430\u0439\u043a\u043e\u0432",description:+e.p_likes+ +e.p_flikes+ +e.p_tlikes+ +e.p_alllikes+ +e.p_comm+ +e.p_gposts+ +e.p_gcomm,before:e.photo?r.a.createElement(E.Avatar,{src:e.photo}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},e.username?e.username:"Unknown")}),r.a.createElement(E.FixedLayout,{vertical:"bottom"},r.a.createElement(E.Cell,{description:+a.p_likes+ +a.p_flikes+ +a.p_tlikes+ +a.p_alllikes+ +a.p_comm+ +a.p_gposts+ +a.p_gcomm,indicator:"~"+l,key:n.top_place,before:a.photo?r.a.createElement(E.Avatar,{src:a.photo}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},a.username?a.username:"Unknown"))),"))")},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activeStory:"index",http_web_site:"https://pso31.ru/active_pso/vkapp/",topDataTopPlace:"0",userData:null,topData:null,photoState:!0,dataState:!0,topState:!0,fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),fetch(e.state.http_web_site+"/api/method/users.Get.php?user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({userData:t.response}),e.setState({dataState:!1})}),fetch(e.state.http_web_site+"/api/method/users.setPhoto.php?user_id="+e.state.fetchedUser.id+"&photo="+e.state.fetchedUser.photo_200).then(function(e){return e.json()}).then(function(t){return e.setState({photoState:!1}),console.log(t.response)}),fetch(e.state.http_web_site+"/api/method/app.getTop.php?limit=50&user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({topState:!1}),e.setState({topData:t.response}),e.setState({topDataTopPlace:t.top_place}),console.log(t)});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(E.Epic,{activeStory:this.state.activeStory,tabbar:r.a.createElement(E.Tabbar,null,r.a.createElement(E.TabbarItem,{onClick:this.onStoryChange,selected:"index"===this.state.activeStory,"data-story":"index",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(y.a,null)),r.a.createElement(E.TabbarItem,{onClick:this.onStoryChange,selected:"tasks"===this.state.activeStory,"data-story":"tasks",label:"0",text:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"},r.a.createElement(b.a,null)),r.a.createElement(E.TabbarItem,{onClick:this.onStoryChange,selected:"top"===this.state.activeStory,"data-story":"top",text:"\u0422\u043e\u043f"},r.a.createElement(k.a,null)))},r.a.createElement(E.View,{id:"index",activePanel:"home"},r.a.createElement(C,{id:"home",fetchedUser:this.state.fetchedUser,dataUser:this.state.userData,spinner:this.state.dataState})),r.a.createElement(E.View,{id:"tasks",activePanel:"discover"},r.a.createElement(E.Panel,{id:"discover"},r.a.createElement(E.PanelHeader,null,"Discover"))),r.a.createElement(E.View,{id:"top",activePanel:"top"},r.a.createElement(U,{id:"top",dataUser:this.state.userData,top:this.state.topData,spinner:this.state.topState,place:this.state.topDataTopPlace})))}}]),t}(r.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(w,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(117)}},[[66,1,2]]]);
//# sourceMappingURL=main.83c39fa8.chunk.js.map