$(function() {

    Vue.component("course", {
        data: {},
        template: "#course",
        mounted: function() {
            $(".course-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    Vue.component("note", {
        template: "#notes",
        mounted: function() {
            $(".note-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    Vue.component("ask", {
        template: "#ask",
        mounted: function() {
            $(".ask-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    Vue.component("zy", {
        template: "#zy",
        mounted: function() {
            $(".zy-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    Vue.component("school", {
        template: "#school",
        mounted: function() {
            $(".school-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    Vue.component("jg", {
        template: "#jg",
        mounted: function() {
            $(".jg-box .pages").pagination({
                pageCount: 9,
                current: 2,
                count: 2,
                coping: true,
                nextContent: "",
                prevContent: "",
                callback: function(e) {
                    console.log(e.getCurrent())
                }
            })
        }
    })
    var app = new Vue({
        el: ".collect-inner-box",
        data:{
            msg:"course",
        },
        mounted:function(){
            var that=this;
            $(".collect-tab a").bind("click",function(){
                $(this).addClass("act").siblings().removeClass("act")
                that.msg=$(this).attr("data-id")
            })
        }
    })
    // var course = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#course",
    //     mounted: function() {
    //         $(".course-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var note = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#notes",
    //     mounted: function() {
    //         $(".note-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var ask = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#ask",
    //     mounted: function() {
    //         $(".ask-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var zy = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#zy",
    //     mounted: function() {
    //         $(".zy-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var school = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#school",
    //     mounted: function() {
    //         $(".school-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var jg = {
    //     data: function() {
    //         return {}
    //     },
    //     template: "#jg",
    //     mounted: function() {
    //         $(".jg-box .pages").pagination({
    //             pageCount: 9,
    //             current: 2,
    //             count: 2,
    //             coping: true,
    //             nextContent: "",
    //             prevContent: "",
    //             callback: function(e) {
    //                 console.log(e.getCurrent())
    //             }
    //         })
    //     }
    // }
    // var routes = [{
    //     path: "/course",
    //     component: course
    // }, {
    //     path: "/note",
    //     component: note
    // }, {
    //     path: "/ask",
    //     component: ask
    // }, {
    //     path: "/zy",
    //     component: zy
    // }, {
    //     path: "/school",
    //     component: school
    // },{
    //     path: "/jg",
    //     component: jg
    // }, {
    //     path: "*",
    //     redirect: "/course"
    // }]
    // var router = new VueRouter({
    //     routes: routes,
    //     linkActiveClass: "act"
    // })
    // var app = new Vue({
    //     el: ".collect-inner-box",
    //     router: router
    // })
})