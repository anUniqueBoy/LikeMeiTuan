<?php
    header("Access-Control-Allow-Origin:*","Content-Type:application/json");
    @$uname=$_REQUEST['uname'];
    @$upwd=$_REQUEST['upwd'];

    $conn=mysqli_connect('127.0.0.1','root','','lmt',3306);
    mysqli_query($conn,'SET NAMES UTF8');
    $sql="INSERT INTO user VALUES(NULL,'$uname','$upwd')";
    $result=mysqli_query($conn,$sql);

    if($result){
        $output=[
            'msg'=>'注册成功！'
        ];
    }else{
        $output=[
            'msg'=>'注册失败！'
        ];
    }
    echo json_encode($output);
?>