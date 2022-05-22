function doDelete(){
    $.ajax({
        type:"POST",
        url:"DoDeleteAction.php",
        data:{
            "id":$("input[id=id]:checked").val(),
        },
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            let msg = response['status'] + ":" + response['message'];
            $("#content").html(msg);
        },
        error:function(err){
            console.log(err);
        }
    });
};
export{doDelete};