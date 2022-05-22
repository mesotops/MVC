<?php
function openDB(){
    $db_host = 'db.mis.kuas.edu.tw';
    $db_name = 'c108156214';
    $db_user = 'c108156214';
    $db_password = 'F131171816';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try{
        $conn = new PDO($dsn, $db_user, $db_password);
        $response['status']=200;
        $response['result']=$conn;
    }catch(PDOException $e){
        $response['status']=$e->getCode();
        $response['message']=$e->getMessage();
    }
    return($response);
}
?>