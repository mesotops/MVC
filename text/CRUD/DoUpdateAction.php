<?php
$id=$_POST['id'];
$name=$_POST['name'];
$address=$_POST['address'];
$birth=$_POST['birth'];
require_once 'mysql.inc.php';
$response=openDB();
if($response['status']==200) {
    try {
        $conn = $response['result'];
        $sql = "UPDATE `student` SET `name`=?,`address`=?,`birth`=? WHERE `id`=?";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($name,$address,$birth,$id));
        if($result) {
           $count = $stmt->rowCount();
           if($count<1){
               $response['status']=204;
               $response['message']="更新失敗";
           }
           else{
                $response['status'] = 200;
                $response['message'] = "更新成功";
           }
        }
        else {
           $response['status'] = 400;
           $response['message'] = "SQL錯誤";
        }
    } catch (PDOException $e) {
        $response['status'] = $e->getCode();
        $response['message'] = $e->getMessage();
    }
}

echo json_encode($response);
?>
