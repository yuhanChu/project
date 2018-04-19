function cyh_school() {
        //老师认证-选择学校
    $(document).on('click', '.school #organizationNameHead', function() {
        layer1 = layer.open({
            type: 1,
            area: ['710px', '445px'], //定义弹窗大小
            closeBtn: false, // 去除关闭按钮
            title: false, //去除标题
            shade: [0.7, '#000'], //遮罩层颜色与透明度
            skin: '', //加上边框 layui-layer-rim
            shadeClose: false, //点击遮罩关闭
            shift: 1, //0-6的动画形式，-1不开启
            content: $('#school_selected') //这里content是一个DOM
        });

        //自设关闭按钮
        $('#pagebtn').on('click', function() {
            layer.close(layer1);
            var val = $('#relate_id').val();
            if (val) {
                $('#relate_id').siblings('.wrong-tip').css('display', 'none');
                $('#relate_id').siblings('.right-tip').css('display', 'block');
            } else {
                $('#relate_id').siblings('.wrong-tip').css('display', 'block');
                $('#relate_id').siblings('.right-tip').css('display', 'none');
            }
        });
        //加载地区-国家
        $.ajax({
            type: 'post',
            url: "/pubblico/Areaport",
            dataType: 'json',
            data: {
                code: 'school'
            },
            success: function(data) {
                console.log(data);
                var par = $('.school-content-top-right .content-top-right-country .all-school-country'),
                    _data = data.data;
                $(par).empty();
                for (var i = 0, len = _data.length; i < len; i++) {
                    $('<li>', {
                        'class': 'area-list school-country',
                        'id': _data[i].id,
                        'jid': _data[i].jid,
                        'idkey': _data[i].idkey
                    }).html(_data[i].name).appendTo(par)
                }
            }
        });
    });

    //快速查找
    $('.school-content-top-left .search-school').on('focus', function() {
        resetList();
    });
    $('.school-content-top-left .search-school').keyup(function() {
        var nameVal = $(this).val(),
            idVal = $('.school-province-cur').attr('id') ? $('.school-province-cur').attr('id') : $('.school-country-cur').attr('id'),
            pageVal = $('.content-bottom-page .active a').html();
        //加载学校信息
        console.log(nameVal, idVal, pageVal);
        loadSchoolName(nameVal, idVal, pageVal, code);
    });

    //点击地区框，弹出选项框
    $(document).on('click', '.school-content-top-right .right-con', function() {
        $(this).find('.area-content').css('display', 'block');
    });

    //选择国家并获取省份
    $(document).on('click', '.right-con .school-country', function(e) {
        var val = $(this).html(),
            seaVal = $('.school-content-top-left .search-school').val(),
            idVal = $(this).attr('id'),
            jidVal = $(this).attr('jid'),
            pageVal = $('.content-bottom-page .active a').html();
        $(this).parent().prev().val(val);
        $(this).parent().prev().attr('id', idVal);
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        resetList();
        //获取省份并加载
        $.ajax({
            type: 'post',
            url: "/pubblico/Areaport",
            dataType: 'json',
            data: {
                jid: jidVal,
                pid: idVal,
                zid: 0,
                code: 'school'
            },
            success: function(data) {
                console.log(data);
                var par = $('.school-content-top-right .content-top-right-province .all-school-province'),
                    _data = data.data;
                $(par).empty();
                $('.school-content-top-right .content-top-right-province .school-province-cur').val('');
                if (_data.length > 0) {
                    for (var i = 0, len = _data.length; i < len; i++) {
                        $('<li>', {
                            'class': 'area-list school-province',
                            'id': _data[i].id,
                            'jid': _data[i].jid,
                            'idkey': _data[i].idkey
                        }).html(_data[i].name).appendTo(par);
                    }
                    $('.school-content-top-right .content-top-right-province .school-province-cur').attr({
                        value: '',
                        placeholder: "请选择省份"
                    }).css('cursor', 'pointer');
                } else {
                    $('.school-content-top-right .content-top-right-province .school-province-cur').attr({
                        value: '',
                        placeholder: "系统暂未添加省份"
                    }).css('cursor', 'not-allowed');
                }

            }
        });

        //获取学校并加载
        code = 1;
        loadSchoolName(seaVal, idVal, pageVal, code);
    });

    //选择省份并获取学校
    $(document).on('click', '.right-con .school-province', function(e) {
        var val = $(this).html(),
            seaVal = $('.school-content-top-left .search-school').val(),
            idVal = $(this).attr('id'),
            pageVal = $('.content-bottom-page .active a').html();
        $(this).parent().prev().val(val);
        $(this).parent().prev().attr('id', idVal);
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        resetList();
        //获取学校并加载
        code = '';
        loadSchoolName(seaVal, idVal, pageVal, code);
    });

    //点击空白-关闭地区选择的下拉菜单
    $(document).mouseup(function(e) {
        var _con = $('.school-content-top-right .area-content'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            _con.css('display', 'none'); // 点击空白关闭
        }
    });


    /*关闭下拉菜单*/
    function resetList() {
        $('.area-content').css('display', 'none');
    }
    loadSchoolName();
    /*加载学校信息*/
    function loadSchoolName(name, id, page, code) {
        $('.school-content-bottom .content-bottom-list').find('.bottom-list').remove();
        $('.school-content-bottom .content-bottom-list .bottom-list-empty').hide();
        $('.school-content-bottom .content-bottom-list .bottom-list-loading').show();
        $.ajax({
            url: '/api/publico/selschool/selsc',
            type: 'post',
            dataType: 'json',
            data: {
                name: name,
                area: id,
                page: page,
                code: code
            },
            success: function(data) {
                console.log(data);
                $('.school-content-bottom .content-bottom-list .bottom-list-loading').hide();
                $('.school-content-bottom .content-bottom-list .bottom-list-empty').hide();
                var par = $('.school-content-bottom .content-bottom-list'),
                    _data = data.data.items;
                if (_data.length > 0) {
                    for (var i = 0, len = _data.length; i < len; i++) {
                        $('<li>', {
                            'class': 'bottom-list',
                            'title': _data[i].name,
                            'id': _data[i].id,
                            'idkey': _data[i].idkey
                        }).html(_data[i].name).appendTo(par)
                    }
                    //加载分页
                    var allPage = data.data.total_pages;
                    var showPage = allPage > 5 ? 5 : allPage;
                    $.paging.bind({
                        'container': '.school-content-bottom .content-bottom-page',
                        'clickCallback': pageFunction1,
                        'pagecount': allPage,
                        'endPoint': showPage
                    }); //pageFunction1(thisA, data.data, code)
                    $('.school-content-bottom .content-bottom-page').show();
                } else {
                    $('.school-content-bottom .content-bottom-list .bottom-list-empty').show();
                    $('.school-content-bottom .content-bottom-page').hide();
                }

            }
        });
    }

    /*分页回调函数*/
    function pageFunction1(thisA, data) {
        console.log(data);
        var nameVal = $('.school-content-top-left .search-school').val(),
            idVal = $('.right-con .school-province-cur').attr('id'),
            pageVal = data.pagenumber;
        //内容为空的页面隐藏
        $('.school-content-bottom .content-bottom-list .bottom-list-empty').hide();

        //清空内容
        $('.school-content-bottom .content-bottom-list').find('.bottom-list').remove();

        //添加加载状态
        $('.school-content-bottom .content-bottom-list .bottom-list-loading').show();

        setTimeout(function() {
            $.ajax({
                url: '/api/publico/selschool/selsc',
                type: 'post',
                dataType: 'json',
                data: {
                    name: nameVal,
                    area: idVal,
                    page: pageVal,
                    code: code
                },
                success: function(data) {
                    console.log(data);
                    $('.school-content-bottom .content-bottom-list .bottom-list-loading').hide();
                    var par = $('.school-content-bottom .content-bottom-list'),
                        _data = data.data.items;
                    if (_data.length > 0) {
                        for (var i = 0, len = _data.length; i < len; i++) {
                            $('<li>', {
                                'class': 'bottom-list',
                                'title': _data[i].name
                            }).html(_data[i].name).appendTo(par)
                        }
                    } else {
                        $('.school-content-bottom .content-bottom-list .bottom-list-empty').show();
                        $('.school-content-bottom .content-bottom-page').hide();
                    }

                }
            });
        });
    }

    //选择学校并加载学校
    $(document).on('click', '.school-content-bottom .content-bottom-list .bottom-list', function() {
        var thisVal = $(this).html(),
            thisId = $(this).attr('id'),
            thisIdKey = $(this).attr('idKey');
        $('.school #organizationNameHead').val(thisVal).attr({
            'dataid': thisId,
            'dataidkey': thisIdKey
        });
        layer.close(layer1);
        if ($('#relate_id').val()) {
            var thisVal = $('#relate_id').val(),
                dataId = $('#relate_id').attr('dataid'),
                dataIdKey = $('#relate_id').attr('dataidkey'),
                as = window.LS.get('teaInstitutions'),
                _as = as ? JSON.parse(as) : {};
            _as['relate_id'] = thisVal;
            _as['relateId'] = dataId;
            _as['relateIdKey'] = dataIdKey;
            window.LS.set('teaInstitutions', JSON.stringify(_as), 24);
            $('#relate_id').siblings('.wrong-tip').css('display', 'none');
            $('#relate_id').siblings('.right-tip').css('display', 'block');
        } else {
            $('#relate_id').siblings('.wrong-tip').css('display', 'block');
            $('#relate_id').siblings('.right-tip').css('display', 'none');
        }
    });





    //学校种类切换
    $(document).on('click', '.school-select-content .all-school-title .school-list', function() {
        $(this).siblings().removeClass('cur');
        $(this).addClass('cur');
    });
}