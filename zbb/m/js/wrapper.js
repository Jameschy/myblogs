var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{},passport._define=passport._define||function(a,s){passport._modulePool[a]=s&&s()},passport._getModule=passport._getModule||function(a){return passport._modulePool[a]};var passport=window.passport||{};passport._load=passport._load||function(a,s,e){var t=document,n=t.createElement("SCRIPT");if(s){n.type="text/javascript",n.charset="UTF-8";var r=a.split("?")[0],p=Math.round(1e3*Math.random()),i=(new Date).getTime();n.readyState?n.onreadystatechange=function(){if("loaded"===n.readyState||"complete"===n.readyState){if(n.onreadystatechange=null,100===p){var a=(new Date).getTime()-i;(new Image).src=document.location.protocol+"//nsclick.baidu.com/v.gif?pid=111&type=1023&url="+encodeURIComponent(r)+"&time="+a}e&&e()}}:n.onload=function(){if(100===p){var a=(new Date).getTime()-i;(new Image).src=document.location.protocol+"//nsclick.baidu.com/v.gif?pid=111&type=1023&url="+encodeURIComponent(r)+"&time="+a}e&&e()},n.src=100===p?r+"?t="+Math.random():a,t.getElementsByTagName("head")[0].appendChild(n)}else n.type="text/javascript",n.charset="UTF-8",n.src=a,t.getElementsByTagName("head")[0].appendChild(n),n.readyState?n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&(n.onreadystatechange=null,e&&e())}:n.onload=function(){e&&e()}},passport.ieVersion=function(){var a,s=navigator.userAgent.toLowerCase(),e=s.indexOf("msie")>-1;return e&&(a=s.match(/msie ([\d.]+)/)[1]),a},passport._use=passport._use||function(a,s,e){function t(){var a=passport._getModule(i);if(!a)throw new Error("load "+i+"module script error.");e&&e(a)}var n={"http:":"http://passport.bdimg.com","https:":"https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv"};passport.ieVersion()<=8&&(n={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"});var r;r=passport&&"https"===passport._protocol?"https:":window.location?window.location.protocol.toLowerCase():document.location.protocol.toLowerCase();var p=(n[r]||n["https:"])+s,i=a+".js",o=passport._getModule(i);o?e&&e(o):passport._load(p,!0,t)},passport.use=passport.use||function(a,s,e){var t=s&&s.tangram===!1?"":"_tangram";s&&s.protocol&&(passport._protocol=s.protocol),"reg"===a&&s&&s.regPhoneOnly&&(a="regPhone");var n="login"===a&&s&&s.loginVersion&&"v4"===s.loginVersion,r=n?"/passApi/js/loginv4_21b4899.js":"/passApi/js/login_c99c4ee.js",p=n?"/passApi/js/loginv4_tangram_e900ed8.js":"/passApi/js/login_tangram_9375f77.js",i={login:r,login_tangram:p,smsloginEn:"/passApi/js/smsloginEn_6e229f0.js",smsloginEn_tangram:"/passApi/js/smsloginEn_tangram_7824f1f.js",loginWLtoPC:"/passApi/js/loginWLtoPC_98684d0.js",accConnect:"/passApi/js/accConnect_8dea38d.js",accConnect_tangram:"/passApi/js/accConnect_tangram_b42d6cb.js",accRealName:"/passApi/js/accRealName_cf7f3e5.js",accRealName_tangram:"/passApi/js/accRealName_tangram_58165f1.js",checkPhone:"/passApi/js/checkPhone_d490a05.js",checkPhone_tangram:"/passApi/js/checkPhone_tangram_d734576.js",checkIDcard:"/passApi/js/checkIDcard_59a38e5.js",checkIDcard_tangram:"/passApi/js/checkIDcard_tangram_801bdc5.js",travelComplete:"/passApi/js/travelComplete_86e2912.js",travelComplete_tangram:"/passApi/js/travelComplete_tangram_a3d4b0a.js",bindGuide:"/passApi/js/bindGuide_abc8126.js",bindGuide_tangram:"/passApi/js/bindGuide_tangram_5781ac6.js",accSetPwd:"/passApi/js/accSetPwd_8109ba5.js",accSetPwd_tangram:"/passApi/js/accSetPwd_tangram_d00b180.js",IDCertify:"/passApi/js/IDCertify_cf99365.js",IDCertify_tangram:"/passApi/js/IDCertify_tangram_ef7eb24.js",secondCardVerify:"/passApi/js/secondCardVerify_7d5de75.js",secondCardVerify_tangram:"/passApi/js/secondCardVerify_tangram_918560f.js",IDCertifyQrcode:"/passApi/js/IDCertifyQrcode_4db6064.js",IDCertifyQrcode_tangram:"/passApi/js/IDCertifyQrcode_tangram_6536ce1.js",loadingApi:"/passApi/js/loadingApi_c483bcd.js",loadingApi_tangram:"/passApi/js/loadingApi_tangram_6256e4f.js",loginWap:"/passApi/js/loginWap_6da7ccb.js",reg:"/passApi/js/reg_1e6e081.js",reg_tangram:"/passApi/js/reg_tangram_ff790b5.js",regPhone:"/passApi/js/regPhone_a90f0bf.js",regPhone_tangram:"/passApi/js/regPhone_tangram_bde2e1e.js",fillUserName:"/passApi/js/fillUserName_f45a505.js",fillUserName_tangram:"/passApi/js/fillUserName_tangram_b85ab79.js",qrcode:"/passApi/js/qrcode_5efa25e.js",qrcode_tangram:"/passApi/js/qrcode_tangram_ade950f.js",realUserTag:"/passApi/js/realUserTag_0013893.js",realUserTag_tangram:"/passApi/js/realUserTag_tangram_e5f75f4.js",bind:"/passApi/js/bind_38727f5.js",bind_tangram:"/passApi/js/bind_tangram_2befafd.js",multiBind:"/passApi/js/multiBind_ca67689.js",multiBind_tangram:"/passApi/js/multiBind_tangram_36a0fe6.js",multiUnbind:"/passApi/js/multiUnbind_6370bbd.js",multiUnbind_tangram:"/passApi/js/multiUnbind_tangram_14f0f35.js",changeUser:"/passApi/js/changeUser_4191a2a.js",changeUser_tangram:"/passApi/js/changeUser_tangram_d21b67c.js",loginMultichoice:"/passApi/js/loginMultichoice_cdef7c5.js",loginMultichoice_tangram:"/passApi/js/loginMultichoice_tangram_4d221fa.js",confirmWidget:"/passApi/js/confirmWidget_8e53be9.js",confirmWidget_tangram:"/passApi/js/confirmWidget_tangram_b35a593.js",uni_rebindGuide:"/passApi/js/uni_rebindGuide_4224215.js",uni_rebindGuide_tangram:"/passApi/js/uni_rebindGuide_tangram_4234c58.js"},o=a+t;2===arguments.length&&(e=s),s&&s.tangramInst&&(passport.tangramInst=s.tangramInst),passport._use(o,i[o],e)};