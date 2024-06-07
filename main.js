(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>g});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(99),t.b),p=new URL(t(842),t.b),l=new URL(t(479),t.b),u=a()(r()),m=s()(d),h=s()(p),f=s()(l);u.push([n.id,`@font-face {\n    font-family: 'Roboto';\n    src: url(${m});\n    font-weight: 700;\n}\n@font-face {\n    font-family: 'Roboto';\n    src: url(${h});\n    font-weight: 300;\n}\n@font-face {\n    font-family: 'Roboto';\n    src: url(${f});\n    font-weight: 500;\n}\n\nhtml {\n    width: 100%;\n    height: 100%;\n    font-family: 'Roboto';\n    font-weight: 300;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    background: #faf7f0;\n    margin: 0;\n}\nh1 {\n    margin: 0;\n}\n\n#content, .photo-container {\n    width: 80%;\n    height: auto;\n    margin: 0 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n    padding-bottom: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: #fefefe;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;\n}\n.header-partition {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    \n}\nheader img {\n    height: 5rem;\n    width: 10rem;\n    background: transparent;\n}\n#cart {\n    position: absolute;\n    top: 4%;\n    right: 10%;\n    height: 25px;\n    width: 25px;\n    fill: #044325;\n}\n#cart:hover {\n    fill: #02bbe0;\n    transition: 150ms ease-in-out;\n}\n.h1-theme {\n    font-family: 'Roboto';\n    font-weight: 300;\n    font-size: 1.75em;\n    color: #044325;\n    padding: 2% 0;\n}\nbutton:hover {\n    color: #018545;\n    transition: 200ms ease-in-out;\n}\nnav {\n    display: flex;\n    width: 80%;\n    margin: 0 10%;\n    justify-content: space-between;\n}\n.button-38 {\n  background-color: #FFFFFF;\n  border: 0;\n  border-radius: .5rem;\n  box-sizing: border-box;\n  color: #111827;\n  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  font-size: .875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n  padding: .75rem 1rem;\n  text-align: center;\n  text-decoration: none #D1D5DB solid;\n  text-decoration-thickness: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.button-38:hover {\n  background-color: rgb(249,250,251);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(1, 160, 149, 0.454);\n  transition: 200ms ease-in-out;\n}\n\n.button-38:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.button-38:focus-visible {\n  box-shadow: none;\n}\n\n/* Welcome box border styles */\n\n.welcomeBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border: 1px solid rgb(248, 248, 248);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    margin-top: 10%;\n    padding: 5%;\n    width: auto;\n    background-color: #fefefe;\n    border-radius: 10px;\n}\n.photo-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    text-align: center;\n    padding: 5% 0;\n    height: auto;\n    transition: 300ms ease-in-out;\n    transform: scale(1);\n}\n.photo-container:hover {\n    scale: 1.05;\n    transition: 300ms ease-in-out;\n}\n.photo-container img {\n    height: 250px;\n    width: 250px;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.text-block {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border: 1px solid rgb(248, 248, 248);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    margin-top: 10%;\n    width: auto;\n    background-color: #fefefe;\n    border-radius: 10px;\n}\n.text-block h2, .text-block p {\n    font-size: 1.25rem;\n    margin: 1%;\n    padding: 2%;\n}\n.item-container {\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 50%;\n    border: 1px solid rgb(248, 248, 248);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    background-color: #fefefe;\n    border-radius: 10px;\n}\n.item-container > * {\n    margin: 0;\n}\n.item-container img {\n    height: 200px;\n    width: 200px;\n    object-fit: cover;\n    margin: 5% 0;\n}\n.item-container button {\n    margin: 3%;\n}\n#contact-info-box {\n    margin-top: 8%;\n}\n#contact-header {\n    border-bottom: #044325 2px solid;\n}\n\n@media only screen and (min-width: 620px) {\n    .welcomeBox {\n        width: 50%;\n        margin: 5% 25% 0 25%;\n        padding: 10px;\n    }\n    nav {\n        width: 50%;\n        margin: 0 25%;\n    }\n    .photo-container img {\n        height: 350px;\n        width: 350px;\n        object-fit: cover;\n        border-radius: 50%;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    }\n    .item-container {\n        height: 100%;\n        border: 1px solid rgb(248, 248, 248);\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n        background-color: #fefefe;\n        border-radius: 10px;\n    }\n    #items-grid {\n        display: grid;\n        width: 90%;\n        margin: 5%;\n        grid-template-rows: repeat(2, auto);\n        grid-template-columns: repeat(2, 1fr);\n        gap: 20px;\n    }\n    .item-container {\n        grid-column: span 1;\n        grid-row: span 1;\n    }\n}\n\n@media only screen and (min-width: 900px) {\n    .welcomeBox {\n        width: 40%;\n        margin: 2.5% 30% 0 30%;\n        padding: 10px;\n    }\n    nav {\n        width: 30%;\n        margin: 0 25%;\n    }\n    .photo-container {\n        padding: 0;\n        margin-top: 2.5%;\n    }\n    .photo-container img {\n        height: 500px;\n        width: 500px;\n        object-fit: cover;\n        border-radius: 50%;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    }\n    .text-block {\n        margin-top: 5%;\n    }\n    .text-block > * {\n        margin: 0;\n    }\n    #items-grid {\n        display: grid;\n        width: 80%;\n        margin: 5% 10%;\n        grid-template-rows: repeat(2, auto);\n        grid-template-columns: repeat(3, 1fr);\n        gap: 20px;\n    }\n    .item-container {\n        grid-column: span 1;\n        grid-row: span 1;\n    }\n}`,""]);const g=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},99:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},842:(n,e,t)=>{n.exports=t.p+"333da16a3f3cc391d087.ttf"},479:(n,e,t)=>{n.exports=t.p+"7c8d04cd831df3033c8a.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"38c4b02e0c3f645d653e.jpg",e=t.p+"ec991217e36493b7b9ea.png";class o{constructor(n,e,t){this.name=n,this.price=e,this.image=t,this.element=this.createElement()}createElement(){const n=document.createElement("div");n.classList.add("item-container");const e=document.createElement("img");e.src=this.image,e.alt=this.name,n.appendChild(e);const t=document.createElement("h3");t.textContent=this.name,n.appendChild(t);const o=document.createElement("p");o.textContent=`$${this.price.toFixed(2)}`,n.appendChild(o);const r=document.createElement("button");return r.textContent="Add to Cart",r.classList.add("button-38"),n.appendChild(r),n}}const r=t.p+"663109a28c1cf6174ca4.jpg",i=t.p+"0cf3eb753d84543e9fc9.jpg",a=t.p+"a8a32c6eb1e932fd1791.jpg",c=function(){s();const n=document.querySelector("#content"),e=document.createElement("div");e.id="items-grid",n.innerHTML="",[new o("coffee",5.99,r),new o("latte",3.99,i),new o("Pour Over",4,a)].forEach((n=>{e.appendChild(n.element)})),n.appendChild(e)},s=function(){const n=document.querySelector("#content");let t=document.querySelector("header");t?t.innerHTML="":(t=document.createElement("header"),document.body.prepend(t));const o=new Image;o.src=e,t.appendChild(o);const r=document.createElement("div");r.id="cart",r.innerHTML='\n        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n        viewBox="0 0 902.86 902.86"\n        xml:space="preserve">\n            <g>\n            <g>\n                <path class="cart-path" d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z\n                        M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>\n                <path class="cart-path" d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717\n                    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744\n                    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742\n                    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744\n                    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z\n                        M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742\n                    S619.162,694.432,619.162,716.897z"/>\n            </g>\n            </g>\n        </svg>\n    ',t.appendChild(r);const i=document.createElement("nav"),a=document.createElement("button");a.textContent="Home",a.classList.add("button-38"),a.id="home";const p=document.createElement("button");p.textContent="Menu",p.classList.add("button-38"),p.id="menu";const l=document.createElement("button");l.textContent="Contact",l.classList.add("button-38"),l.id="contact",t.appendChild(i),i.appendChild(a),i.appendChild(p),i.appendChild(l);const u=()=>{n.innerHTML=""};a.addEventListener("click",(()=>{u(),d()})),p.addEventListener("click",(()=>{u(),c()})),l.addEventListener("click",(()=>{u(),function(){s();const n=document.querySelector("#content"),e=document.createElement("div");e.id="contact-info-box";const t=document.createElement("h1");t.textContent="Reach out.",t.id="contact-header",n.appendChild(e),e.appendChild(t);const o=document.createElement("h4");o.textContent="samwillrobinson@gmail.com",e.appendChild(o);const r=document.createElement("h4");r.textContent="828-989-1290",e.appendChild(r)}()}))},d=function(){s();const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1"),o=document.createElement("div");o.classList.add("welcomeBox"),e.appendChild(o),t.classList.add("h1-theme"),t.innerText="Welcome to Upland.",o.appendChild(t);const r=document.createElement("p");r.textContent="Explore our selection of coffees by using the tabs above.",o.appendChild(r);const i=document.createElement("div");i.classList.add("photo-container");const a=new Image;a.src=n,i.appendChild(a),i.style.position="relative",e.appendChild(i);const d=document.createElement("h4");d.textContent="Explore now.",i.appendChild(d),d.style.position="absolute",d.style.top="40%",d.style.color="#f2f2f2",i.addEventListener("click",(()=>{e.innerHTML="",c()}))};var p=t(72),l=t.n(p),u=t(825),m=t.n(u),h=t(659),f=t.n(h),g=t(56),x=t.n(g),b=t(540),v=t.n(b),w=t(113),y=t.n(w),C=t(208),E={};E.styleTagTransform=y(),E.setAttributes=x(),E.insert=f().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=v(),l()(C.A,E),C.A&&C.A.locals&&C.A.locals,d()})()})();