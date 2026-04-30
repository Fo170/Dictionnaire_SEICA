# ~APPLY IAC example

Example

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

! Apply a sinusoidal current with amplitude 
 200mA peak (400mA peak-to-peak), frequency 15kHz to channel 2 

~APPLY IAC I=200mA WAVE=sine FREQ=15kHz TO=ch2;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved