<?php
$id=$_POST['id'];
$name=$_POST['name'];
$profession=$_POST['profession'];
$logindate=$_POST['logindate'];
$id = $_POST['id'];
require_once 'mysql.inc.php';
$response=openDB();
if($response['status']==200) {
    try{
        $conn=$response['result'];
        $sql="INSERT INTO `hero` (`id`,`name`,`profession`,`logindate`) VALUES (?,?,?,?)";
        $stmt=$conn->prepare($sql);
        $result=$stmt->execute(array($id,$name,$profession,$logindate));
        if($result){
            $count=$stmt->rowCount();
            if($count<1){
                $response['status']=204;
                $response['message']="角色創立失敗";
            }
            else{
                $response['status']=200;
                $response['message']="角色創立成功";
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