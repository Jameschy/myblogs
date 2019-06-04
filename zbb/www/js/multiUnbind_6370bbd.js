passport._define("multiUnbind.js"/*tpa=http://passport.baidu.com/passApi/js/multiUnbind.js*/,function(){var e=e||window.passport||{},t=e.tangramInst||t||window.baidu;!function(e){e.apiDomain={staticDomain:window.location?"http:"==window.location.protocol.toLowerCase()?"http://passport.bdimg.com/":"https://passport.baidu.com":"http:"==document.location.protocol.toLowerCase()?"http://passport.bdimg.com/":"https://passport.baidu.com"}}(e);var n=null;if("function"!=typeof n)var n=function(){};n._baiduInstName=n._baiduInstName||"bdInst_"+(new Date).getTime();var r=r||t.baiduInstance||window.baiduInstance;window[n._baiduInstName]=window[n._baiduInstName]||r,n.resourcePath="",n.skinName="default",n.version="1.0.0.0",/msie 6/i.test(navigator.userAgent)&&document.execCommand("BackgroundImageCache",!1,!0),t.form=t.form||{},t.url=t.url||{},t.url.escapeSymbol=t.url.escapeSymbol||function(e){return String(e).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g,function(e){return"%"+(256+e.charCodeAt()).toString(16).substring(1).toUpperCase()})},t.form.json=t.form.json||function(e,n){function r(e,t){var n=p[e];n?(n.push||(p[e]=[n]),p[e].push(t)):p[e]=t}for(var a,s,i,o,c,l,u,d,f=e.elements,n=n||function(e){return e},p={},g=0,m=f.length;m>g;g++)if(a=f[g],i=a.name,!a.disabled&&i)switch(s=a.type,o=t.url.escapeSymbol(a.value),s){case"radio":case"checkbox":a.checked&&r(i,n(o,i));break;case"textarea":case"text":case"password":case"hidden":case"file":case"select-one":r(i,n(o,i));break;case"select-multiple":for(c=a.options,u=c.length,l=0;u>l;l++)d=c[l],d.selected&&r(i,n(d.value,i))}return p},n.Base=function(){t.lang.Class.call(this),this._ids={},this._eid=this.guid+"__"},t.lang.inherits(n.Base,t.lang.Class,"http://passport.baidu.com/passApi/js/magic.Base").extend({getElement:function(e){return document.getElementById(this.$getId(e))},getElements:function(){var e={},t=this._ids;for(var n in t)e[n]=this.getElement(n);return e},$getId:function(e){return e=t.lang.isString(e)?e:"",this._ids[e]||(this._ids[e]=this._eid+e)},$mappingDom:function(e,n){return t.lang.isString(n)?this._ids[e]=n:n&&n.nodeType&&(n.id?this._ids[e]=n.id:n.id=this.$getId(e)),this},$hide:function(e){return("string"==(typeof e).toLowerCase()||""===e)&&(e=this.getElement(e)),e&&e.style&&(e.style.display="none",e.style.visibility="hidden"),this},$show:function(e){return("string"==(typeof e).toLowerCase()||""===e)&&(e=this.getElement(e)),e&&e.style&&(e.style.display="block",e.style.visibility="visible",e.style.opacity="1"),this},$dispose:function(){this.fire("ondispose")&&t.lang.Class.prototype.dispose.call(this)}}),n.control=n.control||{},function(){function e(e,t){var n,r=e.getAttribute(t),s=!1;if(r&&(n=r.match(a[0]))){s={};for(var i,o=0;o<n.length;o++)i=n[o].match(a[1]),!isNaN(i[2])&&(i[2]=+i[2]),a[2].test(i[2])&&(i[2]=i[2].replace(a[3],"$2")),a[4].test(i[2])&&(i[2]=a[5].test(i[2])),s[i[1]]=i[2]}return s}function r(r,a){var s=e(r,"tang-event");if(s)for(var i in s){var o=s[i].substr(1);o.indexOf("(")<0&&(o+="()"),t.dom(r).on(i,new Function(n._baiduInstName+"('"+a+"') && "+n._baiduInstName+"('"+a+"')"+o))}}n.setup=n.setup||function(t,n,a){var s=e(t,"tang-param")||{};for(var i in a)s[i]=a[i];var o=new n(s);o.$mappingDom("",t),r(t,o.guid);for(var c=t.getElementsByTagName("*"),i=c.length-1;i>=0;i--)r(c[i],o.guid);return o};var a=[/\b[\w\$\-]+\s*:\s*[^;]+/g,/([\w\$\-]+)\s*:\s*([^;]+)\s*/,/\'|\"/,/^\s*(\'|\")([^\1]*)\1\s*/,/^(true|false)\s*$/i,/\btrue\b/i]}();var e=e||window.passport||{};e.err=e.err||{},function(e){var t=null;t="function"===(typeof e.getCurrent).toLowerCase()?e.getCurrent():{errMsg:{},labelText:{}},t.errMsg.multiUnbind={"-1":{msg:"系统错误，休息一会儿，请您稍后再试",field:""},11:{msg:"用户名最长不得超过7个汉字，或14个字节（半角数字、半角字母或下划线）",field:"userName"},401003:{msg:"该用户名不在关联列表中，请刷新重试。",field:""},401004:{msg:"为保证您的帐号安全，请输入密码",field:""},401005:{msg:"您要解除关联的用户名未绑定邮箱，请绑定邮箱后刷新页面重试。",field:""},401006:{msg:"该用户名不在关联列表中，请刷新重试。",field:""},400021:{msg:"解除关联帐号失败，您当前帐号暂未登录",field:""},500010:{msg:"验证码尝试次数过多，请稍后再试",field:""},62004:{msg:"您填写的短信验证码有误，请重试",field:"smsVcode"},62007:{msg:"请先获取验证码",field:"smsVcode"}},t.errMsg.authwidGetverify={62003:{msg:"发送次数过多，请稍后再试"},62005:{msg:"验证码已过期，请重新获取验证码后再试"}},t.labelText.multiUnbind={introTitle:"您即将解除以下关联关系，验证手机后即可解绑",smsVcode:"验证码",smsVcodePh:"请填写验证码",smsVcodeSend:"获取验证码",smsVcodeSending:"正在获取...",smsVcodeSendErr:"获取验证码失败，请稍候再试",smsVcodeResend:"重新获取",smsVcodeSucc:"验证码发送成功,请查收",submit:"确认解绑",successTitle:"#{uname}解除关联成功",successBtn:"确认",failedTitle:"#{uname}解除关联失败",failedInfo:"建议您绑定邮箱后再解除关联，避免帐号的安全性降低或无法快速找回密码"},e.getCurrent=function(){return t}}(e.err);var e=e||window.passport||{};return e.data=e.data||{},function(t){function n(e){this._requests=[],this._value=null,this._exception=null,this._isComplete=!1;var t=this;e(function(e){t._fulfillPromise(e)},function(e){t._breakPromise(e)})}function r(e,t,n){return t?n?function(n){return n=n||{},u.submit(d+t,a(n,e,g[e],m[e],!0),{charset:"utf-8",processData:function(t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];r&&(t[n]=decodeURIComponent(r))}return s(e,t)}})}:function(n){return u.jsonp(d+t,a(n,e,g[e],m[e],!1),{charset:"utf-8",processData:function(t){return s(e,t)}})}:c}function a(e,t,n,r,a){var s=a?{staticpage:I.staticPage,charset:I.charset||document.characterSet||document.charset||""}:{},i=h[t];if(i)for(var o in i){if(i.hasOwnProperty(o)){var c=i[o];s[o]="function"==typeof c?c(e):c}"verifypass"==o&&(s[o]=decodeURIComponent(s[o]))}if(s.token=I.token,s.tpl=I.product||"",s.subpro=I.subpro,s.apiver="v3",s.tt=(new Date).getTime(),e){n=n||{},r=r||{};for(var o in e)if(e.hasOwnProperty(o)){var u=r[o],d=u?u(e[o],e):e[o];"string"==typeof d&&(a&&(d=decodeURIComponent(d)),v[o]||(d=l.trim(d))),s[n[o]||o.toLowerCase()]=d}}return s}function s(e,n){if(t&&t.traceID&&t.traceID.getTraceID&&t.traceID.getTraceID(n),n){var r=b[e];r&&r(n);var a=n.errInfo,s=n,o=s;return a?s.errInfo=i(e,a,s):(a={no:n.err_no,msg:n.err_msg||""},delete s.err_no,delete s.err_msg,o={data:s,errInfo:i(e,a,s)}),o}return n}function i(e,t){var n=w[y[e]||e];if(n&&t&&0!=t.no){var r=n[t.no]||n[-1];if(r){var a=r.msg;t.msg=a,t.field=r.field}}return t}function o(e){if(t&&t.traceID&&t.traceID.getTraceID&&t.traceID.getTraceID(e),e){var n=e.errInfo,r=e;if(!n)for(var a in e)if(e.hasOwnProperty(a)){var s=e[a];s&&(e[a]=decodeURIComponent(s))}n||(n={no:e.err_no,msg:e.err_msg||""},delete r.err_no,delete r.err_msg,e={data:r,errInfo:n})}return e}var c=function(){};n.prototype={get_isComplete:function(){return this._isComplete},get_value:function(){if(!this._isComplete)return void 0;if(this._exception)throw this._exception;return this._value},call:function(e){for(var t=[],n=0,r=arguments.length-1;r>n;n++)t[n]=arguments[n+1];return this.when(function(n){return n[e].apply(n,t)})},getValue:function(e){return this.when(function(t){return t[e]})},setValue:function(e,t){this.whenOnly(function(n){n[e]=t})},when:function(e,t,r){return n.when(this,e,t,r)},whenOnly:function(e,t,r){n.whenOnly(this,e,t,r)},success:function(e,t){return this.when(e,c,t)},fail:function(e,t){return this.when(c,e,t)},_enqueueOne:function(e){this._isComplete?this._notify(e):this._requests.push(e)},_notify:function(e){this._exception?e.breakPromise&&e.breakPromise(this._exception):e.fulfillPromise&&e.fulfillPromise(this._value)},_notifyAll:function(){for(var e=0,t=this._requests.length;t>e;e++)this._notify(this._requests[e])},_fulfillPromise:function(e){this._value=e,this._exception=null,this._isComplete=!0,this._notifyAll()},_breakPromise:function(e){this._value=null,this._exception=e||new Error("An error occured"),this._isComplete=!0,this._notifyAll()}},n.when=function(e,t,r,a){return new n(function(s,i){n.make(e)._enqueueOne({fulfillPromise:function(e){s(t?t.call(a,e):e)},breakPromise:function(e){if(r)try{s(r.call(a,e))}catch(t){i(t)}else i(e)}})})},n.whenOnly=function(e,t,r,a){n.make(e)._enqueueOne({fulfillPromise:function(e){t&&t.call(a,e)},breakPromise:function(e){r&&r.call(a,e)}})},n.make=function(e){return e instanceof n?e:n.immediate(e)},n.immediate=function(e){return new n(function(t){t(e)})};var l={};!function(e){var t=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");e.trim=function(e){return String(e).replace(t,"")},e.getUniqueId=function(e){return e+Math.floor(2147483648*Math.random()).toString(36)},e.g=function(e){return e?"string"==typeof e||e instanceof String?document.getElementById(e):!e.nodeName||1!=e.nodeType&&9!=e.nodeType?null:e:null},e.getParent=function(t){return t=e.g(t),t.parentElement||t.parentNode||null},e.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},e.array=e.array||{},e.array.indexOf=function(e,t,n){var r=e.length;for(n=0|n,0>n&&(n=Math.max(0,r+n));r>n;n++)if(n in e&&e[n]===t)return n;return-1},e.browser=e.browser||{},e.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp.$6||RegExp.$2):void 0,e.insertHTML=function(t,n,r){t=e.g(t);var a,s;return t.insertAdjacentHTML&&!e.browser.opera?t.insertAdjacentHTML(n,r):(a=t.ownerDocument.createRange(),n=n.toUpperCase(),"AFTERBEGIN"==n||"BEFOREEND"==n?(a.selectNodeContents(t),a.collapse("AFTERBEGIN"==n)):(s="BEFOREBEGIN"==n,a[s?"setStartBefore":"setEndAfter"](t),a.collapse(s)),a.insertNode(a.createContextualFragment(r))),t}}(l),t.base=l;var u={};!function(e){var r="__bdpp_pstc__"+(new Date).getTime(),a=r+"_form",s=r+"_ifr",i=function(e){if("object"==typeof e){var t=[];for(var n in e){var r=e[n];if(void 0!==r&&null!==r){t.length&&t.push("&");var a=encodeURIComponent("boolean"==typeof r?r?"1":"0":r.toString());t.push(encodeURIComponent(n),"=",a)}}return t.join("")}return"string"==typeof e?e:null},o=function(e,t){if(t=i(t),"string"==typeof t){var n=/\?/g.test(e);e+=(n?"&":"?")+i(t)}return e},c=function(e,t,n){e.setAttribute("type","text/javascript"),n&&e.setAttribute("charset",n),e.setAttribute("src",t),document.getElementsByTagName("head")[0].appendChild(e)},u=function(e){if(e.clearAttributes)e.clearAttributes();else for(var t in e)e.hasOwnProperty(t)&&delete e[t];e&&e.parentNode&&e.parentNode.removeChild(e),e=null},d=function(e,t,n){function r(e){return function(){try{e?d.onfailure&&d.onfailure():(t.apply(window,arguments),clearTimeout(s)),window[a]=null,delete window[a]}catch(n){}finally{u(i)}}}var a,s,i=document.createElement("SCRIPT"),o="bd__cbs__",d=n||{},f=d.charset,p=d.queryField||"callback",g=d.timeOut||0,m=new RegExp("(\\?|&)"+p+"=([^&]*)");a=l.getUniqueId(o),window[a]=r(0),g&&(s=setTimeout(r(1),g)),e=e.replace(m,"$1"+p+"="+a),e.search(m)<0&&(e+=(e.indexOf("?")<0?"?":"&")+p+"="+a),c(i,e,f)},f=function(e,t){var n=[];n.push("<form id='",a,"' target='",s,"' "),n.push("action='",l.encodeHTML(e),"' method='post'>");for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(void 0!==i&&null!==i){var o=l.encodeHTML("boolean"==typeof i?i?"1":"0":i);n.push("<input type='hidden' name='",l.encodeHTML(r),"' value='",o,"' />")}}return n.push("</form>"),n.join("")},p=function(e,t,n,i){function o(e){return function(){try{e?i.onfailure&&i.onfailure():(n.apply(window,arguments),u&&clearTimeout(u)),window[d]=null,delete window[d]}catch(t){}}}i=i||{};var c=i.timeOut||0,u=!1,d=l.getUniqueId("bd__pcbs__");t[i.queryField||"callback"]="parent."+d;var p=f(e,t);if(l.g(a))l.getParent(a).innerHTML=p;else{var g=[];g.push("<div id='",r,"' style='display:none;'>"),g.push("<div>",p,"</div>"),g.push("<iframe name='",s,"' src='"+("https:"==(window.location?window.location.protocol.toLowerCase():document.location.protocol.toLowerCase())?"https://passport.baidu.com/passApi/html/_blank.html":"about:blank")+"' style='display:none;'></iframe>"),g.push("</div>"),l.insertHTML(document.body,"beforeEnd",g.join(""))}window[d]=o(),c&&(u=setTimeout(o(1),c)),l.g(a).submit()};e.jsonp=function(e,r,a){return a=a||{},t&&t.traceID&&t.traceID.createTraceID&&(r.traceid=t.traceID.createTraceID()),new n(function(t,n){e=o(e,r),d(e,function(e){a.processData&&(e=a.processData(e)),t&&t(e)},{charset:a.charset,queryField:a.queryField,timeOut:a.timeOut,onfailure:function(){n&&n()}})})},e.submit=function(e,r,a){return t&&t.traceID&&t.traceID.createTraceID&&(r.traceid=t.traceID.createTraceID()),e&&r?new n(function(t){p(e,r,function(e){a.processData&&(e=a.processData(e)),t&&t(e)},a)}):void 0};var g=[];e.load=function(e){return new n(function(t){var n=g.push(new Image)-1,r=!1,a=setTimeout(function(){r=!0,t&&t()},1e3);g[n].onload=function(){clearTimeout(a),r||t&&t(),r=!0,g[n]=g[n].onload=null},g[n].src=e})}}(u);var d="https://passport.baidu.com",f={getApiInfo:"/v2/api/?getapi",getLoginHistory:"/v2/api/?loginhistory",loginCheck:"/v2/api/?logincheck",getVerifyCodeStr:"/v2/?reggetcodestr",getRegSmsVerifyCodeStr:"/v2/?regsmscodestr",checkUserName:"/v2/?regnamesugg",checkPassword:"/v2/?regpwdcheck",checkMail:"/v2/?regmailcheck",isUserNoName:"/v2/api/?ucenteradduname",checkPhone:"/v2/?regphonecheck",getphonestatus:"/v2/?getphonestatus",sendPhoneCode:"/v2/?regphonesend",multiBind:"/v2/?multiaccountassociate",multiUnbind:"/v2/?multiaccountdisassociate",multiCheckUserName:"/v2/?multiaccountusername",multiGetaccounts:"/v2/?multiaccountget",multiSwitchuser:"/v2/?loginswitch",checkVerifycode:"/v2/?checkvcode",getRsaKey:"/v2/getpublickey",authwidGetverify:"/v2/sapi/authwidgetverify",checkIDcard:"/v3/finance/main/idnumcert",checkIDcardSecondStep:"/v3/finance/main/upcert",checkIDcardAllStep:"/v3/finance/main/idnumcert",checkIDcardState:"/v3/finance/main/checkupcert"},p={login:"/v2/api/?login",reg:"/v2/api/?reg",fillUserName:"/v2/api/?ucenteradduname",regPhone:"/v2/api/?regphone",checkIDcard:"/v3/finance/main/idnumcert",checkIDcardSecondStep:"/v3/finance/main/upcert",checkIDcardAllStep:"/v3/finance/main/idnumcert"},g={getApiInfo:{apiType:"class"},login:{memberPass:"mem_pass",safeFlag:"safeflg",isPhone:"isPhone",timeSpan:"ppui_logintime",logLoginType:"logLoginType"},fillUserName:{selectedSuggestName:"pass_fillinusername_suggestuserradio",timeSpan:"ppui_fillusernametime"},reg:{password:"loginpass",timeSpan:"ppui_regtime",suggestIndex:"suggestIndex",suggestType:"suggestType",selectedSuggestName:"pass_reg_suggestuserradio_0",logRegType:"logRegType"},regPhone:{password:"loginpass",timeSpan:"ppui_regtime",suggestIndex:"suggestIndex",suggestType:"suggestType",selectedSuggestName:"pass_reg_suggestuserradio_0",logRegType:"logRegType"}},m={loginCheck:{isPhone:function(e){return e?"true":"false"}},login:{memberPass:function(e){return e?"on":""}}},h={checkPassword:{fromreg:1},reg:{registerType:1,verifypass:function(e){return e.password}}},v={password:!0},b={login:function(){}},y={checkUserName:"reg",checkMail:"reg",checkPhone:"regPhone",sendPhoneCode:"regPhone",multiCheckUserName:"multiBind",multiSwitchuser:"changeUser",checkVerifycode:"checkVerifycode"},w=e.err.getCurrent().errMsg||e.err.getCurrent(),I={};t.setContext=function(e){I.product=e.product||I.product,I.charset=e.charset||I.charset,I.staticPage=e.staticPage||I.staticPage,I.token=e.token||I.token,I.subpro=e.subpro||I.subpro},t.traceID={headID:t.traceID&&t.traceID.headID||"",flowID:t.traceID&&t.traceID.flowID||"",cases:t.traceID&&t.traceID.cases||"",initTraceID:function(e){var t=this;e&&e.length>0?(t.headID=e.slice(0,6),t.flowID=e.slice(6,8)):t.destory()},createTraceID:function(){var e=this;return e.headID+e.flowID+e.cases},startFlow:function(e){var t=this,n=t.getFlowID(e);0===t.flowID.length||t.flowID===n?(t.createHeadID(),t.flowID=n):t.finishFlow(n)},finishFlow:function(){var e=this;e.destory()},getRandom:function(){return parseInt(90*Math.random()+10,10)},createHeadID:function(){var e=this,t=(new Date).getTime()+e.getRandom().toString(),n=Number(t).toString(16),r=n.length,a=n.slice(r-6,r).toUpperCase();e.headID=a},getTraceID:function(e){var t=this,n=e&&e.traceid||"";t.initTraceID(n)},getFlowID:function(e){var t={login:"01",reg:"02"};return t[e]},setData:function(e){var t=this;return e.data?e.data.traceid=t.createTraceID():e.url=e.url+(e.url.indexOf("?")>-1?"&":"?")+"traceid="+t.createTraceID(),e},destory:function(){var e=this;e.headID="",e.flowID=""}};for(var _ in f)f.hasOwnProperty(_)&&(t[_]=r(_,f[_]));for(var _ in p)p.hasOwnProperty(_)&&(t[_]=r(_,p[_],!0));t.jsonp=function(e,t){return 0!=e.indexOf("http")&&(e=d+e),t=t||{},t.flag_code&&1==t.flag_code||(t.apiver="v3"),t.tt=(new Date).getTime(),u.jsonp(e,t,{charset:"utf-8",processData:function(e){return o(e)}})},t.post=function(e,t){return t=t||{},"wap"!==t.apitype&&(e=d+e),t.staticpage=t.staticpage||I.staticPage,t.charset=t.charset||I.charset||document.characterSet||document.charset||"",t.token=t.token||I.token,t.tpl=t.tpl||I.product,u.submit(e,t,{charset:"utf-8",processData:function(e){return o(e)}})},t.request=u}(e.data),n.passport=t.lang.createClass(function(){this._validateInfo={}},{type:"magic.passport",superClass:n.Base}).extend({_getRegularField:function(e){var t=e.pwd?"password":"text",n=this,r='autocomplete="off"',a=e.maxLength?'maxlength="'+e.maxLength+'"':"",s=e.tip?e.tip:"",i=e.value?e.value:"",o=e.field+""=="verifycode"?"none":"",c="";c="text"===t?'<input type="text" style="display:none;">':'<input type="password" style="display: none;">';var l='<p id="'+n.$getId(e.field+"Wrapper")+'" class="pass-form-item pass-form-item-'+e.field+'" style="display:'+o+'">'+(e.label?'<label for="'+n.$getId(e.field)+'" id="'+n.$getId(e.field+"Label")+'" class="pass-label pass-label-'+e.field+'">'+e.label+"</label>":"")+c+'<input id="'+n.$getId(e.field)+'" type="'+t+'" name="'+e.field+'" class="pass-text-input pass-text-input-'+e.field+'" '+a+(e.placeholder?'placeholder="'+e.placeholder+'" ':"")+r+(e.disabled?'" disabled':"")+' value="'+i+'"/>'+(e.noError?"":'<span id="'+n.$getId(e.field+"Error")+'" class="pass-item-error pass-item-error-'+e.field+'"></span>')+(e.hasSucc?'<span id="'+n.$getId(e.field+"Succ")+'" class="pass-item-succ pass-item-succ-'+e.field+'" style="display:none;"></span>':"")+'<span id="'+n.$getId(e.field+"Tip")+'" class="pass-item-tip pass-item-tip-'+e.field+'" style="display:none"><span id="'+n.$getId(e.field+"TipText")+'" class="pass-item-tiptext pass-item-tiptext-'+e.field+'">'+s+"</span></span></p>";return l},_getHiddenField:function(e,t){var n,r=this,a='<p id="'+r.$getId(t||"hiddenFields")+'" style="display:none">';for(var s in e)e.hasOwnProperty(s)&&(n="string"==typeof e[s]?e[s].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\x22/g,"&quot;").replace(/\x27/g,"&#39;"):e[s],a+='<input type="hidden" id="'+r.$getId((t?t+"_":"")+s)+'" name="'+s+'" value="'+n+'" />');return a+="</p>"},_setEvent:function(){var e=this,n=this.getElement(),r=function(t){e._eventHandler.entrance.apply(e,[t])};t(e.getElement()).on("resize",function(){var e=(navigator.userAgent,!navigator.userAgent.match(/OS [1-8]_\d[_\d]* like Mac OS X/i)),t=!!navigator.userAgent.toString().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),n=navigator.userAgent.toString().indexOf("iPad");if(e&&t&&null!=n){var r=document.getElementsByClassName("popBox");null!=r&&r.length>0&&(r[0].style.height=window.screen.height>document.body.clientHeight?window.screen.height*(window.screen.height/document.body.clientHeight)+120+"px":window.screen.height*(window.screen.height/document.body.clientHeight))}}),t(e.getElement("form")).on("submit",r),t(e.getElement("license")).on("click",r),t(e.getElement("verifyCodeChange")).on("click",r),t(e.getElement("verifyCodeSend")).on("click",r),t(e.getElement("smsVcodeSend")).on("click",r),t(n).delegate(".pass-suggest-item label","click",r),t(".pass-text-input",e.getElement()).on({focus:r,blur:r,change:r,keyup:r,mouseover:r,mouseout:r})},_validator:{confStorage:{},builtInMsg:{required:"请您输入%s",phone:"手机号码格式不正确",email:"邮箱格式不正确",idcard:"身份证格式不正确"},builtInRules:{required:/\S+/,phone:/^1[3456789]\d{9}$/,email:/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,idcard:/(^\d{15}$)|(^\d{17}(\d|X|x)$)/},init:function(e,t){this.confStorage[e.$getId()]=t},validate:function(e,t,n,r){var a=e.getElement(t),s={field:t},i=/^\s*(.+?)\s*$/;if(!a||0===+a.offsetHeight)return!1;for(var o=a.value.replace(i,"$1"),c=this.confStorage[e.$getId()][t],l=c.rules,u=0,d=l.length;d>u;u++){var f,p=l[u],g=this.builtInRules[p];if(f="[object function]"===Object.prototype.toString.call(g).toLowerCase()?g.call(e,a,r):new RegExp(g).test(o),!f)return s.error=!0,e._validateInfo[t]=0,s.msg=this.builtInMsg[p].replace(/\%s/,c.desc),e._validateError(s),void n.error(s)}c.asyncRule?c.asyncRule.call(e,{success:function(r){s.error=!1,s.data=r.data,e._validateInfo[t]=1,e._validateSuccess(s),n.success(s)},error:function(r){s.error=!0,e._validateInfo[t]=0,s.msg=r.msg,e._validateError(s),n.error(s)}},r):(s.error=!1,e._validateInfo[t]=1,e._validateSuccess(s),n.success(s))},validateAll:function(e,t,n){function r(){o=!0,i?t&&t.error(c):t&&t.success(c)}var a=this.confStorage[e.$getId()],s=0,i=!1,o=!1,c=[],l=this._getActiveValidate(e,!0);for(var u in a){if(o)break;this.validate(e,u,{success:function(e){s++,c.push(e),s===l&&r()},error:function(e){return i=!0,s++,c.push(e),n?void r():void(s===l&&r())}},"all")}},_getActiveValidate:function(e,t){var n=this.confStorage[e.$getId()],r=[];for(var a in n){var s=e.getElement(a);s&&0!==s.offsetHeight&&r.push(s)}return t?r.length:r},addRule:function(e,n){var r={};r[e]=n,t.extend(this.builtInRules,r)},addMsg:function(e,n){var r={};r[e]=n,t.extend(this.builtInMsg,r)}},validate:function(e,n){var r=this,a=r.fireEvent("beforeValidate",{validate:{field:e,ele:t(r.getElement(e))}});a&&r._validator.validate(r,e,{success:function(e){var t=r.fireEvent("validateSuccess",{validate:e});t&&n&&n.success&&n.success(e)},error:function(e){var t=r.fireEvent("validateError",{validate:e});t&&n&&n.error&&n.error(e)}})},validateAll:function(e,t){var n=this;t="boolean"==typeof e?e:t?t:!1;var r=n.fireEvent("beforeValidateAll");r&&n._validator.validateAll(n,{success:function(t){var r=n.fireEvent("validateAllSuccess",{validates:t});r&&e&&e.success&&e.success(t)},error:function(t){var r=n.fireEvent("validateAllError",{validates:t});r&&e&&e.error&&e.error(t)}},t)},getValidateStatus:function(e){return this._validateInfo.hasOwnProperty(e)?this._validateInfo[e]:-1},setValidateSuccess:function(e){var t=this;t._validateInfo[e]=1,t._validateSuccess({field:e})},setValidateError:function(e,t,n){var r=this;r._validateInfo[e]=0,r._validateError({field:e,msg:t},n)},setGeneralError:function(e){this.getElement("error").innerHTML=e},clearGeneralError:function(){this.getElement("error").innerHTML=""},_isSupportPlaceholder:function(){return"placeholder"in document.createElement("input")},_getPlaceholder:function(e){for(var n=this,r={},a="",s={},i=0;i<e.length;i++)a=n.lang[e[i].placeholder],0!==+e[i].clearbtn&&(s[i]=t('<span id="'+n.$getId(e[i].label+"_clearbtn")+'" class="pass-clearbtn pass-clearbtn-'+e[i].label+'" style="display:none;"></span>'http://passport.baidu.com/passApi/js/),t(n.getElement(e[i].label)).after(s[i])),n._isSupportPlaceholder()&&!t.browser.ie?t(n.getElement(e[i].label)).attr({placeholder:a}):(r[i]=t('<span id="'+n.$getId(e[i].label+"_placeholder")+'" class="pass-placeholder pass-placeholder-'+e[i].label+'">'+a+"</span>"),t(n.getElement(e[i].label)).after(r[i])),n._rendEventPlaceholder(n.getElement(e[i].label),r[i],s[i])},_getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},_logPass:function(e,t){function n(e){var t,n,r,a,s,i,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(r=e.length,n=0,t="";r>n;){if(a=255&e.charCodeAt(n++),n===r){t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4),t+="==";break}if(s=e.charCodeAt(n++),n===r){t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4|(240&s)>>4),t+=o.charAt((15&s)<<2),t+="=";break}i=e.charCodeAt(n++),t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4|(240&s)>>4),t+=o.charAt((15&s)<<2|(192&i)>>6),t+=o.charAt(63&i)}return t}var r=document.location.protocol+"//nsclick.baidu.com/v.gif?pid=111&v="+(new Date).getTime(),a="";for(var s in t)a=a+s+":"+t[s]+",";a=n("{"+a.substring(0,a.length-1)+"}");for(var i in e)e.hasOwnProperty(i)&&(r+="&"+i+"="+e[i]);if(r+="&source=pc",r+="&auto_statistic="+a+"&auto_en="+t.eventType){var o=new Image;o.onload=o.onerror=function(){o.onload=o.onerror=null,o=null},o.src=r}},logClickLink:function(e,t){e=e||{},e=this.formatLogData(e);var n=t.target||t.srcElement,r=n&&n.getAttribute&&n.getAttribute("target"),a="_self"===r||null===r,s=this.makeImgSrc(e);if(a&&(t.preventDefault?t.preventDefault():t.returnValue=!1),window.navigator.sendBeacon&&a)window.navigator.sendBeacon(s),window.location.href=n.getAttribute("href");else if(a)this.lazyLog(n,s,null);else{var i=new Image;i.onload=i.onerror=function(){i.onload=i.onerror=null,i=null},i.src=s}},logCallBack:function(e,t){e=e||{},e=this.formatLogData(e);var n=this.makeImgSrc(e);this.lazyLog({},n,t)},formatLogData:function(e){var n=this.config||{};return t.extend({},{page:e.logPage||"",source:"pc-api",tpl:n.product||"",subpro:n.subpro||"",extrajson:n.extrajson||"",data_source:"fe"},e)},makeImgSrc:function(e){var t=document.location.protocol+"//nsclick.baidu.com/v.gif?pid=111&type=1023&v="+(new Date).getTime(),n="";for(var r in e)e.hasOwnProperty(r)&&(n+="en"!==r?"&"+r+"="+e[r]:"&auto_en="+e[r]);var a="{eventType:"+(e.en||"")+"}";return a=this.base64encode(a),t+="&auto_statistic="+a,t+="&auto_en="+(e.en||""),t+=n},lazyLog:function(e,t,n){function r(){n?n():window.location.href=a}var a=e.getAttribute&&e.getAttribute("href"),s=new Image,i=setTimeout(function(){s.onload=s.onerror=s=null,r("imgTimeout")},200);s.onload=s.onerror=function(){clearTimeout(i),s.onload=s.onerror=s=null,r("imgSuccess")},s.src=t},base64encode:function(e){var t,n,r,a,s,i,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(r=e.length,n=0,t="";r>n;){if(a=255&e.charCodeAt(n++),n===r){t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4),t+="==";break}if(s=e.charCodeAt(n++),n===r){t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4|(240&s)>>4),t+=o.charAt((15&s)<<2),t+="=";break}i=e.charCodeAt(n++),t+=o.charAt(a>>2),t+=o.charAt((3&a)<<4|(240&s)>>4),t+=o.charAt((15&s)<<2|(192&i)>>6),t+=o.charAt(63&i)}return t},_rendEventPlaceholder:function(e,n,r){if(e||r){var a,s,i=this,o=function(e){1===+e?(n&&n[0]&&i.$hide(n[0]),r&&r[0]&&i.$show(r[0])):(n&&n[0]&&i.$show(n[0]),r&&r[0]&&i.$hide(r[0]))};setTimeout(function(){e&&e.value&&o(1)},200),t(n).on("mousedown",function(){s=!0,clearTimeout(a),a=setTimeout(function(){i.suggestionDom&&"none"!==i.suggestionDom.style.display||e.focus()},0)}),t(r).on("click",function(){e.value="",o(0),e.focus(),i.suggestionDom&&(i.suggestionDom.data_delete=!0,setTimeout(function(){i.suggestionDom.data_delete=!1},200))}),t(e).on("keyup",function(){o(e.value?1:0)}),t(e).on("focus",function(){window.inputCheckTimer=setInterval(function(){e.value.length?(o(1),clearInterval(window.inputCheckTimer)):o(0)},30)})}},SBCtoDBC:function(e){var t="";if(e){for(var n=e.length,r=0;n>r;r++){var a=e.charCodeAt(r);a=a>=65281&&65374>=a?a-65248:a,a=12288==a?32:a,t+=String.fromCharCode(a)}return t}},hide:function(){this.getElement().style.display="none"},show:function(){this.getElement().style.display="block"},_analysis:function(e,t){return window.passport.analysis&&window.passport.analysis[this.module]&&window.passport.analysis[this.module][e]?(window.passport.analysis[this.module][e](this,t),{preventDefault:!1,preventEvent:!1}):void 0},_hook:function(e,t){return window.passport.hook&&window.passport.hook[this.module]&&window.passport.hook[this.module][e]?window.passport.hook[this.module][e](this,t):{preventDefault:!1,preventEvent:!1}},fireEvent:function(e,t){var n=this._hook(e,t),r=!0;return n.preventEvent||(r=this.fire(e,t)),!n.preventDefault&&r},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):""}}),n.passport.multiUnbind=t.lang.createClass(function(n){var r=this;r.config={staticPage:"",product:"",charset:"",token:"",lang:"zh-CN",subpro:""},t.extend(r.config,n),this.module="multiUnbind",r.constant={CONTAINER_CLASS:"tang-pass-fill",FOCUS_CLASS:"pass-text-input-focus",HOVER_CLASS:"pass-text-input-hover",ERROR_CLASS:"pass-text-input-error"},r.lang=e.err.getCurrent().labelText.multiUnbind,e.data.setContext(t.extend({},r.config))},{type:"magic.passport.multiUnbind",superClass:n.passport}).extend({_getIrregularField:function(e){var t=this,n={intro:'<p id="'+t.$getId("intro")+'" class="pass-intro clearfix"><span class="pass-intro-title">'+t.lang.introTitle+'</span><span class="pass-intro-info clearfix"><em class="pass-intro-phone" id="'+t.$getId("introPhone")+'">'+t.config.phone+'</em><em class="pass-intro-uname" id="'+t.$getId("introUname")+'">'+t.config.uname+"</em></span></p>",generalError:'<p id="'+t.$getId("errorWrapper")+'" class="pass-form-item pass-generalErrorWrapper"><span id="'+t.$getId("error")+'" class="pass-generalError"></span></p>',smsVcode:'<p id="'+t.$getId("smsVcodeWrapper")+'" class="pass-form-item pass-form-item-smsVcode"><label for="'+t.$getId("smsVcode")+'" id="'+t.$getId("smsVcodeLabel")+'" class="pass-label pass-label-smsVcode">'+t.lang.smsVcode+'</label><input id="'+t.$getId("smsVcode")+'" type="text" name="smsVcode" class="pass-text-input pass-text-input-smsVcode" /><input id="'+t.$getId("smsVcodeSend")+'" type="button" class="pass-button pass-button-grey pass-button-smsvcodesend" value='+t.lang.smsVcodeSend+'><span id="'+t.$getId("smsVcodeTip")+'" class="pass-item-tip pass-item-tip-smsVcode"><span class="pass-item-tiptext pass-item-tiptext-smsVcode" id="'+t.$getId("smsVcodeTipText")+'"></span></span></p>',submit:'<p id="'+t.$getId("submitWrapper")+'" class="pass-form-item pass-form-item-submit"><input id="'+t.$getId("submit")+'" type="submit" value="'+t.lang.submit+'" class="pass-button pass-button-submit" /></p>',success:'<div id="'+t.$getId("success")+'" class="pass-success" style="display:none"><h3 id="'+t.$getId("successTitle")+'" class="pass-success-title"></h3><button id="'+t.$getId("successBtn")+'" class="pass-button pass-success-btn">'+t.lang.successBtn+"</button></div>",failed:'<div id="'+t.$getId("failed")+'" class="pass-failed" style="display:none"><h3 id="'+t.$getId("failedTitle")+'" class="pass-failed-title"></h3><p id="'+t.$getId("failedInfo")+'" class="pass-failed-info">'+t.lang.failedInfo+"</p></div>"};return n[e]},_getTemplate:function(){var e=this,t='<form autocomplete="off" id="'+e.$getId("form")+'" method="POST">',n={tpl:e.config.product,token:e.config.token,username:e.config.uname,subpro:e.config.subpro};return t+=e._getHiddenField(n),t+=e._getIrregularField("intro"),t+=e._getIrregularField("generalError"),t+=e._getIrregularField("smsVcode"),t+=e._getIrregularField("submit"),t+="</form>",t+=e._getIrregularField("success"),t+=e._getIrregularField("failed")},render:function(e){var n=this;n.getElement()||n.$mappingDom("",e||document.body);var r=t(n.getElement()),a=n._getTemplate();r.addClass(n.constant.CONTAINER_CLASS),r.get(0).appendChild(t(a).get(0)),r.get(0).appendChild(t(a).get(1)),r.get(0).appendChild(t(a).get(2)),n._getPlaceholder([{label:"smsVcode",placeholder:"smsVcodePh"}]);var s=n.fireEvent("render");s&&(n._setValidator(),n._setEvent())},_format:function(e,t){e=String(e);var n=Array.prototype.slice.call(arguments,1),r=Object.prototype.toString;return n.length?(n=1==n.length&&null!==t&&/\[object Array\]|\[object Object\]/.test(r.call(t))?t:n,e.replace(/#\{(.+?)\}/g,function(e,t){var a=n[t];return"[object Function]"==r.call(a)&&(a=a(t)),"undefined"==typeof a?"":a})):e},changeUname:function(e){var t=this;e=e||t.config.uname,t.config.uname=e,t.getElement("introUname").innerHTML=e,t.getElement("username").value=e,t.$show("form").$hide("success").$hide("failed")},_setValidator:function(){var e=this;e.validateRules={smsVcode:{rules:["required"],desc:e.lang.smsVcode}},e._validator.init(e,e.validateRules)},_validateError:function(e,n){var r=this,a=t(r.getElement(e.field));a.addClass(r.constant.ERROR_CLASS),r.$show("error"),r.getElement("error").innerHTML=e.msg,n&&n.callback&&callback()},_validateSuccess:function(e,n){var r=this,a=t(r.getElement(e.field));r.$hide("error"),a.removeClass(r.constant.ERROR_CLASS),n&&n.callback&&callback()
},_sendSmsvcode:function(){var n=this,r=!0,a=60,s=n.getElement("smsVcodeSend");if(!n.sendSmsvcodeFlag){var i=function(){n.getElement("smsVcodeTipText").innerHTML=n.lang.smsVcodeSucc,n.setGeneralError("")},o=function(e){r=!0,n.sendSmsvcodeFlag=!1,s.value=n.lang.smsVcodeResend,t(s).removeClass("pass-button-disable"),e&&(n.setGeneralError(e),n.$show("error"))};t(s).addClass("pass-button-disable"),s.value=n.lang.smsVcodeSending,n.sendSmsvcodeFlag=!0,clearInterval(n.timer),e.data.authwidGetverify({authtoken:n.config.token,type:"mobile",jsonp:1,action:"send"}).success(function(e){e.errInfo.no||0==e.errInfo.no||(e.errInfo={no:11e4==e.data.errno?0:e.data.errno}),r=!1,0==e.errInfo.no?(i(),n.timer=setInterval(function(){1>a?(n.sendSmsvcodeFlag=!1,t(s).removeClass("pass-button-disable"),s.value=n.lang.smsVcodeResend):s.value=n.lang.smsVcodeResend+"("+a--+")"},1e3)):o(e.data.msg||n.lang.smsVcodeSendErr)}),setTimeout(function(){r&&o(n.lang.smsVcodeSendErr)},5e3)}},_multiSuccess:function(e){var n,r=this,a=10,s=r.fireEvent("multiUnbindBeforeend",{rsp:e});s&&(r.getElement("successTitle").innerHTML=r._format(r.lang.successTitle,{uname:r.config.uname}),n=setInterval(function(){if(1>a){var t=r.fireEvent("multiUnbindEnd",{rsp:e});if(!t)return;clearInterval(n)}else r.getElement("successBtn").innerHTML=r.lang.successBtn+"("+a+")",a--},1e3),t(r.getElement("successBtn")).on("click",function(t){t.preventDefault(),clearInterval(n);r.fireEvent("multiUnbindEnd",{rsp:e})}))},_eventHandler:function(){var n,r={focus:function(){var e=n.fireEvent("fieldFocus",{ele:this});e&&(this.addClass(n.constant.FOCUS_CLASS),this.removeClass(n.constant.ERROR_CLASS))},blur:function(){var e=n.fireEvent("fieldBlur",{ele:this});e&&this.removeClass(n.constant.FOCUS_CLASS)},mouseover:function(){var e=n.fireEvent("fieldMouseover",{ele:this});e&&this.addClass(n.constant.HOVER_CLASS)},mouseout:function(){var e=n.fireEvent("fieldMouseout",{ele:this});e&&this.removeClass(n.constant.HOVER_CLASS)}},a={focus:{},click:{smsVcodeSend:function(){n._sendSmsvcode()}},blur:{smsVcode:function(){}},submit:function(r){n.validateAll({success:function(){n.getElement("submit").focus();var r=n.fireEvent("beforeSubmit");if(r){var a=t.form.json(n.getElement("form"));a.userName!=a.selectedSuggestName&&(a.selectedSuggestName=""),a.timeSpan=(new Date).getTime()-n.initTime,e.data.multiUnbind(a).success(function(e){if(0==e.errInfo.no){var t=n.fireEvent("multiUnbindSuccess",{rsp:e});if(!t)return;n.getElement("successTitle").innerHTML=e.data.uname+n.lang.successTitle,n.$hide("form").$show("success"),n._multiSuccess(e)}else{var t=n.fireEvent("multiUnbindError",{rsp:e});if(!t)return;401005==e.errInfo.no?(n.$hide("form").$show("failed"),n.getElement("failedTitle").innerHTML=n._format(n.lang.failedTitle,{uname:n.config.uname})):(e.errInfo.field?n.setValidateError(e.errInfo.field,e.errInfo.msg):n.setGeneralError(e.errInfo.msg),n.$show("error"))}})}},error:function(){}},!0),r.preventDefault()},change:{userName:function(){}}};return{entrance:function(e){n=this;var s=(t(e.target),e.target.name);if(!s&&e.target.id){var i=e.target.id.match(/\d+__(.*)$/);i&&(s=i[1])}s&&(r.hasOwnProperty(e.type)&&r[e.type].apply(t(e.target),[s,e]),a.hasOwnProperty(e.type)&&("function"==typeof a[e.type]&&a[e.type].apply(t(e.target),[e]),a[e.type].hasOwnProperty(s)&&a[e.type][s].apply(t(e.target),[s,e])))}}}()}),n});