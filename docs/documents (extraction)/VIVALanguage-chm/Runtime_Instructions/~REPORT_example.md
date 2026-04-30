# ~REPORT example

Example 
 1

DECLARE RUNTIME STRING ERR;

DECLARE RUNTIME INTEGER REP;

START PRG1 STATIC;

/;

~CALC REP=STATO_T1&0X02;

~COMP REP LO=0 HI=0 ONPASS REP11;

~CALC ERR="TEST1: 24V AC";

 ~REPORT 
 ERR;

LABEL=REP11;

/;

ENDTEST; 

________________________________________________________________ 

Example 2

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE RUNTIME FLOAT VAR1;

DECLARE RUNTIME INTEGER CAN;

DECLARE RUNTIME INTEGER R13,R13;

DECLARE RUNTIME STRING RISULT;

START PRG1 STATIC ;

~IH S1;

/;

~IL S1 S2;

/;

~CALC VAR1=33.56;

~CALC RISULT="PASS";

~CALC CAN=256;

/;

~REPORT 12; !Report 
 of a constant!

/;

~REPORT VAR1; 
 !Report of a float runtime variable!

/;

~REPORT "CHANNEL NR. " CAN; !Report of a 
 string

 and 
 an integer

 runtime 
 variable!

/;

~REPORT RISULT; !Report 
 of a string type runtime variable!

/;

~REPORT "REVISIONE SW = " R12 "." 
 R13;

/;

~IH S2;

/;

/;

~IH S1;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved