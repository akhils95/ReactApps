(this["webpackJsonpreact-apps"]=this["webpackJsonpreact-apps"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/CodeEditor.5fb397b8.svg"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a.p+"static/media/Calculater.c201bb4b.svg"},function(e,t,a){e.exports=a.p+"static/media/FaceRecognition.62ec4210.svg"},function(e,t,a){e.exports=a.p+"static/media/ChuckNorrisJokes.d6f03dc6.svg"},function(e,t,a){e.exports=a.p+"static/media/RoboFriends.ea5ba632.svg"},,function(e,t,a){e.exports=a.p+"static/media/collapse.1e5cee7c.svg"},function(e,t,a){e.exports=a.p+"static/media/expand.cca05a65.svg"},function(e,t,a){e.exports=a.p+"static/media/download.779331cb.svg"},function(e,t,a){e.exports=a.p+"static/media/CNLogo.26e4a703.svg"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(26),a(2)),i=a(3),s=a(5),u=a(4),m=a(11),d=a.n(m),h=(a(9),function(e){var t=e.onRouteChange;return r.a.createElement("div",{className:"pa2 ma0 flex items-center justify-between theme_h"},r.a.createElement("div",{className:"tl w-25"},r.a.createElement("img",{className:"grow logo pointer",alt:"Logo",src:d.a,onClick:function(){return t("home")}})),r.a.createElement("div",{className:"tc w-50"},r.a.createElement("h1",{className:"f1 pointer"},"Mini React Apps Collection")),r.a.createElement("div",{className:"w-25"},r.a.createElement("p",{onClick:function(){return t("home")},className:"f4 link tr pa2 dim pointer"},"Home")))}),p=function(e){var t=e.name,a=e.thumb;return r.a.createElement("div",{className:"tc theme_c dib br3 pa3 ma2 ml4 mr4 pointer grow bw2 shadow-5"},r.a.createElement("img",{className:"thumb",alt:"".concat(t),src:a}),r.a.createElement("div",null,r.a.createElement("h1",null,t)))},v=a(12),f=a.n(v),b=a(7),E=a.n(b),g=a(13),C=a.n(g),N=a(14),y=a.n(N),j=a(15),k=a.n(j),O=[{id:1,name:"Face Recognition",thumb:C.a,route:"fr"},{id:2,name:"Live Code Editor",thumb:E.a,route:"Code Editor"},{id:3,name:"Calculater",thumb:f.a,route:"Calculater"},{id:4,name:"Resume Builder",thumb:E.a,route:"Resume Builder"},{id:5,name:"Robo Friends Searchbox",thumb:k.a,route:"RoboFriends"},{id:6,name:"Chuck Norris Jokes",thumb:y.a,route:"ChuckNorris"}],w=function(e){var t=e.onRouteChange;return r.a.createElement("div",{className:"flex flex-wrap justify-center"},O.map((function(e,a){return r.a.createElement("div",{onClick:function(){return t(e.route)}},r.a.createElement(p,{name:e.name,thumb:e.thumb}))})))},R=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"auto",minHeight:"100vh"}},e.children)},S=a(1),x=function(e){var t=e.dispVal,a=e.query;return r.a.createElement("div",{className:"display"},r.a.createElement("p",{className:"displayQuery"},a),r.a.createElement("h1",{className:"displayResult"},t))},B=[{Cname:"operator",value:"+",display:"+"},{Cname:"operator",value:"-",display:"-"},{Cname:"operator",value:"*",display:"x"},{Cname:"operator",value:"/",display:"\xf7"},{value:"7",display:"7"},{value:"8",display:"8"},{value:"9",display:"9"},{value:"4",display:"4"},{value:"5",display:"5"},{value:"6",display:"6"},{value:"1",display:"1"},{value:"2",display:"2"},{value:"3",display:"3"},{Cname:"decimal",value:".",display:"."},{value:"0",display:"0"},{Cname:"clear",display:"C"},{Cname:"equalSign operator",value:"=",display:"="}];var F=function(e){var t=e.cName,a=e.value,n=e.display,c=e.onClick;return r.a.createElement("button",{className:t?t+" calcBtn":" calcBtn",value:a||"",onClick:c},n)};var J=function(e){var t=e.btnClick;return r.a.createElement("div",{className:"btnPanel"},B.map((function(e){return r.a.createElement(F,{onClick:function(){return t(e.Cname?e.Cname:null,e.value)},cName:e.Cname?e.Cname:null,value:e.value?e.value:null,display:e.display})})))};a(27);var L=function(){var e=Object(n.useState)(0),t=Object(S.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(S.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(S.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)("0"),v=Object(S.a)(p,2),f=v[0],b=v[1],E=Object(n.useState)("0"),g=Object(S.a)(E,2),C=g[0],N=g[1],y={"/":function(e,t){return e/t},"*":function(e,t){return e*t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"=":function(e,t){return t}};return r.a.createElement("div",{className:"calcApp"},r.a.createElement(x,{dispVal:f,query:C}),r.a.createElement(J,{btnClick:function(e,t){var n;e?e.includes("operator")?function(e){var t=Number(f);if(i&&d)return s(e),void N(function(e,t){return e.substr(e.lenght-1),e.replace(/.$/,t)}(C,e));if(a){N("0"===C?f+e:C+f+e);var n=y[i](a,t);b(n),c(n)}else c(t),N("0"===C?f+e:C+f+e);h(!0),s(e)}(t):e.includes("decimal")?d||f.includes(".")||b("".concat(f,".")):e.includes("clear")&&(c(0),s(""),h(!1),b("0"),N("0")):(n=t,"="===i&&N("0"),d?(b(n),h(!1)):b("0"===f?n:f+n))}}))},M=(a(28),a(29),a(30),a(31),a(32),a(16)),D=a(17),H=a.n(D),I=a(18),A=a.n(I);var P=function(e){var t=e.displayName,a=e.language,c=e.value,l=e.onChange,o=Object(n.useState)(!0),i=Object(S.a)(o,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"editorContainer ".concat(s?"":"collapsed")},r.a.createElement("div",{className:"editorHead"},t,r.a.createElement("button",{type:"button",className:"collapseBtn",onClick:function(){return u((function(e){return!e}))}},r.a.createElement("img",{className:"editorIcons",src:s?H.a:A.a}))),r.a.createElement(M.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:c,className:"codeMirrorWrapper",options:{lineWrapping:!0,lint:!0,mode:a,theme:"material",lineNumbers:!0}}))};a(34);var W=function(e,t){var a="React-Code-Editor-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(S.a)(r,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,o]};var _=function(){var e=W("html",""),t=Object(S.a)(e,2),a=t[0],c=t[1],l=W("css",""),o=Object(S.a)(l,2),i=o[0],s=o[1],u=W("js",""),m=Object(S.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)(""),v=Object(S.a)(p,2),f=v[0],b=v[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){b("<html>\n\t\t\t\t\t<body>".concat(a,"</body>\n\t\t\t\t\t<style>").concat(i,"</style>\n\t\t\t\t\t<script>").concat(d,"<\/script>\n\t\t\t\t</html>"))}),250);return function(){return clearTimeout(e)}}),[a,i,d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pane"},r.a.createElement(P,{displayName:"HTML",language:"xml",value:a,onChange:c}),r.a.createElement(P,{displayName:"CSS",language:"css",value:i,onChange:s}),r.a.createElement(P,{displayName:"JavaScript",language:"javascript",value:d,onChange:h})),r.a.createElement("div",{className:"pane"},r.a.createElement("iframe",{srcDoc:f,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))},q=a(19),T=a.n(q);function V(){var e=Object(n.useState)("My CV"),t=Object(S.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(5),o=Object(S.a)(l,2),i=o[0],s=o[1];return r.a.createElement("div",{className:"RBHeader"},r.a.createElement("input",{className:"resumeName",onChange:function(e){c(e.target.value),s(e.target.value.length)},value:a,style:{width:i+"ch"}}),r.a.createElement("img",{className:"resumeDownloadIcon",src:T.a}))}a(35);var Y=function(){return r.a.createElement("div",{className:"resumePage"},r.a.createElement(V,null))};var $=function(){return Object(n.useEffect)((function(){window.open("https://face-recogn-brain.herokuapp.com/","_blank")})),r.a.createElement("h2",null,"Redirecting to Face Recognition App")},Q=a(20),z=a.n(Q),G=function(){return r.a.createElement("div",{className:"center pa4 pv2 bg-dark-blue"},r.a.createElement("img",{className:"center grow",alt:"Chuck_Approved",src:z.a,height:"200px",width:"auto"}))},K=function(e){var t=e.card;return r.a.createElement("div",{class:"mw9 mv2 center ph3-ns"},r.a.createElement("div",{class:"cf w-100 ph2-ns"},r.a.createElement("div",{class:"fl w-10-ns pa2 "},r.a.createElement("div",{class:"pv4"},r.a.createElement("img",{alt:"chuck",src:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",width:"50",height:"auto"}))),r.a.createElement("div",{class:"fl w-90-ns pa2"},r.a.createElement("div",{class:"bg-light-blue shadow-3 br4 pv4"},r.a.createElement("p",{class:"center pa2"},t.value)))))},U=(a(36),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{classNmae:"tc"},"Ooops. Something seems to be broken!!!"):this.props.children}}]),a}(n.Component)),X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).fetchJoke=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){n.setState({card:e})}))},n.state={isFetching:!1,card:{},refreshPage:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchJoke()}},{key:"render",value:function(){return r.a.createElement("div",{className:"vh-100 dt w-100 bg-orange"},r.a.createElement(G,null),r.a.createElement(U,null,r.a.createElement(K,{card:this.state.card})),r.a.createElement("p",null,this.state.isFetching?"Loading Joke...":""),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"ma4 f6 link dim ba b--near-black br3 bw1 ph3 pv2 mb2 dib black bg-blue pointer",onClick:this.fetchJoke},"Next Joke")))}}]),a}(n.Component),Z=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",style:{cursor:"pointer"}},r.a.createElement("img",{alt:"".concat(t),src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a)))},ee=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(Z,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},te=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"p2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue customSearch",type:"search",placeholder:"search robots",onChange:t}))},ae=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px",padding:"30px 0"}},e.children)},ne=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{classNmae:"tc"},"Ooops. Something seems to be broken!!!"):this.props.children}}]),a}(n.Component),re=(a(37),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc roboPage"},r.a.createElement("h1",{className:"f1 segaFont"},"RoboFriends"),r.a.createElement(te,{searchChange:this.onSearchChange}),r.a.createElement(ae,null,r.a.createElement(ne,null,r.a.createElement(ee,{robots:t}))))}}]),a}(n.Component)),ce=(a(38),{route:"Resume Builder"}),le=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t})},e.state=ce,e}return Object(i.a)(a,[{key:"render",value:function(){return"home"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(w,{onRouteChange:this.onRouteChange}))):"Calculater"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(L,null))):"Code Editor"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(_,null))):"fr"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement($,null))):"Resume Builder"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(Y,null))):"RoboFriends"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(re,null))):"ChuckNorris"===this.state.route?r.a.createElement("div",{className:"tc full"},r.a.createElement(h,{onRouteChange:this.onRouteChange}),r.a.createElement(R,null,r.a.createElement(X,null))):void 0}}]),a}(n.Component);a(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.04eb9e3e.chunk.js.map