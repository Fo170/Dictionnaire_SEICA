# JUMP example

Example 
 1

Jump example with DHF module

DECLARE VARIABLE VAR1;

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

DECLARE CHANNEL S3=3;

DECLARE CHANNEL S4=4;

START PGR1;

/;

@CALCOLATE VAR1=6;

/ JUMP LAB1;

@CALCOLATE VAR1=VAR1+4;

/;

LABEL=LAB1;

/;

OM S1,S2,S3,S4;

/;

LABEL=ERRORE;

OL S1,S2;

OH S3,S4;

/;

/ ONERROR JUMP ERRORE;

OM S1,S2,S3,S4;

/;

ENDTEST;

________________________________________________________________ 

Example 2

Jump example with F40 module

CLOCKF INT=20N;

TIMING TIM1;

PERIOD 4U;

PHASE1 100N, 300N;

STROBE 3.5U;

ENDTIMING;

DECLARE CHANNEL D0=12;

DECLARE CHANNEL OUT1=12;

START PROG1;

/ TIMING TIM1;

IL D0;

/;

OL OUT1;

/ JUMP ONERROR MIS1;

P1 D0;

/;

OH OUT1;

/ MIS1;

IH D0;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved