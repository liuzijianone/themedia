window.onload = function () {

    document.getElementById('submit_media').addEventListener('click', function () {
        // 读取 html
        let media_field=$("#media_field").val();/*领域*/
        let name=$(".com_name").val();/*机构名称*/
        let description=$("#sig").val(); /*签名描述*/
        let operator_name=$("#operator_name").val();
        let portrait=$("#inputfile").val();
        let id_number=$("#id_number").val();
        let organization_name=$("#organization_name").val();
        let organization_id=$("#organization_id").val();
        let internet_license_picture=$("#inputfile1").val();
        let license_picture=$("#inputfile2").val();
        let introduction=$("#introduction").val();
        let authentication_message = {
            "description": description,
            "enterprise_id":organization_id,
            "enterprise_name": organization_name,
            "head_portrait": portrait,
            "id_number": id_number,
            "internet_license_picture": internet_license_picture,
            "license_picture": license_picture,
            "media_field": media_field,
            "name": name,
            "operator_name": operator_name,
            "type": "自媒体",
            "user_id": 0
        };
        $.ajax({
            type: 'POST',
            url: "http://223.3.65.243:9095/user/user/authentication",
            //前段需要将传输的数据显示转换为json
            data: JSON.stringify(authentication_message),
            // dataType:'json',
            contentType:'application/json',
            success: function (responseData) {
                console.log('SUCCESS: ' + JSON.stringify(responseData));
                console.log(responseData+JSON.stringify(authentication_message));
            },
            //测试时直接带上userId的header，如实正式使用应该是token
            beforeSend:function(xhr){
                xhr.setRequestHeader("userId",6);
            },
            error: function (error) {
                console.log('ERROR', error);
            }
        });

    }, false);
};

