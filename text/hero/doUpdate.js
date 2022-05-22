function doUpdate(){
    $.ajax({
        type:"POST",
        url:"DoUpdateAction.php",
        data:{
            "id":$("#id").val(),
            "name":$("#name").val(),
            "profession":$("#profession").val(),
            "logindate":$("#logindate").val(),
        },
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            $("#content").html(response['message']);
        },
        error:function(err){
            console.log(err);
        }
    });
}

export{doUpdate};