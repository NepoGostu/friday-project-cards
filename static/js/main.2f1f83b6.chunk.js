(this.webpackJsonpfriday_project=this.webpackJsonpfriday_project||[]).push([[0],{108:function(e,t,r){e.exports={wrapper:"Login_wrapper__128km",form:"Login_form__2Q7f1",email:"Login_email__3CqOC",password:"Login_password__1EVHX"}},109:function(e,t,r){e.exports={tableContainer:"PacksTable_tableContainer__3IYAA",tableContainerHeader:"PacksTable_tableContainerHeader__358lM",showOptions:"PacksTable_showOptions__1Dg7G",showPacksButtons:"PacksTable_showPacksButtons__ZGBkd"}},134:function(e,t,r){e.exports={wrapper:"PasswordRecovery_wrapper__pnoYk",form:"PasswordRecovery_form__2YoMB",errorText:"PasswordRecovery_errorText__2yruP"}},135:function(e,t,r){e.exports={wrapper:"CreateNewPassword_wrapper__3m7zU",form:"CreateNewPassword_form__2NgFu",errorText:"CreateNewPassword_errorText__-GfiS"}},144:function(e,t,r){e.exports={wrapper:"Registration_wrapper__2n7VE",form:"Registration_form__1eVwN"}},146:function(e,t,r){e.exports={cardsContainer:"Cards_cardsContainer__1u-lT",cardsContainerHeader:"Cards_cardsContainerHeader__29JyS"}},167:function(e,t,r){e.exports={menuWrapper:"Header_menuWrapper__3eK4O"}},177:function(e,t,r){e.exports={wrapper:"CheckEmail_wrapper__2DGRK"}},178:function(e,t,r){e.exports={profileWrapper:"Profile_profileWrapper__oW5PJ"}},179:function(e,t,r){e.exports={wrapper:"Page404_wrapper__3b5UN"}},180:function(e,t,r){e.exports={buttons:"ActionsColumn_buttons__cw10u"}},183:function(e,t,r){e.exports={buttons:"ActionsCardColumn_buttons__2VXPf"}},292:function(e,t,r){"use strict";r.r(t);var a,n=r(0),c=r.n(n),s=r(31),i=r.n(s),o=(r(196),r(13)),u=r(167),d=r.n(u),l=r(75),p=r(300),j=r(301),b=r(302),O=r(304),E=r(303),h=r.p+"static/media/react.4c89d1c3.svg",f=r(36),m=r(15),g=r.n(m),S=r(24);!function(e){e.SET_IS_LOGGED_IN="LOGIN/SET-IS-LOGGED-IN",e.SET_IS_INITIALIZED="LOGIN/SET-IS-INITIALIZED",e.SET_USER_PROFILE="LOGIN/SET_USER_PROFILE",e.FETCH_LOG_ERROR="LOGIN/FETCH_LOG_ERROR"}(a||(a={}));var x,_=r(169),C=r.n(_).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),w=function(e){return C.post("/auth/login",e)},A=function(){return C.delete("/auth/me")},T=function(e){return{type:a.SET_IS_LOGGED_IN,isLoggedIn:e}},I=function(e){return{type:a.SET_IS_INITIALIZED,isInitialized:e}},R=function(e){return{type:a.SET_USER_PROFILE,profile:e}},v=function(e){return{type:a.FETCH_LOG_ERROR,error:e}},k=r(6),P=function(){var e=l.a.SubMenu,t=Object(o.m)(),r=Object(f.b)();return Object(k.jsxs)(l.a,{mode:"horizontal",className:d.a.menuWrapper,children:[Object(k.jsx)(l.a.Item,{children:Object(k.jsx)("img",{src:h,alt:"react"})},"logo"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(p.a,{}),onClick:function(){return t("/packs")},children:"Packs list"},"packs"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(j.a,{}),onClick:function(){return t("/profile")},children:"Profile"},"profile"),Object(k.jsx)(e,{icon:Object(k.jsx)(b.a,{}),title:"Developers",children:Object(k.jsxs)(l.a.ItemGroup,{children:[Object(k.jsx)(l.a.Item,{children:"\u0418\u0433\u043d\u0430\u0442 \u0417\u0430\u043a\u0430\u043b\u0438\u043d\u0441\u043a\u0438\u0439"},"dev-0"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(E.a,{}),children:Object(k.jsx)("a",{href:"https://github.com/iForced",target:"_blank",rel:"noopener noreferrer",children:"\u0418\u043b\u044c\u044f \u041e\u0440\u0441\u0438\u0447"})},"dev-1"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(E.a,{}),children:Object(k.jsx)("a",{href:"https://github.com/MitPalVach",target:"_blank",rel:"noopener noreferrer",children:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u0430\u0447\u0443\u0433\u043e\u0432"})},"dev-2"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(E.a,{}),children:Object(k.jsx)("a",{href:"https://github.com/NepoGostu",target:"_blank",rel:"noopener noreferrer",children:"\u0410\u043d\u0434\u0440\u0435\u0439 \u0417\u0443\u0435\u0432"})},"dev-3")]})},"developers"),Object(k.jsx)(e,{icon:Object(k.jsx)(O.a,{}),title:"Authorization",children:Object(k.jsxs)(l.a.ItemGroup,{children:[Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(O.a,{}),onClick:function(){return t("/login")},children:"Sign in"},"login"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(O.a,{}),onClick:function(){return t("/registration")},children:"Sign up"},"reg"),Object(k.jsx)(l.a.Item,{icon:Object(k.jsx)(O.a,{}),onClick:function(){r(function(){var e=Object(S.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t(T(!1)),t(I(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response?e.t0.response.data.error:e.t0.message,t(v(r));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),t("/login")},children:"Sign out"},"logout")]})},"authorization")]})},y=r(10),D=r(64),N=r(38),G=r(187),L=r(296),F=r(298),U=r(106),K=r(60),H=r(108),B=r.n(H),V=f.c,M=function(){var e=Object(f.b)(),t=V((function(e){return e.login.isLoggedIn})),r=V((function(e){return e.login.error})),a=Object(o.m)();Object(n.useEffect)((function(){r&&(G.a.error({message:"Error",description:r,placement:"topLeft",top:55}),e(v(r)))}),[r]),Object(n.useEffect)((function(){t&&a("/profile")}),[t]);var c=Object(D.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email||(t.email="Email is required"),e.password?e.password.length<3&&(t.password="Must be 3 characters or less"):t.password="Field is required",t},onSubmit:function(t){var r;e((r=t,function(){var e=Object(S.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(r);case 3:a=e.sent,t(T(!0)),t(I(!0)),t(R(a.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.response?e.t0.response.data.error:e.t0.message,t(v(n));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),c.resetForm()}});return Object(k.jsx)("div",{className:B.a.wrapper,children:Object(k.jsxs)(L.a,{style:{width:"413px"},bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px"},children:[Object(k.jsx)("h2",{children:"IT-Incubator"}),Object(k.jsxs)("form",{onSubmit:c.handleSubmit,className:B.a.form,children:[Object(k.jsx)(F.a,{placeholder:"Email",name:"email",value:c.values.email,onChange:c.handleChange}),c.errors.email?Object(k.jsx)("div",{className:B.a.email,children:c.errors.email}):null,Object(k.jsx)(F.a,{placeholder:"password",name:"password",type:"password",value:c.values.password,onChange:c.handleChange}),c.errors.password?Object(k.jsx)("div",{className:B.a.password,children:c.errors.password}):null,Object(k.jsxs)("label",{children:[Object(k.jsx)(U.a,Object(y.a)(Object(y.a)({},c.getFieldProps("rememberMe")),{},{checked:c.values.rememberMe})),Object(k.jsx)("span",{children:" remember me"})]}),Object(k.jsx)(K.a,{shape:"round",type:"primary",htmlType:"submit",children:"Login"})]}),Object(k.jsx)("p",{children:"If you have forgotten your password, you can recover it "}),Object(k.jsx)("p",{children:Object(k.jsx)(N.b,{to:"/recoverypassword",children:"Recover password"})})]})})},W=r(144),z=r.n(W),Z=r(175);!function(e){e.SEND_REG="REGISTRATION/SEND_REG",e.SET_REG_IS_FETCHING="REGISTRATION/SET_REG_IS_FETCHING",e.SET_REG_IS_REG="REGISTRATION/SET_REG_IS_REG",e.FETCH_REG_ERROR="REGISTRATION/FETCH_REG_ERROR"}(x||(x={}));var q,Y=function(e){return C.post("auth/register",e)},Q=function(e){return{type:x.SET_REG_IS_FETCHING,isFetching:e}},J=function(e){return{type:x.FETCH_REG_ERROR,error:e}},X=function(){var e=Object(f.b)(),t=Object(o.m)(),r=V((function(e){return e.registration})),a=r.error,c=r.isReg,s=r.isFetching;Object(n.useEffect)((function(){c&&t("/login")}),[c]),Object(n.useEffect)((function(){a&&(G.a.error({message:"Error",description:a,placement:"topLeft",top:55}),e(J(a)))}),[a]);var i=Object(D.a)({initialValues:{email:"",password:"",password2:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Incorrect email"):t.email="Login is required!",e.password?e.password.length<7&&(t.password="Password at least 7 characters"):t.password="Password is required!",e.password!==e.password2&&(t.password="Password mismatch"),t},onSubmit:function(t){var r;e((r={email:t.email,password:t.password},function(){var e=Object(S.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0)),e.prev=1,e.next=4,Y(r);case 4:a=e.sent,t((s=a.data,{type:x.SEND_REG,payload:s})),t((c=!0,{type:x.SET_REG_IS_REG,isReg:c})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n=e.t0.response?e.t0.response.data.error:e.t0.message,t(J(n));case 13:t(Q(!1));case 14:case"end":return e.stop()}var c,s}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),i.resetForm()}});return Object(k.jsx)("div",{className:z.a.wrapper,children:Object(k.jsx)(Z.a,{spinning:s,children:Object(k.jsxs)(L.a,{style:{width:"413px"},bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px"},children:[Object(k.jsx)("h2",{children:"IT-Incubator"}),Object(k.jsx)("p",{children:"Sign Up"}),Object(k.jsxs)("form",{onSubmit:i.handleSubmit,className:z.a.form,children:[Object(k.jsx)(F.a,{placeholder:"Email",name:"email",value:i.values.email,onChange:i.handleChange}),i.touched.email&&i.errors.email&&Object(k.jsx)("div",{style:{color:"red"},children:i.errors.email}),Object(k.jsx)(F.a,{placeholder:"Password",name:"password",type:"password",value:i.values.password,onChange:i.handleChange}),i.touched.password&&i.errors.password&&Object(k.jsx)("div",{style:{color:"red"},children:i.errors.password}),Object(k.jsx)(F.a,{placeholder:"Password",name:"password2",type:"password",value:i.values.password2,onChange:i.handleChange}),i.touched.password2&&i.errors.password2&&Object(k.jsx)("div",{style:{color:"red"},children:i.errors.password2}),Object(k.jsx)("small",{children:"Enter your email address and your password for sign up"}),Object(k.jsx)(K.a,{shape:"round",type:"primary",htmlType:"submit",children:"Sign Up"})]}),Object(k.jsx)("p",{children:Object(k.jsx)(N.b,{to:"/login",children:"Try logging in"})})]})})})},$=r(134),ee=r.n($),te=function(){return{forgot:function(e){return C.post("auth/forgot",e)},setNewPass:function(e){return C.post("auth/set-new-password",e)}}};!function(e){e.SEND_EMAIL="RECOVERY/SEND_EMAIL",e.SEND_EMAIL_SUCCESS="RECOVERY/SEND_EMAIL_SUCCESS",e.SET_NEW_PASSWORD_SUCCESS="RECOVERY/SET_NEW_PASSWORD_SUCCESS",e.SET_IS_FETCHING="RECOVERY/SET_IS_FETCHING",e.SET_ERROR="RECOVERY/SET_ERROR"}(q||(q={}));var re,ae=function(e){return{type:q.SET_ERROR,errorMessage:e}},ne=function(e){return{type:q.SET_IS_FETCHING,isFetching:e}},ce=function(e){return function(t){t(ne(!0)),te().forgot(e).then((function(e){return e.data})).then((function(){var r;t(ae("")),t((r=e.email,{type:q.SEND_EMAIL,email:r})),t({type:q.SEND_EMAIL_SUCCESS}),t(ne(!1))})).catch((function(e){t(ae(e.response.data.error)),t(ne(!1))}))}},se=function(e){return function(t){t(ne(!0)),te().setNewPass(e).then((function(e){return e.data})).then((function(){t(ae("")),t({type:q.SET_NEW_PASSWORD_SUCCESS}),t(ne(!1))})).catch((function(e){t(ae(e.response.data.error)),t(ne(!1))}))}},ie=function(){var e=Object(f.b)(),t=Object(o.m)(),r=V((function(e){return e.recoveryPass.isEmailSent})),a=V((function(e){return e.recoveryPass.isFetching})),c=V((function(e){return e.recoveryPass.error}));Object(n.useEffect)((function(){r&&t("/checkemail")}),[r]),Object(n.useEffect)((function(){c&&(G.a.error({message:"Error",description:c,placement:"topLeft",top:55}),e(ae("")))}),[c]);var s=Object(D.a)({initialValues:{email:""},onSubmit:function(t){e(ce({email:t.email,from:"Ilya",message:"\n        <div style=\"background-color: lime; padding: 15px\">\n        password recovery link:\n        <a href='https://iforced.github.io/friday_project/#/createnewpassword/$token$'>link</a></div>\n    "}))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Incorrect email"):t.email="Email is required!",t}});return Object(k.jsx)("div",{className:ee.a.wrapper,children:Object(k.jsx)(Z.a,{spinning:a,children:Object(k.jsxs)(L.a,{style:{width:"413px"},bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px"},children:[Object(k.jsx)("h2",{children:"IT-Incubator"}),Object(k.jsx)("p",{children:"Forgot your password?"}),Object(k.jsxs)("form",{onSubmit:s.handleSubmit,className:ee.a.form,children:[Object(k.jsx)(F.a,Object(y.a)({placeholder:"Email"},s.getFieldProps("email"))),Object(k.jsx)("div",{className:ee.a.errorText,children:s.touched.email&&s.errors.email&&s.errors.email}),Object(k.jsx)("small",{children:"Enter your email address and we will send you further instructions"}),Object(k.jsx)(K.a,{shape:"round",type:"primary",htmlType:"submit",children:"Send Instructions"})]}),Object(k.jsx)("p",{children:"Did you remember your password?"}),Object(k.jsx)("p",{children:Object(k.jsx)(N.b,{to:"/login",children:"Try logging in"})})]})})})},oe=r(135),ue=r.n(oe),de=function(){var e=Object(f.b)(),t=Object(o.o)().token,r=Object(o.m)(),a=V((function(e){return e.recoveryPass.isNewPasswordSent})),c=V((function(e){return e.recoveryPass.isFetching}));Object(n.useEffect)((function(){a&&r("/login")}),[a]);var s=Object(D.a)({initialValues:{password:""},onSubmit:function(r){e(se({password:r.password,resetPasswordToken:t}))},validate:function(e){var t={};return e.password?e.password.length<7&&(t.password="Password at least 7 characters"):t.password="Password is required!",t}});return Object(k.jsx)("div",{className:ue.a.wrapper,children:Object(k.jsx)(Z.a,{spinning:c,children:Object(k.jsxs)(L.a,{style:{width:"413px"},bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px",textAlign:"center"},children:[Object(k.jsx)("h2",{children:"IT-Incubator"}),Object(k.jsx)("p",{children:"Create new password"}),Object(k.jsxs)("form",{onSubmit:s.handleSubmit,className:ue.a.form,children:[Object(k.jsx)(F.a.Password,Object(y.a)({placeholder:"Password"},s.getFieldProps("password"))),Object(k.jsx)("div",{className:ue.a.errorText,children:s.touched.password&&s.errors.password&&s.errors.password}),Object(k.jsx)("p",{children:"Create new password and we will send you further instructions to email"}),Object(k.jsx)(K.a,{shape:"round",type:"primary",htmlType:"submit",children:"Create new password"})]})]})})})},le=r(177),pe=r.n(le),je=function(){var e=V((function(e){return e.recoveryPass.email}));return Object(k.jsx)("div",{className:pe.a.wrapper,children:Object(k.jsxs)(L.a,{style:{width:"413px"},bodyStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px",textAlign:"center"},children:[Object(k.jsx)("h2",{children:"IT-Incubator"}),Object(k.jsx)("img",{src:"data:image/png;base64,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",alt:"Mail logo"}),Object(k.jsx)("p",{children:"Check Email"}),Object(k.jsxs)("p",{children:["We\u2019ve sent an Email with instructions to ",e]})]})})},be=r(178),Oe=r.n(be),Ee=c.a.memo((function(){var e=Object(o.m)(),t=V((function(e){return e.login.profile})),r=V((function(e){return e.login.isLoggedIn}));return Object(n.useEffect)((function(){r||e("/login")}),[r]),Object(k.jsx)("div",{className:Oe.a.profileWrapper,children:Object(k.jsxs)("div",{children:[t._id?Object(k.jsx)("img",{src:"https://via.placeholder.com/300",alt:""}):Object(k.jsx)(o.a,{to:"/login",replace:!0}),t._id?Object(k.jsxs)("h2",{children:["You are: ",t.name]}):Object(k.jsx)(o.a,{to:"/login",replace:!0})]})})})),he=r(179),fe=r.n(he),me=function(){var e=Object(o.m)();return Object(k.jsxs)("div",{className:fe.a.wrapper,children:[Object(k.jsxs)("h2",{children:["404: Page not found ",Object(k.jsx)("i",{children:"\ud83d\ude15"})]}),Object(k.jsx)(K.a,{onClick:function(){return e(-1)},shape:"round",size:"large",type:"primary",children:"Back"})]})},ge=r(109),Se=r.n(ge),xe=r(294),_e=r(297),Ce=r(295),we=function(){return{getCards:function(e,t,r){return C.get("/cards/pack",{params:{page:e,pageCount:t,packName:r&&r}})},setPage:function(e){return C.get("/cards/pack?page=".concat(e))},addPack:function(e){return C.post("/cards/pack",{cardsPack:{name:e}})},deletePack:function(e){return C.delete("/cards/pack?id=".concat(e))},updatePack:function(e,t){return C.put("/cards/pack",{cardsPack:{_id:e,name:t}})}}};!function(e){e.SET_PACKS="PACKS/SET_PACKS",e.ADD_PACK="PACKS/ADD_PACK",e.DElETE_PACK="PACKS/DElETE_PACK",e.UPDATE_PACK="PACKS/UPDATE_PACK",e.SET_PAGE="PACKS/SET_PAGE",e.SET_PAGE_SIZE="PACKS/SET_PAGE_SIZE",e.SET_PACKS_TOTAL_COUNT="PACKS/SET_PACKS_TOTAL_COUNT",e.SET_IS_FETCHING="PACKS/SET_IS_FETCHING",e.SET_ERROR="PACKS/SET_ERROR",e.SET_SEARCH_PACK_VALUE="PACKS/SET_SEARCH_PACK_TERM"}(re||(re={}));var Ae,Te=function(e){return{type:re.SET_IS_FETCHING,isFetching:e}},Ie=function(e){return{type:re.SET_ERROR,error:e}},Re=function(e,t,r){return function(a){a(Te(!0)),we().getCards(e,t,r).then((function(e){return e.data})).then((function(e){var t,r;a(Te(!1)),a((t=e.cardPacks,{type:re.SET_PACKS,packs:t})),a((r=e.cardPacksTotalCount,{type:re.SET_PACKS_TOTAL_COUNT,count:r}))})).catch((function(e){a(Te(!1)),a(Ie(e.response.data.error))}))}},ve=function(e){return function(t,r){var a=r().packsTable,n=a.page,c=a.pageSize;t(Te(!0)),we().addPack(e).then((function(e){return e.data})).then((function(e){var r;t(Te(!1)),t((r=Object(y.a)({},e.newCardsPack),{type:re.ADD_PACK,newPack:r})),t(Re(n,c))})).catch((function(e){t(Te(!1)),t(Ie(e.response.data.error))}))}},ke=function(e){return function(t,r){var a=r().packsTable,n=a.page,c=a.pageSize;t(Te(!0)),we().deletePack(e).then((function(e){return e.data})).then((function(r){t(Te(!1)),t(function(e){return{type:re.DElETE_PACK,packId:e}}(e)),t(Re(n,c))})).catch((function(e){t(Te(!1)),t(Ie(e.response.data.error))}))}},Pe=function(e,t){return function(r,a){var n=a().packsTable,c=n.page,s=n.pageSize;r(Te(!0)),we().updatePack(e,t).then((function(e){return e.data})).then((function(a){r(Te(!1)),r(function(e,t){return{type:re.UPDATE_PACK,packId:e,newPackName:t}}(e,t)),r(Re(c,s))})).catch((function(e){r(Te(!1)),r(Ie(e.response.data.error))}))}},ye=r(66),De=r(51),Ne=r(180),Ge=r.n(Ne),Le=c.a.memo((function(e){return Object(k.jsxs)("div",{className:Ge.a.buttons,children:[Object(k.jsx)(K.a,{danger:!0,type:"primary",onClick:function(){return e.onDeletePack(e.packId)},children:"Delete"}),Object(k.jsx)(K.a,{onClick:function(){return e.onUpdatePack(e.packId,"new alo")},children:"Edit"}),Object(k.jsx)(K.a,{onClick:e.onLearn,children:"Cards"}),Object(k.jsx)(K.a,{children:"Learn"})]})})),Fe=function(){var e=Object(f.b)(),t=Object(o.m)(),r=V((function(e){return e.packsTable.packs})),a=V((function(e){return e.packsTable.page})),c=V((function(e){return e.packsTable.cardPacksTotalCount})),s=V((function(e){return e.packsTable.pageSize})),i=V((function(e){return e.packsTable.isFetching})),u=V((function(e){return e.packsTable.error})),d=V((function(e){return e.packsTable.searchValue})),l=V((function(e){return e.login.isLoggedIn}));Object(n.useEffect)((function(){l||t("/login")}),[]),Object(n.useEffect)((function(){l&&e(Re(a,s,d))}),[a,s]),Object(n.useEffect)((function(){u&&(G.a.error({message:"Error",description:u,placement:"topLeft",top:55}),e(ae("")))}),[u]);var p=[{title:"Name",dataIndex:"name",sorter:!0,width:"20%"},{title:"Cards",dataIndex:"cardsCount",sorter:!0,width:"20%"},{title:"Last updated",dataIndex:"updated",sorter:!0,width:"20%"},{title:"Created by",dataIndex:"user_name",sorter:!0,width:"20%"},{title:"Actions",width:"30%",render:function(e,r){return Object(k.jsx)(Le,{packId:r._id,onDeletePack:O,onUpdatePack:E,onLearn:function(){t("/packs/".concat(r._id,"/cards"))}})}}],j={current:a,pageSize:s,total:c},b=Object(n.useCallback)((function(t,r){var a,n;e((a=t.current,{type:re.SET_PAGE,newPage:a})),e((n=t.pageSize,{type:re.SET_PAGE_SIZE,pageSize:n}))}),[]),O=Object(n.useCallback)((function(t){e(ke(t))}),[]),E=Object(n.useCallback)((function(t,r){e(Pe(t,r))}),[]);return Object(k.jsxs)(xe.a,{style:{minHeight:"100vh"},children:[Object(k.jsx)(ye.b,{theme:"light",style:{padding:"10px 20px"},width:350,children:Object(k.jsxs)("div",{className:Se.a.showOptions,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{children:"Show packs cards"}),Object(k.jsxs)("div",{className:Se.a.showPacksButtons,children:[Object(k.jsx)(K.a,{onClick:function(){},children:"My"}),Object(k.jsx)(K.a,{onClick:function(){},children:"All"})]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{children:"Number of cards"}),Object(k.jsx)(_e.a,{range:!0,tooltipVisible:!0,tooltipPlacement:"bottom",min:0,max:200,defaultValue:[0,200]})]})]})}),Object(k.jsx)(De.a,{children:Object(k.jsxs)("div",{className:Se.a.tableContainer,children:[Object(k.jsx)("h2",{children:"Pack list"}),Object(k.jsxs)("div",{className:Se.a.tableContainerHeader,children:[Object(k.jsx)(F.a,{placeholder:"Search...",style:{width:"50%",margin:"20px 0",padding:"10px 20px"},onInput:function(t){var r=t.currentTarget.value;e(function(e){return{type:re.SET_SEARCH_PACK_VALUE,searchValue:e}}(r));var n=setTimeout((function(){e(Re(a,s,d)),clearInterval(n)}),2e3)}}),Object(k.jsx)(K.a,{type:"primary",shape:"round",onClick:function(){e(ve("alo"))},children:"Add new pack"})]}),Object(k.jsx)(Ce.a,{columns:p,dataSource:r,pagination:j,loading:i,onChange:b,scroll:{y:650}})]})})]})},Ue=r(146),Ke=r.n(Ue),He=r(299);!function(e){e.FETCH_CARDS="CARDS/FETCH_CARDS",e.SET_CARD="CARDS/SET_CARD",e.DELETE_CARD="CARDS/DELETE_CARD",e.UPDATE_CARD="CARDS/UPDATE_CARD",e.SET_CARD_IS_FETCHING="CARDS/SET_CARD_IS_FETCHING",e.FETCH_CARD_ERROR="CARDS/FETCH_CARD_ERROR"}(Ae||(Ae={}));var Be=function(e,t){return Object(S.a)(g.a.mark((function r(){return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.get("cards/card",{params:Object(y.a)(Object(y.a)({},e),{},{cardsTotalCount:t})});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},Ve=function(e,t,r,a){return Object(S.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.post("cards/card",{card:{cardsPack_id:e,question:t,answer:r,grade:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},Me=function(e){return Object(S.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.delete("cards/card?id=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},We=function(e,t,r,a,n,c){return{type:Ae.FETCH_CARDS,cards:e,cardsPack_id:t,page:a,_id:r,pageCount:n,cardsTotalCount:c}},ze=function(e,t,r,a){return{type:Ae.SET_CARD,cardsPack_id:e,question:t,answer:r,grade:a}},Ze=function(e){return{type:Ae.DELETE_CARD,_id:e}},qe=function(e){return{type:Ae.SET_CARD_IS_FETCHING,isFetching:e}},Ye=function(e){return{type:Ae.FETCH_CARD_ERROR,error:e}},Qe=function(e,t,r,a,n,c,s,i){return function(){var o=Object(S.a)(g.a.mark((function o(u){var d,l;return g.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return u(qe(!0)),o.prev=1,o.next=4,Be({cardsPack_id:e,question:t,answer:r,_id:a,grade:n,page:c,pageCount:s},i);case 4:d=o.sent,u(We(d.data.cards,d.data.packUserId,d.data._id,d.data.page,d.data.pageCount,d.data.cardsTotalCount)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),l=o.t0.response?o.t0.response.data.error:o.t0.message,u(Ye(l));case 12:u(qe(!1));case 13:case"end":return o.stop()}}),o,null,[[1,8]])})));return function(e){return o.apply(this,arguments)}}()},Je=r(183),Xe=r.n(Je),$e=c.a.memo((function(e){return Object(k.jsxs)("div",{className:Xe.a.buttons,children:[Object(k.jsx)(K.a,{children:"Edit"}),Object(k.jsx)(K.a,{danger:!0,type:"primary",onClick:function(){e._id&&e.onDeleteCard(e._id)},children:"Delete"})]})})),et=c.a.memo((function(){var e=Object(f.b)(),t=Object(o.o)().cardsPack_id,r=Object(o.o)()._id,a=V((function(e){return e.cards.cards})),c=V((function(e){return e.cards.question})),s=V((function(e){return e.cards.answer})),i=V((function(e){return e.cards.grade})),u=V((function(e){return e.cards.page})),d=V((function(e){return e.cards.pageCount})),l=V((function(e){return e.cards.cardsTotalCount})),p=V((function(e){return e.cards.error})),j=[{title:"Question",dataIndex:"question",width:"28%"},{title:"Answer",dataIndex:"answer",width:"28%"},{title:"Last updated",dataIndex:"updated",width:"13%"},{title:"Grade",dataIndex:"grade",sorter:!0,width:"13%",render:function(){return Object(k.jsx)(He.a,{allowHalf:!0,defaultValue:2.5})}},{title:"Actions",width:"18%",render:function(e,t){return Object(k.jsx)($e,{_id:t._id,onDeleteCard:h})}}];Object(n.useEffect)((function(){e(Qe(t,c,s,r,i,u,d,l))}),[t,c]),Object(n.useEffect)((function(){p&&(G.a.error({message:"Error",description:p,placement:"topLeft",top:55}),e(Ye(p)))}),[p]);var b={current:u,pageSize:d,total:l},O=Object(n.useCallback)((function(a){e(Qe(t,c,s,r,i,a.current,a.pageSize,a.total))}),[]),E=Object(n.useCallback)((function(){e(function(e,t,r,a){return function(){var n=Object(S.a)(g.a.mark((function n(c,s){var i,o,u,d,l,p;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=s().cards,o=i._id,u=i.page,d=i.pageCount,l=i.cardsTotalCount,c(qe(!0)),n.prev=2,n.next=5,Ve(e,t,r,a);case 5:return c(ze(e,t,r,a)),n.next=8,c(Qe(e,t,r,o,a,u,d,l));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),p=n.t0.response?n.t0.response.data.error:n.t0.message,c(Ye(p));case 14:c(qe(!1));case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t){return n.apply(this,arguments)}}()}(t,c,s,i))}),[]),h=function(r){e(function(e,t){return function(){var r=Object(S.a)(g.a.mark((function r(a){var n;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(qe(!0)),r.prev=1,r.next=4,Me(e);case 4:return a(Ze(e)),r.next=7,a(Qe(t));case 7:r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),n=r.t0.response?r.t0.response.data.error:r.t0.message,a(Ye(n));case 13:a(qe(!1));case 14:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(r,t))};return Object(k.jsx)(xe.a,{style:{height:"100vh"},children:Object(k.jsx)(De.a,{children:Object(k.jsxs)("div",{className:Ke.a.cardsContainer,children:[Object(k.jsx)("h2",{children:"Cards page"}),Object(k.jsxs)("div",{className:Ke.a.cardsContainerHeader,children:[Object(k.jsx)(F.a,{placeholder:"Search...",style:{width:"50%",margin:"20px 0",padding:"10px 20px"}}),Object(k.jsx)(K.a,{type:"primary",shape:"round",onClick:E,children:"Add new card"})]}),Object(k.jsx)(Ce.a,{columns:j,dataSource:a,pagination:b,loading:!1,onChange:O,scroll:{y:650}})]})})})})),tt=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(P,{}),Object(k.jsxs)(o.d,{children:[Object(k.jsx)(o.b,{path:"/",element:Object(k.jsx)(M,{})}),Object(k.jsx)(o.b,{path:"/login",element:Object(k.jsx)(M,{})}),Object(k.jsx)(o.b,{path:"/registration",element:Object(k.jsx)(X,{})}),Object(k.jsx)(o.b,{path:"/recoverypassword",element:Object(k.jsx)(ie,{})}),Object(k.jsx)(o.b,{path:"/createnewpassword/:token",element:Object(k.jsx)(de,{})}),Object(k.jsx)(o.b,{path:"/checkemail",element:Object(k.jsx)(je,{})}),Object(k.jsx)(o.b,{path:"/profile",element:Object(k.jsx)(Ee,{})}),Object(k.jsx)(o.b,{path:"/*",element:Object(k.jsx)(me,{})}),Object(k.jsx)(o.b,{path:"/packs",element:Object(k.jsx)(Fe,{})}),Object(k.jsx)(o.b,{path:"/packs/:cardsPack_id/cards",element:Object(k.jsx)(et,{})})]})]})},rt=r(137),at=r(184),nt={body:{email:"",password:""},isFetching:!1,isReg:!1,error:""},ct={email:"",error:"",isEmailSent:!1,isNewPasswordSent:!1,isFetching:!1},st={isLoggedIn:!1,isInitialized:!1,profile:{},error:""},it={cards:[],cardsPack_id:"",question:"??????????",answer:"!!!!!!!!!!!",grade:0,page:1,pageCount:4,cardsTotalCount:0,_id:"",isFetching:!1,error:""},ot=r(45),ut={packs:[],page:1,cardPacksTotalCount:0,pageSize:10,isFetching:!1,error:"",searchValue:""},dt=Object(rt.b)({registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.SEND_REG:return Object(y.a)(Object(y.a)({},e),{},{body:t.payload});case x.SET_REG_IS_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case x.SET_REG_IS_REG:return Object(y.a)(Object(y.a)({},e),{},{isReg:t.isReg});case x.FETCH_REG_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});default:return e}},recoveryPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.SEND_EMAIL:return Object(y.a)(Object(y.a)({},e),{},{email:t.email});case q.SEND_EMAIL_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{isEmailSent:!0});case q.SET_NEW_PASSWORD_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{isNewPasswordSent:!0});case q.SET_IS_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case q.SET_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:t.errorMessage});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_IS_LOGGED_IN:return Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:t.isLoggedIn});case a.SET_IS_INITIALIZED:return Object(y.a)(Object(y.a)({},e),{},{isInitialized:t.isInitialized});case a.SET_USER_PROFILE:return Object(y.a)(Object(y.a)({},e),{},{profile:t.profile});case a.FETCH_LOG_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae.FETCH_CARDS:return Object(y.a)(Object(y.a)({},e),{},{cards:t.cards,cardsPack_id:t.cardsPack_id,page:t.page,pageCount:t.pageCount,cardsTotalCount:t.cardsTotalCount,_id:t._id});case Ae.SET_CARD:return Object(y.a)(Object(y.a)({},e),{},{cardsPack_id:t.cardsPack_id,question:t.question,answer:t.answer,grade:t.grade});case Ae.DELETE_CARD:return Object(y.a)(Object(y.a)({},e),{},{cards:e.cards.filter((function(e){return e._id!==t._id}))});case Ae.UPDATE_CARD:return Object(y.a)(Object(y.a)({},e),{},{question:t.question,_id:t._id});case Ae.SET_CARD_IS_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case Ae.FETCH_CARD_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});default:return e}},packsTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.SET_PACKS:return Object(y.a)(Object(y.a)({},e),{},{packs:t.packs});case re.SET_PAGE:return Object(y.a)(Object(y.a)({},e),{},{page:t.newPage});case re.SET_PACKS_TOTAL_COUNT:return Object(y.a)(Object(y.a)({},e),{},{cardPacksTotalCount:t.count});case re.ADD_PACK:var r=t.newPack;return Object(y.a)(Object(y.a)({},e),{},{packs:[].concat(Object(ot.a)(e.packs),[r])});case re.SET_PAGE_SIZE:return Object(y.a)(Object(y.a)({},e),{},{pageSize:t.pageSize});case re.DElETE_PACK:return Object(y.a)(Object(y.a)({},e),{},{packs:e.packs.filter((function(e){return e._id!==t.packId}))});case re.SET_IS_FETCHING:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case re.SET_ERROR:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});case re.UPDATE_PACK:return Object(y.a)(Object(y.a)({},e),{},{packs:e.packs.map((function(e){return e._id===t.packId?Object(y.a)(Object(y.a)({},e),{},{name:t.newPackName}):e}))});case re.SET_SEARCH_PACK_VALUE:return Object(y.a)(Object(y.a)({},e),{},{searchValue:t.searchValue});default:return e}}}),lt=Object(rt.c)(dt,Object(rt.a)(at.a));window.store=lt,i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(N.a,{children:Object(k.jsx)(f.a,{store:lt,children:Object(k.jsx)(tt,{})})})}),document.getElementById("root"))}},[[292,1,2]]]);
//# sourceMappingURL=main.2f1f83b6.chunk.js.map