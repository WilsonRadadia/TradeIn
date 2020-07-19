<?php
include 'DBConfig.php';
 
// Create connection

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
}

//Last Year Record

$sql = "SELECT * FROM orders WHERE YEAR(order_date) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 YEAR))
union all 
SELECT null,null,sum(quantity),sum(total_price),null,null,null from orders WHERE YEAR(order_date) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 YEAR))";

 
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