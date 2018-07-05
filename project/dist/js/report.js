"use strict";

var h_header = function () {
    var template = "<div id=\"h_header\">\n\t    <div class=\"con\">\n\t\t    <a href=\"/\" class=\"logo\">\n\t\t\t    <span v-text=\"title\">\u5B66\u5206\u5728\u7EBF</span>\n\t\t\t    <span>Studybanks.com</span>\n\t    \t</a>\n\t    \t<div class=\"text\" v-text=\"text\"></div>\n\t    </div>\n    </div>";
    return Vue.component("h_header", {
        template: template,
        props: {
            text: {
                type: String,
                default: "请传入标题"
            },
            title: {
                type: String,
                default: "学分在线"
            }
        }
    });
}();
"use strict";

//-------------------------------
var popBox = function () {
	var template = "<div class=\"popBox\">\n\t\t<div class=\"pop-mask\" @click=\"close('bg')\"></div>\n\t\t<div class=\"pop-container\" :style=\"{width}\">\n\t\t\t<div class=\"iconfont icon-close pop-close\" @click=\"close('icon')\"></div>\n\t\t\t<slot></slot>\n\t\t</div>\n\t</div>";
	return Vue.component("popBox", {
		template: template,
		props: {
			width: {
				type: String,
				default: "480px"
			}
		},
		methods: {
			close: function close(a) {
				this.$emit("close", a);
			}
		}
	});
}();
//<pop-box @close="close" :width="500px"></pop-box>
//-------------------------------
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*---------------------------------
showComplete({
    maxLength: 200,			//最大可输入长度
    comment: '456132165',	//预设内容
    placeholder:'',			//预设提示内容
    sureFn(a) {				//确定回调 返回输入的内容
        console.log(a)
    },
    cancelFn(a) {			//取消的回调 返回输入的内容
        console.log(a)
    }
------------------------------*/

var showComplete = function () {
    var template = "<transition name='fade' @after-leave='afterLeave'>\
    		    	<pop-box v-show='show' :id='id' @close='close'>\
    		            <div class='course-complete'>\
    		                <p>XXXX 学生已达成“课程结业“标准，您确认允许结业并给予课程评价吗？</p>\
    		                <p class='warning'>（请慎重：此操作不可撤回或修改）</p>\
    		                <div class='text-input'>\
    		                    <textarea v-model='comment' :placeholder='placeholder'></textarea>\
    		                    <p class='number'><span v-text='comment.length'></span>/<span v-text='maxLength'></span></p>\
    		                    <p class='warning' v-show='showWarning&&!comment'>*请填写评语</p>\
    		                </div>\
    		                <div class='btns'>\
    		                    <span class='border-theme' @click='cancelFn'>拒绝结业</span>\
    		                    <span class='btn-theme' @click='sure'>准许结业</span>\
    		                </div>\
    		            </div>\
    		        </pop-box>\
            </transition>";
    var opts = {
        comment: '',
        placeholder: '请填写评语（请您点评该学生学习课程过程中的各种表现，此点评内容提交后',
        maxLength: 100,
        sureFn: null,
        cancelFn: null
    };
    return function (obj) {
        if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object') {
            for (var i in obj) {
                opts[i] = obj[i];
            }
        }
        var div = $('<div class="newComplete"></div>');
        div.appendTo($('#app'));
        new Vue({
            el: div[0],
            template: template,
            data: {
                show: false,
                showWarning: false,
                comment: opts.comment,
                maxLength: opts.maxLength,
                placeholder: opts.placeholder
            },
            computed: {
                id: function id() {
                    return new Date().getTime();
                }
            },
            methods: {
                close: function close(a) {
                    this.show = false;
                },
                afterLeave: function afterLeave() {
                    $('#' + this.id).remove();
                    this.$destroy();
                },
                sure: function sure() {
                    if (!this.comment) {
                        this.showWarning = true;
                        return;
                    }
                    if (opts.sureFn) {
                        opts.sureFn(this.comment);
                    }
                    this.show = false;
                },
                cancelFn: function cancelFn() {
                    if (opts.cancelFn) {
                        opts.cancelFn(this.comment);
                    }
                    this.show = false;
                }
            },
            watch: {
                comment: function comment(n, o) {
                    if (n.length > this.maxLength) {
                        this.comment = n.substr(0, this.maxLength);
                    }
                }
            },
            mounted: function mounted() {
                this.show = true;
            }
        });
    };
}();
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Confirm = function () {
    var opts = {
        title: "",
        text: '请输入提示文字',
        sureText: "确定",
        cancelText: "取消",
        sureFn: null,
        cancelFn: null,
        showSure: true,
        showCancel: true,
        textAlign: 'center'
    };
    var template = '<div class="popBox pop-confirm" ref="newNode">\
            <transition name="fade">\
                <div class="pop-mask" v-show="show" @click="close"></div>\
            </transition>\
            <transition name="fade" @after-leave="afterLeave">\
                <div class="pop-container" v-show="show">\
                    <div class="iconfont icon-close" @click="close"></div>\
                    <p v-if="title" v-text="title" class="t"></p>\
                    <p v-text="text" :style="{textAlign}"></p>\
                    <div class="btns">\
                        <span v-if="showCancel" class="border-theme" v-text="cancelText" @click="cancel"></span>\
                        <span v-if="showSure" class="btn-theme" v-text="sureText" @click="sure"></span>\
                    </div>\
                </div>\
            </transition>\
        </div>';
    return function (obj) {
        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
            for (var i in obj) {
                opts[i] = obj[i];
            }
        }
        var id = 'newId' + new Date().getTime();
        var oWrapper = $("<div class=" + id + "></div>");
        oWrapper.appendTo($("#app"));
        var Confirm = Vue.extend({
            template: template
        });
        new Confirm({
            el: oWrapper[0],
            data: {
                show: false,
                title: opts.title,
                text: opts.text,
                sureText: opts.sureText,
                sureFn: opts.sureFn,
                cancelText: opts.cancelText,
                cancelFn: opts.cancelFn,
                showSure: opts.showSure,
                showCancel: opts.showCancel,
                textAlign: opts.textAlign
            },
            methods: {
                afterLeave: function afterLeave() {
                    $(this.$refs.newNode).remove();
                    this.$destroy();
                },
                close: function close() {
                    this.show = false;
                },
                sure: function sure() {
                    this.close();
                    if (this.sureFn) {
                        this.sureFn();
                    }
                },
                cancel: function cancel() {
                    this.close();
                    if (this.cancelFn) {
                        this.cancelFn();
                    }
                }
            },
            mounted: function mounted() {
                this.show = true;
            }
        });
    };
}();
"use strict";

//----------------pullDownMenu----------------------------------------
//<pull-down-menu title="请选择原因" :list="['a','b']" @senddata="getdata"></pull-down-menu>
//---------------------------------------------------------------
var pullDownMenu = function () {
    var template = '<div class="pull-down-menu" ref="down" @click.stop="showListFn">\
                    <div class="iconfont icon-xiajiantou"></div>\
                    <p class="pull-down-text" v-text="titleText" ></p>\
                    <ul class="pull-down-list" :style="{width}" v-show="showList">\
                        <li v-for="(it,key) in list" v-text="it" @click="changeTitle(it,key)">原因1</li>\
                    </ul>\
                </div>';
    return Vue.component("pullDownMenu", {
        template: template,
        props: {
            title: {
                type: String,
                default: "下拉菜单"
            },
            list: {
                type: Array || Object,
                default: [1, 2, 3, 4]
            }
        },
        data: function data() {
            return {
                titleText: this.title,
                list: this.list,
                width: "100%",
                showList: false
            };
        },

        methods: {
            changeTitle: function changeTitle(val, key) {
                this.titleText = val;
                console.log(this.title);
                this.$emit('senddata', { val: val, key: key });
            },
            showListFn: function showListFn() {
                this.showList = !this.showList;
                if (this.showList) {
                    this.width = this.$refs.down.offsetWidth + "px";
                }
            }
        },
        mounted: function mounted() {
            var _this = this;

            document.addEventListener("click", function () {
                _this.showList = false;
            });
        }
    });
}();
//--------------pullDownMenu-end------------------------------------
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ----turnDown--------驳回原因-------------------------------
turnDown({
    text: "该学生综合成绩已符合申请学分标准，请您选择合理的驳回原因：",
    pullDownTitle: "请选择驳回原因",
    pullDownList: {
        "a": "a",
        "b": "b",
        "c": "c",
        "other": "其他原因"
    },
    placeHolder: '请输入原因',
    input: "",
    inputMaxLength: 15,
    sureText: "确定",
    cancelText: "取消",
    sureFn: function(a) {
        console.log(a)
    },
    cancelFn: function(a) {
        console.log(a)
    }
})------------------------------------------------*/
var turnDown = function () {
    var opts = {
        text: "",
        pullDownTitle: "请选择拒绝原因",
        pullDownList: [1, 2, 3, 4],
        placeHolder: '请输入原因',
        input: "",
        inputMaxLength: 15,
        sureText: "确定",
        cancelText: "取消",
        sureFn: null,
        cancelFn: null
    };
    var template = '<transition name="fade" @after-leave="afterLeave">\
			<pop-box width="452px" v-show="show" @close="close" :id="id">\
	            <div class="turnDown">\
	                <p class="text" v-text="text"></p>\
	                <pull-down-menu :title="pullDownTitle" :list="pullDownList" @senddata="getPullDownData"></pull-down-menu>\
	                <div class="inputBox" v-show="reason.key==\'other\'">\
	                    <input type="text" :placeHolder="placeHolder" v-model="input">\
	                    <p><span v-text="input.length"></span>/<span v-text="inputMaxLength"></span></p>\
	                </div>\
	                <div class="btns">\
	                    <span class="border-theme" v-text="cancelText" @click="cancelFn"></span>\
	                    <span class="btn-theme" v-text="sureText" @click="sureFn"></span>\
	                </div>\
	            </div>\
	        </pop-box>\
        </transition>';
    return function (obj) {
        if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
            for (var i in obj) {
                opts[i] = obj[i];
            }
        }
        var id = 'newId' + new Date().getTime();
        var oWrapper = $("<div class=" + id + "></div>");
        oWrapper.appendTo($("#app"));
        var turnDown = Vue.extend({
            template: template
        });
        new turnDown({
            el: oWrapper[0],
            data: function data() {
                return {
                    show: false,
                    reason: {},
                    text: opts.text,
                    pullDownTitle: opts.pullDownTitle,
                    pullDownList: opts.pullDownList,
                    placeHolder: opts.placeHolder,
                    input: opts.input,
                    inputMaxLength: opts.inputMaxLength,
                    sureText: opts.sureText,
                    cancelText: opts.cancelText
                };
            },

            computed: {
                id: function id() {
                    return new Date().getTime();
                }
            },
            methods: {
                getPullDownData: function getPullDownData(a) {
                    this.reason = a;
                },
                close: function close() {
                    this.show = false;
                },
                sureFn: function sureFn() {
                    this.close();
                    if (opts.sureFn) {
                        opts.sureFn({
                            key: this.reason.key,
                            val: this.reason.val,
                            other: this.input
                        });
                    }
                },
                cancelFn: function cancelFn() {
                    this.close();
                    if (opts.cancelFn) {
                        opts.cancelFn({
                            key: this.reason.key,
                            val: this.reason.val,
                            other: this.input
                        });
                    }
                },
                afterLeave: function afterLeave() {
                    $("#" + this.id).remove();
                }
            },
            mounted: function mounted() {
                this.show = true;
            }
        });
    };
}();

/* -------turnDown-----------end-------------------------*/
"use strict";

window.onload = function () {
    var app = new Vue({
        el: "#app",
        methods: {
            showComplete: function (_showComplete) {
                function showComplete() {
                    return _showComplete.apply(this, arguments);
                }

                showComplete.toString = function () {
                    return _showComplete.toString();
                };

                return showComplete;
            }(function () {
                var that = this;
                showComplete({
                    maxLength: 200,
                    comment: "456132165",
                    placeholder: "4561321",
                    sureFn: function sureFn(a) {
                        that.sureComplete();
                    },
                    cancelFn: function cancelFn(a) {
                        that.turnDown();
                    }
                });
            }),
            sureComplete: function sureComplete() {
                Confirm({
                    text: "授予学分操作不可撤回更改，确认同意授权该学生2.0学分？",
                    sureText: "确定",
                    cancelText: "取消",
                    sureFn: function sureFn() {
                        console.log('sure');
                    },
                    cancelFn: function cancelFn() {
                        console.log('cancel');
                    }
                });
            },
            turnDown: function (_turnDown) {
                function turnDown() {
                    return _turnDown.apply(this, arguments);
                }

                turnDown.toString = function () {
                    return _turnDown.toString();
                };

                return turnDown;
            }(function () {
                turnDown({
                    text: "该学生综合成绩已符合申请学分标准，请您选择合理的驳回原因：",
                    pullDownTitle: "请选择驳回原因",
                    pullDownList: {
                        "a": "章节成绩不合格",
                        "b": "学习态度差",
                        "c": "考试涉嫌作弊",
                        "d": "多次旷课",
                        "e": "笔记数严重不足",
                        "other": "其他原因"
                    },
                    placeHolder: '请输入原因',
                    input: "",
                    inputMaxLength: 15,
                    sureText: "确定",
                    cancelText: "取消",
                    sureFn: function sureFn(a) {
                        console.log(a);
                    },
                    cancelFn: function cancelFn(a) {
                        console.log(a);
                    }
                });
            })
        }
    });
};