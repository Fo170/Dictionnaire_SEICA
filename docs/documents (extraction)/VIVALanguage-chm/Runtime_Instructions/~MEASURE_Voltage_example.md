# ~MEASURE 
 Voltage example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

! Measure a voltage RMS value on channel ch1, 
 measure the signal with the instrument set to have 10V range.

~MEASURE V TYPE=rms RANGE=10V ON=ch1;

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

!Measure on channel ch1 the maximum voltage 
 found an acquisition window of 500ms; store the measured value in the 
 variable ris and !check if its greater than or less than the value expected; 
 if the measurement fails, jump to label meas1 and write on Vivas Report 
 this !result with the name "test1". 

~MEASURE VOLTAGE ON=ch1 TYPE=max INTO=ris GATE=500ms EXPECT=2V (5%) 
 JUMP_ONERROR=meas1 LABEL="test1";

.

LABEL=meas1;

.

ENDTEST;

________________________________________________________________

Example 
 3

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

!Measure on channel ch4 a DC voltage and check 
 if the measured value is greater than HI or lower than LO; if it is, jump 
 to label fine and !write on Vivas Report this result with the name "test2". 

~MEASURE VOLTAGE TYPE=DC on=ch4 HI=8.2V LO=7.8V JUMP_ONERROR=fine LABEL="test2";

.

LABEL=fine;

....

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved