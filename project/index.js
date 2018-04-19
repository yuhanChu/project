var pageIndex = 1; //页索引 
var where = " where 1=1";
$(function() {
        BindData();
        // GetTotalCount(); //总记录条数 
        //GetPageCount(); //总页数绑定 
        //第一页按钮click事件 
        $("#first").click(function() {
            pageIndex = 1;
            $("#lblCurent").text(1);
            BindData();
        });
        //上一页按钮click事件 
        $("#previous").click(function() {
            if (pageIndex != 1) {
                pageIndex--;
                $("#lblCurent").text(pageIndex);
            }
            BindData();
        });
        //下一页按钮click事件 
        $("#next").click(function() {
            var pageCount = parseInt($("#lblPageCount").text());
            if (pageIndex != pageCount) {
                pageIndex++;
                $("#lblCurent").text(pageIndex);
            }
            BindData();
        });
        //最后一页按钮click事件 
        $("#last").click(function() {
            var pageCount = parseInt($("#lblPageCount").text());
            pageIndex = pageCount;
            BindData();
        });
        //查询 
        $("#btnSearch").click(function() {
            where = " where 1=1";
            var csbh = $("#txtCSBH").val();
            if (csbh != null && csbh != NaN) {
                pageIndex = 1;
                where += " and csbh like '%" + csbh + "%'";
            }
            BindData();
        });
    })
    //AJAX方法取得数据并显示到页面上 
function BindData() {
    $.ajax({
        type: "get", //使用get方法访问后台 
        dataType: "json", //返回json格式的数据 
        url: "../AjaxService/JgcsService.ashx", //要访问的后台地址 
        data: { "pageIndex": pageIndex, "where": where }, //要发送的数据 
        ajaxStart: function() { $('#c_load').css('display', "none"); },
        complete: function() { $('#c_load').css('display', "none"); }, //AJAX请求完成时隐藏loading提示 
        success: function(data) { //msg为返回的数据，在这里做数据绑定 

            var html = '';
            obj = data;
            for (var k in obj) {
                html += '<div class = "order_cont">';
                html += '<div class = "ord_tit">';
                html += '<span> 订单号： ' + obj[k].dingdan + ' </span> <samp> ' + obj[k].time + ' </samp> </div> <div class = "order_content">';
                html += '<div class = "order_1">';
                html += '<img src = ' + obj[k].img + '>';
                html += '<a href = "" class = "ord_1">';
                html += '<span class = "ord_1_tit"> ' + obj[k].p + ' </span> <span class = "ord_1_bk"> <samp class = "icon-xz">&#xe623;</samp>' + obj[k].bk1 + '</span>';
                html += '<span class = "ord_1_bk"> <samp class = "icon-xz">&#xe622;</samp>' + obj[k].bk2 + '</span>';
                html += '</a> </div> <div class = "order_2"> ' + obj[k].name + ' </div> <div class = "order_2"> ' + obj[k].money + ' </div> <div class = "order_2"> ' + obj[k].da + ' </div> <div class = "order_2"> <a href = ""> 查看详情 </a></div>';
                html += '<div class = "clear"> </div> </div> </div>';
            }

            $('.gs-paging').before(html);

        },
        error: function() {
                var t = document.getElementById("tb_body"); //获取展示数据的表格 
                while (t.rows.length != 0) {
                    t.removeChild(t.rows[0]); //在读取数据时如果表格已存在行．一律删除 
                }
                alert("加载数据失败");
            } //加载失败，请求错误处理 
            //ajaxStop:$("#load").hide() 
    });
    GetTotalCount();
    GetPageCount();
    bindPager();
}
// 页脚属性设置 
function bindPager() {
    //填充分布控件信息 
    var pageCount = parseInt($("#lblPageCount").text()); //总页数 
    if (pageCount == 0) {
        document.getElementById("lblCurent").innerHTML = "0";
    } else {
        if (pageIndex > pageCount) {
            $("#lblCurent").text(1);
        } else {
            $("#lblCurent").text(pageIndex); //当前页 
        }
    }
    document.getElementById("first").disabled = (pageIndex == 1 || $("#lblCurent").text() == "0") ? true : false;
    document.getElementById("previous").disabled = (pageIndex <= 1 || $("#lblCurent").text() == "0") ? true : false;
    document.getElementById("next").disabled = (pageIndex >= pageCount) ? true : false;
    document.getElementById("last").disabled = (pageIndex == pageCount || $("#lblCurent").text() == "0") ? true : false;
}
//AJAX方法取得总页数 
function GetPageCount() {
    var pageCount;
    $.ajax({
        type: "get",
        dataType: "text",
        url: "../AjaxService/JgcsService.ashx",
        data: { "wherePageCount": where }, //"wherePageCount" + where,个人建议不用这种方式 
        async: false,
        success: function(msg) {
            document.getElementById("lblPageCount").innerHTML = msg;
        }
    });
}
//AJAX方法取得记录总数 
function GetTotalCount() {
    var pageCount;
    $.ajax({
        type: "get",
        dataType: "text",
        url: "../AjaxService/JgcsService.ashx",
        data: { "whereCount": where },
        async: false,
        success: function(msg) {
            document.getElementById("lblToatl").innerHTML = msg;
        }
    });
}

