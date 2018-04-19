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


var type1 = Vue.component('type1', {
    template: '#type1',
    data: function() {
        return {
            uanswer: '',
        };
    },
    methods: {
        isSelet: function(a) {
            if (this.uanswer) {
                return this.uanswer.indexOf(a) > -1 ? true : false;
            }
        },
    }
});
var type2 = Vue.component('type2', {
    template: '#type2',
});
var type3 = Vue.component('type3', {
    template: '#type3',
    data: function() {
        return {
            uanswer: '',
        };
    },
    methods: {
        isSelet: function(a) {
            if (this.uanswer) {
                return this.uanswer.indexOf(a) > -1 ? true : false;
            }
        },
    }
});
var store = new Vuex.Store({
    state: {
        index: 5,
    },
});
var app = new Vue({
    el: '#main',
    store: store,
    data: {
        uanswer: '',
        sibmitShow: false,
        needKnow: false,
        type: 4
    },
    computed:{
        
    },
    methods: {
        changeAnswer: function(a, type) {
            if (type != 2) {
                this.uanswer = a;
            } else {
                if (this.uanswer.indexOf(a) > -1) {
                    this.uanswer = this.uanswer.replace(a, '');
                } else {
                    this.uanswer += a;
                }
            }
        },
        isSelet: function(a) {
            if (this.uanswer) {
                return this.uanswer.indexOf(a) > -1 ? true : false;
            }
        },
    },
    mounted: function() {
        console.log(this.$store.state.index)
    }
});