(this["webpackJsonplogin-auth"]=this["webpackJsonplogin-auth"]||[]).push([[0],{22:function(e,a,t){},32:function(e,a,t){e.exports=t(58)},37:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(29),s=t.n(c),i=t(5),o=(t(37),t(3)),l=t.n(o),m=t(18),u=t(6),d=t(11),h=t(12),p=t(13),g=t(14),f=t(7),E=(t(39),t(9)),v=t.n(E),b=(t(40),t(43),function(){var e=Object(u.a)(l.a.mark((function e(a,t){var n,r,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(a.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=a.displayName,c=a.email,s=a.photoURL,i=new Date,e.prev=9,e.next=12,n.set(Object(m.a)({displayName:r,email:c,createdAt:i,photoURL:s},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user,",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(a,t){return e.apply(this,arguments)}}());v.a.initializeApp({apiKey:"AIzaSyDAqn0iAl8Px9xO7NuBUrNJ4EJ9Bcukr78",authDomain:"login-auth-git.firebaseapp.com",databaseURL:"https://login-auth-git.firebaseio.com",projectId:"login-auth-git",storageBucket:"login-auth-git.appspot.com",messagingSenderId:"822924112792",appId:"1:822924112792:web:090f5284ccb158445ab1ed",measurementId:"G-SXDTCF401J"});var N=v.a.auth(),y=v.a.firestore(),w=new v.a.auth.GoogleAuthProvider,k=new v.a.auth.FacebookAuthProvider;w.setCustomParameters({prompt:"select_account"}),k.setCustomParameters({display:"popup"});var C=function(){return N.signInWithPopup(w)},x=function(){return N.signInWithPopup(k)},O=(v.a,t(8)),j=t.n(O),S=(t(22),t(45),function(e){var a=e.displayName,t=e.photoURL;return r.a.createElement("div",{className:"my-form"},r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:t,className:"image current-user-image",alt:"current user"}),r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"Hello, ",a)),r.a.createElement("div",{className:"ui message"},r.a.createElement("p",null,"Thanks for signing in,"),r.a.createElement("p",null,"more info coming soon."),r.a.createElement(i.b,{to:"/",onClick:function(){return N.signOut()}},"sign out"))))}),P=t(10),A=t(19),I=(t(50),function(e){var a=e.handleChange,t=e.icon,n=Object(A.a)(e,["handleChange","icon"]);return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:t}),r.a.createElement("input",Object.assign({onChange:a},n))))}),U=(t(51),t(52),function(e){var a=e.children,t=(e.color,e.control),n=Object(A.a)(e,["children","color","control"]);return r.a.createElement("button",Object.assign({},n,{className:"".concat(t," customButton")}),r.a.createElement("span",null,a))}),L=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,r=a.value;n.setState(Object(P.a)({},t,r))},n.handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(a){var t,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=n.state,r=t.email,c=t.password,e.prev=2,e.next=5,N.signInWithEmailAndPassword(r,c);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(a){return e.apply(this,arguments)}}(),n.state={email:"",password:""},n}return Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"my-form"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("img",{src:j.a,className:"image",alt:"coding logo"}),r.a.createElement("div",{className:"content"},"Log-in to your account")),r.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement(I,{icon:"user icon",name:"email",type:"email",placeholder:"E-mail address",value:this.state.email,handleChange:this.handleChange,required:!0}),r.a.createElement(I,{icon:"lock icon",name:"password",type:"password",placeholder:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"sign-in-buttons"},r.a.createElement(U,{type:"submit",control:"primary"},r.a.createElement("i",{className:"address book outline icon"})," Sign In With Email"),r.a.createElement(U,{type:"button",control:"google",onClick:C},r.a.createElement("i",{className:"google plus icon"})," Sign In With Google"),r.a.createElement(U,{type:"button",control:"facebook",onClick:x},r.a.createElement("i",{className:"facebook icon"})," Sign In With Facebook"))),r.a.createElement("div",{className:"ui error message"})),r.a.createElement("div",{className:"ui message"},"New to us? Sign up with ",r.a.createElement(i.b,{to:"/sign-up"},"email."))))}}]),t}(r.a.Component),W=(t(53),function(){return r.a.createElement(L,null)}),q=(t(54),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,r=a.value;n.setState(Object(P.a)({},t,r))},n.handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(a){var t,r,c,s,i,o,m,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=n.state,r=t.firstName,c=t.lastName,s=t.email,i=t.password,o=t.confirmPassword,m="".concat(r," ").concat(c),i===o){e.next=6;break}return alert("Passwords do not match."),e.abrupt("return");case 6:return e.prev=6,e.next=9,N.createUserWithEmailAndPassword(s,i);case 9:return u=e.sent,d=u.user,e.next=13,b(d,{displayName:m});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(a){return e.apply(this,arguments)}}(),n.handleCancel=function(){n.setState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})},n.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},n}return Object(h.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"my-form"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("img",{src:j.a,className:"image",alt:"coding logo"}),r.a.createElement("div",{className:"content"},"Create your account")),r.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement(I,{icon:"user icon",name:"firstName",type:"text",placeholder:"First Name",value:this.state.firstName,handleChange:this.handleChange,required:!0}),r.a.createElement(I,{icon:"user icon",name:"lastName",type:"text",placeholder:"Last Name",value:this.state.lastName,handleChange:this.handleChange,required:!0}),r.a.createElement(I,{icon:"user icon",name:"email",type:"email",placeholder:"Email",value:this.state.email,handleChange:this.handleChange,required:!0}),r.a.createElement(I,{icon:"lock icon",name:"password",type:"password",placeholder:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),r.a.createElement(I,{icon:"lock icon",name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:this.state.confirmPassword,handleChange:this.handleChange,required:!0}),r.a.createElement("span",{className:"buttons"},r.a.createElement(U,{type:"submit",control:"primary"},"Create"),r.a.createElement(U,{type:"button",control:"secondary",onClick:this.handleCancel},"Cancel"))),r.a.createElement("div",{className:"ui error message"})),r.a.createElement("div",{className:"ui message"},"Already have an account? ",r.a.createElement(i.b,{to:"/sign-in"},"Sign In"))))}}]),t}(r.a.Component)),D=(t(55),function(){return r.a.createElement(q,null)}),F=(t(56),function(){return r.a.createElement("div",null,r.a.createElement("p",null,"This page does not exist."))}),R=(t(57),function(){return r.a.createElement("div",{className:"my-form"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("img",{src:j.a,className:"image",alt:"coding logo"}),r.a.createElement("div",{className:"content"},"Loading..."))))}),B=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).unsubscribeFromAuth=null,e.state={loading:!0},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=N.onAuthStateChanged(function(){var a=Object(u.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return n=b(t),a.next=4,n;case 4:a.sent.onSnapshot((function(a){e.setState({currentUser:Object(m.a)({id:a.id},a.data())})}));case 5:e.setState({currentUser:t}),setTimeout((function(){return e.setState({loading:!1})}),200);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement("div",{className:"App"},this.state.loading&&!e?r.a.createElement(R,null):r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(a){var t=a.location;return e?r.a.createElement(S,{displayName:e.displayName,photoURL:e.photoURL}):r.a.createElement(f.a,{to:{pathname:"/sign-in",state:{from:t}}})}}),r.a.createElement(f.b,{path:"/sign-in",render:function(a){var t=a.location;return e?r.a.createElement(f.a,{to:{pathname:"/",state:{from:t}}}):r.a.createElement(W,null)}}),r.a.createElement(f.b,{path:"/sign-up",render:function(a){var t=a.location;return e?r.a.createElement(f.a,{to:{pathname:"/",state:{from:t}}}):r.a.createElement(D,null)}}),r.a.createElement(f.b,{component:F})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(i.a,{basename:"/"},r.a.createElement(B,null)),document.getElementById("root"))},8:function(e,a,t){e.exports=t.p+"static/media/logo.bb33c1bf.svg"}},[[32,1,2]]]);
//# sourceMappingURL=main.761cfa05.chunk.js.map