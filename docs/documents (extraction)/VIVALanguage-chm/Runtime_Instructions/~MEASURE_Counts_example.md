# ~MEASURE 
 Counts example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

! Measures the number of signal events that 
 occur on channel ch4 in 400us; expect 10 events, save the result in the 
 variable "ris"

~MEASURE COUNTS ON=ch4 GATE=400us INTO=ris EXPECT=10 LABEL=counts;

....

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

! Measures the number of signal events on channel 
 ch1 in 340us, start measuring when the trigger reaches 2V; check if the 
 result is within the high and low limits specified, if it exceeds this 
 range jump to the label "EndTest".

~MEASURE COUNTS TYPE=INTERVAL ON=ch1 GATE=340us HI=20 LO=5 LABEL=counts 
 TRIG_LEVEL=2V JUMP_ONERROR=EndTest;

....

LABEL=EndTest;

.

~REMOVE ALL;

...

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved