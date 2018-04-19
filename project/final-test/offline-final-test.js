/***
 * 控制页面最大宽度
 ***/
(function() {
    var width = document.documentElement.clientWidth;
    if (width > 414) {
        width = 414
    }
    document.documentElement.style.fontSize = width / 7.5 + "px";
    window.onresize = function() {
        var width = document.documentElement.clientWidth;
        if (width > 414) {
            width = 414
        }
        document.documentElement.style.fontSize = width / 7.5 + "px";
    }
})();

