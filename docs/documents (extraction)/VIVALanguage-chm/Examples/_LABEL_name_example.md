# /LABEL name 
 example

Example 
 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

DECLARE VARIABLE A;

START PRG1;

/;

@CALC A=1;

/LAB1;

/;

IL S1;

IH S2;

/;

IH S1;

IL S2;

/;

@CALC A=A+1;

/;

@IF A <14

/JUMP LAB1;

@ENDIF;

/

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved