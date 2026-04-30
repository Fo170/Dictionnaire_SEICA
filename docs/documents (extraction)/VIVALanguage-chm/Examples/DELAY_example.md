# DELAY example

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

DELAY 1S; !In this pattern the DELAY time 
 is executed first and then there is the control on the sensor channel 

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved