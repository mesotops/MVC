import{ doInsert } from'./doInsert.js';
function showInsertPage(){
    let str =`學號 :<input type="text" id="id"><br>`;
    str +=`姓名 :<input type="text" id="name"><br>`;
    str +=`地址 :<input type="text" id="address"><br>`;
    str +=`生日 :<input type="text" id="birth"><br>`;
    str +=`<button id="doInsert">新增</button>`;
    $("#content").html(str);
    $("#doInsert").click(function(){
        doInsert();
    });
}
export {showInsertPage};