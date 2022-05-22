function doInsert(){
    $.ajax({
        type:"POST",
        url:"DoInsertAction.php",
        data:{
            "id":$("#id").val(),
            "name":$("#name").val(),
            "address":$("#address").val(),
            "birth":$("#birth").val(),
        },
        success:function(jsonString){
            let response = JSON.parse(jsonString);
            $("#content").html(response['status']+":"+response['message']);
        },
        error:function(err){
            console.log(err);
        }
    });
};
export{doInsert};