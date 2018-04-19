/*
 * 首页课程生成组件
 */
$.homePageCourseRender = {
    render: function(options) {
        var container = $('<div/>', {
            class: 'course_show_content_peripheral pull-left'
        });

        this.options = {
            theCertificateData: [{
                certifyType: 1,
                content: '证书'
            }, {
                certifyType: 2,
                content: '学分'
            }, {
                certifyType: 3,
                content: '独家'
            }],
            theMultiLanguageData: {
                multiLanguageValue: '多语言',
                multiLanguageCountrys: [{
                    countryCode: 'cn',
                    countryName: '中文简体'
                }, {
                    countryCode: 'en',
                    countryName: 'English'
                }]
            },
            theImageAreaData: '/static/images/HomePage/课程1.jpg',
            theDataStatisticsData: {
                isOpenCourserNum: 5,
                ourserNum: 20,
                classesNum: 500
            },
            theReverseData: {
                teacherIntro: '我东方卡解放和瑞和发送旅客',
                courserTitle: '课程简介',
                qtk: '去听课'
            },
            theReverseTopData: {
                teacherName: '王楠',
                teacherFlag: '砖家'
            },
            theSubheadData: '数学副标题',
            theTitleData: '数学'
        }

        this.renderFront().appendTo(container);
        this.renderReverse(this.options.theReverseData).appendTo(container);

        container.appendTo($('.course_show_content_core'));
    },
    /*
     * 正面内容
     */
    renderFront: function() {
        var container = $('<div/>', {
            class: 'course_show_content_positive course_show_content_positive_animate'
        });

        var bottomFirst = $('<div/>', {
            class: 'course_show_content_welfare'
        });

        this.theImageArea(this.options.theImageAreaData).appendTo(container);
        this.theTitle(this.options.theTitleData).appendTo(container);
        this.theSubhead(this.options.theSubheadData).appendTo(container);

        this.theCertificate(this.options.theCertificateData).appendTo(bottomFirst);
        this.theMultiLanguage(this.options.theMultiLanguageData).appendTo(bottomFirst);

        bottomFirst.appendTo(container);

        this.theDataStatistics(this.options.theDataStatisticsData).appendTo(container);

        return container;
    },
    /*
     * 反面内容
     */
    renderReverse: function(data) {
        var container = $('<div/>', {
            class: 'course_show_content_reverse course_show_content_reverse_animate'
        })

        this.theReverseTop(this.options.theReverseTopData).appendTo(container);

        $('<div/>', {
            class: 'course_show_content_reverse_zzz'
        }).text(data.teacherIntro).appendTo(container);

        $('<div/>', {
            class: 'course_show_content_reverse_zzz_title'
        }).text(data.courserTitle).appendTo(container);

        this.theCourserIntro(this.options.theCourserIntroData).appendTo(container);

        var qtk = $('<div/>', {
            class: 'course_show_content_link'
        });

        $('<a/>', {
            class: 'course_show_content_link_text'
        }).text(data.qtk).appendTo(qtk);

        qtk.appendTo(container);

        return container;
    },
    /*
     * 证书组件
     */
    theCertificate: function(data) {
        if (typeof data != 'object') {
            return {};
        }

        var container = $('<div/>', {
            class: 'pull-left'
        });

        for (var key in data) {
            var certifyType = data[key].certifyType,
                certifyClass;
            switch (parseInt(certifyType)) {
                case 1:
                    certifyClass = 'course_show_content_welfare_list_first pull-left';
                    break;

                case 2:
                    certifyClass = 'course_show_content_welfare_list_second pull-left';
                    break;

                case 3:
                    certifyClass = 'course_show_content_welfare_list_third pull-left';
                    break;

                default:
                    break;
            }
            $('<div/>', {
                class: certifyClass
            }).text(data[key].content).appendTo(container);
        }
        return container;
    },
    /*
     * 多语言
     */
    theMultiLanguage: function(data) {
        if (typeof data != 'object') {
            return {};
        }

        var container = $('<div/>', { class: 'pull-right' });
        var containerCore = $('<div/>', { class: 'switch_languages pull-left' });

        var containerCoreEarthIcon = $('<div/>', { class: 'switch_languages_icon pull-left' });

        var containerCoreText = $('<div/>', { class: 'switch_languages_text pull-left' }).text(data.multiLanguageValue);

        var containerCoreTriangleIcon = $('<div/>', { class: 'switch_languages_triangle pull-left' });

        var containerCoreUl = $('<ul/>', { class: 'switch_languages_show' });
        for (var key in data.multiLanguageCountrys) {
            var thisLi = $('<li/>', { class: 'switch_languages_show_list' })

            $('<div/>', { class: 'pull-left switch_languages_icon_' + data.multiLanguageCountrys[key].countryCode }).appendTo(thisLi);
            $('<div/>', { class: 'switch_languages_text pull-left' }).text(data.multiLanguageCountrys[key].countryName).appendTo(thisLi);

            thisLi.appendTo(containerCoreUl);
        }

        containerCoreEarthIcon.appendTo(containerCore);
        containerCoreText.appendTo(containerCore);
        containerCoreTriangleIcon.appendTo(containerCore);
        containerCoreUl.appendTo(containerCore);

        containerCore.appendTo(container);

        return container;
    },
    /*
     * 标题
     */
    theTitle: function(data) {
        return $('<div/>', {
            class: 'course_show_content_title'
        }).text(data);
    },
    /*
     * 副标题
     */
    theSubhead: function(data) {
        return $('<div/>', {
            class: 'course_show_content_prompt'
        }).text(data);
    },
    /*
     * 副标题
     */
    theImageArea: function(data) {
        var container = $('<div/>', {
            class: 'course_show_content_image'
        });

        $('<img/>', {
            class: 'course_show_content_image_img',
            src: '/static/images/gif/5-121204193956-50.gif'
        }).appendTo(container);

        $('<div/>', {
            class: 'course_show_content_image_mask',
            style: 'display: none;'
        }).appendTo(container);

        $('<img/>', {
            class: 'lazy',
            style: 'display: none;',
            'data-original': data
        }).appendTo(container);

        return container;
    },
    /*
     * 数据统计模块
     */
    theDataStatistics: function(data) {
        var container = $('<div/>', {
            class: 'course_show_content_state'
        });

        $('<div/>', {
            class: 'course_show_content_state_text pull-left'
        }).text('已开' + data.isOpenCourserNum + '/' + data.ourserNum + '节').appendTo(container);

        $('<div/>', {
            class: 'course_show_content_state_text pull-right'
        }).text(data.classesNum + '人听课').appendTo(container);

        return container;
    },
    /*
     * 翻转头部
     */
    theReverseTop: function(data) {
        var container = $('<div/>', {
            class: 'course_show_content_reverse_title'
        });

        var titleIcon = $('<div/>', {
            class: 'course_show_content_reverse_title_head pull-left'
        });

        /*
         * 用户头像
         */
        $('<span/>', {
            class: 'course_show_content_reverse_title_head_img'
        }).appendTo(titleIcon);

        /*
         * VIP标志
         */
        $('<span/>', {
            class: 'course_show_content_reverse_title_head_certification'
        }).appendTo(titleIcon);

        titleIcon.appendTo(container);

        /*
         * 老师名称
         */
        $('<div/>', {
            class: 'course_show_content_reverse_title_name pull-left'
        }).text(data.teacherName).appendTo(container);

        /*
         * 老师认证身份
         */
        $('<div/>', {
            class: 'course_show_content_reverse_title_position pull-left'
        }).text(data.teacherFlag).appendTo(container);

        return container;
    },
    /*
     * 课程简介
     */
    theCourserIntro: function(data) {
        return $('<div/>', {
            class: 'course_show_content_reverse_content'
        }).text(data);
    }
}

var user_check_results;
var phmail = false;

function homg_start() {
    $.homePageCourseRender.render();

    $('#carousel-example-generic').carousel({
        interval: 5000
    });
    $('#lecturer_team_peripheral_carousel-example-generic').carousel({
        interval: 4500
    })
    $('#popular_school_peripheral_carousel-example-generic').carousel({
        interval: 4000
    })


    $('.dropdown-toggle').dropdown();

    $(document).on("click", ".logo_text", function() {
        location.reload([true]);
    })

    $(".change_over").hover(function() {
        $(this).find(".change_icon").addClass("change_icon_hover");
    }, function() {
        $(this).find(".change_icon").removeClass("change_icon_hover");
    })

    var course_show_content_image_time;
    $(document).on("mouseenter", ".course_show_content_image", function() {
        var this_parent = $(this).parent(".course_show_content_positive");
        var this_parent_sibling = $(this).parent().siblings(".course_show_content_reverse");
        course_show_content_image_time = setTimeout(function() {
            // this_parent_sibling.removeClass("course_show_content_reverse_animate").addClass("course_show_content_reverse_hover");
            // this_parent.removeClass("course_show_content_positive_animate").addClass("course_show_content_positive_hover");
            this_parent.addClass("course_show_content_positive_hover");
            this_parent_sibling.addClass("course_show_content_reverse_hover");
        }, 100);
    })
    $(document).on("mouseleave", ".course_show_content_image", function() {
        clearTimeout(course_show_content_image_time);
    })

    $(document).on("mouseleave", ".course_show_content_peripheral", function() {
        clearTimeout(course_show_content_image_time);
        var this_children = $(this).children(".course_show_content_reverse");
        var this_children_sibling = $(this).children(".course_show_content_reverse").siblings(".course_show_content_positive");
        // this_children_sibling.removeClass("course_show_content_positive_hover").addClass("course_show_content_positive_animate");
        // this_children.removeClass("course_show_content_reverse_hover").addClass("course_show_content_reverse_animate");
        this_children_sibling.removeClass("course_show_content_positive_hover");
        this_children.removeClass("course_show_content_reverse_hover");
    })

    var lecturer_team_content_small_peripheral_time;
    $(document).on("mouseenter", ".lecturer_team_content_small_peripheral", function() {
        var this_obj = $(this);
        lecturer_team_content_small_peripheral_time = setTimeout(function() {
            $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "#fe6701");
            this_obj.css("z-index", "51");
            this_obj.animate({
                "width": "220px",
                "height": "335px",
                "top": "-50px",
                "padding-top": "2%",
                "background-color": "white"
            });
            this_obj.css("box-shadow", "0px 0px 100px #cfcfcf");
            $(this_obj).find(".lecturer_team_content_small_peripheral_content").show();
        }, 500)
    })
    $(document).on("mouseenter", ".lecturer_team_content_small_peripheral_first", function() {
        var this_obj = $(this);
        this_obj.css("z-index", "51");
        lecturer_team_content_small_peripheral_time = setTimeout(function() {
            $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "#fe6701");
            this_obj.animate({
                "width": "220px",
                "height": "335px",
                "top": "-50px",
                "left": "50px",
                "padding-top": "2%",
                "background-color": "white"
            });
            this_obj.css("box-shadow", "0px 0px 100px #cfcfcf");
            $(this_obj).find(".lecturer_team_content_small_peripheral_content").show();
        }, 500)
    })
    $(document).on("mouseenter", ".lecturer_team_content_small_peripheral_seventh", function() {
        var this_obj = $(this);
        this_obj.css("z-index", "51");
        lecturer_team_content_small_peripheral_time = setTimeout(function() {
            $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "#fe6701");
            this_obj.animate({
                "width": "220px",
                "height": "335px",
                "top": "-50px",
                "left": "79%",
                "padding-top": "2%",
                "background-color": "white"
            });
            this_obj.css("box-shadow", "0px 0px 100px #cfcfcf");
            $(this_obj).find(".lecturer_team_content_small_peripheral_content").show();
        }, 500)
    })
    $(document).on("mouseleave", ".lecturer_team_content_small_peripheral", function() {
        clearTimeout(lecturer_team_content_small_peripheral_time);
        var this_obj = $(this);
        this_obj.css("z-index", "1");
        $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "white");
        this_obj.animate({
            "width": "180px",
            "height": "100%",
            "top": "0",
            "padding-top": "0",
            "background-color": "white"
        });
        this_obj.css("box-shadow", "none");
        $(this).find(".lecturer_team_content_small_peripheral_content").hide();
    })
    $(document).on("mouseleave", ".lecturer_team_content_small_peripheral_first", function() {
        clearTimeout(lecturer_team_content_small_peripheral_time);
        var this_obj = $(this);
        this_obj.css("z-index", "1");
        $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "white");
        this_obj.animate({
            "width": "180px",
            "height": "100%",
            "top": "0",
            "padding-top": "0",
            "background-color": "white",
            "left": "0"
        });
        this_obj.css("box-shadow", "none");
        $(this).find(".lecturer_team_content_small_peripheral_content").hide();
    })
    $(document).on("mouseleave", ".lecturer_team_content_small_peripheral_seventh", function() {
        clearTimeout(lecturer_team_content_small_peripheral_time);
        var this_obj = $(this);
        this_obj.css("z-index", "1");
        $(this).find(".lecturer_team_content_small_peripheral_head_img").css("background-color", "white");
        this_obj.animate({
            "width": "180px",
            "height": "100%",
            "top": "0",
            "padding-top": "0",
            "background-color": "white",
            "left": "1080px"
        });
        this_obj.css("box-shadow", "none");
        $(this).find(".lecturer_team_content_small_peripheral_content").hide();
    })

    // $(".classification_menu_list_first_div").css("display", "none");
    // $(".classification_menu_list_first_div").eq(0).css("display", "block");

    $('.classification_menu_list_first_div_ul a').click(function() {
        $(this).addClass('on').parent().siblings().children('a').removeClass('on');
        var rel = $(this).parents('div:first').find('.classification_menu_list_first_div_ul a.on');

        var cot = $(this).parents('div:first').next(':first').children('ul').children('li');

        for (var i = rel.length - 1; i >= 0; i--) {
            if (typeof rel[i].attributes["data-level"] != 'undefined') {
                var dataL = rel[i].attributes["data-level"];
                if (dataL.nodeValue == 'all') dataL = undefined;
            }
            if (typeof rel[i].attributes["data-type"] != 'undefined') {
                var dataT = rel[i].attributes["data-type"];
                if (dataT.nodeValue == 'all') dataT = undefined;
            }
        }

        cot.each(function(key, val) {
            var $this = $(val);
            var level = $this.attr('data-level');
            var type = $this.attr('data-type');

            if (dataL != undefined && dataT != undefined) {
                if (dataL.nodeValue == level && dataT.nodeValue == type) {
                    $this.show();
                } else {
                    $this.hide();
                }
            }
            if (dataL != undefined && dataT == undefined) {
                if (dataL.nodeValue == level) {
                    $this.show();
                } else {
                    $this.hide();
                }
            }
            if (dataL == undefined && dataT != undefined) {
                if (dataT.nodeValue == type) {
                    $this.show();
                } else {
                    $this.hide();
                }
            }
            if (dataL == undefined && dataT == undefined) {
                $this.show();
            }
        })
    })

    var HomePageMeunTimer;
    $(document).on("mouseover", "li.classification_menu_list_first_list_text", function() {
        $('li.classification_menu_list_first_list_text').css('color', '#999');
        $(this).css('color', '#fe6701');
        var code = $(this).attr('data-code');
        HomePageMeunTimer = setTimeout(function() {
            $('.classification_menu_list_first_div').hide(200);
            $('.classification_menu_list_first_div[data-code="' + code + '"]').show(200).siblings('.classification_menu_list_first_div').hide(200);
        }, 200);
    })
    $(document).on("mouseleave", "li.classification_menu_list_first_list_text", function() {
        clearTimeout(HomePageMeunTimer)
    })

    var HomePageMeunCKTimer;
    $(document).on("mouseenter", ".classification_menu", function() {
        clearTimeout(HomePageMeunLeaveTimer);
        HomePageMeunCKTimer = setTimeout(function() {
            $(".classification_menu_lists").show();
        }, 100)
    })
    $(document).on("mouseleave", ".classification_menu", function() {
        clearTimeout(HomePageMeunCKTimer);
    })
    var HomePageMeunLeaveTimer;
    $(document).on("mouseleave", ".classification_menu_lists", function() {
        var $this = $(this);
        HomePageMeunLeaveTimer = setTimeout(function() {
            $this.hide();
        }, 200)
    })

    var HomePageBannerTimer;
    $('.carousel_img_peripheral .carousel_img_peripheral_div_js_div').mouseenter(function() {
        clearTempBanner();

        var $this = $(this);
        HomePageBannerTimer = setTimeout(function() {
            var thisObj = $this.clone().addClass('gs-ui-silde');

            $this.parents('.carousel_img_peripheral_div_js').css({
                overflow: 'visible'
            }).parents('.carousel-inner').css({
                overflow: 'visible'
            })

            var thisWidth = $this.find('img.lazy').innerWidth();
            var thisHeight = $this.find('img.lazy').innerHeight();

            thisObj.mouseleave(function() {
                $(this).parents('.carousel_img_peripheral_div_js').css({
                    overflow: 'hidden'
                }).parents('.carousel-inner').css({
                    overflow: 'hidden'
                })
                $(this).remove();
            });

            thisObj.appendTo($this.parent()).css({
                'box-shadow': '0 0 10px 2px #000',
                'z-index': 99,
                width: thisWidth,
                height: thisHeight,
                position: 'absolute'
            }).animate({
                width: thisWidth + 18 + 'px',
                height: thisHeight + 18 + 'px',
                left: '-9px',
                top: '-9px'
            }, 300);

            thisObj.find('.carousel_img_content_three').show();

            var dbottom = thisObj.find('.carousel_img_content_second').attr('data-bottom') || '85%';

            thisObj.find('.carousel_img_content_second').animate({
                bottom: dbottom
            }, 200);

            var tcontent = thisObj.find('.carousel_img_content_three_content');
            var tobj = { display: 'none' }
            var dtop = tcontent.attr('data-top');
            if (dtop != undefined) {
                tobj.top = dtop
            }
            tcontent.css(tobj).fadeIn(800);
        }, 50);
    })

    $('#carousel-example-generic').on('slide.bs.carousel', function() {
        clearTempBanner()
    })

    /*
     * 清理banner中的临时对象并且初始化相关css
     */
    function clearTempBanner() {
        $('.gs-ui-silde').parents('.carousel_img_peripheral_div_js').css({
            overflow: 'hidden'
        }).parents('.carousel-inner').css({
            overflow: 'hidden'
        })

        $('.gs-ui-silde').remove();
    }

    $('.carousel_img_peripheral .carousel_img_peripheral_div_js_div').mouseleave(function() {
        clearTimeout(HomePageBannerTimer)
    })

    // $(document).on("mouseleave", function(){
    //     $(this).parents('.carousel_img_peripheral_div_js').css({
    //         overflow:'hidden'
    //     }).parents('.carousel-inner').css({
    //         overflow:'hidden'
    //     })
    //     $('.gs_home_banner_tmp').remove(); 
    // })
    // $(document).on("mouseenter", ".classification_menu_list_first", function() {
    //  $(this).children(".classification_menu_list_first_div").show(300);
    //  $(this).siblings().children(".classification_menu_list_first_div").hide(300);
    // })

    $(".sidebar").css("height", document.documentElement.clientHeight + "px");

    $(document).on("mouseenter", ".sidebar_icon_list", function() {
        $(this).animate({ right: "0" }, 100);
    })
    $(document).on("mouseleave", ".sidebar_icon_list", function() {
        var this_width = $(this).css("width");
        this_width = parseInt(this_width);
        this_width = (this_width - 28) * -1;
        $(this).animate({ right: this_width + "px" }, 100);
    })

    $(document).on("click", ".click_sidebar", function() {
        $(".sidebar_show").animate({ width: "290px" }, 300);
    })
    $(document).on("mouseleave", ".sidebar_show", function() {
        $(this).animate({ width: "0" }, 300);
    })

    $(document).on("mouseenter", ".welfare_list", function() {
        $(this).addClass("active");
        $(this).find(".welfare_inner").addClass("active_inner");
        $(this).siblings().removeClass("active");
        $(this).siblings().find(".welfare_inner").removeClass("active_inner");
    })

    $(".prompt").hover(function() {
        $(this).find(".prompt_pro").show();
    }, function() {
        $(this).find(".prompt_pro").hide();
    })
    $(".study_plan").hover(function() {
        $(this).find(".study_plan_prompt").show();
    }, function() {
        $(this).find(".study_plan_prompt").hide();
    })

    //scroll() 方法为滚动事件  
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $(".sidebar_icon_seventh").fadeIn(500);
        } else {
            $(".sidebar_icon_seventh").fadeOut(500);
        }
    });

    $(".sidebar_icon_seventh").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(".course_show_content_more_button").hover(function() {
        $(this).animate({ "border-color": "#fe6701", "color": "#fe6701" })
    }, function() {
        $(this).animate({ "border-color": "#353e4b", "color": "#353e4b" });
    })

    //首页中侧边栏的选课表展示
    sidebar_courses();
}

//首页中侧边栏的选课表展示
function sidebar_courses() {

    $.post("/api/plan/courses/list", function(data) {

    })
}

//search
function search() {
    $(".search").hover(function() {
        $(this).css("border", "1px solid #cfcfcf");
        $(this).find(".search_input_icon").animate({ "background-color": "#f0f0f0 url('../images/HomePage/search_icon.png') no-repeat center center;" });
        $(this).find(".search_input").show(300);
    }, function() {
        $(this).css("border-top", "none");
        $(this).css("border-bottom", "none")
        $(this).find(".search_input_icon").animate({ "background-color": "white url('../images/HomePage/search_icon.png') no-repeat center center;" });
        $(this).find(".search_input").hide(300);
    })
}

function Once_again_send() {
    $('#jump').on('click', function() {
        //取出html中邮箱的全部地址
        var EMail = $('#e-mail').html();
        //判断邮箱字符串中从‘@’到‘.’之间的内容并取出
        var reg = /^[^@]+@([^\.]+)\..*$/;
        var str = EMail.replace(reg, '$1');
        //js跳转页面
        $('#jump').click(function() {
            window.location.href = 'http://mail.' + str + '.com';
        })
    })

    $(document).on("click", ".Once-again-send", function() {

        var e_mail = $('#e-mail').html();
        var data = "email=" + e_mail;

        $.ajax({
            type: "POST",
            url: "/foreign/useractivity",
            data: data,
            dataType: "json",
            success: function(data) {
                console.log(data.message);
            }
        })
    })
}

//判断用户名是否已存在
function user_check( ) {
    var user_name = $("#user").val();

    if( user_name) {
        $.ajax({
            url: "/passport/checkuser",
            type: "POST",
            dataType: "JSON",
            data: {
                user: user_name
            },
            success: function( data) {
                if( data.code == 0) {
                    $(".welcome").html( data.message);
                    $(".welcome").css("color", "#f00");

                    user_check_results = false;
                }else {
                    $(".welcome").html( data.message);
                    $(".welcome").css("color", "#333");

                    user_check_results = true;
                }
            }
        })
    }
}

function SignUp_Page() {

    $('#user').focus(function() {
        $('.phone-message').hide(250);
    });
    $('#user').blur(function() {
        user(this);
    });
    $('#password').blur(function() {
        passwordVer(this);
    });
    //点击换一张对图片进行切换
    // $('.in-figure').on('click',function(){
    //     $('.verification img')[0].src='/foreign/captcha?d='+Math.random();
    // })

    //获取手机验证码
    $('#phone-take').click(function() {
        var num = 5;
        var numTime;
        var phoneTakeType;
        if (num == 5) {
            phoneTakeType = phoneTake();
        }
        if( phoneTakeType) {
            setTimeout(function() {
                numTime = setInterval(function() {
                    $('#phone-take').css('width', 'auto');
                    $('#phone-take').attr('disabled', 'disabled');
                    $('#phone-take').html("获取成功，" + num + '秒再次获取');
                    if (num == 0) {
                        $('#phone-take').css('width', '99px');
                        $('#phone-take').removeAttr('disabled');
                        $('#phone-take').html('获取');
                        num = 5;
                        clearInterval(numTime);
                    }
                    num--;
                }, 1000)
            }, 0) 
        }
    })

    //点击立即注册按钮后
    $('#submit').click(function() {
        $("#submit").attr("disabled", "disabled");
        submitInfo();
    })

    $(document).on("mousedown", ".eye", function() {
        $(this).siblings("input").attr("type", "text");
    })
    $(document).on("mouseup", ".eye", function() {
        $(this).siblings("input").attr("type", "password");
    })

    $(document).on("click", "#terms_of_service_sure", function() {
        $("#terms_of_service").modal("hide");
        Agreed();
    })


    sliding();
}

//滑动验证
function sliding() {
    slidingVerification('verification_slider1', 'verification_slider1_bg1', 'verification_slider1_label1');
}

//滑动验证函数
function slidingVerification(ODiv, bg, OLabel) {
    var oSlider = $('#' + ODiv);
    var oBg = $('#' + bg);
    var oWin = $('#' + OLabel);
    var spanLeft;
    var maxL = oSlider.outerWidth() - oWin.outerWidth();
    var bDrag = false;
    var disX = disY = 0;
    if (spanLeft != 0 && spanLeft == maxL) {
        return false;
    } else {
        if (oWin != undefined) {
            $('#' + OLabel).on('mousedown', function(event) {
                event = event || window.event;
                bDrag = true;
                disX = event.clientX;
                return false
            });
            $(document).on('mousemove', function(event) {
                event = event || window.event;
                if (!bDrag) {
                    return false;
                } else {
                    spanLeft = event.clientX - disX;
                    //把滑块控制在指点范围内
                    spanLeft = spanLeft < 0 ? 0 : spanLeft;
                    spanLeft = spanLeft > maxL ? maxL : spanLeft;
                    oWin.css('left', spanLeft + 'px');
                    oBg.css('width', spanLeft + 'px');
                    oWin.onmouseove = function() {
                        event = event || window.event;
                        event.stopPropagation();
                    }
                }
            });
            $(document).on('mouseup', function() {
                if (spanLeft < maxL) {
                    oWin.css({
                        'left': 0,
                        'background': 'url("../static/images/png039.png") no-repeat center center #fff'
                    });
                    oBg.css({ 'width': 0 }).html('');

                } else if (spanLeft >= maxL) {
                    // oWin.css({
                    //     'background': 'url("../static/images/png040.png") no-repeat center center #fff',
                    //     'background-size': '16px'
                    // });
                    // oBg.html('验证通过！');

                    $('#' + OLabel).off('mousedown');
                    $(document).off('mouseup');
                    slideVer = 1;
                    firstSlide(oWin, oBg);
                }
                bDrag = false;
            });
        } else {
            return false;
        }
    }
}
var encryption_type = 0;
//滑动验证成功后的回调函数
function firstSlide(oWin, oBg) {
    if (slideVer == 1) {
        var name = $('#Verification').attr("name");
        var data = $('#Verification').val();
        var data1 = name + '=' + data;
        $.ajax({
            type: "post",
            url: "/Passport/Registertoken",
            data: data1,
            dataType: "json",
            success: function(data) {
                console.log(data);
                if (data.code == 1) {
                    oWin.css({
                        'background': 'url("../static/images/png040.png") no-repeat center center #fff',
                        'background-size': '16px'
                    });
                    oBg.html('验证通过！');
                    encryption_type = 1;
                    $(".welcome").html("欢迎加入学分在线");
                    $(".welcome").css({
                        "color": "#333"
                    })
                } else {
                    oWin.css({
                        'background': 'url("../static/images/png041.png") no-repeat center center #fff',
                        'background-size': '16px'
                    });
                    oBg.html('验证未通过！');
                    oBg.css({
                        'background': "#f75555"
                    })
                    $(".welcome").html(data.message);
                    $(".welcome").css({
                        "color": "#ff0000"
                    })
                    encryption_type = 0;
                }
            }
        });
    }
}

//同意服务条款的后续函数
function Agreed() {
    console.log("OK");
}

// 对注册用户的用户名进行验证
function user(obj) {

    $(".welcome").html("欢迎加入学分在线");
    $(".welcome").css("color", "#333");

    var emilReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var phoneReg = /^1[3578]\d{9}$/;
    var user = obj.value;
    var emil = false;
    var phone = false;

    if (emilReg.test(user) || phoneReg.test(user)) {
        if (emilReg.test(user)) {
            emil = true;

            $('.prompt-user').hide(100);
            $('.phone-message').hide(250);
        }
        if (phoneReg.test(user)) {
            phone = true;
            $('.prompt-user').hide(100);
            $('.phone-message').show(250);
        }

    } else {
        emil = false;
        phone = false;

        $('.prompt-user').show(100);
        $('.prompt-user').html('请输入正确的手机号或邮箱号');
    }

    if( emil) {
        phmail = true;
    }
    if( phone) {
        phmail = false;
    }

}
//对注册用户的密码进行验证
function passwordVer(obj) {
    var passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    var code = obj.value;
    var password = false;
    if (passwordReg.test(code)) {
        password = true;
    } else {
        password = false;
    }
    if (!password) {
        $('.prompt-password').show(100);
        $('.prompt-password').html('请输入6~20位的字母与数字');
    } else {
        $('.prompt-password').hide();
    }
}
//对密码信息进行加密处理
function encryption() {
    var user = $('#user').val();
    var password = $('#password').val();
    var newPassword = hex_sha1(password);
    var phoneMessage = $('#phone-message').val();

    if (encryption_type && password) {
        if( phmail) {
            return 'token=' + user + '&password=' + newPassword;
        }else {
            if( phoneMessage) {
                return 'token=' + user + '&password=' + newPassword + '&caphone=' + phoneMessage;
            }else {
                $("#phone-message").css("border-color", "red");
            }
        }
    } else {
        return false;
    }
}

function phoneTake() {
    var user = $('#user').val();
    var user = parseInt(user);
    $.ajax({
        type: 'POST',
        url: '/Foreign/Sms',
        dataType: 'json',
        data: {
            'mobile': user
        },
        success: function(data) {
            if( data.code == 0) {
                if( data.message.length > 2) {
                    $(".welcome").html( data.message);
                    $(".welcome").css("color", "#333");
                }
                return false;
            }else {
                return true;
            }
        }
    })
}

// 提交信息
function submitInfo() {
    var data = encryption();
    console.log( data, user_check_results);
    if (data && user_check_results) {
        $.ajax({
            type: 'POST',
            url: '/passport/register',
            dataType: 'json',
            data: data,
            success: function(data) {
                if (phmail) {
                    if (data.code == 1) {
                        window.location.href = '/passport/verify.html';
                    } else {
                        $(".welcome").html(data.message);
                        $(".welcome").css({
                            "color": "#ff0000"
                        })
                        $("#submit").attr("disabled", false);
                    }
                } else {
                    if (data.code == 1) {
                        window.location.href = '/userport/center.html';
                    } else {
                        $(".welcome").html(data.message);
                        $(".welcome").css({
                            "color": "#ff0000"
                        })
                        $("#submit").attr("disabled", false);
                    }
                }
            }
        })
    } else {
        $(".welcome").html("请核对注册信息");
        $(".welcome").css({
            "color": "#ff0000"
        })
        $("#submit").attr("disabled", false);
    }
}

function Major_release() {

    //工具提示
    $("[title]").tooltip();

    //编辑器
    var course_details = UE.getEditor('course-details');

    //选择地区和语言处删除按钮的显示和隐藏
    RemoveButtonAnimate();

    //清除所有地区
    $(document).on("click", ".clearAll-area", function() {
        if ($(".select-area li").eq(0).attr("id") != "earth") {
            $(".select-area li").clone().appendTo(".add-country ul").attr("class", "country");
            $(".add-country  .delete-areaOrlanguage").hide();
            $(".select-area li").remove();
            $(".select-area > .add-areaOrlanguage").before($("#earth"));
            $(".select-area #earth").removeClass("country").addClass("show-area");
            $("#earth").children(".delete-areaOrlanguage").show();
        }
    })

    //提示关闭
    $(document).on("click", ".three_prompt_text", function() {
        $(this).parents()
    })

    //选择地区
    $(document).on("click", ".add-country li", function() {
        var This = this.cloneNode(true);
        $(".select-area > .add-areaOrlanguage").before(This);
        $(this).remove();
        $(".select-area .country").removeClass("country").addClass("show-area");
        $(".select-area .delete-areaOrlanguage").show();
        $(".select-area .show-area").unbind("mouseenter").unbind("mouseleave");
        $(".select-language .show-language").unbind("mouseenter").unbind("mouseleave");
        RemoveButtonAnimate();
        if ($(".select-area li").length != 0) {
            $("#earth").appendTo(".add-country ul");
            $("#earth").removeClass("show-area").addClass("country");
            $("#earth").children(".delete-areaOrlanguage").hide();
        }

        allData();
    })
    $(document).on("click", ".select-area .delete-areaOrlanguage", function() {
        var This = this.parentNode.cloneNode(true);
        $(This).appendTo(".add-country ul");
        $(".add-country .show-area").removeClass("show-area").addClass("country");
        $(".add-country .delete-areaOrlanguage").hide();
        $(this).parent().remove();
        if ($(".select-area li").length == 0) {
            $(".select-area > .add-areaOrlanguage").before($("#earth"));
            $(".select-area #earth").removeClass("country").addClass("show-area");
            $("#earth").children(".delete-areaOrlanguage").show();
        }
    })

    //选择语言
    $(document).on("click", ".add-language li", function() {
        var This = this.cloneNode(true);
        $(".select-language > .add-areaOrlanguage").before(This);
        $(this).remove();
        $(".select-language .language").removeClass("language").addClass("show-language");
        $(".select-language .delete-areaOrlanguage").show();
        $(".select-language .show-language").unbind("mouseenter").unbind("mouseleave");
        $(".select-area .show-area").unbind("mouseenter").unbind("mouseleave");
        RemoveButtonAnimate();
    })
    $(document).on("click", ".select-language .delete-areaOrlanguage", function() {
        var This = this.parentNode.cloneNode(true);
        $(This).appendTo(".add-language ul");
        $(".add-language .show-language").removeClass("show-language").addClass("language");
        $(".add-language .delete-areaOrlanguage").hide();
        $(this).parent().remove();
    })

    //时间控件创建
    if ($("#datetimeStart").length > 0) {
        $("#datetimeStart").datetimepicker({
            format: "yyyy-mm-dd hh:ii",
            autoclose: true,
            startDate: new Date(),
            pickerPosition: "bottom-left"
        }).on("click", function(ev) {
            $("#datetimeStart").datetimepicker("setEndDate", $("#datetimeEnd").val());
        });
        $("#datetimeEnd").datetimepicker({
            format: "yyyy-mm-dd hh:ii",
            autoclose: true,
            startDate: new Date(),
            pickerPosition: "bottom-left"
        }).on("click", function(ev) {
            $("#datetimeEnd").datetimepicker("setStartDate", $("#datetimeStart").val() + ":1");
        });
        $("#removeEndTime").click(function() {
            $("#datetimeEnd").val("");
        })
    }

    //第一步中添加标签功能实现
    if ($("#course-tag").length > 0) {
        $("#course-tag").tagsInput({
            "defaultText": "增加标签",
            "onAddTag": function() {
                var alltags = getTags();
                if (alltags.length >= 6) {
                    $("#course-tag_tag").hide();
                }
            },
            "onRemoveTag": function() {
                $("#course-tag_tag").show();
            }
        });
    }

    //章节修改名称
    $(document).on("click", ".modify-the-name", function() {
        $(this).siblings(".chapter-title").html("<input class='modify-chapter-title' onblur='modify_chapter_title(this)' title='修改完成后点击其他区域完成修改' type='text' />");
    })

    //添加小节
    $(document).on("click", ".add-section", function() {

        var section_obj = {
            section_li: {
                tag: "li",
                class: "section",
                section_first_big_span: {
                    tag: "span",
                    class: "the-section-number",
                    value: "1.1"
                },
                section_div: {
                    tag: "div",
                    class: "section-content",
                    section_small_span: {
                        small_span_first: {
                            tag: "span",
                            class: "chapter-title",
                            value: "请输入本小节题目"
                        },
                        small_span_second: {
                            tag: "span",
                            class: "knob-modify modify-the-name",
                            title: "修改名称"
                        },
                        small_span_third: {
                            tag: "span",
                            class: "knob-vedio section-icon",
                            title: "视频"
                        },
                        small_span_fourth: {
                            tag: "span",
                            class: "knob-test section-icon",
                            title: "测验"
                        },
                        small_span_fifth: {
                            tag: "span",
                            class: "knob-notes section-icon",
                            title: "讲义"
                        },
                        small_span_sixth: {
                            tag: "span",
                            class: "knob-case section-icon",
                            title: "案例"
                        },
                        small_span_seventh: {
                            tag: "span",
                            class: "knob-knowledge section-icon",
                            title: "知识点"
                        },
                        small_span_eighth: {
                            tag: "span",
                            class: "meet-class section-icon",
                            title: "见面课"
                        }
                        // ,
                        // small_span_ninth: {
                        //     tag: "span",
                        //     class: "knob-price section-icon",
                        //     title: "章/节价格"
                        // }
                    }
                },
                section_second_big_span: {
                    tag: "span",
                    class: "remove-chapterOrsection",
                    id: "remove-section"
                }
            }
        }

        AddSection(this, section_obj);

        var big_num = $(this).parent('.chapter').index();
        var small_arr = $(this).siblings("ul").children(".section");
        for (var j = 0; j < small_arr.length; j++) {
            small_arr[j].firstChild.innerHTML = (big_num + 1) + "." + (j + 1);
        }

        ChapterOptions();

        //工具提示
        $("[title]").tooltip();
    })

    //添加章
    $(document).on("click", ".add-chapter", function() {

        var chapter_obj = {
            chapter_li: {
                tag: "li",
                class: "chapter",
                chapter_first_big_span: {
                    tag: "span",
                    class: "the-chapter-number",
                    value: "第一章"
                },
                chapter_first_div: {
                    tag: "div",
                    class: "chapter-content",
                    chapter_small_span: {
                        small_span_first: {
                            tag: "span",
                            class: "chapter-title",
                            value: "请输入本章题目"
                        },
                        small_span_second: {
                            tag: "span",
                            class: "knob-modify modify-the-name",
                            title: "修改名称"
                        },
                        small_span_third: {
                            tag: "span",
                            class: "knob-vedio chapter-icon",
                            title: "视频"
                        },
                        small_span_fourth: {
                            tag: "span",
                            class: "knob-test chapter-icon",
                            title: "测验"
                        },
                        small_span_fifth: {
                            tag: "span",
                            class: "knob-notes chapter-icon",
                            title: "讲义"
                        },
                        small_span_sixth: {
                            tag: "span",
                            class: "knob-case chapter-icon",
                            title: "案例"
                        },
                        small_span_seventh: {
                            tag: "span",
                            class: "knob-knowledge chapter-icon",
                            title: "知识点"
                        },
                        small_span_eighth: {
                            tag: "span",
                            class: "meet-class chapter-icon",
                            title: "见面课"
                        }
                        // ,
                        // small_span_ninth: {
                        //     tag: "span",
                        //     class: "knob-price chapter-icon",
                        //     title: "章/节价格"
                        // }
                    }
                },
                chapter_second_big_span: {
                    tag: "span",
                    class: "remove-chapterOrsection",
                    id: "remove-chapter"
                },
                chapter_ul: {
                    tag: "ul",
                    class: "section-list"
                },
                chapter_second_div: {
                    tag: "div",
                    class: "add-section",
                    value: "+ 增加新节"
                }
            }
        }

        AddChapter(this, chapter_obj);

        ChapterOptions();

        //工具提示
        $("[title]").tooltip();

    })

    //页面变换
    var TheChangeNumber = 1;
    var TheChangeNumber_str = "";
    $(document).on("click", ".step-2-chooes", function() {
        if ($(this).children("input").attr("checked") == "checked") {
            TheChangeNumber_str = $(this).children(".radio-title").text();
        }
    })

    $(document).on("click", ".inside", function() {
        var inside_num = $(this).text();
        TheChangeNumber = inside_num;
        $("#step-" + TheChangeNumber).css("display", "block");
        $("#step-" + TheChangeNumber).siblings(".step").css("display", "none");
        if (TheChangeNumber == 5) {
            $("#next-step").html("申请授权");
            $("#next-step").attr("id", "All_Submit");
        } else {
            $("#next-step").html("下一步");
            if( $("#All_Submit")) {
                $("#All_Submit").attr("id", "next-step");
            }
        }
    })

    $(document).on("click", "#next-step", function() {

        switch (TheChangeNumber_str) {
            case " 纯线上":
                TheChangeNumber = 2;
                break;
            case " 纯线下":
                TheChangeNumber = 4;
                break;
            case " 混合式":
                TheChangeNumber = 2;
                break;
            case " 其他平台":
                TheChangeNumber = 4;
                break;
        }
        if (TheChangeNumber < 5) {
            TheChangeNumber++;
        }
        if (TheChangeNumber == 4) {
            TheChangeNumber = 5;
        }
        $("#step-" + TheChangeNumber).css("display", "block");
        $("#step-" + TheChangeNumber).siblings(".step").css("display", "none");
        if (TheChangeNumber == 5) {
            $(this).html("申请授权");
            $(this).attr("disable", "disable");
        } else {
            $(this).html("下一步");
            $(this).removeAttr("disable");
        }
        for (var p = 0; p < TheChangeNumber; p++) {
            $(".inside").eq(p).addClass("step-active");
        }
        layer(TheChangeNumber);

        unfold();

    })
    $(document).on("click", "#previous-step", function() {
        if (TheChangeNumber > 1) {
            TheChangeNumber--;
        }
        $("#step-" + TheChangeNumber).css("display", "block");
        $("#step-" + TheChangeNumber).siblings(".step").css("display", "none");
        $(".inside").eq(TheChangeNumber).removeClass("step-active");
        if (TheChangeNumber == 5) {
            $("#next-step").html("申请授权");
        } else {
            $("#next-step").html("下一步");
        }
        layer(TheChangeNumber);

        unfold();
    })

    //添加语言和地区
    $(document).on("click", ".add-areaOrlanguage", function() {
        $(this).parent().siblings("div").slideDown();
    })
    $(document).on("click", ".add_country_delete", function() {
        $(this).parent().slideUp();
    })
    $(document).on("click", ".add_language_delete", function() {
        $(this).parent().slideUp();
    })
    $(document).on("click", ".three_prompt_delete", function() {
        $(this).parent().slideUp();
    })
    $(document).on("click", ".five_prompt_delete", function() {
        $(this).parent().slideUp();
    })
    $(document).on("click", ".setting-up-the-shared-class-prompt-close", function() {
        $(this).parent().hide();
    })
    $(".read-and-agree-to-sqare").css("background-image", "none");
    $(document).on("click", ".read-and-agree-to-sqare", function() {
        if ($(this).css("background-image") == "none") {
            $(this).css("background-image", "url('/static/images/relevanceitem/five_icon.png')");
        } else {
            $(this).css("background-image", "none");
        }
    })

    //第三步列表收缩效果
    $(document).on("click", ".chapter-icon", function() {
        shrinkage();
        $(this).parent().siblings("span").eq(0).addClass("font-red");
        $(this).parents(".chapter-list").css("padding-right", "0");
    })
    $(document).on("click", ".section-icon", function() {
        shrinkage();
        $(this).parent().siblings("span").eq(0).addClass("font-red");
        $(this).parents(".chapter-list").css("padding-right", "0");
    })

    //第三步列表展开功能
    $(document).on("click", ".unfold-text", function() {
        unfold();
        $(".the-chapter-number").removeClass("font-red");
        $(".the-section-number").removeClass("font-red");
        $(this).parents(".detailed-content").siblings(".chapter-list").css("padding-right", "100px");
    })

    //见面课出现
    $(document).on("click", ".meet-class", function() {
        $(".three-add-meet-clsass").show();
        $(".three-add-meet-clsass").siblings(".three-step").hide();
        $(this).parents(".chapter-list").css("padding-right", "100px");
    })

    //视频出现
    $(document).on("click", ".knob-vedio", function() {
        $(".three-add-video").show();
        $(".three-add-video").siblings(".three-step").hide();
    })

    //测验出现
    $(document).on("click", ".knob-test", function() {
        $(".three-add-unit-test").show();
        $(".three-add-unit-test").siblings(".three-step").hide();
        $(".item-bank-table").show();
    })

    //讲义出现
    $(document).on("click", ".knob-notes", function() {
        $(".three-add-upload-notes").show();
        $(".three-add-upload-notes").siblings(".three-step").hide();
    })

    //案例出现
    $(document).on("click", ".knob-case", function() {
        $(".three-add-refer").show();
        $(".three-add-refer").siblings(".three-step").hide();
    })

    //知识点出现
    $(document).on("click", ".knob-knowledge", function() {
        $(".three-add-knowledge").show();
        $(".three-add-knowledge").siblings(".three-step").hide();
    })

    //价格出现
    $(document).on("click", ".knob-price", function() {
        $(".three-step").hide();
    })

    //单元测验中表格的单双背景
    $(".item-bank-table > tbody > tr:even").css("background-color", "#f9f9f9");
    $(".item-bank-table > tbody > tr:odd").css("background-color", "#ffffff");


    //暂时性的放置
    if ($("#btn0").length > 0 && $("#bar0").length > 0 && $("#title0").length > 0) {
        objChange = new scale('btn0', 'bar0', 'title0');
    }

    //遮罩层
    layer();
    $(document).on("click", ".layer-title-close", function() {
        $("#the-mask-layer").hide();
        $("#layer-content").hide();
    })
    $(document).on("click", ".layer-foot-close", function() {
        $("#the-mask-layer").hide();
        $("#layer-content").hide();
    })

    //第二步选择人群和模式
    $(".suits-the-crowd").find(".step-2-chooes").eq(0).children().children(".radio-style-2").css("background-color", "#f75555");
    $(".suits-the-crowd").find(".step-2-chooes").eq(0).children("input").attr("checked", "checked");
    $(".course-mode").find(".step-2-chooes").eq(0).children().children(".radio-style-2").css("background-color", "#f75555");
    $(".course-mode").find(".step-2-chooes").eq(0).children("input").attr("checked", "checked");
    $(".step-2-chooes").on("click", function() {
        $(this).children().children(".radio-style-2").css("background-color", "#f75555");
        $(this).children("input").attr("checked", "checked");
        $(this).siblings().children().children(".radio-style-2").css("background-color", "white");
        $(this).siblings().children("input").attr("checked", false);
    })

    //第四步选择作业设置
    $(document).on("click", ".step-4-chooes", function() {
        $(this).children().children(".radio-style-2").css("background-color", "#f75555");
        $(this).children("input").attr("checked", "checked");
        $(this).siblings().children().children(".radio-style-2").css("background-color", "white");
        $(this).siblings().children("input").attr("checked", false);
    })

    //添加任课老师选择
    $(document).on("click", ".course-the-teacher .course-the-teacher-identity", function() {
        $(this).children(".course-the-teacher-identity-icon").html("√");
        $(this).siblings().children(".course-the-teacher-identity-icon").html("");
        $(this).children("input").attr("checked", "checked");
        $(this).siblings().children("input").attr("checked", false);
    })
    $(document).on("click", ".course-the-teacher-acce .course-the-teacher-identity", function() {
        if ($(this).children(".course-the-teacher-identity-icon").html() == "") {
            $(this).children(".course-the-teacher-identity-icon").html("√");
            $(this).children("input").attr("checked", "checked");
        } else {
            $(this).children(".course-the-teacher-identity-icon").html("");
            $(this).children("input").attr("checked", false);
        }

    })

    //选择是否控件
    $(document).on("click", ".select-control", function() {
        var le = $(this).children('.drag').css('left');
        le = parseInt(le);
        if (!le == 0) {
            $(this).children('.drag').animate({ left: "0" }, 70);
            $(this).children('input').attr('checked', false);
            $(this).animate({ 'background-color': 'rgb(235, 235, 228)' }, 70);
        } else {
            $(this).children('.drag').animate({ left: "52%" }, 70);
            $(this).children('input').attr('checked', true);
            $(this).animate({ 'background-color': '#509AF8' }, 70);
        }
    })

    //第四步状态
    $(".job-type-options").eq(0).css("border-color", "#f75555").css("color", "#f75555");

    $(document).on("click", ".job-type-options", function() {
        $(this).css("border-color", "#f75555").css("color", "#f75555");
        $(this).siblings(".job-type-options").css("border-color", "#d7d8dc").css("color", "#646464");
    })

    //第三步单元测验逻辑
    $(document).on("click", ".from-item-bank", function() {
        $(".set-unit-test").hide();
        $(this).hide();
        $(".from-the-item-bank-choice").show();
        $(".item-bank-table").show();
        $("#manual-upload").hide();
        $(".manual-upload-batch").hide();

        // show_question_bank();

        Test_reading_test();
    })
    $(document).on("click", ".manual", function() {
        $(".item-bank-table").hide();
        $("#manual-upload").show();
        $(".manual-upload-batch").hide();
    })

    $(document).on("click", ".batch", function() {
        $(".item-bank-table").hide();
        $(".manual-upload-batch").show();
        $("#manual-upload").hide();
    })

    //其他平台
    $(document).on("click", ".other-platforms", function() {
        $("#the-mask-layer").show();
        $("#layer-content").show();
        $("#layer-content").css("width", "681px");
        $(".layer-title-title").html("");
        $(".layer-head").hide();
        $("#other-platforms").show();
        $("#other-platforms").siblings().hide();
    })
    $(".platforms-chooes").find("input").attr("checked", false);
    $(document).on("click", ".platforms-chooes", function() {
        if (!$(this).children("input").attr("checked")) {
            $(this).find(".radio-style-2").css("background-color", "#2f8deb");
            $(this).find("input").attr("checked", "checked");
            $(this).siblings().find(".radio-style-2").css("background-color", "white");
            $(this).siblings().find("input").attr("checked", false);
        }
    })

    //第三章点击效果
    $(document).on("click", ".Chapter-across", function() {
        if ($(this).find("input").attr("checked") == undefined) {
            $(this).find(".blue").css("background-color", "#399eeb");
            $(this).find("input").attr("checked", "checked");
            // show_question_bank();
        }
        $(document).on("click", ".manual", function() {
            $(".item-bank-table").hide();
            $("#manual-upload").show();
            $(".manual-upload-batch").hide();
        })

        $(document).on("click", ".batch", function() {
            $(".item-bank-table").hide();
            $(".manual-upload-batch").show();
            $("#manual-upload").hide();
        })

        //其他平台
        $(document).on("click", ".other-platforms", function() {
            $("#the-mask-layer").show();
            $("#layer-content").show();
            $("#layer-content").css("width", "681px");
            $(".layer-title-title").html("");
            $(".layer-head").hide();
            $("#other-platforms").show();
            $("#other-platforms").siblings().hide();
        })
        $(".platforms-chooes").find("input").attr("checked", false);
        $(document).on("click", ".platforms-chooes", function() {
            if (!$(this).children("input").attr("checked")) {
                $(this).find(".radio-style-2").css("background-color", "#2f8deb");
                $(this).find("input").attr("checked", "checked");
                $(this).siblings().find(".radio-style-2").css("background-color", "white");
                $(this).siblings().find("input").attr("checked", false);
            }
        })
    })

    //连载状态效果
    $(document).on("click", ".serial_state", function() {
        $(this).find(".blue").css("background-color", "#399eeb");
    })
    $(document).on("click", ".batch", function() {
        $(".item-bank-table").hide();
        $(".manual-upload-batch").show();
    })

    //其他平台
    $(document).on("click", ".other-platforms", function() {
        $("#the-mask-layer").show();
        $("#layer-content").show();
        $("#layer-content").css("width", "681px");
        $(".layer-title-title").html("");
        $(".layer-head").hide();
        $("#other-platforms").show();
        $("#other-platforms").siblings().hide();
    })
    $(".platforms-chooes").find("input").attr("checked", false);
    $(document).on("click", ".platforms-chooes", function() {
        if (!$(this).children("input").attr("checked")) {
            $(this).find(".radio-style-2").css("background-color", "#2f8deb");
            astride = 1;
        } else {
            $(this).find(".blue").css("background-color", "white");
            $(this).find("input").attr("checked", false);
            astride = 0;
        }
    })

    //连载状态效果
    $(document).on("click", ".serial_state", function() {
        $(this).find(".blue").css("background-color", "#399eeb");
        $(this).find("input").attr("checked", "checked");
        $(this).siblings().find(".blue").css("background-color", "white");
        $(this).siblings().find("input").attr("checked", false);
    })

    $(document).on("click", ".add-topic-continue", function() {

    })

    //单元测验中的难度系数
    $(document).on("click", ".star-five", function() {
        var star_position = $(this).index();
        var star_length = $(this).parent().children(".star-five").length;
        for (var i = 0; i < star_position; i++) {
            $(this).parent().children(".star-five").eq(i).css("background-position", "left center");
        }
        for (var i = star_position; i < star_length; i++) {
            $(this).parent().children(".star-five").eq(i).css("background-position", "right center");
        }
    })

    //单元测验中的类型选择
    if ($(".manual-upload-head-options").eq(0)) {
        $(".manual-upload-head-options").eq(0).find(".blue").css("background-color", "#399eeb");
        $(".manual-upload-head-options").eq(0).find("input").attr("checked", "checked");
    }
    $(document).on("click", ".manual-upload-head-options", function() {
        $(this).find(".blue").css("background-color", "#399eeb");
        $(this).find("input").attr("checked", "checked");
        $(this).siblings().find(".blue").css("background-color", "white");
        $(this).siblings().find("input").attr("checked", false);
    })

    //第三章点击效果
    $(document).on("click", ".Chapter-across", function() {
        if ($(this).find("input").attr("checked") == undefined) {
            $(this).find(".blue").css("background-color", "#399eeb");
            $(this).find("input").attr("checked", "checked");
            astride = 1;
        } else {
            $(this).find(".blue").css("background-color", "white");
            $(this).find("input").attr("checked", false);
            astride = 0;
        }
    })

    //单元测验中的类型选择
    if ($(".manual-upload-head-options").eq(0)) {
        $(".manual-upload-head-options").eq(0).find(".blue").css("background-color", "#399eeb");
        $(".manual-upload-head-options").eq(0).find("input").attr("checked", "checked");
    }
    $(document).on("click", ".manual-upload-head-options", function() {
        $(this).find(".blue").css("background-color", "#399eeb");
        $(this).find("input").attr("checked", "checked");
        $(this).siblings().find(".blue").css("background-color", "white");
        $(this).siblings().find("input").attr("checked", false);

        add_test();
    })

    //连载状态效果
    $(document).on("click", ".serial_state", function() {
        $(this).find(".blue").css("background-color", "#399eeb");
        $(this).find("input").attr("checked", "checked");
        $(this).siblings().find(".blue").css("background-color", "white");
        $(this).siblings().find("input").attr("checked", false);

        add_test();
    })

    //选项点击效果
    $(document).on("click", ".add-manual-topic-chooes", function() {
        $(this).find(".radio-style-2").css("background-color", "#f75555");
        $(this).find("input").attr("checked", "checked");
        $(this).siblings().find(".radio-style-2").css("background-color", "white");
        $(this).siblings().find("input").attr("checked", false);
    })
    $(document).on("click", ".add-manual-topic-chooes-checked", function() {
        if ($(this).find("input").attr("checked")) {
            $(this).find(".radio-style-2").css("background-color", "white");
            $(this).find("input").attr("checked", false);
        } else {
            $(this).find(".radio-style-2").css("background-color", "#f75555");
            $(this).find("input").attr("checked", "checked");
        }
    })
    $(document).on("click", ".add-manual-topic-chooes-judge-btns", function() {
        $(this).css("background-color", "#f75555");
        $(this).siblings().css("background-color", "white");
    })

    //单元测验也添加选项
    $(".manual-upload-topic-options").css("height", "40px");
    $(".manual-upload-topic-options-label").css("line-height", "40px");
    $(document).on("focus", ".manual-upload-topic-options-input", function() {
        $(this).parent(".manual-upload-topic-options").animate({ height: "70px" }, 100);
        $(this).siblings(".manual-upload-topic-options-label").animate({ "line-height": "70px" }, 100);
    })
    $(document).on("blur", ".manual-upload-topic-options-input", function() {
        $(this).parent(".manual-upload-topic-options").animate({ height: "40px" }, 100);
        $(this).siblings(".manual-upload-topic-options-label").animate({ "line-height": "40px" }, 100);
    })
    
    $(document).on("click", "#All_Submit", function() {
        var data = allData();

        console.log( data);

        $.ajax({
            url: "/publish/relevanceitem",
            type: "post",
            dataType: "json",
            data: data,
            success: function( data) {
                console.log(data);
            }
        })
    })

    //添加任课老师处
    $(".course-the-teacher-seacher").slideUp();
    $(".course-the-teacher-seacher-info-sqare").slideUp();
    $("#course-the-teacher-name").bind("click", function() {
        $(this).parents(".course-the-teacher").css("height", "auto");
        $(this).parent().siblings(".course-the-teacher-seacher").slideDown( 100);
        $(this).val("");
    })
    $(document).on("click", ".course-the-teacher-seacher-icon", function() {

        var user_sea = $(this);
        var user_name = $(this).siblings()[0].value;
        var emilReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        var phoneReg = /^1[3578]\d{9}$/;

        if( emilReg.test( user_name) || phoneReg.test( user_name)) {
            $("#course-the-teacher-seacher").attr( "placeholder", "搜索老师手机号或邮箱");
            $(".course-the-teacher-seacher").css("border", "1px solid #d7d8dc");
            $.ajax({
                url: "/publish/releasearchteacher",
                type: "POST",
                dataType: "JSON",
                data: {
                    'a_0000': user_name
                },
                success: function( data) {
                    if( data.code == 1) {
                        ctnum = data.data.id;
                        step3_teacher_image = data.data.avatar;
                        step3_teacher_name = user_name;
                        $(".course-the-teacher-seacher").slideUp( 100);
                        $("#course-the-teacher-seacher").val("");
                        $( user_sea).slideDown( 100);
                        $("#course-the-teacher-name").val( user_name);
                        $("#course-the-teacher-name").attr("yadd", data.data.id);
                    }else {
                        $(".course-the-teacher-seacher-info-sqare").slideDown( 100);
                    }
                }
            })
        }else {
            $(".course-the-teacher-seacher").css("border", "1px solid #ff0000");
            $("#course-the-teacher-seacher").val("");
            $("#course-the-teacher-seacher").attr( "placeholder", "请填写正确的手机号或邮箱");
        }
    })

    $(document).on("click", ".course-the-teacher-seacher-info-btn", function() {
        $(".course-the-teacher-seacher-info-sqare").slideUp( 100);
        $(".course-the-teacher-seacher").slideUp( 100);
        $(".course-the-teacher-add-info").slideDown( 100);
        $("#course-the-teacher-name").removeAttr("readonly").unbind();
    })



}

var step3_teacher_image, //任课老师处老师头像
    step3_teacher_name; //任课老师处老师账号

//读取试题库
function Test_reading_test() {
    $.post("/publish/Releadditembanksel", function( data) {
        console.log(data);
    })
}

//添加小节方法
function AddSection(click_obj, section_obj) {
    var click_obj = click_obj,
        section_obj = section_obj;

    for (key in section_obj) {
        if (key == "section_li") {
            var sec_li = $("<" + section_obj[key].tag + "></" + section_obj[key].tag + ">").appendTo($(click_obj).siblings(".section-list"));
            AddSection_2(section_obj[key], sec_li, click_obj);
        }
    }
}

function AddSection_2(section_obj, sec_li, click_obj) {
    for (ine in section_obj) {
        if (ine != "tag" && typeof section_obj[ine] != "object") {
            sec_li.attr(ine, section_obj[ine]);
        }
        if (typeof section_obj[ine] == "object") {
            var sec_con = $("<" + section_obj[ine].tag + "></" + section_obj[ine].tag + ">").appendTo(sec_li);
            AddSection_3(section_obj[ine], sec_con, click_obj);
        }
    }
}

function AddSection_3(section_obj, sec_con, click_obj) {
    for (ome in section_obj) {
        if (ome != "tag" && typeof section_obj[ome] != "object") {
            if (ome == "value") {
                continue;
            }
            sec_con.attr(ome, section_obj[ome]);
        }
        if (typeof section_obj[ome] == "object") {
            AddSection_4(section_obj[ome], sec_con, click_obj);
        }
    }
}

function AddSection_4(section_obj, sec_con, click_obj) {
    for (ext in section_obj) {
        var sec_con_span = $("<" + section_obj[ext].tag + "></" + section_obj.tag + ">").appendTo(sec_con);
        AddSection_5(section_obj[ext], sec_con_span, click_obj);

    }
}

function AddSection_5(section_obj, sec_con_span, click_obj) {
    for (pte in section_obj) {
        if (pte != "tag" && typeof section_obj[pte] != "object") {
            if (pte == "value") {
                continue;
            }
            sec_con_span.attr(pte, section_obj[pte]);
            var section_arr = $(click_obj).siblings(".section-list").children("li:last").find(".chapter-title");
            $(section_arr).html("请输入本节名称");
        }
    }
}

//添加章方法
function AddChapter(click_obj, chapter_obj) {
    chapters++;
    var click_obj = click_obj,
        chapter_obj = chapter_obj;

    for (key in chapter_obj) {
        if (key == "chapter_li") {
            var cha_li = $("<" + chapter_obj[key].tag + "></" + chapter_obj[key].tag + ">").appendTo($(click_obj).siblings(".chapter-list"));
            AddChapter_2(chapter_obj[key], cha_li, click_obj);
        }
    }
}

function AddChapter_2(chapter_obj, cha_li, click_obj) {
    for (ine in chapter_obj) {
        if (ine != "tag" && typeof chapter_obj[ine] != "object") {
            cha_li.attr(ine, chapter_obj[ine]);
        }
        if (typeof chapter_obj[ine] == "object") {
            var cha_con = $("<" + chapter_obj[ine].tag + "></" + chapter_obj[ine].tag + ">").appendTo(cha_li);
            AddChapter_3(chapter_obj[ine], cha_con, click_obj);
        }
    }
}

function AddChapter_3(chapter_obj, cha_con, click_obj) {
    for (lgd in chapter_obj) {
        if (lgd != "tag" && typeof chapter_obj[lgd] != "object") {
            if (lgd == "value") {
                if (chapter_obj[lgd] == "第一章") {
                    $(click_obj).siblings(".chapter-list").find(".the-chapter-number").html(chapter_obj[lgd]);
                }
                if (chapter_obj[lgd] == "+ 增加新节") {
                    $(click_obj).siblings(".chapter-list").find(".add-section").html(chapter_obj[lgd]);
                }
                continue;
            }
            cha_con.attr(lgd, chapter_obj[lgd]);
            changeChinese();
        }
        if (typeof chapter_obj[lgd] == "object") {
            AddChapter_4(chapter_obj[lgd], cha_con, click_obj);
        }
    }
}

function AddChapter_4(chapter_obj, cha_con, click_obj) {
    for (omg in chapter_obj) {
        var cha_con_span = $("<" + chapter_obj[omg].tag + "></" + chapter_obj[omg].tag + ">").appendTo(cha_con);
        AddChapter_5(chapter_obj[omg], cha_con_span, click_obj);
    }
}

function AddChapter_5(chapter_obj, cha_con_span, click_obj) {
    for (we in chapter_obj) {
        if (we != "tag" && typeof chapter_obj[we] != "object") {
            if (we == "value") {
                continue;
            }
            cha_con_span.attr(we, chapter_obj[we]);
            var chapter_arr = $(click_obj).siblings(".chapter-list").children().children(".chapter-content").find(".chapter-title");
            $(chapter_arr).html("请输入本章名称");
        }
    }
}

//章节选项
function ChapterOptions() {

    $(".chapter-content").unbind("mouseenter").unbind("mouseleave");
    $(".section-content").unbind("mouseenter").unbind("mouseleave");

    $(".chapter-content").bind({
        mouseenter: function() {
            $(this).children(".chapter-icon").show();
            $(this).children(".modify-the-name").show();
        },
        mouseleave: function() {
            $(this).children(".chapter-icon").hide();
            $(this).children(".modify-the-name").hide();
        }
    })
    $(".section-content").bind({
        mouseenter: function() {
            $(this).children(".section-icon").show();
            $(this).children(".modify-the-name").show();
        },
        mouseleave: function() {
            $(this).children(".section-icon").hide();
            $(this).children(".modify-the-name").hide();
        }
    })
}

//章节修改名称
function modify_chapter_title(obj) {
    var obj_str = obj.value;
    $(obj).parent().html(obj_str);
}

//遮罩层
function layer(TheChangeNumber) {

    switch (TheChangeNumber) {
        case 1:
            $(".content-title").html("课程基本信息");
            break;
        case 2:
            $(".content-title").html("填写详细资料");
            break;
        case 3:
            $(".content-title").html("添加章节");
            break;
        case 4:
            $(".content-title").html("添加大作业");
            break;
        case 5:
            $(".content-title").html("申请发布");
            break;
    }

    $("#the-mask-layer").css("width", document.body.scrollWidth + "px");
    $("#the-mask-layer").css("height", window.screen.height + "px");
    $("#layer-content").css("top", window.screen.height / 8 + "px");
}

//第三步列表收缩效果
function shrinkage() {
    $(".chapter-content").hide();
    $(".section-content").hide();
    $(".add-section").hide();
    $(".add-section").hide();
    $(".add-chapter").hide();
    $(".remove-chapterOrsection").hide();
    $(".the-chapter-number").animate({ width: "135px" }, 300);
    $(".the-section-number").animate({ width: "135px" }, 300);
    $(".chapter-show > ul").css("width", "135px").addClass("pull-left");
    $(".detailed-content").show(700);
    $(".chapter-number").hide();
    $("#previous-step").hide();
    $("#next-step").hide();
}

//第三步列表展开功能
function unfold() {
    $(".detailed-content").hide();
    $(".chapter-show > ul").css("width", "100%").removeClass("pull-left");
    $(".the-section-number").animate({ width: "270px" }, 300);
    $(".the-chapter-number").animate({ width: "200px" }, 300);
    $(".remove-chapterOrsection").show();
    $(".add-chapter").show();
    $(".add-section").show();
    $(".add-section").show();
    $(".section-content").show();
    $(".chapter-content").show();
    $(".three-add-unit-test-content").show();
    $(".set-unit-test").show();
    $(".from-the-item-bank-choice").hide();
    $("#manual-upload").hide();
    $(".from-item-bank").show();
    $(".chapter-number").show();
    $("#previous-step").show();
    $("#next-step").show();
}

//取出所有标签
function getTags() {
    var $tagWord = $("#course-tag").siblings(".tagsinput").children(".tag");
    var tags = [];
    for (var i = $tagWord.length; i--;) {
        tags.push($($tagWord[i]).text().substring(0, $($tagWord[i]).text().length - 1).trim());
    }
    var uqTags = $.unique(tags);
    return uqTags;
}

//选择地区和语言处删除按钮的显示和隐藏
function RemoveButtonAnimate() {
    $(".show-area").hover(function() {
        $(this).find("span").animate({ width: "18px" }, 70);
    }, function() {
        $(this).find("span").animate({ width: "0" }, 70);
    })
    $(".show-language ").hover(function() {
        $(this).find("span").animate({ width: "18px" }, 70);
    }, function() {
        $(this).find("span").animate({ width: "0" }, 70);
    })
}


//滑动条的js代码
scale = function(btn, bar, title) {
    if (btn != null && bar != null && title != null) {
        this.btn = document.getElementById(btn);
        this.bar = document.getElementById(bar);
        this.title = document.getElementById(title);
        this.step = this.bar.getElementsByTagName("DIV")[0];
        this.init();
    } else {
        return false;
    }
};
scale.prototype = {
    init: function() {
        var f = this,
            g = document,
            b = window,
            m = Math;
        f.btn.onmousedown = function(e) {
            var x = (e || b.event).clientX;
            var l = this.offsetLeft;
            var max = f.bar.offsetWidth;
            g.onmousemove = function(e) {
                var thisX = (e || b.event).clientX;
                var to = m.min(max, m.max(0, l + (thisX - x)));
                var to_1 = to;
                if (to_1 >= max) { to_1 = max; }
                f.btn.style.left = to_1 + 'px';
                var pos = m.round(m.max(0, to / max) * 100);
                to = Math.round(pos / 100 * max);
                f.ondrag(pos, to);
                b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            };
            g.onmouseup = new Function('this.onmousemove=null');
        };
    },
    ondrag: function(pos, x) {
        this.step.style.width = x + 'px';
        this.title.innerHTML = pos / 1 + "";
    }
}

//弹窗内容实现
function PopupWindowContent(obj, num) {
    var num = num;
    if (num == 1) {
        var obj = obj.parentNode.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling.innerHTML;
        var data = "";
        var url = "";
        switch (obj) {
            // case "添加学生":
            //     data = "ctkn=" + $('.add-students input').eq(0).val() + "&cnam=" + $('.add-students input').eq(1).val();
            //     url = "/publish/releaddstudent";
            //     ajax(data, url);
            //     break;
            case "添加参考材料":
                if ( $(".add-the-reference-material").find("input").eq(0).val() && $(".add-the-reference-material").find("input").eq(1).val() && $(".add-the-reference-material").find("input").eq(2).val() && $(".add-the-reference-material").find("input").eq(3).val() && $(".add-the-reference-material").find("input").eq(4).val() && $(".add-the-reference-material").find("input").eq(5).val()) {
                    data = "ctle=" + $(".add-the-reference-material").find("input").eq(0).val() + "&curl=" + "http://" + $(".add-the-reference-material").find("input").eq(1).val() + "&caor=" + $(".add-the-reference-material").find("input").eq(2).val() + "&cpss=" + $(".add-the-reference-material").find("input").eq(3).val() + "&cpon=" + $(".add-the-reference-material").find("input").eq(4).val() + "&cibn=" + $(".add-the-reference-material").find("input").eq(5).val();
                    url = "/publish/releaddreference";
                    ajax(data, url, obj);
                } else {
                    alert("请输入正确的参考材料");
                }
                break;
            case "添加任课老师":
                var teacher_chang_acce = $(".course-the-teacher-identity").find("input[checked='checked']");
                var teacher_chang_acce_str = "";
                if (teacher_chang_acce.length > 0) {
                    for (var i = 0; i < teacher_chang_acce.length; i++) {
                        if ($(teacher_chang_acce[i]).siblings(".course-the-teacher-identiey-text").text() == "课程维护") {
                            if (teacher_chang_acce_str == "") {
                                teacher_chang_acce_str += "50000";
                            } else {
                                teacher_chang_acce_str += "_50000";
                            }
                        }
                        if ($(teacher_chang_acce[i]).siblings(".course-the-teacher-identiey-text").text() == "学生辅导") {
                            if (teacher_chang_acce_str == "") {
                                teacher_chang_acce_str += "50001";
                            } else {
                                teacher_chang_acce_str += "_50001";
                            }
                        }
                        if ($(teacher_chang_acce[i]).siblings(".course-the-teacher-identiey-text").text() == "报名管理") {
                            if (teacher_chang_acce_str == "") {
                                teacher_chang_acce_str += "50002";
                            } else {
                                teacher_chang_acce_str += "_50002";
                            }
                        }
                    }
                    var teacher_chang_str = $(".course-the-teacher .course-the-teacher-identity").find("input[checked='checked']").siblings(".course-the-teacher-identiey-text").attr("cpye");

                    if( $("#course-the-teacher-name").attr("readonly")) {
                        data = "yadd=" + $("#course-the-teacher-name").attr("yadd") + "&cpye=" + teacher_chang_str + "&acce=" + teacher_chang_acce_str;
                    }else {
                        data = "tken=" + $("#course-the-teacher-name").val() + "&crme=" + $("#course-the-teacher-acce").val() + "&cposi=" + $("#reference-material-position").val() + "&cpye=" + teacher_chang_str + "&acce=" + teacher_chang_acce_str;
                    }

                    url = "/publish/releaddteacher";
                    ajax(data, url, obj);
                }
                break;
        }
    } else {
        var obj = obj.id;
        $(".layer-head").show();
        switch (obj) {
            case "reference-material":
                $(".layer-title-title").text("添加参考材料");
                $("#the-mask-layer").show();
                $("#layer-content").show();
                $("#layer-content").css("width", "638px");
                $(".add-the-reference-material").show();
                $(".add-the-reference-material").siblings().hide();
                break;
            case "course-teacher":
                $(".layer-title-title").text("添加任课老师");
                $("#the-mask-layer").show();
                $("#layer-content").show();
                $("#layer-content").css("width", "638px");
                $(".add-the-course-the-teacher").show();
                $(".add-the-course-the-teacher").siblings().hide();
                break;
                // case "add-student":
                //     $(".layer-title-title").text("添加学生");
                //     $("#the-mask-layer").show();
                //     $("#layer-content").show();
                //     $("#layer-content").css("width","764px");
                //     $(".add-students").show();
                //     $(".add-students").siblings().hide();
                //     break;
        }
    }
}

//ajax提交函数
function ajax(data, url, str) {
    var data = data;
    var url = url;
    var str = str;
    $.ajax({
        type: "post",
        url: url,
        data: data,
        dataType: "JSON",
        success: function(data) {
            HandleAjax(data.data, str);
        },
        error: function(data) {
            console.log(data.message);
        }
    })
}

function HandleAjax(data_1, str) {
    if (data_1) {
        var data = data_1;
        var teacher_id = data.id;
        var teacher_key = data.key;
        switch (str) {
            case "添加参考材料":
                $("#layer-content").hide();
                $("#the-mask-layer").hide();
                $("<p class='metaerial'><a target='_blank' href='" + data.url + "'>" + data.id + ". " + data.author + "：《" + data.title + "》," + data.press + "," + data.publication + "," + data.isbn + "</a></p>").appendTo(".metaerial-list");
                ctnid = data.id;
                ctnidKey = data.rfenKey;
                break;
            case "添加任课老师":
                var teacher_obj = $(".course-teacher-content_sqare").eq(0).clone();
                var teacher_number = 0;
                if( data.id) {
                    ctnum = data.id;
                }
                ctnumKey = data.ctnumKey;
                ctpnum = data.type;
                ctpnumKey = data.ctpnumKey;
                $("#layer-content").hide();
                $("#the-mask-layer").hide();
                if( $(".course-teacher-content_sqare").eq(teacher_number).css("display") == "none") {
                    $(".course-teacher-content_sqare").eq(teacher_number).css("display", "block");
                    if( step3_teacher_image) {
                        $(".course-teacher-content_sqare").eq(teacher_number).find(".course-teacher-content_images").attr("src", step3_teacher_image);
                    }
                    if( step3_teacher_name) {
                        $(".course-teacher-content_sqare").eq(teacher_number).find(".course-teacher-content_account").html( step3_teacher_name);
                    }
                    teacher_number++;
                }else {
                    teacher_obj.appendTo(".course-teacher-content");
                    $(".course-teacher-content_sqare").eq(teacher_number).css("display", "none");
                    if( $(".course-teacher-content_sqare").eq(teacher_number).css("display") == "none") {
                        $(".course-teacher-content_sqare").eq(teacher_number).css("display", "block");
                        if( step3_teacher_image) {
                            $(".course-teacher-content_sqare").eq(teacher_number).find(".course-teacher-content_images").attr("src", step3_teacher_image);
                        }
                        if( step3_teacher_name) {
                            $(".course-teacher-content_sqare").eq(teacher_number).find(".course-teacher-content_account").html( step3_teacher_name);
                        }
                        teacher_number++;
                    }
                }
                break;
        }
    }
}

//数字改汉字
function changeChinese() {
    var bigSpan = $('.the-chapter-number');
    var smallTitle;
    for (var i = 0; i < bigSpan.length; i++) {
        bigSpan[i].innerHTML = "第" + NoToChinese(i + 1) + "章";
        if (i > 8) {
            bigSpan[i].innerHTML = "第" + (i + 1) + "章";
        }
    }
}

function NoToChinese(num) {
    if (!/^\d*(\.\d*)?$/.test(num)) { alert("Number is wrong!");
        return "Number is wrong!"; }
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
    var BB = new Array("", "十", "百", "千", "万", "亿", "点", "");
    // var AA = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); 
    // var BB = new Array("", "拾", "佰", "仟", "萬", "億", "点", ""); 
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])) {
                    re = BB[4] + re;
                    break;
                }
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
        if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }
    if (a.length > 1) //加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    return re;
}

//发布学历课程页面的验证
function Release_of_qualification_authentication() {
    $(document).on( "blur", "#course-name", function() {
        $(this).val() == '' ? $(this).css( "border-color", "#ff0000") : $(this).css( "border-color", "#d7d8dc")
    })
    $(document).on( "blur", "#course-subhead", function() {
        $(this).val() == '' ? $(this).css( "border-color", "#ff0000") : $(this).css( "border-color", "#d7d8dc")
    })
    $(document).on( "blur", "#price-of-course", function() {
        $(this).val() == '' ? $(this).css( "border-color", "#ff0000") : $(this).css( "border-color", "#d7d8dc")
    })
}

var url_key = "", //封面url
    this_url = "", //封面key
    catg_id = "", //宣传片地址
    catg_id_key = "", //宣传片地址key
    ctnid = "", //参考资料的Id
    ctnidKey = "", //参考资料的IdKey
    ctnum = "", //任课老师Id
    ctnumKey = "", //任课老师IdKey
    ctpnum = "", //任课老师类别
    ctpnumKey = "", //任课老师类别key
    astride = 0, //是否为跨章
    chapters = 1; //总章节

function allData() {

    //取地区的值
    var country_arr = $(".select-area li");
    var country_data = "";
    for (var i = 0; i < country_arr.length; i++) {
        if (country_data == "") {
            country_data += $(country_arr[i]).attr("name");
        } else {
            country_data += "_" + $(country_arr[i]).attr("name");
        }
    }

    //取语言的值
    var language_arr = $(".select-language li");
    var language_data = "";
    for (var i = 0; i < language_arr.length; i++) {
        if (language_data == "") {
            language_data += $(language_arr[i]).attr("name");
        } else {
            language_data += "_" + $(language_arr[i]).attr("name");
        }
    }

    //课程名称
    var course_name = $("#course-name").val();

    //副标题名称
    var the_name_of_the_subtitle = $("#course-subhead").val();

    //开课时间
    var start_time = $("#datetimeStart").val();

    //结课时间
    var session_time = $("#datetimeEnd").val();

    //是否开放购买
    var whether_to_buy = 0;
    if ($("#course-open-seclect").attr("checked")) {
        whether_to_buy = 1;
    }

    //标签
    var all_tags = getTags();
    var ever_tags = {};
    for (var i = 0; i < all_tags.length; i++) {
        ever_tags[i + 1] = all_tags[i];
    }
    ever_tags = JSON.stringify(ever_tags);

    //课程简介
    var course_introduction = $("#course-introduction").val();

    //课程详情
    var course_details = $("#course-details").val();

    //适合人群
    var grading = $(".suits-the-crowd").find("input[checked='checked']").siblings("span").attr("name");

    //课程模式
    var schema = $(".course-mode").find("input[checked='checked']").siblings("span").attr("name");

    //是否连载
    var cstag_stages = 0;
    if ($(".chapter-number").find("input[checked='checked']").siblings("span").eq(1).text() == "连载中") {
        cstag_stages = 1;
    }

    return {
        cad: country_data,
        clue: language_data,
        cne: course_name,
        csd: the_name_of_the_subtitle,
        cbs: start_time,
        cor: session_time,
        cil: whether_to_buy,
        cts: ever_tags,
        coor: this_url,
        ccorKey: url_key,
        catg: catg_id,
        catgKey: catg_id_key,
        ciro: course_introduction,
        csys: course_details,
        cgdg: grading,
        csma: schema,
        ctnid: ctnid,
        ctnidKey: ctnidKey,
        ctnum: ctnum,
        ctnumKey: ctnumKey,
        ctpnum: ctpnum,
        ctpnumKey: ctpnumKey,
        casde: astride,
        chaps: chapters,
        cstag: cstag_stages,
        camont: "a"
    }
}

//上传文件
function upload_file( target) {

    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var obj_class = $(target).attr("class");

    var fileSize = 0;
    if (isIE && !target.files) {
        var filePath = target.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        fileSize = file.Size;
    } else {
        fileSize = target.files[0].size;
    }
    var size = fileSize / 1024;
    if (size > 2000) {
        alert("附件不能大于2M");
    } else {
        $.ajaxFileUpload({
            url: "/Pubblico/Uploadimg",
            type: "POST",
            secureuri: false,
            fileElementId: "publicity_materials_photo",
            dataType: "json",
            success: function(data) {
                $("." + obj_class).parents("#publicity-materials-photos").find(".sub-img").attr("src", data.data.thisUrl);
                $("." + obj_class).parents("#publicity-materials-photos").find(".sub-img").css("opacity", 1);
                url_key = data.data.urlKey;
                this_url = data.data.thisUrl;
            }
        })
    }
}

function upload_video() {

    $.post('/pubblico/uploadvideotoletv', function(data) {
        var upload_url = data.data.upload_url;

        $.ajaxFileUpload({
            url: upload_url,
            type: "POST",
            secureuri: false,
            fileElementId: "publicity_materials_vedio",
            success: function() {
                $.post('/pubblico/getlevideomsg', function(data) {
                    if (data.code == 1) {
                        catg_id = data.data.res;
                        catg_id_key = data.data.reskey;
                    }
                }, "json")
            }
        })
    }, "json")
}

