# PHASE1..9 example

Example 
 1

DEFINITION AND APPLICATION OF A TIMING WITH 
 PHASE .

CLOCKF INT=20N;

TIMING TIM1;

STROBE1 900N;

PHASE1 100N 300N;

PERIOD 1000N;

ENDTIMING;

DECLARE CHANNEL D0=13;

DECLARE CHANNEL A0=16;

START PROG1 STATIC;

/ DINAMIC;

IL D0;

/;

P1 D0;

/;

ENDTEST;

________________________________________________________________ 

Example 2

DEFINITION OF 
 THREE PHASES WITH CORRECT AND WRONG APPLICATION. 

CLOCKF=20N;

TIMING TIM1;

STROBE1 900N;

PHASE1 100N 300N;

PHASE2 200N 600N;

PHASE3 20N 100N;

PHASE4 20N 200N;

PERIOD 1000N;

ENDTIMING;

DECLARE CHANNEL D0=13;

DECLARE CHANNEL A0=16;

DECLARE CHANNEL CS=23;

DECLARE CHANNEL ADS=40;

START PROG1 STATIC;

/ DINAMIC;

IL D0;

IL A0;

IL CS;

IL ADS;

/;

P1 D0;

P2 A0; <- WRONG application, more that 
 two simultaneous phases on channels of the same module!! 

P3 CS; 

/;

IH CS;

P1 D0;

P2 A0; <- P1,P2,P4= CORRECT application, 
 the signals are not on the same F40 module

P4 ADS;

/;

ENDTEST;

________________________________________________________________ 

Example 3

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

DECLARE VARIABLE VAR1;

CLOCK=50N;

TIMING TIM1;

PERIOD 10C;

PHASE1 2C 4C;

PHASE3 2C 4C; ! PHASE3 is moved to 3C

STROBE 9C; and 
 a WARNING is inserted in the file Prg1.lis!

ENDTIMING;

START PRG1;

IH S1 S2;

/ TIMING TIM1;

IL S1 S2;

/;

@CALCOLATE VAR1=3;

/;

IH S2;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved