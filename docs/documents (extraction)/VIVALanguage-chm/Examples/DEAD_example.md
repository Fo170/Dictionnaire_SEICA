# DEAD example

Example 
 1

DECLARE CHANNEL S1;

DECLARE CHANNEL S2;

CLOCK=150N;

TIMING TIM1;

PERIOD 12C;

STROBE 11C;

ENDTIMING;

START PRG1;

/ TIMING TIM1;

IH S1,S2;

/;

/ DEAD 2C;

IL S1;

/;

IL S2;.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved