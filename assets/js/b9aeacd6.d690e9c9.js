/*! For license information please see b9aeacd6.d690e9c9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4205],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8892:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(2784),r(3905)),s=["components"],i={id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},l=void 0,c={unversionedId:"adding-css-reset",id:"adding-css-reset",title:"Adding a CSS Reset",description:"This project setup uses [PostCSS Normalize] for adding a [CSS Reset].",source:"@site/../docs/adding-css-reset.md",sourceDirName:".",slug:"/adding-css-reset",permalink:"/docs/adding-css-reset",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-css-reset.md",tags:[],version:"current",lastUpdatedBy:"Max Romanyuta",lastUpdatedAt:1618194630,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},sidebar:"docs",previous:{title:"Adding Sass Stylesheets",permalink:"/docs/adding-a-sass-stylesheet"},next:{title:"Post-Processing CSS",permalink:"/docs/post-processing-css"}},u=[{value:"<code>index.css</code>",id:"indexcss",children:[],level:2},{value:"Browser support",id:"browser-support",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project setup uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/postcss-normalize"},"PostCSS Normalize")," for adding a ",(0,a.kt)("a",{parentName:"p",href:"https://cssreset.com/what-is-a-css-reset/"},"CSS Reset"),"."),(0,a.kt)("p",null,"To start using it, add ",(0,a.kt)("inlineCode",{parentName:"p"},"@import-normalize;")," anywhere in your CSS file(s). You only need to include it once and duplicate imports are automatically removed. Since you only need to include it once, a good place to add it is ",(0,a.kt)("inlineCode",{parentName:"p"},"index.css")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css"),"."),(0,a.kt)("h2",{id:"indexcss"},(0,a.kt)("inlineCode",{parentName:"h2"},"index.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import-normalize; /* bring in normalize.css styles */\n\n/* rest of app styles */\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip"),': If you see an "',(0,a.kt)("em",{parentName:"p"},"Unknown at rule @import-normalize css(unknownAtRules)"),'" warning in VSCode, change the ',(0,a.kt)("inlineCode",{parentName:"p"},"css.lint.unknownAtRules")," setting to ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore"),".")),(0,a.kt)("p",null,"You can control which parts of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/normalize.css"},"normalize.css")," to use via your project's ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist"),"."),(0,a.kt)("p",null,"Results when ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"last 3 versions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),(0,a.kt)("p",null,"Results when ",(0,a.kt)("a",{parentName:"p",href:"https://browserl.ist/"},"browserslist")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"last 2 versions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),(0,a.kt)("h2",{id:"browser-support"},"Browser support"),(0,a.kt)("p",null,"Browser support is dictated by what normalize.css ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/csstools/normalize.css#browser-support"},"supports"),". As of this writing, it includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chrome (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Edge (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Firefox (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Firefox ESR"),(0,a.kt)("li",{parentName:"ul"},"Opera (last 3)"),(0,a.kt)("li",{parentName:"ul"},"Safari (last 3)"),(0,a.kt)("li",{parentName:"ul"},"iOS Safari (last 2)"),(0,a.kt)("li",{parentName:"ul"},"Internet Explorer 9+")))}f.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,l=o(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var p=0;p<i.length;p++)n.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},3426:function(e,t,r){var n=r(7320),o=60103,a=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=g.prototype=new b;k.constructor=g,n(k,h.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return s=s(l=e),e=""===n?"."+C(l,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),P(s,t,r,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(N,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+C(i=e[c],c);l+=P(i,t,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=P(i=i.value,t,r,u=n+C(i,c++),s);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(d(321));return e}},2784:function(e,t,r){r(3426)}}]);