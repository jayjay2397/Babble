(this.webpackJsonpbabble=this.webpackJsonpbabble||[]).push([[0],{85:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),r=t(65),c=t.n(r),i=t(93),o=t(71),l=t(13),j=t(24),d=t(30),b=t(6),u=new d.ApolloClient({uri:"https://localhost:4000",cache:new d.InMemoryCache});function m(e){return Object(b.jsx)(d.ApolloProvider,Object(j.a)({client:u},e))}t(85);function O(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"home page"})})}function p(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Login page"})})}var h,x=t(42),g=t(69),v=t(92),w=t(70),f=t(94),y=t(95),N=t.p+"static/media/bg1.ca568167.mp4",P=Object(d.gql)(h||(h=Object(g.a)(["\n  mutation register(\n    $username: String! \n    $email: String! \n    $password: String! \n    $confirmPassword: String!) \n  {\n    register(\n      username: $username \n      email: $email \n      password: $password \n      confirmPassword: $confirmPassword\n    ){\n      username \n      email \n      createdAt\n    }\n  }\n"])));function C(e){var a=Object(n.useState)({email:"",username:"",password:"",confirmPassword:""}),t=Object(x.a)(a,2),s=t[0],r=t[1],c=Object(n.useState)({}),i=Object(x.a)(c,2),o=i[0],l=i[1],u=Object(d.useMutation)(P,{update:function(a,t){return e.history.push("/login")},onError:function(e){return l(e&&e.graphQLErrors[0]?e.graphQLErrors[0].extensions.exception.errors:{})}}),m=Object(x.a)(u,2),O=m[0],p=m[1].loading;return Object(b.jsxs)(v.a,{className:"bg-white py-5 justify-content-center",children:[Object(b.jsxs)(w.a,{sm:8,md:6,lg:4,children:[Object(b.jsx)("h1",{className:"text-center",children:" Register"}),Object(b.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),O({variables:s})},children:[Object(b.jsxs)(f.a.Group,{children:[Object(b.jsx)(f.a.Label,{className:o.email&&"text-danger",children:o.email&&"Email address"}),Object(b.jsx)(f.a.Control,{type:"email",value:s.email,className:o.email&&"is-invalid",onChange:function(e){return r(Object(j.a)(Object(j.a)({},s),{},{email:e.target.value}))}})]}),Object(b.jsxs)(f.a.Group,{children:[Object(b.jsx)(f.a.Label,{className:o.username&&"text-danger",children:o.email&&"Username"}),Object(b.jsx)(f.a.Control,{type:"text",value:s.username,className:o.username&&"is-invalid",onChange:function(e){return r(Object(j.a)(Object(j.a)({},s),{},{username:e.target.value}))}})]}),Object(b.jsxs)(f.a.Group,{children:[Object(b.jsx)(f.a.Label,{className:o.password&&"text-danger",children:o.email&&"Password"}),Object(b.jsx)(f.a.Control,{type:"password",value:s.password,className:o.password&&"is-invalid",onChange:function(e){return r(Object(j.a)(Object(j.a)({},s),{},{password:e.target.value}))}})]}),Object(b.jsxs)(f.a.Group,{children:[Object(b.jsx)(f.a.Label,{className:o.password&&"text-danger",children:o.email&&"Password"}),Object(b.jsx)(f.a.Control,{type:"password",value:s.confirmPassword,className:o.confirmPassword&&"is-invalid",onChange:function(e){return r(Object(j.a)(Object(j.a)({},s),{},{confirmPassword:e.target.value}))}})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)(y.a,{variant:"success",type:"submit",disabled:p,children:p?"Loading..":"Register"})})]})]}),Object(b.jsxs)("video",{id:"VidBG",autoPlay:!0,muted:!0,loop:!0,children:[" ",Object(b.jsx)("source",{src:N,type:"video/mp4"})]})]})}var L=function(){return Object(b.jsx)(m,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(i.a,{className:"pt-5",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/register",component:C}),Object(b.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(l.a,{path:"/login",component:p})]})})})})};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.228ca198.chunk.js.map