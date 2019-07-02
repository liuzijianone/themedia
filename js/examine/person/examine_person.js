$(function () {
    //*********************************************表格的加载**************************************************************
    $('#table').bootstrapTable({
        ajax: function (request) {
            /*console.log("start");*/
            $.ajax({
                type: "GET",
                url: "/themedia/js/examine/person/data1.json",
                /*contentType: "application/json;charset=utf-8",*/
                dataType: "json",
                data: '',
                jsonp: 'callback',
                success: function (msg) {
                    request.success({
                        row: msg
                    });
                    $('#table').bootstrapTable('load', msg);
                    /*console.log("success");*/
                },
                error: function () {
                    alert("错误");
                }
            });
        },
        method: 'GET',                      //请求方式（*）
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        /*striped: true,    */                  //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        /* pageSize: rows,    */                 //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        showRefresh: true,                  //是否显示刷新按钮
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        cardView: false,                    //是否显示详细视图
        /*detailView: false,      */            //是否显示父子表

        //这里的表格数据分页是采用服务器分页的方式，根据搜索条件从服务器返回数据记录的，并使用了排序的处理方式，这里的queryParams参数就是提交到服务器端的参数了。
        //得到查询的参数
        queryParams: function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp = {
                rows: params.limit,                         //页面大小
                page: (params.offset / params.limit) + 1,   //页码
                sort: params.sort,      //排序列名
                sortOrder: params.order //排位命令（desc，asc）
            };
            return temp;
        },

        //表头
        columns: [{
            title: '姓名',
            field: 'name',
            align: 'center'
        }, {
            title: '注册方式',
            field: 'approach',
            align: 'center'
        }, {
            title: '身份证号',
            field: 'IdNumber',
            align: 'center',
        }, {
            title: '申请权限',
            field: 'authority',
            align: 'center',
        }, {
            title: '申请材料',
            field: 'material',
            align: 'center',
            valign: 'middle',
            width: 240,
            formatter: option0(),
        }, {
            title: '权限分配',
            field: 'assign',
            align: 'center',
            valign: 'middle',
            width: 240,
            formatter: option1,
        }, {
            title: '操作',
            field: 'operation',
            align: 'center',
            valign: 'middle',
            width: 240,
            formatter: option2,
        }],
        onLoadSuccess: function () {
        },
        onLoadError: function () {
            showTips("数据加载失败！");
        },
    });
});
function getSelectValue(){
    var a = $table.bootstrapTable('getSelections');//获取选中行的数据
    if(a.length > 0){
        console.log(a);
    }
}

//查看审核资料
function option0(value, row, index) {
    var id = value;
    var result2 = "";
    /*result2="<button type='button' class='btn btn-info btn-xs' data-toggle='modal' data-target='#myModal'><span class='glyphicon glyphicon-menu-hamburger'></span></button>";*/
    result2="<button type='button' class='btn btn-info btn-xs' onclick='queryInfo({id})'><span class='glyphicon glyphicon-menu-hamburger'></span></button>";
    return result2;
}
//角色选择
function option1(value, row, index) {
    var id = value;
    var result = "";
    result += "<select id='rol' class=\"form-control\">" +
        "<option value='0'>普通用户</option>" +
        "<option value='1'>认证用户</option>" +
        "<option value='2'>特级用户</option>" +
        "</select>";
    return result;
}
//保存和提交操作
function option2(value, row, index) {
    var result2 = "";
/*result2 += "<button type='button' class='btn btn-primary btn-xs' data-toggle='modal' data-target='#saveModal'><span class='glyphicon glyphicon-floppy-disk'></span></button>&nbsp&nbsp&nbsp";*/
    result2 += "<button type='button' class='btn btn-danger btn-xs' onclick='return saveInfo({id})'>" +
        "<span class='glyphicon glyphicon-floppy-disk'></span></button>&nbsp&nbsp&nbsp";
    result2 += "<button type='button' class='btn btn-danger btn-xs'onclick='return submitInfo({id})'>"+
        "<span class='glyphicon glyphicon-ok'></span></button>";
    return result2;
}
//查询审核资料
function queryInfo(id) {
    console.log('ajax请求之前');
    $.ajax({
        url : "/themedia/js/examine/person/data2.json",
        async : true,
        type : "POST",
        data : {
            "type" : "query",
            "id" : id
        },
        // 成功后开启模态框
        success : showQuery,
        error : function() {
            alert("请求失败");
        },
        dataType : "json"
    });
}
function showQuery(data) {
    $("#userOrg").val(data.org);
    $("#userImg").val(data.img);
    console.log("userOrg"+data.org+";;;;;userImg"+data.img);
    // 显示模态框
    $('#myModal').modal('show');
}
// 保存用户信息 需要得到用户的id 和对应的权限分配值传到后台
function saveInfo(id)
{
    if(!id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();
    alert("保存数据"+id);
    $.ajax(
        {
            url: "action/user_action.php",
            data:{"id":id, "act":"del"},
            type: "post",
            beforeSend:function(xhr)
            {
                xhr.setRequestHeader("userId",6);
            },
            success:function(data)
            {
                if(data > 0)
                {
                    console.log('SUCCESS: ');
                    alert('操作成功');

                }
                else
                {
                    $("#tip").html("<span style='color:red'>失败，请重试</span>");
                    alert('操作失败');
                }
            },
            error:function()
            {
                alert('请求出错');
            },
            complete:function()
            {
            }
        });
    return false;
}
// 提交用户信息 需要得到用户的id 和对应的权限分配值传到后台
function submitInfo(user_id)
{
    if(!user_id)
    {
        alert('用户ID不能为空！');
        return false;
    }
    alert("提交数据");
    // 异步提交数据到action/add_action.php页面
    $.ajax(
        {
            url: "action/user_action.php",
            data:{"form_data":form_data,"act":act},
            type: "post",
            beforeSend:function(xhr)
            {
                xhr.setRequestHeader("userId",6);
            },
            success:function(data)
            {
                if(data > 0)
                {
                    alert("OK！");
                }
                else
                {
                    alert('操作失败');
                }
            },
            error:function()
            {
                alert('请求出错');
            },
        });
    return false;
}