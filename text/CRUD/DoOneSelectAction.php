<?php
$id = $_POST['id'];
require_once 'mysql.inc.php';
$response=openDB();
if($response['status']==200) {
    try {
        $conn = $response['result'];
        $sql = "SELECT  *  FROM  `student` WHERE id=? ";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($id));
        if($result) {
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
           $response['status'] = 200;
           $response['message'] = "查詢成功";
           $response['result'] = $rows;
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
