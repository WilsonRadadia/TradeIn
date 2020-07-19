<?php
include 'DBConfig.php';
 
// Create connection

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}

// Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 $monthtype=$obj['monthtype'];

 
 if($monthtype==1)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='January'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='January'";
 }

else if($monthtype==2)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='February'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='February'";
 }else if($monthtype==3)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='March'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='March'";
 }else if($monthtype==4)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='April'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='April'";
 }else if($monthtype==5)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='May'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='May'";
 }else if($monthtype==6)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='June'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='June'";
 }else if($monthtype==7)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='July'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='July'";
 }else if($monthtype==8)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='August'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='August'";
 }else if($monthtype==9)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='September'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='September'";
 }else if($monthtype==10)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='October'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='October'";
 }
 else if($monthtype==11)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='November'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='November'";
 }
 else if($monthtype==12)
 {
 	$sql = "SELECT * from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='December'

union all 

SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders where YEAR(order_date) = YEAR(CURDATE()) and monthname(order_date)='December'";
 }

 
$result = $conn->query($sql);

 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $item = $row;
 
 $json = json_encode($item);
 }

} else {
 echo "No Results Found.";
}
 echo $json;

$conn->close();

?>