//课程章
function chapter_big(this_obj) {
    var content_course_section_list = {
        tag: "li",
        class: "content_course_section_list",
        content_course_section_list_title: {
            tag: "section",
            class: "content_course_section_list_title",
            content_course_section_list_subtitle: {
                tag: "span",
                class: "content_course_section_list_subtitle pull-left"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                chooes_icon_chapter: {
                    tag: "section",
                    class: "chooes_icon_chapter pull-left",
                    chooes_icon_chapter_input: {
                        tag: "input",
                        type: "checked",
                        style: "display: none;"
                    },
                    chooes_icon_sqare: {
                        tag: "section",
                        class: "chooes_icon_sqare",
                        style: "display: none"
                    }
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left"
                }
            }
        },
        content_course_section_list_chapter: {
            tag: "ul",
            class: "content_course_section_list_chapter"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, content_course_section_list);
}

//专业课程
function major_chapter_big(this_obj) {
    var major_content_course_section_list = {
        tag: "li",
        class: "content_course_section_list",
        content_course_section_list_title: {
            tag: "section",
            class: "content_course_section_list_title",
            content_course_section_list_subtitle: {
                tag: "span",
                class: "content_course_section_list_subtitle pull-left",
                value: "&nbsp;&nbsp;"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                chooes_icon_chapter: {
                    tag: "section",
                    class: "chooes_icon_chapter pull-left",
                    chooes_icon_chapter_input: {
                        tag: "input",
                        type: "checked",
                        style: "display: none;"
                    },
                    chooes_icon_sqare: {
                        tag: "section",
                        class: "chooes_icon_sqare",
                        style: "display: none"
                    }
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left"
                }
            }
        },
        content_course_section_list_chapter: {
            tag: "ul",
            class: "content_course_section_list_chapter"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_content_course_section_list);
}

//课程节
function section_big(this_obj) {
    var content_course_section_list_chapter_list = {
        tag: "li",
        class: "content_course_section_list_chapter_list",
        content_course_section_list_chapter_list_title: {
            tag: "section",
            class: "content_course_section_list_chapter_list_title",
            content_course_section_list_subtitle_title: {
                tag: "span",
                class: "content_course_section_list_subtitle_title pull-left"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                chooes_icon_chapter: {
                    tag: "section",
                    class: "chooes_icon_section pull-left",
                    chooes_icon_chapter_input: {
                        tag: "input",
                        type: "checked",
                        style: "display: none;"
                    }
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left",
                    style: "visibility: hidden;"
                }
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, content_course_section_list_chapter_list);
}

//专业章
function major_section_big(this_obj) {
    var major_content_course_section_list_chapter_list = {
        tag: "li",
        class: "content_course_section_list_chapter_list",
        content_course_section_list_chapter_list_title: {
            tag: "section",
            class: "content_course_section_list_chapter_list_title",
            content_course_section_list_subtitle_title: {
                tag: "span",
                class: "content_course_section_list_subtitle_title pull-left",
                value: "&nbsp;&nbsp;"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                chooes_icon_chapter: {
                    tag: "section",
                    class: "chooes_icon_chapter pull-left",
                    style: "visibility: hidden;"
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left"
                }
            }
        },
        content_course_section_list_chapter_list_title_lists: {
            tag: "ul",
            class: "content_course_section_list_chapter_list_title_lists"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_content_course_section_list_chapter_list);
}

//专业节
function major_course_section_obj(this_obj) {
    var major_course_section_obj = {
        tag: "li",
        class: "content_course_section_list_chapter_list_list",
        content_course_section_list_subtitle_title_title: {
            tag: "span",
            class: "content_course_section_list_subtitle_title_title pull-left",
            value: "&nbsp;&nbsp;"
        },
        content_course_section_list_prompt: {
            tag: "span",
            class: "content_course_section_list_prompt pull-right",
            content_course_section_list_prompt_text: {
                tag: "span",
                class: "content_course_section_list_prompt_text pull-left"
            },
            content_course_section_list_icon_play_section: {
                tag: "span",
                class: "content_course_section_list_icon_play_section pull-left",
                style: "visibility: hidden;"
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_course_section_obj);
}

//课程大框
function course_big(this_obj) {
    var content_list_gai = {
        tag: "section",
        class: "content_list_gai",
        content_course: {
            tag: "section",
            class: "content_course",
            content_course_chapter: {
                tag: "section",
                class: "content_course_chapter",
                content_course_chapter_head: {
                    tag: "section",
                    class: "content_course_chapter_head",
                    chooes_icon: {
                        tag: "section",
                        class: "chooes_icon pull-left",
                        chooes_icon_input: {
                            tag: "input",
                            type: "checked",
                            style: "display: none;"
                        },
                        chooes_icon_sqare: {
                            tag: "section",
                            class: "chooes_icon_sqare",
                            style: "display: none"
                        }
                    },
                    img_show: {
                        tag: "section",
                        class: "img_show pull-left",
                        img_show_img: {
                            tag: "img",
                            class: "course_img",
                            src: ""
                        }
                    },
                    section_pull_left: {
                        tag: "section",
                        class: "pull-left",
                        section_pull_left_ul: {
                            tag: "ul",
                            course_title_list_1: {
                                tag: "li",
                                class: "course_title_list",
                                course_title: {
                                    tag: "p",
                                    class: "course_title pull-left"
                                }
                            },
                            course_title_list_2: {
                                tag: "li",
                                class: "course_title_list",
                                course_certificate: {
                                    tag: "section",
                                    class: "course_certificate pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "本科证书"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_study_abroad_qualification: {
                                    tag: "section",
                                    class: "course_study_abroad_qualification pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "留学资格"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_credits: {
                                    tag: "section",
                                    class: "course_credits pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "学分"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_internship: {
                                    tag: "section",
                                    class: "course_internship pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "推荐实习机会"
                                    }
                                }
                            },
                            course_title_list_3: {
                                tag: "li",
                                class: "course_title_list course_number",
                                course_number_text_first: {
                                    tag: "span",
                                    class: "course_number_text_first",
                                    value: "<script type='text/javascript'>$('.course_all').find('.course_number_text_first').html(lang_plan.selected_1);</script>"
                                },
                                course_number_num_1: {
                                    tag: "span",
                                    class: "course_number_num",
                                    value: "&nbsp"
                                },
                                course_number_text_second: {
                                    tag: "span",
                                    class: "course_number_text_second",
                                    value: "<script type='text/javascript'>$('.course_all').find('.course_number_text_second').html(lang_plan.selected_2);</script>"
                                },
                                course_number_num_2: {
                                    tag: "span",
                                    class: "course_number_num",
                                    value: "&nbsp;"
                                },
                                course_number_text_there: {
                                    tag: "span",
                                    class: "course_number_text_there",
                                    value: "<script type='text/javascript'>$('.course_all').find('.course_number_text_there').html(lang_plan.selected_3);</script>"
                                }
                            }
                        }
                    },
                    section_pull_right: {
                        tag: "section",
                        class: "pull-right",
                        course_price: {
                            tag: "section",
                            class: "course_price",
                            course_price_preferential: {
                                tag: "span",
                                class: "course_price_preferential pull-right",
                                value: "&nbsp;&nbsp;"
                            }
                            // ,
                            // course_price_original: {
                            //     tag: "span",
                            //     class: "course_price_original pull-left",
                            //     value: "&nbsp;&nbsp;"
                            // },
                            // course_price_prompt: {
                            //     tag: "span",
                            //     class: "course_price_prompt"
                            // }
                        },
                        course_contraction_section_delete: {
                            tag: "p",
                            class: "course_contraction_section_delete pull-left",
                            value: "<script type='text/javascript'>$('.course_contraction_section_delete').html(lang_plan.remove_plan);</script>"
                        },
                        course_contraction_section: {
                            tag: "p",
                            class: "course_contraction_section pull-right",
                            course_contraction_section_text: {
                                tag: "span",
                                class: "course_contraction_section_text",
                                value: "<script type='text/javascript'>$('.course_all').find('.course_contraction_section_text').html(lang_plan.view_sections + '&nbsp;');</script>"
                            },
                            course_contraction_section_icon: {
                                tag: "span",
                                class: "course_contraction_section_icon",
                                value: "&nbsp;&nbsp;&nbsp;&nbsp;"
                            }
                        }
                    }
                },
                content_course_section: {
                    tag: "ul",
                    class: "content_course_section"
                },
                list_Pack_up: {
                    tag: "section",
                    class: "list_Pack_up",
                    list_Pack_up_button_sure: {
                        tag: "section",
                        class: "list_Pack_up_button_sure pull-left",
                        value: "<script type='text/javascript'>$('.list_Pack_up_button_sure').html(lang_plan.ok);</script>"
                    },
                    list_Pack_up_button_all: {
                        tag: "section",
                        class: "list_Pack_up_button_all pull-left",
                        style: "margin-left: 5%; margin-top: 30px;",
                        list_Pack_up_button_all_p: {
                            tag: "p",
                            class: "pull-left",
                            style: "margin-bottom: 0; margin-top: 8px;",
                            value: "<script type='text/javascript'>$('.list_Pack_up_button_all > p').html(lang_plan.select_all);</script>"
                        },
                        chooes_icon_chapter: {
                            tag: "section",
                            class: "chooes_icon_chapter_all pull-left",
                            style: "margin-top: 10px; margin-left: 15px; margin-right: 0;",
                            chooes_icon_chapter_input: {
                                tag: "input",
                                type: "checked",
                                style: "display: none;"
                            }
                        }
                    }
                }
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, content_list_gai);
}

//专业大框
function major_course_big(this_obj) {
    var marjor_content_list_gai = {
        tag: "section",
        class: "content_list_gai",
        content_course: {
            tag: "section",
            class: "content_course",
            style: "border: none;",
            content_course_chapter: {
                tag: "section",
                class: "content_course_chapter",
                content_course_chapter_head: {
                    tag: "section",
                    class: "content_course_chapter_head",
                    chooes_icon: {
                        tag: "section",
                        class: "chooes_icon pull-left",
                        chooes_icon_input: {
                            tag: "input",
                            type: "checked",
                            style: "display: none;"
                        },
                        chooes_icon_sqare: {
                            tag: "section",
                            class: "chooes_icon_sqare",
                            style: "display: none"
                        }
                    },
                    img_show: {
                        tag: "section",
                        class: "img_show pull-left",
                        course_icon: {
                            tag: "img",
                            class: "course_icon",
                            src: "/static/images/Courses/angle_icon_professional.png"
                        },
                        img_show_img: {
                            tag: "img",
                            class: "course_img",
                            src: ""
                        }
                    },
                    section_pull_left: {
                        tag: "section",
                        class: "pull-left",
                        section_pull_left_ul: {
                            tag: "ul",
                            course_title_list_1: {
                                tag: "li",
                                class: "course_title_list",
                                course_title: {
                                    tag: "p",
                                    class: "course_title pull-left"
                                },
                                course_subtitle: {
                                    tag: "p",
                                    class: "course_subtitle pull-left"
                                }
                            },
                            course_title_list_2: {
                                tag: "li",
                                class: "course_title_list",
                                course_certificate: {
                                    tag: "section",
                                    class: "course_certificate pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "本科证书"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_study_abroad_qualification: {
                                    tag: "section",
                                    class: "course_study_abroad_qualification pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "留学资格"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_credits: {
                                    tag: "section",
                                    class: "course_credits pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "学分"
                                    },
                                    course_treatment_addIcon: {
                                        tag: "span",
                                        class: "course_treatment_addIcon",
                                        value: "+"
                                    }
                                },
                                course_internship: {
                                    tag: "section",
                                    class: "course_internship pull-left",
                                    course_treatment_icon: {
                                        tag: "span",
                                        class: "course_treatment_icon pull-left"
                                    },
                                    course_treatment_text: {
                                        tag: "span",
                                        class: "course_treatment_text",
                                        value: "推荐实习机会"
                                    }
                                }
                            },
                            course_title_list_3: {
                                tag: "li",
                                class: "course_title_list course_number",
                                course_number_text_first: {
                                    tag: "span",
                                    class: "course_number_text_first",
                                    value: "<script type='text/javascript'>$('.major_all').find('.course_number_text_first').html(lang_plan.selected_1);</script>"
                                },
                                course_number_num_1: {
                                    tag: "span",
                                    class: "course_number_num",
                                    value: "&nbsp"
                                },
                                course_number_text_second: {
                                    tag: "span",
                                    class: "course_number_text_second",
                                    value: "<script type='text/javascript'>$('.major_all').find('.course_number_text_second').html(lang_plan.total_course_2);</script>"
                                }
                            }
                        }
                    },
                    section_pull_right: {
                        tag: "section",
                        class: "pull-right",
                        course_price: {
                            tag: "section",
                            class: "course_price",
                            course_price_preferential: {
                                tag: "span",
                                class: "course_price_preferential pull-right",
                                value: "&nbsp;&nbsp;"
                            }
                            // ,
                            // course_price_original: {
                            //     tag: "span",
                            //     class: "course_price_original pull-left",
                            //     value: "&nbsp;&nbsp;"
                            // },
                            // course_price_prompt: {
                            //     tag: "span",
                            //     class: "course_price_prompt"
                            // }
                        },
                        course_contraction_section_delete: {
                            tag: "p",
                            class: "course_contraction_section_delete pull-left",
                            value: "<script type='text/javascript'>$('.course_contraction_section_delete').html(lang_plan.remove_plan);</script>"
                        },
                        course_contraction_section: {
                            tag: "p",
                            class: "course_contraction_section pull-right",
                            course_contraction_section_text: {
                                tag: "span",
                                class: "course_contraction_section_text",
                                value: "<script type='text/javascript'>$('.major_all').find('.course_contraction_section_text').html(lang_plan.view_courses + '&nbsp;');</script>"
                            },
                            course_contraction_section_icon: {
                                tag: "span",
                                class: "course_contraction_section_icon",
                                value: "&nbsp;&nbsp;&nbsp;&nbsp;"
                            }
                        }
                    }
                },
                content_course_section: {
                    tag: "ul",
                    class: "content_course_section"
                },
                list_Pack_up: {
                    tag: "section",
                    class: "list_Pack_up",
                    list_Pack_up_button: {
                        tag: "section",
                        class: "list_Pack_up_button",
                        value: "<script type='text/javascript'>$('.list_Pack_up_button').eq(0).html(lang_plan.pack_up);</script>"
                    }
                }
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, marjor_content_list_gai);
}

//选课表生成
function Ordinary_class_Create_object_Initialize(this_obj, Initialize_obj) {
    var this_obj = this_obj;
    var first_level_obj = $("<" + Initialize_obj.tag + "></" + Initialize_obj.tag + ">").appendTo(this_obj);
    Ordinary_class_Create_object(first_level_obj, Initialize_obj);
}

function Ordinary_class_Create_object(first_level_obj, first_level_date) {
    for (first_level in first_level_date) {
        if (first_level != "tag" && typeof first_level_date[first_level] != "object") {
            if (first_level == "value") {
                first_level_obj.html(first_level_date[first_level]);
                continue;
            }
            first_level_obj.attr(first_level, first_level_date[first_level]);
        }
        if (typeof first_level_date[first_level] == "object") {
            if (first_level_date[first_level].tag == "input" || first_level_date[first_level].tag == "img") {
                var second_obj = $("<" + first_level_date[first_level].tag + "/>").appendTo(first_level_obj);
                arguments.callee(second_obj, first_level_date[first_level]);
            } else {
                var second_obj = $("<" + first_level_date[first_level].tag + "></" + first_level_date[first_level].tag + ">").appendTo(first_level_obj);
                arguments.callee(second_obj, first_level_date[first_level]);
            }
        }
    }
}

function price_obj(this_obj) {
    var price_use_coupons_settlement_meun_list = {
        tag: "ul",
        class: "price_use_coupons_settlement_meun_list pull-left",
        price_use_coupons_settlement_meun_list_big: {
            tag: "li",
            class: "price_use_coupons_settlement_meun_list_big"
        },
        price_use_coupons_settlement_meun_list_small: {
            tag: "li",
            class: "price_use_coupons_settlement_meun_list_small"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, price_use_coupons_settlement_meun_list);
}

//选课表页面效果
function Course_selection_table_page_generation() {

    var major_input_no, course_input_no;

    $.post("/api/plan/courses/list", function(data) {

        //选课表页价格
        // Courses_price(data);

        if (data != null) {

            $(".Transaction_loading").hide();
            $(".Transaction_content").show();

            if (data.data != null) {
                $.each(data.data, function(currency, currency_data) {

                    price_obj(".price_use_coupons_settlement_meun_text_lists");

                    if (currency_data.majors != null) {
                        var major_obj_num = -1;
                        var this_obj = $(".major_all");
                        $.each(currency_data.majors, function(major, major_obj) {
                            if (major_obj) {
                                major_obj_num++;

                                major_course_big(this_obj);

                                if (major_obj.costs && major_obj.costs[currency]) {
                                    this_obj.children(".content_list_gai").eq(major_obj_num).find(".course_price_preferential").html(major_obj.costs[currency].symbol + major_obj.costs[currency].expense);
                                }

                                this_obj.children(".content_list_gai").eq(major_obj_num).attr("currency", currency);
                                this_obj.children(".content_list_gai").eq(major_obj_num).attr("major_id", major_obj.id);
                                this_obj.children(".content_list_gai").eq(major_obj_num).find(".course_title").html(major_obj.name);

                                this_obj.children(".content_list_gai").eq(major_obj_num).find(".course_subtitle").html((major_obj.school != null && parseInt(major_obj.school.pid) > 0) ? major_obj.school.p_name + major_obj.school.name : major_obj.school.name);

                                var course_obj_num = -1;
                                if (major_obj.major_courses) {
                                    $.each(major_obj.major_courses, function(subscript, course) {
                                        course_obj_num++;

                                        major_chapter_big(this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section"));

                                        var course_obj = currency_data.courses[course];

                                        console.log(course_obj.m_payment);
                                        if (course_obj.m_payment == "0") {}

                                        if (course_obj) {
                                            if (course_obj.costs && course_obj.costs[currency]) {
                                                this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_prompt_text").html(course_obj.costs[currency].symbol + course_obj.costs[currency].expense);
                                            }

                                            this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).attr("course_id", course_obj.id);

                                            this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_subtitle").html((course_obj_num + 1) + "、" + course_obj.name);

                                            var chapter_obj_num = -1;
                                            if (course_obj.chapters) {
                                                $.each(course_obj.chapters, function(chapter_key, chapter_val) {
                                                    chapter_obj_num++;

                                                    major_section_big(this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter"));

                                                    this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).attr("chapter_id", chapter_val.id);

                                                    this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_subtitle_title").html(lang_plan.chapter_1 + (chapter_obj_num + 1) + lang_plan.chapter_2 + "&nbsp;&nbsp;" + chapter_val.title);

                                                    var section_obj_num = -1;
                                                    if (chapter_val.sections) {
                                                        $.each(chapter_val.sections, function(section_key, section_val) {
                                                            section_obj_num++;

                                                            major_course_section_obj(this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_title_lists"));

                                                            this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_list").eq(section_obj_num).attr("section_id", section_val.id);

                                                            this_obj.children(".content_list_gai").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_list").eq(section_obj_num).find(".content_course_section_list_subtitle_title_title").html(lang_plan.section_1 + (section_obj_num + 1) + lang_plan.section_2 + "&nbsp;&nbsp;" + section_val.title);
                                                        })
                                                    }
                                                })
                                            }
                                            delete currency_data.courses[course];
                                        }
                                    })
                                }
                            }
                        })
                    }
                    if (currency_data.courses != null) {

                        var course_obj_num = -1;
                        var this_obj = $(".course_all");
                        $.each(currency_data.courses, function(course_key, course_val) {
                            course_obj_num++;

                            course_big(this_obj);

                            if (course_val.costs && course_val.costs[currency]) {
                                this_obj.children(".content_list_gai").eq(course_obj_num).find(".course_price_preferential").html(course_val.costs[currency].symbol + course_val.costs[currency].expense);
                            }

                            this_obj.children(".content_list_gai").eq(course_obj_num).attr("currency", currency);
                            this_obj.children(".content_list_gai").eq(course_obj_num).attr("course_id", course_val.id);
                            this_obj.children(".content_list_gai").eq(course_obj_num).find(".course_title").html(course_val.name);
                            this_obj.children(".content_list_gai").eq(course_obj_num).find(".course_img").attr("src", course_val.cover);

                            var chapter_obj_num = -1;
                            if (course_val.chapters) {
                                $.each(course_val.chapters, function(chapter_key, chapter_val) {
                                    chapter_obj_num++;

                                    chapter_big(this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section"));

                                    if (chapter_val.costs && chapter_val.costs[currency]) {
                                        this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_prompt_text").html(chapter_val.costs[currency].symbol + chapter_val.costs[currency].expense);
                                    }

                                    this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).attr("chapter_id", chapter_val.id);
                                    this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_subtitle").html(lang_plan.chapter_1 + (chapter_obj_num + 1) + lang_plan.chapter_2 + "&nbsp;&nbsp;" + chapter_val.title);

                                    var section_obj_num = -1;
                                    if (chapter_val.sections) {
                                        $.each(chapter_val.sections, function(section_key, section_val) {
                                            section_obj_num++;

                                            section_big(this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter"));

                                            if (section_val.costs && section_val.costs[currency]) {
                                                this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).find(".content_course_section_list_prompt_text").html(section_val.costs[currency].symbol + chapter_val.costs[currency].expense);
                                            }

                                            this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).attr("section_id", section_val.id);
                                            this_obj.children(".content_list_gai").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).find(".content_course_section_list_subtitle_title").html(lang_plan.section_1 + (section_obj_num + 1) + lang_plan.section_2 + "&nbsp;&nbsp;" + section_val.title);
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
                if (data.plan) {
                    $.each(data.plan, function(currency, currency_plan) {
                        if (currency_plan.majors) {
                            $.each(currency_plan.majors, function(major_aaa, major_obj) {
                                $(".content_list_gai[major_id=" + major_obj.major + "]").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                $(".content_list_gai[major_id=" + major_obj.major + "]").find(".chooes_icon").children("input").attr("checked", "checked");
                                $(".content_list_gai[major_id=" + major_obj.major + "]").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                $(".content_list_gai[major_id=" + major_obj.major + "]").find(".chooes_icon_chapter").children("input").attr("checked", "checked");
                            })
                        }
                        if (currency_plan.courses) {
                            $.each(currency_plan.courses, function(course_aaa, course_obj) {
                                if (course_obj.major != "") {
                                    $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_chapter_head").find(".chooes_icon_sqare").show();
                                    $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + course_obj.course + "]").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                    $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + course_obj.course + "]").find(".chooes_icon_chapter").children("input").attr("checked", "checked");
                                    if (course_obj.chapters != null) {
                                        $.each(course_obj.chapters, function(chapter_key, chapter_obj) {
                                            $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + chapter_obj.chapter + "]").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                            $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + chapter_obj.chapter + "]").find(".chooes_icon_chapter").children("input").attr("checked", "checked");
                                            $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + chapter_obj.chapter + "]").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                            $(".content_list_gai[major_id=" + course_obj.major + "]").find(".content_course_section_list[course_id=" + chapter_obj.chapter + "]").find(".chooes_icon_section").children("input").attr("checked", "checked");
                                        })
                                    }
                                } else {
                                    if (course_obj.chapters == null) {
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon").children("input").attr("checked", "checked");
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon_chapter").children("input").attr("checked", "checked");
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon_section").children("input").attr("checked", "checked");
                                    } else {
                                        $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_chapter_head").find(".chooes_icon_sqare").show();
                                        $.each(course_obj.chapters, function(chapter_key, chapter_obj) {

                                            if (chapter_obj.sections != null) {
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".content_course_section_list_title").find(".chooes_icon_sqare").show();
                                                $.each(chapter_obj.sections, function(section_key, section_val) {
                                                    $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".content_course_section_list_chapter_list[section_id=" + section_val.section + "]").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                                    $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".content_course_section_list_chapter_list[section_id=" + section_val.section + "]").find(".chooes_icon_section").children("input").attr("checked", "checked");
                                                })
                                            } else {
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".chooes_icon").children("input").attr("checked", "checked");
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".chooes_icon_chapter").children("input").attr("checked", "checked");
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".content_course_section_list_chapter_list").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
                                                $(".content_list_gai[course_id=" + course_obj.course + "]").find(".content_course_section_list[chapter_id=" + chapter_obj.chapter + "]").find(".content_course_section_list_chapter_list").find(".chooes_icon_section").children("input").attr("checked", "checked");
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }
        }
        //列表效果
        List_of_expansion_and_contraction_of_special_effects();

        //课程数目
        chapter_sec_num();
    }, "json")


    //选课表页提交
    $(document).on("click", ".course_price_submit_btn", function() {
        $(".Transaction_loading").show();
        $(".Transaction_content").hide();

        var data = new Object();
        data.CNY = {};
        var courses_all = $("input[type='checked']").parents(".content_list_gai");

        $.each(courses_all, function(a_key, a_name) {
            if (a_name.getAttribute("course_id")) {
                var c_id = a_name.getAttribute("course_id");

                if (!data.CNY.courses) {
                    data.CNY.courses = {};
                }
                data.CNY.courses[c_id] = {
                    course: c_id,
                    major: ""
                }

                var c_chap_all = $(a_name).find(".content_course_section_list");
                var c_chap_che = $(a_name).find("input[checked='checked']").parents(".content_course_section_list");

                if (!(c_chap_all.length == c_chap_che.length) && c_chap_che.length > 0) {

                    if (!data.CNY.courses[c_id].chapters) {
                        data.CNY.courses[c_id].chapters = {};
                    }

                    $.each(c_chap_che, function(chap_key, chap_name) {
                        var chap_id = chap_name.getAttribute("chapter_id");

                        data.CNY.courses[c_id].chapters[chap_id] = {
                            chapter: chap_id
                        }
                    })
                } else {
                    if (!data.CNY.courses[c_id].chapters) {
                        data.CNY.courses[c_id].chapters = {};
                    }

                    $.each(c_chap_che, function(chap_key, chap_name) {
                        var chap_id = chap_name.getAttribute("chapter_id");
                        var no_sec = $(chap_name).find("input[checked!='checked']");

                        if (c_chap_all.length == c_chap_che.length && no_sec.length > 0) {

                            data.CNY.courses[c_id].chapters[chap_id] = {
                                chapter: chap_id
                            }

                            var sec_che = $(chap_name).find("input[checked='checked']").parents(".content_course_section_list_chapter_list");

                            $.each(sec_che, function(sec_key, sec_name) {
                                var sec_id = sec_name.getAttribute("section_id");

                                if (!data.CNY.courses[c_id].chapters[chap_id].sections) {
                                    data.CNY.courses[c_id].chapters[chap_id].sections = {};
                                }
                                data.CNY.courses[c_id].chapters[chap_id].sections[sec_id] = {
                                    section: sec_id
                                }
                            })
                        } else {
                            var chap_id = chap_name.getAttribute("chapter_id");

                            if (c_chap_all.length == c_chap_che.length) {
                                delete data.CNY.courses[c_id].chapters;
                            } else {
                                data.CNY.courses[c_id].chapters[chap_id] = {
                                    chapter: chap_id
                                }
                            }
                        }
                    })
                }

            }
            if (a_name.getAttribute("major_id")) {
                var m_id = a_name.getAttribute("major_id");
                var m_cour_all = $(a_name).find(".content_course_section_list");
                var m_cour_che = $(a_name).find("input[checked='checked']").parents(".content_course_section_list");

                if (!(m_cour_all.length == m_cour_che.length) && m_cour_che.length > 0) {

                    if (!data.CNY.courses) {
                        data.CNY.courses = {};
                    }

                    $.each(m_cour_che, function(m_key, m_name) {
                        var c_id = m_name.getAttribute("course_id");

                        data.CNY.courses[c_id] = {
                            course: c_id,
                            major: m_id
                        }
                    })
                }
                if (m_cour_all.length == m_cour_che.length) {

                    if (!data.CNY.majors) {
                        data.CNY.majors = {};
                    }

                    data.CNY.majors[m_id] = {
                        major: m_id
                    }
                }
            }
        })

        $.ajax({
            type: "post",
            url: "/api/order/show",
            data: {
                data: data
            },
            dataType: "json",
            success: function(data) {
                if (data != null) {
                    window.location.href = "/Order/Details.html?data=" + data;
                }
            }
        })
    })

    //选课表页面选择逻辑
    course_select_logic();

    //选课表页面中的删除
    course_delete();
}

//选课表章节数目
function chapter_sec_num() {

    //课程页面显示章节数
    var major_all_arr = $(".major_all").find(".content_list_gai");
    var course_all_arr = $(".course_all").find(".content_list_gai");

    $.each(major_all_arr, function(major_key, major_name) {
        var major_arr = $(major_name).find("input[checked='checked']").parents(".content_list_gai");
        var major_chapter_arr = $(major_name).find("input[checked='checked']").parents(".content_course_section_list");

        if (major_arr.length > 0) {
            for (var e = 0; e < major_arr.length; e++) {
                for (var a = 0; a < major_chapter_arr.length; a++) {
                    $(major_arr[e]).find(".course_number_num").eq(0).html("&nbsp;" + (a + 1) + "&nbsp");
                }
            }
        } else {
            $(major_name).find(".course_number_num").eq(0).html("&nbsp;" + 0 + "&nbsp");
        }
    })
    $.each(course_all_arr, function(coursr_key, course_name) {
        var course_arr = $(course_name).find("input[checked='checked']").parents(".content_list_gai");
        var course_chapter_arr = $(course_name).find("input[checked='checked']").parents(".content_course_section_list");
        var course_section_arr = $(course_name).find("input[checked='checked']").parents(".content_course_section_list_chapter_list");

        if (course_arr.length > 0) {
            for (var e = 0; e < course_arr.length; e++) {
                for (var a = 0; a < course_chapter_arr.length; a++) {
                    $(course_arr[e]).find(".course_number_num").eq(0).html("&nbsp;" + (a + 1) + "&nbsp");
                }
                for (var a = 0; a < course_section_arr.length; a++) {
                    $(course_arr[e]).find(".course_number_num").eq(1).html("&nbsp;" + (a + 1) + "&nbsp");
                }
            }
        } else {
            $(course_name).find(".course_number_num").eq(0).html("&nbsp;" + 0 + "&nbsp");
            $(course_name).find(".course_number_num").eq(1).html("&nbsp;" + 0 + "&nbsp");
        }
    })
}

//订单页专业大框
function order_page_major_course_big(this_obj) {
    var content_course = {
        tag: "section",
        class: "content_course",
        style: "border-top: none;",
        content_course_chapter: {
            tag: "section",
            class: "content_course_chapter",
            content_course_chapter_head: {
                tag: "section",
                class: "content_course_chapter_head",
                img_show: {
                    tag: "section",
                    class: "img_show pull-left",
                    course_icon: {
                        tag: "img",
                        class: "course_icon",
                        src: "/static/images/Courses/angle_icon_professional.png"
                    },
                    img_show_img: {
                        tag: "img",
                        class: "course_img",
                        src: ""
                    }
                },
                section_pull_left: {
                    tag: "section",
                    class: "pull-left",
                    section_pull_left_ul: {
                        tag: "ul",
                        course_title_list_1: {
                            tag: "li",
                            class: "course_title_list",
                            course_title: {
                                tag: "p",
                                class: "course_title pull-left"
                            },
                            course_subtitle: {
                                tag: "p",
                                class: "course_subtitle pull-left"
                            }
                        },
                        course_title_list_2: {
                            tag: "li",
                            class: "course_title_list",
                            course_certificate: {
                                tag: "section",
                                class: "course_certificate pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "本科证书"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_study_abroad_qualification: {
                                tag: "section",
                                class: "course_study_abroad_qualification pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "留学资格"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_credits: {
                                tag: "section",
                                class: "course_credits pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "学分"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_internship: {
                                tag: "section",
                                class: "course_internship pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "推荐实习机会"
                                }
                            }
                        },
                        course_title_list_3: {
                            tag: "li",
                            class: "course_title_list course_number",
                            course_number_text_first: {
                                tag: "span",
                                class: "course_number_text_1",
                                value: "<script type='text/javascript'>$('.course_number_text_1').html(lang_order.total_course_1);</script>"
                            },
                            course_number_num: {
                                tag: "span",
                                class: "course_number_num",
                                value: "&nbsp"
                            },
                            course_number_text_2: {
                                tag: "span",
                                class: "course_number_text_2",
                                value: "<script type='text/javascript'>$('.course_number_text_2').html(lang_order.total_course_2);</script>"
                            }
                        }
                    }
                },
                section_pull_right: {
                    tag: "section",
                    class: "pull-right",
                    course_price: {
                        tag: "section",
                        class: "course_price",
                        course_price_preferential: {
                            tag: "span",
                            class: "course_price_preferential pull-right",
                            value: "&nbsp;&nbsp;"
                        }
                        // ,
                        // course_price_original: {
                        //     tag: "span",
                        //     class: "course_price_original pull-left",
                        //     value: "&nbsp;&nbsp;"
                        // },
                        // course_price_prompt: {
                        //     tag: "span",
                        //     class: "course_price_prompt"
                        // }
                    },
                    course_contraction_section: {
                        tag: "p",
                        class: "course_contraction_section pull-right",
                        course_contraction_section_text: {
                            tag: "span",
                            class: "course_contraction_section_text",
                            value: "<script type='text/javascript'>$('.major_all').find('.course_contraction_section_text').html(lang_order.view_courses + '&nbsp;');</script>"
                        },
                        course_contraction_section_icon: {
                            tag: "span",
                            class: "course_contraction_section_icon",
                            value: "&nbsp;&nbsp;&nbsp;&nbsp;"
                        }
                    }
                }
            },
            content_course_section: {
                tag: "ul",
                class: "content_course_section"
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, content_course);
}

//订单页课程大框
function order_page_course_course_big(this_obj) {
    var content_course = {
        tag: "section",
        class: "content_course",
        style: "border-top: none;",
        content_course_chapter: {
            tag: "section",
            class: "content_course_chapter",
            content_course_chapter_head: {
                tag: "section",
                class: "content_course_chapter_head",
                img_show: {
                    tag: "section",
                    class: "img_show pull-left",
                    img_show_img: {
                        tag: "img",
                        class: "course_img",
                        src: ""
                    }
                },
                section_pull_left: {
                    tag: "section",
                    class: "pull-left",
                    section_pull_left_ul: {
                        tag: "ul",
                        course_title_list_1: {
                            tag: "li",
                            class: "course_title_list",
                            course_title: {
                                tag: "p",
                                class: "course_title pull-left"
                            },
                            course_subtitle: {
                                tag: "p",
                                class: "course_subtitle pull-left"
                            }
                        },
                        course_title_list_2: {
                            tag: "li",
                            class: "course_title_list",
                            course_certificate: {
                                tag: "section",
                                class: "course_certificate pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "本科证书"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_study_abroad_qualification: {
                                tag: "section",
                                class: "course_study_abroad_qualification pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "留学资格"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_credits: {
                                tag: "section",
                                class: "course_credits pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "学分"
                                },
                                course_treatment_addIcon: {
                                    tag: "span",
                                    class: "course_treatment_addIcon",
                                    value: "+"
                                }
                            },
                            course_internship: {
                                tag: "section",
                                class: "course_internship pull-left",
                                course_treatment_icon: {
                                    tag: "span",
                                    class: "course_treatment_icon pull-left"
                                },
                                course_treatment_text: {
                                    tag: "span",
                                    class: "course_treatment_text",
                                    value: "推荐实习机会"
                                }
                            }
                        },
                        course_title_list_3: {
                            tag: "li",
                            class: "course_title_list course_number",
                            course_number_text_1: {
                                tag: "span",
                                class: "course_number_text_1",
                                value: "<script type='text/javascript'>$('.course_number_text_1').html(lang_order.total_course_1);</script>"
                            },
                            course_number_num: {
                                tag: "span",
                                class: "course_number_num",
                                value: "&nbsp"
                            },
                            course_number_text_2: {
                                tag: "span",
                                class: "course_number_text_2",
                                value: "<script type='text/javascript'>$('.course_number_text_2').html(lang_order.total_course_2);</script>"
                            }
                        }
                    }
                },
                section_pull_right: {
                    tag: "section",
                    class: "pull-right",
                    course_price: {
                        tag: "section",
                        class: "course_price",
                        course_price_preferential: {
                            tag: "span",
                            class: "course_price_preferential pull-right",
                            value: "&nbsp;&nbsp;"
                        }
                        // ,
                        // course_price_original: {
                        //     tag: "span",
                        //     class: "course_price_original pull-left",
                        //     value: "&nbsp;&nbsp;"
                        // },
                        // course_price_prompt: {
                        //     tag: "span",
                        //     class: "course_price_prompt"
                        // }
                    },
                    course_contraction_section: {
                        tag: "p",
                        class: "course_contraction_section pull-right",
                        course_contraction_section_text: {
                            tag: "span",
                            class: "course_contraction_section_text",
                            value: "<script type='text/javascript'>$('.course_all').find('.course_contraction_section_text').html(lang_order.view_sections + '&nbsp;');</script>"
                        },
                        course_contraction_section_icon: {
                            tag: "span",
                            class: "course_contraction_section_icon",
                            value: "&nbsp;&nbsp;&nbsp;&nbsp;"
                        }
                    }
                }
            },
            content_course_section: {
                tag: "ul",
                class: "content_course_section"
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, content_course);
}

//专业课程
function Order_major_chapter_big(this_obj) {
    var major_content_course_section_list = {
        tag: "li",
        class: "content_course_section_list",
        content_course_section_list_title: {
            tag: "section",
            class: "content_course_section_list_title",
            content_course_section_list_subtitle: {
                tag: "span",
                class: "content_course_section_list_subtitle pull-left",
                value: "&nbsp;&nbsp;"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left"
                }
            }
        },
        content_course_section_list_chapter: {
            tag: "ul",
            class: "content_course_section_list_chapter"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_content_course_section_list);
}

//专业章
function Order_major_section_big(this_obj) {
    var major_content_course_section_list_chapter_list = {
        tag: "li",
        class: "content_course_section_list_chapter_list",
        content_course_section_list_chapter_list_title: {
            tag: "section",
            class: "content_course_section_list_chapter_list_title",
            content_course_section_list_subtitle_title: {
                tag: "span",
                class: "content_course_section_list_subtitle_title pull-left",
                value: "&nbsp;&nbsp;"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left"
                }
            }
        },
        content_course_section_list_chapter_list_title_lists: {
            tag: "ul",
            class: "content_course_section_list_chapter_list_title_lists"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_content_course_section_list_chapter_list);
}

//课程章
function Order_course_section_big(this_obj) {
    var major_content_course_section_list_chapter_list = {
        tag: "li",
        class: "content_course_section_list_chapter_list",
        content_course_section_list_chapter_list_title: {
            tag: "section",
            class: "content_course_section_list_chapter_list_title",
            content_course_section_list_subtitle_title: {
                tag: "span",
                class: "content_course_section_list_subtitle_title pull-left",
                value: "&nbsp;&nbsp;"
            },
            content_course_section_list_prompt: {
                tag: "span",
                class: "content_course_section_list_prompt pull-right",
                content_course_section_list_prompt_text: {
                    tag: "span",
                    class: "content_course_section_list_prompt_text pull-left"
                },
                content_course_section_list_icon_arrow: {
                    tag: "span",
                    class: "content_course_section_list_icon_arrow pull-left",
                    style: "visibility: hidden"
                }
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_content_course_section_list_chapter_list);
}

//专业节
function Order_major_course_section_obj(this_obj) {
    var major_course_section_obj = {
        tag: "li",
        class: "content_course_section_list_chapter_list_list",
        content_course_section_list_subtitle_title_title: {
            tag: "span",
            class: "content_course_section_list_subtitle_title_title pull-left",
            value: "&nbsp;&nbsp;"
        },
        content_course_section_list_prompt: {
            tag: "span",
            class: "content_course_section_list_prompt pull-right",
            content_course_section_list_prompt_text: {
                tag: "span",
                class: "content_course_section_list_prompt_text pull-left"
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, major_course_section_obj);
}

//订单页面效果
function Effect_of_the_order_page() {
    if (data_order.data) {
        data = {
            data: data_order.data
        }
    }
    if (data_order.order) {
        data = {
            data: data_order.order
        }
    }


    $.post("/api/order/details", data, function(data) {


        if (data != null) {

            $(".Transaction_loading").hide();
            $(".Transaction_content").show();

            if (data.order != null) {
                console.log(data.order);
            }

            if (data.data != null) {
                $.each(data.data, function(currency, currency_data) {

                    order_price(".price_use_coupons_settlement_meun_lists");
                    Order_price_dsaf(".the_total_amount_of_prices");

                    if (currency_data.majors != null) {
                        var major_obj_num = -1;
                        var this_obj = $(".major_all");
                        $.each(currency_data.majors, function(major, major_obj) {
                            major_obj_num++;

                            order_page_major_course_big(this_obj);

                            if (major_obj.costs) {
                                if (major_obj.costs[currency]) {
                                    this_obj.children(".content_course").eq(major_obj_num).find(".course_price_preferential").html(major_obj.costs[currency].symbol + major_obj.costs[currency].expense);
                                }
                            }

                            this_obj.children(".content_course").eq(major_obj_num).attr("currency", currency);
                            this_obj.children(".content_course").eq(major_obj_num).attr("major_id", major_obj.id);
                            this_obj.children(".content_course").eq(major_obj_num).find(".course_title").html(major_obj.name);

                            this_obj.children(".content_course").eq(major_obj_num).find(".course_subtitle").html((major_obj.school != null && parseInt(major_obj.school.pid) > 0) ? major_obj.school.p_name + major_obj.school.name : major_obj.school.name);

                            var course_obj_num = -1;
                            if (major_obj.major_courses) {
                                $.each(major_obj.major_courses, function(subscript, course) {
                                    course_obj_num++;

                                    Order_major_chapter_big(this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section"));

                                    var course_obj = currency_data.courses[course];

                                    if (course_obj.costs) {
                                        if (course_obj.costs[currency]) {
                                            this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_prompt_text").html(course_obj.costs[currency].symbol + course_obj.costs[currency].expense);
                                        }
                                    }

                                    this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).attr("course_id", course_obj.id);

                                    this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_subtitle").html((course_obj_num + 1) + "、" + course_obj.name);

                                    var chapter_obj_num = -1;
                                    if (course_obj.chapters) {
                                        $.each(course_obj.chapters, function(chapter_key, chapter_val) {
                                            chapter_obj_num++;

                                            Order_major_section_big(this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter"));

                                            this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).attr("chapter_id", chapter_val.id);

                                            this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_subtitle_title").html(lang_order.chapter_1 + (chapter_obj_num + 1) + lang_order.chapter_2 + "&nbsp;&nbsp;" + chapter_val.title);

                                            var section_obj_num = -1;
                                            if (chapter_val.sections) {
                                                $.each(chapter_val.sections, function(section_key, section_val) {
                                                    section_obj_num++;

                                                    Order_major_course_section_obj(this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_title_lists"));

                                                    this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_list").eq(section_obj_num).attr("section_id", section_val.id);

                                                    this_obj.children(".content_course").eq(major_obj_num).find(".content_course_section_list").eq(course_obj_num).find(".content_course_section_list_chapter_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list_list").eq(section_obj_num).find(".content_course_section_list_subtitle_title_title").html(lang_order.section_1 + (section_obj_num + 1) + lang_order.section_2 + "&nbsp;&nbsp;" + section_val.title);
                                                })
                                            }
                                        })
                                    }
                                    delete currency_data.courses[course];
                                })
                            }
                        })
                    }
                    if (currency_data.courses != null) {

                        var course_obj_num = -1;
                        var this_obj = $(".course_all");
                        $.each(currency_data.courses, function(course_key, course_val) {
                            course_obj_num++;

                            order_page_course_course_big(this_obj);

                            if (course_val.costs) {
                                if (course_val.costs[currency]) {
                                    this_obj.children(".content_course").eq(course_obj_num).find(".course_price_preferential").html(course_val.costs[currency].symbol + course_val.costs[currency].expense);
                                }
                            }

                            this_obj.children(".content_course").eq(course_obj_num).attr("currency", currency);
                            this_obj.children(".content_course").eq(course_obj_num).attr("course_id", course_val.id);
                            this_obj.children(".content_course").eq(course_obj_num).find(".course_title").html(course_val.name);
                            this_obj.children(".content_course").eq(course_obj_num).find(".course_img").attr("src", course_val.cover);

                            var chapter_obj_num = -1;
                            if (course_val.chapters) {
                                $.each(course_val.chapters, function(chapter_key, chapter_val) {
                                    chapter_obj_num++;

                                    Order_major_chapter_big(this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section"));

                                    if (chapter_val.costs) {
                                        if (chapter_val.costs[currency]) {
                                            this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_prompt_text").html(chapter_val.costs[currency].symbol + chapter_val.costs[currency].expense);
                                        }
                                    }

                                    this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).attr("chapter_id", chapter_val.id);
                                    this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_subtitle").html(lang_order.chapter_1 + (chapter_obj_num + 1) + lang_order.chapter_2 + "&nbsp;&nbsp;" + chapter_val.title);

                                    var section_obj_num = -1;
                                    if (chapter_val.sections) {
                                        $.each(chapter_val.sections, function(section_key, section_val) {
                                            section_obj_num++;

                                            Order_course_section_big(this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter"));

                                            if (section_val.costs) {
                                                if (section_val.costs[currency]) {
                                                    this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).find(".content_course_section_list_prompt_text").html(section_val.costs[currency].symbol + chapter_val.costs[currency].expense);
                                                }
                                            }

                                            this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).attr("section_id", section_val.id);
                                            this_obj.children(".content_course").eq(course_obj_num).find(".content_course_section_list").eq(chapter_obj_num).find(".content_course_section_list_chapter_list").eq(section_obj_num).find(".content_course_section_list_subtitle_title").html(lang_order.section_1 + (section_obj_num + 1) + lang_order.section_2 + "&nbsp;&nbsp;" + section_val.title);
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
        List_of_expansion_and_contraction_of_special_effects();
        order_chapter_sec_num();
    }, "json")

    $(document).on("click", ".order_course_price_submit_btn", function() {
        window.location.href = "/Order/pay.html?data=" + GetQueryString("data");
        $(".Transaction_loading").show();
        $(".Transaction_content").hide();
    })

    //订单表页价格
    Order_price();
}

//订单页章节数目
function order_chapter_sec_num() {

    //课程页面显示章节数
    var major_arr = $(".major_all").find(".content_course");
    var major_chapters_arr = $(".major_all").find(".content_course_section_list");
    var course_arr = $(".course_all").find(".content_course");
    var course_chapters_arr = $(".course_all").find(".content_course_section_list");

    for (var e = 0; e < major_arr.length; e++) {
        for (var a = 0; a < major_chapters_arr.length; a++) {
            $(major_arr[e]).find(".course_number").find(".course_number_num").eq(0).html("&nbsp;" + (a + 1) + "&nbsp");
        }
    }
    for (var e = 0; e < course_arr.length; e++) {
        for (var a = 0; a < course_chapters_arr.length; a++) {
            $(course_arr[e]).find(".course_number").find(".course_number_num").eq(0).html("&nbsp;" + (a + 1) + "&nbsp");
        }
    }
}

//取地址栏参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//列表展开收缩特效
function List_of_expansion_and_contraction_of_special_effects() {

    $(".content_course_section_list_icon_arrow").css("background-position", "0% 0%");
    $(".course_contraction_section_icon").css("background-position", "84% 12%");
    $(".content_course_section_list_chapter_list").css("height", "60px");
    $(".content_course_section_list").css("height", "60px");
    $(".content_course_chapter").css("height", "120px");

    $(document).on("click", ".course_contraction_section", function() {
        var parent_obj_first = $(this).parents(".content_course_chapter");
        var children_obj_first = $(this).find(".course_contraction_section_icon");
        if (parent_obj_first.length > 0) {
            if (children_obj_first.css("background-position") == "84% 12%") {
                children_obj_first.css("background-position", "84% 82%");
                var curHeight_first = parent_obj_first.height(),
                    autoHeight_first = parent_obj_first.css('height', 'auto').height();
                parent_obj_first.height(curHeight_first).animate({ height: autoHeight_first }, 200);
            } else {
                children_obj_first.css("background-position", "84% 12%");
                parent_obj_first.animate({ height: "120px" }, 200);
            }
        }
    })

    //专业收起列表
    $(document).on("click", ".list_Pack_up_button", function() {
        var parent_obj_first = $(this).parents(".content_course_chapter");
        var children_obj_first = $(this).parents(".list_Pack_up").siblings(".content_course_chapter_head").find(".course_contraction_section_icon");
        if (parent_obj_first.length > 0) {
            if (children_obj_first.css("background-position") == "84% 12%") {
                children_obj_first.css("background-position", "84% 82%");
                var curHeight_first = parent_obj_first.height(),
                    autoHeight_first = parent_obj_first.css('height', 'auto').height();
                parent_obj_first.height(curHeight_first).animate({ height: autoHeight_first }, 200);
            } else {
                children_obj_first.css("background-position", "84% 12%");
                parent_obj_first.animate({ height: "120px" }, 200);
            }
        }
    })

    //专业确定按钮
    $(document).on("click", ".list_Pack_up_button_sure", function() {
        var parent_obj_first = $(this).parents(".content_course_chapter");
        var children_obj_first = $(this).parents(".list_Pack_up").siblings(".content_course_chapter_head").find(".course_contraction_section_icon");
        if (parent_obj_first.length > 0) {
            if (children_obj_first.css("background-position") == "84% 12%") {
                children_obj_first.css("background-position", "84% 82%");
                var curHeight_first = parent_obj_first.height(),
                    autoHeight_first = parent_obj_first.css('height', 'auto').height();
                parent_obj_first.height(curHeight_first).animate({ height: autoHeight_first }, 200);
            } else {
                children_obj_first.css("background-position", "84% 12%");
                parent_obj_first.animate({ height: "120px" }, 200);
            }
        }
    })

    //箭头
    $(document).on("click", ".content_course_section_list_icon_arrow", function() {
        var parent_obj_first = $(this).parents(".content_course_chapter");
        var parent_obj_second = $(this).parents(".content_course_section_list");
        var parent_obj_thrid = $(this).parents(".content_course_section_list_chapter_list");
        var this_obj = $(this);
        if (parent_obj_thrid.length == 0 && parent_obj_second.find(".content_course_section_list_chapter").length > 0) {
            if (this_obj.css("background-position") == "0% 0%") {
                this_obj.css("background-position", "0% 100%");
                var curHeight_second = parent_obj_second.height(),
                    autoHeight_second = parent_obj_second.css('height', 'auto').height();
                parent_obj_second.height(curHeight_second).animate({ height: autoHeight_second }, 200);
                parent_obj_first.css("height", "auto");
            } else {
                this_obj.css("background-position", "0% 0%");
                parent_obj_second.animate({ height: "60px" }, 200);
                parent_obj_first.css("height", "auto");
            }
        } else if (parent_obj_thrid.find(".content_course_section_list_chapter_list_title_lists").length > 0 && parent_obj_second.find(".content_course_section_list_chapter").length > 0) {
            if (this_obj.css("background-position") == "0% 0%") {
                this_obj.css("background-position", "0% 100%");
                var curHeight_third = parent_obj_thrid.height(),
                    autoHeight_third = parent_obj_thrid.css('height', 'auto').height();
                parent_obj_thrid.height(curHeight_third).animate({ height: autoHeight_third }, 200);
                parent_obj_second.css("height", "auto");
                parent_obj_first.css("height", "auto");
            } else {
                this_obj.css("background-position", "0% 0%");
                parent_obj_thrid.animate({ height: "60px" }, 200);
                parent_obj_first.css("height", "auto");
                parent_obj_second.css("height", "auto");
            }
        }
    })

    $(".price_use_coupons_price_balance_scope_icon").css("background-image", "none");

    $(document).on("click", ".price_use_coupons_price_balance_scope_icon", function() {
        var this_obj = $(this);
        if (this_obj.css("background-image") == "none") {
            this_obj.css("background-image", "url('../images/Courses/check_icon.png')");
            this_obj.find("input").attr("checked", "checked");
        } else {
            this_obj.css("background-image", "none");
            this_obj.find("input").attr("checked", false);
        }
    })
}

//选课表删除
function course_delete() {

    //选课表页单章删除
    $(document).on("click", ".course_contraction_section_delete", function() {
        var this_obj = $(this);

        var major_id, course_id;
        var currency = this_obj.parents(".content_list_gai").attr("currency");

        var data = {};
        data[currency] = {};

        if (this_obj.parents(".content_list_gai").attr("major_id")) {
            major_id = this_obj.parents(".content_list_gai").attr("major_id");
            data[currency].majors = [major_id];
            this_obj.parents(".content_list_gai[major_id=" + major_id + "]").remove();
        }
        if (this_obj.parents(".content_list_gai").attr("course_id")) {
            course_id = this_obj.parents(".content_list_gai").attr("course_id");
            data[currency].courses = [course_id];
            this_obj.parents(".content_list_gai[course_id=" + course_id + "]").remove();
        }

        $.ajax({
            type: "post",
            url: "/api/plan/courses/cut",
            data: {
                data: data
            },
            success: function(data) {

            }
        }, "json")

    })

    //选课表删除选中
    $(document).on("click", ".Course_information_info_delete_all", function() {
        var this_obj = $(this);

        var major_id, course_id;
        var data = {};

        var input_arr = $("input[checked='checked']").parents(".content_list_gai");

        for (var i = 0; i < input_arr.length; i++) {

            var currency = input_arr[i].getAttribute("currency");
            data[currency] = {};
            data[currency].majors = [];
            data[currency].courses = [];

        }

        for (var i = 0; i < input_arr.length; i++) {

            if (input_arr[i].getAttribute("major_id") != undefined) {
                major_id = input_arr[i].getAttribute("major_id");
                data[currency].majors.push(major_id);
            }
            if (input_arr[i].getAttribute("course_id") != undefined) {
                course_id = input_arr[i].getAttribute("course_id");
                data[currency].courses.push(course_id);
            }
        }

        $.ajax({
            type: "post",
            url: "/api/plan/courses/cut",
            data: {
                data: data
            },
            success: function(data) {
                $(".major_all").html("");
                $(".course_all").html("");

                $(".Transaction_loading").show();
                $(".Transaction_content").hide();

                Course_selection_table_page_generation();
            }
        })

    })
}

//订单页面价格显示
function Order_price() {
    $(".price_use_coupons_settlement_meun_lists").children("ul:last").css("border-right", "none");
    var Order_price_menu_list_obj = $(".price_use_coupons_settlement_meun_lists");

    var order_all_price = 0,
        order_all_major_price = 0,
        order_all_course_price = 0;

    if (Order_price_menu_list_obj.length > 0) {
        for (var k = 0; k < Order_price_menu_list_obj.length; k++) {
            var all_course_checked_input = $(".course_all").find(".content_course_section_list_chapter_list").find(".content_course_section_list_prompt_text");
            var all_major_checked_input = $(".major_all").find(".content_course_section_list_prompt").find(".content_course_section_list_prompt_text");

            for (var i = 0; i < all_course_checked_input.length; i++) {
                order_all_course_price += parseInt(parseFloat($(all_course_checked_input[i]).text().substring(1)).toFixed(2) * 100);
            }
            for (var i = 0; i < all_major_checked_input.length; i++) {
                if ($(all_major_checked_input[i]).text()) {
                    order_all_major_price += parseInt(parseFloat($(all_major_checked_input[i]).text().substring(1)).toFixed(2) * 100);
                }
            }
            order_all_price = order_all_course_price + order_all_major_price;

            var str_num = $(all_major_checked_input[k]).text();
            str_num = str_num.substr(0, 1);

            if (str_num == "¥") {
                $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("¥" + all_price / 100);
                $(".the_total_amount_of_price").eq(k).html("¥" + all_price / 100);
            }
            if (str_num == "$") {
                $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("$" + all_price / 100);
                $(".the_total_amount_of_price").eq(k).html("$" + all_price / 100);
            }
            if (str_num == "£") {
                $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("£" + all_price / 100);
                $(".the_total_amount_of_price").eq(k).html("£" + all_price / 100);
            }
        }
    }
}

//选课表页价格显示
// function Courses_price( lists) {

// if( lists.data) {
//     $.each( lists.data, function( lists_key, lists_name) {
//         if( lists_name) {
//             $.each( lists_name, function( first_key, first_name) {
//                 console.log( first_name);
//             })
//         }
//     })
// }

// $(".price_use_coupons_settlement_meun_text_lists").children("ul:last").css("border-right", "none");
// var price_menu_list_obj = $(".price_use_coupons_settlement_meun_list");

// var all_price = 0,
//     all_major_price = 0,
//     all_course_price = 0;

// if( price_menu_list_obj.length > 0) {
//     for( var k = 0; k < price_menu_list_obj.length; k++) {
//         var all_course_checked_input = $(".course_all").find("input[checked='checked']").parents(".content_course_section_list_chapter_list");
//         var all_major_checked_input = $(".major_all").find("input[checked='checked']").parents(".content_course_section_list");

//         for( var i = 0; i < all_course_checked_input.length; i++) {
//             if( $(all_course_checked_input[i]).find(".content_course_section_list_prompt_text").text()) {
//                 all_course_price += parseInt(parseFloat($(all_course_checked_input[i]).find(".content_course_section_list_prompt_text").text().substring(1)) * 100);
//             }
//         }
//         for( var i = 0; i < all_major_checked_input.length; i++) {
//             if( $(all_major_checked_input[i]).find(".content_course_section_list_prompt_text").text()) {
//                 all_major_price += parseInt(parseFloat($(all_major_checked_input[i]).find(".content_course_section_list_prompt_text").text().substring(1)) * 100);
//             }
//         }
//         all_price = all_course_price + all_major_price;

//         var str_num = $(all_major_checked_input[k]).find(".content_course_section_list_prompt_text").text();
//         str_num = str_num.substr(0, 1);

//         if( str_num == "¥") {
//             $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("¥" + all_price / 100);
//         }
//         if( str_num == "$") {
//             $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("$" + all_price / 100);
//         }
//         if( str_num == "£") {
//             $(".price_use_coupons_settlement_meun_list").eq(k).children(".price_use_coupons_settlement_meun_list_big").html("£" + all_price / 100);
//         }
//     }
// }
// }

//选课表页的选择逻辑
function course_select_logic() {

    //课程节的选择
    $(document).on("click", ".chooes_icon_section", function() {
        var self_obj = $(this);

        if (self_obj.css("background-image") == "none") {
            self_obj.css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.find("input").attr("checked", "checked");
        } else {
            self_obj.css("background-image", "none");
            self_obj.find("input").attr("checked", false);
        }

        var section_arr = self_obj.parents(".content_course_section_list").find(".content_course_section_list_chapter_list").find("input");
        var section_number = 0;
        for (var ii = 0; ii < section_arr.length; ii++) {
            if ($(section_arr[ii]).attr("checked") == "checked") {
                section_number++;
            }
        }
        if (section_number >= section_arr.length) {
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").find("input").attr("checked", "checked");
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").find(".chooes_icon_sqare").hide();
        } else {
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").css("background-image", "none");
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").find("input").attr("checked", false);
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").find(".chooes_icon_sqare").show();
        }

        if (section_number == 0) {
            self_obj.parents(".content_course_section_list").find(".chooes_icon_chapter").find(".chooes_icon_sqare").hide();
        }

        //课程价格
        Courses_price();
        //课程数目
        chapter_sec_num();

    })

    //课程章的选择
    $(document).on("click", ".chooes_icon_chapter", function() {
        var self_obj = $(this);
        self_obj.find(".chooes_icon_sqare").hide();

        if (self_obj.css("background-image") == "none") {
            self_obj.css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.find("input").attr("checked", "checked");

            self_obj.parents(".content_course_section_list").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_course_section_list").find(".chooes_icon_section").find("input").attr("checked", "checked");
        } else {
            self_obj.css("background-image", "none");
            self_obj.find("input").attr("checked", false);

            self_obj.parents(".content_course_section_list").find(".chooes_icon_section").css("background-image", "none");
            self_obj.parents(".content_course_section_list").find(".chooes_icon_section").find("input").attr("checked", false);
        }

        var chapter_arr = self_obj.parents(".content_list_gai").find(".content_course_section_list").find("input");
        var section_number = 0;
        for (var ii = 0; ii < chapter_arr.length; ii++) {
            if ($(chapter_arr[ii]).attr("checked") == "checked") {
                section_number++;
            }
        }
        if (section_number >= chapter_arr.length) {
            self_obj.parents(".content_list_gai").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon").find("input").attr("checked", "checked");
            self_obj.parents(".content_list_gai").find(".chooes_icon").find(".chooes_icon_sqare").hide();
        } else {
            self_obj.parents(".content_list_gai").find(".chooes_icon").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon").find("input").attr("checked", false);
            self_obj.parents(".content_list_gai").find(".chooes_icon").find(".chooes_icon_sqare").show();
        }

        if (section_number == 0) {
            self_obj.parents(".content_list_gai").find(".chooes_icon").find(".chooes_icon_sqare").hide();
        }

        //课程价格
        Courses_price();
        //课程数目
        chapter_sec_num();
    })

    //课程&专业选择
    $(document).on("click", ".chooes_icon", function() {

        var self_obj = $(this);
        self_obj.find(".chooes_icon_sqare").hide();

        if (self_obj.css("background-image") == "none") {
            self_obj.css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.find("input").attr("checked", "checked");

            self_obj.parents(".content_list_gai").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon_section").find("input").attr("checked", "checked");

            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").find("input").attr("checked", "checked");
        } else {
            self_obj.css("background-image", "none");
            self_obj.find("input").attr("checked", false);

            self_obj.parents(".content_list_gai").find(".chooes_icon_section").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon_section").find("input").attr("checked", false);

            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").find("input").attr("checked", false);
        }

        //课程价格
        Courses_price();
        //课程数目
        chapter_sec_num();
    })

    //课程里全选
    $(document).on("click", ".chooes_icon_chapter_all", function() {

        var self_obj = $(this);
        $(".chooes_icon_sqare").hide();

        if (self_obj.css("background-image") == "none") {
            self_obj.css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.find("input").attr("checked", "checked");

            self_obj.parents(".content_list_gai").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon_section").find("input").attr("checked", "checked");

            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").find("input").attr("checked", "checked");

            self_obj.parents(".content_list_gai").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".content_list_gai").find(".chooes_icon").find("input").attr("checked", "checked");
        } else {
            self_obj.css("background-image", "none");
            self_obj.find("input").attr("checked", false);

            self_obj.parents(".content_list_gai").find(".chooes_icon_section").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon_section").find("input").attr("checked", false);

            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon_chapter").find("input").attr("checked", false);

            self_obj.parents(".content_list_gai").find(".chooes_icon").css("background-image", "none");
            self_obj.parents(".content_list_gai").find(".chooes_icon").find("input").attr("checked", false);
        }

        //课程价格
        Courses_price();
        //课程数目
        chapter_sec_num();
    })

    //选课表页面全选
    $(document).on("click", "#select_all", function() {

        var self_obj = $(this);
        self_obj.parents(".content_list_gai").find(".content_course_chapter_head").find(".chooes_icon_sqare").hide();

        if (self_obj.css("background-image") == "none") {
            self_obj.css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.find("input").attr("checked", "checked");

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_section").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_section").find("input").attr("checked", "checked");

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_chapter").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_chapter").find("input").attr("checked", "checked");

            self_obj.parents(".Course_information").siblings(".major_all").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".Course_information").siblings(".major_all").find(".chooes_icon").find("input").attr("checked", "checked");

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon").css("background-image", "url('/static/images/Courses/check_icon.png')");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon").find("input").attr("checked", "checked");
        } else {
            self_obj.css("background-image", "none");
            self_obj.find("input").attr("checked", false);

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_section").css("background-image", "none");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_section").find("input").attr("checked", false);

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_chapter").css("background-image", "none");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon_chapter").find("input").attr("checked", false);

            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon").css("background-image", "none");
            self_obj.parents(".Course_information").siblings(".course_all").find(".chooes_icon").find("input").attr("checked", false);

            self_obj.parents(".Course_information").siblings(".major_all").find(".chooes_icon").css("background-image", "none");
            self_obj.parents(".Course_information").siblings(".major_all").find(".chooes_icon").find("input").attr("checked", false);
        }

        //课程价格
        Courses_price();
        //课程数目
        chapter_sec_num();
    })
}

//订单页面价格
function order_price(this_obj) {
    var price_use_coupons_settlement_meun_list = {
        tag: "ul",
        class: "price_use_coupons_settlement_meun_list pull-left",
        price_use_coupons_settlement_meun_list_big: {
            tag: "li",
            class: "price_use_coupons_settlement_meun_list_big"
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, price_use_coupons_settlement_meun_list);
}

//订单页面应付金额
function Order_price_dsaf(this_obj) {
    var the_total_amount_of_price = {
        tag: "span",
        class: "the_total_amount_of_price pull-left"
    }
    Ordinary_class_Create_object_Initialize(this_obj, the_total_amount_of_price);
}

//优惠券特效
function Using_coupons_effect() {

    var meun_list = $(".price_use_coupons_content_menu_list");
    meun_list[0].style.borderTop = "3px solid #fe6701";
    meun_list[0].style.color = "#fe6701";
    meun_list[0].style.backgroundColor = "white";
    $(".price_use_coupons_vouchers").show();
    $(".price_use_coupons_vouchers_scope_sure").hide();
    $(".price_use_coupons_vouchers_scope").css("background-color", "rgb(223, 223, 223)");

    $(document).on("click", ".price_use_coupons_vouchers_scope", function() {
        var this_obj = $(this);
        if (this_obj.css("background-color") == "rgb(251, 223, 162)") {
            this_obj.css("background-color", "rgb(223, 223, 223)");
            this_obj.find(".price_use_coupons_vouchers_scope_sure").hide();
        } else {
            this_obj.css("background-color", "rgb(251, 223, 162)");
            this_obj.find(".price_use_coupons_vouchers_scope_sure").show();
        }
    })
    $(document).on("click", ".price_use_coupons_content_menu_list", function() {
        var this_obj = $(this);
        if (this_obj.text() == "优惠券") {
            $(".price_use_coupons_vouchers").show().siblings().hide();
            this_obj.css({ "border-top": "3px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        } else if (this_obj.text() == "优惠码") {
            $(".price_use_coupons_code").show().siblings().hide();
            this_obj.css({ "border-top": "3px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        } else if (this_obj.text() == "余额") {
            $(".price_use_coupons_price_balance").show().siblings().hide();
            this_obj.css({ "border-top": "3px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        }
    })
    $(document).on("click", ".price_use_coupons_code_inputs_cross_delete", function() {
        var this_obj = $(this);
        this_obj.siblings(".price_use_coupons_code_inputs_sqare").find(".price_use_coupons_code_inputs_sqare_input").val("");
    })
    $(document).on("click", ".add_price_use_coupons_code_inputs", function() {
        var this_obj = $(this).parents().siblings(".price_use_coupons_codes_inputs");
        var price_use_coupons_code_inputs_obj = {
            tag: "section",
            class: "price_use_coupons_code_inputs",
            price_use_coupons_code_inputs_sqare_first: {
                tag: "div",
                class: "price_use_coupons_code_inputs_sqare pull-left",
                price_use_coupons_code_inputs_sqare_input: {
                    tag: "input",
                    class: "price_use_coupons_code_inputs_sqare_input",
                    type: "text"
                }
            },
            price_use_coupons_code_inputs_cross_first: {
                tag: "div",
                class: "price_use_coupons_code_inputs_cross pull-left"
            },
            price_use_coupons_code_inputs_sqare_second: {
                tag: "div",
                class: "price_use_coupons_code_inputs_sqare pull-left",
                price_use_coupons_code_inputs_sqare_input: {
                    tag: "input",
                    class: "price_use_coupons_code_inputs_sqare_input",
                    type: "text"
                }
            },
            price_use_coupons_code_inputs_cross_second: {
                tag: "div",
                class: "price_use_coupons_code_inputs_cross pull-left"
            },
            price_use_coupons_code_inputs_sqare_third: {
                tag: "div",
                class: "price_use_coupons_code_inputs_sqare pull-left",
                price_use_coupons_code_inputs_sqare_input: {
                    tag: "input",
                    class: "price_use_coupons_code_inputs_sqare_input",
                    type: "text"
                }
            },
            price_use_coupons_code_inputs_cross_third: {
                tag: "div",
                class: "price_use_coupons_code_inputs_cross pull-left"
            },
            price_use_coupons_code_inputs_sqare_fourth: {
                tag: "div",
                class: "price_use_coupons_code_inputs_sqare pull-left",
                price_use_coupons_code_inputs_sqare_input: {
                    tag: "input",
                    class: "price_use_coupons_code_inputs_sqare_input",
                    type: "text"
                }
            },
            price_use_coupons_code_inputs_cross_delete_first: {
                tag: "span",
                class: "price_use_coupons_code_inputs_cross_delete pull-left",
                value: "删除"
            },
            price_use_coupons_code_inputs_cross_delete_second: {
                tag: "span",
                class: "price_use_coupons_code_inputs_cross_delete_text pull-left",
                value: "*优惠码错误，请重新输入"
            }
        }
        var first_level_obj = $("<" + price_use_coupons_code_inputs_obj.tag + "></" + price_use_coupons_code_inputs_obj.tag + ">").appendTo(this_obj);
        add_price_use_coupons_code_inputs_first(first_level_obj, price_use_coupons_code_inputs_obj);
    })

    $(document).on("click", ".course_price_submit_button", function() {

    })
}

//优惠码处添加优惠码
function add_price_use_coupons_code_inputs_first(first_level_obj, price_use_coupons_code_inputs_obj_first) {
    for (var first_level in price_use_coupons_code_inputs_obj_first) {
        if (first_level != "tag" && typeof price_use_coupons_code_inputs_obj_first[first_level] != "object") {
            if (first_level == "value") {
                first_level_obj.html(price_use_coupons_code_inputs_obj_first[first_level]);
                continue;
            }
            first_level_obj.attr(first_level, price_use_coupons_code_inputs_obj_first[first_level]);
        }
        if (typeof price_use_coupons_code_inputs_obj_first[first_level] == "object") {
            var second_level_obj = $("<" + price_use_coupons_code_inputs_obj_first[first_level].tag + "></" + price_use_coupons_code_inputs_obj_first[first_level].tag + ">").appendTo(first_level_obj);
            arguments.callee(second_level_obj, price_use_coupons_code_inputs_obj_first[first_level]);
        }
    }
}

//支付页面订单对象
function order_object(this_obj) {
    var Order_object = {
        tag: "section",
        class: "content_pay_list",
        content_pay_list_scope: {
            tag: "section",
            class: "content_pay_list_scope",
            content_pay_list_scope_left: {
                tag: "section",
                class: "pull-left",
                should_pay_the_total_price: {
                    tag: "section",
                    class: "should_pay_the_total_price",
                    should_pay_the_total_price_prompt: {
                        tag: "span",
                        class: "should_pay_the_total_price_prompt",
                        value: "<script type='text/javascript'>$('.should_pay_the_total_price_prompt').html(lang.amount_payable + '：');</script>"
                    },
                    should_pay_the_total_price_pag: {
                        tag: "span",
                        class: "should_pay_the_total_price_pag",
                        value: "￥123333.00"
                    }
                },
                should_pay_the_total_price_order: {
                    tag: "section",
                    class: "should_pay_the_total_price_order",
                    should_pay_the_total_price_order_prompt: {
                        tag: "span",
                        class: "should_pay_the_total_price_order_prompt",
                        value: "<script type='text/javascript'>$('.should_pay_the_total_price_order').html(lang.order_code + '：');</script>"
                    },
                    should_pay_the_total_price_order_text: {
                        tag: "span",
                        class: "should_pay_the_total_price_order_text"
                    }
                }
            },
            content_pay_list_scope_right: {
                tag: "section",
                class: "pull-right",
                should_pay_the_total_price_order_start: {
                    tag: "section",
                    class: "should_pay_the_total_price_order_start",
                    value: "<script type='text/javascript'>$('.should_pay_the_total_price_order_start').html(lang.pay_now);</script>"
                },
                should_pay_the_total_price_order_later: {
                    tag: "section",
                    class: "should_pay_the_total_price_order_later",
                    value: "<script type='text/javascript'>$('.should_pay_the_total_price_order_later').html(lang.pay_later);</script>"
                }
            }
        }
    }
    Ordinary_class_Create_object_Initialize(this_obj, Order_object);
}


//支付页面效果
function The_effect_of_the_payment_page() {

    for (var i = 0; i < orders.length; i++) {
        order_object($(".Transaction_content"));

        $(".should_pay_the_total_price_pag").eq(i).html(orders[i].symbol + orders[i].amount);
        $(".should_pay_the_total_price_order_text").eq(i).html("&nbsp;&nbsp;&nbsp;&nbsp;" + orders[i].code + "&nbsp;&nbsp;&nbsp;&nbsp;" + orders[i].ctime);
        $(".should_pay_the_total_price_order_text").eq(i).attr("code", orders[i].code);
    }

    $(document).on("click", ".began_to_pay_a_certain_order_menu", function() {
        var this_obj = $(this);
        if (this_obj.text() == "支付平台") {
            $(".payment_platform").show().siblings().hide();
            this_obj.css({ "border-top": "1px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        } else if (this_obj.text() == "储蓄卡") {
            $(".cash_card").show().siblings().hide();
            this_obj.css({ "border-top": "1px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        } else if (this_obj.text() == "信用卡") {
            $(".credit_card").show().siblings().hide();
            this_obj.css({ "border-top": "1px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        } else if (this_obj.text() == "线下支付") {
            $(".offline_payment").show().siblings().hide();
            this_obj.css({ "border-top": "1px solid #fe6701", "color": "#fe6701", "background-color": "white" }).siblings().css({ "border-top": "none", "color": "#000000", "background-color": "#f6f6f6" });
        }
        $(".content_pay_list_scope_content").css("height", "auto");
    })

    $(document).on("click", ".will_make_a_payment_scope_round", function() {
        var this_obj = $(this);
        if (this_obj.find(".orange_round").css("background-color") == "rgb(212, 212, 212)") {
            this_obj.find(".orange_round").css("background-color", "rgb(254, 103, 1)");
            this_obj.siblings("input").attr("checked", "checked");
            this_obj.parents().siblings().find(".orange_round").css("background-color", "rgb(212, 212, 212)");
            this_obj.parents().siblings().find("input").attr("checked", false);
        } else {
            this_obj.find(".orange_round").css("background-color", "rgb(212, 212, 212)");
            this_obj.siblings("input").attr("checked", false);
        }
    })
    $(document).on("click", ".will_make_a_payment_sqare", function() {
        var this_obj = $(this);
        if (this_obj.siblings(".will_make_a_payment_scope_round").find(".orange_round").css("background-color") == "rgb(212, 212, 212)") {
            this_obj.siblings(".will_make_a_payment_scope_round").find(".orange_round").css("background-color", "rgb(254, 103, 1)");
            this_obj.parents().siblings().find(".orange_round").css("background-color", "rgb(212, 212, 212)");
            this_obj.siblings("input").attr("checked", "checked");
            this_obj.parents().siblings().find("input").attr("checked", false);
        } else {
            this_obj.siblings(".will_make_a_payment_scope_round").find(".orange_round").css("background-color", "rgb(212, 212, 212)");
            this_obj.siblings("input").attr("checked", false);
        }
    })
    $(document).on("click", ".submit_the_remittance_information", function() {
        var this_obj = $(this);
        var siblings_obj = $(this).siblings(".submit_the_remittance_information_form");
        var curHeight_obj = siblings_obj.height(),
            autoHeight_obj = siblings_obj.css('height', 'auto').height();
        siblings_obj.height(curHeight_obj).animate({ height: autoHeight_obj }, 200);
    })

    $(".content_pay_list_scope_content").css("height", "0");

    $(document).on("click", ".should_pay_the_total_price_order_start", function() {
        var content_pay_list_scope_content = {
            tag: "section",
            class: "content_pay_list_scope_content",
            began_to_pay_a_certain_order: {
                tag: "ul",
                class: "began_to_pay_a_certain_order",
                began_to_pay_a_certain_order_menu_first: {
                    tag: "li",
                    class: "began_to_pay_a_certain_order_menu pull-left",
                    value: "支付平台"
                },
                began_to_pay_a_certain_order_menu_second: {
                    tag: "li",
                    class: "began_to_pay_a_certain_order_menu pull-left",
                    value: "储蓄卡"
                },
                began_to_pay_a_certain_order_menu_third: {
                    tag: "li",
                    class: "began_to_pay_a_certain_order_menu pull-left",
                    value: "信用卡"
                },
                began_to_pay_a_certain_order_menu_fourth: {
                    tag: "li",
                    class: "began_to_pay_a_certain_order_menu pull-left",
                    value: "线下支付"
                }
            },
            will_make_a_payment: {
                tag: "section",
                class: "will_make_a_payment",
                payment_platform: {
                    tag: "section",
                    class: "payment_platform",
                    style: "display: block;",
                    will_make_a_payment_scope_first: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                method: "3",
                                src: "/static/images/Courses/支付宝.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "payment_platform",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_second: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        style: "display: none;",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                method: "4",
                                src: "/static/images/Courses/微信.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "payment_platform",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_third: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                method: "2",
                                src: "/static/images/Courses/京东支付.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "payment_platform",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fourth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                method: "5",
                                src: "/static/images/Courses/paypal.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "payment_platform",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fifth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        style: "display: none;",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/微信扫码.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "payment_platform",
                            style: "display: none;"
                        }
                    }
                },
                cash_card: {
                    tag: "section",
                    class: "cash_card",
                    style: "display: none;",
                    type: "1",
                    method: "1",
                    will_make_a_payment_scope_first: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/工商.jpg",
                                back: "icbc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_second: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/民生.jpg",
                                back: "cmbc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_third: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/招商.jpg",
                                back: "cmb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fourth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/建设.jpg",
                                back: "ccb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fifth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/华夏.jpg",
                                back: "hxb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_sixth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/邮政.jpg",
                                back: "post"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_seventh: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/中国.jpg",
                                back: "boc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_eighth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/兴业.jpg",
                                back: "cib"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_ninth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/北京.jpg",
                                back: "bob"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_tenth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/交通.jpg",
                                back: "bocm"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_eleventh: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/农业.jpg",
                                back: "abc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_twelfth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/光大.jpg",
                                back: "ceb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_thirteenth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/深圳发展.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_14th: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/天津.jpg"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_15: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/浦发.jpg",
                                back: "spdb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "cash_card",
                            style: "display: none;"
                        }
                    }
                },
                credit_card: {
                    tag: "section",
                    class: "credit_card",
                    style: "display: none;",
                    type: "2",
                    method: "1",
                    will_make_a_payment_scope_first: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/工商.jpg",
                                back: "icbc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_second: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/民生.jpg",
                                back: "cmbc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_third: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/招商.jpg",
                                back: "cmb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fourth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/建设.jpg",
                                back: "ccb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_fifth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/华夏.jpg",
                                back: "hxb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_sixth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/中国.jpg",
                                back: "boc"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_seventh: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/兴业.jpg",
                                back: "cib"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_eighth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/交通.jpg",
                                back: "bcom"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_ninth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/浦发.jpg",
                                back: "spdb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    },
                    will_make_a_payment_scope_tenth: {
                        tag: "section",
                        class: "will_make_a_payment_scope pull-left",
                        will_make_a_payment_scope_round: {
                            tag: "section",
                            class: "will_make_a_payment_scope_round pull-left",
                            orange_round: {
                                tag: "section",
                                class: "orange_round"
                            }
                        },
                        will_make_a_payment_sqare: {
                            tag: "section",
                            class: "will_make_a_payment_sqare pull-right",
                            will_make_a_payment_sqare_img: {
                                tag: "img",
                                class: "will_make_a_payment_sqare_img",
                                src: "/static/images/Courses/光大.jpg",
                                back: "ceb"
                            }
                        },
                        payment_platform_input: {
                            tag: "input",
                            type: "radio",
                            name: "credit_card",
                            style: "display: none;"
                        }
                    }
                },
                offline_payment: {
                    tag: "section",
                    class: "offline_payment",
                    style: "display: none;",
                    offline_payment_scope: {
                        tag: "ul",
                        class: "offline_payment_scope",
                        offline_payment_scope_list_first: {
                            tag: "li",
                            class: "offline_payment_scope_list",
                            value: "1、如还未完成线下汇款： <a href='#'>查看如何线下汇款</a>。"
                        },
                        offline_payment_scope_list_second: {
                            tag: "li",
                            class: "offline_payment_scope_list",
                            value: "2、完成银行汇款后，请您尽快进行汇款底单信息提交；底单提交后，您的资金将录入到账号。"
                        },
                        offline_payment_scope_list_third: {
                            tag: "li",
                            class: "offline_payment_scope_list",
                            value: "3、如您已将款项汇出，在款项汇出两日（工作日）后，您的ID下仍没有到款记录，请  <a href='#'>查找</a>  并认领您的汇款单。"
                        }
                    },
                    submit_the_remittance_information_form: {
                        tag: "section",
                        class: "submit_the_remittance_information_form",
                        order_number: {
                            tag: "section",
                            class: "order_number order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_number",
                                value: "汇款单号："
                            },
                            submit_the_remittance_information_form_input: {
                                tag: "input",
                                class: "submit_the_remittance_information_form_input",
                                type: "text",
                                id: "order_number"
                            }
                        },
                        order_name: {
                            tag: "section",
                            class: "order_name order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_name",
                                value: "汇款人姓名："
                            },
                            submit_the_remittance_information_form_input: {
                                tag: "input",
                                class: "submit_the_remittance_information_form_input",
                                type: "text",
                                id: "order_name"
                            },
                            submit_the_remittance_information_form_input_prompt: {
                                tag: "p",
                                class: "submit_the_remittance_information_form_input_prompt",
                                value: "汇款底单上的汇款人"
                            }
                        },
                        order_price: {
                            tag: "section",
                            class: "order_price order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_price",
                                value: "汇款金额："
                            },
                            submit_the_remittance_information_form_input: {
                                tag: "input",
                                class: "submit_the_remittance_information_form_input",
                                type: "text",
                                id: "order_price"
                            }
                        },
                        order_time: {
                            tag: "section",
                            class: "order_time order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_time",
                                value: "汇款时间："
                            },
                            submit_the_remittance_information_form_input: {
                                tag: "input",
                                class: "submit_the_remittance_information_form_input",
                                type: "text",
                                id: "order_time"
                            }
                        },
                        order_phone: {
                            tag: "section",
                            class: "order_phone order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_phone",
                                value: "联系人手机："
                            },
                            submit_the_remittance_information_form_input: {
                                tag: "input",
                                class: "submit_the_remittance_information_form_input",
                                type: "text",
                                id: "order_phone"
                            }
                        },
                        order_prompt: {
                            tag: "section",
                            class: "order_prompt order_fghj",
                            submit_the_remittance_information_form_label: {
                                tag: "label",
                                class: "submit_the_remittance_information_form_label",
                                for: "order_prompt",
                                value: "备注："
                            },
                            submit_the_remittance_information_form_area: {
                                tag: "textarea",
                                class: "submit_the_remittance_information_form_area",
                                type: "text",
                                id: "order_prompt"
                            }
                        }
                    },
                    submit_the_remittance_information: {
                        tag: "section",
                        class: "submit_the_remittance_information",
                        value: "提交汇款信息"
                    },
                    submit_the_remittance_information_prompt: {
                        tag: "section",
                        class: "submit_the_remittance_information_prompt",
                        submit_the_remittance_information_prompt_lists_left: {
                            tag: "ul",
                            class: "submit_the_remittance_information_prompt_lists pull-left",
                            submit_the_remittance_information_prompt_list_1: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/工商.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            },
                            submit_the_remittance_information_prompt_list_2: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/建设.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            },
                            submit_the_remittance_information_prompt_list_3: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/招商.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            }
                        },
                        submit_the_remittance_information_prompt_lists_right: {
                            tag: "ul",
                            class: "submit_the_remittance_information_prompt_lists pull-left",
                            submit_the_remittance_information_prompt_list_1: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/支付宝.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            },
                            submit_the_remittance_information_prompt_list_2: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/中国.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            },
                            submit_the_remittance_information_prompt_list_3: {
                                tag: "li",
                                class: "submit_the_remittance_information_prompt_list",
                                submit_the_remittance_information_prompt_list_img: {
                                    tag: "img",
                                    src: "/static/images/Courses/农业.jpg"
                                },
                                submit_the_remittance_information_prompt_list_text_1: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>6212  2602  0003  6482  156</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_2: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "开&nbsp;&nbsp;户&nbsp;&nbsp;行：<span>中国工商银行海淀支行</span>"
                                },
                                submit_the_remittance_information_prompt_list_text_3: {
                                    tag: "p",
                                    class: "submit_the_remittance_information_prompt_list_text",
                                    value: "公司名称：<span>学分在线（北京）国际数据有限公司</span>"
                                }
                            }
                        }
                    }
                }
            },
            began_to_pay_a_certain_order_sure: {
                tag: "section",
                class: "began_to_pay_a_certain_order_sure",
                began_to_pay_a_certain_order_sure_button: {
                    tag: "section",
                    class: "began_to_pay_a_certain_order_sure_button pull-left",
                    value: "确定"
                },
                began_to_pay_a_certain_order_sure_button_cancel: {
                    tag: "section",
                    class: "began_to_pay_a_certain_order_sure_button_cancel pull-left",
                    value: "取消"
                }
            }
        }

        var this_parent_obj = $(".content_pay_list");
        var this_obj = $(this);
        var pay_list_obj = $(this).parent().parent().siblings(".content_pay_list_scope_content");

        this_obj.parent().hide();

        if (pay_list_obj.length > 0) {
            var curHeight_obj = pay_list_obj.height(),
                autoHeight_obj = pay_list_obj.css('height', 'auto').height();
            pay_list_obj.height(curHeight_obj).animate({ height: autoHeight_obj }, 200);
        }

        Ordinary_class_Create_object_Initialize(this_parent_obj, content_pay_list_scope_content);

        $(".orange_round").css("background-color", "rgb(212, 212, 212)");

        var meun_list = $(".began_to_pay_a_certain_order_menu");

        if (meun_list.length > 0) {
            meun_list[0].style.borderTop = "1px solid #fe6701";
            meun_list[0].style.color = "#fe6701";
            meun_list[0].style.backgroundColor = "white";
        }
    })
    $(document).on("click", ".began_to_pay_a_certain_order_sure_button_cancel", function() {
        var parent_obj = $(this).parent().parent();
        var this_obj = $(this);
        parent_obj.animate({ height: "0px" });
        parent_obj.siblings(".content_pay_list_scope").children("section:last").show(200);

        setTimeout(function() {
            this_obj.parents(".content_pay_list_scope_content").remove();
        }, 500)

    })
    $(document).on("click", ".began_to_pay_a_certain_order_sure_button", function() {

        $("#Pay_Modal").modal('show');
        $(".pay_socpe").hide();
        $(".Modal_loading").show();

        var selected_obj = $(".will_make_a_payment_scope").find("input[checked='checked']");

        if (selected_obj.length > 0) {
            var method = 0,
                id = $(this).parents(".content_pay_list_scope_content").siblings(".content_pay_list_scope").find(".should_pay_the_total_price_order_text").attr("code"),
                type = 0,
                bank = 0;

            if ($(selected_obj).siblings(".will_make_a_payment_sqare").find("img").attr("method")) {
                method = $(selected_obj).siblings(".will_make_a_payment_sqare").find("img").attr("method");
            }

            var will_obj = $(selected_obj).siblings(".will_make_a_payment_sqare").find("img");

            if (will_obj.attr("back")) {

                bank = $(selected_obj).siblings(".will_make_a_payment_sqare").find("img").attr("back");

                if (will_obj.parent().parent().parent(".cash_card").length > 0) {
                    type = will_obj.parent().parent().parent(".cash_card").attr("type");
                    method = will_obj.parent().parent().parent(".cash_card").attr("method");
                }
                if (will_obj.parent().parent().parent(".credit_card").length > 0) {
                    type = will_obj.parent().parent().parent(".credit_card").attr("type");
                    method = will_obj.parent().parent().parent(".credit_card").attr("method");
                }

            }

            var order_number = $(this).parents(".content_pay_list_scope_content").siblings(".content_pay_list_scope").find(".should_pay_the_total_price_order_text").attr("code");

            if (type == 0) {
                // window.location.href = "/payment/paying.html?id=" + id + "&method=" + method;
                window.open("/payment/paying.html?id=" + id + "&method=" + method);
            } else {
                // window.location.href = "/payment/paying.html?id=" + id + "&method=" + method + "&type=" + type + "&bank=" + bank;
                window.open("/payment/paying.html?id=" + id + "&method=" + method + "&type=" + type + "&bank=" + bank);
            }

            $(".pay_success_button").find(".pay_btn_2").click(function() {
                $("#Pay_Modal").modal('hide');
            });
            $(".pay_error_button").find(".pay_btn_1").click(function() {
                $("#Pay_Modal").modal('hide');
            });

            window.onfocus = function() {
                $.ajax({
                    url: "/api/order/info",
                    type: "post",
                    data: {
                        data: order_number
                    },
                    success: function(data) {
                        $(".pay_socpe").show();
                        $(".Modal_loading").hide();
                        if (data.status == 1) {
                            $(".pay_socpe").css("background", "url('/static/images/pay_modal.jpg') no-repeat center center");
                            $(".pay_socpe_title").html("恭喜您，选课成功！");
                            $(".pay_success_button").show();
                            $(".pay_error_button").hide();
                            $(".pay_order").show();
                            $(".pay_failure_prompted").hide();
                            $(".pay_success_button").find(".pay_btn_1").attr("href", "/Order/Details.html?code=" + data.code);

                        } else {
                            $(".pay_socpe").css("background", "url('/static/images/pay_modal_loser.jpg') no-repeat center center");
                            $(".pay_socpe_title").html("恭喜您，选课失败！");
                            $(".pay_success_button").hide();
                            $(".pay_error_button").show();
                            $(".pay_order").hide();
                            $(".pay_failure_prompted").show();
                        }
                    }
                }, "json")
            }
        } else {
            alert("请选择银行");
        }
    })
}
