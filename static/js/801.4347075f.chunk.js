"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[801],{1801:function(t,e,_){_.r(e),_.d(e,{default:function(){return F}});var o=_(8683),s={body:"PostForm_body__8akyn",app:"PostForm_app__aRIvn",app__content:"PostForm_app__content__aDyDP",app__menu:"PostForm_app__menu__jORqy",app__route:"PostForm_app__route__+ImAY",app__adv:"PostForm_app__adv__AnZr-",postForm:"PostForm_postForm__OIOVA",textarea:"PostForm_textarea__X8Qfk",error:"PostForm_error__gKu6-"},a=_(2791),r=_(5078),n=_(6856),i=_(9926),p=_(184),l=function(t){return(0,p.jsx)(r.l0,{onSubmit:function(e){t.addPost(e.newPost),e.newPost=""},render:function(t){var e=t.handleSubmit;return(0,p.jsxs)("form",{className:s.postForm,onSubmit:e,children:[(0,p.jsx)(r.gN,{validate:(0,i.A3)(i.C1,(0,i.DT)(30)),name:"newPost",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",stl:s,component:n.gx}),(0,p.jsx)("button",{children:"SEND"})]})}})},u="Post_post__iktQa",f="Post_post__user__8c2KA",c="Post_post__text__hMEeJ",d="Post_post__time__fATWb",m=function(t){var e=t.name,_=t.text,o=t.time;return(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("div",{className:f,children:e}),(0,p.jsx)("div",{className:c,children:_}),(0,p.jsx)("div",{className:d,children:o})]})},P={body:"Profile_body__XhgjW",app:"Profile_app__i5FgX",app__content:"Profile_app__content__7bDpx",app__menu:"Profile_app__menu__PRIGL",app__route:"Profile_app__route__-9gRj",app__adv:"Profile_app__adv__M7PsC",profile:"Profile_profile__vZ0eP",profile__content:"Profile_profile__content__vrBXF",profile__profileDIV:"Profile_profile__profileDIV__IIqKq",profile__profile:"Profile_profile__profile__5k4CN",profile__image:"Profile_profile__image__lTSiK",profile__name:"Profile_profile__name__lLdnk",profile__about:"Profile_profile__about__T1dv8",profile__dataDIV:"Profile_profile__dataDIV__D9Ml6",profile__data:"Profile_profile__data__EkW-f",profile__posts:"Profile_profile__posts__Tz0ta"},h=_(3432),v=_(885),x={body:"ProfileStatus_body__GEt1S",app:"ProfileStatus_app__05EHy",app__content:"ProfileStatus_app__content__uYhFm",app__menu:"ProfileStatus_app__menu__MQDy7",app__route:"ProfileStatus_app__route__fI7zA",app__adv:"ProfileStatus_app__adv__SctIu",status:"ProfileStatus_status__vASD+",status__input:"ProfileStatus_status__input__hcnkU"},j=function(t){var e=(0,a.useState)(!1),_=(0,v.Z)(e,2),o=_[0],s=_[1],r=(0,a.useState)(t.status),n=(0,v.Z)(r,2),i=n[0],l=n[1];return(0,a.useEffect)((function(){l(t.status)}),[t.status]),(0,p.jsx)("div",{className:x.status,children:(0,p.jsx)("div",{className:x.status__container,children:!1===o?(0,p.jsxs)("div",{onDoubleClick:function(){s(!0)},className:x.status__text,children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",i]}):(0,p.jsxs)("div",{onBlur:function(){return s(!1),void t.updateStatusThunk(i)},className:x.status__input,children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",(0,p.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,value:i})]})})})},g=a.memo(j),N=function(t){var e=t.posts.map((function(t){return(0,p.jsx)(m,{id:t.id,name:t.name,text:t.text},"post".concat(t.id))}));return null===t.profile?(0,p.jsx)(h.Z,{}):(0,p.jsx)("div",{className:P.profile,children:(0,p.jsxs)("div",{className:P.profile__content,children:[(0,p.jsx)("div",{className:P.profile__profileDIV,children:(0,p.jsxs)("div",{className:P.profile__profile,children:[(0,p.jsx)("div",{className:P.profile__image,children:(0,p.jsx)("img",{src:t.profile.photos.large||"https://cdn-icons-png.flaticon.com/512/56/56745.png",alt:"profilePhoto"})}),(0,p.jsx)("div",{className:P.profile__name,children:t.profile.fullName}),(0,p.jsx)("div",{className:P.profile__about,children:t.profile.aboutMe}),(0,p.jsx)("div",{className:P.profile__online,children:t.profile.aboutMe})]})}),(0,p.jsxs)("div",{className:P.profile__dataDIV,children:[(0,p.jsx)("div",{className:P.profile__data,children:(0,p.jsx)(g,{status:t.status,updateStatusThunk:t.updateStatusThunk})}),(0,p.jsx)("div",{className:P.profile__posts,children:e}),(0,p.jsx)(l,{onPostChange:t.onPostChange,addPost:t.addPost})]})]})})},S=_(6070),k=_(364),b=_(6871),D=_(5927),F=(0,_(7781).qC)((0,k.$j)((function(t){return{posts:t.profilePage.posts,profile:t.profilePage.profile,status:t.profilePage.status}}),(function(t){return{addPost:function(e){t((0,S.Wl)(e))},getProfileThunk:function(e){t((0,S.UX)(e))},getStatusThunk:function(e){t((0,S.HT)(e))},updateStatusThunk:function(e){t((0,S.or)(e))}}})),D.D)((function(t){var e=(0,b.UO)();return(0,a.useEffect)((function(){t.getProfileThunk(e.userId),t.getStatusThunk(e.userId)}),[]),(0,p.jsx)(N,(0,o.Z)({},t))}))},5927:function(t,e,_){_.d(e,{D:function(){return c}});var o=_(8683),s=_(5671),a=_(3144),r=_(9340),n=_(5716),i=_(2791),p=_(364),l=_(6871),u=_(184),f=function(t){return{isAuth:t.auth.isAuth}},c=function(t){var e=function(e){(0,r.Z)(i,e);var _=(0,n.Z)(i);function i(){return(0,s.Z)(this,i),_.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){return!1===this.props.isAuth?(0,u.jsx)(l.Fg,{to:"/login"}):(0,u.jsx)(t,(0,o.Z)({},this.props))}}]),i}(i.Component);return(0,p.$j)(f)(e)}}}]);
//# sourceMappingURL=801.4347075f.chunk.js.map