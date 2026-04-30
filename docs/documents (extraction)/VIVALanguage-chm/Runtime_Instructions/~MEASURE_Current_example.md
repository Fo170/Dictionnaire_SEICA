# ~MEASURE 
 Current example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

!Measure a current RMS value on channel ch2 
 with the instrument set to have a range of 1 Ampere 

~MEASURE I TYPE=rms RANGE=1A ON=ch2;

.

ENDTEST;

_____________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

!Measure a current peak value on channel ch1 
 with the instrument set to have a range of 1 Ampere, label "meas1", 
 set the

!instrument and 
 start measuring with after 10ms, measure for 1s; the expected value is 
 600mA 10%. 

~MEASURE I TYPE=peak RANGE=1A ON=ch1 REF=gnd LABEL="meas1" 
 EXPECT=600mA (10%) DELAY=10ms GATE=1s;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved