# BEGINLOOP example

Example 1

BEGINLOOP 10;

COPY;

OM 1 2 3 4;

/;

COPY;

OL 1 2;

OH 3 4;

/ MASK NOPROBE;

/ ONERROR JUMP SOTTO MASK NOPROBE;

ENDLOOP;

________________________________________________________________ 

Example 
 2

Example for the F40 module

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

BEGINLOOP 10;

P1 D0;

OL OUT1;

/;

ENDLOOP ONERROR;

/;

BEGINLOOP 100;

IL D0;

/;

IH D0;

ENDLOOP;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved