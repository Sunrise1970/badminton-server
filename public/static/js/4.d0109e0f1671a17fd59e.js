webpackJsonp([4,6],[,function(t,e,n){var o=n(25)("wks"),r=n(28),i=n(3).Symbol,s="function"==typeof i,c=t.exports=function(t){return o[t]||(o[t]=s&&i[t]||(s?i:r)("Symbol."+t))};c.store=o},,,function(t,e){t.exports={}},,,function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},,function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(15).f,r=n(8),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(25)("keys"),r=n(28);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(50),r=n(10);t.exports=function(t){return o(r(t))}},,,,,function(t,e,n){var o=n(7),r=n(1)("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:i?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},,function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e,n){"use strict";var o=n(24),r=n(32),i=n(63),s=n(6),c=n(8),a=n(4),u=n(53),f=n(11),l=n(59),p=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",m="keys",v="values",g=function(){return this};t.exports=function(t,e,n,y,A,b,x){u(n,e,y);var _,w,T,C=function(t){if(!d&&t in k)return k[t];switch(t){case m:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",E=A==v,j=!1,k=t.prototype,M=k[p]||k[h]||A&&k[A],L=M||C(A),P=A?E?C("entries"):L:void 0,I="Array"==e?k.entries||M:M;if(I&&(T=l(I.call(new t)),T!==Object.prototype&&(f(T,O,!0),o||c(T,p)||s(T,p,g))),E&&M&&M.name!==v&&(j=!0,L=function(){return M.call(this)}),o&&!x||!d&&!j&&k[p]||s(k,p,L),a[e]=L,a[O]=g,A)if(_={values:E?L:C(v),keys:b?L:C(m),entries:P},x)for(w in _)w in k||i(k,w,_[w]);else r(r.P+r.F*(d||j),e,_);return _}},function(t,e){t.exports=!0},function(t,e,n){var o=n(3),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var o,r,i,s=n(18),c=n(49),a=n(22),u=n(31),f=n(3),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,m=0,v={},g="onreadystatechange",y=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},A=function(t){y.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return v[++m]=function(){c("function"==typeof t?t:Function(t),e)},o(m),m},d=function(t){delete v[t]},"process"==n(7)(l)?o=function(t){l.nextTick(s(y,t,1))}:h?(r=new h,i=r.port2,r.port1.onmessage=A,o=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",A,!1)):o=g in u("script")?function(t){a.appendChild(u("script"))[g]=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,e,n){var o=n(13),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:{type:String,"default":""}},data:function(){return{rebackHead:!1}},computed:{},ready:function(){var t=this.$route.path;(/index/.test(t)||/competitonList/.test(t)||/result/.test(t))&&(this.rebackHead=!0)},attached:function(){},methods:{rebackHandler:function(){window.history.back()}},components:{}}},,,,function(t,e,n){e=t.exports=n(16)(),e.push([t.id,".head{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.head a{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;background-size:100%}.head a.active-border{border-bottom:2px solid #ccc}.reback-head{position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.pdb{padding-bottom:.05333333333333334rem}","",{version:3,sources:["/./src/views/common/head.vue"],names:[],mappings:"AAAA,MAAM,oBAAoB,oBAAoB,aAAa,eAAe,WAAW,cAAc,sBAAsB,8BAA8B,MAAM,wBAAwB,+BAA+B,CAAC,QAAQ,cAAc,mBAAmB,WAAW,OAAO,WAAW,oBAAoB,CAAC,sBAAsB,4BAA4B,CAAC,aAAa,eAAe,WAAW,cAAc,sBAAsB,8BAA8B,MAAM,wBAAwB,+BAA+B,CAAC,KAAK,oCAAqC,CAAC",file:"head.vue",sourcesContent:[".head{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.head a{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;background-size:100%}.head a.active-border{border-bottom:2px solid #ccc}.reback-head{position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.pdb{padding-bottom:0.05333333333333334rem}\n"],sourceRoot:"webpack://"}])},function(t,e,n){var o=n(33);"string"==typeof o&&(o=[[t.id,o,""]]);n(17)(o,{});o.locals&&(t.exports=o.locals)},function(t,e){t.exports=' <div class="head ui-nav-box pdb" v-if=rebackHead> <a v-link="{ path: \'/index\', activeClass: \'active-border\' }">活动</a> <a v-link="{ path: \'/competitonList\', activeClass: \'active-border\' }">比赛</a> </div> <div class="reback-head clearfix ui-nav-box" v-if=!rebackHead> <i @click=rebackHandler class="iconfont ui-icon-return"></i> {{title}} </div> '},function(t,e,n){var o,r;n(34),o=n(29),r=n(35),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o=n(19),r=n(1)("iterator"),i=n(4);t.exports=n(9).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){"use strict";var o=n(66)(!0);n(23)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(69);for(var o=n(3),r=n(6),i=n(4),s=n(1)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var u=c[a],f=o[u],l=f&&f.prototype;l&&!l[s]&&r(l,s,u),i[u]=i.Array}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.againstDetail=e.competitonUser=e.competitonAgainstDetail=e.competitonAgainst=e.competitonMember=e.competitonIntro=e.competitonList=e.attend=e.activityList=void 0;var r=n(77),i=o(r),s=n(72),c=o(s);i["default"].use(c["default"]);var a="http://127.0.0.1:3000";e.activityList=i["default"].resource(a+"/activity/activityList"),e.attend=i["default"].resource(a+"/competiton/attend"),e.competitonList=i["default"].resource(a+"/competiton/competitonList"),e.competitonIntro=i["default"].resource(a+"/competiton/competitonInfo"),e.competitonMember=i["default"].resource(a+"/competiton/memberList"),e.competitonAgainst=i["default"].resource(a+"/competiton/againstList"),e.competitonAgainstDetail=i["default"].resource(a+"/competiton/againstDetail"),e.competitonUser=i["default"].resource(a+"/competiton/userAgainstList"),e.againstDetail=i["default"].resource(a+"/competiton/againstDetail")},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setAgainstDetail=e.setCompetitonUser=e.setCompetitonAgainst=e.setCompetitonMember=e.setCompetitonIntro=e.setCompetitonList=e.setAttend=void 0;var i=n(43),s=r(i),c=n(81),a=o(c),u=n(74);e.setAttend=function(t,e){var n=t.dispatch;t.state;return console.log("action: from client input",e),console.log("action: from client input attend.name",e.name),new s["default"](function(t,o){(0,u.toAttend)(e).then(function(e){e=e.json()||{},200===e.code&&(console.log("action: from server return",e),t(e))})["catch"](function(t){n(a.SET_ATTEND_FAILURE),o(t)})})},e.setCompetitonList=function(t){var e=t.dispatch;t.state;return new s["default"](function(t,n){(0,u.getCompetitonList)().then(function(o){o=o.json()||{},200===o.code?(console.log("action-setCompetitonList: from server return",o.data.list),e(a.GET_COMPETITON_LIST,o.data.list),t(o)):n(o)})["catch"](function(t){e(a.GET_COMPETITON_LIST_FAILURE),n(t)})})},e.setCompetitonIntro=function(t,e){var n=t.dispatch;t.state;return new s["default"](function(t,o){(0,u.getCompetitonIntro)(e).then(function(e){e=e.json()||{},200===e.code?(console.log("action-setCompetitonIntro: from server return",e.data),n(a.GET_COMPETITON_INTRO,e.data),t(e)):o(e)})["catch"](function(t){n(a.GET_COMPETITON_INTRO_FAILURE),o(t)})})},e.setCompetitonMember=function(t,e,n){var o=t.dispatch;t.state;return new s["default"](function(t,r){(0,u.getCompetitonMember)(e,n).then(function(e){e=e.json()||{},200===e.code?(console.log("action-setCompetitonMember: from server return",e.data),o(a.GET_COMPETITON_MEMBER,e.data),o(a.GET_COMPETITON_TYPE,n),t(e)):r(e)})["catch"](function(t){o(a.GET_COMPETITON_MEMBER_FAILURE),r(t)})})},e.setCompetitonAgainst=function(t,e,n,o){var r=t.dispatch;t.state;return new s["default"](function(t,i){(0,u.getCompetitonAgainst)(e,n,o).then(function(e){e=e.json()||{},200===e.code?(console.log("action-setCompetitonAgainst: from server return",e.data.list),r(a.GET_COMPETITON_AGAINST,e.data.list),t(e)):i(e)})["catch"](function(t){r(a.GET_COMPETITON_AGAINST_FAILURE),i(t)})})},e.setCompetitonUser=function(t){var e=t.dispatch;t.state;return new s["default"](function(t,n){(0,u.getCompetitonUser)().then(function(o){o=o.json()||{},200===o.code?(console.log("action-setCompetitonUser: from server return",o.data),e(a.GET_COMPETITON_USER,o.data),t(o)):n(o)})["catch"](function(t){e(a.GET_COMPETITON_USER_FAILURE),n(t)})})},e.setAgainstDetail=function(t,e){var n=t.dispatch;t.state;return new s["default"](function(t,o){(0,u.getAgainstDetail)(e).then(function(e){e=e.json()||{},200===e.code?(console.log("action-setAgainstDetail: from server return",e.data.detail),n(a.GET_AGAINST_DETAIL,e.data.detail),t(e)):o(e)})["catch"](function(t){o(t)})})}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.againstDetail=e.competitonType=e.competitonUserList=e.againstList=e.memberList=e.intro=e.list=void 0;var r=n(76),i=o(r),s=i["default"].state.competiton;e.list=function(){return s.list},e.intro=function(){return s.intro},e.memberList=function(){return s.memberList},e.againstList=function(){return s.againstList},e.competitonUserList=function(){return s.competitonUserList},e.competitonType=function(){return s.competitonType},e.againstDetail=function(){return s.againstDetail}},function(t,e,n){t.exports={"default":n(44),__esModule:!0}},function(t,e,n){n(70),n(38),n(39),n(71),t.exports=n(9).Promise},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(14),r=n(27),i=n(67);t.exports=function(t){return function(e,n,s){var c,a=o(e),u=r(a.length),f=i(s,u);if(t&&n!=n){for(;u>f;)if(c=a[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var o=n(18),r=n(52),i=n(51),s=n(5),c=n(27),a=n(37),u={},f={},e=t.exports=function(t,e,n,l,p){var d,h,m,v,g=p?function(){return t}:a(t),y=o(n,l,e?2:1),A=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=c(t.length);d>A;A++)if(v=e?y(s(h=t[A])[0],h[1]):y(t[A]),v===u||v===f)return v}else for(m=g.call(t);!(h=m.next()).done;)if(v=r(m,y,h.value,e),v===u||v===f)return v};e.BREAK=u,e.RETURN=f},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(4),r=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){var o=n(5);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(i){var s=t["return"];throw void 0!==s&&o(s.call(t)),i}}},function(t,e,n){"use strict";var o=n(57),r=n(78),i=n(11),s={};n(6)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(1)("iterator"),r=!1;try{var i=[7][o]();i["return"]=function(){r=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:n=!0}},i[o]=function(){return s},t(i)}catch(c){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(3),r=n(26).set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==n(7)(s);t.exports=function(){var t,e,n,u=function(){var o,r;for(a&&(o=s.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,o&&o.enter()};if(a)n=function(){s.nextTick(u)};else if(i){var f=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();n=function(){p.then(u)}}else n=function(){r.call(o,u)};return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var o=n(5),r=n(58),i=n(21),s=n(12)("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,e=n(31)("iframe"),o=i.length,r="<",s=">";for(e.style.display="none",n(22).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+s+"document.F=Object"+r+"/script"+s),t.close(),u=t.F;o--;)delete u[a][i[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[a]=o(t),n=new c,c[a]=null,n[s]=t):n=u(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(15),r=n(5),i=n(61);t.exports=n(20)?Object.defineProperties:function(t,e){r(t);for(var n,s=i(e),c=s.length,a=0;c>a;)o.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var o=n(8),r=n(68),i=n(12)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var o=n(8),r=n(14),i=n(47)(!1),s=n(12)("IE_PROTO");t.exports=function(t,e){var n,c=r(t),a=0,u=[];for(n in c)n!=s&&o(c,n)&&u.push(n);for(;e.length>a;)o(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var o=n(60),r=n(21);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(6);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";var o=n(3),r=n(9),i=n(15),s=n(20),c=n(1)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:o[t];s&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(5),r=n(30),i=n(1)("species");t.exports=function(t,e){var n,s=o(t).constructor;return void 0===s||void 0==(n=o(s)[i])?e:r(n)}},function(t,e,n){var o=n(13),r=n(10);t.exports=function(t){return function(e,n){var i,s,c=String(r(e)),a=o(n),u=c.length;return a<0||a>=u?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var o=n(13),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(10);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(45),r=n(55),i=n(4),s=n(14);t.exports=n(23)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){},function(t,e,n){"use strict";var o,r,i,s=n(24),c=n(3),a=n(18),u=n(19),f=n(32),l=n(73),p=n(30),d=n(46),h=n(48),m=n(65),v=n(26).set,g=n(56)(),y="Promise",A=c.TypeError,b=c.process,x=c[y],b=c.process,_="process"==u(b),w=function(){},T=!!function(){try{var t=x.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(w,w)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof e}catch(o){}}(),C=function(t,e){return t===e||t===x&&e===i},O=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},E=function(t){return C(x,t)?new j(t):new r(t)},j=r=function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw A("Bad Promise constructor");e=t,n=o}),this.resolve=p(e),this.reject=p(n)},k=function(t){try{t()}catch(e){return{error:e}}},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var o=t._v,r=1==t._s,i=0,s=function(e){var n,i,s=r?e.ok:e.fail,c=e.resolve,a=e.reject,u=e.domain;try{s?(r||(2==t._h&&I(t),t._h=1),s===!0?n=o:(u&&u.enter(),n=s(o),u&&u.exit()),n===e.promise?a(A("Promise-chain cycle")):(i=O(n))?i.call(n,c,a):c(n)):a(o)}catch(f){a(f)}};n.length>i;)s(n[i++]);t._c=[],t._n=!1,e&&!t._h&&L(t)})}},L=function(t){v.call(c,function(){var e,n,o,r=t._v;if(P(t)&&(e=k(function(){_?b.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=_||P(t)?2:1),t._a=void 0,e)throw e.error})},P=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!P(e.promise))return!1;return!0},I=function(t){v.call(c,function(){var e;_?b.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},B=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},S=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw A("Promise can't be resolved itself");(e=O(t))?g(function(){var o={_w:n,_d:!1};try{e.call(t,a(S,o,1),a(B,o,1))}catch(r){B.call(o,r)}}):(n._v=t,n._s=1,M(n,!1))}catch(o){B.call({_w:n,_d:!1},o)}}};T||(x=function(t){d(this,x,y,"_h"),p(t),o.call(this);try{t(a(S,this,1),a(B,this,1))}catch(e){B.call(this,e)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(62)(x.prototype,{then:function(t,e){var n=E(m(this,x));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?b.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},"catch":function(t){return this.then(void 0,t)}}),j=function(){var t=new o;this.promise=t,this.resolve=a(S,t,1),this.reject=a(B,t,1)}),f(f.G+f.W+f.F*!T,{Promise:x}),n(11)(x,y),n(64)(y),i=n(9)[y],f(f.S+f.F*!T,y,{reject:function(t){var e=E(this),n=e.reject;return n(t),e.promise}}),f(f.S+f.F*(s||!T),y,{resolve:function(t){if(t instanceof x&&C(t.constructor,this))return t;var e=E(this),n=e.resolve;return n(t),e.promise}}),f(f.S+f.F*!(T&&n(54)(function(t){x.all(t)["catch"](w)})),y,{all:function(t){var e=this,n=E(e),o=n.resolve,r=n.reject,i=k(function(){var n=[],i=0,s=1;h(t,!1,function(t){var c=i++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[c]=t,--s||o(n))},r)}),--s||o(n)});return i&&r(i.error),n.promise},race:function(t){var e=this,n=E(e),o=n.reject,r=k(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return r&&o(r.error),n.promise}})},function(t,e){/*!
	 * vue-resource v0.9.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
"use strict";function n(t){this.state=et,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}}function o(t,e){t instanceof ot?this.promise=t:this.promise=new ot(t.bind(e)),this.context=e}function r(t){st=t.util,it=t.config.debug||!t.config.silent}function i(t){"undefined"!=typeof console&&it&&console.warn("[VueResource warn]: "+t)}function s(t){"undefined"!=typeof console&&console.error(t)}function c(t,e){return st.nextTick(t,e)}function a(t){return t.replace(/^\s*|\s*$/g,"")}function u(t){return"string"==typeof t}function f(t){return t===!0||t===!1}function l(t){return"function"==typeof t}function p(t){return null!==t&&"object"==typeof t}function d(t){return p(t)&&Object.getPrototypeOf(t)==Object.prototype}function h(t){return"undefined"!=typeof FormData&&t instanceof FormData}function m(t,e,n){var r=o.resolve(t);return arguments.length<2?r:r.then(e,n)}function v(t,e,n){return n=n||{},l(n)&&(n=n.call(e)),y(t.bind({$vm:e,$options:n}),t,{$options:n})}function g(t,e){var n,o;if("number"==typeof t.length)for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(p(t))for(o in t)t.hasOwnProperty(o)&&e.call(t[o],t[o],o);return t}function y(t){var e=ct.slice.call(arguments,1);return e.forEach(function(e){x(t,e,!0)}),t}function A(t){var e=ct.slice.call(arguments,1);return e.forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function b(t){var e=ct.slice.call(arguments,1);return e.forEach(function(e){x(t,e)}),t}function x(t,e,n){for(var o in e)n&&(d(e[o])||at(e[o]))?(d(e[o])&&!d(t[o])&&(t[o]={}),at(e[o])&&!at(t[o])&&(t[o]=[]),x(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function _(t,e){var n=e(t);return u(t.root)&&!n.match(/^(https?:)?\//)&&(n=t.root+"/"+n),n}function w(t,e){var n=Object.keys(P.options.params),o={},r=e(t);return g(t.params,function(t,e){n.indexOf(e)===-1&&(o[e]=t)}),o=P.params(o),o&&(r+=(r.indexOf("?")==-1?"?":"&")+o),r}function T(t,e,n){var o=C(t),r=o.expand(e);return n&&n.push.apply(n,o.vars),r}function C(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var s=null,c=[];if(e.indexOf(r.charAt(0))!==-1&&(s=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);c.push.apply(c,O(o,s,e[1],e[2]||e[3])),n.push(e[1])}),s&&"+"!==s){var a=",";return"?"===s?a="&":"#"!==s&&(a=s),(0!==c.length?s:"")+c.join(a)}return c.join(",")}return M(i)})}}}function O(t,e,n,o){var r=t[n],i=[];if(E(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(k(e,r,j(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(E).forEach(function(t){i.push(k(e,t,j(e)?n:null))}):Object.keys(r).forEach(function(t){E(r[t])&&i.push(k(e,r[t],t))});else{var s=[];Array.isArray(r)?r.filter(E).forEach(function(t){s.push(k(e,t))}):Object.keys(r).forEach(function(t){E(r[t])&&(s.push(encodeURIComponent(t)),s.push(k(e,r[t].toString())))}),j(e)?i.push(encodeURIComponent(n)+"="+s.join(",")):0!==s.length&&i.push(s.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function E(t){return void 0!==t&&null!==t}function j(t){return";"===t||"&"===t||"?"===t}function k(t,e,n){return e="+"===t||"#"===t?M(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function M(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function L(t){var e=[],n=T(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n}function P(t,e){var n,o=this||{},r=t;return u(t)&&(r={url:t,params:e}),r=y({},P.options,o.$options,r),P.transforms.forEach(function(t){n=I(t,n,o.$vm)}),n(r)}function I(t,e,n){return function(o){return t.call(n,o,e)}}function B(t,e,n){var o,r=at(e),i=d(e);g(e,function(e,s){o=p(e)||at(e),n&&(s=n+"["+(i||o?s:"")+"]"),!n&&r?t.add(e.name,e.value):o?B(t,e,s):t.add(s,e)})}function S(t){return new o(function(e){var n=new XDomainRequest,o=function(o){var r=t.respondWith(n.responseText,{status:n.status,statusText:n.statusText});e(r)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),n.timeout=0,n.onload=o,n.onerror=o,n.ontimeout=function(){},n.onprogress=function(){},n.send(t.getBody())})}function R(t,e){!f(t.crossOrigin)&&U(t)&&(t.crossOrigin=!0),t.crossOrigin&&(dt||(t.client=S),delete t.emulateHTTP),e()}function U(t){var e=P.parse(P(t));return e.protocol!==pt.protocol||e.host!==pt.host}function D(t,e){t.emulateJSON&&d(t.body)&&(t.body=P.params(t.body),t.headers["Content-Type"]="application/x-www-form-urlencoded"),h(t.body)&&delete t.headers["Content-Type"],d(t.body)&&(t.body=JSON.stringify(t.body)),e(function(t){var e=t.headers["Content-Type"];if(u(e)&&0===e.indexOf("application/json"))try{t.data=t.json()}catch(n){t.data=null}else t.data=t.text()})}function N(t){return new o(function(e){var n,o,r=t.jsonp||"callback",i="_jsonp"+Math.random().toString(36).substr(2),s=null;n=function(n){var r=0;"load"===n.type&&null!==s?r=200:"error"===n.type&&(r=404),e(t.respondWith(s,{status:r})),delete window[i],document.body.removeChild(o)},t.params[r]=i,window[i]=function(t){s=JSON.stringify(t)},o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})}function $(t,e){"JSONP"==t.method&&(t.client=N),e(function(e){"JSONP"==t.method&&(e.data=e.json())})}function F(t,e){l(t.before)&&t.before.call(this,t),e()}function G(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers["X-HTTP-Method-Override"]=t.method,t.method="POST"),e()}function H(t,e){t.method=t.method.toUpperCase(),t.headers=ut({},J.headers.common,t.crossOrigin?{}:J.headers.custom,J.headers[t.method.toLowerCase()],t.headers),e()}function W(t,e){var n;t.timeout&&(n=setTimeout(function(){t.abort()},t.timeout)),e(function(t){clearTimeout(n)})}function q(t){return new o(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":a(n.statusText),headers:X(n.getAllResponseHeaders())});e(r)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),n.timeout=0,n.onload=o,n.onerror=o,t.progress&&("GET"===t.method?n.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress)),t.credentials===!0&&(n.withCredentials=!0),g(t.headers||{},function(t,e){n.setRequestHeader(e,t)}),n.send(t.getBody())})}function X(t){var e,n,o,r={};return g(a(t).split("\n"),function(t){o=t.indexOf(":"),n=a(t.slice(0,o)),e=a(t.slice(o+1)),r[n]?at(r[n])?r[n].push(e):r[n]=[r[n],e]:r[n]=e}),r}function Z(t){function e(e){return new o(function(o){function c(){n=r.pop(),l(n)?n.call(t,e,a):(i("Invalid interceptor of type "+typeof n+", must be a function"),a())}function a(e){if(l(e))s.unshift(e);else if(p(e))return s.forEach(function(n){e=m(e,function(e){return n.call(t,e)||e})}),void m(e,o);c()}c()},t)}var n,r=[z],s=[];return p(t)||(t=null),e.use=function(t){r.push(t)},e}function z(t,e){var n=t.client||q;e(n(t))}function J(t){var e=this||{},n=Z(e.$vm);return A(t||{},e.$options,J.options),J.interceptors.forEach(function(t){n.use(t)}),n(new vt(t)).then(function(t){return t.ok?t:o.reject(t)},function(t){return t instanceof Error&&s(t),o.reject(t)})}function K(t,e,n,o){var r=this||{},i={};return n=ut({},K.actions,n),g(n,function(n,s){n=y({url:t,params:e||{}},o,n),i[s]=function(){return(r.$http||J)(V(n,arguments))}}),i}function V(t,e){var n,o=ut({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=ut({},o.params,r),o}function Y(t){Y.installed||(r(t),t.url=P,t.http=J,t.resource=K,t.Promise=o,Object.defineProperties(t.prototype,{$url:{get:function(){return v(t.url,this,this.$options.url)}},$http:{get:function(){return v(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}var Q=0,tt=1,et=2;n.reject=function(t){return new n(function(e,n){n(t)})},n.resolve=function(t){return new n(function(e,n){e(t)})},n.all=function(t){return new n(function(e,o){function r(n){return function(o){s[n]=o,i+=1,i===t.length&&e(s)}}var i=0,s=[];0===t.length&&e(s);for(var c=0;c<t.length;c+=1)n.resolve(t[c]).then(r(c),o)})},n.race=function(t){return new n(function(e,o){for(var r=0;r<t.length;r+=1)n.resolve(t[r]).then(e,o)})};var nt=n.prototype;nt.resolve=function(t){var e=this;if(e.state===et){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(r){return void(n||e.reject(r))}e.state=Q,e.value=t,e.notify()}},nt.reject=function(t){var e=this;if(e.state===et){if(t===e)throw new TypeError("Promise settled with itself.");e.state=tt,e.value=t,e.notify()}},nt.notify=function(){var t=this;c(function(){if(t.state!==et)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],o=e[1],r=e[2],i=e[3];try{t.state===Q?r("function"==typeof n?n.call(void 0,t.value):t.value):t.state===tt&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(s){i(s)}}})},nt.then=function(t,e){var o=this;return new n(function(n,r){o.deferred.push([t,e,n,r]),o.notify()})},nt["catch"]=function(t){return this.then(void 0,t)};var ot=window.Promise||n;o.all=function(t,e){return new o(ot.all(t),e)},o.resolve=function(t,e){return new o(ot.resolve(t),e)},o.reject=function(t,e){return new o(ot.reject(t),e)},o.race=function(t,e){return new o(ot.race(t),e)};var rt=o.prototype;rt.bind=function(t){return this.context=t,this},rt.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new o(this.promise.then(t,e),this.context)},rt["catch"]=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new o(this.promise["catch"](t),this.context)},rt["finally"]=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),ot.reject(e)})};var it=!1,st={},ct=[],at=Array.isArray,ut=Object.assign||b,ft=document.documentMode,lt=document.createElement("a");P.options={url:"",root:null,params:{}},P.transforms=[L,w,_],P.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){l(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},B(e,t),e.join("&").replace(/%20/g,"+")},P.parse=function(t){return ft&&(lt.href=t,t=lt.href),lt.href=t,{href:lt.href,protocol:lt.protocol?lt.protocol.replace(/:$/,""):"",port:lt.port,host:lt.host,hostname:lt.hostname,pathname:"/"===lt.pathname.charAt(0)?lt.pathname:"/"+lt.pathname,search:lt.search?lt.search.replace(/^\?/,""):"",hash:lt.hash?lt.hash.replace(/^#/,""):""}};var pt=P.parse(location.href),dt="withCredentials"in new XMLHttpRequest,ht=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},mt=function(){function t(e,n){var o=n.url,r=n.headers,i=n.status,s=n.statusText;ht(this,t),this.url=o,this.body=e,this.headers=r||{},this.status=i||0,this.statusText=s||"",this.ok=i>=200&&i<300}return t.prototype.text=function(){return this.body},t.prototype.blob=function(){return new Blob([this.body])},t.prototype.json=function(){return JSON.parse(this.body)},t}(),vt=function(){function t(e){ht(this,t),this.method="GET",this.body=null,this.params={},this.headers={},ut(this,e)}return t.prototype.getUrl=function(){return P(this)},t.prototype.getBody=function(){return this.body},t.prototype.respondWith=function(t,e){return new mt(t,ut(e||{},{url:this.getUrl()}))},t}(),gt={"X-Requested-With":"XMLHttpRequest"},yt={Accept:"application/json, text/plain, */*"},At={"Content-Type":"application/json;charset=utf-8"};J.options={},J.headers={put:At,post:At,patch:At,"delete":At,custom:gt,common:yt},J.interceptors=[F,W,G,D,$,H,R],["get","delete","head","jsonp"].forEach(function(t){J[t]=function(e,n){return this(ut(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){J[t]=function(e,n,o){return this(ut(o||{},{url:e,method:t,body:n}))}}),K.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(Y),t.exports=Y},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getAgainstDetail=e.getCompetitonUser=e.getCompetitonAgainst=e.getCompetitonMember=e.getCompetitonIntro=e.getCompetitonList=e.toAttend=void 0;var o=n(40);e.toAttend=function(t){var e={user:t.user,competitonType:t.competitonType,competitonId:t.competitonId};return console.log("toAttend option: ",e),o.attend.get(e)},e.getCompetitonList=function(){var t={};return o.competitonList.get(t)},e.getCompetitonIntro=function(t){var e={_id:t};return o.competitonIntro.get(e)},e.getCompetitonMember=function(t,e){var n={competiton_id:t,competiton_type:e};return o.competitonMember.get(n)},e.getCompetitonAgainst=function(t,e,n){var r={competiton_id:t,competiton_type:e,competiton_process_type:n};return o.competitonAgainst.get(r)},e.getCompetitonUser=function(){var t={user_id:"57fb659553938f0eedd91651"};return o.competitonUser.get(t)},e.getAgainstDetail=function(t){var e={id:t};return o.againstDetail.get(e)}},function(t,e){"use strict";e.getDateFormat=function(t,e){var o=void 0,r=void 0;o=t?new Date(t):new Date((new Date).valueOf());var i=""+o.getFullYear(),s=""+n(o.getMonth()+1),c=""+n(o.getDate()),a=""+n(o.getHours()),u=""+n(o.getMinutes()),f=""+n(o.getSeconds());return r=1===e?[i,s,c].join("-"):[i,s,c].join("-")+" "+[a,u,f].join(":"),isNaN(o.getFullYear())?"尚未确定具体时间":r};var n=function(t){return t.toString().length<2?"0"+t:t};e.validateIdCard=function(t){var e=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;if(!e.test(t))return void console.log("3");if(18===t.length){for(var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,10,9,8,7,6,5,4,3,2],r=0,i=0;i<17;i++)r+=t.substring(i,i+1)*n[i];var s=r%11,c=t.substring(17);return 2===s?"X"===c||"x"===c||void console.log("1"):c===o[s].toString()||void console.log("2")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=o(r),s=n(41),c=n(42),a=n(75);e["default"]={vuex:{actions:{setCompetitonList:s.setCompetitonList},getters:{list:c.list}},data:function(){return{state:""}},computed:{competitonList:function(){return this.list.map(function(t){return t.competitonState=1===t.state?"进行中":"已结束",t.competiton_bg=t.competiton_img?"background-image:url("+t.competiton_img+")":"",t.company_bg=t.company_logo?"background-image:url("+t.company_logo+")":"",t.date=(0,a.getDateFormat)(t.competiton_date,1),t})}},ready:function(){},attached:function(){},methods:{},components:{uiHead:i["default"]},route:{data:function(){var t=this;this.setCompetitonList().then(function(e){console.log(t.list.length),0!==t.list.length?(console.log("list success",t.list),t.state="success"):(console.log("list noResult",t.list),t.state="noResult")})["catch"](function(e){console.log(e),t.state="error"})}}}},,,,,,,,,,,,,,,,,,function(t,e,n){e=t.exports=n(16)(),e.push([t.id,".competiton-nav{height:1.0666666666666667rem;line-height:1.0666666666666667rem;text-align:center}.competiton-list li{box-shadow:0 1px 3px hsla(0,0%,65%,.4);margin-top:.4rem;padding:.13333333333333333rem .2rem;background-color:#fff}.competiton-list h2{display:inline-block}","",{version:3,sources:["/./src/views/competiton/competitonList.vue"],names:[],mappings:"AAAA,gBAAgB,6BAA6B,kCAAkC,iBAAiB,CAAC,oBAAoB,uCAA2C,iBAAkB,oCAAsC,qBAAqB,CAAC,oBAAoB,oBAAoB,CAAC",file:"competitonList.vue",sourcesContent:[".competiton-nav{height:1.0666666666666667rem;line-height:1.0666666666666667rem;text-align:center}.competiton-list li{box-shadow:0 1px 3px rgba(167,167,167,0.4);margin-top:0.4rem;padding:0.13333333333333333rem 0.2rem;background-color:#fff}.competiton-list h2{display:inline-block}\n"],sourceRoot:"webpack://"}])},,,,,,,,,function(t,e,n){var o=n(148);"string"==typeof o&&(o=[[t.id,o,""]]);n(17)(o,{});o.locals&&(t.exports=o.locals)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=' <ui-head></ui-head> <div class=ui-common-box> <div class="competiton-list ui-whitespace-m"> <ul class=clearfix v-if="state===\'success\'"> <li v-for="item in competitonList" v-link="{ path: \'/competitonDetail\', query:{ competitonId: item._id } }" class=ui-border-radius> <div class=ui-common-pd> <div class=ui-flex> <div class="competiton-tag ui-tag"> 大型赛 </div> <div class="ui-flex-1 ui-border-r ui-text-center"> {{item.date}} </div> <div class="ui-flex-1 ui-text-center"> {{item.hall_name}} </div> </div> <h2 class="ui-font-14 ui-common-pd-tb" style="vertical-align: middle">{{item.competiton_name}}</h2> <section class=ui-placehold-img> <span :style=item.competiton_bg></span> </section> <div class="ui-flex-between ui-common-pd-t"> <div class=ui-vertical-middle> <div class=ui-avatar-s> <span :style=item.company_bg></span> </div> {{item.company}} </div> <div> {{item.attend_num}}/无限制&emsp;<span class=ui-txt-highlight>{{item.competitonState}}</span> </div> </div> </div> </li> </ul> <div class=ui-flex-center v-if="state===\'noResult\'">暂无比赛信息噢</div> <div class=ui-flex-center v-if="state===\'error\'">哎呦，网络有点故障呢</div> </div> </div> '},,,,,,,,,,,,,function(t,e,n){var o,r;n(157),o=n(130),r=n(214),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}]);
//# sourceMappingURL=4.d0109e0f1671a17fd59e.js.map