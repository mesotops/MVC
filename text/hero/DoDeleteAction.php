<?php
$id = $_POST['id'];
require_once 'mysql.inc.php';
$response=openDB();
if($response['status']==200) {
    try {
        $conn = $response['result'];
        $sql = "DELETE FROM `hero` WHERE id=?";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($id));
        if($result) {
           $count = $stmt->rowCount();
           if($count<1){
               $response['status']=204;
               $response['message']="角色除名失敗";
           }
           else{
                $response['status'] = 200;
                $response['message'] = "角色除名成功";
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
