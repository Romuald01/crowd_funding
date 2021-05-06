<?php 
$num = 1234;
$revnum = 0;

while($num > 1){
$reminder = ($num % 10){
    $revnum = ($revnum * 10) + $reminder;
    $num = $num / 10 ;
}
}
echo "the reversed order of the number supplied is: "." ". $revnum;

?>