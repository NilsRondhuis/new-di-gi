parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/dosis-v19-latin-ext_latin-300.eot":[["dosis-v19-latin-ext_latin-300.1a7e0cb3.eot","It2E"],"It2E"],"./../fonts/dosis-v19-latin-ext_latin-300.woff2":[["dosis-v19-latin-ext_latin-300.73d7532e.woff2","Lov0"],"Lov0"],"./../fonts/dosis-v19-latin-ext_latin-300.woff":[["dosis-v19-latin-ext_latin-300.1f911ce3.woff","WVVg"],"WVVg"],"./../fonts/dosis-v19-latin-ext_latin-300.ttf":[["dosis-v19-latin-ext_latin-300.c33acb47.ttf","Oz7A"],"Oz7A"],"./../fonts/dosis-v19-latin-ext_latin-300.svg":[["dosis-v19-latin-ext_latin-300.7070d2e7.svg","JEBD"],"JEBD"],"./../fonts/dosis-v19-latin-ext_latin-regular.eot":[["dosis-v19-latin-ext_latin-regular.b03a1657.eot","vVBc"],"vVBc"],"./../fonts/dosis-v19-latin-ext_latin-regular.woff2":[["dosis-v19-latin-ext_latin-regular.f2c253be.woff2","CQaV"],"CQaV"],"./../fonts/dosis-v19-latin-ext_latin-regular.woff":[["dosis-v19-latin-ext_latin-regular.5898c902.woff","WDcH"],"WDcH"],"./../fonts/dosis-v19-latin-ext_latin-regular.ttf":[["dosis-v19-latin-ext_latin-regular.3917d9f4.ttf","CUst"],"CUst"],"./../fonts/dosis-v19-latin-ext_latin-regular.svg":[["dosis-v19-latin-ext_latin-regular.953fb717.svg","B12H"],"B12H"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.eot":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.ea60fa2d.eot","fALk"],"fALk"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.92bb4b59.woff2","o792"],"o792"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.09f456c2.woff","jSAk"],"jSAk"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.ttf":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.20900457.ttf","NB3s"],"NB3s"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.svg":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-regular.ab9033c4.svg","LMz8"],"LMz8"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.eot":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.2f78623b.eot","j80i"],"j80i"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.woff2":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.2b4b0095.woff2","LG4B"],"LG4B"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.woff":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.f6e26158.woff","dAqV"],"dAqV"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.ttf":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.9112bc5f.ttf","zLVW"],"zLVW"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.svg":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-500.140b987b.svg","ZudM"],"ZudM"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.eot":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.9c81cfb2.eot","NnMP"],"NnMP"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.3c2b6ade.woff2","K7nz"],"K7nz"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.woff":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.61f433f4.woff","wE5i"],"wE5i"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.ttf":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.b75406a8.ttf","sT7R"],"sT7R"],"./../fonts/roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.svg":[["roboto-v27-latin-ext_latin_cyrillic-ext_cyrillic-700.2bdb7ca3.svg","hndT"],"hndT"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.eot":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.56911ebd.eot","AIrc"],"AIrc"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.a3c2b8e1.woff2","vYoU"],"vYoU"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.9c8e3451.woff","hfeN"],"hfeN"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.ttf":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.84f76f7c.ttf","wC6C"],"wC6C"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.svg":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-regular.81d7158b.svg","aEEj"],"aEEj"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.eot":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.ec926d4f.eot","vLln"],"vLln"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.28f7e85d.woff2","H62Z"],"H62Z"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.woff":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.4b0605a6.woff","coAk"],"coAk"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.ttf":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.5aab8cb2.ttf","mWrE"],"mWrE"],"./../fonts/roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.svg":[["roboto-condensed-v19-latin-ext_latin_cyrillic-ext_cyrillic-700.b0890a99.svg","x4AF"],"x4AF"],"./../images/mobile/hero/bg-img.jpg":[["bg-img.eb4835a1.jpg","ApkF"],"ApkF"],"./../images/mobile/hero/bg-img@2x.jpg":[["bg-img@2x.9ea3febe.jpg","itoG"],"itoG"],"./../images/mobile/hero/bg-img@3x.jpg":[["bg-img@3x.e40c8c85.jpg","NkrW"],"NkrW"],"./../images/portrait/hero/bg-img.jpg":[["bg-img.4ebf092d.jpg","SOWd"],"SOWd"],"./../images/portrait/hero/bg-img@2x.jpg":[["bg-img@2x.8de582c4.jpg","cr0M"],"cr0M"],"./../images/portrait/hero/bg-img@3x.jpg":[["bg-img@3x.9d5256e3.jpg","KOiF"],"KOiF"],"./../images/tablet/hero/bg-img.jpg":[["bg-img.c96a60e2.jpg","OtMT"],"OtMT"],"./../images/tablet/hero/bg-img@2x.jpg":[["bg-img@2x.e78bdd53.jpg","vNDH"],"vNDH"],"./../images/tablet/hero/bg-img@3x.jpg":[["bg-img@3x.5e3e359d.jpg","BxWr"],"BxWr"],"./../images/desktop/hero/bg-img.jpg":[["bg-img.cc085b3e.jpg","UbsA"],"UbsA"],"./../images/desktop/hero/bg-img@2x.jpg":[["bg-img@2x.4a44dd1a.jpg","bmTQ"],"bmTQ"],"./../images/desktop/hero/bg-img@3x.jpg":[["bg-img@3x.3bf56889.jpg","QltR"],"QltR"],"./../images/desktop-hd/hero/bg-img.jpg":[["bg-img.f742b32f.jpg","RMQI"],"RMQI"],"./../images/desktop-hd/hero/bg-img@2x.jpg":[["bg-img@2x.89f7a093.jpg","DFPU"],"DFPU"],"./../images/desktop-hd/hero/bg-img@3x.jpg":[["bg-img@3x.a88b3844.jpg","fTCR"],"fTCR"],"./../images/icons/strategy.png":[["strategy.472fccb7.png","YMvi"],"YMvi"],"./../images/icons/strategy@2x.png":[["strategy@2x.472fccb7.png","jblK"],"jblK"],"./../images/icons/strategy@3x.png":[["strategy@3x.472fccb7.png","NLee"],"NLee"],"./../images/icons/analysis.png":[["analysis.da94ec0a.png","qlEL"],"qlEL"],"./../images/icons/analysis@2x.png":[["analysis@2x.ed7dabb9.png","PpMF"],"PpMF"],"./../images/icons/analysis@3x.png":[["analysis@3x.d32c396b.png","KT0w"],"KT0w"],"./../images/icons/social.png":[["social.70c51d89.png","Mwcv"],"Mwcv"],"./../images/icons/development.png":[["development.6f19c412.png","aHfS"],"aHfS"],"./../images/icons/content.png":[["content.c4b9d9df.png","rQaL"],"rQaL"],"./../images/icons/design.png":[["design.024e8cf5.png","DCeV"],"DCeV"],"./../images/icons/digital.png":[["digital.6f391fd3.png","igpH"],"igpH"],"./../images/icons/product.png":[["product.a140fb94.png","CSO2"],"CSO2"],"./../images/svg/info-button.svg":[["info-button.e70eb21c.svg","nz2w"],"nz2w"],"./../images/svg/search.svg":[["search.677addf5.svg","QlXK"],"QlXK"],"./../images/svg/info-btn-white.svg":[["info-btn-white.042c15e9.svg","c0Rc"],"c0Rc"]}],"Yqj3":[function(require,module,exports) {
const e={listProject:document.querySelector(".list-project"),listService:document.querySelector(".list-service"),listNews:document.querySelector(".list-news")};function t(e){e.preventDefault()}e.listProject.addEventListener("click",t),e.listService.addEventListener("click",t),e.listNews.addEventListener("click",t);
},{}],"fi17":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={body:document.querySelector("body"),btnMenu:document.querySelector(".btn-menu"),iconBurger:document.querySelector(".btn-menu__icon-burger"),iconCross:document.querySelector(".btn-menu__icon-cross"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),listModal:document.querySelector(".list-modal")};exports.default=e;
},{}],"i0CD":[function(require,module,exports) {
"use strict";var s=e(require("./refs/refs"));function e(s){return s&&s.__esModule?s:{default:s}}function i(){s.default.iconBurger.classList.add("btn-menu__icon--is-hidden"),s.default.iconCross.classList.remove("btn-menu__icon--is-hidden"),s.default.backdrop.classList.toggle("backdrop--is-show"),s.default.modal.classList.toggle("modal-is-show"),s.default.body.classList.toggle("hidden-scroll"),s.default.backdrop.classList.contains("backdrop--is-show")||(s.default.iconBurger.classList.remove("btn-menu__icon--is-hidden"),s.default.iconCross.classList.add("btn-menu__icon--is-hidden"))}function d(e){e.target.classList.contains("list-modal__link")&&(s.default.iconBurger.classList.remove("btn-menu__icon--is-hidden"),s.default.iconCross.classList.add("btn-menu__icon--is-hidden"),s.default.backdrop.classList.remove("backdrop--is-show"),s.default.modal.classList.remove("modal-is-show"),s.default.body.classList.remove("hidden-scroll"))}s.default.btnMenu.addEventListener("click",i),s.default.listModal.addEventListener("click",d);
},{"./refs/refs":"fi17"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/common/common"),require("./js/refs/refs"),require("./js/menu");
},{"./sass/main.scss":"clu1","./js/common/common":"Yqj3","./js/refs/refs":"fi17","./js/menu":"i0CD"}]},{},["Focm"], null)
//# sourceMappingURL=/new-di-gi/src.5c749ab4.js.map