import{ doMake } from'./doMake.js';
function showMakePage(){
    let str =`角色編號 :<input type="text" id="id"><br>`;
    str +=`角色名稱 :<input type="text" id="name"><br>`;
    str +=`角色職業 :<input type="text" id="profession"><br>`;
    str +=`登入日期 :<input type="text" id="logindate"><br>`;
    str +=`<button id="doMake">創立角色</button>`;
    $("#content").html(str);
    $("#doMake").click(function(){
        doMake();
    });
}
export {showMakePage};