# ~MEASURE 
 Frequency example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

! Measure a frequency on channel ch3, the range 
 of the signal is 10V

~MEASURE F RANGE=10V on=ch3;

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

~APPLY VAC LABEL=vac_20V TO=uno V=2V WAVE=tri OFFSET=2V FREQ=1k;

....

!Measure a frequency value on channel ch1 for 
 10ms, expect 30kHz 10% using the instrument SCOPE ( identifies the oscilloscope 
 in Seica's Drivers); save the result in the variable "ris". 
 If the result is out of the expected range limits jump tp the label "EndTest"

~MEASURE F ON=ch1 LABEL=meas_freq EXP=30k (10%) GATE=10ms INTO=ris USING=SCOPE 
 RANGE=10V JUMP_ONERROR=EndTest; 

....

~REMOVE LABEL=vac_20V;

.

LABEL=EndTest;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved