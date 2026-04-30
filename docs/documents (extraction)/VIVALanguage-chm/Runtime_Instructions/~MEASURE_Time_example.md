# ~MEASURE Time 
 example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

! Measure on channel ch2 the period of 
 the signal and store in variable "ris". If the measured value 
 differs from the expected value, write the failing measure on Vivas Report 
 with the name test2. 

~MEASURE TIME TYPE=PERIOD ON=ch2 EXPECT=33us (10%) INTO=ris LABEL=test2 
 TRIG_LEVEL=2V;

.

ENDTEST;

________________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

!Measure time between a start event on 
 channel ch4 (positive slope, trigger level 2V) and a stop event on channel 
 ch2 (negative slope, trigger level 3V). Expect 200us 10%, in case of 
 error jump to label "EndTest". 

~MEASURE TIME TYPE=INTERVAL START_ON=ch4 STOP_ON=ch2 TRIG_LEVEL_START=2V 
 TRIG_LEVEL_STOP=3V TRIG_SLOPE_START=POS TRIG_SLOPE_STOP=NEG EXPECT=200us 
 (10%) LABEL=interval INTO=ris2 JUMP_ONERROR=EndTest; 

....

LABEL=EndTest;

....

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved