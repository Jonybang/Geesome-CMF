/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.6/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function xa(a){if(null==a||Wa(a))return!1;if(K(a)||I(a)||G&&a instanceof G)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(rc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function sc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function tc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Qb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(J(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&J(n)?ha(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Rb(n)?a[m]=n.clone():(J(a[m])||(a[m]=K(n)?[]:{}),Qb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Qb(a,ya.call(arguments,1),!1)}function Zd(a){return Qb(a,ya.call(arguments,1),!0)}function $(a){return parseInt(a,10)}function Sb(a,b){return P(Object.create(a),b)}function C(){}function Ya(a){return a}function ca(a){return function(){return a}}function uc(a){return E(a.toString)&&a.toString!==ja}function y(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function J(a){return null!==a&&"object"===typeof a}function rc(a){return null!==a&&"object"===typeof a&&!vc(a)}function I(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function ha(a){return"[object Date]"===ja.call(a)}function E(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ja.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function $d(a){return a&&Q(a.length)&&
ae.test(ja.call(a))}function Rb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function oa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(rc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!J(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(vc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ja.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ja.call(b))throw za("cpta");if(a===b)throw za("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function fa(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(J(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?na(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||K(b)||ha(b)||Xa(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!E(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ya.call(b,
d))}function bb(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&F.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,ce,
b)}function wc(a){return I(a)?JSON.parse(a):a}function xc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Tb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=xc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=G(a).clone();try{a.empty()}catch(b){}var d=G("<div>").append(a).html();try{return a[0].nodeType===Na?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}
function yc(a){try{return decodeURIComponent(a)}catch(b){}}function zc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=yc(e),v(e)&&(f=v(f)?yc(f):!0,sa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Ub(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}
function qb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,I(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
q(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),b(d,c?[c]:[],e))}function Ac(a,b,d){J(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=G(a);if(a.injector()){var c=a[0]===F.document?"document":ua(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;F&&e.test(F.name)&&(d.debugInfoEnabled=!0,F.name=F.name.replace(e,""));if(F&&!f.test(F.name))return c();F.name=F.name.replace(f,"");da.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ge(){F.name=
"NG_ENABLE_DEBUG_INFO!"+F.name;F.location.reload()}function he(a){a=da.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Bc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Cc){var b=rb();(Y=y(b)?F.jQuery:b?F[b]:void 0)&&Y.fn.on?(G=Y,P(Y.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=Y.cleanData,Y.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=Y._data(f,"events"))&&c.$destroy&&Y(f).triggerHandler("$destroy");a(b)}):G=T;da.element=G;Cc=!0}}function sb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&K(a)&&(a=a[a.length-1]);sb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Dc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=G(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return U}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return U}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],x=a("$injector","invoke","push",e),U={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:x,run:function(a){p.push(a);return this}};h&&x(h);return U})}})}function le(a){P(a,{bootstrap:Ac,copy:oa,extend:P,merge:Zd,equals:na,element:G,forEach:q,injector:db,noop:C,bind:bb,toJson:cb,fromJson:wc,identity:Ya,isUndefined:y,
isDefined:v,isString:I,isFunction:E,isObject:J,isNumber:Q,isElement:Rb,isArray:K,version:me,isDate:ha,lowercase:L,uppercase:ub,callbacks:{counter:0},getTestability:he,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:ge});Vb=ke(F);Vb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Ec).directive({a:oe,input:Fc,textarea:Fc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,
ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Kc);a.provider({$anchorScroll:Xe,$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,
$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Lc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$location:rf,$log:sf,$parse:tf,$rootScope:uf,$q:vf,$$q:wf,$sce:xf,$sceDelegate:yf,$sniffer:zf,$templateCache:Af,$templateRequest:Bf,$$testability:Cf,$timeout:Df,$window:Ef,$$rAF:Ff,$$jqLite:Gf,$$HashMap:Hf,$$cookieReader:If})}])}function eb(a){return a.replace(Jf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Kf,"Moz$1")}function Mc(a){a=a.nodeType;return 1===a||!a||9===a}function Nc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Wb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Lf.exec(a)||["",""])[1].toLowerCase();c=ga[c]||ga._default;d.innerHTML=c[1]+a.replace(Mf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function Oc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function T(a){if(a instanceof T)return a;var b;I(a)&&(a=V(a),b=!0);if(!(this instanceof T)){if(b&&"<"!=a.charAt(0))throw Xb("nosel");return new T(a)}if(b){b=F.document;var d;a=(d=Nf.exec(a))?[b.createElement(d[1])]:(d=Nc(a,b))?d.childNodes:[]}Pc(this,a)}function Yb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Qc(a,
b,d,c){if(v(c))throw Xb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Qc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Of,d=gb[d]={events:{},data:{},handle:void 0});return d}function Zb(a,b,d){if(Mc(a)){var c=v(d),e=!c&&b&&!J(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+V(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Rc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(v(d=G.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Sc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Pf(a,b){b=b||F;if("complete"===b.document.readyState)b.setTimeout(a);else G(b).on("load",a)}function Tc(a,b){var d=Eb[b.toLowerCase()];return d&&Uc[ta(a)]&&d}function Qf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Rf;1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Rf(a,b,d){d.call(a,b)}function Sf(a,b,d){var c=b.relatedTarget;c&&(c===a||Tf.call(a,c))||d.call(a,b)}function Gf(){this.$get=function(){return P(T,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Yd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Vc(a){a=(Function.prototype.toString.call(a)+" ").replace(Uf,"");return a.match(Vf)||a.match(Wf)}function Xf(a){return(a=Vc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(J(b))q(b,tc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(E(b)||K(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=z.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=Vb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):K(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;x[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){da.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),x={},U=h(x,function(a,b){var c=p.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=U;n.$injectorProvider={$get:ca(U)};var r=g(a),z=U.get("$injector");z.strictDi=b;q(r,function(a){a&&z.invoke(a)});return z}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Rb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=I(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Pf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Yf(a){I(a)&&(a=a.split(" "));var b=S();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return J(a)?a:{}}function Zf(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(U--,0===U)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){w=null;g();h()}function g(){r=ka();
r=y(r)?null:r;na(r,H)&&(r=H);H=r}function h(){if(u!==k.url()||D!==r)u=k.url(),D=r,q(B,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,x={};k.isMock=!1;var U=0,z=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){U++};k.notifyWhenNoOutstandingRequests=function(a){0===U?a():z.push(a)};var r,D,u=l.href,t=b.find("base"),w=null,ka=c.history?function(){try{return m.state}catch(a){}}:C;g();D=r;k.url=function(b,d,e){y(e)&&(e=null);
l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(u===b&&(!c.history||f))return k;var h=u&&Ja(u)===Ja(b);u=b;D=e;!c.history||h&&f?(h||(w=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),D=r);w&&(w=b);return k}return w||l.href.replace(/%27/g,"'")};k.state=function(){return r};var B=[],A=!1,H=null;k.onUrlChange=function(b){if(!A){if(c.history)G(a).on("popstate",f);G(a).on("hashchange",
f);A=!0}B.push(b);return b};k.$$applicationDestroyed=function(){G(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;U++;c=n(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};k.defer.cancel=function(a){return x[a]?(delete x[a],p(a),e(C),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Zf(a,c,b,d)}]}function ef(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Af(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Ec(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=S();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!K(b)&&J(b)&&q(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function z(b,d){Ra(b,"directive");I(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);E(h)?h={compile:ca(h)}:
!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,tc(z));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Wc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?(p=a,this):p};var x=10;this.onChangesTtl=function(a){return arguments.length?(x=a,this):x};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,w,ka,B,A,H){function M(){try{if(!--oa)throw Y=void 0,ea("infchng",x);ka.$apply(function(){for(var a=
0,b=Y.length;a<b;++a)Y[a]();Y=void 0})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof G||(a=G(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&
Oc(k,a[g]=F.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==ta(d)&&ja.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?G(ba(m,G("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,u,r;if(p)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(G(k),l)):l=a,u=c.transcludeOnThisElement?va(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?va(a,b):null,c(f,l,k,d,u)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,u=0;u<
a.length;u++){k=new Aa;l=$b(a[u],[],k,0===u?d:void 0,e);(f=l.length?Ta(l,a[u],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[u].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(u,f,k),n=!0,p=p||f;f=null}return n?g:null}function va(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}
var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?va(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,wa(ta(a)),"E",d,e);for(var l,m,n,p=a.attributes,u=0,r=p&&p.length;u<r;u++){var B=!1,x=!1;l=p[u];k=l.name;m=V(l.value);l=wa(k);if(n=xa.test(l))k=k.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&Q(l[1])&&(B=k,x=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());f[l]=
k;if(n||!c.hasOwnProperty(l))c[l]=m,Tc(a,l)&&(c[l]=!0);ha(a,b,m,l,n);Da(b,l,"A",d,e,B,x)}a=a.className;J(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;k=h.exec(a);)l=wa(k[2]),Da(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);$(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=wa(k[1]),Da(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(A){}}b.sort(X);
return b}function Yc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,g,h){e=Yc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
(a=O(a,c,d));a.require=t.require;a.directiveName=M;if(B===t||t.$$isolateScope)a=fa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=t.require;b.directiveName=M;if(B===t||t.$$isolateScope)b=fa(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);w&&(e=z);c||(c=w?D.parent():D);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,Fb);if(y(f))throw ea("noslot",d,ua(D));}else return g(a,b,e,c,Fb)}var m,p,A,t,H,z,N,D;b===e?(f=d,D=d.$$element):
(D=G(e),f=new Aa(D,d));H=c;B?t=c.$new(!0):u&&(H=c.$parent);g&&(N=l,N.$$boundTransclude=g,N.isSlotFilled=function(a){return!!g.$$slots[a]});r&&(z=$f(D,f,N,r,t,c,B));B&&(aa.$$addScopeInfo(D,t,!0,!(x&&(x===B||x===B.$$originalDirective))),aa.$$addScopeClass(D,!0),t.$$isolateBindings=B.$$isolateBindings,p=ga(c,f,t,t.$$isolateBindings,B),p.removeWatches&&t.$on("$destroy",p.removeWatches));for(m in z){p=r[m];A=z[m];var R=p.$$bindings.bindToController;A.bindingInfo=A.identifier&&R?ga(H,f,A.instance,R,p):
{};var M=A();M!==A.instance&&(A.instance=M,D.data("$"+p.name+"Controller",M),A.bindingInfo.removeWatches&&A.bindingInfo.removeWatches(),A.bindingInfo=ga(H,f,A.instance,R,p))}q(r,function(a,b){var c=a.require;a.bindToController&&!K(c)&&J(c)&&P(z[b].instance,ib(b,c,D,z))});q(z,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&H.$on("$destroy",function(){b.$onDestroy()})});m=0;for(p=h.length;m<p;m++)A=h[m],ia(A,A.isolateScope?
t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);var Fb=c;B&&(B.template||null===B.templateUrl)&&(Fb=t);a&&a(Fb,e.childNodes,void 0,g);for(m=k.length-1;0<=m;m--)A=k[m],ia(A,A.isolateScope?t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);q(z,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,u=l.newScopeDirective,r=l.controllerDirectives,B=l.newIsolateScopeDirective,x=l.templateDirective,A=l.nonTlbTranscludeDirective,H=!1,z=!1,w=l.hasElementTranscludeDirective,
N=d.$$element=G(b),t,M,R,ka=e,s,Ca=!1,va=!1,v,C=0,F=a.length;C<F;C++){t=a[C];var I=t.$$start,Ta=t.$$end;I&&(N=Yc(b,I,Ta));R=void 0;if(p>t.priority)break;if(v=t.scope)t.templateUrl||(J(v)?(W("new/isolated scope",B||u,t,N),B=t):W("new/isolated scope",B,t,N)),u=u||t;M=t.name;if(!Ca&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(v=C+1;Ca=a[v++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&(Ca.templateUrl||Ca.template)){va=!0;break}Ca=!0}!t.templateUrl&&t.controller&&(v=t.controller,
r=r||S(),W("'"+M+"' controller",r[M],t,N),r[M]=t);if(v=t.transclude)if(H=!0,t.$$tlb||(W("transclusion",A,t,N),A=t),"element"==v)w=!0,p=t.priority,R=N,N=d.$$element=G(aa.$$createComment(M,d[M])),b=N[0],ca(f,ya.call(R,0),b),R[0].$$parentNode=R[0].parentNode,ka=ac(va,R,e,p,g&&g.name,{nonTlbTranscludeDirective:A});else{var L=S();R=G(Yb(b)).contents();if(J(v)){R=[];var Q=S(),Da=S();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;L[b]=null;Da[b]=c});q(N.contents(),function(a){var b=
Q[wa(ta(a))];b?(Da[b]=!0,L[b]=L[b]||[],L[b].push(a)):R.push(a)});q(Da,function(a,b){if(!a)throw ea("reqslot",b);});for(var X in L)L[X]&&(L[X]=ac(va,L[X],e))}N.empty();ka=ac(va,R,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});ka.$$slots=L}if(t.template)if(z=!0,W("template",x,t,N),x=t,v=E(t.template)?t.template(N,d):t.template,v=ra(v),t.replace){g=t;R=Wb.test(v)?Zc(ba(t.templateNamespace,V(v))):[];b=R[0];if(1!=R.length||1!==b.nodeType)throw ea("tplrt",M,"");ca(f,N,b);F={$attr:{}};v=
$b(b,[],F);var $=a.splice(C+1,a.length-(C+1));(B||u)&&$c(v,B,u);a=a.concat(v).concat($);T(d,F);F=a.length}else N.html(v);if(t.templateUrl)z=!0,W("template",x,t,N),x=t,t.replace&&(g=t),n=Z(a.splice(C,a.length-C),N,d,f,H&&ka,h,k,{controllerDirectives:r,newScopeDirective:u!==t&&u,newIsolateScopeDirective:B,templateDirective:x,nonTlbTranscludeDirective:A}),F=a.length;else if(t.compile)try{s=t.compile(N,d,ka);var Y=t.$$originalDirective||t;E(s)?m(null,bb(Y,s),I,Ta):s&&m(bb(Y,s.pre),bb(Y,s.post),I,Ta)}catch(da){c(da,
ua(N))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=u&&!0===u.scope;n.transcludeOnThisElement=H;n.templateOnThisElement=z;n.transclude=ka;l.hasElementTranscludeDirective=w;return n}function ib(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=
ib(a,b[g],c,d);else J(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function $f(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=w(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $c(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Sb(a[d],{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var n;
e=a.get(e+"Directive");for(var p=0,u=e.length;p<u;p++)try{if(n=e[p],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Sb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var r=n,B=n,A=n.name,x={isolateScope:null,bindToController:null};J(B.scope)&&(!0===B.bindToController?(x.bindToController=d(B.scope,A,!0),x.isolateScope={}):x.isolateScope=d(B.scope,A,!1));J(B.bindToController)&&(x.bindToController=d(B.bindToController,A,!0));if(J(x.bindToController)){var t=B.controller,H=B.controllerAs;if(!t)throw ea("noctrl",
A);if(!Wc(t,H))throw ea("noident",A);}var N=r.$$bindings=x;J(N.isolateScope)&&(n.$$isolateBindings=N.isolateScope)}b.push(n);k=n}}catch(w){c(w)}}return k}function Q(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function T(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Z(a,b,c,d,f,g,h,k){var l=[],m,n,p=b[0],B=a.shift(),r=Sb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),A=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,x=B.templateNamespace;b.empty();e(A).then(function(e){var u,t;e=ra(e);if(B.replace){e=Wb.test(e)?Zc(ba(x,V(e))):[];u=e[0];if(1!=e.length||1!==u.nodeType)throw ea("tplrt",
B.name,A);e={$attr:{}};ca(d,b,u);var H=$b(u,[],e);J(B.scope)&&$c(H,!0);a=H.concat(a);T(c,e)}else u=p,b.html(e);a.unshift(r);m=Ta(a,u,c,f,b,B,g,h,k);q(d,function(a,c){a==u&&(d[c]=b[0])});for(n=s(b[0].childNodes,f);l.length;){e=l.shift();t=l.shift();var z=l.shift(),D=l.shift(),H=b[0];if(!e.$$destroyed){if(t!==p){var w=t.className;k.hasElementTranscludeDirective&&B.replace||(H=Yb(u));ca(z,G(t),H);N(G(H),w)}t=m.transcludeOnThisElement?va(e,m.transclude,D):D;m(n,e,H,d,t)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=va(b,m.transclude,e)),m(n,b,c,d,a)))}}function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function $(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ba(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=F.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function da(a,b){if("srcdoc"==b)return B.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function ha(a,
c,d,e,f){var g=da(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=S());if(m.test(e))throw ea("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function ca(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=F.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);G.hasData(d)&&(G.data(c,G.data(d)),G(d).off("$destroy"));G.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function fa(a,b){return P(function(){return a.apply(null,arguments)},
a,b)}function ia(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ga(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(M),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Gb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,u,B,A,x;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(I(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;u=c[m];I(u)?d[h]=
b(u)(a):Ea(u)&&(d[h]=u);l[h]=new Gb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;B=n(c[m]);x=B.literal?na:function(a,b){return a===b||a!==a&&b!==b};A=B.assign||function(){u=d[h]=B(a);throw ea("nonassign",c[m],m,f.name);};u=d[h]=B(a);p=function(b){x(b,d[h])||(x(b,u)?A(a,b=d[h]):d[h]=b);return u=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,B.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
B=n(c[m]);var H=d[h]=B(a);l[h]=new Gb(bc,d[h]);p=a.$watch(B,function(a,b){if(b===a){if(b===H)return;b=H}g(h,a,b);d[h]=a},B.literal);k.push(p);break;case "&":B=c.hasOwnProperty(m)?n(c[m]):C;if(B===C&&p)break;d[h]=function(b){return B(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=F.document.createElement("div"),oa=x,Y;Aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&A.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&A.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Tc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,"-"));f=ta(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===
f&&"srcset"===a&&v(b)){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+H(V(g[m]),!0),f=f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=H(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);ka.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},xa=/^ngAttr[A-Z]/,za=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;aa.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
C;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;aa.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:C;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return F.document.createComment(c)};return aa}]}function Gb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return eb(a.replace(Xc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Zc(a){a=G(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&ag.call(a,b,1);return a}function Wc(a,b){if(b&&I(b))return b;if(I(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");J(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!J(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&I(k)&&(n=k);if(I(f)){k=f.match(cd);if(!k)throw bg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Dc(g.$scope,m,!0)||(b?Dc(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(J(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return G(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return J(a)?ha(a)?a.toISOString():cb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];sc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ia(c)+"="+ia(cc(a)))}):b.push(ia(c)+"="+ia(cc(a))))});return b.join("&")}}}function of(){this.$get=
function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(J(a)?c:"")+"]")}):J(a)&&!ha(a)?sc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(I(a)){var d=a.replace(cg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(dg))&&eg[c[0]].test(d));c&&(a=wc(d))}}return a}function ed(a){var b=S(),d;I(a)?q(a.split("\n"),function(a){d=
a.indexOf(":");var e=L(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):J(a)&&q(a,function(a,d){var f=L(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return J(a)&&"[object File]"!==ja.call(a)&&"[object Blob]"!==
ja.call(a)&&"[object FormData]"!==ja.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ec),put:fa(ec),patch:fa(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return v(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=gd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!J(b))throw O("$http")("badreq",b);if(!I(b.url))throw O("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=P({},b.headers),f,g,h,c=P({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=ub(f.method);f.paramSerializer=I(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=gd(b.data,fd(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(q(U,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=hd("success"),h.error=hd("error"));return h}function n(c,d){function g(a){if(a){var c=
{};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}H&&(200<=a&&300>a?H.put(R,[a,c,ed(d),e]):H.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function w(a){n(a.data,a.status,fa(a.headers()),a.statusText)}function U(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var B=k.defer(),A=B.promise,H,M,Aa=c.headers,R=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);A.then(U,U);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(H=J(c.cache)?c.cache:J(a.cache)?a.cache:x);H&&(M=H.get(R),v(M)?M&&E(M.then)?M.then(w,w):K(M)?n(M[1],M[0],fa(M[2]),M[3]):n(M,200,{},"OK"):H.put(R,A));y(M)&&((M=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=M),e(c.method,R,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return A}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var x=g("$http");a.paramSerializer=I(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var U=[];q(c,function(a){U.unshift(I(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,
c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new F.XMLHttpRequest}}}function pf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return fg(a,c,a.defer,b.angular.callbacks,d[0])}]}function fg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);d&&d(g,x)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,x,U,z){function r(){t&&t();w&&w.abort()}function D(b,c,e,f,g){v(B)&&d.cancel(B);t=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==L(e)){var u="_"+(c.counter++).toString(36);
c[u]=function(a){c[u].data=a;c[u].called=!0};var t=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){D(l,a,c[u].data,"",b);c[u]=C})}else{var w=b(e,h);w.open(e,h,!0);q(m,function(a,b){v(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==pa(h).protocol?404:0);D(l,c,b,w.getAllResponseHeaders(),a)};e=function(){D(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q(U,function(a,
b){w.addEventListener(b,a)});q(z,function(a,b){w.upload.addEventListener(b,a)});p&&(w.withCredentials=!0);if(x)try{w.responseType=x}catch(ka){if("json"!==x)throw ka;}w.send(y(k)?null:k)}if(0<n)var B=d(r,n);else n&&E(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function D(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!v(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var u;k||(k=g(f),u=ca(k),u.exp=f,u.expressions=[],u.$$watchDelegate=h);return u}p=!!p;var t,w,q=0,B=[],A=[];u=f.length;for(var H=[],M=[];q<
u;)if(-1!=(t=f.indexOf(a,q))&&-1!=(w=f.indexOf(b,t+l)))q!==t&&H.push(g(f.substring(q,t))),q=f.substring(t+l,w),B.push(q),A.push(d(q,D)),q=w+m,M.push(H.length),H.push("");else{q!==u&&H.push(g(f.substring(q)));break}n&&1<H.length&&Ka.throwNoconcat(f);if(!k||B.length){var Aa=function(a){for(var b=0,c=B.length;b<c;b++){if(p&&y(a[b]))return;H[M[b]]=a[b]}return H.join("")};return P(function(a){var b=0,d=B.length,e=Array(d);try{for(;b<d;b++)e[b]=A[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:B,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(A,function(d,e){var f=Aa(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,x):f(r)}var p=4<arguments.length,x=p?ya.call(arguments,4):
[],q=b.setInterval,z=b.clearInterval,r=0,D=v(m)&&!m,u=(D?c:d).defer(),t=u.promise;l=v(l)?l:0;t.$$intervalId=q(function(){D?e.defer(n):a.$evalAsync(n);u.notify(r++);0<l&&r>=l&&(u.resolve(r),z(t.$$intervalId),delete g[t.$$intervalId]);D||a.$apply()},k);g[t.$$intervalId]=u;return t}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function jd(a,b){var d=pa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=$(d.port)||gg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=pa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=zc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=la(b,a);if(!I(d))throw Hb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ub(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;v(f=la(a,c))?(g=f,g=v(f=la(d,f))?b+(la("/",f)||f):a+g):v(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=la(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Ub(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Ub(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function rf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):J(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Hb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var x=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,x,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=G(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
pa(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){y(la(x,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(z=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function sf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ba("isecfld",b);return a}function hg(a){return a+""}function qa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function nd(a,
b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===ig||a===jg||a===kg)throw ba("isecff",b);}}function Jb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function lg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Z(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){Z(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:Z(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:Z(a.test,
b);Z(a.alternate,b);Z(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:Z(a.object,b);a.computed&&Z(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){Z(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Kb(a){return"constructor"==a}function ic(a){return E(a.valueOf)?a.valueOf():mg.call(a)}function tf(){var a=S(),b=S(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,A;e=e||D;switch(typeof c){case "string":A=c=c.trim();var H=e?b:a;g=H[A];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:z;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));H[A]=g}return x(g,d);case "function":return x(c,d);default:return x(C,d)}}function h(a){function b(c,d,e,f){var g=
D;D=!0;try{return a(c,d,e,f)}finally{D=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);v(a)&&d.$$postDigest(function(){v(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function x(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var U=Fa().noUnsafeEval,z={csp:U,expensiveChecks:!1,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},r={csp:U,expensiveChecks:!0,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},D=!1;g.$$runningExpensiveChecks=function(){return D};return g}]}function vf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function wf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(J(a)||E(a))g=a&&a.then;E(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Ff(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function uf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(D.$$phase)throw d("inprog",D.$$phase);D.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function z(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){D.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(J(e))if(xa(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},u=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)sa.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(J(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,r,x,q=b,w,y=[],C,F;n("$digest");h.$$checkUrlChange();this===D&&null!==e&&(h.defer.cancel(e),z());c=null;do{x=!1;w=this;for(p=0;p<u.length;p++){try{F=u[p],F.scope.$eval(F.expression,F.locals)}catch(G){f(G)}c=null}u.length=0;a:do{if(p=w.$$watchers)for(r=p.length;r--;)try{if(a=p[r])if(m=a.get,(g=m(w))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))x=!0,c=a,a.last=a.eq?oa(g,null):g,l=a.fn,l(g,k===s?g:k,w),5>q&&(C=4-q,y[C]||(y[C]=[]),y[C].push({msg:E(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){x=!1;break a}}catch(I){f(I)}if(!(p=w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(p=w.$$nextSibling);)w=w.$parent}while(w=p);if((x||u.length)&&!q--)throw D.$$phase=null,d("infdig",b,y);}while(x||u.length);for(D.$$phase=null;v<t.length;)try{t[v++]()}catch(J){f(J)}t.length=v=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
D&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=
function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){D.$$phase||u.length||h.defer(function(){u.length&&D.$digest()});u.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{D.$$phase=null}}catch(b){f(b)}finally{try{D.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);
a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var D=new m,u=D.$$asyncQueue=[],t=D.$$postDigestQueue=[],w=D.$$applyAsyncQueue=[],v=0;return D}]}function ne(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=pa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ng(a){if("self"===a)return a;if(I(a)){if(-1<a.indexOf("***"))throw ra("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ra("imatcher");}function xd(a){var b=[];v(a)&&q(a,function(a){b.push(ng(a))});return b}function yf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ra("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
pa(e.toString()),n,p,x=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){x=!0;break}if(x)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){x=!1;break}if(x)return e;throw ra("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function xf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ra("iequirks");var c=fa(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(ma,function(a,b){var d=L(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function zf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=$((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Bf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!I(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw og("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Cf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];q(a,function(a){var c=da.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Df(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var m=ya.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),x=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[x.$$timeoutId]}n||a.$apply()},k);x.$$timeoutId=q;g[q]=p;return x}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function pa(a){Ba&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function id(a){a=I(a)?pa(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ef(){this.$get=ca(F)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function If(){this.$get=zd}function Lc(a){function b(d,c){if(J(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",pg);b("json",qg);b("limitTo",rg);b("lowercase",sg);b("number",Cd);b("orderBy",Dd);b("uppercase",tg)}function pg(){return function(a,b,d){if(!xa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=ug(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function ug(a,b,d){var c=J(a)&&"$"in a;!0===b?b=na:E(b)||(b=function(a,b){if(y(a))return!1;if(null===
a||null===b)return a===b;if(J(b)||J(a)&&!uc(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!J(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function vg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function wg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!I(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=vg(h);wg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function W(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Lb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;I(c)&&(c=xg.test(c)?$(c):b(c));Q(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=yg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=xc(f,m),c=Tb(c,f,!0));q(h,function(b){k=zg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function qg(){return function(a,b){y(b)&&(b=2);return cb(a,b)}}function rg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):$(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!I(a))return a;d=!d||isNaN(d)?0:$(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(E(b))h=b;else if(I(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!xa(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(uc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],x=0;c.type===f.type?c.value!==f.value&&(x=c.value<f.value?-1:1):x=c.type<f.type?-1:1;if(c=x*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Jd(a,
b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Mb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Mb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);
c.addClass(a,Nb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Nb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function oc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=L(b[0].type);
if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ha(d))return d;if(I(d)){'"'==d.charAt(0)&&
'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Ag.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!ha(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Tb(a,q)),a});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(n(a))return(s=a)&&q&&(s=Tb(s,q,!0)),m("date")(a,c,q);s=null;return""});if(v(g.min)||g.ngMin){var z;h.$validators.min=function(a){return!n(a)||y(z)||d(a)>=
z};g.$observe("min",function(a){z=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=J(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(v(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function pc(a,b){a="ngClass"+a;return["$animate",
function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):J(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||S(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=K(a)?a.map(function(a){return fa(a)}):fa(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
function Kd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Bc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
a,f),h(c.$$success,a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Bg=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,L=function(a){return I(a)?a.toLowerCase():a},ub=function(a){return I(a)?a.toUpperCase():a},Ba,
G,Y,ya=[].slice,ag=[].splice,Cg=[].push,ja=Object.prototype.toString,vc=Object.getPrototypeOf,za=O("ng"),da=F.angular||(F.angular={}),Vb,pb=0;Ba=F.document.documentMode;C.$inject=[];Ya.$inject=[];var K=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return I(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!v(Fa.rules)){var a=F.document.querySelector("[ng-csp]")||
F.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},rb=function(){if(v(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=F.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Cc=!1,Na=3,me={full:"1.5.6",major:1,minor:5,dot:6,codeName:"arrow-stringification"};T.expando="ng339";var gb=T.cache={},Of=1;T._data=function(a){return this.cache[a[this.expando]]||{}};var Jf=/([\:\-\_]+(.))/g,Kf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Xb=O("jqLite"),Nf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Wb=/<|&#?\w+;/,Lf=/<([\w:-]+)/,Mf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var Tf=F.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=T.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
F.document.readyState?F.setTimeout(b):(this.on("DOMContentLoaded",b),T(F).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?G(this[a]):G(this[this.length+a])},length:0,push:Cg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[L(a)]=a});var Uc={};q("input select option textarea button form details".split(" "),function(a){Uc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Zb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){T[b]=a});q({data:Zb,inheritedData:Cb,scope:function(a){return G.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return G.data(a,"$isolateScope")||G.data(a,"$isolateScopeNoTemplate")},controller:Rc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=L(b),Eb[c])if(v(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(v(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(v(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===ta(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Sc},function(a,b){T.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Sc&&y(2==a.length&&
a!==zb&&a!==Rc?b:c)){if(J(b)){for(e=0;e<g;e++)if(a===Zb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:fb,on:function(a,b,d,c){if(v(c))throw Xb("onargs");if(Mc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Qf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Sf),h(b,void 0,!0)):h(b)}},off:Qc,one:function(a,b,d){a=G(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new T(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new T(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new T(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Oc(a,G(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new T(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Yb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,b)),b=fa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){T.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),v(f)&&(f=G(f))):Pc(f,a(this[g],b,c,e));return v(f)?f:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Sa.prototype={put:function(a,
b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var Hf=[function(){this.$get=[function(){return Sa}]}],Vf=/^([^\(]+?)=>/,Wf=/^[^\(]*\(\s*([^\)]*)\)/m,Dg=/,/,Eg=/^\s*(_?)(\S+?)\1\s*$/,Uf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw I(d)&&d||(d=a.name||Xf(a)),Ha("strictdi",d);
b=Vc(a);q(b[1].split(Dg),function(a){a.replace(Eg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Rd=O("$animate"),$e=function(){this.$get=C},af=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=I(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Yf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=oa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ea=O("$compile"),bc=new function(){};
Ec.$inject=["$provide","$$sanitizeUriProvider"];Gb.prototype.isFirstChange=function(){return this.previousValue===bc};var Xc=/^((?:x|data)[\:\-_])/i,bg=O("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof G&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},dg=/^\[|^\{(?!\{)/,eg={"[":/]$/,"{":/}$/},cg=/^\)\]\}',?\n/,Fg=O("$http"),hd=function(a){return function(){throw Fg("legacy",
a);}},Ka=da.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Gg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,gg={http:80,https:443,ftp:21},Hb=O("$location"),Hg={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Gg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),
host:Ib("$$host"),port:Ib("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||Q(a))a=a.toString(),this.$$search=zc(a);else if(J(a))a=oa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Hb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],function(a){a.prototype=Object.create(Hg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=y(b)?null:b;return this}});var ba=O("$parse"),ig=Function.prototype.call,jg=Function.prototype.apply,kg=Function.prototype.bind,Pb=S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Ig={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],e=Pb[d];Pb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",
a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Ig[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=oa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",
this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,
d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},
assign:{vars:[],body:[],own:{}},inputs:[]};Z(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+
" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,qa,nd,hg,Jb,lg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||C;if(!f&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,
function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",
a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Kb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),
k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Kb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},
function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),
m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ba("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+
h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,
a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=
this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;Z(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);
var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,
b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,
f.expensiveChecks||Kb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){qa(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(qa(g[q](a,c,d,m),f.expression));p=qa(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=e(a,d,g,m);qa(n.value,f.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),
function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,
f){d=a(d,c,e,f);d=v(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&qa(g,e);return d?{context:f,name:a,
value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],qa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Kb(b))&&qa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var mg=Object.prototype.valueOf,ra=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},og=O("$compile"),X=F.document.createElement("a"),yd=pa(F.location.href);zd.$inject=["$document"];Lc.$inject=["$provide"];var Gd=22,
Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var zg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:kb("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},yg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,xg=/^\-?\d+$/;Bd.$inject=["$locale"];var sg=ca(L),tg=ca(ub);Dd.$inject=["$parse"];var oe=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ja.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Bg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ja.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Mb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):C;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
q(a,void 0);P(n,Mb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Ag=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Jg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Kg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Lg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
qc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=S();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c)},date:mb("date",Td,Ob(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Ob(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Ob(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",qc,function(a,b){if(ha(a))return a;
if(I(a)){qc.lastIndex=0;var d=qc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Ob(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Lg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw nb("numfmt",
a);a=a.toString()}return a});if(v(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(v(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Jg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,file:C},Fc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[L(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Mg=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Mg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=pc("",!0),ze=pc("Odd",0),ye=pc("Even",1),Ae=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},Ng={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);Kc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Ng[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,z,r,D=function(){z&&(z.remove(),z=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){z=null}),z=r,r=null)};c.$watch(f,function(f){var m=function(){!v(h)||h&&!c.$eval(h)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){D();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||w!==q||(D(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(D(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ja.call(d[0]).match(/SVG/)?(d.empty(),a(Nc(e.template,F.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Va="ng-pristine",Nb="ng-dirty",Qd="ng-pending",nb=O("ngModel"),Og=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Mb;var m=e(d.ngModel),n=m.assign,p=m,s=n,F=null,z,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);E(c)&&(c=b(a));
return c};s=function(a,b){E(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ua(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var D=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Nb);f.addClass(c,Va)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Nb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(F);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!Q(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!E(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===D&&r.$setValidity(a,b)}function g(a){h===D&&c(a)}D++;var h=D;(function(){var a=r.$$parserName||"parse";if(y(z))f(a,null);else return z||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,z),z;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(F);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(z=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){z=!1;break}Q(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&v(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(F);c?F=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;z=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,C))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Og,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Pg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=oa(a.$eval(b.ngModelOptions));v(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Pg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ma({terminal:!0,priority:1E3}),Qg=O("ngOptions"),Rg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Rg);if(!n)throw Qg("iexp",a,ua(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var z=a&&d(a)||b,r=s&&d(s),v=s?function(a,b){return r(c,b)}:function(a){return Ga(a)},u=function(a,b){return v(a,H(a,b))},t=d(n[2]||n[1]),w=d(n[3]||""),y=d(n[4]||""),B=d(n[8]),A={},H=q?function(a,b){A[q]=b;A[p]=
a;return A}:function(a){A[p]=a;return A};return{trackBy:s,getTrackByValue:u,getWatchables:d(B,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=H(l,h),l=v(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=B(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=H(d[p],p),r=z(c,q),p=v(r,q),x=t(c,q),A=w(c,q),q=y(c,q),r=new e(p,r,x,A,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[u(a)]},getViewValueFromOption:function(a){return s?da.copy(a.viewValue):a.viewValue}}}}}var e=F.document.createElement("option"),f=F.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];c.group?Db(c.element.parentNode):Db(c.element)}w=C.getOptions();var d={};u&&h.prepend(z);w.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),B.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=B,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);s.$render();s.$isEmpty(a)||(b=p.readValue(),(C.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=
l[0],s=l[1],y=k.multiple,z;l=0;for(var r=h.children(),D=r.length;l<D;l++)if(""===r[l].value){z=r.eq(l);break}var u=!!z,t=G(e.cloneNode(!1));t.val("?");var w,C=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&
!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},C.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=w.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(t.remove(),u||z.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||u?(t.remove(),u||h.prepend(z),h.val(""),z.prop("selected",!0),z.attr("selected",
!0)):(u||z.remove(),h.prepend(t),h.val("?"),t.prop("selected",!0),t.attr("selected",!0))},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(u||z.remove(),t.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));u?(z.remove(),a(z)(d),z.removeClass("ng-scope")):z=G(e.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ie=["$locale","$interpolate","$log",function(a,b,
d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},v=b.startSymbol(),z=b.endSymbol(),r=v+l+"-"+n+z,D=da.noop,u;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===u||e&&Q(u)&&isNaN(u)||(D(),e=s[c],y(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),D=C,k()):D=f.$watch(e,k),u=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],z=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,D,u,t,w={$id:Ga};s?r=a(s):(u=function(a,b){return Ga(b)},t=function(a){return a});return function(a,d,f,g,l){r&&(D=function(b,c,d){z&&(w[z]=b);w[v]=c;w.$index=
d;return r(a,w)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],s,x=S(),w,y,C,A,F,E,G;p&&(a[p]=f);if(xa(f))F=f,n=D||u;else for(G in n=D||t,F=[],f)sa.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);w=F.length;G=Array(w);for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],A=n(y,C,g),m[A])E=m[A],delete m[A],x[A]=E,G[g]=E;else{if(x[A])throw q(G,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);G[g]={id:A,scope:void 0,clone:void 0};x[A]=!0}for(s in m){E=m[s];A=tb(E.clone);b.leave(A);if(A[0].parentNode)for(g=
0,n=A.length;g<n;g++)A[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],E=G[g],E.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!=s&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,v,C,z,y,w)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;x[E.id]=E;e(E.scope,g,v,C,z,y,w)});m=x})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],Ne=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Sg=O("ngTransclude"),Qe=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===
d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Sg("orphan",ua(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Tg={$setViewValue:C,$render:C},Ug=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Tg;d.unknownOption=G(F.document.createElement("option"));d.renderUnknownOption=function(b){b=
"? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,
b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){v(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",
a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ug,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};
f.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(v(d.value))var c=a(d.value,!0);else{var e=
a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ca({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,ua(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=$(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=$(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};F.angular.bootstrap?F.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),G(F.document).ready(function(){fe(F.document,Ac)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 1.3.3 - 2016-05-22
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(l(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start()["finally"](i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)})}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"}),m(d)}function j(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(n(d)).then(function(){f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:{height:"0"}}).start()["finally"](k):a.removeClass(f,"in",{to:{height:"0"}}).then(k)}):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse"),o(d)}var l=c(g.expanding),m=c(g.expanded),n=c(g.collapsing),o=c(g.collapsed);d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css({height:"auto"}),d.$watch(g.uibCollapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",function(){return{require:"^uibCarousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)})}}}).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a,b){var c=[],e=a.split(""),f=a.indexOf("'");if(f>-1){var g=!1;a=a.split("");for(var h=f;h<a.length;h++)g?("'"===a[h]&&(h+1<a.length&&"'"===a[h+1]?(a[h+1]="$",e[h+1]=""):(e[h]="",g=!1)),a[h]="$"):"'"===a[h]&&(a[h]="$",e[h]="",g=!0);a=a.join("")}return angular.forEach(n,function(d){var f=a.indexOf(d.key);if(f>-1){a=a.split(""),e[f]="("+d.regex+")",a[f]="$";for(var g=f+1,h=f+d.key.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,key:d.key,apply:d[b],matcher:d.regex})}}),{regex:new RegExp("^"+e.join("")+"$"),map:d(c,"index")}}function f(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function g(a){return parseInt(a,10)}function h(a,b){return a&&b?l(a,b):a}function i(a,b){return a&&b?l(a,b,!0):a}function j(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function k(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function l(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=j(b,d);return k(a,c*(e-d))}var m,n,o=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){m=b.id,this.parsers={},this.formatters={},n=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=g(c+d),this.minutes+=g(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==m&&this.init(),this.formatters[c]||(this.formatters[c]=e(c,"formatter"));var d=this.formatters[c],f=d.map,g=c;return f.reduce(function(b,c,d){var e=g.match(new RegExp("(.*)"+c.key));e&&angular.isString(e[1])&&(b+=e[1],g=g.replace(e[1]+c.key,""));var h=d===f.length-1?g:"";return c.apply?b+c.apply.call(null,a)+h:b+h},"")},this.parse=function(c,d,g){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(o,"\\$&"),b.id!==m&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var h=this.parsers[d],i=h.regex,j=h.map,k=c.match(i),l=!1;if(k&&k.length){var n,p;angular.isDate(g)&&!isNaN(g.getTime())?n={year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:(g&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var q=1,r=k.length;r>q;q++){var s=j[q-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(n,k[q])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return f(n.year,n.month,n.date)&&(!angular.isDate(g)||isNaN(g.getTime())||l?(p=new Date(0),t.call(p,n.year,n.month,n.date),u.call(p,n.hours||0,n.minutes||0,n.seconds||0,n.milliseconds||0)):(p=new Date(g),t.call(p,n.year,n.month,n.date),u.call(p,n.hours,n.minutes,n.seconds,n.milliseconds))),p}},this.toTimezone=h,this.fromTimezone=i,this.timezoneToOffset=j,this.addDateMinutes=k,this.convertTimezoneToLocal=l}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k){function l(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var m=this,n={$setViewValue:angular.noop},o={},p=[];!!b.datepickerOptions;a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:h.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":m[b]=angular.isDefined(a.datepickerOptions[b])?d(a.datepickerOptions[b])(a.$parent):h[b];break;case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":m[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:h[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?m.startingDay=a.datepickerOptions.startingDay:angular.isNumber(h.startingDay)?m.startingDay=h.startingDay:m.startingDay=(e.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?m[b]=k.fromTimezone(new Date(a),o.timezone):(i&&f.warn("Literal date support has been deprecated, please switch to date object usage"),m[b]=new Date(g(a,"medium"))):m[b]=h[b]?k.fromTimezone(new Date(h[b]),o.timezone):null,m.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){m[b]=a[b]=angular.isDefined(c)?c:datepickerOptions[b],("minMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)<m.modes.indexOf(m[b])||"maxMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)>m.modes.indexOf(m[b]))&&(a.datepickerMode=m[b],a.datepickerOptions.datepickerMode=m[b])}):m[b]=a[b]=h[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(b.disabled)||!1,angular.isDefined(b.ngDisabled)&&p.push(a.$parent.$watch(b.ngDisabled,function(b){a.disabled=b,m.refreshView()})),a.isActive=function(b){return 0===m.compare(b.date,m.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){n=b,o=b.$options||h.ngModelOptions,a.datepickerOptions.initDate?(m.activeDate=k.fromTimezone(a.datepickerOptions.initDate,o.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(n.$isEmpty(n.$modelValue)||n.$invalid)&&(m.activeDate=k.fromTimezone(a,o.timezone),m.refreshView())})):m.activeDate=new Date;var c=n.$modelValue?new Date(n.$modelValue):new Date;this.activeDate=isNaN(c)?k.fromTimezone(new Date,o.timezone):k.fromTimezone(c,o.timezone),n.$render=function(){m.render()}},this.render=function(){if(n.$viewValue){var a=new Date(n.$viewValue),b=!isNaN(a);b?this.activeDate=k.fromTimezone(a,o.timezone):j||f.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=n.$viewValue?new Date(n.$viewValue):null;b=k.fromTimezone(b,o.timezone),n.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=n.$viewValue?new Date(n.$viewValue):null;d=k.fromTimezone(d,o.timezone);var e=new Date;e=k.fromTimezone(e,o.timezone);var f=this.compare(b,e),g={date:b,label:k.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),m.activeDate&&0===this.compare(g.date,m.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===m.minMode){var c=n.$viewValue?k.fromTimezone(new Date(n.$viewValue),o.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=k.toTimezone(c,o.timezone),n.$setViewValue(c),n.$render()}else m.activeDate=b,l(m.modes[m.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=m.activeDate.getFullYear()+a*(m.step.years||0),c=m.activeDate.getMonth()+a*(m.step.months||0);m.activeDate.setFullYear(b,c,1),m.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===m.maxMode&&1===b||a.datepickerMode===m.minMode&&-1===b||(l(m.modes[m.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var q=function(){m.element[0].focus()};a.$on("uib:datepicker.focus",q),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),m.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(m.isDisabled(m.activeDate))return;a.select(m.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(m.handleKeyDown(c,b),m.refreshView()):a.toggleMode("up"===c?1:-1)},a.$on("$destroy",function(){for(;p.length;)p.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,
bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,J)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(b)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(F=e,G=e.$options,x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],K=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),G?(J=G.timezone,a.ngModelOptions=angular.copy(G),a.ngModelOptions.timezone=null,a.ngModelOptions.updateOnDefault===!0&&(a.ngModelOptions.updateOn=a.ngModelOptions.updateOn?a.ngModelOptions.updateOn+" default":"default"),C.attr("ng-model-options","ngModelOptions")):J=null,C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),K?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,J),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,J),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,J));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=l.fromTimezone(new Date(a.datepickerOptions[b]),J):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):b=new Date(d.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,f){c||(a.on("click",d),f.on("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,f){c===b&&(c=null,a.off("click",d),f.off("keydown",e))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,i,m,v=h.positionElements(b,n.dropdownMenu,"bottom-left",!0);if(e={top:v.top+"px",display:c?"block":"none"},i=n.dropdownMenu.hasClass("dropdown-menu-right"),i?(e.left="auto",m=h.scrollbarWidth(!0),e.right=window.innerWidth-m-(v.left+b.prop("offsetWidth"))+"px"):(e.left=v.left+"px",e.right="auto"),!t){var w=h.offset(u);e.top=v.top-w.top+"px",i?e.right=window.innerWidth-(v.left-w.left+b.prop("offsetWidth"))+"px":e.left=v.left-w.left+"px"}n.dropdownMenu.css(e)}var x=u?u:b,y=x.hasClass(u?p:q);if(y===!c&&g[c?"addClass":"removeClass"](x,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o,b);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var z=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z),n.dropdownMenu=z}f.close(o,b),n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{replace:!0,templateUrl:"uib/template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"===a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function k(){for(var a=-1,b=v.keys(),c=0;c<b.length;c++)v.get(b[c]).value.backdrop&&(a=c);return a>-1&&y>a&&(a=y),a}function l(a,b){var c=v.get(a).value,d=c.appendTo;v.remove(a),z=v.top(),z&&(y=parseInt(z.value.modalDomEl.attr("index"),10)),o(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||u;w.remove(b,a);var e=w.hasKey(b);d.toggleClass(b,e),!e&&t&&t.heightOverflow&&t.scrollbarWidth&&(t.originalRight?d.css({paddingRight:t.originalRight+"px"}):d.css({paddingRight:""}),t=null),m(!0)},c.closedDeferred),n(),b&&b.focus?b.focus():d.focus&&d.focus()}function m(a){var b;v.length()>0&&(b=v.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function n(){if(r&&-1===k()){var a=s;o(r,s,function(){a=null}),r=void 0,s=void 0}}function o(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){b.remove(),e&&e.resolve()}),c.$destroy(),d&&d())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(x.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function p(a){if(a.isDefaultPrevented())return a;var b=v.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){x.dismiss(b.key,"escape key press")}));break;case 9:var c=x.loadFocusElementList(b),d=!1;a.shiftKey?(x.isFocusInFirstItem(a,c)||x.isModalFocused(a,b))&&(d=x.focusLastFocusableElement(c)):x.isFocusInLastItem(a,c)&&(d=x.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function q(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var r,s,t,u="modal-open",v=h.createNew(),w=g.createNew(),x={NOW_CLOSING_EVENT:"modal.stack.now-closing"},y=0,z=null,A="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k,function(a){s&&(s.index=a)}),c.on("keydown",p),e.$on("$destroy",function(){c.off("keydown",p)}),x.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||u;m(!1),z=v.top(),v.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),w.put(h,b);var j=f.appendTo,l=k();if(!j.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l>=0&&!r&&(s=e.$new(!0),s.modalOptions=f,s.index=l,r=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),r.attr("backdrop-class",f.backdropClass),f.animation&&r.attr("modal-animation","true"),d(r)(s),a.enter(r,j),t=i.scrollbarPadding(j),t.heightOverflow&&t.scrollbarWidth&&j.css({paddingRight:t.right+"px"})),y=z?parseInt(z.value.modalDomEl.attr("index"),10)+1:0;var n=angular.element('<div uib-modal-window="modal-window"></div>');n.attr({"template-url":f.windowTemplateUrl,"window-class":f.windowClass,"window-top-class":f.windowTopClass,size:f.size,index:y,animate:"animate"}).html(f.content),f.animation&&n.attr("modal-animation","true"),j.addClass(h),a.enter(d(n)(f.scope),j),v.top().value.modalDomEl=n,v.top().value.modalOpener=g},x.close=function(a,b){var c=v.get(a);return c&&q(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),l(a,c.value.modalOpener),!0):!c},x.dismiss=function(a,b){var c=v.get(a);return c&&q(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),l(a,c.value.modalOpener),!0):!c},x.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},x.getTop=function(){return v.top()},x.modalRendered=function(a){var b=v.get(a);b&&b.value.renderDeferred.resolve()},x.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},x.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},x.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},x.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},x.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},x.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(A);return c?Array.prototype.filter.call(c,function(a){return j(a)}):c}}},x}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return r}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.template&&!e.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=c.all([i(e),g.resolve(e.resolve,{},null,null)]);return q=k=c.all([k]).then(j,j).then(function(a){var c=e.scope||b,d=c.$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var g,i,j={};e.controller&&(j.$scope=d,j.$scope.$resolve={},j.$uibModalInstance=p,angular.forEach(a[1],function(a,b){j[b]=a,j.$scope.$resolve[b]=a}),i=f(e.controller,j,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(g=i.instance,g.$close=d.$close,g.$dismiss=d.$dismiss,angular.extend(g,{$resolve:j.$scope.$resolve},c)),g=i(),angular.isFunction(g.$onInit)&&g.$onInit()),h.open(p,{scope:d,deferred:l,renderDeferred:o,closedDeferred:n,content:a[0],animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo}),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===q&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},replace:!0,link:function(a,c,d,e){var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),o.removeTop(),b=null)}}var o=m.createNew();return h.on("keypress",n),k.$on("$destroy",function(){h.off("keypress",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){
return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),E&&(E.$destroy(),E=null)}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var a=d[k+"Trigger"];T(),L=p(a),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K);D.css({top:a.top+"px",left:a.left+"px"}),D.hasClass(a.placement.split("-")[0])||(D.removeClass(J.split("-")[0]),D.addClass(a.placement.split("-")[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,o.add(N,{close:t}),N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),o.remove(N),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation()&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{uibTitle:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",uibTitle:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{uibTitle:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),p.$setValidity("editable",!0),p.$setValidity("parse",!0),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div class="panel" ng-class="panelClass || \'panel-default\'">\n  <div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>\n');
}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div class="uib-datepicker" ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table class="uib-daypicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table class="uib-monthpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<div>\n  <ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n    <li ng-transclude></li>\n    <li ng-if="showButtonBar" class="uib-button-bar">\n      <span class="btn-group pull-left">\n        <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n        <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n      </span>\n      <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n    </li>\n  </ul>\n</div>\n')}]),angular.module("uib/template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/backdrop.html",'<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog {{size ? \'modal-\' + size : \'\'}}"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,B){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&P(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(da(a))}if(1===a.nodeType)return E(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
R;a.domOperation=function(){a.$$domOperationFired=!0;b();b=R};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==R?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){P(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof B.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);if("-"===k||"+"===k||0<=k)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=T,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var R=B.noop,Ja=B.copy,Ea=B.extend,E=B.element,s=B.forEach,ca=B.isArray,P=B.isString,va=B.isObject,O=B.isUndefined,ea=B.isDefined,Ka=B.isFunction,wa=B.isElement,T,xa,$,ya;O(S.ontransitionend)&&
ea(S.onwebkittransitionend)?(T="WebkitTransition",xa="webkitTransitionEnd transitionend"):(T="transition",xa="transitionend");O(S.onanimationend)&&ea(S.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var ra=$+"Delay",za=$+"Duration",ma=T+"Delay",La=T+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:T+"Property",animationDuration:za,animationDelay:ra,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:ra};B.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,m){var I,k;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);k&&(k.$destroy(),k=null);if(e||0===e)k=b.$new(),m(k,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;B.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return O(a)&&O(b)||O(e)&&O(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,k,l,w,Wa,Q,u,F,n){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=z(b),d=z(a),L=[];(a=h[c])&&s(a,function(a){y.call(a.node,f)?L.push(a.callback):"leave"===c&&y.call(a.node,d)&&L.push(a.callback)});return L}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function t(a,
h,x){function r(c,f,d,h){H(function(){var c=J(oa,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(f,d,h)}function g(b){var c=a,f=p;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);D(a,p);ha(a,p);p.domOperation();n.complete(!b)}var p=Ja(x),t,oa;if(a=Oa(a))t=z(a),oa=a.parent();var p=pa(p),n=new Q,
H=K();ca(p.addClass)&&(p.addClass=p.addClass.join(" "));p.addClass&&!P(p.addClass)&&(p.addClass=null);ca(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.removeClass&&!P(p.removeClass)&&(p.removeClass=null);p.from&&!va(p.from)&&(p.from=null);p.to&&!va(p.to)&&(p.to=null);if(!t)return g(),n;x=[t.className,p.addClass,p.removeClass].join(" ");if(!Xa(x))return g(),n;var k=0<=["enter","move","leave"].indexOf(h),y=l[0].hidden,u=!f||y||L.get(t);x=!u&&A.get(t)||{};var F=!!x.state;u||F&&1==x.state||
(u=!N(a,oa,h));if(u)return y&&r(n,h,"start"),g(),y&&r(n,h,"close"),n;k&&M(a);y={structural:k,element:a,event:h,addClass:p.addClass,removeClass:p.removeClass,close:g,options:p,runner:n};if(F){if(d("skip",a,y,x)){if(2===x.state)return g(),n;W(a,x,y);return x.runner}if(d("cancel",a,y,x))if(2===x.state)x.runner.end();else if(x.structural)x.close();else return W(a,x,y),x.runner;else if(d("join",a,y,x))if(2===x.state)W(a,y,{});else return Sa(a,k?h:null,p),h=y.event=x.event,p=W(a,x,y),x.runner}else W(a,
y,{});(F=y.structural)||(F="animate"===y.event&&0<Object.keys(y.options.to||{}).length||e(y));if(!F)return g(),ka(a),n;var w=(x.counter||0)+1;y.counter=w;G(a,1,y);c.$$postDigest(function(){var b=A.get(t),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==w||!f){c&&(D(a,p),ha(a,p));if(c||k&&b.event!==h)p.domOperation(),n.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,G(a,2),b=Wa(a,h,b.options),n.setHost(b),r(n,h,"start",{}),b.done(function(b){g(!b);
(b=A.get(t))&&b.counter===w&&ka(z(a));r(n,h,"close",{})})});return n}function M(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function g(a,b){return z(a)===z(b)}function N(a,b,c){c=E(l[0].body);var f=g(a,c)||"HTML"===a[0].nodeName,d=g(a,k),h=!1,r,e=L.get(z(a));(a=E.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=g(b,k));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var n=L.get(b);if(!0===n&&!1!==e){e=!0;break}else!1===n&&(e=!1);h=a.structural}if(O(r)||!0===r)a=E.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=g(b,c));if(f&&d)break;if(!d&&(a=E.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function G(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new w,L=new w,
f=null,oa=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(oa(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},H=a.classNameFilter(),Xa=H?function(a){return H.test(a)}:function(){return!0},D=V(F),y=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},sa={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});E(b).on("$destroy",function(){A.get(f)||sa.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||B.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return t(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=L.get(d);1===c?b=!h:L.put(d,!b)}else b=f=!!a;return b}};return sa}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,m,I){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;e.put(d,a);for(var M;t;){if(M=e.get(t)){M.processed||(M=b(M));break}t=t.parentNode}(M||c).children.push(a);return a}var c={children:[]},d,e=new m;for(d=0;d<a.length;d++){var k=a[d];e.put(k.domNode,a[d]={domNode:k.domNode,fn:k.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,g=[];for(d=0;d<c.length;d++){var n=c[d];0>=a&&(a=e,e=0,b.push(g),g=[]);g.push(n.fn);n.children.forEach(function(a){e++;c.push(a)});a--}g.length&&b.push(g);return b}(c)}var v=[],w=V(a);return function(m,Q,u){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function n(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var g=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:d,element:E(a)}})}else b.push(a)});var d={},e={};s(c,function(c,g){var r=c.from,n=c.to;if(r&&n){var A=a[r.animationID],t=a[n.animationID],m=r.animationID.toString();if(!e[m]){var k=e[m]={structural:!0,beforeStart:function(){A.beforeStart();
t.beforeStart()},close:function(){A.close();t.close()},classes:K(A.classes,t.classes),from:A,to:t,anchors:[]};k.classes.length?b.push(k):(b.push(A),b.push(t))}e[m].anchors.push({out:r.element,"in":n.element})}else r=r?r.animationID:n.animationID,n=r.toString(),d[n]||(d[n]=!0,b.push(a[r]))});return b}function K(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function J(a){for(var c=
b.length-1;0<=c;c--){var d=b[c];if(e.has(d)&&(d=e.get(d)(a)))return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function t(){var a=m.data("$$animationRunner");!a||"leave"===Q&&u.$$domOperationFired||a.end()}function M(b){m.off("$destroy",t);m.removeData("$$animationRunner");w(m,u);ha(m,u);u.domOperation();G&&a.removeClass(m,G);m.removeClass("ng-animate");g.complete(!b)}u=pa(u);var ka=0<=["enter","move",
"leave"].indexOf(Q),g=new l({end:function(){M()},cancel:function(){M(!0)}});if(!b.length)return M(),g;m.data("$$animationRunner",g);var N=Ba(m.attr("class"),Ba(u.addClass,u.removeClass)),G=u.tempClasses;G&&(N+=" "+G,u.tempClasses=null);var A;ka&&(A="ng-"+Q+"-prepare",a.addClass(m,A));v.push({element:m,classes:N,event:Q,structural:ka,options:u,beforeStart:function(){m.addClass("ng-animate");G&&a.addClass(m,G);A&&(a.removeClass(m,A),A=null)},close:M});m.on("$destroy",t);if(1<v.length)return g;d.$$postDigest(function(){var a=
[];s(v,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});v.length=0;var b=n(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});I(k(c))});return g}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,m,I,k,v,w){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function Q(r,n,m,k){var g;0<b.count(m)&&(g=c.get(m),g||(n=Y(n,"-stagger"),e.addClass(r,n),g=Fa(a,r,k),g.animationDuration=Math.max(g.animationDuration,0),g.transitionDuration=Math.max(g.transitionDuration,0),e.removeClass(r,n),c.put(m,g)));return g||{}}function u(a){J.push(a);
v.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<J.length;d++)J[d](a);J.length=0})}function F(c,e,n){e=b.get(n);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(n,e);c=e;n=c.animationDelay;e=c.transitionDelay;c.maxDelay=n&&e?Math.max(n,e):n||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var n=V(e),K=0,J=[];return function(a,c){function d(){g()}function v(){g(!0)}function g(b){if(!(y||
E&&K)){y=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);qa(h,!1);s(H,function(a){h.style[a[0]]=""});n(a,f);ha(a,f);Object.keys(J).length&&s(J,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),a.removeData("$$animateCss"));O&&O.complete(!b)}}function N(a){q.blockTransition&&qa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function G(){O=
new l({end:d,cancel:v});u(R);g();return{$$willAnimate:!1,start:function(){return O},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=S&&b>=p&&(E=!0,g())}function L(){function b(){if(!y){N(!1);s(H,function(a){h.style[a[0]]=a[1]});n(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=B(h,na);C=F(h,na,ia);aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;if(0===p){g();return}q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,P=Math.max(aa,0),C.animationDelay=aa,ba=[ra,aa+"s"],H.push(ba),h.style[ba[0]]=ba[1]);S=1E3*P;V=1E3*p;if(f.easing){var d,k=f.easing;q.hasTransitions&&(d=T+"TimingFunction",H.push([d,k]),h.style[d]=k);q.hasAnimations&&(d=$+"TimingFunction",H.push([d,k]),h.style[d]=k)}C.transitionDuration&&fa.push(xa);C.animationDuration&&fa.push(ya);W=Date.now();var L=
S+1.5*V;d=W+L;var k=a.data("$$animateCss")||[],l=!0;if(k.length){var G=k[0];(l=d>G.expectedEndTime)?m.cancel(G.timer):k.push(g)}l&&(L=m(c,L,!1),k[0]={timer:L,expectedEndTime:d},k.push(g),a.data("$$animateCss",k));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!y)if(h.parentNode){var d=function(a){if(E)K&&a&&(K=!1,g());else if(K=!a,C.animationDuration)if(a=
ta(h,K),K)H.push(a);else{var b=H,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<da&&(C.transitionDuration&&0===X.transitionDuration||C.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);k?m(b,Math.floor(k*da*1E3),!1):b();x.resume=function(){d(!0)};x.pause=function(){d(!1)}}else g()}var f=c||{};f.$$prepared||(f=pa(Ja(f)));var J={},h=z(a);if(!h||!h.parentNode||!w.enabled())return G();var H=[],I=a.attr("class"),D=Na(f),y,K,E,O,x,P,S,p,V,W,fa=[];if(0===f.duration||!k.animations&&
!k.transitions)return G();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&n(a,f);var ga=[Z,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||I||ga))return G();var ia,X;0<f.stagger?(D=parseFloat(f.stagger),X={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(D=[T,f.transitionStyle],la(h,D),H.push(D));0<=f.duration&&(D=0<h.style[T].length,D=Ga(f.duration,D),la(h,D),H.push(D));f.keyframeStyle&&(D=[$,f.keyframeStyle],la(h,D),H.push(D));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&qa(h,9999);var C=F(h,na,ia),aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;var q={};q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==C.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)p=
f.duration?parseFloat(f.duration):p,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=p,D=0<h.style[T+"Property"].length,H.push(Ga(p,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=p,H.push([za,p+"s"]));if(0===p&&!q.recalculateTimingStyles)return G();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),P=Math.max(ba,0));q.applyTransitionDelay&&H.push([ma,ba+"s"]);q.applyAnimationDelay&&H.push([ra,ba+"s"])}null==f.duration&&0<C.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);S=1E3*P;V=1E3*p;f.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?N(p):f.skipBlocking||qa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!y)return x={end:d,cancel:v,resume:null,pause:null},O=new l(x),u(L),O}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,m,I){function k(a){return a.replace(/\bng-\S+\b/g,"")}function v(a,b){P(a)&&(a=a.split(" "));P(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,m){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function t(){var c=k(m.attr("class")||""),d=v(c,g),c=v(g,c),d=a(w,{to:l(m),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){w.remove();e.removeClass("ng-animate-shim");m.removeClass("ng-animate-shim")}var w=E(z(e).cloneNode(!0)),g=k(w.attr("class")||"");e.addClass("ng-animate-shim");m.addClass("ng-animate-shim");w.addClass("ng-anchor");
F.append(w);var N;c=function(){var c=a(w,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(N=t(),!N))return I();var G=c||N;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!N&&(N=t()))return c=N.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,cancel:a})}}}function B(a,b,c,e){var k=Q(a,R),m=Q(b,R),l=[];s(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(k||m||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];k&&b.push(k.start());m&&b.push(m.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return R;var u=I[0].body;
c=z(e);var F=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);V(m);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var w=c[l],s=a.$$registeredAnimations[w];s&&!e[w]&&(d.push(b.get(s)),e[w]=!0)}return d}var l=V(d);return function(a,b,d,v){function w(){v.domOperation();
l(a,v)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,n,K,f];break;case "addClass":b=[b,n,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return R}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||R)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});
f=B(k,a,b,d,function(a){g(!1===a)});return e})});return g}function u(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(v=d,d=null);v=pa(v);d||(d=a.attr("class")||"",v.addClass&&(d+=" "+v.addClass),v.removeClass&&(d+=" "+v.removeClass));var n=v.addClass,K=v.removeClass,J=e(d),r,t;if(J.length){var M,E;"leave"==b?(E="leave",M="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(r=u(a,b,v,J,E));t=u(a,b,v,J,M)}if(r||t){var g;return{$$willAnimate:!0,end:function(){g?g.end():(F=!0,w(),ha(a,v),g=new c,g.complete(!0));return g},
start:function(){function b(c){F=!0;w();ha(a,v);g.complete(c)}if(g)return g;g=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){w();a(!0)}):w();t&&e.push(function(a){d=t(a)});g.setHost({end:function(){F||((d||R)(void 0),b(void 0))},cancel:function(){F||((d||R)(!0),b(!0))}});c.chain(e,b);return g}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/* @preserve
 *
 * angular-bootstrap-file
 * https://github.com/itslenny/angular-bootstrap-file-field
 *
 * Version: 0.1.3 - 02/21/2015
 * License: MIT
 */
angular.module("bootstrap.fileField",[]).directive("fileField",function(){return{require:"ngModel",restrict:"E",link:function(scope,element,attrs,ngModel){if(!attrs.class&&!attrs.ngClass){element.addClass("btn")}var fileField=element.find("input");fileField.bind("change",function(event){scope.$evalAsync(function(){ngModel.$setViewValue(event.target.files[0]);if(attrs.preview){var reader=new FileReader;reader.onload=function(e){scope.$evalAsync(function(){scope[attrs.preview]=e.target.result})};reader.readAsDataURL(event.target.files[0])}})});fileField.bind("click",function(e){e.stopPropagation()});element.bind("click",function(e){e.preventDefault();fileField[0].click()})},template:'<button type="button"><ng-transclude></ng-transclude><input type="file" style="display:none"></button>',replace:true,transclude:true}});
//# sourceMappingURL=angular-bootstrap-file-field.min.js.map
(function (root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) define(['angular'], factory);
  // Global
  else factory(angular);
}(this, function (angular) {

  angular
  .module('ckeditor', [])
  .directive('ckeditor', ['$parse', ckeditorDirective]);

  // Polyfill setImmediate function.
  var setImmediate = window && window.setImmediate ? window.setImmediate : function (fn) {
    setTimeout(fn, 0);
  };

  /**
   * CKEditor directive.
   *
   * @example
   * <div ckeditor="options" ng-model="content" ready="onReady()"></div>
   */

  function ckeditorDirective($parse) {
    return {
      restrict: 'A',
      require: ['ckeditor', 'ngModel'],
      controller: [
        '$scope',
        '$element',
        '$attrs',
        '$parse',
        '$q',
        ckeditorController
      ],
      link: function (scope, element, attrs, ctrls) {
        // get needed controllers
        var controller = ctrls[0]; // our own, see below
        var ngModelController = ctrls[1];

        // Initialize the editor content when it is ready.
        controller.ready().then(function initialize() {
          // Sync view on specific events.
          ['dataReady', 'change', 'blur', 'saveSnapshot'].forEach(function (event) {
            controller.onCKEvent(event, function syncView() {
              ngModelController.$setViewValue(controller.instance.getData() || '');
            });
          });

          controller.instance.setReadOnly(!! attrs.readonly);
          attrs.$observe('readonly', function (readonly) {
            controller.instance.setReadOnly(!! readonly);
          });

          // Defer the ready handler calling to ensure that the editor is
          // completely ready and populated with data.
          setImmediate(function () {
            $parse(attrs.ready)(scope);
          });
        });

        // Set editor data when view data change.
        ngModelController.$render = function syncEditor() {
          controller.ready().then(function () {
            // "noSnapshot" prevent recording an undo snapshot
            controller.instance.setData(ngModelController.$viewValue || '', {
              noSnapshot: true,
              callback: function () {
                // Amends the top of the undo stack with the current DOM changes
                // ie: merge snapshot with the first empty one
                // http://docs.ckeditor.com/#!/api/CKEDITOR.editor-event-updateSnapshot
                controller.instance.fire('updateSnapshot');
              }
            });
          });
        };
      }
    };
  }

  /**
   * CKEditor controller.
   */

  function ckeditorController($scope, $element, $attrs, $parse, $q) {
    var config = $parse($attrs.ckeditor)($scope) || {};
    var editorElement = $element[0];
    var instance;
    var readyDeferred = $q.defer(); // a deferred to be resolved when the editor is ready

    // Create editor instance.
    if (editorElement.hasAttribute('contenteditable') &&
        editorElement.getAttribute('contenteditable').toLowerCase() == 'true') {
      instance = this.instance = CKEDITOR.inline(editorElement, config);
    }
    else {
      instance = this.instance = CKEDITOR.replace(editorElement, config);
    }

    /**
     * Listen on events of a given type.
     * This make all event asynchronous and wrapped in $scope.$apply.
     *
     * @param {String} event
     * @param {Function} listener
     * @returns {Function} Deregistration function for this listener.
     */

    this.onCKEvent = function (event, listener) {
      instance.on(event, asyncListener);

      function asyncListener() {
        var args = arguments;
        setImmediate(function () {
          applyListener.apply(null, args);
        });
      }

      function applyListener() {
        var args = arguments;
        $scope.$apply(function () {
          listener.apply(null, args);
        });
      }

      // Return the deregistration function
      return function $off() {
        instance.removeListener(event, applyListener);
      };
    };

    this.onCKEvent('instanceReady', function() {
      readyDeferred.resolve(true);
    });

    /**
     * Check if the editor if ready.
     *
     * @returns {Promise}
     */
    this.ready = function ready() {
      return readyDeferred.promise;
    };

    // Destroy editor when the scope is destroyed.
    $scope.$on('$destroy', function onDestroy() {
      // do not delete too fast or pending events will throw errors
      readyDeferred.promise.then(function() {
        instance.destroy(false);
      });
    });
  }
}));

angular.module("rt.debounce",[]).factory("debounce",["$timeout",function(a){return function(b,c){function d(){j=c.apply(i||this,h||[]),i=h=null}function e(){k&&(a.cancel(k),k=null)}function f(){i=this,h=arguments,e(),k=a(d,b)}function g(){var a=!!i;return a&&(e(),d()),a}var h,i,j,k;return f.flush=function(){return g()||k||d(),j},f.flushPending=function(){return g(),j},f.cancel=e,f}}]);
/**
 * angular-drag-and-drop-lists v1.4.0
 *
 * Copyright (c) 2014 Marcel Juenemann marcel@juenemann.cc
 * Copyright (c) 2014-2016 Google Inc.
 * https://github.com/marceljuenemann/angular-drag-and-drop-lists
 *
 * License: MIT
 */
angular.module("dndLists",[]).directive("dndDraggable",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){d.attr("draggable","true"),o.dndDisableIf&&a.$watch(o.dndDisableIf,function(e){d.attr("draggable",!e)}),d.on("dragstart",function(i){return i=i.originalEvent||i,"false"==d.attr("draggable")?!0:(i.dataTransfer.setData("Text",angular.toJson(a.$eval(o.dndDraggable))),i.dataTransfer.effectAllowed=o.dndEffectAllowed||"move",d.addClass("dndDragging"),n(function(){d.addClass("dndDraggingSource")},0),r.dropEffect="none",t.isDragging=!0,t.dragType=o.dndType?a.$eval(o.dndType):void 0,i._dndHandle&&i.dataTransfer.setDragImage&&i.dataTransfer.setDragImage(d[0],0,0),e(o.dndDragstart)(a,{event:i}),void i.stopPropagation())}),d.on("dragend",function(i){i=i.originalEvent||i
var f=r.dropEffect
a.$apply(function(){switch(f){case"move":e(o.dndMoved)(a,{event:i})
break
case"copy":e(o.dndCopied)(a,{event:i})
break
case"none":e(o.dndCanceled)(a,{event:i})}e(o.dndDragend)(a,{event:i,dropEffect:f})}),d.removeClass("dndDragging"),n(function(){d.removeClass("dndDraggingSource")},0),t.isDragging=!1,i.stopPropagation()}),d.on("click",function(n){o.dndSelected&&(n=n.originalEvent||n,a.$apply(function(){e(o.dndSelected)(a,{event:n})}),n.stopPropagation())}),d.on("selectstart",function(){this.dragDrop&&this.dragDrop()})}}]).directive("dndList",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){function i(e,n,r){var t=E?e.offsetX||e.layerX:e.offsetY||e.layerY,a=E?n.offsetWidth:n.offsetHeight,d=E?n.offsetLeft:n.offsetTop
return d=r?d:0,d+a/2>t}function f(){var e
return angular.forEach(d.children(),function(n){var r=angular.element(n)
r.hasClass("dndPlaceholder")&&(e=r)}),e||angular.element("<li class='dndPlaceholder'></li>")}function l(){return Array.prototype.indexOf.call(D.children,v)}function g(e){if(!t.isDragging&&!y)return!1
if(!c(e.dataTransfer.types))return!1
if(o.dndAllowedTypes&&t.isDragging){var n=a.$eval(o.dndAllowedTypes)
if(angular.isArray(n)&&-1===n.indexOf(t.dragType))return!1}return o.dndDisableIf&&a.$eval(o.dndDisableIf)?!1:!0}function s(){return p.remove(),d.removeClass("dndDragover"),!0}function u(n,r,d,o){return e(n)(a,{event:r,index:d,item:o||void 0,external:!t.isDragging,type:t.isDragging?t.dragType:void 0})}function c(e){if(!e)return!0
for(var n=0;n<e.length;n++)if("Text"===e[n]||"text/plain"===e[n])return!0
return!1}var p=f(),v=p[0],D=d[0]
p.remove()
var E=o.dndHorizontalList&&a.$eval(o.dndHorizontalList),y=o.dndExternalSources&&a.$eval(o.dndExternalSources)
d.on("dragenter",function(e){return e=e.originalEvent||e,g(e)?void e.preventDefault():!0}),d.on("dragover",function(e){if(e=e.originalEvent||e,!g(e))return!0
if(v.parentNode!=D&&d.append(p),e.target!==D){for(var n=e.target;n.parentNode!==D&&n.parentNode;)n=n.parentNode
n.parentNode===D&&n!==v&&(i(e,n)?D.insertBefore(v,n):D.insertBefore(v,n.nextSibling))}else if(i(e,v,!0))for(;v.previousElementSibling&&(i(e,v.previousElementSibling,!0)||0===v.previousElementSibling.offsetHeight);)D.insertBefore(v,v.previousElementSibling)
else for(;v.nextElementSibling&&!i(e,v.nextElementSibling,!0);)D.insertBefore(v,v.nextElementSibling.nextElementSibling)
return o.dndDragover&&!u(o.dndDragover,e,l())?s():(d.addClass("dndDragover"),e.preventDefault(),e.stopPropagation(),!1)}),d.on("drop",function(e){if(e=e.originalEvent||e,!g(e))return!0
e.preventDefault()
var n,t=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain")
try{n=JSON.parse(t)}catch(d){return s()}var i=l()
return o.dndDrop&&(n=u(o.dndDrop,e,i,n),!n)?s():(n!==!0&&a.$apply(function(){a.$eval(o.dndList).splice(i,0,n)}),u(o.dndInserted,e,i,n),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?r.dropEffect=e.dataTransfer.effectAllowed:r.dropEffect=e.ctrlKey?"copy":"move":r.dropEffect=e.dataTransfer.dropEffect,s(),e.stopPropagation(),!1)}),d.on("dragleave",function(e){e=e.originalEvent||e,d.removeClass("dndDragover"),n(function(){d.hasClass("dndDragover")||p.remove()},100)})}}]).directive("dndNodrag",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart",function(e){e=e.originalEvent||e,e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())}),n.on("dragend",function(e){e=e.originalEvent||e,e._dndHandle||e.stopPropagation()})}}).directive("dndHandle",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart dragend",function(e){e=e.originalEvent||e,e._dndHandle=!0})}}).factory("dndDragTypeWorkaround",function(){return{}}).factory("dndDropEffectWorkaround",function(){return{}})

"format amd";!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null,statefulFilters:!0}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null,fullDateThreshold:null,fullDateFormat:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(p)a=p;else if(e.serverTime){var b=(new Date).getTime(),d=b-w+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){var c=j().diff(a,"day"),d=u&&c>=u;if(h.text(d?a.format(v):a.from(j(),s)),t&&!h.attr("title")&&h.attr("title",a.local().format(t)),!d){var e=Math.abs(j().diff(a,"minute")),f=3600;1>e?f=1:60>e?f=30:180>e&&(f=300),q=b.setTimeout(function(){l(a)},1e3*f)}}function m(a){z&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,x,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=e.titleFormat,u=e.fullDateThreshold,v=e.fullDateFormat,w=(new Date).getTime(),x=f.preprocess,y=i.amTimeAgo,z="TIME"===h[0].nodeName.toUpperCase();g.$watch(y,function(a){return"undefined"==typeof a||null===a||""===a?(k(),void(o&&(h.text(""),m(""),o=null))):(o=a,void n())}),a.isDefined(i.amFrom)&&g.$watch(i.amFrom,function(a){p="undefined"==typeof a||null===a||""===a?null:c(a),n()}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(s=a,n()):s=e.withoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){x=a,n()}),i.$observe("amFullDateThreshold",function(a){u=a,n()}),i.$observe("amFullDateFormat",function(a){v=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){this.preprocessors={utc:b.utc,unix:b.unix},this.changeLocale=function(d,e){var f=b.locale(d,e);return a.isDefined(d)&&c.$broadcast("amMoment:localeChanged"),f},this.changeTimezone=function(a){e.timezone=a,c.$broadcast("amMoment:timezoneChanged")},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a,b){return(b=b||e.timezone)?(b.match(/^Z|[+-]\d\d:?\d\d$/i)?a=a.utcOffset(b):a.tz?a=a.tz(b):d.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?"),a):a}}]).filter("amCalendar",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var f=a(c);return f.isValid()?b.applyTimezone(f,e).calendar():""}return d.$stateful=c.statefulFilters,d}]).filter("amDifference",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f,g,h){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,g);var i=a(c);if(!i.isValid())return"";var j;if("undefined"==typeof d||null===d)j=a();else if(d=b.preprocessDate(d,h),j=a(d),!j.isValid())return"";return b.applyTimezone(i).diff(b.applyTimezone(j),e,f)}return d.$stateful=c.statefulFilters,d}]).filter("amDateFormat",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(d,e,f,g,h){var i=h||c.format;if("undefined"==typeof d||null===d)return"";d=b.preprocessDate(d,f,i);var j=a(d);return j.isValid()?b.applyTimezone(j,g).format(e):""}return d.$stateful=c.statefulFilters,d}]).filter("amDurationFormat",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}return c.$stateful=b.statefulFilters,c}]).filter("amTimeAgo",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f){var g,h;return"undefined"==typeof c||null===c?"":(c=b.preprocessDate(c,d),g=a(c),g.isValid()?(h=a(f),"undefined"!=typeof f&&h.isValid()?b.applyTimezone(g).from(h,e):b.applyTimezone(g).fromNow(e)):"")}return d.$stateful=c.statefulFilters,d}]).filter("amSubtract",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).subtract(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}]).filter("amAdd",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).add(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}])}"function"==typeof define&&define.amd?define(["angular","moment"],a):"undefined"!=typeof module&&module&&module.exports?(a(angular,require("moment")),module.exports="angularMoment"):a(angular,("undefined"!=typeof global?global:window).moment)}();
//# sourceMappingURL=angular-moment.min.js.map
/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function c(a,b){var c={};b=v({},h,b);u(b,function(b,h){x(b)&&(b=b());var f;if(b&&b.charAt&&"@"==b.charAt(0)){f=a;var l=b.substr(1);if(null==l||""===l||"hasOwnProperty"===l||!M.test("."+
l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=b;c[h]=f});return c}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,b){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:k&&d.isDefined(k.cancellable)?k.cancellable:
g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[b]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?
w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,b){switch(b){default:s[b]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},c(n,a.params||{}),r),a.url);r=q(s).then(function(f){var c=
f.data;if(c){if(d.isArray(c)!==!!a.isArray)throw z("badcfg",b,a.isArray?"array":"object",d.isArray(c)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(c,function(b){"object"===typeof b?p.push(new m(b)):p.push(b)});else{var l=p.$promise;G(c,p);p.$promise=l}}f.resource=p;return f},function(b){(C||K)(b);return H.reject(b)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(b){var a=A(b);(w||K)(a,b.headers);return a},B);
return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+b]=function(a,c,d){x(a)&&(d=c,c=a,a={});a=m[b].call(this,a,this,c,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,c=n||k.template,g,m,q="",a=k.urlParams={};u(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw z("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+
b+"(\\W|$)")).test(c)&&(a[b]={isQueryParamValue:(new RegExp("\\?.*=:"+b+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,b){return m+b})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,b,c){return"/"==
c.charAt(0)?c:b+c})});k.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+c.replace(/\/\\\./,"/.");u(h,function(a,c){k.urlParams[c]||(e.params=e.params||{},e.params[c]=a)})}};return J}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e){'use strict';function B(a){var c=[];w(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function C(a,c){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw x("uinput");b--;n.document.documentMode&&t(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),D(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function D(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function y(a){return a.replace(/&/g,"&amp;").replace(E,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(F,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&G[a]&&(b=a);b||!0!==u[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==H[g]||!0===z[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(y(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==u[a]||!0===A[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(y(a))}}}function t(a){if(a.nodeType===n.Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.lastIndexOf("ns1:",0))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&t(c);(c=a.nextSibling)&&t(c)}var x=e.$$minErr("$sanitize"),E=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,F=/([^\#-~ |!])/g,A=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),v=e.extend({},k,q),
q=e.extend({},q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),I=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
G=h("script,style"),u=e.extend({},A,q,k,v),z=h("background,cite,href,longdesc,src,xlink:href"),v=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),H=e.extend({},z,k,v),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw x("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(n);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(u,I);return function(a){var d=
[];C(a,w(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(B(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,n){'use strict';function s(f,k){var e=!1,a=!1;this.ngClickOverrideEnabled=function(b){return n.isDefined(b)?(b&&!a&&(a=!0,t.$$moduleName="ngTouch",k.directive("ngClick",t),f.decorator("ngClickDirective",["$delegate",function(a){if(e)a.shift();else for(var b=a.length-1;0<=b;){if("ngTouch"===a[b].$$moduleName){a.splice(b,1);break}b--}return a}])),e=b,this):e};this.$get=function(){return{ngClickOverrideEnabled:function(){return e}}}}function v(f,k,e){p.directive(f,["$parse","$swipe",function(a,
b){return function(l,u,g){function h(c){if(!d)return!1;var a=Math.abs(c.y-d.y);c=(c.x-d.x)*k;return r&&75>a&&0<c&&30<c&&.3>a/c}var m=a(g[f]),d,r,c=["touch"];n.isDefined(g.ngSwipeDisableMouse)||c.push("mouse");b.bind(u,{start:function(c,a){d=c;r=!0},cancel:function(c){r=!1},end:function(c,d){h(c)&&l.$apply(function(){u.triggerHandler(e);m(l,{$event:d})})}},c)}}])}var p=n.module("ngTouch",[]);p.provider("$touch",s);s.$inject=["$provide","$compileProvider"];p.factory("$swipe",[function(){function f(a){a=
a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function k(a,b){var l=[];n.forEach(a,function(a){(a=e[a][b])&&l.push(a)});return l.join(" ")}var e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(a,b,l){var e,g,h,m,d=!1;l=l||["mouse","touch"];a.on(k(l,"start"),function(c){h=f(c);d=!0;g=e=0;m=
h;b.start&&b.start(h,c)});var r=k(l,"cancel");if(r)a.on(r,function(c){d=!1;b.cancel&&b.cancel(c)});a.on(k(l,"move"),function(c){if(d&&h){var a=f(c);e+=Math.abs(a.x-m.x);g+=Math.abs(a.y-m.y);m=a;10>e&&10>g||(g>e?(d=!1,b.cancel&&b.cancel(c)):(c.preventDefault(),b.move&&b.move(a,c)))}});a.on(k(l,"end"),function(c){d&&(d=!1,b.end&&b.end(f(c),c))})}}}]);var t=["$parse","$timeout","$rootElement",function(f,k,e){function a(a,d,b){for(var c=0;c<a.length;c+=2){var g=a[c+1],e=b;if(25>Math.abs(a[c]-d)&&25>Math.abs(g-
e))return a.splice(c,c+2),!0}return!1}function b(b){if(!(2500<Date.now()-u)){var d=b.touches&&b.touches.length?b.touches:[b],e=d[0].clientX,d=d[0].clientY;if(!(1>e&&1>d||h&&h[0]===e&&h[1]===d)){h&&(h=null);var c=b.target;"label"===n.lowercase(c.nodeName||c[0]&&c[0].nodeName)&&(h=[e,d]);a(g,e,d)||(b.stopPropagation(),b.preventDefault(),b.target&&b.target.blur&&b.target.blur())}}}function l(a){a=a.touches&&a.touches.length?a.touches:[a];var b=a[0].clientX,e=a[0].clientY;g.push(b,e);k(function(){for(var a=
0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==e){g.splice(a,a+2);break}},2500,!1)}var u,g,h;return function(h,d,k){var c=f(k.ngClick),w=!1,q,p,s,t;d.on("touchstart",function(a){w=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);d.addClass("ng-click-active");p=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:[a])[0];s=a.clientX;t=a.clientY});d.on("touchcancel",function(a){w=!1;d.removeClass("ng-click-active")});d.on("touchend",function(c){var h=Date.now()-p,f=c.originalEvent||
c,m=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=m.clientX,m=m.clientY,v=Math.sqrt(Math.pow(f-s,2)+Math.pow(m-t,2));w&&750>h&&12>v&&(g||(e[0].addEventListener("click",b,!0),e[0].addEventListener("touchstart",l,!0),g=[]),u=Date.now(),a(g,f,m),q&&q.blur(),n.isDefined(k.disabled)&&!1!==k.disabled||d.triggerHandler("click",[c]));w=!1;d.removeClass("ng-click-active")});d.onclick=function(a){};d.on("click",function(a,b){h.$apply(function(){c(h,
{$event:b||a})})});d.on("mousedown",function(a){d.addClass("ng-click-active")});d.on("mousemove mouseup",function(a){d.removeClass("ng-click-active")})}}];v("ngSwipeLeft",-1,"swipeleft");v("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,c){function d(a){return 1===V&&W>=4?!!j.enabled(a):1===V&&W>=2?!!j.enabled():!!i}var e={enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}};if(a.noanimation)return e;if(j)return{enter:function(a,c,f){d(a)?b.version.minor>2?j.enter(a,null,c).then(f):j.enter(a,null,c,f):e.enter(a,c,f)},leave:function(a,c){d(a)?b.version.minor>2?j.leave(a).then(c):j.leave(a,c):e.leave(a,c)}};if(i){var f=i&&i(c,a);return{enter:function(a,b,c){f.enter(a,null,b),c()},leave:function(a,b){f.leave(a),b()}}}return e}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){function a(){b&&b.remove(),c&&c.$destroy()}var b=l,c=n;c&&(c._willBeDestroyed=!0),m?(r.leave(m,function(){a(),l=null}),l=m):(a(),l=null),m=null,n=null}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if((g||s!==o)&&!c._willBeDestroyed){k=c.$new(),o=a.$current.locals[l],k.$emit("$viewContentLoading",l);var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded",l),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h=B(f.uiSref,a.current.name),i={state:h.state,href:null,params:null},j=D(e),k=g[1]||g[0];i.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var l=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),k&&k.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(j.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,function(a){a!==i.params&&l(a)},!0),i.params=b.copy(d.$eval(h.paramExpr))),l(),j.clickable&&e.bind("click",E(e,a,c,j,function(){return i}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){l.state=b[0],l.params=b[1],l.options=b[2],l.href=a.href(l.state,l.params,l.options),i&&i.$$addStateInfo(l.state,l.params),l.href&&e.$set(h.attr,l.href)}var h=D(d),i=f[1]||f[0],j=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],k="["+j.map(function(a){return a||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};c.$watch(k,g,!0),g(c.$eval(k)),h.clickable&&d.bind("click",E(d,a,b,h,function(){return l}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c);p.push({state:f||{name:b},params:c,hash:g}),q[g]=e}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){O(o)&&p.length>0||(g(a,b,o),i())},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x);var V=b.version.major,W=b.version.minor;y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),
J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
//https://gist.github.com/kirkstrobeck/599664399dbc23968741
/* global angular */
/**
 * https://gist.github.com/mlynch/dd407b93ed288d499778
 *
 * the HTML5 autofocus property can be finicky when it comes to dynamically
 * loaded templates and such with AngularJS. Use this simple directive to tame
 * this beast once and for all.
 *
 * Usage:
 * <input type="text" autofocus>
 */
(function () {
    'use strict';

    angular.module('utils.autofocus', [])

        .directive('autofocus', ['$timeout',
            function ($timeout) {
                return {
                    restrict: 'A',
                    link: function ($scope, $element) {
                        $timeout(function () {
                            $element[0].focus();
                        });
                    }
                };
            }
        ]);
})();
/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.17.1 - 2016-05-16T19:31:32.352Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var i=t.which;switch(i){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return!!(t.metaKey||t.ctrlKey||t.altKey)},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)},toSeparator:function(t){var i={ENTER:"\n",TAB:"	",SPACE:" "}[t];return i?i:e[t]?void 0:t}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(i.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,i=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,skipFocusser:!1,dropdownPosition:"auto",generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),i=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(i)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,i,c,s){s(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return(""+e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,i){return i&&t?(""+t).replace(new RegExp(e(i),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(i){var c=i[0].getBoundingClientRect();return{width:c.width||i.prop("offsetWidth"),height:c.height||i.prop("offsetHeight"),top:c.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:c.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);i.factory("$$uisDebounce",["$timeout",function(e){return function(t,i){var c;return function(){var s=this,l=Array.prototype.slice.call(arguments);c&&e.cancel(c),c=e(function(){t.apply(s,l)},i)}}}]),i.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile","$window",function(e,t,i,c,s){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-choices");var i=t.parent().attr("theme")||e.theme;return i+"/choices.tpl.html"},compile:function(c,l){if(!l.repeat)throw i("repeat","Expected 'repeat' expression.");var n=l.groupBy,a=l.groupFilter;if(n){var r=c.querySelectorAll(".ui-select-choices-group");if(1!==r.length)throw i("rows","Expected 1 .ui-select-choices-group but got '{0}'.",r.length);r.attr("ng-repeat",t.getGroupNgRepeatExpression())}var o=t.parse(l.repeat),u=c.querySelectorAll(".ui-select-choices-row");if(1!==u.length)throw i("rows","Expected 1 .ui-select-choices-row but got '{0}'.",u.length);u.attr("ng-repeat",o.repeatExpression(n)).attr("ng-if","$select.open");var d=c.querySelectorAll(".ui-select-choices-row-inner");if(1!==d.length)throw i("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",d.length);d.attr("uis-transclude-append","");var p=s.document.addEventListener?u:d;return p.attr("ng-click","$select.select("+o.itemName+",$select.skipFocusser,$event)"),function(t,i,c,s){s.parseRepeatAttr(c.repeat,n,a),s.disableChoiceExpression=c.uiDisableChoice,s.onHighlightCallback=c.onHighlight,s.dropdownPosition=c.position?c.position.toLowerCase():e.dropdownPosition,t.$on("$destroy",function(){u.remove()}),t.$watch("$select.search",function(e){e&&!s.open&&s.multiple&&s.activate(!1,!0),s.activeIndex=s.tagging.isActivated?-1:0,!c.minimumInputLength||s.search.length>=c.minimumInputLength?s.refresh(c.refresh):s.items=[]}),c.$observe("refreshDelay",function(){var i=t.$eval(c.refreshDelay);s.refreshDelay=void 0!==i?i:e.refreshDelay})}}}}]),i.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","$$uisDebounce","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse","$injector","$window",function(t,i,c,s,l,n,a,r,o,u,d){function p(e,t,i){if(e.findIndex)return e.findIndex(t,i);for(var c,s=Object(e),l=s.length>>>0,n=0;l>n;n++)if(c=s[n],t.call(i,c,n,s))return n;return-1}function h(){(m.resetSearchInput||void 0===m.resetSearchInput&&r.resetSearchInput)&&(m.search=$,m.selected&&m.items.length&&!m.multiple&&(m.activeIndex=p(m.items,function(e){return angular.equals(this,e)},m.selected)))}function g(e,t){var i,c,s=[];for(i=0;i<t.length;i++)for(c=0;c<e.length;c++)e[c].name==[t[i]]&&s.push(e[c]);return s}function f(t){var i=!0;switch(t){case e.DOWN:!m.open&&m.multiple?m.activate(!1,!0):m.activeIndex<m.items.length-1&&m.activeIndex++;break;case e.UP:!m.open&&m.multiple?m.activate(!1,!0):(m.activeIndex>0||0===m.search.length&&m.tagging.isActivated&&m.activeIndex>-1)&&m.activeIndex--;break;case e.TAB:m.multiple&&!m.open||m.select(m.items[m.activeIndex],!0);break;case e.ENTER:m.open&&(m.tagging.isActivated||m.activeIndex>=0)?m.select(m.items[m.activeIndex],m.skipFocusser):m.activate(!1,!0);break;case e.ESC:m.close();break;default:i=!1}return i}function v(){var e=i.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw a("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(m.activeIndex<0)){var c=t[m.activeIndex],s=c.offsetTop+c.clientHeight-e[0].scrollTop,l=e[0].offsetHeight;s>l?e[0].scrollTop+=s-l:s<c.clientHeight&&(m.isGrouped&&0===m.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=c.clientHeight-s)}}var m=this,$="";if(m.placeholder=r.placeholder,m.searchEnabled=r.searchEnabled,m.sortable=r.sortable,m.refreshDelay=r.refreshDelay,m.paste=r.paste,m.removeSelected=!1,m.closeOnSelect=!0,m.skipFocusser=!1,m.search=$,m.activeIndex=0,m.items=[],m.open=!1,m.focus=!1,m.disabled=!1,m.selected=void 0,m.dropdownPosition="auto",m.focusser=void 0,m.resetSearchInput=!0,m.multiple=void 0,m.disableChoiceExpression=void 0,m.tagging={isActivated:!1,fct:void 0},m.taggingTokens={isActivated:!1,tokens:void 0},m.lockChoiceExpression=void 0,m.clickTriggeredSelect=!1,m.$filter=s,m.$element=i,m.$animate=function(){try{return u.get("$animate")}catch(e){return null}}(),m.searchInput=i.querySelectorAll("input.ui-select-search"),1!==m.searchInput.length)throw a("searchInput","Expected 1 input.ui-select-search but got '{0}'.",m.searchInput.length);m.isEmpty=function(){return angular.isUndefined(m.selected)||null===m.selected||""===m.selected||m.multiple&&0===m.selected.length},m.activate=function(e,s){if(!m.disabled&&!m.open){s||h(),t.$broadcast("uis:activate"),m.open=!0,m.activeIndex=m.activeIndex>=m.items.length?0:m.activeIndex,-1===m.activeIndex&&m.taggingLabel!==!1&&(m.activeIndex=0);var l=i.querySelectorAll(".ui-select-choices-content"),n=i.querySelectorAll(".ui-select-search");if(m.$animate&&m.$animate.enabled(l[0])){var a=function(t,i){"start"===i&&0===m.items.length?(m.$animate.off("removeClass",n[0],a),c(function(){m.focusSearchInput(e)})):"close"===i&&(m.$animate.off("enter",l[0],a),c(function(){m.focusSearchInput(e)}))};m.items.length>0?m.$animate.on("enter",l[0],a):m.$animate.on("removeClass",n[0],a)}else c(function(){m.focusSearchInput(e),!m.tagging.isActivated&&m.items.length>1&&v()})}},m.focusSearchInput=function(e){m.search=e||m.search,m.searchInput[0].focus()},m.findGroupByName=function(e){return m.groups&&m.groups.filter(function(t){return t.name===e})[0]},m.parseRepeatAttr=function(e,i,c){function s(e){var s=t.$eval(i);if(m.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(s)?s(e):e[s],i=m.findGroupByName(t);i?i.items.push(e):m.groups.push({name:t,items:[e]})}),c){var l=t.$eval(c);angular.isFunction(l)?m.groups=l(m.groups):angular.isArray(l)&&(m.groups=g(m.groups,l))}m.items=[],m.groups.forEach(function(e){m.items=m.items.concat(e.items)})}function l(e){m.items=e}m.setItemsFn=i?s:l,m.parserResult=n.parse(e),m.isGrouped=!!i,m.itemProperty=m.parserResult.itemName;var r=m.parserResult.source,u=function(){var e=r(t);t.$uisSource=Object.keys(e).map(function(t){var i={};return i[m.parserResult.keyName]=t,i.value=e[t],i})};m.parserResult.keyName&&(u(),m.parserResult.source=o("$uisSource"+m.parserResult.filters),t.$watch(r,function(e,t){e!==t&&u()},!0)),m.refreshItems=function(e){e=e||m.parserResult.source(t);var i=m.selected;if(m.isEmpty()||angular.isArray(i)&&!i.length||!m.removeSelected)m.setItemsFn(e);else if(void 0!==e){var c=e.filter(function(e){return i.every(function(t){return!angular.equals(e,t)})});m.setItemsFn(c)}"auto"!==m.dropdownPosition&&"up"!==m.dropdownPosition||t.calculateDropdownPos()},t.$watchCollection(m.parserResult.source,function(e){if(void 0===e||null===e)m.items=[];else{if(!angular.isArray(e))throw a("items","Expected an array but got '{0}'.",e);m.refreshItems(e),angular.isDefined(m.ngModel.$modelValue)&&(m.ngModel.$modelValue=null)}})};var b;m.refresh=function(e){void 0!==e&&(b&&c.cancel(b),b=c(function(){t.$eval(e)},m.refreshDelay))},m.isActive=function(e){if(!m.open)return!1;var t=m.items.indexOf(e[m.itemProperty]),i=t==m.activeIndex;return!i||0>t?!1:(i&&!angular.isUndefined(m.onHighlightCallback)&&e.$eval(m.onHighlightCallback),i)},m.isDisabled=function(e){if(m.open){var t,i=m.items.indexOf(e[m.itemProperty]),c=!1;return i>=0&&!angular.isUndefined(m.disableChoiceExpression)&&(t=m.items[i],c=!!e.$eval(m.disableChoiceExpression),t._uiSelectChoiceDisabled=c),c}},m.select=function(e,i,s){if(void 0===e||!e._uiSelectChoiceDisabled){if(!m.items&&!m.search&&!m.tagging.isActivated)return;if(!e||!e._uiSelectChoiceDisabled){if(m.tagging.isActivated){if(m.taggingLabel===!1)if(m.activeIndex<0){if(e=void 0!==m.tagging.fct?m.tagging.fct(m.search):m.search,!e||angular.equals(m.items[0],e))return}else e=m.items[m.activeIndex];else if(0===m.activeIndex){if(void 0===e)return;if(void 0!==m.tagging.fct&&"string"==typeof e){if(e=m.tagging.fct(e),!e)return}else"string"==typeof e&&(e=e.replace(m.taggingLabel,"").trim())}if(m.selected&&angular.isArray(m.selected)&&m.selected.filter(function(t){return angular.equals(t,e)}).length>0)return void m.close(i)}t.$broadcast("uis:select",e);var l={};l[m.parserResult.itemName]=e,c(function(){m.onSelectCallback(t,{$item:e,$model:m.parserResult.modelMapper(t,l)})}),m.closeOnSelect&&m.close(i),s&&"click"===s.type&&(m.clickTriggeredSelect=!0)}}},m.close=function(e){m.open&&(m.ngModel&&m.ngModel.$setTouched&&m.ngModel.$setTouched(),h(),m.open=!1,t.$broadcast("uis:close",e))},m.setFocus=function(){m.focus||m.focusInput[0].focus()},m.clear=function(e){m.select(void 0),e.stopPropagation(),c(function(){m.focusser[0].focus()},0,!1)},m.toggle=function(e){m.open?(m.close(),e.preventDefault(),e.stopPropagation()):m.activate()},m.isLocked=function(e,t){var i,c=m.selected[t];return c&&!angular.isUndefined(m.lockChoiceExpression)&&(i=!!e.$eval(m.lockChoiceExpression),c._uiSelectChoiceLocked=i),i};var w=null,y=!1;m.sizeSearchInput=function(){var e=m.searchInput[0],i=m.searchInput.parent().parent()[0],s=function(){return i.clientWidth*!!e.offsetParent},l=function(t){if(0===t)return!1;var i=t-e.offsetLeft-10;return 50>i&&(i=t),m.searchInput.css("width",i+"px"),!0};m.searchInput.css("width","10px"),c(function(){null!==w||l(s())||(w=t.$watch(angular.noop,function(){y||(y=!0,t.$$postDigest(function(){y=!1,l(s())&&(w(),w=null)}))}))})},m.searchInput.on("keydown",function(i){var s=i.which;~[e.ENTER,e.ESC].indexOf(s)&&(i.preventDefault(),i.stopPropagation()),t.$apply(function(){var t=!1;if((m.items.length>0||m.tagging.isActivated)&&(f(s),m.taggingTokens.isActivated)){for(var l=0;l<m.taggingTokens.tokens.length;l++)m.taggingTokens.tokens[l]===e.MAP[i.keyCode]&&m.search.length>0&&(t=!0);t&&c(function(){m.searchInput.triggerHandler("tagged");var t=m.search.replace(e.MAP[i.keyCode],"").trim();m.tagging.fct&&(t=m.tagging.fct(t)),t&&m.select(t,!0)})}}),e.isVerticalMovement(s)&&m.items.length>0&&v(),s!==e.ENTER&&s!==e.ESC||(i.preventDefault(),i.stopPropagation())}),m.searchInput.on("paste",function(t){var i;if(i=window.clipboardData&&window.clipboardData.getData?window.clipboardData.getData("Text"):(t.originalEvent||t).clipboardData.getData("text/plain"),i=m.search+i,i&&i.length>0)if(m.taggingTokens.isActivated){for(var c=[],s=0;s<m.taggingTokens.tokens.length;s++){var l=e.toSeparator(m.taggingTokens.tokens[s])||m.taggingTokens.tokens[s];if(i.indexOf(l)>-1){c=i.split(l);break}}if(0===c.length&&(c=[i]),c.length>0){var n=m.search;angular.forEach(c,function(e){var t=m.tagging.fct?m.tagging.fct(e):e;t&&m.select(t,!0)}),m.search=n||$,t.preventDefault(),t.stopPropagation()}}else m.paste&&(m.paste(i),m.search=$,t.preventDefault(),t.stopPropagation())}),m.searchInput.on("tagged",function(){c(function(){h()})});var x=l(function(){m.sizeSearchInput()},50);angular.element(d).bind("resize",x),t.$on("$destroy",function(){m.searchInput.off("keyup keydown tagged blur paste"),angular.element(d).off("resize",x)})}]),i.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,i,c,s,l,n){return{restrict:"EA",templateUrl:function(e,i){var c=i.theme||t.theme;return c+(angular.isDefined(i.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(s,a){var r=/{(.*)}\s*{(.*)}/.exec(a.ngClass);if(r){var o="{"+r[1]+", "+r[2]+"}";a.ngClass=o,s.attr("ng-class",o)}return angular.isDefined(a.multiple)?s.append("<ui-select-multiple/>").removeAttr("multiple"):s.append("<ui-select-single/>"),a.inputId&&(s.querySelectorAll("input.ui-select-search")[0].id=a.inputId),function(s,a,r,o,u){function d(e){if(g.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!g.clickTriggeredSelect){var i;if(g.skipFocusser)i=!0;else{var c=["input","button","textarea","select"],l=angular.element(e.target).controller("uiSelect");i=l&&l!==g,i||(i=~c.indexOf(e.target.tagName.toLowerCase()))}g.close(i),s.$digest()}g.clickTriggeredSelect=!1}}function p(){var t=c(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function h(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$,g.setFocus())}var g=o[0],f=o[1];g.generatedId=t.generateId(),g.baseTitle=r.title||"Select box",g.focusserTitle=g.baseTitle+" focus",g.focusserId="focusser-"+g.generatedId,g.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?l(r.closeOnSelect)():t.closeOnSelect}(),s.$watch("skipFocusser",function(){var e=s.$eval(r.skipFocusser);g.skipFocusser=void 0!==e?e:t.skipFocusser}),g.onSelectCallback=l(r.onSelect),g.onRemoveCallback=l(r.onRemove),g.limit=angular.isDefined(r.limit)?parseInt(r.limit,10):void 0,g.ngModel=f,g.choiceGrouped=function(e){return g.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){g.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),s.$watch("searchEnabled",function(){var e=s.$eval(r.searchEnabled);g.searchEnabled=void 0!==e?e:t.searchEnabled}),s.$watch("sortable",function(){var e=s.$eval(r.sortable);g.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){g.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=s.$eval(r.resetSearchInput);g.resetSearchInput=void 0!==e?e:!0}),r.$observe("paste",function(){g.paste=s.$eval(r.paste)}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=s.$eval(r.tagging);g.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else g.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&("false"===r.taggingLabel?g.taggingLabel=!1:g.taggingLabel=void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];g.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){g.setFocus()}),angular.isDefined(r.focusOn)&&s.$on(r.focusOn,function(){n(function(){g.setFocus()})}),e.on("click",d),s.$on("$destroy",function(){e.off("click",d)}),u(s,function(e){var t=angular.element("<div>").append(e),c=t.querySelectorAll(".ui-select-match");if(c.removeAttr("ui-select-match"),c.removeAttr("data-ui-select-match"),1!==c.length)throw i("transcluded","Expected 1 .ui-select-match but got '{0}'.",c.length);a.querySelectorAll(".ui-select-match").replaceWith(c);var s=t.querySelectorAll(".ui-select-choices");if(s.removeAttr("ui-select-choices"),s.removeAttr("data-ui-select-choices"),1!==s.length)throw i("transcluded","Expected 1 .ui-select-choices but got '{0}'.",s.length);a.querySelectorAll(".ui-select-choices").replaceWith(s);var l=t.querySelectorAll(".ui-select-no-choice");l.removeAttr("ui-select-no-choice"),l.removeAttr("data-ui-select-no-choice"),1==l.length&&a.querySelectorAll(".ui-select-no-choice").replaceWith(l)});var v=s.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(s.$watch("$select.open",function(e){e?p():h()}),s.$on("$destroy",function(){h()}));var m=null,$="",b=null,w="direction-up";s.$watch("$select.open",function(){"auto"!==g.dropdownPosition&&"up"!==g.dropdownPosition||s.calculateDropdownPos()});var y=function(e,t){e=e||c(a),t=t||c(b),b[0].style.position="absolute",b[0].style.top=-1*t.height+"px",a.addClass(w)},x=function(e,t){a.removeClass(w),e=e||c(a),t=t||c(b),b[0].style.position="",b[0].style.top=""};s.calculateDropdownPos=function(){if(g.open){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),0===b.length)return;b[0].style.opacity=0,n(function(){if("up"===g.dropdownPosition)y();else{a.removeClass(w);var t=c(a),i=c(b),s=e[0].documentElement.scrollTop||e[0].body.scrollTop;t.top+t.height+i.height>s+e[0].documentElement.clientHeight?y(t,i):x(t,i)}b[0].style.opacity=1})}else{if(null===b||0===b.length)return;b[0].style.position="",b[0].style.top="",a.removeClass(w)}}}}}}]),i.directive("uiSelectMatch",["uiSelectConfig",function(e){function t(e,t){return e[0].hasAttribute(t)?e.attr(t):e[0].hasAttribute("data-"+t)?e.attr("data-"+t):e[0].hasAttribute("x-"+t)?e.attr("x-"+t):void 0}return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(i){i.addClass("ui-select-match");var c=i.parent(),s=t(c,"theme")||e.theme,l=angular.isDefined(t(c,"multiple"));return s+(l?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,i,c,s){function l(e){s.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}s.lockChoiceExpression=c.uiLockChoice,c.$observe("placeholder",function(t){s.placeholder=void 0!==t?t:e.placeholder}),c.$observe("allowClear",l),l(c.allowClear),s.multiple&&s.sizeSearchInput()}}}]),i.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,i){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var i,c=this,s=e.$select;angular.isUndefined(s.selected)&&(s.selected=[]),e.$evalAsync(function(){i=e.ngModel}),c.activeMatchIndex=-1,c.updateModel=function(){i.$setViewValue(Date.now()),c.refreshComponent()},c.refreshComponent=function(){s.refreshItems(),s.sizeSearchInput()},c.removeChoice=function(i){var l=s.selected[i];if(!l._uiSelectChoiceLocked){var n={};n[s.parserResult.itemName]=l,s.selected.splice(i,1),c.activeMatchIndex=-1,s.sizeSearchInput(),t(function(){s.onRemoveCallback(e,{$item:l,$model:s.parserResult.modelMapper(e,n)})}),c.updateModel()}},c.getPlaceholder=function(){return s.selected&&s.selected.length?void 0:s.placeholder}}],controllerAs:"$selectMultiple",link:function(c,s,l,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function i(){switch(t){case e.LEFT:return~h.activeMatchIndex?u:n;case e.RIGHT:return~h.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~h.activeMatchIndex?(h.removeChoice(r),u):n;case e.DELETE:return~h.activeMatchIndex?(h.removeChoice(h.activeMatchIndex),r):!1}}var c=a(d.searchInput[0]),s=d.selected.length,l=0,n=s-1,r=h.activeMatchIndex,o=h.activeMatchIndex+1,u=h.activeMatchIndex-1,p=r;return c>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=i(),d.selected.length&&p!==!1?h.activeMatchIndex=Math.min(n,Math.max(l,p)):h.activeMatchIndex=-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var i=-1;if(angular.isArray(e))for(var c=angular.copy(e),s=0;s<c.length;s++)if(void 0===d.tagging.fct)c[s]+" "+d.taggingLabel===t&&(i=s);else{var l=c[s];angular.isObject(l)&&(l.isTag=!0),angular.equals(l,t)&&(i=s)}return i}var d=n[0],p=c.ngModel=n[1],h=c.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$isEmpty=function(e){return!e||0===e.length},p.$parsers.unshift(function(){for(var e,t={},i=[],s=d.selected.length-1;s>=0;s--)t={},t[d.parserResult.itemName]=d.selected[s],e=d.parserResult.modelMapper(c,t),i.unshift(e);return i}),p.$formatters.unshift(function(e){var t,i=d.parserResult&&d.parserResult.source(c,{$select:{search:""}}),s={};if(!i)return e;var l=[],n=function(e,i){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(s[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(c,s),d.parserResult.trackByExp){var a=/(\w*)\./.exec(d.parserResult.trackByExp),r=/\.([^\s]+)/.exec(d.parserResult.trackByExp);if(a&&a.length>0&&a[1]==d.parserResult.itemName&&r&&r.length>0&&t[r[1]]==i[r[1]])return l.unshift(e[n]),!0}if(angular.equals(t,i))return l.unshift(e[n]),!0}return!1}};if(!e)return l;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(i,e[a])||l.unshift(e[a]);return l}),c.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(angular.isDefined(p.$modelValue)&&(p.$modelValue=null),h.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,h.refreshComponent(),c.$evalAsync()},c.$on("uis:select",function(e,t){d.selected.length>=d.limit||(d.selected.push(t),h.updateModel())}),c.$on("uis:activate",function(){h.activeMatchIndex=-1}),c.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var i=t.which;c.$apply(function(){var c=!1;e.isHorizontalMovement(i)&&(c=r(i)),c&&i!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||c.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var i,s,l,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,h=-1;if(void 0!==d.tagging.fct){if(l=d.$filter("filter")(a,{isTag:!0}),l.length>0&&(n=l[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),i=d.tagging.fct(d.search),r.some(function(e){return angular.equals(e,i)})||d.selected.some(function(e){return angular.equals(e,i)}))return void c.$evalAsync(function(){d.activeIndex=0,d.items=a});i&&(i.isTag=!0)}else{if(l=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),l.length>0&&(n=l[0]),s=a[0],void 0!==s&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),i=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return void(p&&(a=r,c.$evalAsync(function(){d.activeIndex=0,d.items=a})));if(o(r))return void(p&&(d.items=r.slice(1,r.length)))}p&&(h=u(d.selected,i)),h>-1?a=a.slice(h+1,a.length-1):(a=[],i&&a.push(i),a=a.concat(r)),c.$evalAsync(function(){if(d.activeIndex=0,d.items=a,d.isGrouped){var e=i?a.slice(1):a;d.setItemsFn(e),i&&(d.items.unshift(i),d.groups.unshift({name:"",items:[i],tagging:!0}))}})}}),d.searchInput.on("blur",function(){i(function(){h.activeMatchIndex=-1})})}}}]),i.directive("uiSelectNoChoice",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var i=t.parent().attr("theme")||e.theme;return i+"/no-choice.tpl.html"}}}]),i.directive("uiSelectSingle",["$timeout","$compile",function(t,i){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(c,s,l,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,i={};return i[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(c,i)}),r.$formatters.unshift(function(e){var t,i=a.parserResult&&a.parserResult.source(c,{$select:{search:""}}),s={};if(i){var l=function(i){return s[a.parserResult.itemName]=i,t=a.parserResult.modelMapper(c,s),t===e};if(a.selected&&l(a.selected))return a.selected;for(var n=i.length-1;n>=0;n--)if(l(i[n]))return i[n]}return e}),c.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},c.$on("uis:select",function(e,t){a.selected=t}),c.$on("uis:close",function(e,i){t(function(){a.focusser.prop("disabled",!1),i||a.focusser[0].focus()},0,!1)}),c.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");i(o)(c),a.focusser=o,a.focusInput=o,s.parent().append(o),o.bind("focus",function(){c.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){c.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),void c.$apply()):void(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||(t.which!=e.DOWN&&t.which!=e.UP&&t.which!=e.ENTER&&t.which!=e.SPACE||(t.preventDefault(),t.stopPropagation(),a.activate()),c.$digest()))}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),c.$digest())})}}}]),i.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,i){return{require:["^^uiSelect","^ngModel"],link:function(t,c,s,l){if(null===t[s.uiSelectSort])throw i("sort","Expected a list to sort");var n=l[0],a=l[1],r=angular.extend({axis:"horizontal"},t.$eval(s.uiSelectSortOptions)),o=r.axis,u="dragging",d="dropping",p="dropping-before",h="dropping-after";t.$watch(function(){return n.sortable},function(e){e?c.attr("draggable",!0):c.removeAttr("draggable")}),c.on("dragstart",function(e){c.addClass(u),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text",t.$index.toString())}),c.on("dragend",function(){v(u)});var g,f=function(e,t){this.splice(t,0,this.splice(e,1)[0])},v=function(e){angular.forEach(n.$element.querySelectorAll("."+e),function(t){angular.element(t).removeClass(e)})},m=function(e){e.preventDefault();var t="vertical"===o?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===o?"offsetHeight":"offsetWidth"]/2?(v(h),c.addClass(p)):(v(p),c.addClass(h))},$=function(t){t.preventDefault();var i=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text"),10);e.cancel(g),g=e(function(){b(i)},20)},b=function(e){var i=t.$eval(s.uiSelectSort),l=i[e],n=null;n=c.hasClass(p)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,f.apply(i,[e,n]),a.$setViewValue(Date.now()),t.$apply(function(){t.$emit("uiSelectSort:change",{array:i,item:l,from:e,to:n})}),v(d),v(p),v(h),c.off("drop",$)};c.on("dragenter",function(){c.hasClass(u)||(c.addClass(d),c.on("dragover",m),c.on("drop",$))}),c.on("dragleave",function(e){e.target==c&&(v(d),v(p),v(h),c.off("dragover",m),c.off("drop",$))})}}}]),i.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var i=this;i.parse=function(i){var c;if(c=i.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),!c)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",i);var s=c[5],l="";if(c[3]){s=c[5].replace(/(^\()|(\)$)/g,"");var n=c[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);n&&n[1].trim()&&(l=n[1],s=s.replace(l,""))}return{itemName:c[4]||c[2],keyName:c[3],source:t(s),filters:l,trackByExp:c[6],modelMapper:t(c[1]||c[4]||c[2]),repeatExpression:function(e){var t=this.itemName+" in "+(e?"$group.items":"$select.items");return this.trackByExp&&(t+=" track by "+this.trackByExp),t}}},i.getGroupNgRepeatExpression=function(){return"$group in $select.groups"}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.open && $select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open && $select.searchEnabled" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),
e.put("bootstrap/no-choice.tpl.html",'<ul class="ui-select-no-choice dropdown-menu" ng-show="$select.items.length == 0"><li ng-transclude=""></li></ul>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'),e.put("select2/choices.tpl.html",'<ul tabindex="-1" class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open || $select.items.length === 0}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="$select.searchEnabled && ($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')}]);
//# sourceMappingURL=select.min.js.map

'use strict';

/**
 * Permits declarative (and dynamic) definitions of tab links with full routes.
 *
 * requires 'ui.router' and 'ui.bootstrap'
 * (uses tabset and tab directives in ui.bootstrap and route changes in ui.router)
 *
 * You can define (for styling) the attributes type="pills" and vertical="true | false" and justified="true | false"
 * You can also specify arbitrary CSS classes to be added to each tab by providing them as values with the "class" parameter
 * (for the 'tabs' or 'tab' elements, and the 'template-url' for custom tab rendering.
 *
 * Watches the $stateChangeXX events so it can update the parent tab(s) when using $state.go or ui-sref anchors.
 *
 * See ui-router-tabs.spec.js for tests.
 *
 * Author: Robert Pocklington (rpocklin@gmail.com)
 * License: MIT
 *
 */

/* Common.js package manager support (e.g. ComponentJS, WebPack) */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'ui.router.tabs';
}

angular.module('ui.router.tabs', ['ngSanitize']);
angular.module('ui.router.tabs').directive(
    'tabs', ['$rootScope', '$state', function($rootScope, $state) {

      return {
        restrict: 'E',
        scope: {
          tabs: '=data',
          type: '@',
          justified: '@',
          vertical: '@',
          class: '@'
        },
        link: function(scope) {

          var updateTabs = function() {
            scope.update_tabs();
          };

          var unbindStateChangeSuccess = $rootScope.$on('$stateChangeSuccess', updateTabs);
          var unbindStateChangeError = $rootScope.$on('$stateChangeError', updateTabs);
          var unbindStateChangeCancel = $rootScope.$on('$stateChangeCancel', updateTabs);
          var unbindStateNotFound = $rootScope.$on('$stateNotFound', updateTabs);

          scope.$on('$destroy', unbindStateChangeSuccess);
          scope.$on('$destroy', unbindStateChangeError);
          scope.$on('$destroy', unbindStateChangeCancel);
          scope.$on('$destroy', unbindStateNotFound);
        },
        controller: ['$scope', function($scope) {

          if (!$scope.tabs) {
            throw new Error('UI Router Tabs: \'data\' attribute not defined, please check documentation for how to use this directive.');
          }

          if (!angular.isArray($scope.tabs)) {
            throw new Error('UI Router Tabs: \'data\' attribute must be an array of tab data with at least one tab defined.');
          }

          var currentStateEqualTo = function(tab) {

            var isEqual = $state.is(tab.route, tab.params, tab.options);
            return isEqual;
          };

          $scope.go = function(tab) {

            if (!currentStateEqualTo(tab) && !tab.disable) {
              $state.go(tab.route, tab.params, tab.options);
            }
          };

          /* whether to highlight given route as part of the current state */
          $scope.is_active = function(tab) {

            var isAncestorOfCurrentRoute = $state.includes(tab.route, tab.params, tab.options);
            return isAncestorOfCurrentRoute;
          };

          $scope.update_tabs = function() {

            // sets which tab is active (used for highlighting)
            angular.forEach($scope.tabs, function(tab, index) {
              tab.params = tab.params || {};
              tab.options = tab.options || {};
              tab.class = tab.class || '';

              tab.active = $scope.is_active(tab);
              if (tab.active) {
                $scope.tabs.active = index;
              }
            });
          };

          $scope.update_tabs();
        }],
        templateUrl: function(element, attributes) {
          return attributes.templateUrl || 'ui-router-tabs-default-template.html';
        }
      };
    }]
).run(
    ['$templateCache', function($templateCache) {
      var CUSTOM_UI_VIEW_TEMPLATE = '<div>' +
          '<uib-tabset active="tabs.active" class="tab-container" type="{{type}}" vertical="{{vertical}}" justified="{{justified}}" class="{{class}}">' +
          '<uib-tab class="tab {{tab.class}}" ng-repeat="tab in tabs" ' +
          'disable="tab.disable" ng-click="go(tab)">' +
          '<uib-tab-heading ng-bind-html="tab.heading"></uib-tab-heading>' +
          '</uib-tab>' +
          '</uib-tabset>' +
          '</div>';

      var INLINE_TEMPLATE = '<div>' +
          '<uib-tabset active="tabs.active" class="tab-container" type="{{type}}" vertical="{{vertical}}" justified="{{justified}}" class="{{class}}">' +
          '<uib-tab class="tab {{tab.class}}" ng-repeat="tab in tabs" ' +
          'disable="tab.disable" ng-click="go(tab)">' +
          '<uib-tab-heading ng-bind-html="tab.heading"></uib-tab-heading>' +
          '</uib-tab>' +
          '</uib-tabset>' +
          '<ui-view></ui-view>' +
          '</div>';

      $templateCache.put('ui-router-tabs-custom-ui-view-template.html', CUSTOM_UI_VIEW_TEMPLATE);
      $templateCache.put('ui-router-tabs-default-template.html', INLINE_TEMPLATE);
    }]
);
//
//! MarkdownDeep - http://www.toptensoftware.com/markdowndeep
//! Copyright (C) 2010-2011 Topten Software
//
//   Licensed under the Apache License, Version 2.0 (the "License"); you may not use this product except in
//   compliance with the License. You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software distributed under the License is
//   distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and limitations under the License.
//


/////////////////////////////////////////////////////////////////////////////
// Markdown

var MarkdownDeep = new function () {


    function array_indexOf(array, obj) {
        if (array.indexOf !== undefined)
            return array.indexOf(obj);

        for (var i = 0; i < array.length; i++) {
            if (array[i] === obj)
                return i;
        }

        return -1;
    };

    // private:p.
    // private:.m_*

    function Markdown() {
        this.m_SpanFormatter = new SpanFormatter(this);
        this.m_SpareBlocks = [];
        this.m_StringBuilder = new StringBuilder();
        this.m_StringBuilderFinal = new StringBuilder();
    }

    Markdown.prototype =
    {
        SafeMode: false,
        ExtraMode: false,
        MarkdownInHtml: false,
        AutoHeadingIDs: false,
        UrlBaseLocation: null,
        UrlRootLocation: null,
        NewWindowForExternalLinks: false,
        NewWindowForLocalLinks: false,
        NoFollowLinks: false,
        HtmlClassFootnotes: "footnotes",
        HtmlClassTitledImages: null,
        RenderingTitledImage: false,
        FormatCodeBlockAttributes: null,
        FormatCodeBlock: null,
        ExtractHeadBlocks: false,
        HeadBlockContent: ""
    };

    var p = Markdown.prototype;

    function splice_array(dest, position, del, ins) {
        return dest.slice(0, position).concat(ins).concat(dest.slice(position + del));
    }

    Markdown.prototype.GetListItems = function (input, offset) {
        // Parse content into blocks
        var blocks = this.ProcessBlocks(input);


        // Find the block
        var i;
        for (i = 0; i < blocks.length; i++) {
            var b = blocks[i];

            if ((b.blockType == BlockType_Composite || b.blockType == BlockType_html || b.blockType == BlockType_HtmlTag) && b.children) {
                blocks = splice_array(blocks, i, 1, b.children);
                i--;
                continue;
            }

            if (offset < b.lineStart) {
                break;
            }
        }

        i--;

        // Quit if at top
        if (i < 0)
            return null;

        // Get the block before
        var block = blocks[i];

        // Check if it's a list
        if (block.blockType != BlockType_ul && block.blockType != BlockType_ol)
            return null;

        // Build list of line offsets
        var list = [];
        var items = block.children;
        for (var j = 0; j < items.length; j++) {
            list.push(items[j].lineStart);
        }

        // Also push the line offset of the following block
        i++;
        if (i < blocks.length) {
            list.push(blocks[i].lineStart);
        }
        else {
            list.push(input.length);
        }

        return list;
    }

    // Main entry point
    Markdown.prototype.Transform = function (input) {
        // Normalize line ends
        var rpos = input.indexOf("\r");
        if (rpos >= 0) {
            var npos = input.indexOf("\n");
            if (npos >= 0) {
                if (npos < rpos) {
                    input = input.replace(/\n\r/g, "\n");
                }
                else {
                    input = input.replace(/\r\n/g, "\n");
                }
            }

            input = input.replace(/\r/g, "\n");
        }

        this.HeadBlockContent = "";

        var blocks = this.ProcessBlocks(input);

        // Sort abbreviations by length, longest to shortest
        if (this.m_Abbreviations != null) {
            var list = [];
            for (var a in this.m_Abbreviations) {
                list.push(this.m_Abbreviations[a]);
            }
            list.sort(
                function (a, b) {
                    return b.Abbr.length - a.Abbr.length;
                }
            );
            this.m_Abbreviations = list;
        }

        // Render
        var sb = this.m_StringBuilderFinal;
        sb.Clear();
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            b.Render(this, sb);
        }

        // Render footnotes
        if (this.m_UsedFootnotes.length > 0) {

            sb.Append("\n<div class=\"");
            sb.Append(this.HtmlClassFootnotes);
            sb.Append("\">\n");
            sb.Append("<hr />\n");
            sb.Append("<ol>\n");
            for (var i = 0; i < this.m_UsedFootnotes.length; i++) {
                var fn = this.m_UsedFootnotes[i];

                sb.Append("<li id=\"#fn:");
                sb.Append(fn.data); // footnote id
                sb.Append("\">\n");


                // We need to get the return link appended to the last paragraph
                // in the footnote
                var strReturnLink = "<a href=\"#fnref:" + fn.data + "\" rev=\"footnote\">&#8617;</a>";

                // Get the last child of the footnote
                var child = fn.children[fn.children.length - 1];
                if (child.blockType == BlockType_p) {
                    child.blockType = BlockType_p_footnote;
                    child.data = strReturnLink;
                }
                else {
                    child = new Block();
                    child.contentLen = 0;
                    child.blockType = BlockType_p_footnote;
                    child.data = strReturnLink;
                    fn.children.push(child);
                }


                fn.Render(this, sb);

                sb.Append("</li>\n");
            }
            sb.Append("</ol\n");
            sb.Append("</div>\n");
        }


        // Done
        return sb.ToString();
    }

    Markdown.prototype.OnQualifyUrl = function (url) {
        // Is the url already fully qualified?
        if (IsUrlFullyQualified(url))
            return url;

        if (starts_with(url, "/")) {
            var rootLocation = this.UrlRootLocation;
            if (!rootLocation) {
                // Quit if we don't have a base location
                if (!this.UrlBaseLocation)
                    return url;

                // Need to find domain root
                var pos = this.UrlBaseLocation.indexOf("://");
                if (pos == -1)
                    pos = 0;
                else
                    pos += 3;

                // Find the first slash after the protocol separator
                pos = this.UrlBaseLocation.indexOf('/', pos);

                // Get the domain name
                rootLocation = pos < 0 ? this.UrlBaseLocation : this.UrlBaseLocation.substr(0, pos);
            }

            // Join em
            return rootLocation + url;
        }
        else {
            // Quit if we don't have a base location
            if (!this.UrlBaseLocation)
                return url;

            if (!ends_with(this.UrlBaseLocation, "/"))
                return this.UrlBaseLocation + "/" + url;
            else
                return this.UrlBaseLocation + url;
        }
    }


    // Override and return an object with width and height properties
    Markdown.prototype.OnGetImageSize = function (image, TitledImage) {
        return null;
    }

    Markdown.prototype.OnPrepareLink = function (tag) {
        var url = tag.attributes["href"];

        // No follow?
        if (this.NoFollowLinks) {
            tag.attributes["rel"] = "nofollow";
        }

        // New window?
        if ((this.NewWindowForExternalLinks && IsUrlFullyQualified(url)) ||
            (this.NewWindowForLocalLinks && !IsUrlFullyQualified(url))) {
            tag.attributes["target"] = "_blank";
        }

        // Qualify url
        tag.attributes["href"] = this.OnQualifyUrl(url);
    }

    Markdown.prototype.OnPrepareImage = function (tag, TitledImage) {
        // Try to determine width and height
        var size = this.OnGetImageSize(tag.attributes["src"], TitledImage);
        if (size != null) {
            tag.attributes["width"] = size.width;
            tag.attributes["height"] = size.height;
        }

        // Now qualify the url
        tag.attributes["src"] = this.OnQualifyUrl(tag.attributes["src"]);
    }

    // Get a link definition
    Markdown.prototype.GetLinkDefinition = function (id) {
        var x = this.m_LinkDefinitions[id];
        if (x == undefined)
            return null;
        else
            return x;
    }



    p.ProcessBlocks = function (str) {
        // Reset the list of link definitions
        this.m_LinkDefinitions = [];
        this.m_Footnotes = [];
        this.m_UsedFootnotes = [];
        this.m_UsedHeaderIDs = [];
        this.m_Abbreviations = null;

        // Process blocks
        return new BlockProcessor(this, this.MarkdownInHtml).Process(str);
    }

    // Add a link definition
    p.AddLinkDefinition = function (link) {
        this.m_LinkDefinitions[link.id] = link;
    }

    p.AddFootnote = function (footnote) {
        this.m_Footnotes[footnote.data] = footnote;
    }

    // Look up a footnote, claim it and return it's index (or -1 if not found)
    p.ClaimFootnote = function (id) {
        var footnote = this.m_Footnotes[id];
        if (footnote != undefined) {
            // Move the foot note to the used footnote list
            this.m_UsedFootnotes.push(footnote);
            delete this.m_Footnotes[id];

            // Return it's display index
            return this.m_UsedFootnotes.length - 1;
        }
        else
            return -1;
    }

    p.AddAbbreviation = function (abbr, title) {
        if (this.m_Abbreviations == null) {
            this.m_Abbreviations = [];
        }

        // Store abbreviation
        this.m_Abbreviations[abbr] = { Abbr: abbr, Title: title };
    }

    p.GetAbbreviations = function () {
        return this.m_Abbreviations;
    }




    // private
    p.MakeUniqueHeaderID = function (strHeaderText, startOffset, length) {
        if (!this.AutoHeadingIDs)
            return null;

        // Extract a pandoc style cleaned header id from the header text
        var strBase = this.m_SpanFormatter.MakeID(strHeaderText, startOffset, length);

        // If nothing left, use "section"
        if (!strBase)
            strBase = "section";

        // Make sure it's unique by append -n counter
        var strWithSuffix = strBase;
        var counter = 1;
        while (this.m_UsedHeaderIDs[strWithSuffix] != undefined) {
            strWithSuffix = strBase + "-" + counter.toString();
            counter++;
        }

        // Store it
        this.m_UsedHeaderIDs[strWithSuffix] = true;

        // Return it
        return strWithSuffix;
    }


    // private
    p.GetStringBuilder = function () {
        this.m_StringBuilder.Clear();
        return this.m_StringBuilder;
    }

    /////////////////////////////////////////////////////////////////////////////
    // CharTypes

    function is_digit(ch) {
        return ch >= '0' && ch <= '9';
    }
    function is_hex(ch) {
        return (ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'f') || (ch >= 'A' && ch <= 'F');
    }
    function is_alpha(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    function is_alphadigit(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9');
    }
    function is_whitespace(ch) {
        return (ch == ' ' || ch == '\t' || ch == '\r' || ch == '\n');
    }
    function is_linespace(ch) {
        return (ch == ' ' || ch == '\t');
    }
    function is_lineend(ch) {
        return (ch == '\r' || ch == '\n');
    }
    function is_emphasis(ch) {
        return (ch == '*' || ch == '_');
    }
    function is_escapable(ch, ExtraMode) {
        switch (ch) {
            case '\\':
            case '`':
            case '*':
            case '_':
            case '{':
            case '}':
            case '[':
            case ']':
            case '(':
            case ')':
            case '>':
            case '#':
            case '+':
            case '-':
            case '.':
            case '!':
                return true;

            case ':':
            case '|':
            case '=':
            case '<':
                return ExtraMode;
        }

        return false;
    }


    // Utility functions

    // Check if str[pos] looks like a html entity
    // Returns -1 if not, or offset of character after it yes.
    function SkipHtmlEntity(str, pos) {
        if (str.charAt(pos) != '&')
            return -1;

        var save = pos;
        pos++;

        var fn_test;
        if (str.charAt(pos) == '#') {
            pos++;
            if (str.charAt(pos) == 'x' || str.charAt(pos) == 'X') {
                pos++;
                fn_test = is_hex;
            }
            else {
                fn_test = is_digit;
            }
        }
        else {
            fn_test = is_alphadigit;
        }

        if (fn_test(str.charAt(pos))) {
            pos++;
            while (fn_test(str.charAt(pos)))
                pos++;

            if (str.charAt(pos) == ';') {
                pos++;
                return pos;
            }
        }

        pos = save;
        return -1;
    }

    function UnescapeString(str, ExtraMode) {
        // Find first backslash
        var bspos = str.indexOf('\\');
        if (bspos < 0)
            return str;

        // Build new string with escapable backslashes removed
        var b = new StringBuilder();
        var piece = 0;
        while (bspos >= 0) {
            if (is_escapable(str.charAt(bspos + 1), ExtraMode)) {
                if (bspos > piece)
                    b.Append(str.substr(piece, bspos - piece));

                piece = bspos + 1;
            }

            bspos = str.indexOf('\\', bspos + 1);
        }

        if (piece < str.length)
            b.Append(str.substr(piece, str.length - piece));

        return b.ToString();
    }

    function Trim(str) {
        var i = 0;
        var l = str.length;

        while (i < l && is_whitespace(str.charAt(i)))
            i++;
        while (l - 1 > i && is_whitespace(str.charAt(l - 1)))
            l--;

        return str.substr(i, l - i);
    }


    /*
     * These two functions IsEmailAddress and IsWebAddress
     * are intended as a quick and dirty way to tell if a
     * <autolink> url is email, web address or neither.
     *
     * They are not intended as validating checks.
     *
     * (use of Regex for more correct test unnecessarily
     *  slowed down some test documents by up to 300%.)
     */

    // Check if a string looks like an email address
    function IsEmailAddress(str) {
        var posAt = str.indexOf('@');
        if (posAt < 0)
            return false;

        var posLastDot = str.lastIndexOf('.');
        if (posLastDot < posAt)
            return false;

        return true;
    }

    // Check if a string looks like a url
    function IsWebAddress(str) {
        str = str.toLowerCase();
        if (str.substr(0, 7) == "http://")
            return true;
        if (str.substr(0, 8) == "https://")
            return true;
        if (str.substr(0, 6) == "ftp://")
            return true;
        if (str.substr(0, 7) == "file://")
            return true;

        return false;
    }


    // Check if a string is a valid HTML ID identifier
    function IsValidHtmlID(str) {
        if (!str)
            return false;

        // Must start with a letter
        if (!is_alpha(str.charAt(0)))
            return false;

        // Check the rest
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (is_alphadigit(ch) || ch == '_' || ch == '-' || ch == ':' || ch == '.')
                continue;

            return false;
        }

        // OK
        return true;
    }

    // Strip the trailing HTML ID from a header string
    // ie:      ## header text ##			{#<idhere>}
    //			^start           ^out end              ^end
    //
    // Returns null if no header id
    function StripHtmlID(str, start, end) {
        // Skip trailing whitespace
        var pos = end - 1;
        while (pos >= start && is_whitespace(str.charAt(pos))) {
            pos--;
        }

        // Skip closing '{'
        if (pos < start || str.charAt(pos) != '}')
            return null;

        var endId = pos;
        pos--;

        // Find the opening '{'
        while (pos >= start && str.charAt(pos) != '{')
            pos--;

        // Check for the #
        if (pos < start || str.charAt(pos + 1) != '#')
            return null;

        // Extract and check the ID
        var startId = pos + 2;
        var strID = str.substr(startId, endId - startId);
        if (!IsValidHtmlID(strID))
            return null;

        // Skip any preceeding whitespace
        while (pos > start && is_whitespace(str.charAt(pos - 1)))
            pos--;

        // Done!
        return { id: strID, end: pos };
    }

    function starts_with(str, match) {
        return str.substr(0, match.length) == match;
    }

    function ends_with(str, match) {
        return str.substr(-match.length) == match;
    }

    function IsUrlFullyQualified(url) {
        return url.indexOf("://") >= 0 || starts_with(url, "mailto:");
    }


    /////////////////////////////////////////////////////////////////////////////
    // StringBuilder

    function StringBuilder() {
        this.m_content = [];
    }

    p = StringBuilder.prototype;

    p.Append = function (value) {
        if (value)
            this.m_content.push(value);
    }
    p.Clear = function () {
        this.m_content.length = 0;
    }
    p.ToString = function () {
        return this.m_content.join("");
    }

    p.HtmlRandomize = function (url) {
        // Randomize
        var len = url.length;
        for (var i = 0; i < len; i++) {
            var x = Math.random();
            if (x > 0.90 && url.charAt(i) != '@') {
                this.Append(url.charAt(i));
            }
            else if (x > 0.45) {
                this.Append("&#");
                this.Append(url.charCodeAt(i).toString());
                this.Append(";");
            }
            else {
                this.Append("&#x");
                this.Append(url.charCodeAt(i).toString(16));
                this.Append(";");
            }
        }
    }

    p.HtmlEncode = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&amp;");
                    piece = i + 1;
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }

    p.SmartHtmlEncodeAmpsAndAngles = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    var after = SkipHtmlEntity(str, i);
                    if (after < 0) {
                        if (i > piece) {
                            this.Append(str.substr(piece, i - piece));
                        }
                        this.Append("&amp;");
                        piece = i + 1;
                    }
                    else {
                        i = after - 1;
                    }
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }

    p.SmartHtmlEncodeAmps = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    var after = SkipHtmlEntity(str, i);
                    if (after < 0) {
                        if (i > piece) {
                            this.Append(str.substr(piece, i - piece));
                        }
                        this.Append("&amp;");
                        piece = i + 1;
                    }
                    else {
                        i = after - 1;
                    }
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }


    p.HtmlEncodeAndConvertTabsToSpaces = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var pos = 0;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '\t':

                    if (i > piece) {
                        this.Append(str.substr(piece, i - piece));
                    }
                    piece = i + 1;

                    this.Append(' ');
                    pos++;
                    while ((pos % 4) != 0) {
                        this.Append(' ');
                        pos++;
                    }
                    pos--; 	// Compensate for the pos++ below
                    break;

                case '\r':
                case '\n':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append('\n');
                    piece = i + 1;
                    continue;

                case '&':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&amp;");
                    piece = i + 1;
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }

            pos++;
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }




    /////////////////////////////////////////////////////////////////////////////
    // StringScanner

    function StringScanner() {
        this.reset.apply(this, arguments);
    }

    p = StringScanner.prototype;
    p.bof = function () {
        return this.m_position == this.start;
    }

    p.eof = function () {
        return this.m_position >= this.end;
    }

    p.eol = function () {
        if (this.m_position >= this.end)
            return true;
        var ch = this.buf.charAt(this.m_position);
        return ch == '\r' || ch == '\n' || ch == undefined || ch == '';
    }

    p.reset = function (/*string, position, length*/) {
        this.buf = arguments.length > 0 ? arguments[0] : null;
        this.start = arguments.length > 1 ? arguments[1] : 0;
        this.end = arguments.length > 2 ? this.start + arguments[2] : (this.buf == null ? 0 : this.buf.length);
        this.m_position = this.start;
        this.charset_offsets = {};
    }

    p.current = function () {
        if (this.m_position >= this.end)
            return "\0";
        return this.buf.charAt(this.m_position);
    }

    p.remainder = function () {
        return this.buf.substr(this.m_position);
    }

    p.SkipToEof = function () {
        this.m_position = this.end;
    }

    p.SkipForward = function (count) {
        this.m_position += count;
    }

    p.SkipToEol = function () {
        this.m_position = this.buf.indexOf('\n', this.m_position);
        if (this.m_position < 0)
            this.m_position = this.end;
    }

    p.SkipEol = function () {
        var save = this.m_position;
        if (this.buf.charAt(this.m_position) == '\r')
            this.m_position++;
        if (this.buf.charAt(this.m_position) == '\n')
            this.m_position++;
        return this.m_position != save;
    }

    p.SkipToNextLine = function () {
        this.SkipToEol();
        this.SkipEol();
    }

    p.CharAtOffset = function (offset) {
        if (this.m_position + offset >= this.end)
            return "\0";
        return this.buf.charAt(this.m_position + offset);
    }

    p.SkipChar = function (ch) {
        if (this.buf.charAt(this.m_position) == ch) {
            this.m_position++;
            return true;
        }
        return false;
    }
    p.SkipString = function (s) {
        if (this.buf.substr(this.m_position, s.length) == s) {
            this.m_position += s.length;
            return true;
        }
        return false;
    }
    p.SkipWhitespace = function () {
        var save = this.m_position;
        while (true) {
            var ch = this.buf.charAt(this.m_position);
            if (ch != ' ' && ch != '\t' && ch != '\r' && ch != '\n')
                break;
            this.m_position++;
        }
        return this.m_position != save;
    }
    p.SkipLinespace = function () {
        var save = this.m_position;
        while (true) {
            var ch = this.buf.charAt(this.m_position);
            if (ch != ' ' && ch != '\t')
                break;
            this.m_position++;
        }
        return this.m_position != save;
    }
    p.FindRE = function (re) {
        re.lastIndex = this.m_position;
        var result = re.exec(this.buf);
        if (result == null) {
            this.m_position = this.end;
            return false;
        }

        if (result.index + result[0].length > this.end) {
            this.m_position = this.end;
            return false;
        }

        this.m_position = result.index;
        return true;
    }
    p.FindOneOf = function (charset) {
        var next = -1;
        for (var ch in charset) {
            var charset_info = charset[ch];

            // Setup charset_info for this character
            if (charset_info == null) {
                charset_info = {};
                charset_info.m_searched_from = -1;
                charset_info.m_found_at = -1;
                charset[ch] = charset_info;
            }

            // Search again?
            if (charset_info.m_searched_from == -1 ||
                this.m_position < charset_info.m_searched_from ||
                (this.m_position >= charset_info.m_found_at && charset_info.m_found_at != -1)) {
                charset_info.m_searched_from = this.m_position;
                charset_info.m_found_at = this.buf.indexOf(ch, this.m_position);
            }

            // Is this character next?
            if (next == -1 || charset_info.m_found_at < next) {
                next = charset_info.m_found_at;
            }

        }

        if (next == -1) {
            next = this.end;
            return false;
        }

        p.m_position = next;
        return true;
    }
    p.Find = function (s) {
        this.m_position = this.buf.indexOf(s, this.m_position);
        if (this.m_position < 0) {
            this.m_position = this.end;
            return false;
        }
        return true;
    }
    p.Mark = function () {
        this.mark = this.m_position;
    }
    p.Extract = function () {
        if (this.mark >= this.m_position)
            return "";
        else
            return this.buf.substr(this.mark, this.m_position - this.mark);
    }
    p.SkipIdentifier = function () {
        var ch = this.buf.charAt(this.m_position);
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == '_') {
            this.m_position++;
            while (true) {
                ch = this.buf.charAt(this.m_position);
                if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == '_' || (ch >= '0' && ch <= '9'))
                    this.m_position++;
                else
                    return true;
            }
        }
        return false;
    }

    p.SkipFootnoteID = function () {
        var savepos = this.m_position;

        this.SkipLinespace();

        this.Mark();

        while (true) {
            var ch = this.current();
            if (is_alphadigit(ch) || ch == '-' || ch == '_' || ch == ':' || ch == '.' || ch == ' ')
                this.SkipForward(1);
            else
                break;
        }

        if (this.m_position > this.mark) {
            var id = Trim(this.Extract());
            if (id.length > 0) {
                this.SkipLinespace();
                return id;
            }
        }

        this.m_position = savepos;
        return null;
    }

    p.SkipHtmlEntity = function () {
        if (this.buf.charAt(this.m_position) != '&')
            return false;

        var newpos = SkipHtmlEntity(this.buf, this.m_position);
        if (newpos < 0)
            return false;

        this.m_position = newpos;
        return true;
    }

    p.SkipEscapableChar = function (ExtraMode) {
        if (this.buf.charAt(this.m_position) == '\\' && is_escapable(this.buf.charAt(this.m_position + 1), ExtraMode)) {
            this.m_position += 2;
            return true;
        }
        else {
            if (this.m_position < this.end)
                this.m_position++;
            return false;
        }
    }


    /////////////////////////////////////////////////////////////////////////////
    // HtmlTag

    var HtmlTagFlags_Block = 0x0001; 	// Block tag
    var HtmlTagFlags_Inline = 0x0002; 	// Inline tag
    var HtmlTagFlags_NoClosing = 0x0004; 	// No closing tag (eg: <hr> and <!-- -->)
    var HtmlTagFlags_ContentAsSpan = 0x0008;        // When markdown=1 treat content as span, not block


    function HtmlTag(name) {
        this.name = name;
        this.attributes = {};
        this.flags = 0;
        this.closed = false;
        this.closing = false;
    }

    p = HtmlTag.prototype;

    p.attributeCount = function () {
        if (!this.attributes)
            return 0;

        var count = 0;
        for (var x in this.attributes)
            count++;

        return count;
    }

    p.get_Flags = function () {
        if (this.flags == 0) {
            this.flags = tag_flags[this.name.toLowerCase()];
            if (this.flags == undefined) {
                this.flags = HtmlTagFlags_Inline;
            }
        }
        return this.flags;
    }

    p.IsSafe = function () {
        var name_lower = this.name.toLowerCase();

        // Check if tag is in whitelist
        if (!allowed_tags[name_lower])
            return false;

        // Find allowed attributes
        var allowed = allowed_attributes[name_lower];
        if (!allowed) {
            return this.attributeCount() == 0;
        }

        // No attributes?
        if (!this.attributes)
            return true;

        // Check all are allowed
        for (var i in this.attributes) {
            if (!allowed[i.toLowerCase()])
                return false;
        }

        // Check href attribute is ok
        if (this.attributes["href"]) {
            if (!IsSafeUrl(this.attributes["href"]))
                return false;
        }

        if (this.attributes["src"]) {
            if (!IsSafeUrl(this.attributes["src"]))
                return false;
        }

        // Passed all white list checks, allow it
        return true;
    }

    // Render opening tag (eg: <tag attr="value">
    p.RenderOpening = function (dest) {
        dest.Append("<");
        dest.Append(this.name);
        for (var i in this.attributes) {
            dest.Append(" ");
            dest.Append(i);
            dest.Append("=\"");
            dest.Append(this.attributes[i]);
            dest.Append("\"");
        }

        if (this.closed)
            dest.Append(" />");
        else
            dest.Append(">");
    }

    // Render closing tag (eg: </tag>)
    p.RenderClosing = function (dest) {
        dest.Append("</");
        dest.Append(this.name);
        dest.Append(">");
    }



    function IsSafeUrl(url) {
        url = url.toLowerCase();
        return (url.substr(0, 7) == "http://" ||
        url.substr(0, 8) == "https://" ||
        url.substr(0, 6) == "ftp://");
    }

    function ParseHtmlTag(p) {
        // Save position
        var savepos = p.m_position;

        // Parse it
        var ret = ParseHtmlTagHelper(p);
        if (ret != null)
            return ret;

        // Rewind if failed
        p.m_position = savepos;
        return null;
    }

    function ParseHtmlTagHelper(p) {
        // Does it look like a tag?
        if (p.current() != '<')
            return null;

        // Skip '<'
        p.SkipForward(1);

        // Is it a comment?
        if (p.SkipString("!--")) {
            p.Mark();

            if (p.Find("-->")) {
                var t = new HtmlTag("!");
                t.attributes["content"] = p.Extract();
                t.closed = true;
                p.SkipForward(3);
                return t;
            }
        }

        // Is it a closing tag eg: </div>
        var bClosing = p.SkipChar('/');

        // Get the tag name
        p.Mark();
        if (!p.SkipIdentifier())
            return null;

        // Probably a tag, create the HtmlTag object now
        var tag = new HtmlTag(p.Extract());
        tag.closing = bClosing;

        // If it's a closing tag, no attributes
        if (bClosing) {
            if (p.current() != '>')
                return null;

            p.SkipForward(1);
            return tag;
        }


        while (!p.eof()) {
            // Skip whitespace
            p.SkipWhitespace();

            // Check for closed tag eg: <hr />
            if (p.SkipString("/>")) {
                tag.closed = true;
                return tag;
            }

            // End of tag?
            if (p.SkipChar('>')) {
                return tag;
            }

            // attribute name
            p.Mark();
            if (!p.SkipIdentifier())
                return null;
            var attributeName = p.Extract();

            // Skip whitespace
            p.SkipWhitespace();

            // Skip equal sign
            if (!p.SkipChar('='))
                return null;

            // Skip whitespace
            p.SkipWhitespace();

            // Optional quotes
            if (p.SkipChar('\"')) {
                // Scan the value
                p.Mark();
                if (!p.Find('\"'))
                    return null;

                // Store the value
                tag.attributes[attributeName] = p.Extract();

                // Skip closing quote
                p.SkipForward(1);
            }
            else {
                // Scan the value
                p.Mark();
                while (!p.eof() && !is_whitespace(p.current()) && p.current() != '>' && p.current() != '/')
                    p.SkipForward(1);

                if (!p.eof()) {
                    // Store the value
                    tag.attributes[attributeName] = p.Extract();
                }
            }
        }

        return null;
    }


    var allowed_tags = {
        "b": 1, "blockquote": 1, "code": 1, "dd": 1, "dt": 1, "dl": 1, "del": 1, "em": 1,
        "h1": 1, "h2": 1, "h3": 1, "h4": 1, "h5": 1, "h6": 1, "i": 1, "kbd": 1, "li": 1, "ol": 1, "ul": 1,
        "p": 1, "pre": 1, "s": 1, "sub": 1, "sup": 1, "strong": 1, "strike": 1, "img": 1, "a": 1
    };

    var allowed_attributes = {
        "a": { "href": 1, "title": 1 },
        "img": { "src": 1, "width": 1, "height": 1, "alt": 1, "title": 1 }
    };

    var b = HtmlTagFlags_Block;
    var i = HtmlTagFlags_Inline;
    var n = HtmlTagFlags_NoClosing;
    var s = HtmlTagFlags_ContentAsSpan;
    var tag_flags = {
        "p": b | s,
        "div": b,
        "h1": b | s,
        "h2": b | s,
        "h3": b | s,
        "h4": b | s,
        "h5": b | s,
        "h6": b | s,
        "blockquote": b,
        "pre": b,
        "table": b,
        "dl": b,
        "ol": b,
        "ul": b,
        "form": b,
        "fieldset": b,
        "iframe": b,
        "script": b | i,
        "noscript": b | i,
        "math": b | i,
        "ins": b | i,
        "del": b | i,
        "img": b | i,
        "li": s,
        "dd": s,
        "dt": s,
        "td": s,
        "th": s,
        "legend": s,
        "address": s,
        "hr": b | n,
        "!": b | n,
        "head": b
    };
    delete b;
    delete i;
    delete n;



    /////////////////////////////////////////////////////////////////////////////
    // LinkDefinition

    function LinkDefinition(id, url, title) {
        this.id = id;
        this.url = url;
        if (title == undefined)
            this.title = null;
        else
            this.title = title;
    }

    p = LinkDefinition.prototype;
    p.RenderLink = function (m, b, link_text) {
        if (this.url.substr(0, 7).toLowerCase() == "mailto:") {
            b.Append("<a href=\"");
            b.HtmlRandomize(this.url);
            b.Append('\"');
            if (this.title) {
                b.Append(" title=\"");
                b.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
                b.Append('\"');
            }
            b.Append('>');
            b.HtmlRandomize(link_text);
            b.Append("</a>");
        }
        else {
            var tag = new HtmlTag("a");

            // encode url
            var sb = m.GetStringBuilder();
            sb.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
            tag.attributes["href"] = sb.ToString();

            // encode title
            if (this.title) {
                sb.Clear();
                sb.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
                tag.attributes["title"] = sb.ToString();
            }

            // Do user processing
            m.OnPrepareLink(tag);

            // Render the opening tag
            tag.RenderOpening(b);

            b.Append(link_text);   // Link text already escaped by SpanFormatter
            b.Append("</a>");
        }
    }

    p.RenderImg = function (m, b, alt_text) {
        var tag = new HtmlTag("img");

        // encode url
        var sb = m.GetStringBuilder();
        sb.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
        tag.attributes["src"] = sb.ToString();

        // encode alt text
        if (alt_text) {
            sb.Clear();
            sb.SmartHtmlEncodeAmpsAndAngles(alt_text, 0, alt_text.length);
            tag.attributes["alt"] = sb.ToString();
        }

        // encode title
        if (this.title) {
            sb.Clear();
            sb.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
            tag.attributes["title"] = sb.ToString();
        }

        tag.closed = true;

        m.OnPrepareImage(tag, m.RenderingTitledImage);

        tag.RenderOpening(b);

        /*
         b.Append("<img src=\"");
         b.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
         b.Append('\"');
         if (alt_text)
         {
         b.Append(" alt=\"");
         b.SmartHtmlEncodeAmpsAndAngles(alt_text, 0, alt_text.length);
         b.Append('\"');
         }
         if (this.title)
         {
         b.Append(" title=\"");
         b.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
         b.Append('\"');
         }
         b.Append(" />");
         */
    }

    function ParseLinkDefinition(p, ExtraMode) {
        var savepos = p.m_position;
        var l = ParseLinkDefinitionInternal(p, ExtraMode);
        if (l == null)
            p.m_position = savepos;
        return l;
    }

    function ParseLinkDefinitionInternal(p, ExtraMode) {
        // Skip leading white space
        p.SkipWhitespace();

        // Must start with an opening square bracket
        if (!p.SkipChar('['))
            return null;

        // Extract the id
        p.Mark();
        if (!p.Find(']'))
            return null;
        var id = p.Extract();
        if (id.length == 0)
            return null;
        if (!p.SkipString("]:"))
            return null;

        // Parse the url and title
        var link = ParseLinkTarget(p, id, ExtraMode);

        // and trailing whitespace
        p.SkipLinespace();

        // Trailing crap, not a valid link reference...
        if (!p.eol())
            return null;

        return link;
    }

    // Parse just the link target
    // For reference link definition, this is the bit after "[id]: thisbit"
    // For inline link, this is the bit in the parens: [link text](thisbit)
    function ParseLinkTarget(p, id, ExtraMode) {
        // Skip whitespace
        p.SkipWhitespace();

        // End of string?
        if (p.eol())
            return null;

        // Create the link definition
        var r = new LinkDefinition(id);

        // Is the url enclosed in angle brackets
        if (p.SkipChar('<')) {
            // Extract the url
            p.Mark();

            // Find end of the url
            while (p.current() != '>') {
                if (p.eof())
                    return null;
                p.SkipEscapableChar(ExtraMode);
            }

            var url = p.Extract();
            if (!p.SkipChar('>'))
                return null;

            // Unescape it
            r.url = UnescapeString(Trim(url), ExtraMode);

            // Skip whitespace
            p.SkipWhitespace();
        }
        else {
            // Find end of the url
            p.Mark();
            var paren_depth = 1;
            while (!p.eol()) {
                var ch = p.current();
                if (is_whitespace(ch))
                    break;
                if (id == null) {
                    if (ch == '(')
                        paren_depth++;
                    else if (ch == ')') {
                        paren_depth--;
                        if (paren_depth == 0)
                            break;
                    }
                }

                p.SkipEscapableChar(ExtraMode);
            }

            r.url = UnescapeString(Trim(p.Extract()), ExtraMode);
        }

        p.SkipLinespace();

        // End of inline target
        if (p.current() == ')')
            return r;

        var bOnNewLine = p.eol();
        var posLineEnd = p.m_position;
        if (p.eol()) {
            p.SkipEol();
            p.SkipLinespace();
        }

        // Work out what the title is delimited with
        var delim;
        switch (p.current()) {
            case '\'':
            case '\"':
                delim = p.current();
                break;

            case '(':
                delim = ')';
                break;

            default:
                if (bOnNewLine) {
                    p.m_position = posLineEnd;
                    return r;
                }
                else
                    return null;
        }

        // Skip the opening title delimiter
        p.SkipForward(1);

        // Find the end of the title
        p.Mark();
        while (true) {
            if (p.eol())
                return null;

            if (p.current() == delim) {

                if (delim != ')') {
                    var savepos = p.m_position;

                    // Check for embedded quotes in title

                    // Skip the quote and any trailing whitespace
                    p.SkipForward(1);
                    p.SkipLinespace();

                    // Next we expect either the end of the line for a link definition
                    // or the close bracket for an inline link
                    if ((id == null && p.current() != ')') ||
                        (id != null && !p.eol())) {
                        continue;
                    }

                    p.m_position = savepos;
                }

                // End of title
                break;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Store the title
        r.title = UnescapeString(p.Extract(), ExtraMode);

        // Skip closing quote
        p.SkipForward(1);

        // Done!
        return r;
    }


    /////////////////////////////////////////////////////////////////////////////
    // LinkInfo

    function LinkInfo(def, link_text) {
        this.def = def;
        this.link_text = link_text;
    }


    /////////////////////////////////////////////////////////////////////////////
    // Token

    var TokenType_Text = 0;
    var TokenType_HtmlTag = 1;
    var TokenType_Html = 2;
    var TokenType_open_em = 3;
    var TokenType_close_em = 4;
    var TokenType_open_strong = 5;
    var TokenType_close_strong = 6;
    var TokenType_code_span = 7;
    var TokenType_br = 8;
    var TokenType_link = 9;
    var TokenType_img = 10;
    var TokenType_opening_mark = 11;
    var TokenType_closing_mark = 12;
    var TokenType_internal_mark = 13;
    var TokenType_footnote = 14;
    var TokenType_abbreviation = 15;

    function Token(type, startOffset, length) {
        this.type = type;
        this.startOffset = startOffset;
        this.length = length;
        this.data = null;
    }

    /////////////////////////////////////////////////////////////////////////////
    // SpanFormatter

    function SpanFormatter(markdown) {
        this.m_Markdown = markdown;
        this.m_Scanner = new StringScanner();
        this.m_SpareTokens = [];
        this.m_DisableLinks = false;
        this.m_Tokens = [];
    }

    p = SpanFormatter.prototype;

    p.FormatParagraph = function (dest, str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);

        // Titled image?
        if (this.m_Tokens.length == 1 && this.m_Markdown.HtmlClassTitledImages != null && this.m_Tokens[0].type == TokenType_img) {
            // Grab the link info
            var li = this.m_Tokens[0].data;

            // Render the div opening
            dest.Append("<div class=\"");
            dest.Append(this.m_Markdown.HtmlClassTitledImages);
            dest.Append("\">\n");

            // Render the img
            this.m_Markdown.RenderingTitledImage = true;
            this.Render(dest, str);
            this.m_Markdown.RenderingTitledImage = false;
            dest.Append("\n");

            // Render the title
            if (li.def.title) {
                dest.Append("<p>");
                dest.SmartHtmlEncodeAmpsAndAngles(li.def.title, 0, li.def.title.length);
                dest.Append("</p>\n");
            }

            dest.Append("</div>\n");
        }
        else {
            // Render the paragraph
            dest.Append("<p>");
            this.Render(dest, str);
            dest.Append("</p>\n");
        }

    }

    // Format part of a string into a destination string builder
    p.Format2 = function (dest, str) {
        this.Format(dest, str, 0, str.length);
    }

    // Format part of a string into a destination string builder
    p.Format = function (dest, str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);

        // Render all tokens
        this.Render(dest, str);
    }

    // Format a string and return it as a new string
    // (used in formatting the text of links)
    p.FormatDirect = function (str) {
        var dest = new StringBuilder();
        this.Format(dest, str, 0, str.length);
        return dest.ToString();
    }

    p.MakeID = function (str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);
        var tokens = this.m_Tokens;

        var sb = new StringBuilder();
        for (var i = 0; i < tokens.length; i++) {
            var t = tokens[i];
            switch (t.type) {
                case TokenType_Text:
                    sb.Append(str.substr(t.startOffset, t.length));
                    break;

                case TokenType_link:
                    sb.Append(t.data.link_text);
                    break;
            }
            this.FreeToken(t);
        }

        // Now clean it using the same rules as pandoc
        var p = this.m_Scanner;
        p.reset(sb.ToString());

        // Skip everything up to the first letter
        while (!p.eof()) {
            if (is_alpha(p.current()))
                break;
            p.SkipForward(1);
        }

        // Process all characters
        sb.Clear();
        while (!p.eof()) {
            var ch = p.current();
            if (is_alphadigit(ch) || ch == '_' || ch == '-' || ch == '.')
                sb.Append(ch.toLowerCase());
            else if (ch == ' ')
                sb.Append("-");
            else if (is_lineend(ch)) {
                sb.Append("-");
                p.SkipEol();
                continue;
            }

            p.SkipForward(1);
        }

        return sb.ToString();
    }



    // Render a list of tokens to a destination string builder.
    p.Render = function (sb, str) {
        var tokens = this.m_Tokens;
        var len = tokens.length;
        for (var i = 0; i < len; i++) {
            var t = tokens[i];
            switch (t.type) {
                case TokenType_Text:
                    // Append encoded text
                    sb.HtmlEncode(str, t.startOffset, t.length);
                    break;

                case TokenType_HtmlTag:
                    // Append html as is
                    sb.SmartHtmlEncodeAmps(str, t.startOffset, t.length);
                    break;

                case TokenType_Html:
                case TokenType_opening_mark:
                case TokenType_closing_mark:
                case TokenType_internal_mark:
                    // Append html as is
                    sb.Append(str.substr(t.startOffset, t.length));
                    break;

                case TokenType_br:
                    sb.Append("<br />\n");
                    break;

                case TokenType_open_em:
                    sb.Append("<em>");
                    break;

                case TokenType_close_em:
                    sb.Append("</em>");
                    break;

                case TokenType_open_strong:
                    sb.Append("<strong>");
                    break;

                case TokenType_close_strong:
                    sb.Append("</strong>");
                    break;

                case TokenType_code_span:
                    sb.Append("<code>");
                    sb.HtmlEncode(str, t.startOffset, t.length);
                    sb.Append("</code>");
                    break;

                case TokenType_link:
                    var li = t.data;
                    var sf = new SpanFormatter(this.m_Markdown);
                    sf.m_DisableLinks = true;

                    li.def.RenderLink(this.m_Markdown, sb, sf.FormatDirect(li.link_text));
                    break;

                case TokenType_img:
                    var li = t.data;
                    li.def.RenderImg(this.m_Markdown, sb, li.link_text);
                    break;

                case TokenType_footnote:
                    var r = t.data;
                    sb.Append("<sup id=\"fnref:");
                    sb.Append(r.id);
                    sb.Append("\"><a href=\"#fn:");
                    sb.Append(r.id);
                    sb.Append("\" rel=\"footnote\">");
                    sb.Append(r.index + 1);
                    sb.Append("</a></sup>");
                    break;

                case TokenType_abbreviation:
                    var a = t.data;
                    sb.Append("<abbr");
                    if (a.Title) {
                        sb.Append(" title=\"");
                        sb.HtmlEncode(a.Title, 0, a.Title.length);
                        sb.Append("\"");
                    }
                    sb.Append(">");
                    sb.HtmlEncode(a.Abbr, 0, a.Abbr.length);
                    sb.Append("</abbr>");
                    break;


            }

            this.FreeToken(t);
        }
    }

    p.Tokenize = function (str, start, len) {
        // Reset the string scanner
        var p = this.m_Scanner;
        p.reset(str, start, len);

        var tokens = this.m_Tokens;
        tokens.length = 0;

        var emphasis_marks = null;
        var Abbreviations = this.m_Markdown.GetAbbreviations();

        var re = Abbreviations == null ? /[\*\_\`\[\!\<\&\ \\]/g : null;

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Scan string
        var start_text_token = p.m_position;
        while (!p.eof()) {
            if (re != null && !p.FindRE(re))
                break;

            var end_text_token = p.m_position;

            // Work out token
            var token = null;
            switch (p.current()) {
                case '*':
                case '_':

                    // Create emphasis mark
                    token = this.CreateEmphasisMark();

                    if (token != null) {
                        // Store marks in a separate list the we'll resolve later
                        switch (token.type) {
                            case TokenType_internal_mark:
                            case TokenType_opening_mark:
                            case TokenType_closing_mark:
                                if (emphasis_marks == null) {
                                    emphasis_marks = [];
                                }
                                emphasis_marks.push(token);
                                break;
                        }
                    }
                    break;

                case '`':
                    token = this.ProcessCodeSpan();
                    break;

                case '[':
                case '!':
                    // Process link reference
                    var linkpos = p.m_position;
                    token = this.ProcessLinkOrImageOrFootnote();

                    // Rewind if invalid syntax
                    // (the '[' or '!' will be treated as a regular character and processed below)
                    if (token == null)
                        p.m_position = linkpos;
                    break;

                case '<':
                    // Is it a valid html tag?
                    var save = p.m_position;
                    var tag = ParseHtmlTag(p);
                    if (tag != null) {
                        // Yes, create a token for it
                        if (!this.m_Markdown.SafeMode || tag.IsSafe()) {
                            // Yes, create a token for it
                            token = this.CreateToken(TokenType_HtmlTag, save, p.m_position - save);
                        }
                        else {
                            // No, rewrite and encode it
                            p.m_position = save;
                        }
                    }
                    else {
                        // No, rewind and check if it's a valid autolink eg: <google.com>
                        p.m_position = save;
                        token = this.ProcessAutoLink();

                        if (token == null)
                            p.m_position = save;
                    }
                    break;

                case '&':
                    // Is it a valid html entity
                    var save = p.m_position;
                    if (p.SkipHtmlEntity()) {
                        // Yes, create a token for it
                        token = this.CreateToken(TokenType_Html, save, p.m_position - save);
                    }

                    break;

                case ' ':
                    // Check for double space at end of a line
                    if (p.CharAtOffset(1) == ' ' && is_lineend(p.CharAtOffset(2))) {
                        // Yes, skip it
                        p.SkipForward(2);

                        // Don't put br's at the end of a paragraph
                        if (!p.eof()) {
                            p.SkipEol();
                            token = this.CreateToken(TokenType_br, end_text_token, 0);
                        }
                    }
                    break;

                case '\\':
                    // Check followed by an escapable character
                    if (is_escapable(p.CharAtOffset(1), ExtraMode)) {
                        token = this.CreateToken(TokenType_Text, p.m_position + 1, 1);
                        p.SkipForward(2);
                    }
                    break;
            }

            // Look for abbreviations.
            if (token == null && Abbreviations != null && !is_alphadigit(p.CharAtOffset(-1))) {
                var savepos = p.m_position;
                for (var i in Abbreviations) {
                    var abbr = Abbreviations[i];
                    if (p.SkipString(abbr.Abbr) && !is_alphadigit(p.current())) {
                        token = this.CreateDataToken(TokenType_abbreviation, abbr);
                        break;
                    }

                    p.position = savepos;
                }
            }


            // If token found, append any preceeding text and the new token to the token list
            if (token != null) {
                // Create a token for everything up to the special character
                if (end_text_token > start_text_token) {
                    tokens.push(this.CreateToken(TokenType_Text, start_text_token, end_text_token - start_text_token));
                }

                // Add the new token
                tokens.push(token);

                // Remember where the next text token starts
                start_text_token = p.m_position;
            }
            else {
                // Skip a single character and keep looking
                p.SkipForward(1);
            }
        }

        // Append a token for any trailing text after the last token.
        if (p.m_position > start_text_token) {
            tokens.push(this.CreateToken(TokenType_Text, start_text_token, p.m_position - start_text_token));
        }

        // Do we need to resolve and emphasis marks?
        if (emphasis_marks != null) {
            this.ResolveEmphasisMarks(tokens, emphasis_marks);
        }
    }

    /*
     * Resolving emphasis tokens is a two part process
     *
     * 1. Find all valid sequences of * and _ and create `mark` tokens for them
     *		this is done by CreateEmphasisMarks during the initial character scan
     *		done by Tokenize
     *
     * 2. Looks at all these emphasis marks and tries to pair them up
     *		to make the actual <em> and <strong> tokens
     *
     * Any unresolved emphasis marks are rendered unaltered as * or _
     */

    // Create emphasis mark for sequences of '*' and '_' (part 1)
    p.CreateEmphasisMark = function () {
        var p = this.m_Scanner;

        // Capture current state
        var ch = p.current();
        var altch = ch == '*' ? '_' : '*';
        var savepos = p.m_position;

        // Check for a consecutive sequence of just '_' and '*'
        if (p.bof() || is_whitespace(p.CharAtOffset(-1))) {
            while (is_emphasis(p.current()))
                p.SkipForward(1);

            if (p.eof() || is_whitespace(p.current())) {
                return this.CreateToken(TokenType_Html, savepos, p.m_position - savepos);
            }

            // Rewind
            p.m_position = savepos;
        }

        // Scan backwards and see if we have space before
        while (is_emphasis(p.CharAtOffset(-1)))
            p.SkipForward(-1);
        var bSpaceBefore = p.bof() || is_whitespace(p.CharAtOffset(-1));
        p.m_position = savepos;

        // Count how many matching emphasis characters
        while (p.current() == ch) {
            p.SkipForward(1);
        }
        var count = p.m_position - savepos;

        // Scan forwards and see if we have space after
        while (is_emphasis(p.CharAtOffset(1)))
            p.SkipForward(1);
        var bSpaceAfter = p.eof() || is_whitespace(p.current());
        p.m_position = savepos + count;

        if (bSpaceBefore) {
            return this.CreateToken(TokenType_opening_mark, savepos, p.m_position - savepos);
        }

        if (bSpaceAfter) {
            return this.CreateToken(TokenType_closing_mark, savepos, p.m_position - savepos);
        }

        if (this.m_Markdown.ExtraMode && ch == '_')
            return null;


        return this.CreateToken(TokenType_internal_mark, savepos, p.m_position - savepos);
    }

    // Split mark token
    p.SplitMarkToken = function (tokens, marks, token, position) {
        // Create the new rhs token
        var tokenRhs = this.CreateToken(token.type, token.startOffset + position, token.length - position);

        // Adjust down the length of this token
        token.length = position;

        // Insert the new token into each of the parent collections
        marks.splice(array_indexOf(marks, token) + 1, 0, tokenRhs);
        tokens.splice(array_indexOf(tokens, token) + 1, 0, tokenRhs);

        // Return the new token
        return tokenRhs;
    }

    // Resolve emphasis marks (part 2)
    p.ResolveEmphasisMarks = function (tokens, marks) {
        var input = this.m_Scanner.buf;

        var bContinue = true;
        while (bContinue) {
            bContinue = false;
            for (var i = 0; i < marks.length; i++) {
                // Get the next opening or internal mark
                var opening_mark = marks[i];
                if (opening_mark.type != TokenType_opening_mark && opening_mark.type != TokenType_internal_mark)
                    continue;

                // Look for a matching closing mark
                for (var j = i + 1; j < marks.length; j++) {
                    // Get the next closing or internal mark
                    var closing_mark = marks[j];
                    if (closing_mark.type != TokenType_closing_mark && closing_mark.type != TokenType_internal_mark)
                        break;

                    // Ignore if different type (ie: `*` vs `_`)
                    if (input.charAt(opening_mark.startOffset) != input.charAt(closing_mark.startOffset))
                        continue;

                    // strong or em?
                    var style = Math.min(opening_mark.length, closing_mark.length);

                    // Triple or more on both ends?
                    if (style >= 3) {
                        style = (style % 2) == 1 ? 1 : 2;
                    }

                    // Split the opening mark, keeping the RHS
                    if (opening_mark.length > style) {
                        opening_mark = this.SplitMarkToken(tokens, marks, opening_mark, opening_mark.length - style);
                        i--;
                    }

                    // Split the closing mark, keeping the LHS
                    if (closing_mark.length > style) {
                        this.SplitMarkToken(tokens, marks, closing_mark, style);
                    }

                    // Connect them
                    opening_mark.type = style == 1 ? TokenType_open_em : TokenType_open_strong;
                    closing_mark.type = style == 1 ? TokenType_close_em : TokenType_close_strong;

                    // Remove the matched marks
                    marks.splice(array_indexOf(marks, opening_mark), 1);
                    marks.splice(array_indexOf(marks, closing_mark), 1);
                    bContinue = true;

                    break;
                }
            }
        }
    }

    // Process auto links eg: <google.com>
    p.ProcessAutoLink = function () {
        if (this.m_DisableLinks)
            return null;

        var p = this.m_Scanner;

        // Skip the angle bracket and remember the start
        p.SkipForward(1);
        p.Mark();

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Allow anything up to the closing angle, watch for escapable characters
        while (!p.eof()) {
            var ch = p.current();

            // No whitespace allowed
            if (is_whitespace(ch))
                break;

            // End found?
            if (ch == '>') {
                var url = UnescapeString(p.Extract(), ExtraMode);

                var li = null;
                if (IsEmailAddress(url)) {
                    var link_text;
                    if (url.toLowerCase().substr(0, 7) == "mailto:") {
                        link_text = url.substr(7);
                    }
                    else {
                        link_text = url;
                        url = "mailto:" + url;
                    }

                    li = new LinkInfo(new LinkDefinition("auto", url, null), link_text);
                }
                else if (IsWebAddress(url)) {
                    li = new LinkInfo(new LinkDefinition("auto", url, null), url);
                }

                if (li != null) {
                    p.SkipForward(1);
                    return this.CreateDataToken(TokenType_link, li);
                }

                return null;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Didn't work
        return null;
    }

    // Process [link] and ![image] directives
    p.ProcessLinkOrImageOrFootnote = function () {
        var p = this.m_Scanner;

        // Link or image?
        var token_type = p.SkipChar('!') ? TokenType_img : TokenType_link;

        // Opening '['
        if (!p.SkipChar('['))
            return null;

        // Is it a foonote?
        var savepos = this.m_position;
        if (this.m_Markdown.ExtraMode && token_type == TokenType_link && p.SkipChar('^')) {
            p.SkipLinespace();

            // Parse it
            p.Mark();
            var id = p.SkipFootnoteID();
            if (id != null && p.SkipChar(']')) {
                // Look it up and create footnote reference token
                var footnote_index = this.m_Markdown.ClaimFootnote(id);
                if (footnote_index >= 0) {
                    // Yes it's a footnote
                    return this.CreateDataToken(TokenType_footnote, { index: footnote_index, id: id });
                }
            }

            // Rewind
            this.m_position = savepos;
        }

        if (this.m_DisableLinks)
            return null;

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Find the closing square bracket, allowing for nesting, watching for
        // escapable characters
        p.Mark();
        var depth = 1;
        while (!p.eof()) {
            var ch = p.current();
            if (ch == '[') {
                depth++;
            }
            else if (ch == ']') {
                depth--;
                if (depth == 0)
                    break;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Quit if end
        if (p.eof())
            return null;

        // Get the link text and unescape it
        var link_text = UnescapeString(p.Extract(), ExtraMode);

        // The closing ']'
        p.SkipForward(1);

        // Save position in case we need to rewind
        savepos = p.m_position;

        // Inline links must follow immediately
        if (p.SkipChar('(')) {
            // Extract the url and title
            var link_def = ParseLinkTarget(p, null, this.m_Markdown.ExtraMode);
            if (link_def == null)
                return null;

            // Closing ')'
            p.SkipWhitespace();
            if (!p.SkipChar(')'))
                return null;

            // Create the token
            return this.CreateDataToken(token_type, new LinkInfo(link_def, link_text));
        }

        // Optional space or tab
        if (!p.SkipChar(' '))
            p.SkipChar('\t');

        // If there's line end, we're allow it and as must line space as we want
        // before the link id.
        if (p.eol()) {
            p.SkipEol();
            p.SkipLinespace();
        }

        // Reference link?
        var link_id = null;
        if (p.current() == '[') {
            // Skip the opening '['
            p.SkipForward(1);

            // Find the start/end of the id
            p.Mark();
            if (!p.Find(']'))
                return null;

            // Extract the id
            link_id = p.Extract();

            // Skip closing ']'
            p.SkipForward(1);
        }
        else {
            // Rewind to just after the closing ']'
            p.m_position = savepos;
        }

        // Link id not specified?
        if (!link_id) {
            link_id = link_text;

            // Convert all whitespace+line end to a single space
            while (true) {
                // Find carriage return
                var i = link_id.indexOf("\n");
                if (i < 0)
                    break;

                var start = i;
                while (start > 0 && is_whitespace(link_id.charAt(start - 1)))
                    start--;

                var end = i;
                while (end < link_id.length && is_whitespace(link_id.charAt(end)))
                    end++;

                link_id = link_id.substr(0, start) + " " + link_id.substr(end);
            }
        }

        // Find the link definition, abort if not defined
        var def = this.m_Markdown.GetLinkDefinition(link_id);
        if (def == null)
            return null;

        // Create a token
        return this.CreateDataToken(token_type, new LinkInfo(def, link_text));
    }

    // Process a ``` code span ```
    p.ProcessCodeSpan = function () {
        var p = this.m_Scanner;
        var start = p.m_position;

        // Count leading ticks
        var tickcount = 0;
        while (p.SkipChar('`')) {
            tickcount++;
        }

        // Skip optional leading space...
        p.SkipWhitespace();

        // End?
        if (p.eof())
            return this.CreateToken(TokenType_Text, start, p.m_position - start);

        var startofcode = p.m_position;

        // Find closing ticks
        if (!p.Find(p.buf.substr(start, tickcount)))
            return this.CreateToken(TokenType_Text, start, p.m_position - start);

        // Save end position before backing up over trailing whitespace
        var endpos = p.m_position + tickcount;
        while (is_whitespace(p.CharAtOffset(-1)))
            p.SkipForward(-1);

        // Create the token, move back to the end and we're done
        var ret = this.CreateToken(TokenType_code_span, startofcode, p.m_position - startofcode);
        p.m_position = endpos;
        return ret;
    }

    p.CreateToken = function (type, startOffset, length) {
        if (this.m_SpareTokens.length != 0) {
            var t = this.m_SpareTokens.pop();
            t.type = type;
            t.startOffset = startOffset;
            t.length = length;
            t.data = null;
            return t;
        }
        else
            return new Token(type, startOffset, length);
    }

    // CreateToken - create or re-use a token object
    p.CreateDataToken = function (type, data) {
        if (this.m_SpareTokens.length != 0) {
            var t = this.m_SpareTokens.pop();
            t.type = type;
            t.data = data;
            return t;
        }
        else {
            var t = new Token(type, 0, 0);
            t.data = data;
            return t;
        }
    }

    // FreeToken - return a token to the spare token pool
    p.FreeToken = function (token) {
        token.data = null;
        this.m_SpareTokens.push(token);
    }



    /////////////////////////////////////////////////////////////////////////////
    // Block

    var BlockType_Blank = 0;
    var BlockType_h1 = 1;
    var BlockType_h2 = 2;
    var BlockType_h3 = 3;
    var BlockType_h4 = 4;
    var BlockType_h5 = 5;
    var BlockType_h6 = 6;
    var BlockType_post_h1 = 7;
    var BlockType_post_h2 = 8;
    var BlockType_quote = 9;
    var BlockType_ol_li = 10;
    var BlockType_ul_li = 11;
    var BlockType_p = 12;
    var BlockType_indent = 13;
    var BlockType_hr = 14;
    var BlockType_html = 15;
    var BlockType_unsafe_html = 16;
    var BlockType_span = 17;
    var BlockType_codeblock = 18;
    var BlockType_li = 19;
    var BlockType_ol = 20;
    var BlockType_ul = 21;
    var BlockType_HtmlTag = 22;
    var BlockType_Composite = 23;
    var BlockType_table_spec = 24;
    var BlockType_dd = 25;
    var BlockType_dt = 26;
    var BlockType_dl = 27;
    var BlockType_footnote = 28;
    var BlockType_p_footnote = 29;


    function Block() {
    }


    p = Block.prototype;
    p.buf = null;
    p.blockType = BlockType_Blank;
    p.contentStart = 0;
    p.contentLen = 0;
    p.lineStart = 0;
    p.lineLen = 0;
    p.children = null;
    p.data = null;

    p.get_Content = function () {
        if (this.buf == null)
            return null;
        if (this.contentStart == -1)
            return this.buf;

        return this.buf.substr(this.contentStart, this.contentLen);
    }


    p.get_CodeContent = function () {
        var s = new StringBuilder();
        for (var i = 0; i < this.children.length; i++) {
            s.Append(this.children[i].get_Content());
            s.Append('\n');
        }
        return s.ToString();
    }


    p.RenderChildren = function (m, b) {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Render(m, b);
        }
    }

    p.ResolveHeaderID = function (m) {
        // Already resolved?
        if (this.data != null)
            return this.data;

        // Approach 1 - PHP Markdown Extra style header id
        var res = StripHtmlID(this.buf, this.contentStart, this.get_contentEnd());
        var id = null;
        if (res != null) {
            this.set_contentEnd(res.end);
            id = res.id;
        }
        else {
            // Approach 2 - pandoc style header id
            id = m.MakeUniqueHeaderID(this.buf, this.contentStart, this.contentLen);
        }

        this.data = id;
        return id;
    }

    p.Render = function (m, b) {
        switch (this.blockType) {
            case BlockType_Blank:
                return;

            case BlockType_p:
                m.m_SpanFormatter.FormatParagraph(b, this.buf, this.contentStart, this.contentLen);
                break;

            case BlockType_span:
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("\n");
                break;

            case BlockType_h1:
            case BlockType_h2:
            case BlockType_h3:
            case BlockType_h4:
            case BlockType_h5:
            case BlockType_h6:
                if (m.ExtraMode && !m.SafeMode) {
                    b.Append("<h" + (this.blockType - BlockType_h1 + 1).toString());
                    var id = this.ResolveHeaderID(m);
                    if (id) {
                        b.Append(" id=\"");
                        b.Append(id);
                        b.Append("\">");
                    }
                    else {
                        b.Append(">");
                    }
                }
                else {
                    b.Append("<h" + (this.blockType - BlockType_h1 + 1).toString() + ">");
                }
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</h" + (this.blockType - BlockType_h1 + 1).toString() + ">\n");
                break;

            case BlockType_hr:
                b.Append("<hr />\n");
                return;

            case BlockType_ol_li:
            case BlockType_ul_li:
                b.Append("<li>");
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</li>\n");
                break;

            case BlockType_html:
                b.Append(this.buf.substr(this.contentStart, this.contentLen));
                return;

            case BlockType_unsafe_html:
                b.HtmlEncode(this.buf, this.contentStart, this.contentLen);
                return;

            case BlockType_codeblock:
                b.Append("<pre");
                if (m.FormatCodeBlockAttributes != null) {
                    b.Append(m.FormatCodeBlockAttributes(this.data));
                }
                b.Append("><code>");

                var btemp = b;
                if (m.FormatCodeBlock) {
                    btemp = b;
                    b = new StringBuilder();
                }

                for (var i = 0; i < this.children.length; i++) {
                    var line = this.children[i];
                    b.HtmlEncodeAndConvertTabsToSpaces(line.buf, line.contentStart, line.contentLen);
                    b.Append("\n");
                }

                if (m.FormatCodeBlock) {
                    btemp.Append(m.FormatCodeBlock(b.ToString(), this.data));
                    b = btemp;
                }
                b.Append("</code></pre>\n\n");
                return;

            case BlockType_quote:
                b.Append("<blockquote>\n");
                this.RenderChildren(m, b);
                b.Append("</blockquote>\n");
                return;

            case BlockType_li:
                b.Append("<li>\n");
                this.RenderChildren(m, b);
                b.Append("</li>\n");
                return;

            case BlockType_ol:
                b.Append("<ol>\n");
                this.RenderChildren(m, b);
                b.Append("</ol>\n");
                return;

            case BlockType_ul:
                b.Append("<ul>\n");
                this.RenderChildren(m, b);
                b.Append("</ul>\n");
                return;

            case BlockType_HtmlTag:
                var tag = this.data;

                // Prepare special tags
                var name = tag.name.toLowerCase();
                if (name == "a") {
                    m.OnPrepareLink(tag);
                }
                else if (name == "img") {
                    m.OnPrepareImage(tag, m.RenderingTitledImage);
                }

                tag.RenderOpening(b);
                b.Append("\n");
                this.RenderChildren(m, b);
                tag.RenderClosing(b);
                b.Append("\n");
                return;

            case BlockType_Composite:
            case BlockType_footnote:
                this.RenderChildren(m, b);
                return;

            case BlockType_table_spec:
                this.data.Render(m, b);
                return;

            case BlockType_dd:
                b.Append("<dd>");
                if (this.children != null) {
                    b.Append("\n");
                    this.RenderChildren(m, b);
                }
                else
                    m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</dd>\n");
                break;

            case BlockType_dt:
                if (this.children == null) {
                    var lines = this.get_Content().split("\n");
                    for (var i = 0; i < lines.length; i++) {
                        var l = lines[i];
                        b.Append("<dt>");
                        m.m_SpanFormatter.Format2(b, Trim(l));
                        b.Append("</dt>\n");
                    }
                }
                else {
                    b.Append("<dt>\n");
                    this.RenderChildren(m, b);
                    b.Append("</dt>\n");
                }
                break;

            case BlockType_dl:
                b.Append("<dl>\n");
                this.RenderChildren(m, b);
                b.Append("</dl>\n");
                return;

            case BlockType_p_footnote:
                b.Append("<p>");
                if (this.contentLen > 0) {
                    m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                    b.Append("&nbsp;");
                }
                b.Append(this.data);
                b.Append("</p>\n");
                break;

        }
    }

    p.RevertToPlain = function () {
        this.blockType = BlockType_p;
        this.contentStart = this.lineStart;
        this.contentLen = this.lineLen;
    }

    p.get_contentEnd = function () {
        return this.contentStart + this.contentLen;
    }

    p.set_contentEnd = function (value) {
        this.contentLen = value - this.contentStart;
    }

    // Count the leading spaces on a block
    // Used by list item evaluation to determine indent levels
    // irrespective of indent line type.
    p.get_leadingSpaces = function () {
        var count = 0;
        for (var i = this.lineStart; i < this.lineStart + this.lineLen; i++) {
            if (this.buf.charAt(i) == ' ') {
                count++;
            }
            else {
                break;
            }
        }
        return count;
    }

    p.CopyFrom = function (other) {
        this.blockType = other.blockType;
        this.buf = other.buf;
        this.contentStart = other.contentStart;
        this.contentLen = other.contentLen;
        this.lineStart = other.lineStart;
        this.lineLen = other.lineLen;
        return this;
    }

    /////////////////////////////////////////////////////////////////////////////
    // BlockProcessor


    function BlockProcessor(m, MarkdownInHtml) {
        this.m_Markdown = m;
        this.m_parentType = BlockType_Blank;
        this.m_bMarkdownInHtml = MarkdownInHtml;
    }

    p = BlockProcessor.prototype;

    p.Process = function (str) {
        // Reset string scanner
        var p = new StringScanner(str);

        return this.ScanLines(p);
    }

    p.ProcessRange = function (str, startOffset, len) {
        // Reset string scanner
        var p = new StringScanner(str, startOffset, len);

        return this.ScanLines(p);
    }

    p.StartTable = function (p, spec, lines) {
        // Mustn't have more than 1 preceeding line
        if (lines.length > 1)
            return false;

        // Rewind, parse the header row then fast forward back to current pos
        if (lines.length == 1) {
            var savepos = p.m_position;
            p.m_position = lines[0].lineStart;
            spec.m_Headers = spec.ParseRow(p);
            if (spec.m_Headers == null)
                return false;
            p.m_position = savepos;
            lines.length = 0;
        }

        // Parse all .m_Rows
        while (true) {
            var savepos = p.m_position;

            var row = spec.ParseRow(p);
            if (row != null) {
                spec.m_Rows.push(row);
                continue;
            }

            p.m_position = savepos;
            break;
        }

        return true;
    }



    p.ScanLines = function (p) {
        // The final set of blocks will be collected here
        var blocks = [];

        // The current paragraph/list/codeblock etc will be accumulated here
        // before being collapsed into a block and store in above `blocks` list
        var lines = [];

        // Add all blocks
        var PrevBlockType = -1;
        while (!p.eof()) {
            // Remember if the previous line was blank
            var bPreviousBlank = PrevBlockType == BlockType_Blank;

            // Get the next block
            var b = this.EvaluateLine(p);
            PrevBlockType = b.blockType;

            // For dd blocks, we need to know if it was preceeded by a blank line
            // so store that fact as the block's data.
            if (b.blockType == BlockType_dd) {
                b.data = bPreviousBlank;
            }


            // SetExt header?
            if (b.blockType == BlockType_post_h1 || b.blockType == BlockType_post_h2) {
                if (lines.length > 0) {
                    // Remove the previous line and collapse the current paragraph
                    var prevline = lines.pop();
                    this.CollapseLines(blocks, lines);

                    // If previous line was blank,
                    if (prevline.blockType != BlockType_Blank) {
                        // Convert the previous line to a heading and add to block list
                        prevline.RevertToPlain();
                        prevline.blockType = b.blockType == BlockType_post_h1 ? BlockType_h1 : BlockType_h2;
                        blocks.push(prevline);
                        continue;
                    }
                }


                // Couldn't apply setext header to a previous line

                if (b.blockType == BlockType_post_h1) {
                    // `===` gets converted to normal paragraph
                    b.RevertToPlain();
                    lines.push(b);
                }
                else {
                    // `---` gets converted to hr
                    if (b.contentLen >= 3) {
                        b.blockType = BlockType_hr;
                        blocks.push(b);
                    }
                    else {
                        b.RevertToPlain();
                        lines.push(b);
                    }
                }

                continue;
            }


            // Work out the current paragraph type
            var currentBlockType = lines.length > 0 ? lines[0].blockType : BlockType_Blank;

            // Starting a table?
            if (b.blockType == BlockType_table_spec) {
                // Get the table spec, save position
                var spec = b.data;
                var savepos = p.m_position;
                if (!this.StartTable(p, spec, lines)) {
                    // Not a table, revert the tablespec row to plain,
                    // fast forward back to where we were up to and continue
                    // on as if nothing happened
                    p.m_position = savepos;
                    b.RevertToPlain();
                }
                else {
                    blocks.push(b);
                    continue;
                }
            }

            // Process this line
            switch (b.blockType) {
                case BlockType_Blank:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            this.FreeBlock(b);
                            break;

                        case BlockType_p:
                            this.CollapseLines(blocks, lines);
                            this.FreeBlock(b);
                            break;

                        case BlockType_quote:
                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                        case BlockType_indent:
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_p:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                        case BlockType_p:
                            lines.push(b);
                            break;

                        case BlockType_quote:
                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank) {
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                lines.push(b);
                            }
                            break;

                        case BlockType_indent:
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_indent:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            // Start a code block
                            lines.push(b);
                            break;

                        case BlockType_p:
                        case BlockType_quote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank) {
                                // Start a code block after a paragraph
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                // indented line in paragraph, just continue it
                                b.RevertToPlain();
                                lines.push(b);
                            }
                            break;


                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_indent:
                        case BlockType_dd:
                        case BlockType_footnote:
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_quote:
                    if (currentBlockType != BlockType_quote) {
                        this.CollapseLines(blocks, lines);
                    }
                    lines.push(b);
                    break;

                case BlockType_ol_li:
                case BlockType_ul_li:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            lines.push(b);
                            break;

                        case BlockType_p:
                        case BlockType_quote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank || this.m_parentType == BlockType_ol_li || this.m_parentType == BlockType_ul_li || this.m_parentType == BlockType_dd) {
                                // List starting after blank line after paragraph or quote
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                // List's can't start in middle of a paragraph
                                b.RevertToPlain();
                                lines.push(b);
                            }
                            break;

                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                            if (b.blockType != currentBlockType) {
                                this.CollapseLines(blocks, lines);
                            }
                            lines.push(b);
                            break;

                        case BlockType_indent:
                            // List after code block
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_dd:
                case BlockType_footnote:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                        case BlockType_p:
                        case BlockType_dd:
                        case BlockType_footnote:
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;

                        default:
                            b.RevertToPlain();
                            lines.push(b);
                            break;
                    }
                    break;

                default:
                    this.CollapseLines(blocks, lines);
                    blocks.push(b);
                    break;
            }
        }

        this.CollapseLines(blocks, lines);

        if (this.m_Markdown.ExtraMode) {
            this.BuildDefinitionLists(blocks);
        }

        return blocks;
    }

    p.CreateBlock = function (lineStart) {
        var b;
        if (this.m_Markdown.m_SpareBlocks.length > 1) {
            b = this.m_Markdown.m_SpareBlocks.pop();
        }
        else {
            b = new Block();
        }
        b.lineStart = lineStart;
        return b;
    }

    p.FreeBlock = function (b) {
        this.m_Markdown.m_SpareBlocks.push(b);
    }

    p.FreeBlocks = function (blocks) {
        for (var i = 0; i < blocks.length; i++)
            this.m_Markdown.m_SpareBlocks.push(blocks[i]);
        blocks.length = 0;
    }

    p.RenderLines = function (lines) {
        var b = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            b.Append(l.buf.substr(l.contentStart, l.contentLen));
            b.Append('\n');
        }
        return b.ToString();
    }

    p.CollapseLines = function (blocks, lines) {
        // Remove trailing blank lines
        while (lines.length > 0 && lines[lines.length - 1].blockType == BlockType_Blank) {
            this.FreeBlock(lines.pop());
        }

        // Quit if empty
        if (lines.length == 0) {
            return;
        }


        // What sort of block?
        switch (lines[0].blockType) {
            case BlockType_p:
                // Collapse all lines into a single paragraph
                var para = this.CreateBlock(lines[0].lineStart);
                para.blockType = BlockType_p;
                para.buf = lines[0].buf;
                para.contentStart = lines[0].contentStart;
                para.set_contentEnd(lines[lines.length - 1].get_contentEnd());
                blocks.push(para);
                this.FreeBlocks(lines);
                break;

            case BlockType_quote:
                // Get the content
                var str = this.RenderLines(lines);

                // Create the new block processor
                var bp = new BlockProcessor(this.m_Markdown, this.m_bMarkdownInHtml);
                bp.m_parentType = BlockType_quote;

                // Create a new quote block
                var quote = this.CreateBlock(lines[0].lineStart);
                quote.blockType = BlockType_quote;
                quote.children = bp.Process(str);
                this.FreeBlocks(lines);
                blocks.push(quote);
                break;

            case BlockType_ol_li:
            case BlockType_ul_li:
                blocks.push(this.BuildList(lines));
                break;

            case BlockType_dd:
                if (blocks.length > 0) {
                    var prev = blocks[blocks.length - 1];
                    switch (prev.blockType) {
                        case BlockType_p:
                            prev.blockType = BlockType_dt;
                            break;

                        case BlockType_dd:
                            break;

                        default:
                            var wrapper = this.CreateBlock(prev.lineStart);
                            wrapper.blockType = BlockType_dt;
                            wrapper.children = [];
                            wrapper.children.push(prev);
                            blocks.pop();
                            blocks.push(wrapper);
                            break;
                    }

                }
                blocks.push(this.BuildDefinition(lines));
                break;

            case BlockType_footnote:
                this.m_Markdown.AddFootnote(this.BuildFootnote(lines));
                break;


            case BlockType_indent:
                var codeblock = this.CreateBlock(lines[0].lineStart);
                codeblock.blockType = BlockType_codeblock;
                codeblock.children = [];
                var firstline = lines[0].get_Content();
                if (firstline.substr(0, 2) == "{{" && firstline.substr(firstline.length - 2, 2) == "}}") {
                    codeblock.data = firstline.substr(2, firstline.length - 4);
                    lines.splice(0, 1);
                }
                for (var i = 0; i < lines.length; i++) {
                    codeblock.children.push(lines[i]);
                }
                blocks.push(codeblock);
                lines.length = 0;
                break;
        }
    }

    p.EvaluateLine = function (p) {
        // Create a block
        var b = this.CreateBlock(p.m_position);

        // Store line start
        b.buf = p.buf;

        // Scan the line
        b.contentStart = p.m_position;
        b.contentLen = -1;
        b.blockType = this.EvaluateLineInternal(p, b);


        // If end of line not returned, do it automatically
        if (b.contentLen < 0) {
            // Move to end of line
            p.SkipToEol();
            b.contentLen = p.m_position - b.contentStart;
        }

        // Setup line length
        b.lineLen = p.m_position - b.lineStart;

        // Next line
        p.SkipEol();

        // Create block
        return b;
    }

    p.EvaluateLineInternal = function (p, b) {
        // Empty line?
        if (p.eol())
            return BlockType_Blank;

        // Save start of line position
        var line_start = p.m_position;

        // ## Heading ##
        var ch = p.current();
        if (ch == '#') {
            // Work out heading level
            var level = 1;
            p.SkipForward(1);
            while (p.current() == '#') {
                level++;
                p.SkipForward(1);
            }

            // Limit of 6
            if (level > 6)
                level = 6;

            // Skip any whitespace
            p.SkipLinespace();

            // Save start position
            b.contentStart = p.m_position;

            // Jump to end
            p.SkipToEol();

            // In extra mode, check for a trailing HTML ID
            if (this.m_Markdown.ExtraMode && !this.m_Markdown.SafeMode) {
                var res = StripHtmlID(p.buf, b.contentStart, p.m_position);
                if (res != null) {
                    b.data = res.id;
                    p.m_position = res.end;
                }
            }

            // Rewind over trailing hashes
            while (p.m_position > b.contentStart && p.CharAtOffset(-1) == '#') {
                p.SkipForward(-1);
            }

            // Rewind over trailing spaces
            while (p.m_position > b.contentStart && is_whitespace(p.CharAtOffset(-1))) {
                p.SkipForward(-1);
            }

            // Create the heading block
            b.contentLen = p.m_position - b.contentStart;

            p.SkipToEol();
            return BlockType_h1 + (level - 1);
        }

        // Check for entire line as - or = for setext h1 and h2
        if (ch == '-' || ch == '=') {
            // Skip all matching characters
            var chType = ch;
            while (p.current() == chType) {
                p.SkipForward(1);
            }

            // Trailing whitespace allowed
            p.SkipLinespace();

            // If not at eol, must have found something other than setext header
            if (p.eol()) {
                return chType == '=' ? BlockType_post_h1 : BlockType_post_h2;
            }

            p.m_position = line_start;
        }

        if (this.m_Markdown.ExtraMode) {
            // MarkdownExtra Table row indicator?
            var spec = TableSpec_Parse(p);
            if (spec != null) {
                b.data = spec;
                return BlockType_table_spec;
            }

            p.m_position = line_start;


            // Fenced code blocks?
            if (ch == '~') {
                if (this.ProcessFencedCodeBlock(p, b))
                    return b.blockType;

                // Rewind
                p.m_position = line_start;
            }
        }

        // Scan the leading whitespace, remembering how many spaces and where the first tab is
        var tabPos = -1;
        var leadingSpaces = 0;
        while (!p.eol()) {
            if (p.current() == ' ') {
                if (tabPos < 0)
                    leadingSpaces++;
            }
            else if (p.current() == '\t') {
                if (tabPos < 0)
                    tabPos = p.m_position;
            }
            else {
                // Something else, get out
                break;
            }
            p.SkipForward(1);
        }

        // Blank line?
        if (p.eol()) {
            b.contentLen = 0;
            return BlockType_Blank;
        }

        // 4 leading spaces?
        if (leadingSpaces >= 4) {
            b.contentStart = line_start + 4;
            return BlockType_indent;
        }

        // Tab in the first 4 characters?
        if (tabPos >= 0 && tabPos - line_start < 4) {
            b.contentStart = tabPos + 1;
            return BlockType_indent;
        }

        // Treat start of line as after leading whitespace
        b.contentStart = p.m_position;

        // Get the next character
        ch = p.current();

        // Html block?
        if (ch == '<') {
            if (this.ScanHtml(p, b))
                return b.blockType;

            // Rewind
            p.m_position = b.contentStart;
        }

        // Block quotes start with '>' and have one space or one tab following
        if (ch == '>') {
            // Block quote followed by space
            if (is_linespace(p.CharAtOffset(1))) {
                // Skip it and create quote block
                p.SkipForward(2);
                b.contentStart = p.m_position;
                return BlockType_quote;
            }

            p.SkipForward(1);
            b.contentStart = p.m_position;
            return BlockType_quote;
        }

        // Horizontal rule - a line consisting of 3 or more '-', '_' or '*' with optional spaces and nothing else
        if (ch == '-' || ch == '_' || ch == '*') {
            var count = 0;
            while (!p.eol()) {
                var chType = p.current();
                if (p.current() == ch) {
                    count++;
                    p.SkipForward(1);
                    continue;
                }

                if (is_linespace(p.current())) {
                    p.SkipForward(1);
                    continue;
                }

                break;
            }

            if (p.eol() && count >= 3) {
                return BlockType_hr;
            }

            // Rewind
            p.m_position = b.contentStart;
        }

        // Abbreviation definition?
        if (this.m_Markdown.ExtraMode && ch == '*' && p.CharAtOffset(1) == '[') {
            p.SkipForward(2);
            p.SkipLinespace();

            p.Mark();
            while (!p.eol() && p.current() != ']') {
                p.SkipForward(1);
            }

            var abbr = Trim(p.Extract());
            if (p.current() == ']' && p.CharAtOffset(1) == ':' && abbr) {
                p.SkipForward(2);
                p.SkipLinespace();

                p.Mark();

                p.SkipToEol();

                var title = p.Extract();

                this.m_Markdown.AddAbbreviation(abbr, title);

                return BlockType_Blank;
            }

            p.m_position = b.contentStart;
        }


        // Unordered list
        if ((ch == '*' || ch == '+' || ch == '-') && is_linespace(p.CharAtOffset(1))) {
            // Skip it
            p.SkipForward(1);
            p.SkipLinespace();
            b.contentStart = p.m_position;
            return BlockType_ul_li;
        }

        // Definition
        if (ch == ':' && this.m_Markdown.ExtraMode && is_linespace(p.CharAtOffset(1))) {
            p.SkipForward(1);
            p.SkipLinespace();
            b.contentStart = p.m_position;
            return BlockType_dd;
        }

        // Ordered list
        if (is_digit(ch)) {
            // Ordered list?  A line starting with one or more digits, followed by a '.' and a space or tab

            // Skip all digits
            p.SkipForward(1);
            while (is_digit(p.current()))
                p.SkipForward(1);

            if (p.SkipChar('.') && p.SkipLinespace()) {
                b.contentStart = p.m_position;
                return BlockType_ol_li;
            }

            p.m_position = b.contentStart;
        }

        // Reference link definition?
        if (ch == '[') {
            // Footnote definition?
            if (this.m_Markdown.ExtraMode && p.CharAtOffset(1) == '^') {
                var savepos = p.m_position;

                p.SkipForward(2);

                var id = p.SkipFootnoteID();
                if (id != null && p.SkipChar(']') && p.SkipChar(':')) {
                    p.SkipLinespace();
                    b.contentStart = p.m_position;
                    b.data = id;
                    return BlockType_footnote;
                }

                p.m_position = savepos;
            }

            // Parse a link definition
            var l = ParseLinkDefinition(p, this.m_Markdown.ExtraMode);
            if (l != null) {
                this.m_Markdown.AddLinkDefinition(l);
                return BlockType_Blank;
            }
        }

        // Nothing special
        return BlockType_p;
    }

    var MarkdownInHtmlMode_NA = 0;
    var MarkdownInHtmlMode_Block = 1;
    var MarkdownInHtmlMode_Span = 2;
    var MarkdownInHtmlMode_Deep = 3;
    var MarkdownInHtmlMode_Off = 4;

    p.GetMarkdownMode = function (tag) {
        // Get the markdown attribute
        var md = tag.attributes["markdown"];
        if (md == undefined) {
            if (this.m_bMarkdownInHtml)
                return MarkdownInHtmlMode_Deep;
            else
                return MarkdownInHtmlMode_NA;
        }

        // Remove it
        delete tag.attributes["markdown"];

        // Parse mode
        if (md == "1")
            return (tag.get_Flags() & HtmlTagFlags_ContentAsSpan) != 0 ? MarkdownInHtmlMode_Span : MarkdownInHtmlMode_Block;

        if (md == "block")
            return MarkdownInHtmlMode_Block;

        if (md == "deep")
            return MarkdownInHtmlMode_Deep;

        if (md == "span")
            return MarkdownInHtmlMode_Span;

        return MarkdownInHtmlMode_Off;
    }

    p.ProcessMarkdownEnabledHtml = function (p, b, openingTag, mode) {
        // Current position is just after the opening tag

        // Scan until we find matching closing tag
        var inner_pos = p.m_position;
        var depth = 1;
        var bHasUnsafeContent = false;
        while (!p.eof()) {
            // Find next angle bracket
            if (!p.Find('<'))
                break;

            // Is it a html tag?
            var tagpos = p.m_position;
            var tag = ParseHtmlTag(p);
            if (tag == null) {
                // Nope, skip it
                p.SkipForward(1);
                continue;
            }

            // In markdown off mode, we need to check for unsafe tags
            if (this.m_Markdown.SafeMode && mode == MarkdownInHtmlMode_Off && !bHasUnsafeContent) {
                if (!tag.IsSafe())
                    bHasUnsafeContent = true;
            }

            // Ignore self closing tags
            if (tag.closed)
                continue;

            // Same tag?
            if (tag.name == openingTag.name) {
                if (tag.closing) {
                    depth--;
                    if (depth == 0) {
                        // End of tag?
                        p.SkipLinespace();
                        p.SkipEol();

                        b.blockType = BlockType_HtmlTag;
                        b.data = openingTag;
                        b.set_contentEnd(p.m_position);

                        switch (mode) {
                            case MarkdownInHtmlMode_Span:
                                var span = this.CreateBlock(inner_pos);
                                span.buf = p.buf;
                                span.blockType = BlockType_span;
                                span.contentStart = inner_pos;
                                span.contentLen = tagpos - inner_pos;

                                b.children = [];
                                b.children.push(span);
                                break;

                            case MarkdownInHtmlMode_Block:
                            case MarkdownInHtmlMode_Deep:
                                // Scan the internal content
                                var bp = new BlockProcessor(this.m_Markdown, mode == MarkdownInHtmlMode_Deep);
                                b.children = bp.ProcessRange(p.buf, inner_pos, tagpos - inner_pos);
                                break;

                            case MarkdownInHtmlMode_Off:
                                if (bHasUnsafeContent) {
                                    b.blockType = BlockType_unsafe_html;
                                    b.set_contentEnd(p.m_position);
                                }
                                else {
                                    var span = this.CreateBlock(inner_pos);
                                    span.buf = p.buf;
                                    span.blockType = BlockType_html;
                                    span.contentStart = inner_pos;
                                    span.contentLen = tagpos - inner_pos;

                                    b.children = [];
                                    b.children.push(span);
                                }
                                break;
                        }


                        return true;
                    }
                }
                else {
                    depth++;
                }
            }
        }

        // Missing closing tag(s).
        return false;
    }

    p.ScanHtml = function (p, b) {
        // Remember start of html
        var posStartPiece = p.m_position;

        // Parse a HTML tag
        var openingTag = ParseHtmlTag(p);
        if (openingTag == null)
            return false;

        // Closing tag?
        if (openingTag.closing)
            return false;

        // Safe mode?
        var bHasUnsafeContent = false;
        if (this.m_Markdown.SafeMode && !openingTag.IsSafe())
            bHasUnsafeContent = true;

        var flags = openingTag.get_Flags();

        // Is it a block level tag?
        if ((flags & HtmlTagFlags_Block) == 0)
            return false;

        // Closed tag, hr or comment?
        if ((flags & HtmlTagFlags_NoClosing) != 0 || openingTag.closed) {
            p.SkipLinespace();
            p.SkipEol();
            b.contentLen = p.m_position - b.contentStart;
            b.blockType = bHasUnsafeContent ? BlockType_unsafe_html : BlockType_html;
            return true;
        }

        // Can it also be an inline tag?
        if ((flags & HtmlTagFlags_Inline) != 0) {
            // Yes, opening tag must be on a line by itself
            p.SkipLinespace();
            if (!p.eol())
                return false;
        }

        // Head block extraction?
        var bHeadBlock = this.m_Markdown.ExtractHeadBlocks && openingTag.name.toLowerCase() == "head";
        var headStart = p.m_position;

        // Work out the markdown mode for this element
        if (!bHeadBlock && this.m_Markdown.ExtraMode) {
            var MarkdownMode = this.GetMarkdownMode(openingTag);
            if (MarkdownMode != MarkdownInHtmlMode_NA) {
                return this.ProcessMarkdownEnabledHtml(p, b, openingTag, MarkdownMode);
            }
        }

        var childBlocks = null;

        // Now capture everything up to the closing tag and put it all in a single HTML block
        var depth = 1;

        while (!p.eof()) {
            if (!p.Find('<'))
                break;

            // Save position of current tag
            var posStartCurrentTag = p.m_position;

            var tag = ParseHtmlTag(p);
            if (tag == null) {
                p.SkipForward(1);
                continue;
            }

            // Safe mode checks
            if (this.m_Markdown.SafeMode && !tag.IsSafe())
                bHasUnsafeContent = true;


            // Ignore self closing tags
            if (tag.closed)
                continue;

            // Markdown enabled content?
            if (!bHeadBlock && !tag.closing && this.m_Markdown.ExtraMode && !bHasUnsafeContent) {
                var MarkdownMode = this.GetMarkdownMode(tag);
                if (MarkdownMode != MarkdownInHtmlMode_NA) {
                    var markdownBlock = this.CreateBlock(posStartPiece);
                    if (this.ProcessMarkdownEnabledHtml(p, markdownBlock, tag, MarkdownMode)) {
                        if (childBlocks == null) {
                            childBlocks = [];
                        }

                        // Create a block for everything before the markdown tag
                        if (posStartCurrentTag > posStartPiece) {
                            var htmlBlock = this.CreateBlock(posStartPiece);
                            htmlBlock.buf = p.buf;
                            htmlBlock.blockType = BlockType_html;
                            htmlBlock.contentStart = posStartPiece;
                            htmlBlock.contentLen = posStartCurrentTag - posStartPiece;

                            childBlocks.push(htmlBlock);
                        }

                        // Add the markdown enabled child block
                        childBlocks.push(markdownBlock);

                        // Remember start of the next piece
                        posStartPiece = p.m_position;

                        continue;
                    }
                    else {
                        this.FreeBlock(markdownBlock);
                    }
                }
            }

            // Same tag?
            if (tag.name == openingTag.name && !tag.closed) {
                if (tag.closing) {
                    depth--;
                    if (depth == 0) {
                        // End of tag?
                        p.SkipLinespace();
                        p.SkipEol();

                        // If anything unsafe detected, just encode the whole block
                        if (bHasUnsafeContent) {
                            b.blockType = BlockType_unsafe_html;
                            b.set_contentEnd(p.m_position);
                            return true;
                        }

                        // Did we create any child blocks
                        if (childBlocks != null) {
                            // Create a block for the remainder
                            if (p.m_position > posStartPiece) {
                                var htmlBlock = this.CreateBlock(posStartPiece);
                                htmlBlock.buf = p.buf;
                                htmlBlock.blockType = BlockType_html;
                                htmlBlock.contentStart = posStartPiece;
                                htmlBlock.contentLen = p.m_position - posStartPiece;

                                childBlocks.push(htmlBlock);
                            }

                            // Return a composite block
                            b.blockType = BlockType_Composite;
                            b.set_contentEnd(p.m_position);
                            b.children = childBlocks;
                            return true;
                        }

                        // Extract the head block content
                        if (bHeadBlock) {
                            var content = p.buf.substr(headStart, posStartCurrentTag - headStart);
                            this.m_Markdown.HeadBlockContent = this.m_Markdown.HeadBlockContent + Trim(content) + "\n";
                            b.blockType = BlockType_html;
                            b.contentStart = p.position;
                            b.contentEnd = p.position;
                            b.lineStart = p.position;
                            return true;
                        }

                        // Straight html block
                        b.blockType = BlockType_html;
                        b.contentLen = p.m_position - b.contentStart;
                        return true;
                    }
                }
                else {
                    depth++;
                }
            }
        }

        // Missing closing tag(s).
        return BlockType_Blank;
    }

    /*
     * BuildList - build a single <ol> or <ul> list
     */
    p.BuildList = function (lines) {
        // What sort of list are we dealing with
        var listType = lines[0].blockType;

        // Preprocess
        // 1. Collapse all plain lines (ie: handle hardwrapped lines)
        // 2. Promote any unindented lines that have more leading space
        //    than the original list item to indented, including leading
        //    special chars
        var leadingSpace = lines[0].get_leadingSpaces();
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == listType)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }

            if (lines[i].blockType != BlockType_indent && lines[i].blockType != BlockType_Blank) {
                var thisLeadingSpace = lines[i].get_leadingSpaces();
                if (thisLeadingSpace > leadingSpace) {
                    // Change line to indented, including original leading chars
                    // (eg: '* ', '>', '1.' etc...)
                    lines[i].blockType = BlockType_indent;
                    var saveend = lines[i].get_contentEnd();
                    lines[i].contentStart = lines[i].lineStart + thisLeadingSpace;
                    lines[i].set_contentEnd(saveend);
                }
            }
        }


        // Create the wrapping list item
        var List = this.CreateBlock(0);
        List.blockType = (listType == BlockType_ul_li ? BlockType_ul : BlockType_ol);
        List.children = [];

        // Process all lines in the range
        for (var i = 0; i < lines.length; i++) {
            // Find start of item, including leading blanks
            var start_of_li = i;
            while (start_of_li > 0 && lines[start_of_li - 1].blockType == BlockType_Blank)
                start_of_li--;

            // Find end of the item, including trailing blanks
            var end_of_li = i;
            while (end_of_li < lines.length - 1 && lines[end_of_li + 1].blockType != listType)
                end_of_li++;

            // Is this a simple or complex list item?
            if (start_of_li == end_of_li) {
                // It's a simple, single line item item
                List.children.push(this.CreateBlock().CopyFrom(lines[i]));
            }
            else {
                // Build a new string containing all child items
                var bAnyBlanks = false;
                var sb = this.m_Markdown.GetStringBuilder();
                for (var j = start_of_li; j <= end_of_li; j++) {
                    var l = lines[j];
                    sb.Append(l.buf.substr(l.contentStart, l.contentLen));
                    sb.Append('\n');

                    if (lines[j].blockType == BlockType_Blank) {
                        bAnyBlanks = true;
                    }
                }

                // Create the item and process child blocks
                var item = this.CreateBlock();
                item.blockType = BlockType_li;
                item.lineStart = lines[start_of_li].lineStart;
                var bp = new BlockProcessor(this.m_Markdown);
                bp.m_parentType = listType;
                item.children = bp.Process(sb.ToString());

                // If no blank lines, change all contained paragraphs to plain text
                if (!bAnyBlanks) {
                    for (var j = 0; j < item.children.length; j++) {
                        var child = item.children[j];
                        if (child.blockType == BlockType_p) {
                            child.blockType = BlockType_span;
                        }
                    }
                }

                // Add the complex item
                List.children.push(item);
            }

            // Continue processing from end of li
            i = end_of_li;
        }

        List.lineStart = List.children[0].lineStart;

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return List;
    }

    /*
     * BuildDefinition - build a single <dd> item
     */
    p.BuildDefinition = function (lines) {
        // Collapse all plain lines (ie: handle hardwrapped lines)
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == BlockType_dd)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }
        }

        // Single line definition
        var bPreceededByBlank = lines[0].data;
        if (lines.length == 1 && !bPreceededByBlank) {
            var ret = lines[0];
            lines.length = 0;
            return ret;
        }

        // Build a new string containing all child items
        var sb = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            sb.Append(l.buf.substr(l.contentStart, l.contentLen));
            sb.Append('\n');
        }

        // Create the item and process child blocks
        var item = this.CreateBlock(lines[0].lineStart);
        item.blockType = BlockType_dd;
        var bp = new BlockProcessor(this.m_Markdown);
        bp.m_parentType = BlockType_dd;
        item.children = bp.Process(sb.ToString());

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return item;
    }

    p.BuildDefinitionLists = function (blocks) {
        var currentList = null;
        for (var i = 0; i < blocks.length; i++) {
            switch (blocks[i].blockType) {
                case BlockType_dt:
                case BlockType_dd:
                    if (currentList == null) {
                        currentList = this.CreateBlock(blocks[i].lineStart);
                        currentList.blockType = BlockType_dl;
                        currentList.children = [];
                        blocks.splice(i, 0, currentList);
                        i++;
                    }

                    currentList.children.push(blocks[i]);
                    blocks.splice(i, 1);
                    i--;
                    break;

                default:
                    currentList = null;
                    break;
            }
        }
    }


    p.BuildFootnote = function (lines) {
        // Collapse all plain lines (ie: handle hardwrapped lines)
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == BlockType_footnote)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }
        }

        // Build a new string containing all child items
        var sb = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            sb.Append(l.buf.substr(l.contentStart, l.contentLen));
            sb.Append('\n');
        }

        var bp = new BlockProcessor(this.m_Markdown);
        bp.m_parentType = BlockType_footnote;

        // Create the item and process child blocks
        var item = this.CreateBlock(lines[0].lineStart);
        item.blockType = BlockType_footnote;
        item.data = lines[0].data;
        item.children = bp.Process(sb.ToString());

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return item;
    }


    p.ProcessFencedCodeBlock = function (p, b) {
        var fenceStart = p.m_position;

        // Extract the fence
        p.Mark();
        while (p.current() == '~')
            p.SkipForward(1);
        var strFence = p.Extract();

        // Must be at least 3 long
        if (strFence.length < 3)
            return false;

        // Rest of line must be blank
        p.SkipLinespace();
        if (!p.eol())
            return false;

        // Skip the eol and remember start of code
        p.SkipEol();
        var startCode = p.m_position;

        // Find the end fence
        if (!p.Find(strFence))
            return false;

        // Character before must be a eol char
        if (!is_lineend(p.CharAtOffset(-1)))
            return false;

        var endCode = p.m_position;

        // Skip the fence
        p.SkipForward(strFence.length);

        // Whitespace allowed at end
        p.SkipLinespace();
        if (!p.eol())
            return false;

        // Create the code block
        b.blockType = BlockType_codeblock;
        b.children = [];

        // Remove the trailing line end
        // (Javascript version has already normalized line ends to \n)
        endCode--;

        // Create the child block with the entire content
        var child = this.CreateBlock(fenceStart);
        child.blockType = BlockType_indent;
        child.buf = p.buf;
        child.contentStart = startCode;
        child.contentLen = endCode - startCode;
        b.children.push(child);

        // Done
        return true;
    }


    var ColumnAlignment_NA = 0;
    var ColumnAlignment_Left = 1;
    var ColumnAlignment_Right = 2;
    var ColumnAlignment_Center = 3;

    function TableSpec() {
        this.m_Columns = [];
        this.m_Headers = null;
        this.m_Rows = [];
    }

    p = TableSpec.prototype;

    p.LeadingBar = false;
    p.TrailingBar = false;

    p.ParseRow = function (p) {
        p.SkipLinespace();

        if (p.eol())
            return null; 	// Blank line ends the table

        var bAnyBars = this.LeadingBar;
        if (this.LeadingBar && !p.SkipChar('|')) {
            bAnyBars = true;
            return null;
        }

        // Create the row
        var row = [];

        // Parse all columns except the last

        while (!p.eol()) {
            // Find the next vertical bar
            p.Mark();
            while (!p.eol() && p.current() != '|')
                p.SkipForward(1);

            row.push(Trim(p.Extract()));

            bAnyBars |= p.SkipChar('|');
        }

        // Require at least one bar to continue the table
        if (!bAnyBars)
            return null;

        // Add missing columns
        while (row.length < this.m_Columns.length) {
            row.push("&nbsp;");
        }

        p.SkipEol();
        return row;
    }

    p.RenderRow = function (m, b, row, type) {
        for (var i = 0; i < row.length; i++) {
            b.Append("\t<");
            b.Append(type);

            if (i < this.m_Columns.length) {
                switch (this.m_Columns[i]) {
                    case ColumnAlignment_Left:
                        b.Append(" align=\"left\"");
                        break;
                    case ColumnAlignment_Right:
                        b.Append(" align=\"right\"");
                        break;
                    case ColumnAlignment_Center:
                        b.Append(" align=\"center\"");
                        break;
                }
            }

            b.Append(">");
            m.m_SpanFormatter.Format2(b, row[i]);
            b.Append("</");
            b.Append(type);
            b.Append(">\n");
        }
    }

    p.Render = function (m, b) {
        b.Append("<table>\n");
        if (this.m_Headers != null) {
            b.Append("<thead>\n<tr>\n");
            this.RenderRow(m, b, this.m_Headers, "th");
            b.Append("</tr>\n</thead>\n");
        }

        b.Append("<tbody>\n");
        for (var i = 0; i < this.m_Rows.length; i++) {
            var row = this.m_Rows[i];
            b.Append("<tr>\n");
            this.RenderRow(m, b, row, "td");
            b.Append("</tr>\n");
        }
        b.Append("</tbody>\n");

        b.Append("</table>\n");
    }

    function TableSpec_Parse(p) {
        // Leading line space allowed
        p.SkipLinespace();

        // Quick check for typical case
        if (p.current() != '|' && p.current() != ':' && p.current() != '-')
            return null;

        // Don't create the spec until it at least looks like one
        var spec = null;

        // Leading bar, looks like a table spec
        if (p.SkipChar('|')) {
            spec = new TableSpec();
            spec.LeadingBar = true;
        }


        // Process all columns
        while (true) {
            // Parse column spec
            p.SkipLinespace();

            // Must have something in the spec
            if (p.current() == '|')
                return null;

            var AlignLeft = p.SkipChar(':');
            while (p.current() == '-')
                p.SkipForward(1);
            var AlignRight = p.SkipChar(':');
            p.SkipLinespace();

            // Work out column alignment
            var col = ColumnAlignment_NA;
            if (AlignLeft && AlignRight)
                col = ColumnAlignment_Center;
            else if (AlignLeft)
                col = ColumnAlignment_Left;
            else if (AlignRight)
                col = ColumnAlignment_Right;

            if (p.eol()) {
                // Not a spec?
                if (spec == null)
                    return null;

                // Add the final spec?
                spec.m_Columns.push(col);
                return spec;
            }

            // We expect a vertical bar
            if (!p.SkipChar('|'))
                return null;

            // Create the table spec
            if (spec == null)
                spec = new TableSpec();

            // Add the column
            spec.m_Columns.push(col);

            // Check for trailing vertical bar
            p.SkipLinespace();
            if (p.eol()) {
                spec.TrailingBar = true;
                return spec;
            }

            // Next column
        }
    }

    // Exposed stuff
    this.Markdown = Markdown;
    this.HtmlTag = HtmlTag;
} ();


//
//! MarkdownDeep - http://www.toptensoftware.com/markdowndeep
//! Copyright (C) 2010-2011 Topten Software
//
//   Licensed under the Apache License, Version 2.0 (the "License"); you may not use this product except in
//   compliance with the License. You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software distributed under the License is
//   distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and limitations under the License.
//

/*
 Usage:

 // 1. Create the editor an bind to a text area, output div and an optional source view div
 - text area: the text area that user types to.
 - output div: a div where the transformed html will be displayed
 - source view view: an optional div where a "source" view of the rendered html will be placed

 var editor=new MarkdownDeepEditor.Editor(textarea_element, output_div, source_div)

 // 2. Optionally set options

 editor.disableShortCutKeys=true;    // Disable Ctrl+B, Ctrl+I etc...
 editor.disableAutoIndent=true;      // Disable auto indent on enter key
 editor.disableTabHandling=true;     // Disable tab/shift+tab for indent

 // 3. Optionally install hooks

 editor.onPreTransform=function(editor, markdown) {}
 editor.onPostTransform=function(editor, html) {}
 editor.onPostUpdateDom=function(editor) {}

 // 4. Optionally create a toolbar/UI that calls editor.InvokeCommand(cmd) where cmd is one of:

 - "undo",
 - "redo",
 - "bold",
 - "italic",
 - "heading",
 - "code",
 - "ullist",
 - "ollist",
 - "indent",
 - "outdent",
 - "link",
 - "img",
 - "hr",
 - "h0",
 - "h1",
 - "h2",
 - "h3",
 - "h4",
 - "h5",
 - "h6"

 eg: editor.InvokeCommand("heading") to toggle heading style of selection

 */

var MarkdownDeepEditor=new function(){

    // private:priv.
    // private:.m_*
    // private:.m_listType
    // private:.m_prefixLen


    var ie=false;

    // Various keycodes
    var keycode_tab = 9;
    var keycode_enter = 13;
    var keycode_pgup = 33;
    var keycode_pgdn = 34;
    var keycode_home = 36;
    var keycode_end = 35;
    var keycode_left = 37;
    var keycode_right = 39;
    var keycode_up = 38;
    var keycode_down = 40;
    var keycode_backspace = 8;
    var keycode_delete = 46;

    // Undo modes for the undo stack
    var undomode_unknown = 0;
    var undomode_text = 1;
    var undomode_erase = 2;
    var undomode_navigate = 3;
    var undomode_whitespace = 4;

    // Shortcut keys Ctrl+key
    var shortcut_keys={
        "Z": "undo",
        "Y": "redo",
        "B": "bold",
        "I": "italic",
        "H": "heading",
        "K": "code",
        "U": "ullist",
        "O": "ollist",
        "Q": "indent",
        "E": "outdent",
        "L": "link",
        "G": "img",
        "R": "hr",
        "0": "h0",
        "1": "h1",
        "2": "h2",
        "3": "h3",
        "4": "h4",
        "5": "h5",
        "6": "h6"
    }

    function starts_with(str, match)
    {
        return str.substr(0, match.length)==match;
    }

    function ends_with(str, match)
    {
        return str.substr(-match.length)==match;
    }

    function is_whitespace(ch)
    {
        return (ch==' ' || ch=='\t' || ch=='\r' || ch=='\n');
    }

    function is_crlf(ch)
    {
        return (ch=='\r' || ch=='\n');
    }

    function trim(str)
    {
        var i=0;
        var l=str.length;

        while (i<l && is_whitespace(str.charAt(i)))
            i++;
        while (l-1>i && is_whitespace(str.charAt(l-1)))
            l--;

        return str.substr(i, l-i);
    }


    // Helper for binding events
    function BindEvent(obj, event, handler)
    {
        if (obj.addEventListener)
        {
            obj.addEventListener(event, handler, false);
        }
        else if (obj.attachEvent)
        {
            obj.attachEvent("on"+event, handler);
        }
    }

    // Helper for unbinding events
    function UnbindEvent(obj, event, handler)
    {
        if (obj.removeEventListener)
        {
            obj.removeEventListener(event, handler, false);
        }
        else if (obj.detachEvent)
        {
            obj.detachEvent("on"+event, handler);
        }
    }

    function PreventEventDefault(event)
    {
        if (event.preventDefault)
        {
            event.preventDefault();
        }
        if (event.cancelBubble!==undefined)
        {
            event.cancelBubble=true;
            event.keyCode=0;
            event.returnValue=false;
        }
        return false;
    }

    function offsetToRangeCharacterMove(el, offset)
    {
        return offset - (el.value.slice(0, offset).split("\r\n").length - 1);
    }

    // EditorState represents the initial and final state of an edit
    function EditorState()
    {
    }

    priv=EditorState.prototype;

    priv.InitFromTextArea=function(textarea)
    {
        this.m_textarea=textarea;
        if (ie)
        {
            var sel=document.selection.createRange();
            var temp=sel.duplicate();
            temp.moveToElementText(textarea);
            var basepos=-temp.moveStart('character', -10000000);

            this.m_selectionStart = -sel.moveStart('character', -10000000)-basepos;
            this.m_selectionEnd = -sel.moveEnd('character', -10000000)-basepos;
            this.m_text=textarea.value.replace(/\r\n/gm,"\n");
        }
        else
        {
            this.m_selectionStart = textarea.selectionStart;
            this.m_selectionEnd = textarea.selectionEnd;
            this.m_text=textarea.value;
        }
    }

    priv.Duplicate=function()
    {
        var other=new EditorState();
        other.m_textarea=this.m_textarea;
        other.m_selectionEnd=this.m_selectionEnd;
        other.m_selectionStart=this.m_selectionStart;
        other.m_text=this.m_text;
        return other;
    }

    priv.Apply=function()
    {
        if (ie)
        {
            this.m_textarea.value=this.m_text;
            this.m_textarea.focus();
            var r=this.m_textarea.createTextRange();
            r.collapse(true);
            r.moveEnd("character", this.m_selectionEnd);
            r.moveStart("character", this.m_selectionStart);
            r.select();
        }
        else
        {
            // Set the new text
            var scrollTop=this.m_textarea.scrollTop;
            this.m_textarea.value=this.m_text;
            this.m_textarea.focus();
            this.m_textarea.setSelectionRange(this.m_selectionStart, this.m_selectionEnd);
            this.m_textarea.scrollTop=scrollTop;
        }
    }

    priv.ReplaceSelection=function(str)
    {
        this.m_text=this.m_text.substr(0, this.m_selectionStart) + str + this.m_text.substr(this.m_selectionEnd);
        this.m_selectionEnd=this.m_selectionStart + str.length;
    }

    function adjust_pos(pos2, editpos, del, ins)
    {
        if (pos2<editpos)
            return pos2;
        return pos2<editpos+del ? editpos : pos2 + ins - del;
    }

    priv.ReplaceAt=function(pos, len, str)
    {
        this.m_text=this.m_text.substr(0, pos) + str + this.m_text.substr(pos+len);
        this.m_selectionStart=adjust_pos(this.m_selectionStart, pos, len, str.length);
        this.m_selectionEnd=adjust_pos(this.m_selectionEnd, pos, len, str.length);
    }

    priv.getSelectedText=function()
    {
        return this.m_text.substr(this.m_selectionStart, this.m_selectionEnd-this.m_selectionStart);
    }

    priv.InflateSelection=function(ds, de)
    {
        this.m_selectionEnd+=de;
        this.m_selectionStart-=ds;
    }

    priv.PreceededBy=function(str)
    {
        return this.m_selectionStart >= str.length && this.m_text.substr(this.m_selectionStart-str.length, str.length)==str;
    }

    priv.FollowedBy=function(str)
    {
        return this.m_text.substr(this.m_selectionEnd, str.length)==str;
    }

    priv.TrimSelection=function()
    {
        while (is_whitespace(this.m_text.charAt(this.m_selectionStart)))
            this.m_selectionStart++;
        while (this.m_selectionEnd>this.m_selectionStart && is_whitespace(this.m_text.charAt(this.m_selectionEnd-1)))
            this.m_selectionEnd--;
    }

    priv.IsStartOfLine=function(pos)
    {
        return pos==0 || is_crlf(this.m_text.charAt(pos-1));
    }

    priv.FindStartOfLine=function(pos)
    {
        // Move start of selection back to line start
        while (pos>0 && !is_crlf(this.m_text.charAt(pos-1)))
        {
            pos--;
        }
        return pos;
    }

    priv.FindEndOfLine=function(pos)
    {
        while (pos<this.m_text.length && !is_crlf(this.m_text.charAt(pos)))
        {
            pos++;
        }
        return pos;
    }

    priv.FindNextLine=function(pos)
    {
        return this.SkipEol(this.FindEndOfLine(pos));
    }

    priv.SkipWhiteSpace=function(pos)
    {
        while (pos<this.m_text.length && is_whitespace(this.m_text.charAt(pos)))
            pos++;
        return pos;
    }

    priv.SkipEol=function(pos)
    {
        if (this.m_text.substr(pos, 2)=="\r\n")
            return pos+2;
        if (is_crlf(this.m_text.charAt(pos)))
            return pos+1;
        return pos;
    }

    priv.SkipPreceedingEol=function(pos)
    {
        if (pos>2 && this.m_text.substr(pos-2, 2)=="\r\n")
            return pos-2;
        if (pos>1 && is_crlf(this.m_text.charAt(pos-1)))
            return pos-1;
        return pos;
    }

    priv.SelectWholeLines=function()
    {
        // Move selection to start of line
        this.m_selectionStart=this.FindStartOfLine(this.m_selectionStart);

        // Move end of selection to start of the next line
        if (!this.IsStartOfLine(this.m_selectionEnd))
        {
            this.m_selectionEnd=this.SkipEol(this.FindEndOfLine(this.m_selectionEnd));
        }
    }

    priv.SkipPreceedingWhiteSpace=function(pos)
    {
        while (pos>0 && is_whitespace(this.m_text.charAt(pos-1)))
        {
            pos--;
        }
        return pos;
    }

    priv.SkipFollowingWhiteSpace=function(pos)
    {
        while (is_whitespace(this.m_text.charAt(pos)))
        {
            pos++;
        }
        return pos;
    }
    priv.SelectSurroundingWhiteSpace=function()
    {
        this.m_selectionStart=this.SkipPreceedingWhiteSpace(this.m_selectionStart);
        this.m_selectionEnd=this.SkipFollowingWhiteSpace(this.m_selectionEnd);
    }

    priv.CheckSimpleSelection=function()
    {
        var text=this.getSelectedText();
        var m=text.match(/\n[ \t\r]*\n/);

        if (m)
        {
            alert("Please make a selection that doesn't include a paragraph break");
            return false;
        }

        return true;
    }

    // Check if line is completely blank
    priv.IsBlankLine=function(p)
    {
        var len=this.m_text.length;
        for (var i=p; i<len; i++)
        {
            var ch=this.m_text[i];
            if (is_crlf(ch))
                return true;
            if (!is_whitespace(this.m_text.charAt(i)))
                return false;
        }

        return true;
    }

    priv.FindStartOfParagraph=function(pos)
    {
        var savepos=pos;

        // Move to start of first line
        pos=this.FindStartOfLine(pos);

        if (this.IsBlankLine(pos))
            return pos;

        // Move to first line after blank line
        while (pos>0)
        {
            var p=this.FindStartOfLine(this.SkipPreceedingEol(pos));
            if (p==0)
                break;
            if (this.IsBlankLine(p))
                break;
            pos=p;
        }

        // Is it a list?
        if (this.DetectListType(pos).m_prefixLen!=0)
        {
            // Do it again, but stop at line with list prefix
            pos=this.FindStartOfLine(savepos);

            // Move to first line after blank line
            while (pos>0)
            {
                if (this.DetectListType(pos).m_prefixLen!=0)
                    return pos;

                // go to line before
                pos=this.FindStartOfLine(this.SkipPreceedingEol(pos));
            }
        }

        return pos;
    }

    priv.FindEndOfParagraph=function(pos)
    {
        // Skip all lines that aren't blank
        while (pos<this.m_text.length)
        {
            if (this.IsBlankLine(pos))
                break;

            pos=this.FindNextLine(pos);
        }

        return pos;
    }

    // Select the paragraph
    priv.SelectParagraph=function()
    {
        this.m_selectionStart=this.FindStartOfParagraph(this.m_selectionStart);
        this.m_selectionEnd=this.FindEndOfParagraph(this.m_selectionStart);
    }

    // Starting at position pos, return the list type
    // returns { m_listType, m_prefixLen }
    priv.DetectListType=function(pos)
    {
        var prefix=this.m_text.substr(pos, 10);
        var m=prefix.match(/^\s{0,3}(\*|\d+\.)(?:\ |\t)*/);
        if (!m)
            return {m_listType:"", m_prefixLen:0};

        if (m[1]=='*')
            return {m_listType:"*", m_prefixLen:m[0].length};
        else
            return {m_listType:"1", m_prefixLen:m[0].length};
    }




    // Editor
    function Editor(textarea, div_html)
    {
        // Is it IE?
        if (!textarea.setSelectionRange)
        {
            ie=true;
        }

        // Initialize
        this.m_lastContent=null;
        this.m_undoStack=[];
        this.m_undoPos=0;
        this.m_undoMode=undomode_navigate;
        this.Markdown=new MarkdownDeep.Markdown();
        this.Markdown.SafeMode=false;
        this.Markdown.ExtraMode=true;
        this.Markdown.NewWindowForLocalLinks=true;
        this.Markdown.NewWindowForExternalLinks=true;

        // Store DOM elements
        this.m_textarea=textarea;
        this.m_divHtml=div_html;

        // Bind events
        var ed=this;
        BindEvent(textarea, "keyup", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "keydown", function(e){return ed.onKeyDown(e);});
        BindEvent(textarea, "paste", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "input", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "mousedown", function(){ed.SetUndoMode(undomode_navigate);});

        // Do initial update
        this.onMarkdownChanged();
    }

    var priv=Editor.prototype;
    var pub=Editor.prototype;


    priv.onKeyDown=function(e)
    {
        var newMode=null;
        var retv=true;

        // Normal keys only
        if(e.ctrlKey || e.metaKey)
        {
            var key=String.fromCharCode(e.charCode||e.keyCode);

            // Built in short cut key?
            if (!this.disableShortCutKeys && shortcut_keys[key]!=undefined)
            {
                this.InvokeCommand(shortcut_keys[key]);
                return PreventEventDefault(e);
            }

            // Standard keys
            switch (key)
            {
                case "V":   // Paste
                    newMode=undomode_text;
                    break;

                case "X":   // Cut
                    newMode=undomode_erase;
                    break;
            }
        }
        else
        {
            switch (e.keyCode)
            {
                case keycode_tab:
                    if (!this.disableTabHandling)
                    {
                        this.InvokeCommand(e.shiftKey ? "untab" : "tab");
                        return PreventEventDefault(e);
                    }
                    else
                    {
                        newMode=undomode_text;
                    }
                    break;


                case keycode_left:
                case keycode_right:
                case keycode_up:
                case keycode_down:
                case keycode_home:
                case keycode_end:
                case keycode_pgup:
                case keycode_pgdn:
                    // Navigation mode
                    newMode=undomode_navigate;
                    break;

                case keycode_backspace:
                case keycode_delete:
                    // Delete mode
                    newMode=undomode_erase;
                    break;

                case keycode_enter:
                    // New lines mode
                    newMode=undomode_whitespace;
                    break;

                default:
                    // Text mode
                    newMode=undomode_text;
            }
        }

        if (newMode!=null)
            this.SetUndoMode(newMode);

        // Special handling for enter key
        if (!this.disableAutoIndent)
        {
            if (e.keyCode==keycode_enter && (!ie || e.ctrlKey))
            {
                this.IndentNewLine();
            }
        }
    }

    priv.SetUndoMode=function(newMode)
    {
        // Same mode?
        if (this.m_undoMode==newMode)
            return;

        // Enter new mode, after capturing current state
        this.m_undoMode=newMode;

        // Capture undo state
        this.CaptureUndoState();
    }


    priv.CaptureUndoState=function()
    {
        // Store a copy on the undo stack
        var state=new EditorState();
        state.InitFromTextArea(this.m_textarea);
        this.m_undoStack.splice(this.m_undoPos, this.m_undoStack.length-this.m_undoPos, state);
        this.m_undoPos=this.m_undoStack.length;
    }

    priv.onMarkdownChanged=function(bCreateUndoUnit)
    {
        // Get the markdown, see if it's changed
        var new_content=this.m_textarea.value;
        if (new_content===this.m_lastContent && this.m_lastContent!==null)
            return;

        // Call pre hook
        if (this.onPreTransform)
            this.onPreTransform(this, new_content);

        // Transform
        var output=this.Markdown.Transform(new_content);

        // Call post hook
        if (this.onPostTransform)
            this.onPostTransform(this, output);

        // Update the DOM
        if (this.m_divHtml)
            this.m_divHtml.innerHTML=output;
        /*
         if (this.m_divSource)
         {
         this.m_divSource.innerHTML="";
         this.m_divSource.appendChild(document.createTextNode(output));
         }
         */

        // Call post update dom handler
        if (this.onPostUpdateDom)
            this.onPostUpdateDom(this);

        // Save previous content
        this.m_lastContent=new_content;
    }

    // Public method, should be called by client code if any of the MarkdownDeep
    // transform options have changed
    pub.onOptionsChanged=function()
    {
        this.m_lastContent=null;
        this.onMarkdownChanged();
    }

    pub.cmd_undo=function()
    {
        if (this.m_undoPos > 0)
        {
            // Capture current state at end of undo buffer.
            if (this.m_undoPos==this.m_undoStack.length)
            {
                this.CaptureUndoState();
                this.m_undoPos--;
            }

            this.m_undoPos--;
            this.m_undoStack[this.m_undoPos].Apply();
            this.m_undoMode=undomode_unknown;

            // Update markdown rendering
            this.onMarkdownChanged();
        }
    }

    pub.cmd_redo=function()
    {
        if (this.m_undoPos+1 < this.m_undoStack.length)
        {
            this.m_undoPos++;
            this.m_undoStack[this.m_undoPos].Apply();
            this.m_undoMode=undomode_unknown;

            // Update markdown rendering
            this.onMarkdownChanged();

            // We're back at the current state
            if (this.m_undoPos==this.m_undoStack.length-1)
            {
                this.m_undoStack.pop();
            }
        }
    }

    priv.setHeadingLevel=function(state, headingLevel)
    {
        // Select the entire heading
        state.SelectParagraph();
        state.SelectSurroundingWhiteSpace();

        // Get the selected text
        var text=state.getSelectedText();

        // Trim all whitespace
        text=trim(text);

        var currentHeadingLevel=0;
        var m=text.match(/^(\#+)(.*?)(\#+)?$/);
        if (m)
        {
            text=trim(m[2]);
            currentHeadingLevel=m[1].length;
        }
        else
        {
            m=text.match(/^(.*?)(?:\r\n|\n|\r)\s*(\-*|\=*)$/);
            if (m)
            {
                text=trim(m[1]);
                currentHeadingLevel=m[2].charAt(0)=="=" ? 1 : 0;
            }
            else
            {
                // Remove blank lines
                text=text.replace(/(\r\n|\n|\r)/gm,"");
                currentHeadingLevel=0;
            }
        }

        if (headingLevel==-1)
            headingLevel=(currentHeadingLevel+1) % 4;

        // Removing a heading
        var selOffset=0;
        var selLen=0;
        if (headingLevel==0)
        {
            // Deleting selection
            if (text=="Heading")
            {
                state.ReplaceSelection("");
                return true;
            }

            selLen=text.length;
            selOffset=0;
        }
        else
        {
            if (text=="")
                text="Heading";

            selOffset=headingLevel+1;
            selLen=text.length;

            var h="";
            for (var i=0; i<headingLevel; i++)
                h+="#";

            text=h + " " + text + " " + h;

        }

        // Require blank after
        text+="\n\n";

        if (state.m_selectionStart!=0)
        {
            text="\n\n" + text;
            selOffset+=2;
        }

        // Replace text
        state.ReplaceSelection(text);

        // Update selection
        state.m_selectionStart+=selOffset;
        state.m_selectionEnd=state.m_selectionStart + selLen;

        return true;
    }

    pub.cmd_heading=function(state)
    {
        return this.setHeadingLevel(state, -1);
    }

    pub.cmd_h0=function(state)
    {
        return this.setHeadingLevel(state, 0);
    }

    pub.cmd_h1=function(state)
    {
        return this.setHeadingLevel(state, 1);
    }

    pub.cmd_h2=function(state)
    {
        return this.setHeadingLevel(state, 2);
    }

    pub.cmd_h3=function(state)
    {
        return this.setHeadingLevel(state, 3);
    }

    pub.cmd_h4=function(state)
    {
        return this.setHeadingLevel(state, 4);
    }

    pub.cmd_h5=function(state)
    {
        return this.setHeadingLevel(state, 5);
    }

    pub.cmd_h6=function(state)
    {
        return this.setHeadingLevel(state, 6);
    }

    priv.IndentCodeBlock=function(state, indent)
    {
        // Make sure whole lines are selected
        state.SelectWholeLines();

        // Get the text, split into lines
        var lines=state.getSelectedText().split("\n");

        // Convert leading tabs to spaces
        for (var i=0; i<lines.length; i++)
        {
            if (lines[i].charAt(0)=="\t")
            {
                var newLead="";
                var p=0;
                while (lines[i].charAt(p)=="\t")
                {
                    newLead+="    ";
                    p++;
                }

                var newLine=newLead + lines[i].substr(p);
                lines.splice(i, 1, newLine);
            }
        }

        // Toggle indent/unindent?
        if (indent===null)
        {
            var i;
            for (i=0; i<lines.length; i++)
            {
                // Blank lines are allowed
                if (trim(lines[i])=="")
                    continue;

                // Convert leading tabs to spaces
                if (lines[i].charAt(0)=="\t")
                {
                    var newLead="";
                    var p=0;
                    while (lines[i].charAt(p)=="\t")
                    {
                        newLead+="    ";
                        p++;
                    }

                    var newLine=newLead + lines[i].substr(i);
                    lines.splice(i, 1, newLine);
                }

                // Tabbed line
                if (!starts_with(lines[i], "    "))
                    break;
            }

            // Are we adding or removing indent
            indent=i!=lines.length;
        }

        // Apply the changes
        for (var i=0; i<lines.length; i++)
        {
            // Blank line?
            if (trim(lines[i])=="")
                continue;

            // Tabbed line
            var newline=lines[i];
            if (indent)
            {
                newline="    " + lines[i];
            }
            else
            {
                if (starts_with(lines[i], "\t"))
                    newline=lines[i].substr(1);
                else if (starts_with(lines[i], "    "))
                    newline=lines[i].substr(4);
            }

            lines.splice(i, 1, newline);
        }

        // Replace
        state.ReplaceSelection(lines.join("\n"));
    }

    // Code
    pub.cmd_code=function(state)
    {
        // Cursor on a blank line?
        if (state.m_selectionStart==state.m_selectionEnd)
        {
            var line=state.FindStartOfLine(state.m_selectionStart);
            if (state.IsBlankLine(line))
            {
                state.SelectSurroundingWhiteSpace();
                state.ReplaceSelection("\n\n    Code\n\n");
                state.m_selectionStart+=6;
                state.m_selectionEnd=state.m_selectionStart + 4;
                return true;
            }
        }

        // If the current text is preceeded by a non-whitespace, or followed by a non-whitespace
        // then do an inline code
        if (state.getSelectedText().indexOf("\n")<0)
        {
            // Expand selection to include leading/trailing stars
            state.TrimSelection();
            if (state.PreceededBy("`"))
                state.m_selectionStart--;
            if (state.FollowedBy("`"))
                state.m_selectionEnd++;
            return this.bold_or_italic(state, "`");
        }

        this.IndentCodeBlock(state, null);
        return true;
    }

    pub.cmd_tab=function(state)
    {
        if (state.getSelectedText().indexOf("\n")>0)
        {
            this.IndentCodeBlock(state, true);
        }
        else
        {
            // If we're in the leading whitespace of a line
            // insert spaces instead of an actual tab character
            var lineStart=state.FindStartOfLine(state.m_selectionStart);
            var p;
            for (p=lineStart; p<state.m_selectionStart; p++)
            {
                if (state.m_text.charAt(p)!=' ')
                    break;
            }

            // All spaces?
            if (p==state.m_selectionStart)
            {
                var spacesToNextTabStop=4-((p-lineStart)%4);
                state.ReplaceSelection("    ".substr(0, spacesToNextTabStop));
            }
            else
            {
                state.ReplaceSelection("\t");
            }
            state.m_selectionStart=state.m_selectionEnd;
        }
        return true;
    }

    pub.cmd_untab=function(state)
    {
        if (state.getSelectedText().indexOf("\n")>0)
        {
            this.IndentCodeBlock(state, false);
            return true;
        }
        return false;
    }

    priv.bold_or_italic=function(state, marker)
    {
        var t=state.m_text;
        var ml=marker.length;

        // Work out if we're adding or removing bold markers
        var text=state.getSelectedText();
        if (starts_with(text, marker) && ends_with(text, marker))
        {
            // Remove
            state.ReplaceSelection(text.substr(ml, text.length-ml*2));
        }
        else
        {
            // Add
            state.TrimSelection();
            text=state.getSelectedText();
            if (!text)
                text="text";
            else
                text=text.replace(/(\r\n|\n|\r)/gm,"");
            state.ReplaceSelection(marker + text + marker);
            state.InflateSelection(-ml, -ml);
        }
        return true;
    }

    // Bold
    pub.cmd_bold=function(state)
    {
        if (!state.CheckSimpleSelection())
            return false;
        state.TrimSelection();

        // Expand selection to include leading/trailing stars
        if (state.PreceededBy("**"))
            state.m_selectionStart-=2;
        if (state.FollowedBy("**"))
            state.m_selectionEnd+=2;

        return this.bold_or_italic(state, "**");
    }

    // Italic
    pub.cmd_italic=function(state)
    {
        if (!state.CheckSimpleSelection())
            return false;
        state.TrimSelection();

        // Expand selection to include leading/trailing stars
        if ((state.PreceededBy("*") && !state.PreceededBy("**")) || state.PreceededBy("***"))
            state.m_selectionStart-=1;
        if ((state.FollowedBy("*") && !state.PreceededBy("**")) || state.FollowedBy("***"))
            state.m_selectionEnd+=1;

        return this.bold_or_italic(state, "*");
    }

    priv.indent_or_outdent=function(state, outdent)
    {
        if (false && state.m_selectionStart==state.m_selectionEnd)
        {
            state.SelectSurroundingWhiteSpace();
            state.ReplaceSelection("\n\n> Quote\n\n");
            state.m_selectionStart+=4;
            state.m_selectionEnd=state.m_selectionStart+5;
            return true;
        }

        // Make sure whole lines are selected
        state.SelectWholeLines();

        // Get the text, split into lines and check if all lines
        // are indented
        var lines=state.getSelectedText().split("\n");

        // Apply the changes
        for (var i=0; i<lines.length-1; i++)
        {
            // Tabbed line
            var newline=lines[i];
            if (outdent)
            {
                if (starts_with(lines[i], "> "))
                    newline=lines[i].substr(2);
            }
            else
            {
                newline="> " + lines[i];
            }

            lines.splice(i, 1, newline);
        }

        // Replace
        state.ReplaceSelection(lines.join("\n"));

        return true;
    }

    // Quote
    pub.cmd_indent=function(state)
    {
        return this.indent_or_outdent(state, false);
    }

    pub.cmd_outdent=function(state)
    {
        return this.indent_or_outdent(state, true);
    }

    priv.handle_list=function(state, type)
    {
        // Build an array of selected line offsets
        var lines=[];
        if (state.getSelectedText().indexOf("\n")>0)
        {
            state.SelectWholeLines();

            var line=state.m_selectionStart;
            lines.push(line);

            while (true)
            {
                line=state.FindNextLine(line);
                if (line>=state.m_selectionEnd)
                    break;
                lines.push(line);
            }
        }
        else
        {
            lines.push(state.FindStartOfLine(state.m_selectionStart));
        }

        // Now work out the new list type
        // If the current selection only contains the current list type
        // then remove list items
        var prefix = type=="*" ? "* " : "1. ";
        for (var i=0; i<lines.length; i++)
        {
            var lt=state.DetectListType(lines[i]);
            if (lt.m_listType==type)
            {
                prefix="";
                break;
            }
        }

        // Update the prefix on all lines
        for (var i=lines.length-1; i>=0; i--)
        {
            var line=lines[i];
            var lt=state.DetectListType(line);
            state.ReplaceAt(line, lt.m_prefixLen, prefix);
        }

        // We now need to find any surrounding lists and renumber them
        var mdd=new MarkdownDeep.Markdown();
        mdd.ExtraMode=true;
        var listitems=mdd.GetListItems(state.m_text, state.m_selectionStart);

        while (listitems!=null)
        {
            // Process each list item
            var dx=0;
            for (var i=0; i<listitems.length-1; i++)
            {
                // Detect the list type
                var lt=state.DetectListType(listitems[i]+dx);
                if (lt.m_listType!="1")
                    break;

                // Format new number prefix
                var newNumber=(i+1).toString() + ". ";

                // Replace it
                state.ReplaceAt(listitems[i]+dx, lt.m_prefixLen, newNumber);

                // Adjust things if new prefix is different length to the previos
                dx += newNumber.length - lt.m_prefixLen;
            }


            var newlistitems=mdd.GetListItems(state.m_text, listitems[listitems.length-1]+dx);
            if (newlistitems!=null && newlistitems[0]!=listitems[0])
                listitems=newlistitems;
            else
                listitems=null;
        }


        // Select lines
        if (lines.length>1)
        {
            state.SelectWholeLines();
        }

        return true;
    }


    pub.cmd_ullist=function(state)
    {
        return this.handle_list(state, "*");
    }

    pub.cmd_ollist=function(state)
    {
        return this.handle_list(state, "1");
    }

    pub.cmd_link=function(ctx)
    {
        ctx.TrimSelection();
        if (!ctx.CheckSimpleSelection())
            return false;

        var url=prompt("Enter the target URL:");
        if (url===null)
            return false;

        var text=ctx.getSelectedText();
        if (text.length==0)
        {
            text="link text";
        }

        var str="[" + text + "](" + url + ")";

        ctx.ReplaceSelection(str);
        ctx.m_selectionStart++;
        ctx.m_selectionEnd=ctx.m_selectionStart + text.length;
        return true;
    }

    pub.cmd_img=function(ctx)
    {
        ctx.TrimSelection();
        if (!ctx.CheckSimpleSelection())
            return false;

        var url=prompt("Enter the image URL");
        if (url===null)
            return false;

        var alttext=ctx.getSelectedText();
        if (alttext.length==0)
        {
            alttext="Image Text";
        }

        var str="![" + alttext + "](" + url + ")";

        ctx.ReplaceSelection(str);
        ctx.m_selectionStart+=2;
        ctx.m_selectionEnd=ctx.m_selectionStart + alttext.length;
        return true;
    }

    pub.cmd_hr=function(state)
    {
        state.SelectSurroundingWhiteSpace();
        if (state.m_selectionStart==0)
            state.ReplaceSelection("----------\n\n");
        else
            state.ReplaceSelection("\n\n----------\n\n");
        state.m_selectionStart=state.m_selectionEnd;;
        return true;
    }

    pub.IndentNewLine=function()
    {
        var editor=this;
        var timer;
        var handler=function()
        {
            window.clearInterval(timer);

            // Create an editor state from the current selection
            var state=new EditorState();
            state.InitFromTextArea(editor.m_textarea);

            // Find start of previous line
            var prevline=state.FindStartOfLine(state.SkipPreceedingEol(state.m_selectionStart));

            // Count spaces and tabs
            var i=prevline;
            while (true)
            {
                var ch=state.m_text.charAt(i);
                if (ch!=' ' && ch!='\t')
                    break;
                i++;
            }

            // Copy spaces and tabs to the new line
            if (i>prevline)
            {
                state.ReplaceSelection(state.m_text.substr(prevline, i-prevline));
                state.m_selectionStart=state.m_selectionEnd;
            }

            state.Apply();
        }

        timer=window.setInterval(handler, 1);

        return false;
    }

    pub.cmd_indented_newline=function(state)
    {
        // Do default new line
        state.ReplaceSelection("\n");
        state.m_selectionStart=state.m_selectionEnd;

        // Find start of previous line
        var prevline=state.FindStartOfLine(state.SkipPreceedingEol(state.m_selectionStart));

        // Count spaces and tabs
        var i=prevline;
        while (true)
        {
            var ch=state.m_text.charAt(i);
            if (ch!=' ' && ch!='\t')
                break;
            i++;
        }

        // Copy spaces and tabs to the new line
        if (i>prevline)
        {
            state.ReplaceSelection(state.m_text.substr(prevline, i-prevline));
            state.m_selectionStart=state.m_selectionEnd;
        }

        return true;
    }

    // Handle toolbar button
    pub.InvokeCommand=function(id)
    {
        // Special handling for undo and redo
        if (id=="undo" || id=="redo")
        {
            this["cmd_"+id]();
            this.m_textarea.focus();
            return;
        }

        // Create an editor state from the current selection
        var state=new EditorState();
        state.InitFromTextArea(this.m_textarea);

        // Create a copy for undo buffer
        var originalState=state.Duplicate();

        // Call the handler and apply changes
        if (this["cmd_"+id](state))
        {
            // Save current state on undo stack
            this.m_undoMode=undomode_unknown;
            this.m_undoStack.splice(this.m_undoPos, this.m_undoStack.length-this.m_undoPos, originalState);
            this.m_undoPos++;

            // Apply new state
            state.Apply();

            // Update markdown rendering
            this.onMarkdownChanged();

            return true;
        }
        else
        {
            this.m_textarea.focus();
            return false;
        }
    }

    delete priv;
    delete pub;

    // Exports
    this.Editor=Editor;
}();

var hljs=new function(){function k(v){return v.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(v){return v.nodeName.toLowerCase()}function i(w,x){var v=w&&w.exec(x);return v&&v.index==0}function d(v){return Array.prototype.map.call(v.childNodes,function(w){if(w.nodeType==3){return b.useBR?w.nodeValue.replace(/\n/g,""):w.nodeValue}if(t(w)=="br"){return"\n"}return d(w)}).join("")}function r(w){var v=(w.className+" "+(w.parentNode?w.parentNode.className:"")).split(/\s+/);v=v.map(function(x){return x.replace(/^language-/,"")});return v.filter(function(x){return j(x)||x=="no-highlight"})[0]}function o(x,y){var v={};for(var w in x){v[w]=x[w]}if(y){for(var w in y){v[w]=y[w]}}return v}function u(x){var v=[];(function w(y,z){for(var A=y.firstChild;A;A=A.nextSibling){if(A.nodeType==3){z+=A.nodeValue.length}else{if(t(A)=="br"){z+=1}else{if(A.nodeType==1){v.push({event:"start",offset:z,node:A});z=w(A,z);v.push({event:"stop",offset:z,node:A})}}}}return z})(x,0);return v}function q(w,y,C){var x=0;var F="";var z=[];function B(){if(!w.length||!y.length){return w.length?w:y}if(w[0].offset!=y[0].offset){return(w[0].offset<y[0].offset)?w:y}return y[0].event=="start"?w:y}function A(H){function G(I){return" "+I.nodeName+'="'+k(I.value)+'"'}F+="<"+t(H)+Array.prototype.map.call(H.attributes,G).join("")+">"}function E(G){F+="</"+t(G)+">"}function v(G){(G.event=="start"?A:E)(G.node)}while(w.length||y.length){var D=B();F+=k(C.substr(x,D[0].offset-x));x=D[0].offset;if(D==w){z.reverse().forEach(E);do{v(D.splice(0,1)[0]);D=B()}while(D==w&&D.length&&D[0].offset==x);z.reverse().forEach(A)}else{if(D[0].event=="start"){z.push(D[0].node)}else{z.pop()}v(D.splice(0,1)[0])}}return F+k(C.substr(x))}function m(y){function v(z){return(z&&z.source)||z}function w(A,z){return RegExp(v(A),"m"+(y.cI?"i":"")+(z?"g":""))}function x(D,C){if(D.compiled){return}D.compiled=true;D.k=D.k||D.bK;if(D.k){var z={};function E(G,F){if(y.cI){F=F.toLowerCase()}F.split(" ").forEach(function(H){var I=H.split("|");z[I[0]]=[G,I[1]?Number(I[1]):1]})}if(typeof D.k=="string"){E("keyword",D.k)}else{Object.keys(D.k).forEach(function(F){E(F,D.k[F])})}D.k=z}D.lR=w(D.l||/\b[A-Za-z0-9_]+\b/,true);if(C){if(D.bK){D.b=D.bK.split(" ").join("|")}if(!D.b){D.b=/\B|\b/}D.bR=w(D.b);if(!D.e&&!D.eW){D.e=/\B|\b/}if(D.e){D.eR=w(D.e)}D.tE=v(D.e)||"";if(D.eW&&C.tE){D.tE+=(D.e?"|":"")+C.tE}}if(D.i){D.iR=w(D.i)}if(D.r===undefined){D.r=1}if(!D.c){D.c=[]}var B=[];D.c.forEach(function(F){if(F.v){F.v.forEach(function(G){B.push(o(F,G))})}else{B.push(F=="self"?D:F)}});D.c=B;D.c.forEach(function(F){x(F,D)});if(D.starts){x(D.starts,C)}var A=D.c.map(function(F){return F.bK?"\\.?\\b("+F.b+")\\b\\.?":F.b}).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);D.t=A.length?w(A.join("|"),true):{exec:function(F){return null}};D.continuation={}}x(y)}function c(S,L,J,R){function v(U,V){for(var T=0;T<V.c.length;T++){if(i(V.c[T].bR,U)){return V.c[T]}}}function z(U,T){if(i(U.eR,T)){return U}if(U.eW){return z(U.parent,T)}}function A(T,U){return !J&&i(U.iR,T)}function E(V,T){var U=M.cI?T[0].toLowerCase():T[0];return V.k.hasOwnProperty(U)&&V.k[U]}function w(Z,X,W,V){var T=V?"":b.classPrefix,U='<span class="'+T,Y=W?"":"</span>";U+=Z+'">';return U+X+Y}function N(){var U=k(C);if(!I.k){return U}var T="";var X=0;I.lR.lastIndex=0;var V=I.lR.exec(U);while(V){T+=U.substr(X,V.index-X);var W=E(I,V);if(W){H+=W[1];T+=w(W[0],V[0])}else{T+=V[0]}X=I.lR.lastIndex;V=I.lR.exec(U)}return T+U.substr(X)}function F(){if(I.sL&&!f[I.sL]){return k(C)}var T=I.sL?c(I.sL,C,true,I.continuation.top):g(C);if(I.r>0){H+=T.r}if(I.subLanguageMode=="continuous"){I.continuation.top=T.top}return w(T.language,T.value,false,true)}function Q(){return I.sL!==undefined?F():N()}function P(V,U){var T=V.cN?w(V.cN,"",true):"";if(V.rB){D+=T;C=""}else{if(V.eB){D+=k(U)+T;C=""}else{D+=T;C=U}}I=Object.create(V,{parent:{value:I}})}function G(T,X){C+=T;if(X===undefined){D+=Q();return 0}var V=v(X,I);if(V){D+=Q();P(V,X);return V.rB?0:X.length}var W=z(I,X);if(W){var U=I;if(!(U.rE||U.eE)){C+=X}D+=Q();do{if(I.cN){D+="</span>"}H+=I.r;I=I.parent}while(I!=W.parent);if(U.eE){D+=k(X)}C="";if(W.starts){P(W.starts,"")}return U.rE?0:X.length}if(A(X,I)){throw new Error('Illegal lexeme "'+X+'" for mode "'+(I.cN||"<unnamed>")+'"')}C+=X;return X.length||1}var M=j(S);if(!M){throw new Error('Unknown language: "'+S+'"')}m(M);var I=R||M;var D="";for(var K=I;K!=M;K=K.parent){if(K.cN){D=w(K.cN,D,true)}}var C="";var H=0;try{var B,y,x=0;while(true){I.t.lastIndex=x;B=I.t.exec(L);if(!B){break}y=G(L.substr(x,B.index-x),B[0]);x=B.index+y}G(L.substr(x));for(var K=I;K.parent;K=K.parent){if(K.cN){D+="</span>"}}return{r:H,value:D,language:S,top:I}}catch(O){if(O.message.indexOf("Illegal")!=-1){return{r:0,value:k(L)}}else{throw O}}}function g(y,x){x=x||b.languages||Object.keys(f);var v={r:0,value:k(y)};var w=v;x.forEach(function(z){if(!j(z)){return}var A=c(z,y,false);A.language=z;if(A.r>w.r){w=A}if(A.r>v.r){w=v;v=A}});if(w.language){v.second_best=w}return v}function h(v){if(b.tabReplace){v=v.replace(/^((<[^>]+>|\t)+)/gm,function(w,z,y,x){return z.replace(/\t/g,b.tabReplace)})}if(b.useBR){v=v.replace(/\n/g,"<br>")}return v}function p(z){var y=d(z);var A=r(z);if(A=="no-highlight"){return}var v=A?c(A,y,true):g(y);var w=u(z);if(w.length){var x=document.createElementNS("http://www.w3.org/1999/xhtml","pre");x.innerHTML=v.value;v.value=q(w,u(x),y)}v.value=h(v.value);z.innerHTML=v.value;z.className+=" hljs "+(!A&&v.language||"");z.result={language:v.language,re:v.r};if(v.second_best){z.second_best={language:v.second_best.language,re:v.second_best.r}}}var b={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function s(v){b=o(b,v)}function l(){if(l.called){return}l.called=true;var v=document.querySelectorAll("pre code");Array.prototype.forEach.call(v,p)}function a(){addEventListener("DOMContentLoaded",l,false);addEventListener("load",l,false)}var f={};var n={};function e(v,x){var w=f[v]=x(this);if(w.aliases){w.aliases.forEach(function(y){n[y]=v})}}function j(v){return f[v]||f[n[v]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=p;this.configure=s;this.initHighlighting=l;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.getLanguage=j;this.inherit=o;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();hljs.registerLanguage("bash",function(b){var a={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var d={cN:"string",b:/"/,e:/"/,c:[b.BE,a,{cN:"variable",b:/\$\(/,e:/\)/,c:[b.BE]}]};var c={cN:"string",b:/'/,e:/'/};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[b.inherit(b.TM,{b:/\w[\w\d_]*/})],r:0},b.HCM,b.NM,d,c,a]}});hljs.registerLanguage("cs",function(b){var a="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";return{k:a,c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM,{bK:"protected public private internal",e:/[{;=]/,k:a,c:[{bK:"class namespace interface",starts:{c:[b.TM]}},{b:b.IR+"\\s*\\(",rB:true,c:[b.TM]}]}]}});hljs.registerLanguage("ruby",function(e){var h="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";var a={cN:"yardoctag",b:"@[A-Za-z]+"};var i={cN:"comment",v:[{b:"#",e:"$",c:[a]},{b:"^\\=begin",e:"^\\=end",c:[a],r:10},{b:"^__END__",e:"\\n$"}]};var c={cN:"subst",b:"#\\{",e:"}",k:g};var d={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:"%[qw]?\\(",e:"\\)"},{b:"%[qw]?\\[",e:"\\]"},{b:"%[qw]?{",e:"}"},{b:"%[qw]?<",e:">",r:10},{b:"%[qw]?/",e:"/",r:10},{b:"%[qw]?%",e:"%",r:10},{b:"%[qw]?-",e:"-",r:10},{b:"%[qw]?\\|",e:"\\|",r:10},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]};var b={cN:"params",b:"\\(",e:"\\)",k:g};var f=[d,i,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},i]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:h}),b,i]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[d,{b:h}],r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[i,{cN:"regexp",c:[e.BE,c],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];c.c=f;b.c=f;return{k:g,c:f}});hljs.registerLanguage("diff",function(a){return{c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});hljs.registerLanguage("xml",function(a){var c="[A-Za-z0-9\\._:-]+";var d={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var b={eW:true,i:/</,r:0,c:[d,{cN:"attribute",b:c,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},d,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},b]}]}});hljs.registerLanguage("markdown",function(a){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:true,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:true,rE:true,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:true,eE:true},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:true,eE:true,}],r:10},{b:"^\\[.+\\]:",e:"$",rB:true,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:true,eE:true},{cN:"link_url",b:"\\s",e:"$"}]}]}});hljs.registerLanguage("css",function(a){var b="[a-zA-Z-][a-zA-Z0-9_-]*";var c={cN:"function",b:b+"\\(",e:"\\)",c:["self",a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[c,a.ASM,a.QSM,a.NM]}]},{cN:"tag",b:b,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[c,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("http",function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}});hljs.registerLanguage("java",function(b){var a="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";return{k:a,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{bK:"protected public private",e:/[{;=]/,k:a,c:[{cN:"class",bK:"class interface",eW:true,i:/[:"<>]/,c:[{bK:"extends implements",r:10},b.UTM]},{b:b.UIR+"\\s*\\(",rB:true,c:[b.UTM]}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("php",function(b){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var a={cN:"preprocessor",b:/<\?(php)?|\?>/};var c={cN:"string",c:[b.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},b.inherit(b.ASM,{i:null}),b.inherit(b.QSM,{i:null})]};var d={v:[b.BNM,b.CNM]};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[b.CLCM,b.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},a]},{cN:"comment",b:"__halt_compiler.+?;",eW:true,k:"__halt_compiler",l:b.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[b.BE]},a,e,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[b.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",e,b.CBLCLM,c,d]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},b.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[b.UTM]},{bK:"use",e:";",c:[b.UTM]},{b:"=>"},c,d]}});hljs.registerLanguage("python",function(a){var f={cN:"prompt",b:/^(>>>|\.\.\.) /};var b={cN:"string",c:[a.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[f],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[f],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/,},{b:/(b|br)"/,e:/"/,},a.ASM,a.QSM]};var d={cN:"number",r:0,v:[{b:a.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:a.CNR+"[lLjJ]?"}]};var e={cN:"params",b:/\(/,e:/\)/,c:["self",f,d,b]};var c={e:/:/,i:/[${=;\n]/,c:[a.UTM,e]};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[f,d,b,a.HCM,a.inherit(c,{cN:"function",bK:"def",r:10}),a.inherit(c,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("sql",function(a){return{cI:true,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}});hljs.registerLanguage("ini",function(a){return{cI:true,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM],r:0}]}]}});hljs.registerLanguage("perl",function(c){var d="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var f={cN:"subst",b:"[$@]\\{",e:"\\}",k:d};var g={b:"->{",e:"}"};var a={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@\*][^\s\w{]/,r:0}]};var e={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var h=[c.BE,f,a];var b=[a,c.HCM,e,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},g,{cN:"string",c:h,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[c.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[c.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+c.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[c.HCM,e,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[c.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];f.c=b;g.c=b;return{k:d,c:b}});hljs.registerLanguage("objectivec",function(a){var d={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};var c=/[a-zA-Z@][a-zA-Z0-9_]*/;var b="@interface @class @protocol @implementation";return{k:d,l:c,i:"</",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"("+b.split(" ").join("|")+")\\b",e:"({|$)",k:b,l:c,c:[a.UTM]},{cN:"variable",b:"\\."+a.UIR,r:0}]}});hljs.registerLanguage("coffeescript",function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var f=c.inherit(c.TM,{b:a});var e={cN:"subst",b:/#\{/,e:/}/,k:b};var d=[c.BNM,c.inherit(c.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[c.BE]},{b:/'/,e:/'/,c:[c.BE]},{b:/"""/,e:/"""/,c:[c.BE,e]},{b:/"/,e:/"/,c:[c.BE,e]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[e,c.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{cN:"property",b:"@"+a},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];e.c=d;return{k:b,c:d.concat([{cN:"comment",b:"###",e:"###"},c.HCM,{cN:"function",b:"("+a+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:true,c:[f,{cN:"params",b:"\\(",rB:true,c:[{b:/\(/,e:/\)/,k:b,c:["self"].concat(d)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:true,i:/[:="\[\]]/,c:[f]},f]},{cN:"attribute",b:a+":",e:":",rB:true,eE:true,r:0}])}});hljs.registerLanguage("nginx",function(c){var b={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+c.UIR}]};var a={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[c.HCM,{cN:"string",c:[c.BE,b],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",c:[c.BE,b],v:[{b:"\\s\\^",e:"\\s|{|;",rE:true},{b:"~\\*?\\s+",e:"\\s|{|;",rE:true},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},b]};return{c:[c.HCM,{b:c.UIR+"\\s",e:";|{",rB:true,c:[c.inherit(c.UTM,{starts:a})],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("json",function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}});hljs.registerLanguage("apache",function(a){var b={cN:"number",b:"[\\$%]\\d+"};return{cI:true,c:[a.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",b]},b,a.QSM]}}],i:/\S/}});hljs.registerLanguage("cpp",function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c"],k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"include\\s*<",e:">",i:"\\n"},a.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}});hljs.registerLanguage("makefile",function(a){var b={cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]};return{c:[a.HCM,{b:/^\w+\s*\W*=/,rB:true,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:true,starts:{e:/$/,r:0,c:[b],}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,c:[a.QSM,b]}]}});
angular.module('wiz.markdown', [
    'ngSanitize'
]);
angular.module('wiz.markdown')

    .factory('wizMarkdownSvc', [function () {
        var markdownSvc = new MarkdownDeep.Markdown();
        markdownSvc.ExtraMode = true;
        markdownSvc.SafeMode = false;
        markdownSvc.NewWindowForExternalLinks = true;
        markdownSvc.AutoHeadingIDs = true;
        markdownSvc.MarkdownDeepEditor = MarkdownDeepEditor;

        return markdownSvc;
    }]);
angular.module('wiz.markdown')

    .filter('wizMarkdownFltr', ['wizMarkdownSvc', function (wizMarkdownSvc) {
        return function (input) {
            if (input) return wizMarkdownSvc.Transform(input);
        };
    }]);
angular.module('wiz.markdown')

    .directive('wizMarkdown', ['$filter', 'wizMarkdownSvc', function ($filter, wizMarkdownSvc) {
        return {
            restrict: 'E',
            scope: {
                'content': '='
            },
            replace: true,
            template: '<div class="markdown-output"></div>',
            link: function (scope, elem, attrs) {
                scope.$watch('content', function () {
                    if (!scope.content) {
                        elem.html('');
                        return;
                    }
                    elem.html(wizMarkdownSvc.Transform(scope.content));
                    // Apply highlighting when required
                    angular.forEach(elem.find('pre'), function (value) {
                        hljs.highlightBlock(value);
                    });
                });
            }
        };
    }]);
angular.module('wiz.markdown')

    .directive('wizMarkdownEditor', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                'content': '=',
                'textareaclass':'@?',
                'ngChange':'&'
            },
            replace: true,
            transclude: true,
            template: '<div class="markdown-editor">' +
            '<div class="markdown-toolbar" ng-if="!toolbarBottom" ng-transclude></div>' +
            '<textarea class="markdown-input {{textareaclass}}" ng-change="ngChange()" ng-model="content"></textarea>' +
            '<div class="markdown-toolbar" ng-if="toolbarBottom" ng-transclude></div>' +
            '</div>',
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) { }],
            link: function (scope, elem, attrs, ctrl) {
                var editor = new MarkdownDeepEditor.Editor(elem.find('textarea')[0], null);
                editor.onPostUpdateDom = function (editor) {
                    $timeout(function () {
                        scope.content = elem.find('textarea').val();
                    });
                };
                scope.toolbarBottom = attrs.toolbar === 'bottom';
                // Exposes editor to other directives
                ctrl.editor = editor;
            }
        };
    }]);

angular.module('wiz.markdown')

    .directive('wizMarkdownInput', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                'content': '='
            },
            replace: true,
            transclude: true,
            template: '<textarea class="markdown-input" ng-model="content"></textarea>',
            link: function (scope, elem, attrs, ctrl) {
                var editor = new MarkdownDeepEditor.Editor(elem[0], null);
                editor.onPostUpdateDom = function (editor) {
                    $timeout(function () {
                        scope.content = elem.val();
                    });
                };
            }
        };
    }]);

angular.module('wiz.markdown')

    .directive('wizToolbarButton', function () {
        return {
            require: '^wizMarkdownEditor',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                'buttonclass':'@?'
            },
            template: '<button class="{{buttonclass}}" type="button" ng-click="format()" ng-transclude></button>',
            link: function (scope, elem, attrs, wizMarkdownEditorCtrl) {
                if (attrs.command) {
                    scope.format = function () {
                        wizMarkdownEditorCtrl.editor.InvokeCommand(attrs.command);
                    };
                } else {
                    console.error('wiz-toolbar-button requires a "command" attribute e.g: command="bold" ')
                }
            }
        };
    });