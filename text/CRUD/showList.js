import{showUpdatePage}from './showUpdatePage.js';
import{doDelete} from './doDelete.js';

function showDeleteList(){
    showList("delete");
}

function showUpdateList(){
    showList("update");
}

function showList(type){
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
                        str += `<td>` + `<input type = "radio" id="id" value="`+ elemetn["id"]+`"></td>`;
                        str += `<td>` + elemetnt['name'] + `</td>`;
                        str += `<td>` + elemetnt['address'] + `</td>`;
                        str += `<td>` + elemetnt['birth'] + `</td>`;
                        str += `</tr>`;
                    });
                    str += `</table>`;
                    if(type=="delete"){
                        str+=`<button id="doDelete">刪除</button>`;
                        $("#content").html(str);
                        $("#doDelete").click(function(){
                            doDelete();
                        });
                    }
                    else{
                        str+=`<button id="doDelete">修改</button>`;
                        $("#content").html(str);
                        $("#showUpdatePage").click(function(){
                            showUpdatePage();
                        });
                    }
                    break;
                case 400:
                    $("#content").html(response['message']);
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        },
        error:function(err){
            $("#content").html(err);
        }
        
    });
}

export{showUpdateList,showDeleteList};