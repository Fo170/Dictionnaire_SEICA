# ~WRITE examples 

EXAMPLE 1

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

~WRITE 12; !Displays a constant 

/;

~WRITE VAR1; !Displays a float runtime 
 variable 

/;

~WRITE "\CR CHANNEL NR. " CAN; !New 
 line, and displays a string and an integer runtime variable 

/;

~WRITE RISULT; !Displays a string type 
 runtime variable 

/;

~CURSOR 10,10;

~WRITE "\DO REVISIONE SW = " R12 "." R13; !Moves to line and column 10, moves a line under 
 (attribute \DO) and writes 

/;

~IH S2;

/;

/;

~IH S1;

/;

ENDTEST;

__________________________________________________________________ 

EXAMPLE 2

!The VAR1 variable will be displayed ten times, 
 incrementing its value starting from 10. 

.

.

.

~CALC VAR1=9;

~DO 10;

~CALC VAR1=VAR1+1;

~WRITE VAR1;

~DONE;

.

__________________________________________________________________ 

EXAMPLE 3

DECLARE RUNTIME FLOAT REG1;

START PRG1 STATIC;

~CALC REG1=46; !Octal value corresponding 
 to the character & 

~WRITE \R01; !Displays the contents 
 of the REG1 register and that is the character & 

/;

~PAUSE 1;

/;

ENDTEST;

__________________________________________________________________ 

EXAMPLE 4

START PRG2 STATIC;

~WRITE %007; !This instruction produces 
 a sound, in fact the value 007 corresponds to the character BELL 

~PAUSE 1;

/;

~WRITE %043 !This instruction displays 
 the character # 

~PAUSE 2;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved