# REPEAT example

Example 
 1

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

P1 D0;

/ REPEAT 1000 NOSTEP;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved