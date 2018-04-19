
/*!
* FoxUI.js 3.2.0 , author: FED-H5, date:20161031 11:26:21
* Copyright 2016 sohutv inc.
*/
!function() {
    function e() {
        a && a.setAttribute("content", "width=device-width, initial-scale=" + d + ", minimum-scale=" + d + ", maximum-scale=" + d + ", user-scalable=no")
    }
    function t(e) {
        var t = e || window.event
          , n = !(!e || "resize" !== e.type);
        t && (v = document.documentElement.clientHeight || document.body.clientHeight,
        p = document.documentElement.clientWidth || document.body.clientWidth,
        u = p >= 1024 && p / v > 1 ? 2048 : 750),
        window.orientation && (90 == window.orientation || -90 == window.orientation) || !t && b || n && p / v > 1 ? (l = n ? Math.max(v, p) : Math.max(h, f),
        b && (b = !1)) : l = n ? Math.min(v, p) : Math.min(h, f);
        var i = (l / u * 100).toFixed(2);
        i = Math.min(i, s),
        o.style.fontSize = i + "px",
        svp.rem = i
    }
    window.svp = window.svp || {};
    var n = window.document
      , i = window
      , o = n.documentElement
      , a = n.querySelector('meta[name="viewport"]')
      , r = 0
      , d = 1
      , s = 100
      , m = null
      , c = o.getAttribute("data-rem") || "false";
    c = "1" == c || "true" === c ? !0 : !1;
    var u = o.getAttribute("data-design") || 750;
    r = i.devicePixelRatio >= 3 ? 3 : 2 === i.devicePixelRatio ? 2 : 1,
    d = (1 / r).toFixed(1);
    var v, p, l, w = /ipad/i.test(window.navigator.userAgent), h = document.documentElement.clientHeight || document.body.clientHeight, f = document.documentElement.clientWidth || document.body.clientWidth, b = !1, g = !!(w && f / h >= 1);
    (f >= 1024 && f / h > 1 || g) && (u = 2048,
    b = !0,
    g && 1024 > f && (f = 1024));
    var x = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, !!i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    }
    ;
    if (c) {
        t();
        var m, y, E = this, A = "onorientationchange"in window ? "orientationchange" : "resize";
        x(window, A, function(e) {
            clearTimeout(m);
            var n = function() {
                t(e)
            }
            .bind(E);
            m = setTimeout(n, 300)
        }),
        window.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                clearTimeout(y);
                var n = function() {
                    t(e)
                }
                .bind(E);
                y = setTimeout(n, 300)
            }
        }, !1)
    }
    svp.setRem = t,
    svp.setViewport = e,
    svp.scale = d,
    svp.dpr = r,
    svp.rem = svp.rem || s,
    o.setAttribute("data-dpr", r),
    o.setAttribute("data-scale", d),
    o.setAttribute("data-design", u),
    o.setAttribute("data-rem", c),
    svp.rem2px = function(e) {
        var t = parseFloat(e) * svp.rem;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"),
        t
    }
    ,
    svp.px2rem = function(e) {
        var t = parseFloat(e) / svp.rem;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"),
        t
    }
    ,
    "function" == typeof define && define("base/rem", function(require, exports, module) {
        module.exports = {
            setRem: svp.setRem,
            setViewport: e,
            scale: d,
            rem: svp.rem || s,
            dpr: r
        }
    })
}(window);
