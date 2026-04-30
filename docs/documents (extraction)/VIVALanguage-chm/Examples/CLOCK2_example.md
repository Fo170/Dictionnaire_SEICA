# CLOCK2 example

Example 
 1

Clock signal = 1 MHz with resolution of 10ns 
 (1% of 1MHz)

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

CLOCK2 1U;

TIMING CTS1;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG1;

IH S1 S2;

/;

ENDTEST;

________________________________________________________________ 

Example 2

Clock signal = 200 KHz with resolution of 2KHz 
 (1% of 200 KHz)

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

CLOCK2 200KHZ;

TIMING CTS1;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG1;

IH S1 S2;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved