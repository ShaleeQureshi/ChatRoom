(this["webpackJsonpclient-main"]=this["webpackJsonpclient-main"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a,c=n(2),r=n.n(c),s=n(23),o=n.n(s),i=n(16),l=(Object(i.a)(),n(42)),j=n(12),u=(n(61),n(62),n(63),n(64),n(65),n(66),n(47)),A=n(13),d=A.a.initializeApp({apiKey:"AIzaSyBxdBea8uaApKCRbbpSOQczvxJz-RNjN-w",authDomain:"chatapp-6786d.firebaseapp.com",projectId:"chatapp-6786d",storageBucket:"chatapp-6786d.appspot.com",messagingSenderId:"92132500873",appId:"1:92132500873:web:89cddb7a80500dacc86d58"}),h=n(28),b=n(29),m=n(34),p=n(32),O=n(50),x=n(43),f=n(51),v=n.n(f),g=n(3),C=Object(x.css)(a||(a=Object(O.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"]))),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"sweet-loading",children:Object(g.jsx)(v.a,{css:C,size:50,color:"#123abc",loading:this.state.loading})})}}]),n}(r.a.Component),y=r.a.createContext(),R=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!0),i=Object(u.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){d.auth().onAuthStateChanged((function(e){e&&(A.a.auth().setPersistence(A.a.auth.Auth.Persistence.LOCAL),console.log(e),s(e)),j(!1)}))}),[]),l?Object(g.jsx)(w,{}):Object(g.jsx)(y.Provider,{value:{currentUser:r},children:t})},N=n(37),B=n(56),k=n(86),E=n(85),M=function(){return Object(g.jsx)(E.a,{fluid:!0,className:"text-center footer",children:Object(g.jsxs)("div",{className:"pt-5 pb-3",children:[Object(g.jsx)("a",{href:"https://www.linkedin.com/in/shahrukh-qureshi-a735031b1",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAQAAACpiKIyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCxwCLigRKF+6AAACf0lEQVRIx+2VTWtdVRiFn/Xue3MTiKZNP6B26EBRnLQUFOwfsOBQRJz4Axz5A0Rw4g8QEUTBSQtqB6WCglAzcaB0UOigIqEforFp0xuTJic35553OWijaXsv5kgHDu4avZu198Pae7/nbJhooon+JzKWlXLJMpCVOviYwLqHNslQ7yq5qLaMGBNZGPMSJ+xzRjf9WMAWovhz/8CP+dHLgfqtE48OXEy+YOcwm9qfvpjcCVqiRybeMtruu1JRbFVfzFRKzmOlUlaGI1XLGup6y8Qshrn0xu+/XFt8732egs+iCsetWC4uxiTZ6WtIrVYbuQoyhkM8y/59gUxi/uAGxvt8JHvJJS5qyGobcgbkAX/rC77g89/Nb0eeyYVcqE//eizP5lL2c7H54Mq0VWuFFqffxBENj6bT6Q2/fsLK5bS93VQrtn3PGXz9SW8zLo/Bjm43lmyzRpKuNjqGNaWH3ZieX1vZGAiSuvvKybdO5zNldOLRH8iOFwpFWFAcyHx/7tibb7+6/BNh5O6pd9TJJ0Yu7vx7h/ydqGxuvPbhrYWPB+uzh74SVs6tTlPNa71l4ockmua52wz2x9NrgIRFQTny+lqAAYZGx527V435i7QEJ13j3bBxvdYSDPUe5427PGE3pHHasFPveGQ2ivvjvYMFpsQcwPTMlCDmCOjNdgCsKUXpQW8Gj9v0SHBlpLs3ztw+Gnm3uTqE3768+Xzkn1tLCai5fu2b1V638/MVurDOmHCPyki1u1McpKGw5TsqHMYEm6wiW7M8SRL0qRB7fV8sqGX9M3Y86Pu/vSiHQWZKRUVFCHq7anRcXRUVxf3xno/iEc8P1A97E000UVv9BegeP3qUeS5WAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTExLTI4VDAyOjQ2OjM2KzAwOjAwKfJWMwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMS0yOFQwMjo0NjozNiswMDowMFiv7o8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",alt:"LinkedIn"})}),Object(g.jsx)("a",{href:"https://github.com/ShaleeQureshi",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBh0BAyR63lTzAAAEGElEQVRIx3WVT2hcVRTGf/e8OzMvb5LRJjXEjNW6EP/VpgULVitFpVK1VCmCKxFBUKHdFEQR3FhxIVRBu3QjaLtQalelWLuwtIK2IDZC04Yuqplo0ySYSeblzcy797h40/mTxPNW995zvnPu9913jgGACqBgRAJf16WR6Hm7y44Fo2YAdNFNp7+np+OTpX9yxon3qgZDGQADMI0CiKHp04cKBwv7wnV5tUYydDypNkwyn3zfOBxczotiPCjlDGAaD2hwzY1E0UfRgX5bAI8irQQKeAxSZymNP699cD1+OBAHUMZUshxB7HL3h9+VNhUdSpBVtsIUh6kF1fHk5ebVqAVhKoAPlp3dFp0cXJ9Ls2BdA0EBo7imnb8Zv5BeCANxYKZQWfb2gejs0B02xdK+t+kB6VqnqZ2biXemE31ivKiZ8loMjw32hMcAuIxcFIfQpJ4dWpsODodHffSnVyMiI/QdKm3JNW+FK/Au75ASAIoCARVe4WvAAdhcs7Q1+vBORGzsZPPA/iKdcINjil8RRrlIE0OR7ZzmPFs6N7JFkgMLX8XjNsTsL+Zol2/wBGxgkh9YJoegeM4xwBD3dAAMaTG/vJ83pVYuvBhC0OFa+JsrWELWUaSPiH7WYREu0OUYhIQvxWUJd4fD+A7hHjjOJCEOh299DkeRH/ml5ZGVGg4Xdot9Jk+L7PbbnqRwy42VJ13Omsc+LXbM0i24AZbWfIjgqfYgWuyYBGXhf/zXrKF7aQjKYgZ6TzwwikPWDN+wAoDSaj9gL0KK7cI15FjkbnbCCmjRRXpIDFAe5T1i/qXRljZhltv5mFK3YKpQta7ib5PWz+cRLnGW13mNTRzjMjMoSp6NbONVyvju/KrGVZg6WldNtcve0jc02/pZH9FtOqa7dF5VnTrtsbSuU99IeqbRRaICnzDOIRaB8yQY8lSYbNXXy2qD9IxNTiUz/cO3OojBMcD7vM1xSixQwiEoyWoRFUlu1E9JsVI/kbT+0oxEz16+5Unu414cgsGsISouoX4impaE+pFaA9tRQlAe5zO+5CmqgG83lp78ttaoH0mQKJDx+EgN0u4n4/GAoY8CBcLVFaQ14i/kjygwf5nruj4qnVu/NdfV0jKrUkUAZYiwJ7xpZ39b3DETbzSdpvrT0LBdBbGmpamduxHvbF6JRLyA8WGQTsR75m42LWn3dRWPtrpieytt2rmb8Z70ShSIBzEYrOsLmhfiHbPjNYvvgJiWBqYdjK/Z2UvxE82Lfa3BIuVMUhcFk1cXHpv/dM7XLQaPw7e7erYydTvn5w8vbJ+YjILAGZRyBl4BDCpQ9/7BwsFwXzi41nCtH08O24m8KHhQ7uo8rwqKYoxI4Ju6NBI+Z5+1m4NRSkA1G+/Jyf4b2XhHDbTG+3/h2ffAuoZOxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0yOVQwMTowMzozNi0wNzowMAh3eAMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMjlUMDE6MDM6MzYtMDc6MDB5KsC/AAAAAElFTkSuQmCC",alt:"LinkedIn"})}),Object(g.jsx)("hr",{id:"underline"}),Object(g.jsx)("p",{children:"\xa9 2021 - Shahrukh Qureshi"})]})})},I=function(e){var t=e.history,n=e.previousRoute,a=Object(c.useContext)(y).currentUser;a&&"undefined"===typeof n?t.push("/home"):a&&"undefined"!==typeof n&&t.push(n);return Object(g.jsxs)("div",{className:"bg",children:[Object(g.jsx)("div",{className:"wrapper",children:Object(g.jsxs)("div",{className:"center text-center landing-txt",children:[Object(g.jsx)("h1",{children:"Welcome to Shahrukh's Chat App"}),Object(g.jsx)(k.a,{onClick:function(){A.a.auth().signInWithPopup(new A.a.auth.GoogleAuthProvider)},variant:"outline-dark",className:"w-50 mt-2",id:"button-landing",children:"Sign in with Google"})]})}),Object(g.jsx)(M,{})]})},Q=function(e){var t=e.component,n=Object(B.a)(e,["component"]),a=Object(c.useContext)(y).currentUser;return Object(g.jsx)(j.a,Object(N.a)(Object(N.a)({},n),{},{render:function(e){return a?Object(g.jsx)(t,Object(N.a)({},e)):Object(g.jsx)(I,{previousRoute:window.location.href})}}))},S=n(87),V=n(55),F=n(88),G=n(90),L=n(89),U=n(91),D=function(e){e.history;return Object(g.jsxs)(L.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(g.jsx)(L.a.Brand,{children:"ChatRoom"}),Object(g.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(L.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(U.a,{className:"mr-auto",children:[Object(g.jsx)(U.a.Link,{href:"/ChatRoom#/home",children:"Home"}),Object(g.jsx)(U.a.Link,{href:"/ChatRoom#/room/All-Chat",children:"All-Chat"})]}),Object(g.jsx)(U.a,{children:Object(g.jsx)(U.a.Link,{onClick:function(){A.a.auth().signOut(),window.location.replace("/")},children:"Sign Out"})})]})]})},W=function(e){var t=e.history;Object(c.useEffect)((function(){a()}));var n=Object(c.useContext)(y).currentUser,a=function(){A.a.database().ref("/user/".concat(n.uid,"/rooms")).on("value",(function(e){var t=e.val();try{for(var n=0;n<Object.keys(t).length;n++)r(Object.values(t)[n].room)}catch(a){r("You don't have any chats yet :(")}}))},r=function(e){document.getElementsByTagName("table")[0].insertRow(document.getElementsByTagName("table")[0].rows.length).insertCell(0).innerHTML=e};return Object(g.jsxs)("div",{className:"bg",children:[Object(g.jsx)(D,{}),Object(g.jsx)(E.a,{className:"wrapper",children:Object(g.jsxs)(S.a,{className:"mt-5",children:[Object(g.jsx)(V.a,{sm:8,children:Object(g.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:Object(g.jsx)("th",{children:"Chats"})})}),Object(g.jsx)("tbody",{})]})}),Object(g.jsx)(V.a,{sm:4,children:Object(g.jsxs)(G.a,{onSubmit:function(e){e.preventDefault();var a=document.getElementById("roomID").value;A.a.database().ref("/user/".concat(n.uid,"/rooms/").concat(a)).update({room:a}).then((function(){t.push("/room/".concat(a))})).catch((function(e){alert(e)}))},children:[Object(g.jsxs)(G.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(G.a.Label,{children:"Start Chatting"}),Object(g.jsx)(G.a.Control,{type:"text",id:"roomID"})]}),Object(g.jsx)(k.a,{variant:"success",type:"submit",children:"Let's Go"})]})})]})}),Object(g.jsx)(M,{})]})},z=n(25),J=n.n(z),T=n(46),Y=n(30),Z=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={chat:[]},a.sendMessage=a.sendMessage.bind(Object(Y.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(J.a.mark((function e(){var t=this;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{A.a.database().ref("/room/".concat(this.props.roomID)).on("value",(function(e){var n=[];e.forEach((function(e){n.push(e.val())})),t.setState({chat:n})}))}catch(n){alert(n)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=Object(T.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,""===(n=document.getElementById("text").value)){e.next=9;break}return e.next=6,A.a.database().ref("/room/".concat(this.props.roomID)).push({content:n,time:Date.now(),uid:A.a.auth().currentUser.uid,email:A.a.auth().currentUser.email});case 6:document.getElementById("text").value="",e.next=10;break;case 9:alert("You haven't typed anything!");case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),alert(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("section",{className:"text-center pt-5",id:"room-header",children:[Object(g.jsx)("h1",{children:"Welcome to the Chat Room"}),Object(g.jsx)(k.a,{className:"w-50",variant:"outline-dark",onClick:function(){try{navigator.clipboard.writeText(window.location.href),alert("Link to ChatRoom copied!")}catch(e){alert(e)}},children:"Share Room"}),Object(g.jsx)(k.a,{className:"w-50",variant:"outline-dark",onClick:function(){"All-Chat"!==e.props.roomID?A.a.database().ref("/room/".concat(e.props.roomID)).remove().then((function(){A.a.database().ref("/user/".concat(e.props.currentUser.uid,"/rooms/").concat(e.props.roomID)).remove().then((function(){alert("Room deleted!"),window.location.replace("/home")}))})).catch((function(e){alert(e)})):alert("All-Chat cannot be deleted!")},children:"Delete Room"})]}),Object(g.jsxs)("section",{className:"mt-5 ",children:[Object(g.jsx)("div",{className:"message-form ",children:this.state.chat.map((function(e){return e.uid!==A.a.auth().currentUser.uid?Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:[e.content,Object(g.jsx)("br",{}),Object(g.jsxs)("span",{id:"sender",children:["Sent by: ",e.email]})]})},e.time):Object(g.jsx)("span",{children:Object(g.jsxs)("p",{id:"sender-me",children:[e.content,Object(g.jsx)("br",{}),Object(g.jsx)("span",{id:"sender",children:"Sent by: YOU"})]})},e.time)}))}),Object(g.jsxs)(G.a,{onSubmit:this.sendMessage,className:"sticky-bottom msg-box mt-2",children:[Object(g.jsx)(G.a.Group,{children:Object(g.jsx)(G.a.Control,{type:"text",placeholder:"Enter message",id:"text"})}),Object(g.jsx)(k.a,{variant:"success",type:"submit",className:"w-100",children:"Send"})]})]})]})}}]),n}(r.a.Component),K=function(e){var t=Object(c.useContext)(y).currentUser;return Object(g.jsxs)("div",{className:"bg",children:[Object(g.jsx)(D,{}),Object(g.jsx)(E.a,{className:"wrapper",children:Object(g.jsx)(Z,{roomID:e.match.params.roomID,currentUser:t})}),Object(g.jsx)(M,{})]})};var P=function(){return Object(g.jsx)(R,{children:Object(g.jsx)(l.a,{basename:"/ChatRoom/",children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:["/","sign-in","signin","login"],exact:!0,component:I}),Object(g.jsx)(Q,{path:["/home","/index"],exact:!0,component:W}),Object(g.jsx)(Q,{path:"/room/:roomID",exact:!0,component:K})]})})})};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.4de3d9aa.chunk.js.map