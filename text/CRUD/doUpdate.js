function doUpdate(){
    console.log($("#id").val());
    console.log($("#name").val());
    console.log($("#address").val());
    console.log($("#birth").val());
    $.ajax({
        type:"POST",
        url:"DoUpdateAction.php",
        data:{
            "id":$("#id").val(),
            "name":$("#name").val(),
            "address":$("#address").val(),
            "birth":$("#birth").val(),
        },
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            let msg = response['status']+":"+response['message'];
            $("#content").html(msg);
        },
        error:function(err){
            console.log(err);
        }
    });
}

export{doUpdate};