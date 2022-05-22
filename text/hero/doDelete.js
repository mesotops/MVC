function doDelete(){
    $.ajax({
        type:"POST",
        url:"DoDeleteAction.php",
        data:{
            "id":$("input[id=id]:checked").val(),
        },
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            $("#content").html(response['message']);
        },
        error:function(err){
            console.log(err);
        }
    });
};
export{doDelete};