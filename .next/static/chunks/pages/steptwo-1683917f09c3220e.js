(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{4116:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/steptwo",function(){return c(6174)}])},7673:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=c(1664),f=c.n(e),g=c(1163),h=function(){var a=(0,g.useRouter)();return(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("nav",{style:{marginTop:"15px",marginBottom:"15px"},class:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,d.jsx)(f(),{href:"/",activeClassName:"is-active",children:(0,d.jsx)("a",{class:"navbar-brand",href:"/",children:"Chores"})}),(0,d.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{class:"navbar-toggler-icon"})}),(0,d.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,d.jsxs)("ul",{class:"navbar-nav mr-auto",children:[(0,d.jsx)(f(),{href:"/helpers",activeClassName:"is-active",children:(0,d.jsx)("a",{className:"/helpers"==a.pathname?"nav-link nav-item navitemactive":"nav-link nav-item",href:"#",children:"Helpers "})}),(0,d.jsx)(f(),{href:"/about",activeClassName:"is-active",children:(0,d.jsx)("a",{className:"/about"==a.pathname?"nav-link nav-item navitemactive":"nav-link nav-item",href:"#",children:"About "})})]}),(0,d.jsx)("div",{class:"my-2 my-lg-0",children:(0,d.jsxs)("ul",{class:"navbar-nav mr-auto",children:[(0,d.jsx)(f(),{href:"/signup",activeClassName:"is-active",children:(0,d.jsx)("a",{className:"/signup"==a.pathname?"nav-link nav-item navitemactive":"nav-link nav-item",href:"#",children:"Sign Up "})}),(0,d.jsx)(f(),{href:"/signin",activeClassName:"is-active",children:(0,d.jsx)("a",{className:"/signin"==a.pathname?"nav-link nav-item navitemactive":"nav-link nav-item",href:"#",children:"Sign In "})})]})})]})]})})};b.Z=h},6174:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return w},default:function(){return x}});var d=c(5893),e=c(7294),f=c(9008),g=c.n(f),h=c(7673),i=c(9296),j=c.n(i),k=c(9),l=c.n(k),m=c(9473),n=c(2044),o=c(1163),p=function(a){var b=(0,o.useRouter)(),c=(0,m.I0)(),f=function(){c(n.B.add({helper:a.name,status:"pending",price:a.price,body:"body",phone:a.phone,image:a.image})),b.push("/stepthree")};return(0,d.jsx)(e.Fragment,{children:(0,d.jsx)("div",{className:l().box,children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-3",children:(0,d.jsx)("img",{className:l().image,src:a.image,alt:""})}),(0,d.jsxs)("div",{className:"col-md-9",children:[(0,d.jsxs)("h4",{children:[a.name," ",(0,d.jsxs)("span",{className:l().price,children:["₦",a.price,"/hr"]})]}),(0,d.jsxs)("h6",{children:[(0,d.jsx)("i",{class:"fas fa-running"}),"  ",a.totalErrands," Errands ran"]}),(0,d.jsxs)("h6",{children:[(0,d.jsx)("i",{class:"fas fa-car"})," Mobile: ",a.mobile]}),(0,d.jsxs)("h6",{children:[(0,d.jsx)("i",{class:"far fa-star"})," Ratings: ",a.ratings," (",a.noofreviews," reviews)"]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("p",{children:["Brief summary: ",a.summary]}),(0,d.jsx)("button",{onClick:f,style:{backgroundColor:"#000",color:"#FFF"},type:"submit",class:"btn",children:"Select & Assign"})]})]})})})},q=p,r=function(a){return console.log(a),(0,d.jsx)(e.Fragment,{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsxs)("div",{class:"form-group",children:[(0,d.jsx)("label",{for:"exampleFormControlSelect2",children:"Sort By"}),(0,d.jsxs)("select",{class:"form-control",id:"",children:[(0,d.jsx)("option",{value:"recommended",children:"Recommended"}),(0,d.jsx)("option",{value:"lowtohigh",children:"Price (Lowest to Highest)"}),(0,d.jsx)("option",{value:"lowtohigh",children:"Price (Highest to Lowest)"})]})]})}),(0,d.jsx)("div",{className:"col-md-8",children:a.all_helpers.map(function(a){return(0,d.jsx)(q,{name:a.name,totalErrands:a.totalErrand,mobile:a.mobile,summary:a.summary,image:a.image,ratings:a.ratings,noofreviews:a.noofreviews,price:a.price,phone:a.phone},a.id)})})]})})},s=r,t=function(a){return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)(h.Z,{}),(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h4",{className:j().steptwotitle,children:"Select a helper to assign to your errand"}),(0,d.jsx)(s,{all_helpers:a.helpers})]})]})},u=t,v=function(a){return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsxs)(g(),{children:[(0,d.jsx)("title",{children:"Step Two | Chores "}),(0,d.jsx)("meta",{name:"description",content:"Find trusted hands to handle your chores"})]}),(0,d.jsx)(u,{helpers:a.helpers})]})},w=!0,x=v},9:function(a){a.exports={box:"Helperdetail_box__xj8hn",price:"Helperdetail_price__84klN",image:"Helperdetail_image__ZiENt"}},9296:function(a){a.exports={steptwotitle:"Steptwo_steptwotitle__KwTtw"}}},function(a){a.O(0,[424,774,888,179],function(){var b;return a(a.s=4116)}),_N_E=a.O()}])