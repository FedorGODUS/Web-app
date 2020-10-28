<?php

$start=microtime(true);
$result = false;
$z =(double)$_GET['z'];
$y =(double)$_GET['y'];
$x =(double)$_GET['x'];
$x = preg_replace("/,/", ".", $x);
$y = preg_replace("/,/", ".", $y);
$z = preg_replace("/,/", ".", $z);
try {
    $date = new DateTime('now', new DateTimeZone('Europe/Moscow'));
} catch (Exception $e) {
}



if (($x==-2 || $x==-1.5 || $x==-1 || $x==-0.5 || $x==0 || $x==0.5 || $x==1 || $x==1.5 || $x==2)&&($y>-3 && $y<5)&&($z>1&& $z<4)){




if ($x<=0 && $x>=(-$z/2) && $y<=0 && $y>=-$z){
    $result=true;}
    elseif($x<=0 && $x>=-$z && $y>=0 && $y<=$z){
    $result=true;

}elseif($x>=0 && $y>=0 && $y<=sqrt($z*$z + $x*$x)&& $x<=sqrt($z*$z + $y*$y)){
    $result=true;

}else{
    $result=false;
}
$time=number_format(microtime(true)-$start,6);
if ($result===true){


    echo "{$x}|{$y}|{$z}|true|{$date->format('H:i:s')}|{$time}";
}else{
    echo $x.'|'.$y.'|'.$z.'|'.'false'.'|'.$date->format('H:i:s').'|'.$time;

}
}else{
    $time=number_format(microtime(true)-$start,6);
    echo 'mistake|mistake|mistake|mistake|'.$date->format('H:i:s').'|'.$time;
}






