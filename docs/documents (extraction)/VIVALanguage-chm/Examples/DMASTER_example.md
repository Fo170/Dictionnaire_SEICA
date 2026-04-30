# DMASTER example

Example 
 1

DECLARE CHANNEL CH1=1;

DECLARE CHANNEL CH2=2;

START PRG1 STATIC;

/;

~IH CH1;

/;

~IL CH2;

/ DMASTER;

IH CH1;

/;

IL CH2;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved