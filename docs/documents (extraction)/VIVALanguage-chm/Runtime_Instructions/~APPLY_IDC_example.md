# ~APPLY IDC example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

....

! Apply a DC current of 200mA to channel 2 

~APPLY IDC I=200mA TO=ch2;

.

ENDTEST;

_____________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

....

! Apply a DC current to channel 1 using the 
 instrument called DRA in the machines instrument file descriptor.

~APPLY IDC I=500mA TO=1 USING=DRA;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved