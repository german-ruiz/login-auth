(this["webpackJsonplogin-auth"]=this["webpackJsonplogin-auth"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.bb33c1bf.svg"},,,,,,,,,,,,,function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),i=t.n(r),l=t(5),s=(t(33),t(6)),o=t(7),m=t(8),u=t(9),h=t(4),d=(t(34),t(35),function(){return c.a.createElement("div",null,c.a.createElement("p",null," Home page "))}),p=t(14),g=t(16),f=(t(36),function(e){var a=e.handleChange,t=e.icon,n=Object(g.a)(e,["handleChange","icon"]);return c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"ui left icon input"},c.a.createElement("i",{className:t}),c.a.createElement("input",Object.assign({onChange:a},n))))}),E=t(15),b=t.n(E),v=(t(37),t(38),t(39),function(e){var a=e.children,t=(e.color,e.control),n=Object(g.a)(e,["children","color","control"]);return c.a.createElement("button",Object.assign({},n,{className:"".concat(t," customButton")}),a)}),N=t(10),C=t.n(N);t(40),t(43);C.a.initializeApp({apiKey:"AIzaSyDAqn0iAl8Px9xO7NuBUrNJ4EJ9Bcukr78",authDomain:"login-auth-git.firebaseapp.com",databaseURL:"https://login-auth-git.firebaseio.com",projectId:"login-auth-git",storageBucket:"login-auth-git.appspot.com",messagingSenderId:"822924112792",appId:"1:822924112792:web:090f5284ccb158445ab1ed",measurementId:"G-SXDTCF401J"});var y=C.a.auth(),w=(C.a.firestore(),new C.a.auth.GoogleAuthProvider);w.setCustomParameters({prompt:"select_account"});var S=function(){return y.signInWithPopup(w)},k=(C.a,function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,c=a.value;n.setState(Object(p.a)({},t,c))},n.handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.state={email:"",password:""},n}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sign-in-sign-up-form"},c.a.createElement("div",{className:"column"},c.a.createElement("h2",{className:"ui teal image header"},c.a.createElement("img",{src:b.a,className:"image",alt:"coding logo"}),c.a.createElement("div",{className:"content"},"Log-in to your account")),c.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"ui stacked segment"},c.a.createElement(f,{icon:"user icon",name:"email",type:"email",placeholder:"E-mail address",value:this.state.email,handleChange:this.handleChange,required:!0}),c.a.createElement(f,{icon:"lock icon",name:"password",type:"password",placeholder:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),c.a.createElement("div",{className:"sign-in-buttons"},c.a.createElement(v,{type:"submit",control:"primary"},c.a.createElement("i",{className:"address book outline icon"})," Sign In With Email"),c.a.createElement(v,{type:"button",control:"google",onClick:S},c.a.createElement("i",{className:"google plus icon"})," Sign In With Google"),c.a.createElement(v,{type:"button",control:"facebook"},c.a.createElement("i",{className:"facebook icon"})," Sign In With Facebook"))),c.a.createElement("div",{className:"ui error message"})),c.a.createElement("div",{className:"ui message"},"New to us? ",c.a.createElement(l.b,{to:"/sign-up"},"Sign Up"))))}}]),t}(c.a.Component)),j=(t(49),function(){return c.a.createElement(k,null)}),O=(t(50),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,c=a.value;n.setState(Object(p.a)({},t,c))},n.handleSubmit=function(e){e.preventDefault(),n.setState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})},n.handleCancel=function(){n.setState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})},n.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},n}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sign-in-sign-up-form"},c.a.createElement("div",{className:"column"},c.a.createElement("h2",{className:"ui teal image header"},c.a.createElement("img",{src:b.a,className:"image",alt:"coding logo"}),c.a.createElement("div",{className:"content"},"Create your account")),c.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"ui stacked segment"},c.a.createElement(f,{icon:"user icon",name:"firstName",type:"text",placeholder:"First Name",value:this.state.firstName,handleChange:this.handleChange,required:!0}),c.a.createElement(f,{icon:"user icon",name:"lastName",type:"text",placeholder:"Last Name",value:this.state.lastName,handleChange:this.handleChange,required:!0}),c.a.createElement(f,{icon:"user icon",name:"email",type:"email",placeholder:"Email",value:this.state.email,handleChange:this.handleChange,required:!0}),c.a.createElement(f,{icon:"lock icon",name:"password",type:"password",placeholder:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),c.a.createElement(f,{icon:"lock icon",name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:this.state.confirmPassword,handleChange:this.handleChange,required:!0}),c.a.createElement("span",{className:"buttons"},c.a.createElement(v,{type:"submit",control:"primary"},"Create"),c.a.createElement(v,{type:"button",control:"secondary",onClick:this.handleCancel},"Cancel"))),c.a.createElement("div",{className:"ui error message"})),c.a.createElement("div",{className:"ui message"},"Already have an account? ",c.a.createElement(l.b,{to:"/sign-in"},"Sign In"))))}}]),t}(c.a.Component)),P=(t(51),function(){return c.a.createElement(O,null)}),A=(t(52),function(){return c.a.createElement("div",null,c.a.createElement("p",null,"This page does not exist."))}),I=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=y.onAuthStateChanged((function(a){e.setState({currentUser:a}),console.log(a)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:d}),c.a.createElement(h.a,{path:"/sign-in",component:j}),c.a.createElement(h.a,{path:"/sign-up",component:P}),c.a.createElement(h.a,{component:A})))}}]),t}(c.a.Component);i.a.render(c.a.createElement(l.a,{basename:"/"},c.a.createElement(I,null)),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.62ef8300.chunk.js.map