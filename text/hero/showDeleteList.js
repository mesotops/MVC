import {doDelete} from './doDelete.js';
function showDeleteList(){
    $.ajax({
        type:"GET",
        url:"DoSelectAction.php",
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            switch (response['status']){
                case 200:
                    let rows = response['result'];
                    let str = `<table>`;
                    rows.forEach(element=>{
                        str += `<tr>`;
                        str += `<td>` + `<input type = "radio" id="id" name="id" value="`+ element['id']+`"></td>`;
                        str += `<td>` + element['name'] + `</td>`;
                        str += `<td>` + element['profession'] + `</td>`;
                        str += `<td>` + element['logindate'] + `</td>`;
                        str += `</tr>`;
                    });
                    str += `</table>`;
                    str += `<button id="doDelete">角色除名</button>`;
                    $("#content").html(str);
                    $("#doDelete").click(function(){
                        doDelete();
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
export{showDeleteList};