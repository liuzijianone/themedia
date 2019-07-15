window.onload = function () {

        document.getElementById('save').addEventListener('click', function () {
            // 读取 html


            let new_name=$("#text1").val();
            let new_phone=$("#text3").val();
            let new_intro=$("#text2").val();
            let new_email=$("#text4").val();
            let new_sign=$("#text5").val();
            let field=$("#field").val();
            /*console.log(etitle);
            console.log('------------ etitle ----------------');
            console.log(eauthor);
            console.log('------------ eauthor ----------------');
            console.log(content2);
            console.log('------------ content ----------------');
            console.log(elevel);
            console.log('------------ elevel ----------------');
            console.log(eId);
            console.log('------------ eId ----------------');
            console.log(eVersion);
            console.log('------------ eVersion ----------------');*/
            let id = 2;
            $.ajax({
                type: 'GET',
                url: "http://223.3.65.243:9095/article/articles/2/0",
                //前段需要将传输的数据显示转换为json
                // data:{},
                dataType:'json',
                contentType: 'application/json',
                success: function (responseData) {
                    console.log('SUCCESS: ' + JSON.stringify(responseData));
                    console.log(responseData);
                    console.log(new_name+id);
                },
                //测试时直接带上userId的header，如实正式使用应该是token
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("userId", 6);
                },
                error: function (error) {
                    console.log('ERROR', error);
                }
            });

        }, false);

};

