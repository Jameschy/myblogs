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
passport._define('accConnect_tangram.js'/*tpa=http://passport.baidu.com/passApi/js/accConnect_tangram.js*/, function(){
    importScript("tangram.js"/*tpa=http://passport.baidu.com/passApi/js/lib/tangram.js*/);
    importScript("domain.js"/*tpa=http://passport.baidu.com/passApi/js/conf/domain.js*/);
    importScript("magic.js"/*tpa=http://passport.baidu.com/passApi/js/lib/magic.js*/);
    importScript("rsa_wap.js"/*tpa=http://passport.baidu.com/passApi/js/lib/rsa_wap.js*/);
    importScript("accConnect-1.js"/*tpa=http://passport.baidu.com/passApi/js/lang/accConnect.js*/);
    importScript("data.js"/*tpa=http://passport.baidu.com/passApi/js/network/data.js*/);
    importScript("ui.js"/*tpa=http://passport.baidu.com/passApi/js/ui.js*/);
    importScript("accConnect-2.js"/*tpa=http://passport.baidu.com/passApi/js/modules/accConnect.js*/);
    return magic;
})