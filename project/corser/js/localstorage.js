function local() {
    $('.bottom_btn_save').on('click', function() {
    var courser = {};

    if ($('.country').css('display') == 'block') {
        var country = $('.country').attr('class');
        var country_html = '';
        $('.country_choice').each(function() {

            country_html += '/' + $(this).text();
        });
        courser.country = country_html;
    }
    if ($('.language').css('display') == 'block') {
        var language = $('.language').attr('class');
        var language_html = '';
        $('.country_choice').each(function() {

            language_html += '/' + $(this).text();
        });
        courser.language = language_html;
    }
    if ($('.people_radio').css('display') == 'block') {
        // $('.people_radio').find('label')
        var people_html = $('.people_radio .checked').html();
        courser.people_radio = people_html;
    }
    if ($('.class_tag').css('display') == 'block') {
        var class_tag_html = '';
        $('.tag_top_current').each(function() {
            class_tag_html += '/' + $(this).text();
        });
        courser.class_tag = class_tag_html;
    }
    if ($('.course_description').css('display') == 'block') {
        var course_description_html = $('.course_description textarea').val();
        courser.course_description = course_description_html;
    }
    if ($('.course_details').css('display') == 'block') {
        var course_details_html = $('.course_details textarea').val();
        courser.course_details = course_details_html;
    }
    if ($('.textbook').css('display') == 'block') {
        var textbook_html = $('.textbook p').html();
        courser.textbook = textbook_html;
    }
    if ($('.anwser').css('display') == 'block') {
        var anwser_html = '';
        $('.anwser input').each(function() {
            anwser_html += '/' + $(this).val() + '<br>';
        });
        courser.anwser = anwser_html;
    }
    if ($('.price').css('display') == 'block') {
        var price_arr = [];
        var price_html = $('.price .checked').html();
        price_arr.push(price_html);
        var price_money = $('.price_sz input').val();
        price_arr.push(price_money);
        price_se = $('.price_sz select').val();
        price_arr.push(price_se);
        courser.price = price_arr;
    }
    if ($('.discount').css('display') == 'block') {
        var discount_arr = [];
        var discount_html = $('.discount .checked').html();
        discount_arr.push(discount_html);
        var discount_money = $('.discount_sz input').val();
        discount_arr.push(discount_money);
        discount_se = $('.discount_sz select').val();
        discount_arr.push(discount_se);
        courser.discount = discount_arr;
    }
    if ($('.start_data').css('display') == 'block') {
        var start_data_arr = [];
        $('.start_data_input input').each(function() {
            start_data_arr.push($(this).val());
        })
        courser.start_data = start_data_arr;
    }
    if ($('.man_num').css('display') == 'block') {
        var man_num_arr = [];
        var man_num = $('.man_num_input input').val();
        man_num_arr.push(man_num);
        $('.man_num_box  .man_num_box_input input').each(function() {
            man_num_arr.push($(this).val());
        })

        courser.man_num = man_num_arr;

    }
    if ($('.enroll').css('display') == 'block') {
        var enroll_arr = [];
        var enroll_html = $('.enroll .checked').html();
        enroll_arr.push(enroll_html);
        if ($('.enroll_che').css('display') == 'block') {
            $('.qy_box ul li .checked').each(function() {
                enroll_arr.push($(this).html());
            });
        }
        courser.enroll = enroll_arr;
    }
    if ($('.enroll').css('display') == 'block') {
        var enroll_arr = [];
        var enroll_html = $('.enroll .checked').html();
        enroll_arr.push(enroll_html);
        if ($('.enroll_che').css('display') == 'block') {
            $('.qy_box ul li .checked').each(function() {
                enroll_arr.push($(this).html());
            });
        }
        courser.enroll = enroll_arr;
    }
    if ($('.buy').css('display') == 'block') {
        // $('.people_radio').find('label')
        var buy_html = $('.buy .checked').html();
        courser.buy = buy_html;
    }
    if ($('.has_point').css('display') == 'block') {
        var has_point_arr = [];
        has_point_arr.push($('.has_point_box .checked').html());
        if ($('.has_point_input').css('display') == 'block') {
            has_point_arr.push($('.has_point_input input').val());
        }
        courser.has_point = has_point_arr;
    }
    if ($('.has_book').css('display') == 'block') {
        var has_book_arr = [];
        has_book_arr.push($('.has_book_box .checked').html());
        if ($('.has_book_img').css('display') == 'block') {
            // has_point_arr.push($('.has_point_input input').val());
        }
        courser.has_book = has_book_arr;
    }
    if ($('.teacher_team').css('display') == 'block') {
        var teacher_team_arr = [];

        $('.teacher_input').each(function() {
            var _this = $(this);
            _this.find('input').each(function() {
                teacher_team_arr.push($(this).val());
            });
            teacher_team_arr.push(_this.find('textarea').val());
        });
        courser.teacher_team = teacher_team_arr;
    }

    if($('.cover').css('display') == 'block'){

    }
    if($('.short_film').css('display') == 'block'){
      
    }
    if($('.advantage').css('display') == 'block'){
      
    }

    var data = JSON.stringify(courser)
    LS.set('courser', data);
});
$('#creat_save').on('click', function() {
    var chaper_obj = {};
    if ($('.chaper').css('display') == 'block') {
        var chaper_arr = [];
        $('.bottom_content_chapter').each(function() {
            chaper_arr.push($(this).find('.zhangjie input').val());
            $(this).find('.chapter_part').each(function(){
              chaper_arr.push($(this).find('input').val());
            }); 
        });

        chaper_obj.chaper = chaper_arr;
    }
    var chaper = JSON.stringify(chaper_obj);
    LS.set('chaper',chaper);

    var data = $("#chaper_form").serialize();
    $.ajax({
        url:"aa.json",
        type:"post",
        data:data,
        success:function(){

        }
    });
});

$('#lists_bottom_two').on("click",function(){
    var data = $('#information_form').serialize();
    var contury = $('.country_choice').html();
    var language = $('.language_choice').html();
    var tag = $('.tag_top_current').html();
    var description = $('.course_description_box textarea').val();
    var details = $('[name = "details"]').val();
    data += "&" + "country="+ contury +"";
    data += "&" + "language="+ language +"";
    data += "&" + "tag=" +tag+ "";
    data += "&" + "description="+ description +"";
    data += "&" + "details="+ details +"";

    $.ajax({
        url:'aa.json',
        type:'post',
        data:data,
        success:function(){

        }
    });
}); 
$('#lists_bottom_four').on('click',function(){
    var data = $('#set_form').serialize();
    $.ajax({
        url:"aa.json",
        type:"post",
        data:data,
        success:function(){
            
        }
    });
});
}
