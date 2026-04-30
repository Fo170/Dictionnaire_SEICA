# CLOCK example

Example 
 1

Definition of the clock = 1 MHz with resolution 
 of 10ns (1% of 1Mhz)

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

CLOCK 1MHZ;

TIMING TIM1;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG1;

IH S1 S2;

.

.

ENDTEST;

________________________________________________________________ 

Example 2

Definition of the clock = 0.550&#61549;s with 
 resolution of 55ns (1% of 0.550ms)

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

CLOCK 0.550U;

TIMING TIM2;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG2;

IH S1 S2;

.

.

ENDTEST;

________________________________________________________________ 

Example 3

Definition of the clock =100ns with resolution 
 of 10ps 
 (1% of 100ns)

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

CLOCK 100N;

TIMING TIM3;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG3;

IH S1 S2;

.

.

ENDTEST;

________________________________________________________________ 

Example 4

Clock value omitted, in this case the value 
 of 50ns is taken for the clock period by default.

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

TIMING TIM4;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG4;

IH S1 S2;

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved