# ~CONNECT GND 
 example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

START example STATIC;

.

! shields the analog bus towards the machines 
 gnd

~CONNECT GND;

.

ENDTEST;

___________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

START example STATIC;

.

! Connect the physical ground to the system 
 and connect channel ch1 to this ground.

~CONNECT GND TYPE=physical TO=ch1;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved