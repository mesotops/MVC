import{showUpdatePage} from './showUpdatePage.js';
function showUpdateList(){
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
                        str += `<td>` + `<input type = "radio" id="id" value="`+ element['id']+`"></td>`;
                        str += `<td>` + element['name'] + `</td>`;
                        str += `<td>` + element['address'] + `</td>`;
                        str += `<td>` + element['birth'] + `</td>`;
                        str += `</tr>`;
                    });
                    str += `</table>`;
                    str += `<button id="showUpdatePage">更新</button>`;
                    $("#content").html(str);
                    $("#showUpdatePage").click(function(){
                        showUpdatePage();
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
export {showUpdateList};