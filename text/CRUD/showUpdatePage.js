
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
                    let str = `學號:<input type = "hidden" id="id" value="`+ row["id"]+`">`;
                        str += `姓名:<input type = "text" id="name" value="`+ row["name"]+`">`;
                        str += `住址:<input type = "text" id="address" value="`+ row["address"]+`">`;
                        str += `生日:<input type = "text" id="birth" value="`+ row["birth"]+`">`;
                        str += `<button id="doUpdate">更新</button>`;
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