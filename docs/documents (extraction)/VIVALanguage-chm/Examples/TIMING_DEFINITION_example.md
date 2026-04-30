# TIMING 
 DEFINITION example

Example 
 1

TIMING TIM1;

STROBE 8C;

PERIOD 10C;

PHASE1 4C,6C;

ENDTIMING;

TIMING TIM2;

STROBE 4C;

PERIOD 5C;

DEAD 2C;

ENDTIMING;

TIMING TIM3 NOSHARE;

STROBE 9C;

PERIOD 10C;

OVERLAY 2C;

PHASE1 3C,5C;

ENDTIMING;

START PRG1;

/ TIMING TIM1;

/;

/;

.

.

/ TIMING TIM2;

/;

.

.

/ TIMING TIM3;

/;

/;

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved