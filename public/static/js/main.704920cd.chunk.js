(this.webpackJsonpclient_side=this.webpackJsonpclient_side||[]).push([[0],{231:function(e,t,n){},265:function(e,t,n){},478:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),o=n(39),c=n.n(o),i=n(73),l=(n(265),n(63)),u=n(8),d=n(14),h=n(10),j=n(9),b=n(13),p=n.n(b),g=n(42),m=n(15),O=function(e){return Object(a.jsx)("div",{className:"head",children:Object(a.jsx)("h1",{children:"NeighborAid"})})},v=n(44),f=n(93),x=n(62),C=(n(478),n(498)),A=n(85),y=n(94),w=n(40),k=function(e){var t=e.chatroom,n=e.handleReceivedMessage;return Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(i.ActionCableConsumer,{channel:{channel:"MessagesChannel",chatroom:t.id},onReceived:n,onInitialized:function(e){return console.log(e)},onConnected:function(e){return console.log(e)},onDisconnected:function(e){return console.log(e)},onRejected:function(e){return console.log(e)}},t.id)})},S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){k.subscriptions.create({channel:a.props.chatroom.name,volunteer_id:a.props.volunteer.id},{connected:function(e){return console.log(e)},disconnected:function(){return console.log("disconnected")},received:function(e){return console.log(e)}})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(w.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),e.preventDefault()},a.state={content:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",name:"content",placeholder:"message",value:this.state.content,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Send"})]})})}}]),n}(r.Component),B=(r.Component,n(166)),q=(n(479),"https://neighboraid.herokuapp.com"),I={"Content-Type":"application/json",Accept:"application/json"},D=(s.a.Component,function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={body:"",chatroom_id:e.props.chatroom_id,user_id:e.props.user_id},e.componentWillReceiveProps=function(t){e.setState({chatroom_id:t.chatroom_id})},e.handleChange=function(t){e.setState({body:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.body,r=n.chatroom_id,s=n.user_id;console.log(s);var o={body:a,chatroom_id:r,user_id:s};p.a.post("".concat(q,"/messages"),{message:o}).then((function(e){return console.log(e)})).catch((function(e){return console.error("Error: ".concat(e))})),e.setState({body:""})},e.render=function(){return Object(a.jsx)("div",{className:"newMessageForm",children:Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("label",{children:"New Message:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:e.state.body,onChange:e.handleChange}),Object(a.jsx)("input",{type:"submit"})]})})},e}return n}(s.a.Component)),U=function(e){var t=e.chatroom,n=t.id,r=t.name,s=t.messages,o=e.user_id;return Object(a.jsxs)("div",{className:"messagesArea",children:[Object(a.jsx)("h2",{children:r}),Object(a.jsx)("ul",{children:M(s)}),Object(a.jsx)(D,{chatroom_id:n,user_id:o})]})},M=function(e){return console.log("messages",e),e.map((function(e){return Object(a.jsx)("li",{children:e.body},e.id)}))},L=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={chatrooms:[],activeChatroom:e.props.chatroom},e.componentDidMount=function(){var t=e.state.activeChatroom;p.a.get("".concat(q,"/chatrooms")).then((function(n){var a=n.data.find((function(e){return e.name===t.name&&e.request_id===t.request_id&&e.volunteer_id===t.volunteer_id}));e.setState({activeChatroom:a})}))},e.handleClick=function(t){e.setState({activeChatroom:t})},e.handleReceivedChatroom=function(t){console.log("handleReceivedChatroom",t);var n=t.chatroom;e.setState({chatrooms:[].concat(Object(B.a)(e.state.chatrooms),[n])})},e.handleReceivedMessage=function(t){console.log("response message",t);var n=t.message,a=e.state.activeChatroom;a.messages=[].concat(Object(B.a)(a.messages),[n]),e.setState({activeChatroom:a})},e.render=function(){var t=e.state,n=(t.chatrooms,t.activeChatroom);return console.log("activeChatroom",n),Object(a.jsxs)("div",{className:"chatroomsList",children:[Object(a.jsx)("div",{}),n?Object(a.jsx)(i.ActionCableConsumer,{channel:{channel:"MessagesChannel",chatroom:n.id},onReceived:function(t){console.log(t),e.handleReceivedMessage(t)}},n.id):null,n?Object(a.jsx)(U,{chatroom:n,user_id:e.props.user_id}):null]})},e}return n}(s.a.Component),R=function(e){var t=s.a.useState(),n=Object(v.a)(t,2),r=n[0],o=n[1],c=s.a.useState(!1),i=Object(v.a)(c,2),l=i[0],u=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C.a,{onClick:function(){var t={name:e.request.title,request_id:e.request.id,volunteer_id:e.volunteer.id};p.a.post("/chatrooms",{chatroom:t}).then((function(e){if(200===e.status){var t=JSON.parse(e.request.requestData).chatroom;t.messages||(t.messages=[]),o(t),u(!0)}}))},children:[Object(a.jsx)(A.a,{name:"desktop"}),"Start Chat"]}),l&&Object(a.jsx)("div",{style:{backgroundColor:"pink"},children:Object(a.jsx)(L,{user_id:e.volunteer&&e.volunteer.user_id,chatroom:r})})]})},E=function(e){var t=s.a.useState(!1),n=Object(v.a)(t,2),r=n[0],o=n[1],c=s.a.useState(!1),i=Object(v.a)(c,2),l=i[0],u=i[1],d=s.a.useState(!1),h=Object(v.a)(d,2),j=h[0],b=h[1],g=function(){o(!r)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.Marker,{style:{height:"30px",width:"30px"},position:e.position,onClick:g,icon:"Material"===e.request.category?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEdUlEQVR42tWXeYiVVRjG3zt3FkfHMdxK2/5oMSgqLEYCiaSif6KFgiQC24QWIiOozDCCKYWoaKECIZkE0ZKkDIygJFuk9B8xS62oyDSndUZnvTq339N5vu7tMnVv3Ynog4fzfvc7532f827n3Fz8x0/uf0fgw3kdsxguBK3gMCiCqaAbvDRn00fd/woBDDcxdIID4HkM9Vd8P5VhMXiNb+vHlADKGxgeB6+gfDPvFyFfBmZ4yptgI9/28m058k7kVWNJ4AYGeWAFeBFcBwpgEBwE/X7/zQOe8xAkPq+bgF2/3ju+BTwaKf56FP8hE/ke9IAFJrUEAreOBYHzGOaBJ8BWcCxoBw0mMGwCyo0vwbsYfph165CvRR6ul4B2/RXYB9aAmfZAk9ePgJ/BD2DAHpnrcKyBwGf1EljE8D4YD7psfByYUOaFQXtCxpUPpzsU2yCwrV4C8xl+Ad+awGSvG+9QNHuqiCj2uzA6h3X3I69E3l8vAcV8AYoeQV4ZKQemeJxmL4RDoUroZG4nc59BvgO5WBcBk1BtPwjUbB4DJ9p4G8iXhUJJegk4HszGeFc13bV44LRIdf8yCrfz3hGpI55kEkMOx9fgSubsZs7N/r6M995/TABFd9rVyyLF93xDv71t49r5FZFyYzN4HaOfsvZk5CXyGO8f/20CKFAWF1i8GvlS5CdtWBn/DXiLb4v4pqpQxzs6UrlK3iKPWX5Ka0WqZgIoVQwXsmgp8l3IygFl+5FItd7r8WJwClhrb8igTsiJfn8gUgmrhd+EvkKtBFRCT4OzvBNlfaM/q977IjWmLodktkm1RGpQmqvmpJ6QHVpnQ+CFWgkoeRYzrub1AjA9UrYXrVRQ51PyTfLveRsfMlQZu8AqdK1A17OMt1UlwMTjGC737t6JVHITo9R6s97fVrE0Oxdk+CdDRLdi+Hb03uNcGKpGQHFVU9kL3rDxVu+23waao9SAMuNF50i/86DHegYweiZ6r0d+r/KIHo3AQoYddulzdr+UF0xkkr0x2pMdzwUT1LjfuaRK2gOBndUI3MvwKjgq0tkfNqwymxal3v9XPSQ7oL4zoXMiJeP2ynIcjYAqYK2NLgUnRDqCJ5cZzzveLXZ3Y4WuLB/06BA7A1wNPoDAF9UI3Meg7D8mUhOZ6p0fMalDUWq/MtJeFpKRKCVrOASfALXv+SZQNQfujnTxmGEi2s2Est20mkyzicmgEm/A7zn/JnJtJqxNXAV21JIDNzJssmvnRun+d8B5cTD+WP999sgUG5UXej03OyV1Sb0mUknuqUZAyaKE02XicIzBg07doJRPyytPxxwf5Urd386NVPMqu3HeqXqBkrDRLv7RcrvDoExv8a4HnTcF45DntFtHj/VJj27QGyCzTgTUxzdYcXbPayhLpuwAyVth3u8NDlOu7LeRKHXLRs9vKgtFRKlCdoOOnF0kl6tWZ9oLs7yzYS/IbsI5k8w8Mt1y0XEvWNbafSY47N3LQ932ovJgCx7oq+vfMcR/X1/t7vdnz6+sc7N2qDpmDgAAAABJRU5ErkJggg==":"data:image/png;base64,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",children:r&&Object(a.jsx)(x.InfoWindow,{onCloseClick:g,user:e.user,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:["Task ID:",e.request.id]}),Object(a.jsxs)("h4",{children:["Requester ID:",e.request.user_id]}),Object(a.jsx)("h1",{children:e.request.title}),Object(a.jsx)("h3",{children:e.request.description}),l?"":Object(a.jsx)("button",{onClick:function(){var t={request_id:e.request.id,user_id:e.user.id};console.log(e.user),console.log(t),p.a.post("/volunteers",{volunteer:t}).then((function(e){console.log(e.data),"created"===e.data.status&&(u(!0),b(e.data.volunteer))})).catch((function(e){console.error("error:".concat(e))}))},children:"Volunteer"})]})})}),l&&Object(a.jsx)(R,{request:e.request,volunteer:j})]})},F=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={requests:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/requests").then((function(t){console.log(t.data),e.setState({requests:t.data.requests})}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:this.state.requests&&this.state.requests.map((function(t){return Object(a.jsx)(E,{position:{lat:+t.latitude,lng:+t.longitude},title:t.title,description:t.description,request:t,request_id:t.id,user:e.props.user},t.id)}))})}}]),n}(s.a.Component),K=Object(f.compose)(Object(f.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyB465RpcGT8xIHfVYXmsDZP657fvRgqQr0",loadingElement:Object(a.jsx)("div",{style:{height:"100%"}}),containerElement:Object(a.jsx)("div",{style:{height:"750px"}}),mapElement:Object(a.jsx)("div",{style:{height:"100%",width:"70%"}})}),x.withScriptjs,x.withGoogleMap)((function(e){return Object(a.jsx)(x.GoogleMap,{defaultZoom:18,defaultCenter:{lat:39.889986,lng:-104.948516},children:Object(a.jsx)(F,{request:e.request,user:e.user})})})),Y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("p",{style:{padding:"18px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}}]),n}(r.Component),J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(w.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n={title:t.title,description:t.description,latitude:t.latitude,longitude:t.longitude,category:t.category};p.a.post("/requests",{request:n},{withCredentials:!0}).then((function(e){"created"===e.data.status&&(a.props.requests(e.data),a.redirect())})).catch((function(e){console.log("request error",e)})),e.preventDefault()},a.redirect=function(){a.props.history.push("/")},a.state={title:"",description:"",latitude:"",longitude:"",category:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Task",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"decimal",name:"latitude",placeholder:"Latitude",value:this.state.latitude,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"decimal",name:"longitude",placeholder:"Longitude",value:this.state.longitude,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"category",placeholder:"Material",value:this.state.category,onChange:this.handleChange})}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(r.Component),Q=n(98),N=(n(483),function(){var e=s.a.useState;e.message,e.setMessage;return Object(a.jsx)("div",{className:"DropMenu",children:Object(a.jsxs)(Q.Accordion,{atomic:!0,children:[Object(a.jsx)(Q.AccordionItem,{title:"Create a Task ",children:Object(a.jsx)(J,{})}),Object(a.jsx)(Q.AccordionItem,{title:"Tasks Im Helping With",children:Object(a.jsx)(Y,{})}),Object(a.jsx)(Q.AccordionItem,{title:"My Tasks",children:Object(a.jsx)(Y,{})})]})})}),z=(n(231),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={requests:[]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.error,n=e.requests;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):Object(a.jsxs)("div",{className:"m-top_xx-large",children:[Object(a.jsx)("h1",{children:"Available Tasks:"}),n.map((function(e){return Object(a.jsx)("div",{children:e.length})}))]})}}]),n}(r.Component)),H=n.p+"static/media/fb.24cb3989.png",T=n.p+"static/media/instgrm.f7a2180e.png",X=n.p+"static/media/twitter.79625766.png",G=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("footer",{className:"m-top_xx-large",children:Object(a.jsx)("div",{className:"End",children:Object(a.jsx)("div",{className:"Row",children:Object(a.jsx)("div",{className:"Col-6",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:"Foot",children:Object(a.jsx)("a",{href:"www.facebook.com",children:Object(a.jsx)("img",{src:H,alt:"Facebook"})})}),Object(a.jsx)("li",{className:"Foot",children:Object(a.jsx)("a",{href:"www.twitter.com",children:Object(a.jsx)("img",{src:X,alt:"Twitter"})})}),Object(a.jsx)("li",{className:"Foot",children:Object(a.jsx)("a",{href:"www.instagram.com",children:Object(a.jsx)("img",{src:T,alt:"Instagram"})})})]})})})})})}}]),n}(s.a.Component),P=function(e){var t=s.a.useState(),n=Object(v.a)(t,2),r=n[0],o=n[1];return Object(a.jsxs)("div",{className:"Dashboard",children:[Object(a.jsx)(N,{requests:r}),Object(a.jsx)(K,{requests:r,setRequests:o,user:e.user}),Object(a.jsx)(z,{requests:r}),Object(a.jsx)(G,{})]})},V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClick=function(){p.a.delete("/logout",{withCredentials:!0}).then((function(e){a.props.handleLogout(),a.props.history.push("/")})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsx)("br",{}),this.props.loggedInStatus?Object(a.jsx)(g.b,{to:"/logout",onClick:this.handleClick,children:"Log Out"}):null]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(g.b,{to:"/login",children:"Log In"}),Object(a.jsx)("br",{}),Object(a.jsx)(g.b,{to:"/signup",children:"Sign Up"}),this.props.loggedInStatus?Object(a.jsx)(P,{user:this.props.user}):null]})]})}}]),n}(r.Component),Z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState(Object(w.a)({},n,a))},r.handleSubmit=function(e){e.preventDefault();var t=r.state,n={email:t.email,password:t.password};p.a.post("/login",{user:n},{withCredentials:!0}).then((function(e){e.data.logged_in?(r.props.handleLogin(e.data),r.redirect()):r.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},r.redirect=function(){r.props.history.push("/")},r.handleErrors=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:r.state.errors.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})})},r.state={user:[],email:"",password:"",errors:""},r}return Object(d.a)(n,[{key:"componentWillMount",value:function(){return this.props.loggedInStatus?this.redirect():null}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log In"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{placeholder:"email",type:"text",name:"email",value:t,onChange:this.handleChange}),Object(a.jsx)("input",{placeholder:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("button",{placeholder:"submit",type:"submit",children:"Log In"}),Object(a.jsxs)("div",{children:["or ",Object(a.jsx)(g.b,{to:"/signup",children:"sign up"})]})]}),Object(a.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})}}]),n}(r.Component),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState(Object(w.a)({},n,a))},r.handleSubmit=function(e){e.preventDefault();var t=r.state,n={first_name:t.first_name,last_name:t.last_name,email:t.email,password:t.password,password_confirmation:t.password_confirmation};p.a.post("/users",{user:n},{withCredentials:!0}).then((function(e){"created"===e.data.status?(r.props.handleLogin(e.data),r.redirect()):r.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},r.redirect=function(){r.props.history.push("/")},r.handleErrors=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:r.state.errors.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})})},r.state={first_name:"",last_name:"",email:"",password:"",password_confirmation:"",errors:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.first_name,n=e.last_name,r=e.email,s=e.password,o=e.password_confirmation;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{placeholder:"first_name",type:"text",name:"first_name",value:t,onChange:this.handleChange}),Object(a.jsx)("input",{placeholder:"last_name",type:"text",name:"last_name",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{placeholder:"email",type:"text",name:"email",value:r,onChange:this.handleChange}),Object(a.jsx)("input",{placeholder:"password",type:"password",name:"password",value:s,onChange:this.handleChange}),Object(a.jsx)("input",{placeholder:"password confirmation",type:"password",name:"password_confirmation",value:o,onChange:this.handleChange}),Object(a.jsx)("button",{placeholder:"submit",type:"submit",children:"Sign Up"})]}),Object(a.jsx)("div",{children:this.state.errors?this.handleErrors():null})]})}}]),n}(r.Component),_=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).loginStatus=function(){p.a.get("/logged_in",{withCredentials:!0}).then((function(e){console.log(e),e.data.logged_in?a.handleLogin(e.data):a.handleLogout()})).catch((function(e){return console.error("api errors:",e)}))},a.handleLogin=function(e){a.setState({isLoggedIn:!0,user:e.user})},a.handleLogout=function(){a.setState({isLoggedIn:!1,user:{}})},a.state={isLoggedIn:!1,user:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/Home",render:function(t){return Object(a.jsx)(V,Object(l.a)(Object(l.a)({},t),{},{handleLogout:e.handleLogout,user:e.state.user,loggedInStatus:e.state.isLoggedIn}))}}),Object(a.jsx)(m.a,{exact:!0,path:"/login",render:function(t){return Object(a.jsx)(Z,Object(l.a)(Object(l.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),Object(a.jsx)(m.a,{exact:!0,path:"/signup",render:function(t){return Object(a.jsx)(W,Object(l.a)(Object(l.a)({},t),{},{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}})]})})})}}]),n}(r.Component);c.a.render(Object(a.jsx)(i.ActionCableProvider,{url:"ws:/cable",children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[485,1,2]]]);
//# sourceMappingURL=main.704920cd.chunk.js.map