# EOF example

Example 
 1

DECLARE RUNTIME INTEGER A,B,IN1; Variable 
 declarations 

DECLARE RUNTIME INTEGER J;

START PRVAR STATIC;

~CALC A=2;

~CALC B=1;

~CALC IN1=15;

/;

~CALC A=A+B/J;

~CALC IN1=IN1-A;

ENDTEST;

EOF;

*comments*

DECLARE RUNTIME FLOAT DF, variable once used to store the tension value. 

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved