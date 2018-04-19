//进度条
// var progress_id = "loading";

// function SetProgress(progress) {
//     if (progress) {
//         $("." + progress_id + " > div").css("width", String(progress) + "%"); //控制#loading div宽度
//         //        $("#" + progress_id + " > div").html(String(progress) + "%"); //显示百分比
//     }
// }
// var i = 0;

// function doProgress() {
//     if (i <= 100) {
//         setTimeout("doProgress()", 100);
//         SetProgress(i);
//         i++;
//     }
// }
// $(document).ready(function() {
//     doProgress();
// });
// // 单选框
// $(function() {
//     $('label').click(function() {
//         var radioId = $(this).attr('name');
//         //              $(this).attr('class','checked').siblings('label').removeAttr('class');
//         $(this).addClass('checked').siblings('label').removeAttr('class');
//         $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
//         if ($('#ssd').hasClass('checked')) {
//             $('.discount').show();
//         } else {
//             $('.discount').hide();
//         }
//         if ($('#buy_y').hasClass('checked')) {
//             $('.buy>span').hide();
//         } else {
//             $('.buy>span').show();
//         }
//         if ($('#enroll_y').hasClass('checked')) {
//             $('.enroll_che').show();
//             $('.enroll_che .piaochecked').remove('on_check');
//         } else {
//             $('.enroll_che').hide();
//         }
//         if ($('#has_point_y').hasClass('checked')) {
//             $('.has_point_input').show();
//         } else {
//             $('.has_point_input').hide();
//         }
//         if ($('#has_book_y').hasClass('checked')) {
//             $('.has_book_box>span').show();
//             $('.has_book_img').show();
//             $('.has_book_box>a').show();
//         } else {
//             $('.has_book_box>span').hide();
//             $('.has_book_img').hide();
//             $('.has_book_box>a').hide();
//         }
//         if ($(this).hasClass('on_check')) {
//             $('.qy_box').show();
//         } else {
//             $('.qy_box').hide();
//         }
//     });
// });
// // 复选框
// $('.piaochecked').on('click', function() {
//     // if($(this).hasClass('on_check')){

//     // }
//     $(this).toggleClass('on_check');
// });
// // 圆形进度条
// $('#indicatorContainer').radialIndicator({
//     barColor: '#28cfc4',
//     barWidth: 10,
//     initValue: 50,
//     roundCorner: true,
//     percentage: true,
//     fontSize: 18
// });

// function _show() {
//     var arr = [];
//     $('.Ordinary_class_menu_content li').each(function() {
//         arr.push($(this).find('.Ordinary_class_menu_list_text').html());
//         if ($.inArray('作业', arr) != -1) {
//             $('.bj').show();
//         } else {
//             $('.bj').hide();
//             $('.homework_box').remove();
//             // $('.homework_box textarea').val('');
//             var homework_html = '';
//             homework_html += '<div class="homework_box">';
//             homework_html += '<div class="homework_title">';
//             homework_html += '作业题目：'
//             homework_html += '<input type="text">';
//             homework_html += '</div>';
//             homework_html += '<div class="homework_content">';
//             homework_html += '作业内容：'
//             homework_html += '<textarea></textarea>';
//             homework_html += '</div>'
//             homework_html += '<div class="accessory">';
//             homework_html += '附件：'
//             homework_html += '<input type="text">';
//             homework_html += '<button>上传附件</button>';
//             homework_html += '</div>';
//             homework_html += '</div>';
//             $('.homework_btn').before(homework_html);
//         }
//         if ($.inArray('测验', arr) != -1) {
//             $('.cy').show();

//         } else {
//             $('.cy').hide();
//             // $('.test_point input').val('');
//             $('.test_point').remove();
//             $('.test_title').remove();
//             var cy_html = '';
//             cy_html += '<div class="test_point">';
//             cy_html += '<div class="point_one">';
//             cy_html += '测验总分';
//             cy_html += '<input type="text"> 分';
//             cy_html += '</div>';
//             cy_html += '<div class="point_two">';
//             cy_html += '测验总分';
//             cy_html += '<input type="text"> 分';
//             cy_html += '</div>';
//             cy_html += '<div class="point_three">';
//             cy_html += '考题数量';
//             cy_html += '<input type="text"> 道';
//             cy_html += '</div>';
//             cy_html += '<div class="point_four">';
//             cy_html += '允许答题次数';
//             cy_html += '<input type="text"> 次';
//             cy_html += '</div>';
//             cy_html += '</div>';
//             cy_html += '<div class="test_title">';
//             cy_html += '您还没有添加试题';
//             cy_html += '</div>';

//             $('.test_content_right_point>span').after(cy_html);
//         }
//         if ($.inArray('讲义', arr) != -1) {
//             $('.jy').show();
//         } else {
//             $('.jy').hide();
//             $('.handout_content').remove();
//             var jy_html = '';
//             jy_html += '<div class="handout_content">';
//             jy_html += '<div class="handout_content_one">';
//             jy_html += '<img src="image/word.png">';
//             jy_html += '<p>古代文学讲义.doc</p>';
//             jy_html += '<div class="center">';
//             jy_html += '<div class="message"></div>';
//             jy_html += '<div class="loading">';
//             jy_html += '<div></div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<span class="handout_content_b">完成</span>';
//             jy_html += '<span class="handout_content_k">268kb</span>';
//             jy_html += '<div class="handout_content_li">';
//             jy_html += '<a href="javascript:;">预览</a>';
//             jy_html += '<a href="javascript:;">编辑</a>';
//             jy_html +='<a href="javascript:;">删除</a>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<div class="handout_content_one">';
//             jy_html += '<img src="image/pps.png">';
//             jy_html += '<p>古代文学讲义.doc</p>';
//             jy_html += '<div class="center">';
//             jy_html += '<div class="message"></div>';
//             jy_html += '<div class="loading">';
//             jy_html += '<div></div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<span class="handout_content_b">50%</span>';
//             jy_html += '<span class="handout_content_k">486kb</span>';
//             jy_html += '<div class="handout_content_li">';
//             jy_html += '<a href="javascript:;">预览</a>';
//             jy_html += '<a href="javascript:;">编辑</a>';
//             jy_html += '<a href="javascript:;">删除</a>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<div class="handout_content_one">';
//             jy_html += '<img src="image/pps.png">';
//             jy_html += '<p>古代文学讲义.doc</p>';
//             jy_html += '<div class="center">';
//             jy_html += '<div class="message"></div>';
//             jy_html += '<div class="loading">';
//             jy_html += '<div></div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<span class="handout_content_b">50%</span>';
//             jy_html += '<span class="handout_content_k">486kb</span>';
//             jy_html += '<div class="handout_content_li">';
//             jy_html += '<a href="javascript:;">预览</a>';
//             jy_html += '<a href="javascript:;">编辑</a>';
//             jy_html += '<a href="javascript:;">删除</a>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<div class="handout_content_one">';
//             jy_html += '<img src="image/pps.png">';
//             jy_html += '<p>古代文学讲义.doc</p>';
//             jy_html += '<div class="center">';
//             jy_html += '<div class="message"></div>';
//             jy_html += '<div class="loading">';
//             jy_html += '<div></div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<span class="handout_content_b">50%</span>';
//             jy_html += '<span class="handout_content_k">486kb</span>';
//             jy_html += '<div class="handout_content_li">';
//             jy_html += '<a href="javascript:;">预览</a>';
//             jy_html += '<a href="javascript:;">编辑</a>';
//             jy_html += '<a href="javascript:;">删除</a>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<div class="handout_content_one">';
//             jy_html += '<img src="image/pps.png">';
//             jy_html += '<p>古代文学讲义.doc</p>';
//             jy_html += '<div class="center">';
//             jy_html += '<div class="message"></div>';
//             jy_html += '<div class="loading">';
//             jy_html += '<div></div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '<span class="handout_content_b">50%</span>';
//             jy_html += '<span class="handout_content_k">486kb</span>';
//             jy_html += '<div class="handout_content_li">';
//             jy_html += '<a href="javascript:;">预览</a>';
//             jy_html += '<a href="javascript:;">编辑</a>';
//             jy_html += '<a href="javascript:;">删除</a>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             jy_html += '</div>';
//             $('.handout_btn_bc').before(jy_html);
//         }
//         if ($.inArray('视频', arr) != -1) {
//             $('.sp').show();
//         } else {
//             $('.sp').hide();
//             $('.video_content').remove();
//             $('.video_data').remove();
//             var video_html = '';
//             video_html += '<div class="video_content">';
//             video_html += '<div class="video_img ">';
//             video_html += '<img src="image/video_img.png" alt="">';
//             video_html += '<div class="video_task"></div>';
//             video_html += '<span>30%</span>';
//             video_html += '</div>';
//             video_html += '<div class="video_p">';
//             video_html += '<p>营销：人人都需要的一门课(2016春)';
//             video_html += '<br> 第一章第二节.mp4';
//             video_html += '</p>';
//             video_html += '</div>';
//             video_html += '<div class="video_time">';
//             video_html += '00:15:42';
//             video_html += '</div>';
//             video_html += '<div class="video_m">';
//             video_html += '200M';
//             video_html += '</div>';
//             video_html += '<div class="video_sucess"><img src="image/sucess.png" alt="">';
//             video_html += '</div>';
//             video_html += '</div>';
//             video_html += '<div class="video_data">';
//             video_html += '建议学习时长：';
//             video_html += '<input type="text"> 学时 <span>如果未设置，则默认学习时长伪视频长3倍取整</span>';
//             video_html += '</div>';
//             $('.video_btn_save').before(video_html);
//         }
//         if ($.inArray('见面课', arr) != -1) {
//             $('.jm').show();
//         } else {
//             $('.jm').hide();
//             $('.see_class textarea').val('');
//             $('.see_class input').val('');
//         }
//         if ($.inArray('参考案例', arr) != -1) {
//             $('.al').show();
//         } else {
//             $('.al').hide();
//             ue.execCommand('cleardoc');
            
//             $('.case_content .case_url input').val('');
//         }
//         if ($.inArray('知识点', arr) != -1) {
//             $('.zs').show();
//         } else {
//             $('.zs').hide();
//             $('.edui-default .view p').html('');

//         }

//         if ($.isArray('期末考试', arr) != -1) {

//         }

//         if ($.inArray('课程简介', arr) != -1) {
//             $('.course_description').show();
//         } else {
//             $('.course_description').hide();
//             $('.course_description textarea').val('');
//         }
//         if ($.inArray('课程详情', arr) != -1) {
//             $('.course_details').show();
//         } else {
//             $('.course_details').hide();
//             $('.course_details textarea').val('');
//         }
//         if ($.inArray('适合人群', arr) != -1) {
//             $('.people_radio').show();
//         } else {
//             $('.people_radio').hide();
//             $('#cj').next('label').addClass('checked').siblings('label').removeClass('checked');
//         }
//         if ($.inArray('课程标签', arr) != -1) {
//             $('.class_tag').show();
//         } else {
//             $('.class_tag').hide();
//             $('.class_tag ul li').remove();
//         }
//         if ($.inArray('发布国家', arr) != -1) {
//             $('.country').show();
//             $('.country li').removeClass('country_choice');
//             if ($(this).hasClass('country_choice')) {
//                 $('.country li').find('span').addClass('now');
//             } else {
//                 $('.country li').find('span').removeClass('now');
//             }
//         } else {
//             $('.country').hide();
//         }
//         if ($.inArray('语言', arr) != -1) {
//             $('.language').show();
//             $('.language li').removeClass('language_choice');
//             if ($(this).hasClass('language_choice')) {
//                 $('.language li').find('span').addClass('now');
//             } else {
//                 $('.language li').find('span').removeClass('now');
//             }
//         } else {
//             $('.language').hide();
//         }
//         if ($.inArray('参考教材', arr) != -1) {
//             $('.textbook').show();
//         } else {
//             $('.textbook').hide();
//             $('.textbook input').val('');
//         }
//         if ($.inArray('常见问题', arr) != -1) {
//             $('.anwser').show();
//         } else {
//             $('.anwser').hide();
//             $('.anwser input').val('');
//         }

//         if ($.inArray('课程价格', arr) != -1) {
//             $('.price').show();
//             // if($('#mf').next('label').hasClass('checked')) {
//             //   console.log(1111)
//             // }
//         } else {
//             $('.price').hide();
//             $('#mf').next('label').addClass('checked').siblings('label').removeClass('checked');
//             $('.price input').val('');
//         }
//         if ($.inArray('开课时间', arr) != -1) {
//             $('.start_data').show();
//         } else {
//             $('.start_data').hide();
//             $('.start_data input').val('');
//             $('.piaochecked_dv').removeClass('checked');
//         }
//         if ($.inArray('限制人数', arr) != -1) {
//             $('.man_num').show();
//         } else {
//             $('.man_num').hide();
//             $('.man_num').find('input').val('');
//         }

//         if ($.inArray('教学团队', arr) != -1) {
//             $('.teacher_team').show();
//         } else {
//             $('.teacher_team').hide();
//             $('.teacher_team').find('input').val('');
//         }
//         if ($.inArray('报名设置', arr) != -1) {
//             $('.enroll').show();
//         } else {
//             $('.enroll').hide();
//             $('#yy').next('label').addClass('checked').siblings('label').removeClass('checked');
//             $('.enroll_che .piaochecked').removeClass('on_check');
//             $('.qy_box ul li').find('.piaochecked').removeClass('on_check');
//             $('.qy_box').hide();
//         }
//         if ($.inArray('学分设置', arr) != -1) {
//             $('.has_point').show();
//         } else {
//             $('.has_point').hide();
//             $('#yyyyy').next('label').addClass('checked').siblings('label').removeClass('checked');
//             $('.has_point_input input').val('');
//         }
//         if ($.inArray('证书课程', arr) != -1) {
//             $('.has_book').show();
//         } else {
//             $('.has_book').hide();
//             $('#has_book_y').addClass('checked').siblings('label').removeClass('checked');
//             $('.add_book_input').find('input').val('');
//         }
//         if ($.inArray('开放购买', arr) != -1) {
//             $('.buy').show();
//         } else {
//             $('.buy').hide();
//             $('#buy_y').addClass('checked').siblings('label').removeClass('checked');
//             if ($('#buy_y').hasClass('checked')) {
//             $('.buy>span').hide();
//         } else {
//             $('.buy>span').show();
//         }
//         }
//         if ($.inArray('课程封面', arr) != -1) {
//             $('.cover').show();
//         } else {
//             $('.cover').hide();
//         }
//         if ($.inArray('课程短片', arr) != -1) {
//             $('.short_film').show();
//         } else {
//             $('.short_film').hide();
//         }
//         if ($.inArray('课程优势', arr) != -1) {
//             $('.advantage').show();
//         } else {
//             $('.advantage').hide();
//             $('.advantage textarea').val('');
//         }

//     });
// }

// _show();

// $('.Ordinary_class_menu_button').on('click', function() {
//     var arr_data = [];
//     $('.Ordinary_class_menu_list_text').each(function() {
//         arr_data.push($(this).html());
//     });
//     console.log(arr_data);
// });

// function part_html() {
//     var html = '';
//     html += '<div class="chapter_part">';
//     html += '<span>1.1</span> <input type="text" placeholder="请输入小节名称"">';
//     html += '<ul>';
//     html += '<li>';
//     html += '<img src="image/add.png" alt="" title="插入" class="cr">';
//     html += '<div class="chapter_part_include">';
//     html += '<div class="arrow-up"></div>';
//     html += '<p class="include_prev">向上插入1讲</p>';
//     html += '<p class="include_next">向下插入1讲</p>';
//     html += '</div>';
//     html += '</li>';
//     html += '<li><img src="image/video.png" alt="" title="视频" class="sp"></li>';
//     html += '<li><img src="image/face.png" alt="" title="见面课" class="jm"></li>';
//     html += '<li><img src="image/test.png" alt="" title="测验" class="cy"></li>';
//     html += '<li><img src="image/note.png" alt="" title="讲义" class="jy"></li>';
//     html += '<li><img src="image/case.png" alt="" title="案例" class="al"></li>';
//     html += '<li><img src="image/knowledge.png" alt="" title="知识点" class="zs"></li>';
//     html += '<li><img src="image/icon_edit.png" alt="" title="作业" class="bj"></li>';
//     html += '<span class="x"></span>';
//     html += '</ul>';
//     html += '</div>';
//     html += '</div>';

//     return html;
// }

// function zhang_html() {
//     var html = '';
//     html += '<div class="bottom_content_chapter">';
//     html += '<div class="zhangjie">'
//     html += '第一章 <input type="text" placeholder="请输入章名称">';
//     html += '<ul>';
//     html += '<li>'
//     html += '<img src="image/add.png" alt="" title="插入" class="cr">'
//     html += '<div class="chapter_part_include">'
//     html += '<div class="arrow-up"></div>'
//     html += '<p class="include_prev">向上插入1讲</p>'
//     html += '<p class="include_next">向下插入1讲</p>'
//     html += '</div>'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/video.png" alt="" title="视频" class="sp">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/face.png" alt="" title="见面课" class="jm">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/test.png" alt="" title="测验" class="cy">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/note.png" alt="" title="讲义" class="jy">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/case.png" alt="" title="案例" class="al">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/knowledge.png" alt="" title="知识点" class="zs">'
//     html += '</li>'
//     html += '<li>'
//     html += '<img src="image/icon_edit.png" alt="" title="作业" class="bj">'
//     html += '</li>'
//     html += '<span class="x"></span>';
//     html += '</ul>'
//     html += '</div>'
//     html += '</div>';

//     return html;
// }

// var checkTextleng = function(node) {
//     var finalNum = 0;
//     var textLength = $(node).val().length;
//     var num = 160 - textLength;
//     finalNum = num;
//     if (num >= 0) {
//         $('.course_description_span').html('还可以输入' + num + '字');
//         $('.course_description_span').css('color', 'grey');
//     }
//     if (num < 0) {
//         num = -num;
//         $('.course_description_span').html('您的输入已超出' + num + '字');
//         $('.course_description_span').css('color', '#f00');

//     };
//     return finalNum;
// }

// var maxInputNoti = function(node) {
//     var node = node;
//     checkTextleng($(node));
//     $(node).keyup(function(argument) {
//         checkTextlength($(node));
//     });
// };

// $('.course_description textarea').bind('keyup', function() { maxInputNoti($('.course_description').find('textarea')) });


// var checkTextlen = function(node) {
//     var finalNum = 0;
//     var textLength = $(node).val().length;
//     var num = 200 - textLength;
//     finalNum = num;
//     if (num >= 0) {
//         $('.advantage_span').html('还可以输入' + num + '字');
//         $('.advantage_span').css('color', 'grey');
//     }
//     if (num < 0) {
//         num = -num;
//         $('.advantage_span').html('您的输入已超出' + num + '字');
//         $('.advantage_span').css('color', '#f00');

//     };
//     return finalNum;
// }

// var maxInputNot = function(node) {
//     var node = node;
//     checkTextlen($(node));
//     $(node).keyup(function(argument) {
//         checkTextlen($(node));
//     });
// };

// $('.advantage textarea').bind('keyup', function() { maxInputNot($('.advantage').find('textarea')) });





// var checkTextle = function(node) {
//     var finalNum = 0;
//     var textLength = $(node).val().length;
//     var num = 5000 - textLength;
//     finalNum = num;
//     if (num >= 0) {
//         $('.placeholder').html('还可以输入' + num + '字');
//         $('.placeholder').css('color', 'grey');
//     }
//     if (num < 0) {
//         num = -num;
//         $('.placeholder').html('您的输入已超出' + num + '字');
//         $('.placeholder').css('color', '#f00');

//     };
//     return finalNum;
// }

// var maxInputNo = function(node) {
//     var node = node;
//     checkTextle($(node));
//     $(node).keyup(function(argument) {
//         checkTextlength($(node));
//     });
// };

// $('.course_details textarea').bind('keyup', function() { maxInputNo($('.course_details').find('textarea')) });


// var checkTextl = function(node) {
//     var finalNum = 0;
//     var textLength = $(node).val().length;
//     var num = 1000 - textLength;
//     finalNum = num;
//     if (num >= 0) {
//         $('.abstract_span').html('还可以输入' + num + '字');
//         $('.abstract_span').css('color', 'grey');
//     }
//     if (num < 0) {
//         num = -num;
//         $('.abstract_span').html('您的输入已超出' + num + '字');
//         $('.abstract_span').css('color', '#f00');

//     };
//     return finalNum;
// }

// var maxInputN = function(node) {
//     var node = node;
//     checkTextl($(node));
//     $(node).keyup(function(argument) {
//         checkTextlength($(node));
//     });
// };

// $('.abstract textarea').bind('keyup', function() { maxInputN($('.abstract').find('textarea')) });