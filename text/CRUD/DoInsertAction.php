<?php
$id=$_POST['id'];
$name=$_POST['name'];
$address=$_POST['address'];
$birth=$_POST['birth'];
$id = $_POST['id'];
require_once 'mysql.inc.php';
$response=openDB();
if($response['status']==200) {
    try{
        $conn=$response['result'];
        $sql="INSERT INTO `student` (`id`,`name`,`address`,`birth`) VALUES (?,?,?,?)";
        $stmt=$conn->prepare($sql);
        $result=$stmt->execute(array($id,$name,$address,$birth));
        if($result){
            $count=$stmt->rowCount();
            if($count<1){
                $response['status']=204;
                $response['message']="新增失敗";
            }
            else{
                $response['status']=200;
                $response['message']="新增成功";
            }
        }
        else{
            $response['status']=400;
            $response['message']="SQL錯誤";
        }
    }catch(PDOException $e){
        $response['status']=$e->getCode;
        $response['message']=$e->getMessage();
    }
}

echo json_encode($response);
?>