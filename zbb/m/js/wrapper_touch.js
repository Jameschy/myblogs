var passportTouch=window.passportTouch||{};passportTouch._modulePool=passportTouch._modulePool||{},passportTouch._define=passportTouch._define||function(e,t){passportTouch._modulePool[e]=t&&t()},passportTouch._getModule=passportTouch._getModule||function(e){return passportTouch._modulePool[e]},passportTouch._load=passportTouch._load||function(e,t,o){if(t){var s=document,a=s.createElement("SCRIPT");a.type="text/javascript",a.charset="UTF-8";var p=e.split("?")[0],r=Math.round(1e3*Math.random()),c=(new Date).getTime();a.onload=function(){if(100===r){var e=(new Date).getTime()-c;(new Image).src="https://nsclick.baidu.com/v.gif?pid=111&type=1023&url="+encodeURIComponent(p)+"&time="+e}o&&o()},a.src=100===r?p+"?t="+Math.random():e,s.getElementsByTagName("head")[0].appendChild(a)}else{var s=document,a=s.createElement("SCRIPT");a.type="text/javascript",a.charset="UTF-8",a.src=e,s.getElementsByTagName("head")[0].appendChild(a),a.readyState?a.onreadystatechange=function(){("loaded"===a.readyState||"complete"===a.readyState)&&(a.onreadystatechange=null,o&&o())}:a.onload=function(){o&&o()}}},passportTouch._loadCss=passportTouch._loadCss||function(e){var t=document,o=t.createElement("link");o.rel="stylesheet",o.type="text/css",o.href=e,o.disabled=!1,t.getElementsByTagName("head")[0].appendChild(o)},passportTouch._use=passportTouch._use||function(e,t,o){function s(){var e=passportTouch._getModule(p);if(!e)throw new Error("load "+p+"module script error.");o&&o(e)}var a=t,p=e+".js",r=passportTouch._getModule(p);if(r)o&&o(r);else{var c=!0;"mkd"===e&&(c=!1),passportTouch._load(a,c,s)}},passportTouch.use=passportTouch.use||function(e, t, o){var s=t&&t.library===!1?"":"_zepto",a={mkd:"https://gss0.bdstatic.com/6bMWfDe8BsgCpNKfpU_Y_D3/static/touch/js/api/mkd.js"},p={mkd:"https://gss0.bdstatic.com/6bMWfDe8BsgCpNKfpU_Y_D3/static/touch/css/api/mkd_0ff2c55.css"},r=e;t.defaultCss&&passportTouch._loadCss(p[r]?p[r]:p["default"]),2===arguments.length&&(o=t),"mkd"!==e&&(r=e+s),passportTouch._use(r,a[r],o)};