# ~APPLY CLOCK 
 example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

! Apply a clock with frequency 100kHz to channel 
 1 using the default logic values

~APPLY CLOCK FREQ=100kHz TO=ch1;

....

ENDTEST;

___________________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

! Apply a digital clock with frequency 30kHz, 
 driver logic levels 5V and 0V, sensor logic levels 4V and 2V, on channel 
 1. 

~APPLY CLOCK LABEL=clock1 TO=1 IH=5 IL=0 OH=4 OL=2 FREQ=30khz;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved