function sign_up() {
    $('.certificate_add > span').on('click', function() {
        $(this).parents('.certificate_add').hide().siblings('.certificate_add_box').show();
    });
    $('.certificate_add_button button').on('click', function() {
        $(this).parents('.certificate_add_box ').hide().siblings('.certificate_list').show();
    });
    $('.certificate_add_button span').on('click', function() {
        $(this).parents('.certificate_add_box ').hide().siblings('.certificate_add').show();
    });
    $('.certificate_list span').on('click', function() {
        $(this).parents('.certificate_list').hide().siblings('.certificate_add_box ').show();
    });
    $('button').on('click', function() {
        return false;
    });
    $("input").on('change', function() {
        $(window).bind('beforeunload', function() {
            var warimg = "确认关闭吗？";
            return warimg;
        });

    });
    $('.name input').on('blur', function() {
        var name = $('[name = "name"]').val();
        var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
        if (!pattern.test(name)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('姓名不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确姓名');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });

    $('.citizen input').on('blur', function() {
        var citizen_id = $('[name = "citizen_id"]').val();
        if (!id_card(citizen_id)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('身份证不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确身份证');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });

    $('.mobile input').on('blur', function() {
        var mobile = $('[name = "mobile"]').val();
        var re = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
        if (!re.test(mobile)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('手机号不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确手机号');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');

        }
    });
    $('.english input').on('blur', function() {
        var english = $('[name = "english"]').val();
        var eng = /^[a-zA-Z]+$/g;
        if (!eng.test(english)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('英文名不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确英文名');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });

    $('.birthdate input').on('blur', function() {
        var birthdate = $('[name = "birthdate"]').val();
        var reg = /^(\d{4})(-)(\d{2})(-)(\d{2})$/;
        if (!reg.test(birthdate)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('生日不能为空');
            } else {
                $(this).next('span').addClass('no').html('按格式输入生日/1992-06-04');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });
    $('.e-mail input').on('blur', function() {
        var e_mail = $('[name = "e-mail"]').val();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(e_mail)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('邮箱不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确邮箱');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });
    $('.address input').on('blur', function() {
        var address = /([^\x00-\xff]|[A-Za-z0-9_])+/;
        var mailing = $('[name = "mailing"]').val();
        if (!address.test(mailing)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('地址不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确地址');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });
    $('.code input').on('blur', function() {
        var postal = $('[name = "postal"]').val();
        var code = /[0-9]\d{5}(?!\d)/;
        if (!code.test(postal)) {
            if ($(this).val() === "") {
                $(this).next('span').addClass('no').html('地址不能为空');
            } else {
                $(this).next('span').addClass('no').html('输入正确地址');
            }
        } else {
            $(this).next('span').removeClass('no').addClass('yes').html('');
        }
    });
    $('.subit button').on('click', function() {
        var name = $('[name = "name"]').val();
        var english = $('[name = "english"]').val();
        var citizen_id = $('[name = "citizen_id"]').val();
        var mobile = $('[name = "mobile"]').val();
        var birthdate = $('[name = "birthdate"]').val();
        var e_mail = $('[name = "e-mail"]').val();
        var mailing = $('[name = "mailing"]').val();
        var postal = $('[name = "postal"]').val();
        var kindergarten = $('.kindergarten_input textarea').val();
        var signature = $('.signature_input input').val();
        var re = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
        var data = $('#personal_data').serialize();
        data += '&' + 'comments=' + kindergarten + '';
        data += '&' + 'applicant=' + signature + '';
        var eng = /^[a-zA-Z]+$/g;
        var id = /^\d{17}(\d|x)$/i;
        var reg = /^(\d{4})(-)(\d{2})(-)(\d{2})$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var address = /([^\x00-\xff]|[A-Za-z0-9_])+/;
        var code = /[0-9]\d{5}(?!\d)/;
        var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
        $.ajax({
            url: "01.json",
            type: 'post',
            data: data,
            beforeSend: function() {
                if (!pattern.test(name)) {
                    $('.name span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#name";
                    return false;
                } else {
                    $('.name span').removeClass('no').html('');
                    window.location.hash = "/";
                }
                if (!eng.test(english)) {
                    $('.english span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#english";
                    return false;
                } else {
                    $('.english span').removeClass('no').html('');
                    window.location.hash = "/";
                }
                if ($('#card').val() === "身份证") {
                    if (!id_card(citizen_id)) {
                        $('.citizen_input span').addClass('no').html('请输入正确的姓名');
                        window.location.hash = "#citizen";
                        return false;
                    } else {
                        $('.citizen_input span').removeClass('no').html('');
                        window.location.hash = "/";
                    }
                }
                if (!re.test(mobile)) {
                    $('.name span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#mobile";
                    return false;
                } else {
                    $('.birthdate span').removeClass('no').html('');
                    window.location.hash = "/";
                }

                if (!reg.test(birthdate)) {
                    $('.birthdate span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#birthdate";
                    return false;
                } else {
                    $('.birthdate span').removeClass('no').html('');
                    window.location.hash = "/";
                }
                if (!filter.test(e_mail)) {
                    $('.e-mail span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#e-mail";
                    return false;
                } else {
                    $('.e-mail span').removeClass('no').html('');
                    window.location.hash = "/";
                }
                if (!address.test(mailing)) {
                    $('.address  span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#address";
                    return false;
                } else {
                    $('.address span').removeClass('no').html('');
                    window.location.hash = "/";
                }
                if (!code.test(postal)) {
                    $('.code span').addClass('no').html('请输入正确的姓名');
                    window.location.hash = "#code";
                    return false;
                } else {
                    $('.code span').removeClass('no').html('');
                    window.location.hash = "/";
                }

                window.location = window.location;


            },
            success: function(data) {

            },
            error: function() {

            }
        });

        $(window).unbind('beforeunload');
    });
    $('.close').on('click', function() {
        $('#academic_reference_task').modal('hide');
    });
    $(function() {
        $('label').click(function() {
            var radioId = $(this).attr('name');
            $(this).addClass('checked').siblings('label').removeAttr('class');
            $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');

        });
    });
}

function upImg(str, url) {
    var ImgObj = new Image();
    var allImg = ".jpg|.jpeg|.gif|.bmp|.png|"; //图片格式
    var type = str.value.substr(str.value.lastIndexOf(".")).toLowerCase();
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    alert(fso.getFile(str.value).size);
    if (allImg.indexOf(type + "|") == -1) {
        alert("请上传格式为.jpg.jpeg.gif.bmp.png的图片");
        return false;
    }
    var _src = $(str).siblings('.show_certificate').find('img')[0];
    var localName = $(str).parents('form').parent().attr('id');
    var _thisId = $(str).attr('id');
    // var _subPic = $(str).siblings('.sub-pic').find('.loading-pic');
    // $(str).siblings('.sub-pic').css('background', '#f4f4f4').find('.loading-pic').css('display', 'block');

    $.ajaxFileUpload({
        url: url,
        type: "POST",
        secureuri: false,
        fileElementId: str.id,
        dataType: "json",
        success: function(data) {
            //console.log(data);
            if (data.code == 1) {
                var imgUrl = data.data.thisUrl;
                var imgKey = data.data.urlKey;
                $(_src).attr({ 'src': imgUrl, 'urlKey': imgKey }).css({ 'width': '100%', 'opacity': 1, 'filter': 'alpha(opacity=100);' });
                $(_subPic).css('display', 'none');
                var as = window.LS.get(localName);
                var _as = as ? JSON.parse(as) : {};
                _as[_thisId] = imgUrl;
                _as[_thisId + 'Key'] = imgKey;
                window.LS.set(localName, JSON.stringify(_as), 24);
            } else {
                alert(data.message);
            }
        }
    });
}

function id_card(id) {
    var idcard = String(id);
    var City = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91];
    var iSum = 0;
    var idcity = null;
    var idCardLength = idcard.length;
    //长度验证
    var patt1 = new RegExp(/^\d{17}(\d|x|X)$/i);
    var patt2 = new RegExp(/^\d{15}$/i);
    if (!patt1.test(idcard) && !patt2.test(idcard)) {
        return false;
    }
    //地区验证
    for (var i = 0; i < City.length; i++) {
        if (String(City[i]) === idcard.slice(0, 2)) {
            idcity = idcard.slice(0, 2);
            break;
        }
    }
    if (idcity == null) {
        return false;
    }
    // 15位身份证验证生日，转换为18位
    if (idCardLength == 15) {
        idcard = idcard.slice(0, 6) + "19" + idcard.slice(6, 15); //15to18
        var Bit18 = getVerifyBit(idcard); //算出第18位校验码
        idcard = idcard + Bit18;
    }
    // 判断是否大于2078年，小于1900年
    var year = idcard.slice(6, 10);
    if (year < 1900 || year > 2078) {
        return false;
    }
    //身份证编码规范验证
    var idcard_base = idcard.slice(0, 17);
    var idcard_v = idcard.slice(17, 18);
    if (idcard_v == 'x' || idcard_v == 'X') {
        idcard_v = 'X';
    }
    if (idcard_v !== getVerifyBit(idcard_base)) {
        return false;
    }
    //alert ('yes');
    return true;
    /* 身份证18位编码规则：dddddd yyyymmdd xxx y */
    function getVerifyBit(idcard_base) {
        if (idcard_base.length != 17) {
            return false;
        }
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验码对应值
        var verify_number_list = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        var checksum = 0;
        for (var i = 0; i < idcard_base.length; i++) {
            checksum += idcard_base.slice(i, i + 1) * factor[i];
        }
        var mod = checksum % 11;
        var verify_number = verify_number_list[mod];
        return verify_number;
    }
}
