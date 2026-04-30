# ~APPLY VDC example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

!Apply 5V DC to channel 1

~APPLY VDC V=5V TO=ch1; 

......

ENDTEST;

_____________________________________________________________

Example 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

!Apply a DC voltage value 5V and 400mA on channel 
 ch1 referred to ground, the instrument must be certified on the fntool 
 table to have an accuracy greater or equal than 2%. The generator will 
 start with the trigger event syncro1 and with a delay of 100ms from the 
 trigger event.

~APPLY VDC V=5V I=400mA ACCV=2% DELAY=100ms TO=ch1 REF=gnd LABEL=apply_dc 
 SYNC=syncro1;

.....

ENDTEST;

_____________________________________________________________

Example 
 3

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

!Apply a DC voltage value 5V and 400mA to both 
 channels ch1 and ch2.

~APPLY VDC V=5V I=400mA TO=ch1,ch2 LABEL=apply_dc2;

......

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved