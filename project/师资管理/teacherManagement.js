function teacherManagement() {

    // 导航切换
    $('.nav li').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    // 查看弹窗
    $(document).on('click', '.look_btn,.see_btn', function() {
        layer1 = layer.open({
            type: 1,
            area: ['362px', '432px'],
            shade: false,
            title: false,
            shade: [0.7, '#000'],
            closeBtn: 0,
            content: $('#look')

        });
    });
    $('.look_btn_y').on('click', function() {
        layer.close(layer1);
    });

    // 关闭弹窗
    $('.close_layer').on('click', function() {
        layer.close(layer1);
    });

    // 拒绝弹窗
    $(document).on('click', '.refuse_btn', function() {
        layer1 = layer.open({
            type: 1,
            area: ['512px', '220px'],
            shade: false,
            title: false,
            shade: [0.7, '#000'],
            closeBtn: 0,
            content: $('#relevance_sq')

        });
    });
    $('#relevance_sq .relevance_ts_btn_no').on('click', function() {
        layer.close(layer1);
        layer1 = layer.open({
            type: 1,
            area: ['512px', '220px'],
            shade: false,
            title: false,
            shade: [0.7, '#000'],
            closeBtn: 0,
            content: $('#relevance_sq')

        });
    });
    // 拒绝提交按钮
    $('.relevance_sq_btn').on('click', function() {

    });

    // 同意弹窗
    $(document).on('click', '.agree_btn', function() {
        layer1 = layer.open({
            type: 1,
            area: ['254px', '160px'],
            shade: false,
            title: false,
            shade: [0.7, '#000'],
            closeBtn: 0,
            content: $('#reminder')

        });
    });

    // 续约弹窗
    $(document).on('click', '.renewal_btn', function() {
        layer1 = layer.open({
            type: 1,
            area: ['254px', '160px'],
            shade: false,
            title: false,
            shade: [0.7, '#000'],
            closeBtn: 0,
            content: $('#signed')

        });
    });
    $('#signed .relevance_ts_btn_no').on('click',function(){
    	layer.close(layer1);
    });
}
