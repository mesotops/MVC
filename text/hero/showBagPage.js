import{ showBagList } from'./showBagList.js';
function showBagPage(){
    $.ajax({
        type:"POST",
        data:{
            "id":$("input[id=id]:checked").val(),
        },
        url:"DoOneSelectAction.php",
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            switch (response['status']){
                case 200:
                    let rows = response['result'];
                    let row = rows[0];
                    let str = `角色編號:<input type = "text" readonly="readonly" id="id" value="`+ row["id"]+`"><br>`;
                        str += `角色名稱:<input type = "text" readonly="readonly" id="name" value="`+ row["name"]+`"><br>`;
                        str += `角色職業:<input type = "text" readonly="readonly" id="profession" value="`+ row["profession"]+`"><br>`;
                        str += `登入日期:<input type = "text" readonly="readonly" id="logindate" value="`+ row["logindate"]+`"><br>`;
                        str += `<button id="showBagList">返回</button>`;
                        $("#content").html(str);

                        $("#showBagList").click(function(){
                            showBagList();
                        });
                    break;
                case 400:
                    $("#content").html(response['message']);
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
                }
            },
            error: function(err){
                $("#content").html(err);
            }
    });
}
export {showBagPage};