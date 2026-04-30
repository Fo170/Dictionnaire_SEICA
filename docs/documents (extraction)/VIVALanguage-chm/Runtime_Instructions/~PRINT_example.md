# ~PRINT example

EXAMPLE 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE RUNTIME FLOAT VAR1;

DECLARE RUNTIME INTEGER CAN;

DECLARE RUNTIME INTEGER R12,R13;

DECLARE RUNTIME STRING RESULT;

START PRG1 STATIC;

/;

~IH S1;

/;

~IL S1 S2;

/;

~CALC VAR1=33.56;

~CALC RESULT="PASS";

~CALC CAN=256;

/;

~PRINT 12; !Prints a constant 

/;

~PRINT VAR1; ! Prints a float runtime 
 variable 

/;

~PRINT "CHANNEL NR. ",CAN; !Prints 
 a string and an integer runtime variable 

/;

~PRINT RESULT; !Prints a string type runtime 
 variable 

/;

~CALC R12=1;

~CALC R13=3;

~PRINT "REVISION SW = " 
 R12 ".",R13;

/;

IH S2;

/;

/;

IH S1;

/;

ENDTEST;

______________________________________________________________________

EXAMPLE 2

The VAR1 variable will be printed ten times, incrementing its value 
 starting from 10. 

DECLARE RUNTIME INTEGER VAR1;

START PRG1 STATIC;

/;

~CALC VAR1=9;

~DO 10;

~CALC VAR1=VAR1+1;

~PRINT VAR1;

~DONE;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved