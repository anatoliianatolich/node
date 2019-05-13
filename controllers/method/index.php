<?php

$login = "MITKV04_2@MITIK.ua";
$pass = "172.30.0.42";
echo base64_encode(
    strrev(base64_encode(md5($login).$pass))
    .strtoupper(md5($login))
);
echo "\n";
echo "\n";
//
//echo strrev(base64_encode(md5($login).$pass));
//$var1 = strrev(base64_encode(md5($login).$pass));
//echo "\n";
//echo strtoupper(md5($login));
//$var2 = strtoupper(md5($login));
//$var3 = base64_encode($var1.$var2);
//echo "\n";
//echo $var3;

//echo strrev(base64_encode(md5($login).$pass));
//echo "\n";
//echo "\n";
//echo strtoupper(md5($login));
echo strrev(base64_encode(md5($login).$pass)).strtoupper(md5($login));


