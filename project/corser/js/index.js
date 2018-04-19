function index() {
    // 百度编辑器初始化******************************************
    var ue = UE.getEditor('container', {
        toolbars: [
            ['source', 'undo', 'redo', 'bold', 'italic', 'underline', 'fontborder', 'subscript', 'autotypeset', 'blockquote', 'pasteplain', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
                'selectall', 'cleardoc', 'fontfamily', 'fontsize', 'directionalityltr', 'directionalityrtl', 'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', 'print', 'preview', 'searchreplace', 'drafts', 'help'
            ]
        ],
    });
    var us = UE.getEditor('con', {
        toolbars: [
            ['source', 'undo', 'redo', 'bold', 'italic', 'underline', 'fontborder', 'subscript', 'autotypeset', 'blockquote', 'pasteplain', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
                'selectall', 'cleardoc', 'fontfamily', 'fontsize', 'directionalityltr', 'directionalityrtl', 'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', 'print', 'preview', 'searchreplace', 'drafts', 'help'
            ]
        ],
    });
    // 发布页面************************************************************************
    var onOff = true;
    $('.category li').on('click', function() {
        var html = $(this).html();
        $(this).addClass('choice').siblings('li').removeClass('choice');
        $('#choice_one').html(html);
        $('.linkage li').remove();
        $.ajax({
        url:'http://localhost:8080/corser/aa.json',
        type:'get',
        dataType:'json',
        success:function(data){
            if($('.category li:eq(0)').hasClass('choice')){
                for(var k in data){
                    $('.sec_one').append("<li class="+ k +">"+data[k]+"<span>&gt;</span></li>");
                }
                $(document).on('click','.sec_one li',function(){
                       
                        $('.sec_two li').remove();
                        if($(this).hasClass('one')){
                            for(var e in data){
                                $('.sec_two').append("<li class="+ e +">"+data[e]+"<span>&gt;</span></li>");
                            }
                        }
                        $(document).on('click','.sec_two li',function(){
                            $('.sec_three li').remove();
                            if($(this).hasClass('one')){
                                for(var key in data) {
                                    $('.sec_three').append("<li class="+ key +">"+data[key]+"<span>&gt;</span></li>");
                                }
                            }
                        });
                    }); 
            }

            onOff = false;
        },
        error:function(){
            alert('请求失败');
        }
    });
    });
    $(document).on('click','.linkage ul li ',function(){
         $(this).addClass("li").siblings("li").removeClass("li");
    });
    $(document).on("click",".sec_one li",function(){

        $('#choice_two').html($(this).html());
    });
    $(document).on("click",".sec_two li",function(){

        $('#choice_three').html($(this).html());
    });
    /*if($('.category li:eq(0)').hasClass('choice')) {
            if(onOff == false) {
                return false;
            }
            $.ajax({
                url:"http://localhost:8080/corser/aa.json",
                type:"get",
                dataTtpe:'json',
                success:function(data){
                    $('.sec_one li').remove();
                    var obj = JSON.parse(data);
                    for(var k in obj) {
                        $('.sec_one').append("<li class="+ k +">"+obj[k]+"<span>&gt;</span></li>");
                    }
                    onOff = false;
                    $(document).on('click','.sec_one li',function(){
                        $('.sec_two li').remove();
                        if($(this).hasClass('one')){
                            for(var e in obj){
                                $('.sec_two').append("<li class="+ e +">"+obj[e]+"<span>&gt;</span></li>");
                            }
                        }
                        $(document).on('click','.sec_two li',function(){
                            $('.sec_three li').remove();
                            if($(this).hasClass('one')){
                                for(var key in obj) {
                                    $('.sec_three').append("<li class="+ key +">"+obj[key]+"<span>&gt;</span></li>");
                                }
                            }
                        });
                    }); 
                },
                error:function(){
                        alert('请求失败');
                }
            });
        } */
    /*else if ($('.category li:eq(1)').hasClass('choice')) {
    }*/
    // if(onOff== false){
    //     return false;
    // }
    

    // 课程模板添加项目**********************************************************
    $(document).on('click', '.Ordinary_class_menu_content_candidate>li>span', function() {
        var html = $(this).html();
        $(this).parents('.Ordinary_class_menu_content_candidate')
            .prev('.Ordinary_class_menu_content')
            .append(" <li class='Ordinary_class_menu_list'><span class='Ordinary_class_menu_list_text pull-left'>" + html + "</span><span class='Ordinary_class_menu_list_delete  pull-left'>-</span></li>");
        $(this).parent().remove();
        _show();
    });

    $(document).on('click', '.Ordinary_class_menu_list_delete', function() {
        var html = $(this).prev('span').html();
        $(this).parents('.Ordinary_class_menu_content')
            .siblings('.Ordinary_class_menu_content_candidate')
            .append('<li class="Ordinary_class_menu_content_candidate_option_left pull-left">+<span>' + html + '</span></li>');

        $(this).parent().remove();
        _show();
    });
    // 主模块切换************************************************************
    $('#creat_course_btn').bind('click', function() {

        // $.ajax({
        //     url:'',
        //     type:'post',
        //     data:{},
        //     beforeSend:function(){

        //     },
        //     success:function(){

        //     }
        // });
        var creat_name = $('[name = "creat_name"]').val();
        var creat_titl = $('[name = "creat_titl"]').val();
        // if(creat_name == "") {
        //     alert("课程不能为空名称为空");
        //     return false;
        // }
        // if(creat_name.length > 20) {
        //     alert("字符过长");
        //     return false;
        // }
        // if(creat_titl == "") {
        //     alert('课程副标题不能为空');
        //     return false;
        // }


        $('.creat_box').hide();
        $('.Ordinary_box').show(0, function() {
            Create_a_common_curriculum();
        });
        $('.icon_content').addClass('curli').siblings('li').removeClass('curli');
    });
    $('#creat_back').on('click', function() {
        $('.Ordinary_box').hide();
        $('.creat_box').show();
    });
    $('#creat_next').bind('click', function() {
        $('.Ordinary_class_lists_bottom_zeo').hide();
        $('.Ordinary_class_lists_bottom_two').show();
        if ($('.Ordinary_class_lists_bottom_two').css('display') === 'block') {
            $('.lists_top_two .one_curcle_in').addClass('cur').parent().parent('.lists_top_two').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_two').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_infor').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#content').on('click', function() {
        $('.Ordinary_class_lists_bottom_zeo').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_zeo').css('display') === 'block') {
            $('.lists_top_one .one_curcle_in').addClass('cur').parent().parent('.lists_top_one').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_one').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_content').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#information').on('click', function() {
        $('.Ordinary_class_lists_bottom_two').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_two').css('display') === 'block') {
            $('.lists_top_two .one_curcle_in').addClass('cur').parent().parent('.lists_top_two').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_two').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_infor').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#big').on('click', function() {
        $('.Ordinary_class_lists_bottom_three').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_three').css('display') === 'block') {
            $('.lists_top_three .one_curcle_in').addClass('cur').parent().parent('.lists_top_three').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_three').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_cover').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#set').on('click', function() {
        $('.Ordinary_class_lists_bottom_four').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_four').css('display') === 'block') {
            $('.lists_top_four .one_curcle_in').addClass('cur').parent().parent('.lists_top_four').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_four').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_set').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#lists_bottom_two_next').on('click', function() {
        $('.Ordinary_class_lists_bottom_two').hide();
        $('.Ordinary_class_lists_bottom_three').show();
        if ($('.Ordinary_class_lists_bottom_three').css('display') === 'block') {
            $('.lists_top_three .one_curcle_in').addClass('cur').parent().parent('.lists_top_three').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_three').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_cover').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#lists_bottom_three_next').on('click', function() {
        $('.Ordinary_class_lists_bottom_three').hide();
        $('.Ordinary_class_lists_bottom_four').show();

        if ($('.Ordinary_class_lists_bottom_four').css('display') === 'block') {
            $('.lists_top_four .one_curcle_in').addClass('cur').parent().parent('.lists_top_four').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_four').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_set').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#lists_bottom_two_back').bind('click', function() {
        $('.Ordinary_class_lists_bottom_two').hide();
        $('.Ordinary_class_lists_bottom_zeo').show();
        if ($('.Ordinary_class_lists_bottom_zeo').css('display') === 'block') {
            $('.lists_top_one .one_curcle_in').addClass('cur').parent().parent('.lists_top_one').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_one').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_content').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#lists_bottom_three_back').on('click', function() {
        $('.Ordinary_class_lists_bottom_three').hide();
        $('.Ordinary_class_lists_bottom_two').show();
        if ($('.Ordinary_class_lists_bottom_two').css('display') === 'block') {
            $('.lists_top_two .one_curcle_in').addClass('cur').parent().parent('.lists_top_two').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_two').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_infor').addClass('curli').siblings('li').removeClass('curli');
        }
    });
    $('#lists_bottom_four_back').on('click', function() {
        $('.Ordinary_class_lists_bottom_four').hide();
        $('.Ordinary_class_lists_bottom_three').show();
        if ($('.Ordinary_class_lists_bottom_three').css('display') === 'block') {
            $('.lists_top_three .one_curcle_in').addClass('cur').parent().parent('.lists_top_three').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_three').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
            $('.icon_cover').css('background', "#a1a1a1").siblings('li').css('background', 'transparent');
        }
    });
    $('.lists_top_one .one_curcle_in ').on('click', function() {
        $(this).addClass('cur').parent().parent('.lists_top_one').siblings('div').find('.one_curcle_in').removeClass('cur');
        $(this).parent().siblings('p').addClass('pur');
        $(this).parents('.lists_top_one').siblings('div').find('p').removeClass('pur');
        $('.Ordinary_class_lists_bottom_zeo').show().siblings('div').hide();
        $('.icon_content').addClass('curli').siblings('li').removeClass('curli');
    });
    $('.icon_content').on('click', function() {
        $('.Ordinary_class_lists_bottom_zeo').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_zeo').css('display') === 'block') {
            $('.lists_top_one .one_curcle_in').addClass('cur').parent().parent('.lists_top_one').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_one').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
        }
        $(this).addClass('curli').siblings('li').removeClass('curli');
    });
    $('.lists_top_two .one_curcle_in ').on('click', function() {
        $(this).addClass('cur').parent().parent('.lists_top_two').siblings('div').find('.one_curcle_in').removeClass('cur');
        $(this).parent().siblings('p').addClass('pur');
        $(this).parents('.lists_top_two').siblings('div').find('p').removeClass('pur');
        $('.Ordinary_class_lists_bottom_two').show().siblings('div').hide();
        $('.icon_infor').addClass('curli').siblings('li').removeClass('curli');
    });
    $('.icon_infor').on('click', function() {
        $('.Ordinary_class_lists_bottom_two').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_two').css('display') === 'block') {
            $('.lists_top_two .one_curcle_in').addClass('cur').parent().parent('.lists_top_two').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_two').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
        }
        $(this).addClass('curli').siblings('li').removeClass('curli');
    });
    $('.lists_top_three .one_curcle_in ').on('click', function() {
        $(this).addClass('cur').parent().parent('.lists_top_three').siblings('div').find('.one_curcle_in').removeClass('cur');
        $(this).parent().siblings('p').addClass('pur');
        $(this).parents('.lists_top_three').siblings('div').find('p').removeClass('pur');
        $('.Ordinary_class_lists_bottom_three').show().siblings('div').hide();
        $('.icon_cover').addClass('curli').siblings('li').removeClass('curli');
    });
    $('.icon_cover').on('click', function() {
        $('.Ordinary_class_lists_bottom_three').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_three').css('display') === 'block') {
            $('.lists_top_three .one_curcle_in').addClass('cur').parent().parent('.lists_top_three').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_three').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
        }
        $(this).addClass('curli').siblings('li').removeClass('curli');
    });
    $('.lists_top_four .one_curcle_in ').on('click', function() {
        $(this).addClass('cur').parent().parent('.lists_top_four').siblings('div').find('.one_curcle_in').removeClass('cur');
        $(this).parent().siblings('p').addClass('pur');
        $(this).parents('.lists_top_four').siblings('div').find('p').removeClass('pur');
        $('.Ordinary_class_lists_bottom_four').show().siblings('div').hide();
        $('.icon_set').addClass('curli').siblings('li').removeClass('curli');

    });
    $('.icon_set').on('click', function() {
        $('.Ordinary_class_lists_bottom_four').show().siblings('div').hide();
        if ($('.Ordinary_class_lists_bottom_four').css('display') === 'block') {
            $('.lists_top_four .one_curcle_in').addClass('cur').parent().parent('.lists_top_four').siblings('div').find('.one_curcle_in').removeClass('cur');
            $('.lists_top_four').find('p').addClass('pur').parent().siblings('div').find('p').removeClass('pur');
        }
        $(this).addClass('curli').siblings('li').removeClass('curli');
    });
    $('.Ordinary_center li').on('mouseover', function() {
        $(this).css('background', '#a1a1a1').siblings('li').css('background', '#5a5a5a');
    });
    $('.Ordinary_center li').on('mouseout', function() {
        $(this).css('background', 'transparent');
    });
    $('#preview_span').on('click', function() {
        $('.preview_tap').slideDown();
    });
    $(document).on('mouseout', '.preview_tap', function() {
        $('.preview_tap').slideUp();
    });

    // 课程内容*********************************************************************************
    // 头部
    $('.bottom_content_radio .piaochecked:eq(0)').on('click', function() {
        if ($(this).hasClass('on_check')) {
            $('.kuazhang').show();
        } else {
            $('.kuazhang').hide();
        }
    });
    $('.bottom_content_radio .piaochecked').eq(1).on('click', function() {
        console.log($(this));
        if ($(this).hasClass('on_check')) {
            $('.chapter_part').hide();
        } else {
            $('.chapter_part').show();
        }
    });
    // 章节首页
    $(document).on('mouseover', '.zhangjie', function() {
        $(this).find('ul').show();
        $(this).find('.x').show();
    });
    $(document).on('mouseout', '.zhangjie', function() {
        $(this).find('ul').hide();
        $(this).find('.x').hide();
    });
    $(document).on('click', '.x', function() {
        $(this).parents('.zhangjie').remove();
    });
    $(document).on('mouseover', '.chapter_part', function() {
        $(this).find('ul').show();
        $(this).find('.x').show();
    });
    $(document).on('mouseout', '.chapter_part', function() {
        $(this).find('ul').hide();
        $(this).find('.x').hide();
    });
    $(document).on('click', '.x', function() {
        $(this).parents('.chapter_part').remove();
    });
    // 插入
    $(document).on('mouseover', '.cr', function() {
        $(this).siblings('.chapter_part_include').show();
    });
    $(document).on('mouseout', '.zhangjie ul li', function() {
        $(this).find('.chapter_part_include').hide();
    });
    $(document).on('mouseout', '.chapter_part ul li', function() {
        $(this).find('.chapter_part_include').hide();
    });
    $(document).on('mouseover', '.chapter_part_include', function() {
        $(this).show();
    });

    $(document).on('click', '.chapter_part .include_prev', function() {
        var html = part_html();
        $(this).parents('.chapter_part').before(html);
        _show();
    });
    $(document).on('click', '.chapter_part .include_next', function() {
        var html = part_html();
        $(this).parents('.chapter_part').after(html);
        _show();
    });
    $(document).on('click', '.zhangjie .include_prev', function() {
        var html = zhang_html();
        $(this).parents('.bottom_content_chapter').before(html);
        _show();

    });
    $(document).on('click', '.zhangjie .include_next', function() {
        var html = zhang_html();
        $(this).parents('.bottom_content_chapter').after(html);
    });
    $('.add_chapter span').on('click', function() {
        var html = zhang_html();
        $(this).parents('.add').prev('.list_bottom_content').append(html);
        _show();
    });
    $('bottom_content_chapter .add_part span').on('click', function() {
        var html = part_html();
        $(this).parent().before(html);
        _show();
    });
    // 显示课程内容
    $(document).on('click', '.jm', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.see_class').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();

        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $(document).on('click', '.jy', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.handout').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $(document).on('click', '.al', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.case').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });

    $(document).on('click', '.sp', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.add_video').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $('.video_btn1').on('click', function() {
        add_video_task();
    });
    $(document).on('click', '.zs', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.knowledge_point').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $(document).on('click', '.cy', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.test_content_right_point').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $('.add_subject').on('click', function() {
        $('.add_subject_box').show().siblings('div').hide();
    });
    $('.btn_hm').on('click', function() {
        $('.add_subject_hm').show().siblings('div').hide();
    });
    $('.btn_sc').on('click', function() {
        $('.batch').show().siblings('div').hide();
    });

    $(document).on('click', '.bj', function() {
        $('.chaper').hide();
        if ($('.chaper').css('display') == 'none') {
            $('#back_part').css('display', 'inline-block').siblings('#add_test').hide();
            $('#back_part').on('click', function() {
                $('.chaper').show();
                $('.Ordinary_class_lists_bottom_one').hide();
                $(this).hide().siblings('#add_test').css('display', 'inline-block');
            });
        }
        $('.Ordinary_class_lists_bottom_one').show();
        $('.homework').show().siblings('div').hide();
        var html = $(this).parents('.chapter_part').find('span').html();
        // console.log(html)
        $('.test_content_left li').each(function() {
            if ($(this).html() == html) {
                $('.test_content_left li').removeClass('blue');
                $(this).addClass('blue');
            }
        });
        var valu = $(this).parents('.bottom_content_chapter').find('input').val();
        $('.test_content_right >p').html(valu);
    });
    $('.test_content_tap').on('click', function() {
        $('.chaper').show().siblings('.Ordinary_class_lists_bottom_one').hide();
        if ($('.chaper').css('display') == 'block') {
            $('#add_test').css('display', 'inline-block').siblings('#back_part').hide();
        }
    });

    // 从库中选择选中
    $('.video_list>li>div').on('click', function() {
        $(this).find('span').toggleClass('video_curent');
    });


    $('.start_data .piaochecked').on('click', function() {
        if ($(this).hasClass('on_check')) {
            $('.start_data_input input').val('待定');
        } else {
            $('.start_data_input input').val('');
        }
    });
    $('.start_data_input input').on('change', function() {
        $('.start_data .piaochecked').removeClass('on_check');
    });
    // 课程信息*********************************************************************************
    $('#country_ul li').on('click', function() {
        $(this).toggleClass('country_choice');
        if ($(this).hasClass('country_choice')) {
            $(this).find('span').addClass('now');
        } else {
            $(this).find('span').removeClass('now');
        }
    });
    $('#country_ul li span').on('click', function() {
        $(this).parent('li').css('display', 'none');
    });

    $('#language_ul li').on('click', function() {
        $(this).toggleClass('language_choice');
        if ($(this).hasClass('language_choice')) {
            $(this).find('span').addClass('now');
        } else {
            $(this).find('span').removeClass('now');
        }
    });
    $('#language_ul li span').on('click', function() {
        $(this).parent('li').css('display', 'none');
    });
    $(document).on('click', '.tag_top>ul>li', function() {
        $(this).toggleClass('tag_top_current');
        if ($(this).hasClass('tag_top_current')) {
            $(this).find('span').show();
        } else {
            $(this).find('span').hide();
        }

    });
    $(document).on('click', '.tag_top>ul>li>span', function() {
        $(this).parent('li').remove();
    });
    $('.tag_bottom_btn_add').on('click', function() {
        var _this = $(this);
        if ($('.tag_top>ul>li').length < 6) {
            var html = _this.prev('input').val();

            if (html != '' && html.length < 6) {
                $('.tag_top>ul').append('<li>' + html + '<span></span></li>');
                _this.prev('input').val('');
                $('.class_tag .red').hide();
            } else if (html.length >= 6) {
                $('.class_tag .red').show();
            }
        } else {
            _this.prev('input').val('');
        }
    });
    $('.add_text').on('click', function() {
        var html = '';
        html += '<div class="textbook_input">';
        html += '<input type="text" placeholder="教材或文章名称">';
        html += '<input type="text" placeholder="URL">';
        html += '<input type="text" placeholder="作者">';
        html += '<input type="text" placeholder="出版社">';
        html += ' <input type="text" placeholder="出版日期">';
        html += '<input type="text" placeholder="IBSN">';
        html += '</div>';
        $(this).before(html);
    });
    $('.a_delete').on('click', function() {
        $(this).parent('li').siblings('li').remove();
    });
    // 添加问题
    $('.add_answer').on('click', function() {
        var html = '';
        html += '<div class="answer_input">';
        html += '<input type="text" class="anwser_ti" placeholder="回答">';
        html += '</div>';
        $(this).before(html);
    });
    // 课程设置
    $('#has_book_a').on('click', add_book_tasks);

    $('.man_num_input a').on('click', function() {
        $('.man_num_box').show();
        if ($('.man_num_box').css('display') === 'block') {
            $('.man_num_content >a').show();
        }
        $('#add_class').unbind('click').click(function() {

            var html = '';
            html += '<div class="man_num_box clearfix" style="display:block;">';
            html += '<div class="man_num_box_sc f_left">';
            html += '<img src="image/big_shi.png" alt="">';
            html += '<p>点击上传班级图片</p>';
            html += '<input type="file" id="man_num_badge" name="man_num_logo">';
            html += '<div class="man_num_pic">';
            html += '<img>';
            html += '</div>';
            html += '</div>';
            html += '<div class="man_num_box_input f_left">';
            html += '<input type="text" placeholder="班级名称">';
            html += '<input type="text" placeholder="限额人数">';
            html += '<br>';
            html += '<input type="text" placeholder="助教名称">';
            html += '<span>添加</span>';
            html += '</div>';
            html += '<span></span>';
            html += '</div>';

            $(this).before(html);
        });
    });
    $(document).on('click', '.man_num_box>span', function() {

        if ($('.man_num_box').length == 1) {
            $('.man_num_box').hide();
        } else {
            $(this).parents('.man_num_box').remove();
        }
        if ($('.man_num_box').css('display') === 'none') {
            $('.man_num_content >a').hide();
        }
    });
    $('.man_num_box_input>span').on('click', function() {
        $(this).parent('.man_num_box_input ').append("<input class='add_input' type='text' placeholder='助教名称'><i></i><br>");
    });
    $(document).on('click', '.man_num_box_input i', function() {
        $(this).prev('input').remove();
        $(this).next('br').remove()
        $(this).remove();
    });
    $('.add_teacher').unbind('click').click(function() {
        var a = '';
        a += '<div class="teacher_box clearfix">';
        a += '<div class="teacher_box_sc f_left">';
        a += '<img src="image/big_shi.png" alt="">';
        a += '<p>点击上传头像</p>';
        a += '<input type="file" id="teacher_team_badge" name="teacher_logo">';
        a += '<div class="teacher_pic">';
        a += '<img>';
        a += '</div>';
        a += '</div>';
        a += '<div class="teacher_input f_left">';
        a += '<input type="text" placeholder="老师姓名">';
        a += '<input type="text" placeholder="老师职务">';
        a += '<div>';
        a += '<textarea placeholder="老师简介"></textarea>';
        a += '</div>';
        a += '</div>';
        a += '<i style="display: none;"></i>';
        a += '</div>';
        $(this).before(a);
        if ($('.teacher_box').length > 1) {
            $('.teacher_box').find('i').css('display', 'block');
        }
    });
    $(document).on('click', '.teacher_box>i', function() {

        $(this).parent('.teacher_box').remove();
        if ($('.teacher_box').length == 1) {
            $('.teacher_box').find('i').css('display', 'none');
        }
    });
    $('.enroll_che .piaochecked').on('click', function() {
        if ($(this).hasClass('on_check')) {
            $('.qy_box').show();
        } else {
            $('.qy_box').hide();
        }
        $('.add_biao_btn').on('click', function() {
            $('.add_biao').show();
        });
        $('.add_biao > i').on('click', function() {
            $(this).parent('.add_biao').hide();
        });
        $('.add_biao button').on('click', function() {
            var html = $(this).prev('input').val();
            $(this).parent().siblings('ul').append('<li><span class="piaochecked"><input type="checkbox" name="qy_che" value="' + html + '" id="qy_meb" class="cbdemo2"></span><label for="qy_meb">' + html + '</label></li>');
            $(this).prev('input').val('');
        });
    });

    // 关闭模态框
    $('.add_book_no').on('click', function() {
        $('#add_book').modal('hide');
    });
    $('.close_video_task').on('click', function() {
        $('#video_task').modal('hide');
    });
    $('#General_curriculum_submit').on('click', function() {
        $('#Class_template').modal('hide');
    });
    var progress_id = "loading";

    function SetProgress(progress) {
        if (progress) {
            $("." + progress_id + " > div").css("width", String(progress) + "%"); //控制#loading div宽度
            //        $("#" + progress_id + " > div").html(String(progress) + "%"); //显示百分比
        }
    }
    var i = 0;

    function doProgress() {
        if (i <= 100) {
            setTimeout("doProgress()", 100);
            SetProgress(i);
            i++;
        }
    }
    $(document).ready(function() {
        doProgress();
    });
    // 单选框
    $(function() {
        $('label').click(function() {
            var radioId = $(this).attr('name');
            $(this).addClass('checked').siblings('label').removeAttr('class');
            $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
            if ($('#ssd').hasClass('checked')) {
                $('.discount').show();
            } else {
                $('.discount').hide();
                $('#y').next('label').add('checked').siblings('label').removeClass('checked');
                $('.discount_sz input').val('');
                $('.discount_sz select').val('元')
            }
            if ($('#buy_y').hasClass('checked')) {
                $('.buy>span').hide();
            } else {
                $('.buy>span').show();
            }
            if ($('#enroll_y').hasClass('checked')) {
                $('.enroll_che').show();
                $('.enroll_che .piaochecked').remove('on_check');
            } else {
                $('.enroll_che').hide();
            }
            if ($('#has_point_y').hasClass('checked')) {
                $('.has_point_input').show();
            } else {
                $('.has_point_input').hide();
            }
            if ($('#has_book_y').hasClass('checked')) {
                $('.has_book_box>span').show();
                $('.has_book_img').show();
                $('.has_book_box>a').show();
            } else {
                $('.has_book_box>span').hide();
                $('.has_book_img').hide();
                $('.has_book_box>a').hide();
            }
            if ($(this).hasClass('on_check')) {
                $('.qy_box').show();
            } else {
                $('.qy_box').hide();
            }
        });
    });
    // 圆形进度条
    $('#indicatorContainer').radialIndicator({
        barColor: '#ff7669',
        barWidth: 10,
        initValue: 50,
        roundCorner: true,
        percentage: true,
        fontSize: 18
    });

    function _show() {
        var arr = [];
        $('.Ordinary_class_menu_content li').each(function() {
            arr.push($(this).find('.Ordinary_class_menu_list_text').html());
            if ($.inArray('作业', arr) != -1) {
                $('.bj').show();
            } else {
                $('.bj').hide();
                $('.homework_box').remove();
                var homework_html = '';
                homework_html += '<div class="homework_box">';
                homework_html += '<div class="homework_title">';
                homework_html += '<div>作业题目：</div>'
                homework_html += '<input type="text">';
                homework_html += '</div>';
                homework_html += '<div class="homework_content">';
                homework_html += '<div>作业内容：</div>'
                homework_html += '<textarea></textarea>';
                homework_html += '</div>'
                homework_html += '<div class="accessory">';
                homework_html += '<div>附件：</div>'
                homework_html += '<input type="text">';
                homework_html += '<button>上传附件</button>';
                homework_html += '</div>';
                homework_html += '</div>';
                $('.homework_btn').before(homework_html);
            }
            if ($.inArray('测验', arr) != -1) {
                $('.cy').show();

            } else {
                $('.cy').hide();
                $('.test_point').remove();
                $('.test_title').remove();
                var cy_html = '';
                cy_html += '<div class="test_point">';
                cy_html += '<div class="point_one">';
                cy_html += '测验总分';
                cy_html += '<input type="text"> 分';
                cy_html += '</div>';
                cy_html += '<div class="point_two">';
                cy_html += '测验总分';
                cy_html += '<input type="text"> 分';
                cy_html += '</div>';
                cy_html += '<div class="point_three">';
                cy_html += '考题数量';
                cy_html += '<input type="text"> 道';
                cy_html += '</div>';
                cy_html += '<div class="point_four">';
                cy_html += '允许答题次数';
                cy_html += '<input type="text"> 次';
                cy_html += '</div>';
                cy_html += '</div>';
                cy_html += '<div class="test_title">';
                cy_html += '您还没有添加试题';
                cy_html += '</div>';

                $('.test_content_right_point>span').after(cy_html);
            }
            if ($.inArray('讲义', arr) != -1) {
                $('.jy').show();
            } else {
                $('.jy').hide();
                $('.handout_content').remove();
                var jy_html = '';
                var i = 5;
                jy_html += '<div class="handout_content">';
                while (i > 0) {
                    jy_html += '<div class="handout_content_one">';
                    jy_html += '<img src="image/word.png">';
                    jy_html += '<p>古代文学讲义.doc</p>';
                    jy_html += '<div class="center">';
                    jy_html += '<div class="message"></div>';
                    jy_html += '<div class="loading">';
                    jy_html += '<div></div>';
                    jy_html += '</div>';
                    jy_html += '</div>';
                    jy_html += '<span class="handout_content_b">完成</span>';
                    jy_html += '<span class="handout_content_k">268kb</span>';
                    jy_html += '<div class="handout_content_li">';
                    jy_html += '<a href="javascript:;">预览</a>';
                    jy_html += '<a href="javascript:;" style="margin:0 5px;">编辑</a>';
                    jy_html += '<a href="javascript:;">删除</a>';
                    jy_html += '</div>';
                    jy_html += '</div>';
                    i--;
                }
                jy_html += '</div>';
                $('.handout_btn_bc').before(jy_html);
                $('.handout_content_one:eq(0)').find('img').attr('src','image/pps.png');
                
            }
            if ($.inArray('视频', arr) != -1) {
                $('.sp').show();
            } else {
                $('.sp').hide();
                $('.video_content').remove();
                $('.video_data').remove();
                var video_html = '';
                video_html += '<div class="video_content">';
                video_html += '<div class="video_img ">';
                video_html += '<img src="image/video_img.png" alt="">';
                video_html += '<div class="video_task"></div>';
                video_html += '<span>30%</span>';
                video_html += '</div>';
                video_html += '<div class="video_p">';
                video_html += '<p>营销：人人都需要的一门课(2016春)';
                video_html += '<br> 第一章第二节.mp4';
                video_html += '</p>';
                video_html += '</div>';
                video_html += '<div class="video_time">';
                video_html += '00:15:42';
                video_html += '</div>';
                video_html += '<div class="video_m">';
                video_html += '200M';
                video_html += '</div>';
                video_html += '<div class="video_sucess"><img src="image/sucess.png" alt="">';
                video_html += '</div>';
                video_html += '</div>';
                video_html += '<div class="video_data">';
                video_html += '建议学习时长：';
                video_html += '<input type="text"> 学时 <span>如果未设置，则默认学习时长伪视频长3倍取整</span>';
                video_html += '</div>';
                $('.video_btn_save').before(video_html);
            }
            if ($.inArray('见面课', arr) != -1) {
                $('.jm').show();
            } else {
                $('.jm').hide();
                $('.see_class textarea').val('');
                $('.see_class input').val('');

            }
            if ($.inArray('参考案例', arr) != -1) {
                $('.al').show();
            } else {
                $('.al').hide();
                ue.ready(function() {
                    ue.setContent('');
                });
                $('.case_content .case_url input').val('');
            }
            if ($.inArray('知识点', arr) != -1) {
                $('.zs').show();
            } else {
                $('.zs').hide();
                us.ready(function() {
                    us.setContent('');
                });

            }

            if ($.isArray('期末考试', arr) != -1) {

            }

            if ($.inArray('课程简介', arr) != -1) {
                $('.course_description').show();
            } else {
                $('.course_description').hide();
                $('.course_description textarea').val('');
            }
            if ($.inArray('课程详情', arr) != -1) {
                $('.course_details').show();
            } else {
                $('.course_details').hide();
                $('.course_details textarea').val('');
            }
            if ($.inArray('适合人群', arr) != -1) {
                $('.people_radio').show();
            } else {
                $('.people_radio').hide();
                $('#cj').next('label').addClass('checked').siblings('label').removeClass('checked');
            }
            if ($.inArray('课程标签', arr) != -1) {
                $('.class_tag').show();
            } else {
                $('.class_tag').hide();
                $('.class_tag ul li').remove();
            }
            if ($.inArray('发布国家', arr) != -1) {
                $('.country').show();
                $('.country li').removeClass('country_choice');
                if ($(this).hasClass('country_choice')) {
                    $('.country li').find('span').addClass('now');
                } else {
                    $('.country li').find('span').removeClass('now');
                }
            } else {
                $('.country').hide();
            }
            if ($.inArray('语言', arr) != -1) {
                $('.language').show();
                $('.language li').removeClass('language_choice');
                if ($(this).hasClass('language_choice')) {
                    $('.language li').find('span').addClass('now');
                } else {
                    $('.language li').find('span').removeClass('now');
                }
            } else {
                $('.language').hide();
            }
            if ($.inArray('参考教材', arr) != -1) {
                $('.textbook').show();
            } else {
                $('.textbook').hide();
                $('.textbook input').val('');
            }
            if ($.inArray('常见问题', arr) != -1) {
                $('.anwser').show();
            } else {
                $('.anwser').hide();
                $('.anwser input').val('');
            }

            if ($.inArray('课程价格', arr) != -1) {
                $('.price').show();
            } else {
                $('.price').hide();
                $('#mf').next('label').addClass('checked').siblings('label').removeClass('checked');
                $('.price input').val('');
            }
            if ($.inArray('开课时间', arr) != -1) {
                $('.start_data').show();
            } else {
                $('.start_data').hide();
                $('.start_data input').val('');
                $('.piaochecked_dv .piaochecked').removeClass('on_check');
            }
            if ($.inArray('限制人数', arr) != -1) {
                $('.man_num').show();
            } else {
                $('.man_num').hide();
                $('.man_num').find('input').val('');
            }

            if ($.inArray('教学团队', arr) != -1) {
                $('.teacher_team').show();
            } else {
                $('.teacher_team').hide();
                $('.teacher_team').find('input').val('');
            }
            if ($.inArray('报名设置', arr) != -1) {
                $('.enroll').show();
            } else {
                $('.enroll').hide();
                $('.enroll label').removeClass('checked');
                $('.enroll_che').hide();
                $('.enroll_che .piaochecked').removeClass('on_check');
                $('.qy_box ul li').find('.piaochecked').removeClass('on_check');
                $('.qy_box').hide();
            }
            if ($.inArray('学分设置', arr) != -1) {
                $('.has_point').show();
            } else {
                $('.has_point').hide();
                $('#yyyyy').next('label').addClass('checked').siblings('label').removeClass('checked');
                $('.has_point_input input').val('');
            }
            if ($.inArray('证书课程', arr) != -1) {
                $('.has_book').show();
            } else {
                $('.has_book').hide();
                $('#has_book_y').addClass('checked').siblings('label').removeClass('checked');
                $('.add_book_input').find('input').val('');
            }
            if ($.inArray('开放购买', arr) != -1) {
                $('.buy').show();
            } else {
                $('.buy').hide();
                $('#buy_y').addClass('checked').siblings('label').removeClass('checked');
                if ($('#buy_y').hasClass('checked')) {
                    $('.buy>span').hide();
                } else {
                    $('.buy>span').show();
                }
            }
            if ($.inArray('课程封面', arr) != -1) {
                $('.cover').show();
            } else {
                $('.cover').hide();
            }
            if ($.inArray('课程短片', arr) != -1) {
                $('.short_film').show();
            } else {
                $('.short_film').hide();
            }
            if ($.inArray('课程优势', arr) != -1) {
                $('.advantage').show();
            } else {
                $('.advantage').hide();
                $('.advantage textarea').val('');
            }

        });
    }

    _show();

    $('.Ordinary_class_menu_button').on('click', function() {
        var arr_data = [];
        $('.Ordinary_class_menu_list_text').each(function() {
            arr_data.push($(this).html());
        });
        console.log(arr_data);
    });

    function part_html() {
        var html = '';
        html += '<div class="chapter_part">';
        html += '<span>1.1</span> <input type="text" placeholder="请输入小节名称"">';
        html += '<ul>';
        html += '<li style="position: relative;margin-right:0;">';
        html += '<img src="image/add.png" alt="" title="插入" class="cr">';
        html += '<div class="chapter_part_include">';
        html += '<div class="arrow-up"></div>';
        html += '<p class="include_prev">向上插入1讲</p>';
        html += '<p class="include_next">向下插入1讲</p>';
        html += '</div>';
        html += '</li>';
        html += '<li><img src="image/icon_edit.png" alt="" title="作业" class="bj"></li>';
        html += '<li><img src="image/knowledge.png" alt="" title="知识点" class="zs"></li>';
        html += '<li><img src="image/case.png" alt="" title="案例" class="al"></li>';
        html += '<li><img src="image/note.png" alt="" title="讲义" class="jy"></li>';
        html += '<li><img src="image/test.png" alt="" title="测验" class="cy"></li>';
        html += '<li><img src="image/face.png" alt="" title="见面课" class="jm"></li>';
        html += '<li><img src="image/video.png" alt="" title="视频" class="sp"></li>';
        html += '</ul>';
        html += '<span class="x"></span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function zhang_html() {
        var html = '';
        html += '<div class="bottom_content_chapter">';
        html += '<div class="zhangjie">'
        html += '第一章 <input type="text" placeholder="请输入章名称">';
        html += '<ul>';
        html += '<li style="position: relative;margin-right:0;">';
        html += '<img src="image/add.png" alt="" title="插入" class="cr">';
        html += '<div class="chapter_part_include">';
        html += '<div class="arrow-up"></div>';
        html += '<p class="include_prev">向上插入1讲</p>';
        html += '<p class="include_next">向下插入1讲</p>';
        html += '</div>';
        html += '</li>';
        html += '<li><img src="image/icon_edit.png" alt="" title="作业" class="bj"></li>';
        html += '<li><img src="image/knowledge.png" alt="" title="知识点" class="zs"></li>';
        html += '<li><img src="image/case.png" alt="" title="案例" class="al"></li>';
        html += '<li><img src="image/note.png" alt="" title="讲义" class="jy"></li>';
        html += '<li><img src="image/test.png" alt="" title="测验" class="cy"></li>';
        html += '<li><img src="image/face.png" alt="" title="见面课" class="jm"></li>';
        html += '<li><img src="image/video.png" alt="" title="视频" class="sp"></li>';
        html += '</ul>';
        html += '<span class="x"></span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    var checkTextleng = function(node) {
        var finalNum = 0;
        var textLength = $(node).val().length;
        var num = 160 - textLength;
        finalNum = num;
        if (num >= 0) {
            $('.course_description_span').html('还可以输入' + num + '字');
            $('.course_description_span').css('color', 'grey');
        }
        if (num < 0) {
            num = -num;
            $('.course_description_span').html('您的输入已超出' + num + '字');
            $('.course_description_span').css('color', '#f00');

        };
        return finalNum;
    }

    var maxInputNoti = function(node) {
        var node = node;
        checkTextleng($(node));
        $(node).keyup(function(argument) {
            checkTextleng($(node));
        });
    };

    $('.course_description textarea').bind('keyup', function() { maxInputNoti($('.course_description').find('textarea')) });

    var checkTextlen = function(node) {
        var finalNum = 0;
        var textLength = $(node).val().length;
        var num = 200 - textLength;
        finalNum = num;
        if (num >= 0) {
            $('.advantage_span').html('还可以输入' + num + '字');
            $('.advantage_span').css('color', 'grey');
        }
        if (num < 0) {
            num = -num;
            $('.advantage_span').html('您的输入已超出' + num + '字');
            $('.advantage_span').css('color', '#f00');

        };
        return finalNum;
    }

    var maxInputNot = function(node) {
        var node = node;
        checkTextlen($(node));
        $(node).keyup(function(argument) {
            checkTextlen($(node));
        });
    };

    $('.advantage textarea').bind('keyup', function() { maxInputNot($('.advantage').find('textarea')) });

    var checkTextle = function(node) {
        var finalNum = 0;
        var textLength = $(node).val().length;
        var num = 5000 - textLength;
        finalNum = num;
        if (num >= 0) {
            $('.placeholder').html('还可以输入' + num + '字');
            $('.placeholder').css('color', 'grey');
        }
        if (num < 0) {
            num = -num;
            $('.placeholder').html('您的输入已超出' + num + '字');
            $('.placeholder').css('color', '#f00');

        };
        return finalNum;
    }

    var maxInputNo = function(node) {
        var node = node;
        checkTextle($(node));
        $(node).keyup(function(argument) {
            checkTextle($(node));
        });
    };

    $('.course_details textarea').bind('keyup', function() { maxInputNo($('.course_details').find('textarea')) });


    var checkTextl = function(node) {
        var finalNum = 0;
        var textLength = $(node).val().length;
        var num = 1000 - textLength;
        finalNum = num;
        if (num >= 0) {
            $('.abstract_span').html('还可以输入' + num + '字');
            $('.abstract_span').css('color', 'grey');
        }
        if (num < 0) {
            num = -num;
            $('.abstract_span').html('您的输入已超出' + num + '字');
            $('.abstract_span').css('color', '#f00');

        };
        return finalNum;
    }

    var maxInputN = function(node) {
        var node = node;
        checkTextl($(node));
        $(node).keyup(function(argument) {
            checkTextl($(node));
        });
    };
    $('.abstract textarea').bind('keyup', function() { maxInputN($('.abstract').find('textarea')) });

}
// 复选框
$('.piaochecked').on('click', function() {
    $(this).toggleClass('on_check');
});

$("input").on('change',function() {
    $(window).bind('beforeunload',function() {
        var warimg = "确认关闭吗？";
        return warimg;
    });

});
$('.bottom_btn_save').on('click',function(){
    $(window).unbind('beforeunload');
});