var page = 1;
var list = 5;

function getScenic(url) {
    $("#more").removeProp("disabled");
    $.post(url, { page: page, list: list }, function(data) {
        if (data == null) {
            $("#more").text('到头了，亲');
            $("#more").prop("disabled", "disabled");
            return;
        }

        var html = "";
        for (var i in data) {
            html += '<div class="float both-9 pos tour"><a href="/tingjing/' + data[i].scenic_id + '.html">';
            html += '<div class="grid"><figure class="effect-lily">';
            var img = data[i].img ? data[i].img : "/statics/Home/images/plone6.jpg";
            html += '<img src="' + img + '" alt="' + data[i].name + '" title="' + data[i].name + '" width="100%"/>';
            html += '<figcaption><div><h2>' + data[i].name + '</h2><p>' + data[i].message + '</p></div></figcaption></figure>';
            html += '<div class="hot-bg"></div></div></a></div>';
        }
        $("#tour").append(html);
    }, 'json');
    page++;
}

/*< div class = "order_cont" >
    < div class = "ord_tit" >
    < span > 订单号： 2016052123207326 < /span> < samp > 2016 /
05 / 21 20: 42 < /samp> < /div > < div class = "tit" > 子订单号： 2016052123207326 - 30125 < /div> < div class = "order_content" > < div class = "order_1" >
    < img src = "/static/media/image/3.png" >
    < a href = ""
class = "ord_1" >
    < span class = "ord_1_tit" > 领导力－ 行动中的团队和领导者 < /span> < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe623; < /samp > 本科证书 < /span > < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe622; < /samp>3.0学分</span >
< /a> < /div > < div class = "order_2" > 李磊 < /div> < div class = "order_2" > ¥1000.00 < /div > < div class = "order_2" > 待付款 < /div> < div class = "order_2" > < a href = "" > 查看详情 < /a > < /div > < div class = "clear" > < /div> < /div > < div class = "xian" > < /div> < div class = "tit" > 子订单号： 2016052123207326 - 30125 < /div > < div class = "order_content" >
    < div class = "order_1" >
    < img src = "/static/media/image/3.png" >
    < a href = ""
class = "ord_1" >
    < span class = "ord_1_tit" > 领导力－ 行动中的团队和领导者 < /span> < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe623; < /samp > 本科证书 < /span > < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe622; < /samp>3.0学分</span >
< /a> < /div > < div class = "order_2" > 李磊 < /div> < div class = "order_2" > ¥1000.00 < /div > < div class = "order_2" > 待付款 < /div> < div class = "order_2" > < a href = "" > 查看详情 < /a > < /div > < div class = "clear" > < /div> < /div > < /div> -->
    <!-- <div class="order_cont">
    < div class = "ord_tit" >
    < span > 订单号： 2016052123207326 < /span> < samp > 2016 /
05 / 21 20: 42 < /samp> < /div > < div class = "order_content" >
    < div class = "order_1" >
    < img src = "/static/media/image/3.png" >
    < a href = ""
class = "ord_1" >
    < span class = "ord_1_tit" > 领导力－ 行动中的团队和领导者 < /span> < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe623; < /samp > 本科证书 < /span > < span class = "ord_1_bk" > < samp class = "icon-xz" > & #xe622; < /samp>3.0学分</span >
< /a> < /div > < div class = "order_2" > 李磊 < /div> < div class = "order_2" > ¥1000.00 < /div > < div class = "order_2" > 待付款 < /div> < div class = "order_2" > < a href = "" > 查看详情 < /a > < /div > < div class = "clear" > < /div> < /div > < /div> -->

<!-- <div class="xfsp-page order_page">
< a href = ""
class = "afaot" >
    < samp class = "icon-xz" > & #xe61e; < /samp> < /a > < a class = "i" > 1 < /a> < a href = "" > 2 < /a > < a href = "" > 3 < /a> < a href = "" > ... < /a > < a href = "" > 16 < /a> < a href = ""
class = "afaot" >
    < samp class = "icon-xz" > & #xe61f; < /samp> < /a > < div class = "fina_so" >
    < input type = "text"
class = "so_inp" >
    < input type = "button"
value = "Go"
class = "so_an" >
    < /div> < /div >*/

// 头像上传
/*var isIE = /msie/i.test(navigator.userAgent) && !window.opera;

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
if (size > 3000) {
    alert("附件不能大于3M");
} else {
    $.ajaxFileUpload({
        url: "/api/upload/image",
        type: "POST",
        secureuri: false,
        fileElementId: "UploadImage",
        dataType: "json",
        success: function(data) {
            if (data.code == 1) {
                $(".mooc_has_upload").css("display", "block");
                $(".mooc_has_upload").find('img').attr("src", data.data.thisUrl);
            }
        }
    })
}*/

< tr >
    < td >
    < label class = "pri_lab" >
    < input type = "checkbox" >
    < /label> < /td> < td >
    < div class = "cls_tab_cont" > 2030 k1 < /div> < /td> < td >
    < div class = "cls_tab_cont" > 中国语言文学 < /div> < /td> < td >
    < div class = "cls_tab_cont" > < span class = "cls_tab_font1" > 文学 < /span></div >
    < /td> < td >
    < div class = "cls_tab_cont" > 4 年 < /div> < /td> < td >
    < div class = "cls_tab_cont" > 30 < /div> < /td> < td >
    < div class = "cls_tab_cont" > 人文学院 < /div> < /td> < td >
    < div >
    < a class = "cls_tab_btn cls_tab_btnedit"
href = "#" > < i class = "icon-xz" > & #xe626; < /i><span>编辑</span > < /a> < a class = "cls_tab_btn cls_tab_btnset"
href = "#" > < i class = "icon-xz" > & #xe627; < /i><span>管理</span > < /a> < a class = "cls_tab_btn cls_tab_btnshare"
href = "#" > < i class = "icon-xz" > & #xe614; < /i><span>删除</span > < /a> < /div> < /td> < /tr>


<!-- <a href="" class="afaot">
                                <samp class="icon-xz"></samp>
                            </a>
                            <a class="i">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">...</a>
                            <a href="">16</a>
                            <a href="" class="afaot">
                                <samp class="icon-xz"></samp>
                            </a>
                            <div class="fina_so">
                                <input type="text" class="so_inp">
                                <input type="button" value="Go" class="so_an">
                            </div> -->





                            <div class="order_cont">
                                        <div class="ord_tit">
                                            <span>订单号：2016052123207326</span>
                                            <samp>2016/05/21 20:42</samp>
                                        </div>
                                        <div class="cc_con_box clearfi">
                                            <div class="cc_c_f" style="width: 54%">
                                                <div class="cc_bian_box">
                                                    <div id='cc_h' class="clearfi" style="border-bottom: 1px solid #e9e9e9;">
                                                        <div class="order_1">
                                                            <img src="/static/media/image/3.png">
                                                            <a href="" class="ord_1">
                                                                <span class="ord_1_tit">领导力－行动中的团队和领导者 </span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>本科证书</span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>3.0学分</span>
                                                            </a>
                                                        </div>
                                                        <div class="order_2" style="padding: 16px 0;width: 49%;text-align:right;">¥ 1000.00</div>
                                                    </div>
                                                    <div class="clearfi" style="border-bottom: 1px solid #e9e9e9;">
                                                        <div class="order_1">
                                                            <img src="/static/media/image/3.png">
                                                            <a href="" class="ord_1">
                                                                <span class="ord_1_tit">领导力－行动中的团队和领导者 </span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>本科证书</span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>3.0学分</span>
                                                            </a>
                                                        </div>
                                                        <div class="order_2" style="padding: 16px 0;width: 49%;text-align:right;">¥ 1000.00</div>
                                                    </div>
                                                    <div class="clearfi" style="border-bottom: 1px solid #e9e9e9;">
                                                        <div class="order_1">
                                                            <img src="/static/media/image/3.png">
                                                            <a href="" class="ord_1">
                                                                <span class="ord_1_tit">领导力－行动中的团队和领导者 </span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>本科证书</span>
                                                                <span class="ord_1_bk"><samp class="icon-xz"></samp>3.0学分</span>
                                                            </a>
                                                        </div>
                                                        <div class="order_2" style="padding: 16px 0;width: 49%;text-align:right;">¥ 1000.00</div>
                                                    </div>
                                                </div>
                                                <div class="cyh_shou" style="text-align:center;height: 28px;line-height:28px;"><span id="cyh_z" style="cursor: pointer;color:#666666;">展开</span></div>
                                            </div>
                                            <div class="cc_c_f" style="width:15%;">
                                                <div style="height: 100%;border:1px solid #e9e9e9;border-bottom: none;border-top:none;">
                                                    <div style="padding-left: 12px; text-align: center;line-height:20px;">
                                                        <strong style="display:block;padding-top:10px;">¥ 1000.00</strong>
                                                        <strong>$ 800.00</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cc_c_f" style="width: 15%">
                                                <div class="col_red cc_borde" style="border-left: none;text-align:center;">待付款</div>
                                            </div>
                                            <div class="cc_c_f" style="width: 15%">
                                                <div class="order_2"><a href="" style="margin:25px 0 0 80px;">马上支付</a></div>
                                            </div>
                                        </div>
                                    </div>