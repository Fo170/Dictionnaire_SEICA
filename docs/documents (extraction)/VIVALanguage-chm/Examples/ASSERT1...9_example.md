# ASSERT ASSERT1...9 
 example

Example 
 1

DEFINITION AND APPLICATION OF A TIMING WITH 
 AN ASSERT TIME. 

CLOCKF INT=20N;

TIMING TIM1;

STROBE1 900N;

ASSERT1 100N;

PERIOD 1000N;

ENDTIMING;

DECLARE CHANNEL D0=13;

DECLARE CHANNEL A0=16;

START PROG1 STATIC;

/ DINAMIC;

IL D0;

/;

AH1 D0;

/;

AL1 D0;

/;

ENDTEST;

________________________________________________________________ 

Example 
 2

DEFINITION OF THREE PHASES WITH UNCORRECT AND 
 CORRECT APPLICATION. 

CLOCKF=20N;

TIMING TIM1;

STROBE1 900N;

PHASE1 100N 300N;

ASSERT1 200N;

ASSERT2 400N;

ASSERT3 500N;

ASSERT4 120N;

ASSERT5 220N;

PERIOD 1000N;

ENDTIMING;

DECLARE CHANNEL D0=13;

DECLARE CHANNEL A0=16;

DECLARE CHANNEL CS1=20;

DECLARE CHANNEL CS2=22;

DECLARE CHANNEL CS3=25;

DECLARE CHANNEL ADS=40;

START PROG1 STATIC;

/ DINAMIC;

IL D0;

IL A0;

IL CS;

IL ADS;

/;

AH1 D0;

AH2 CS1;

AH3,CS2;

AH4 CS3;

AH5 ADS; !CORRECT 
 application, more than four phases at the same time but not on the same 
 module ( the ADS signal is on a different F40 module)

/;

P1 A0;

/; !UNCORRECT application, because 4 assert 
 times are being used and a phase on channels from the same F40 module 
 (the plans defined in the previous pattern remain active) 

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved