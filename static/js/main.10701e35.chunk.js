(this.webpackJsonptasker=this.webpackJsonptasker||[]).push([[0],{56:function(e,t,a){e.exports=a(83)},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(61),a(55)),s=a(8),i=a(90),u=a(89),m=(a(62),a(7)),d=function(e){return{type:"GET_ALL_USER_TASKS",payload:e}};function f(){var e=Object(m.c)((function(e){return e.isLogged})),t=Object(m.b)();return r.a.createElement(i.a,{bg:"primary",variant:"dark"},r.a.createElement(i.a.Brand,{href:"#/home"},"Tasker"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{href:"#/"},"Home"),r.a.createElement(u.a.Link,{href:"#/Tasks"},"Tasks")),r.a.createElement(u.a.Link,{href:"",onClick:function(){return t({type:"SIGN_IN"})},className:"navLink"},"Log Out")):r.a.createElement(i.a.Collapse,{className:"justify-content-end"},r.a.createElement(u.a.Link,{href:"#/SignIn",className:"navLink"},"Sign In"),r.a.createElement(u.a.Link,{href:"#/SignUp",className:"navLink"},"Sign Up")))}var g=a(9),E=a(85);a(68);function p(){var e=Object(m.c)((function(e){return e.isLogged})),t=Object(m.c)((function(e){return e.saveUserInStore})),a=Object(m.c)((function(e){return e.allUserTasks})),c=Object(n.useState)(0),l=Object(g.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(0),u=Object(g.a)(i,2),d=u[0],f=u[1],p=Object(n.useState)(0),h=Object(g.a)(p,2),b=h[0],v=h[1];return Object(n.useEffect)((function(){return function(){s(a.length);var e=0,t=0;a.map((function(a){console.log(a),a.completed?e++:t++})),f(e),v(t)}()}),[]),r.a.createElement("div",null,e?r.a.createElement("div",{className:"mainInfoBlock"},r.a.createElement("div",{className:"infoBlock"},r.a.createElement("h1",null,"Welcome back ",t.name," ",t.lastname,"!"),r.a.createElement("h2",null,"You have ",o," tasks:",r.a.createElement("br",null),r.a.createElement("div",{className:"lime"},d," - completed"),"and",r.a.createElement("div",{className:"yellow"},b," - in progress")),r.a.createElement("br",null),r.a.createElement(E.a,{type:"allert"},"Show my tasks"))):r.a.createElement("h1",{align:"center"},"Please sign in"))}var h=a(27),b=a(43),v=a.n(b);v.a.initializeApp({apiKey:"AIzaSyD1LAf3dzSq_SHuYb2qcWViMYJTXCJZDEM",authDomain:"tasker-92659.firebaseapp.com",databaseURL:"https://tasker-92659.firebaseio.com",projectId:"tasker-92659",storageBucket:"tasker-92659.appspot.com",messagingSenderId:"793570878669",appId:"1:793570878669:web:520dc0a5b1dc5011187584"});var S=v.a.firestore(),O=function(e,t,a,n){return new Promise((function(r,c){S.collection(e).where(t,a,n).get().then((function(e){var t=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())}));r(t)})).catch((function(e){c(e)}))}))};function j(){var e=Object(m.c)((function(e){return e.saveUserInStore})),t=Object(m.b)(),a=Object(n.useState)(""),c=Object(g.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),i=Object(g.a)(s,2),u=i[0],f=i[1],E=function(){O("todos","userId","==",e.id).then((function(e){console.log(e),t(d(e))}),(function(e){console.log(e)}))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),console.log("Title - ".concat(l,". Deskribe - ").concat(u,"."));var n={title:l,deskribe:u,userId:e.id};t({type:"ADD_TASK",payload:n}),function(e,t,a){S.collection("todos").doc().set({userId:e,title:t,deskribe:a}).then((function(){console.log("Task successfully added!")})).catch((function(e){console.error("Error adding task: ",e)}))}(e.id,l,u),E()}},r.a.createElement("input",{type:"text",placeholder:"task title",value:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"task deskribe",value:u,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Add new task")))}var k=a(86);function y(){var e=Object(m.c)((function(e){return e.saveUserInStore})),t=Object(m.c)((function(e){return e.allUserTasks})),a=Object(m.b)();Object(n.useEffect)((function(){S.collection("todos").where("userId","==",e.id).get().then((function(e){var t=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())}));a(d(t))})).catch((function(e){console.log("error getting doc:",e)}))}),[]);var c=function(){O("todos","userId","==",e.id).then((function(e){console.log(e),a(d(e))}),(function(e){console.log(e)}))};return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"Tasks"),console.log(t),r.a.createElement(j,null),r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Deskribe"),r.a.createElement("th",null,"Delete task"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.deskribe),r.a.createElement("td",null,r.a.createElement(E.a,{variant:"danger",value:e.id,onClick:function(e){return t=e.target.value,void S.collection("todos").doc(t).delete().then((function(){console.log("Task successfully deleted!"),c()})).catch((function(e){console.error("Error removing task: ",e)}));var t}},"Delete")))})))))}var w=a(88),I=a(91);a(80);function L(e){var t=Object(m.c)((function(e){return e.isLogged})),a=Object(m.c)((function(e){return e.saveUserInStore})),c=Object(m.b)(),l=Object(n.useState)(null),o=Object(g.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(!1),d=Object(g.a)(u,2),f=d[0],p=d[1],b=Object(n.useState)(!1),v=Object(g.a)(b,2),O=v[0],j=v[1],k=Object(n.useState)(null),y=Object(g.a)(k,2),L=y[0],T=y[1],U=Object(n.useState)(null),N=Object(g.a)(U,2),C=N[0],_=N[1];return r.a.createElement("div",null,console.log(s),t?r.a.createElement("h1",{align:"center"},"You already logged as ",a.name," ",a.lastname):r.a.createElement(w.a,{className:"signIn",onSubmit:function(e){e.preventDefault(),console.log("try to sign in...",L,C),function(e){S.collection("Users").where("email","==",e).get().then((function(e){var t=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())}));i(t),t.length>0?(console.log("user finded"),t[0].password===C?(console.log("good password"),console.log(t),c({type:"SIGN_IN"}),c(function(e){return{type:"SAVE_USER_IN_STORE",payload:e}}(t[0]))):(j(!0),setTimeout((function(){j(!1)}),3e3))):(console.log("user not finded"),p(!0),setTimeout((function(){p(!1)}),3e3))})).catch((function(e){console.log("error getting doc:",e)}))}(L)}},r.a.createElement("h1",{align:"center"},"Sign In"),f?r.a.createElement(I.a,{variant:"danger"},"User with that email not found!"):"",r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){T(e.target.value)}})),O?r.a.createElement(I.a,{variant:"danger"},"Wrong password!"):"",r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",onChange:function(e){_(e.target.value)}})),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")))}var T=a(87),U=a(54);a(81);function N(){var e=Object(m.c)((function(e){return e.isLogged})),t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(g.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(""),f=Object(g.a)(d,2),p=f[0],h=f[1],b=Object(n.useState)(null),v=Object(g.a)(b,2),j=v[0],k=v[1],y=Object(n.useState)(null),L=Object(g.a)(y,2),N=L[0],C=L[1],_=Object(n.useState)(!0),A=Object(g.a)(_,2),D=A[0],B=A[1],G=Object(n.useState)(!0),P=Object(g.a)(G,2),x=P[0],R=P[1],J=function(){return j===N&&null!==j&&null!==N},K=function(){O("Users","email","==",p).then((function(e){e.length>0?(B(!1),setTimeout((function(){B(!0)}),3500)):J()&&(console.log("registring new user"),function(e,t,a,n){S.collection("Users").doc().set({name:e,lastName:t,email:a,password:n}).then((function(){console.log("User successfully added!")})).catch((function(e){console.error("Error adding user: ",e)}))}(c,i,p,j),window.location.hash="#/SignIn")})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",null,e?r.a.createElement("h1",null,"You already logged in"):r.a.createElement(w.a,{className:"signIn",onSubmit:function(e){e.preventDefault(),console.log("Sign Up User - ".concat(c," ").concat(i," with email ").concat(p," and pasword ").concat(j)),J()?console.log("pass much"):(console.log("pass not mucth"),R(!1),setTimeout((function(){R(!0)}),3500)),K()}},r.a.createElement("h1",{align:"center"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(T.a,null,r.a.createElement(U.a,null,r.a.createElement(w.a.Label,null,"First name"),r.a.createElement(w.a.Control,{placeholder:"First name",type:"text",onChange:function(e){l(e.target.value)}})),r.a.createElement(U.a,null,r.a.createElement(w.a.Label,null,"Last name"),r.a.createElement(w.a.Control,{placeholder:"Last name",type:"text",onChange:function(e){u(e.target.value)}}))),r.a.createElement("br",null),D?"":r.a.createElement(I.a,{variant:"danger"},"User with this email already registred!"),r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){h(e.target.value)}})),x?"":r.a.createElement(I.a,{variant:"danger"},"Password didn't mutch!"),r.a.createElement(T.a,null,r.a.createElement(U.a,null,r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",onChange:function(e){k(e.target.value)}}))),r.a.createElement(U.a,null,r.a.createElement(w.a.Group,{controlId:"formBasicPassword2"},r.a.createElement(w.a.Label,null,"Submit password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Type a password again",onChange:function(e){C(e.target.value)}})))),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")))}var C=function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement(s.a,{path:"/",component:f}),r.a.createElement(s.a,{exact:!0,path:"/",component:p}),r.a.createElement(s.a,{exact:!0,path:"/Tasks",component:y}),r.a.createElement(s.a,{exact:!0,path:"/SignIn",component:L}),r.a.createElement(s.a,{exact:!0,path:"/SignUp",component:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(24),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return e=t.payload;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_USER_IN_STORE":return e=t.payload;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USER_TASKS":return e=t.payload;default:return e}},P=Object(_.b)({addNewTask:A,isLogged:D,saveUserInStore:B,allUserTasks:G});var x=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),R=Object(_.c)(P,x);R.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(R.getState())}));var J=R;l.a.render(r.a.createElement(m.a,{store:J},r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.10701e35.chunk.js.map