(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);a(70),a(95);var n=a(0),r=a.n(n),s=a(38),i=a.n(s),l=a(10),c=a.n(l),o=a(18),p=a(19),m=a(21),d=a(20),u=a(22),h=a(24),E=a(1),k=(a(116),a(65)),f=a.n(k),g=a(66),y=a.n(g),b=a(67),v=a.n(b),_=a(11),S=a.n(_),C=function(e){var t=e.id,a=e.fetchedUser,n=e.dataUser,s=e.spinner;return r.a.createElement(E.Panel,{id:t},r.a.createElement(E.PanelHeader,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),a&&r.a.createElement(E.Group,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},r.a.createElement(E.ListItem,{before:a.photo_200?r.a.createElement(E.Avatar,{src:a.photo_200}):null,description:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430"},"".concat(a.first_name," ").concat(a.last_name))),s&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"colomn"}},r.a.createElement(E.Spinner,{size:"large",style:{marginTop:20}})),r.a.createElement(E.Group,{title:"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b"},r.a.createElement(E.List,null,r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_likes:"-1")},"\u041b\u0430\u0439\u043a\u0438"),r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_flikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u043f\u0435\u0440\u0432\u044b\u043c"),r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_tlikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432 \u0447\u0438\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u044b\u0445"),r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_alllikes:"-1")},"\u041b\u0430\u0439\u043a\u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u0441\u0442\u043e\u0432 \u0437\u0430 \u0434\u0435\u043d\u044c"),r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_gposts:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043f\u043e\u0441\u0442\u044b"),r.a.createElement(E.Cell,{indicator:r.a.createElement(S.a,{type:"primary"},n?n.p_gcomm:"-1")},"\u0425\u043e\u0440\u043e\u0448\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"))))},x=(a(64),function(e){var t=e.id,a=e.dataUser,n=e.top,s=e.spinner,i=e.place;return r.a.createElement(E.Panel,{id:t},r.a.createElement(E.PanelHeader,null,"\u0422\u043e\u043f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),s&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"colomn"}},r.a.createElement(E.Spinner,{size:"large",style:{marginTop:20}})),r.a.createElement(E.List,null,n.length>0&&n.map(function(e,t){return r.a.createElement(E.Cell,{"data-top-id":e.id,indicator:t+1,href:"//vk.com/id"+e.user_id,key:t,title:"\u041a\u043e\u0440\u043e\u043b\u044c \u043b\u0430\u0439\u043a\u043e\u0432",description:+e.p_likes+ +e.p_flikes+ +e.p_tlikes+ +e.p_alllikes+ +e.p_comm+ +e.p_gposts+ +e.p_gcomm+" \u0431\u0430\u043b\u043b\u043e\u0432",before:e.photo?r.a.createElement(E.Avatar,{src:e.photo}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},e.username?e.username:"Unknown")}),r.a.createElement(E.FixedLayout,{vertical:"bottom"},r.a.createElement(E.Cell,{className:"fixed-top-account",description:+a.p_likes+ +a.p_flikes+ +a.p_tlikes+ +a.p_alllikes+ +a.p_comm+ +a.p_gposts+ +a.p_gcomm+" \u0431\u0430\u043b\u043b\u043e\u0432",indicator:"~"+i,key:n.top_place,before:a.photo?r.a.createElement(E.Avatar,{src:a.photo}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},a.username?a.username:"Unknown"))))}),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.tasks,s=(t.dataUser,t.spinner);t.count;return r.a.createElement(E.Panel,{id:a},r.a.createElement(E.PanelHeader,null,"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),s&&r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"colomn"}},r.a.createElement(E.Spinner,{size:"large",style:{marginTop:20}})),r.a.createElement(E.List,null,r.a.createElement(E.Group,{title:"\u041f\u0435\u0440\u0432\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430, \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435"},0===n.first.length&&r.a.createElement(E.Cell,null,"\u041f\u0443\u0441\u0442\u043e"),n.first.length>0&&n.first.map(function(t,a){return r.a.createElement(E.Cell,{"data-top-id":t.id,onClick:function(a){return e.props.go(a,{taskId:t.id})},"data-to":"task",key:a,title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",before:t.picture?r.a.createElement(E.Avatar,{src:t.picture}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},t.name?t.name:"Unsigned")})),r.a.createElement(E.Group,{title:"\u0412\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"\u0412\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"},0===n.second.length&&r.a.createElement(E.Cell,null,"\u041f\u0443\u0441\u0442\u043e"),n.second.length>0&&n.second.map(function(t,a){return r.a.createElement(E.Cell,{"data-top-id":t.id,onClick:function(a){return e.props.go(a,{taskId:t.id})},key:a,title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",before:t.picture?r.a.createElement(E.Avatar,{src:t.picture}):r.a.createElement(E.Avatar,{src:"https://vk.com/images/camera_100.png"})},t.name?t.name:"Unsigned")}))))}}]),t}(r.a.Component),D=a(68),U=a.n(D),w=a(39),I=a.n(w),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={slideIndex:0,imageHeight:350},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.task,s=t.go,i=Object(E.platform)();return r.a.createElement(E.Panel,{id:a},r.a.createElement(E.PanelHeader,{left:r.a.createElement(E.HeaderButton,{onClick:s,"data-to":"tasks"},i===E.IOS?r.a.createElement(U.a,null):r.a.createElement(I.a,null))},"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"),r.a.createElement(E.Header,null,n.name," ",r.a.createElement("b",null,n.price," \u0431\u0430\u043b\u043b\u043e\u0432")),n.photos.length>0&&r.a.createElement(E.Gallery,{slideWidth:"100%",style:{height:this.state.imageHeight,textAlign:"center"},bullets:"dark"},n.photos.map(function(t,a){return r.a.createElement("div",{key:a,style:{width:"100%",height:"100%",backgroundColor:"#fff"}},r.a.createElement("img",{alt:"",style:{maxHeight:e.state.imageHeight},src:t}))})),0===n.photos.length&&r.a.createElement(E.Gallery,{slideWidth:"100%",style:{height:this.state.imageHeight,textAlign:"center"}},r.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff"}},r.a.createElement("img",{alt:"",style:{maxHeight:"350px"},src:"https://vk.com/images/camera_200.png"}))),r.a.createElement(E.Group,null,r.a.createElement(E.Div,null,n.description)),r.a.createElement(E.FixedLayout,{vertical:"bottom"},r.a.createElement(E.Div,null,r.a.createElement(E.Button,{size:"xl",level:"commerce"},"\u042f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b"))))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e,t){var n=e.currentTarget.dataset.to;a.setState({activePanel:n}),"tasks"===n&&(c.a.send("VKWebAppSetLocation",{location:"tasks"}),a.setState({activeStory:"tasks"})),"task"===n&&(c.a.send("VKWebAppSetLocation",{location:"task".concat(t.taskId)}),a.getInfoTask(t.taskId),a.setState({activeStory:"tasks"}))},a.state={activeStory:"index",http_web_site:"https://pso31.ru/active_pso/vkapp/",topDataTopPlace:"0",tasksCount:"0",userData:null,topData:null,tasksData:null,photoState:!0,dataState:!0,topState:!0,tasksState:!0,fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),fetch(e.state.http_web_site+"/api/method/users.Get.php?user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({userData:t.response}),e.setState({dataState:!1})}),fetch(e.state.http_web_site+"/api/method/users.setPhoto.php?user_id="+e.state.fetchedUser.id+"&photo="+e.state.fetchedUser.photo_200).then(function(e){return e.json()}).then(function(t){return e.setState({photoState:!1}),console.log(t.response)}),fetch(e.state.http_web_site+"/api/method/app.getTop.php?limit=50&user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({topState:!1}),e.setState({topData:t.response}),e.setState({topDataTopPlace:t.top_place}),console.log(t)}),fetch(e.state.http_web_site+"/api/method/app.getTasks.php").then(function(e){return e.json()}).then(function(t){return e.setState({tasksState:!1}),e.setState({tasksData:t.response}),e.setState({tasksCount:t.count}),console.log(t)});break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{})}},{key:"getInfoTask",value:function(e){var t=this;fetch(this.state.http_web_site+"/api/method/tasks.Get.php?task_id ="+e).then(function(e){return e.json()}).then(function(e){return t.setState({taskData:e.response}),console.log(e)})}},{key:"render",value:function(){return r.a.createElement(E.Epic,{activeStory:this.state.activeStory,tabbar:r.a.createElement(E.Tabbar,null,r.a.createElement(E.TabbarItem,{onClick:this.onStoryChange,selected:"index"===this.state.activeStory,"data-story":"index",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(f.a,null)),r.a.createElement(E.TabbarItem,{onClick:(this.onStoryChange,this.setState({activePanel:"tasks"})),selected:"tasks"===this.state.activeStory,"data-story":"tasks",label:"0",text:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"},r.a.createElement(y.a,null)),r.a.createElement(E.TabbarItem,{onClick:this.onStoryChange,selected:"top"===this.state.activeStory,"data-story":"top",text:"\u0422\u043e\u043f"},r.a.createElement(v.a,null)))},r.a.createElement(E.View,{id:"index",activePanel:"home"},r.a.createElement(C,{id:"home",fetchedUser:this.state.fetchedUser,dataUser:this.state.userData,spinner:this.state.dataState})),r.a.createElement(E.View,{id:"tasks",activePanel:"tasks"},r.a.createElement(j,{id:"tasks",go:this.go,dataUser:this.state.userData,tasks:this.state.tasksData,spinner:this.state.tasksState,count:this.state.tasksCount}),r.a.createElement(O,{id:"task",task:this.state.taskData,go:this.go})),r.a.createElement(E.View,{id:"top",activePanel:"top"},r.a.createElement(x,{id:"top",dataUser:this.state.userData,top:this.state.topData,spinner:this.state.topState,place:this.state.topDataTopPlace})))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(P,null),document.getElementById("root"))},64:function(e,t,a){},69:function(e,t,a){e.exports=a(119)}},[[69,1,2]]]);
//# sourceMappingURL=main.aa3408df.chunk.js.map