(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(26),i=a.n(s),u=a(8),o=a(16),l=a(5),j=a(7),b=a.n(j),d=a(12),f=a(17);a(35),a(52),a(53);f.a.initializeApp({apiKey:"AIzaSyDH-AVCvdBSt9_x-eQd3-7hKcBvvH05Rm4",authDomain:"nwitter-831e2.firebaseapp.com",projectId:"nwitter-831e2",storageBucket:"nwitter-831e2.appspot.com",messagingSenderId:"404369786985",appId:"1:404369786985:web:39de5a4ee33133842e7af8"});var p=f.a,h=f.a.auth(),m=f.a.firestore(),O=f.a.storage(),x=function(e){var t=Object(c.useState)(""),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],f=Object(c.useState)(!0),p=Object(u.a)(f,2),m=p[0],O=p[1],x=Object(c.useState)(),v=Object(u.a)(x,2),g=v[0],w=v[1],N=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?s(n):"password"===a&&j(n)},y=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!m){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(r,l);case 5:e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(r,l);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:y,className:"container",children:[Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:r,onChange:N,className:"authInput"}),Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:l,onChange:N,className:"authInput"}),Object(n.jsx)("input",{className:"authInput authSubmit",type:"submit",value:m?"Create Account":"Sign In"}),g&&Object(n.jsx)("span",{className:"authError",children:g})]}),Object(n.jsx)("span",{onClick:function(){O((function(e){return!e}))},className:"authSwitch",children:m?"Sign In":"Create Account"})," "]})},v=(a(37),function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a&&(n=new p.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)("i",{className:"fab fa-twitter authLogo"}),Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(n.jsx)("i",{className:"fab fa-google"})]}),Object(n.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(n.jsx)("i",{className:"fab fa-github"})]})]})]})}),g=a(28),w=function(e){var t=e.nweetObj,a=e.isOwner,r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.text),j=Object(u.a)(l,2),f=j[0],p=j[1],h=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},v=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:f});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("li",{className:"nweet",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(n.jsx)("input",{className:"formInput",onChange:function(e){var t=e.target.value;p(t)},type:"text",placeholder:"Edit your nweet",value:f,autofocus:!0,required:!0}),Object(n.jsx)("input",{className:"formBtn",type:"submit",value:"Update Nweet"})]}),Object(n.jsx)("span",{className:"formBtn cancelBtn",onClick:x,children:"Cancel"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(n.jsx)("img",{src:t.attachmentUrl,alt:"nweet"}),a&&Object(n.jsxs)("div",{className:"nweet_actions",children:[Object(n.jsxs)("span",{onClick:h,children:[Object(n.jsx)("i",{className:"far fa-trash-alt"}),"delete"]}),Object(n.jsxs)("span",{onClick:x,children:[Object(n.jsx)("i",{className:"far fa-edit"}),"edit"]})]})]})})},N=a(55),y=(a(38),function(e){var t=e.userObj,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],f=l[1],p=Object(c.useRef)(),h=function(){var e=Object(d.a)(b.a.mark((function e(a){var n,c,r,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===j){e.next=12;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,c.putString(j,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,m.collection("nweets").add(u);case 15:i(""),f("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput_container",children:[Object(n.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(n.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Add photos"}),Object(n.jsx)("i",{className:"fas fa-plus"})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;f(t)},a.readAsDataURL(t)},ref:p,style:{opacity:0}}),j&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{src:j,alt:"attachment",style:{backgroundImage:j}}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:function(){f(""),p.current.value=""},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)("i",{className:"fas fa-times"})]})]})]})}),S=(a(39),function(e){var t=e.userObj,a=Object(c.useState)([]),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){m.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(y,{userObj:t}),Object(n.jsx)("ul",{className:"nweets",children:s.map((function(e){return Object(n.jsx)(w,{isOwner:e.creatorId===t.uid,nweetObj:e},e.id)}))})]})}),k=(a(40),function(e){var t=e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"navigation",children:[Object(n.jsx)("li",{className:"home",children:Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("i",{className:"fab fa-twitter twitter"})})}),Object(n.jsx)("li",{className:"profile",children:Object(n.jsxs)(o.b,{to:"/profile",children:[Object(n.jsx)("i",{className:"fas fa-user user"}),Object(n.jsx)("span",{className:"profileText",children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})}),I=(a(45),function(e){var t=e.userObj,a=e.refreshUser,r=Object(l.f)(),s=Object(c.useState)(t.displayName),i=Object(u.a)(s,2),o=i[0],j=i[1],f=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){f()}),[]);var p=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(n.jsx)("input",{className:"formInput",onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:o,autoFocus:!0}),Object(n.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn"})]}),Object(n.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),r.push("/")},children:"Log Out"})]})}),C=(a(46),function(e){var t=e.isLoggedIn,a=e.userObj,c=e.refreshUser;return Object(n.jsxs)(o.a,{children:[t&&Object(n.jsx)(k,{userObj:a}),Object(n.jsx)(l.c,{children:Object(n.jsx)(n.Fragment,{children:t?Object(n.jsxs)("div",{className:"router_loggedIn",children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(S,{userObj:a})}),Object(n.jsx)(l.a,{exact:!0,path:"/profile",children:Object(n.jsx)(I,{userObj:a,refreshUser:c})})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(v,{})})})})})]})});var A=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){h.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)(C,{refreshUser:function(){var e=h.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};a(47),a(48);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9e644b11.chunk.js.map