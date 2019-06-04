(function ( /*importstart*/ ) {
var scripts = document.getElementsByTagName('script'),
    length = scripts.length,
    src = scripts[length - 1].src,
    pos = src.indexOf('/js/'),
    scriptPath = src.substr(0, pos) + '/js/';
window.importScriptList = {};
window.importScript = function (filename) {
    if (!filename) return;
    if (filename.indexOf("http://") == -1 && filename.indexOf("https://") == -1) {
        if (filename.substr(0, 1) == '/') filename = filename.substr(1);
        filename = scriptPath + filename;
    }
    if (filename in importScriptList) return;
    importScriptList[filename] = true;
    document.write('<script src="' + filename + '" type="text/javascript"><\/' + 'script>');
}
})( /*importend*/ ) 
passport._define('bind_tangram.js'/*tpa=http://passport.baidu.com/passApi/js/bind_tangram.js*/, function(){
    importScript("tangram.js"/*tpa=http://passport.baidu.com/passApi/js/lib/tangram.js*/);
    importScript("domain.js"/*tpa=http://passport.baidu.com/passApi/js/conf/domain.js*/);
    importScript("magic.js"/*tpa=http://passport.baidu.com/passApi/js/lib/magic.js*/);
    importScript("suggestion.js"/*tpa=http://passport.baidu.com/passApi/js/lib/suggestion.js*/);
    importScript("reg.js"/*tpa=http://passport.baidu.com/passApi/js/lang/reg.js*/);
    importScript("data.js"/*tpa=http://passport.baidu.com/passApi/js/network/data.js*/);
    importScript("ui.js"/*tpa=http://passport.baidu.com/passApi/js/ui.js*/);
    importScript("md5.min.js"/*tpa=http://passport.baidu.com/passApi/js/lib/md5.min.js*/);
    importScript("bind-1.js"/*tpa=http://passport.baidu.com/passApi/js/modules/bind.js*/);
    return magic;
})
