
import{doUpdate} from './doUpdate.js';
function showUpdatePage(){
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
                    let str = `<input type = "hidden" id="id" value="`+ row["id"]+`">`;
                        str += `角色名稱:<input type = "text" id="name" value="`+ row["name"]+`"><br>`;
                        str += `角色職業:<input type = "text" id="profession" value="`+ row["profession"]+`"><br>`;
                        str += `登入日期:<input type = "text" id="logindate" value="`+ row["logindate"]+`"><br>`;
                        str += `<button id="doUpdate">更新資料</button>`;
                        $("#content").html(str);
                        
                        $("#doUpdate").click(function(){
                            doUpdate();
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
export {showUpdatePage};