# ~APPLY VAC example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

! Apply a sinusoidal waveform with amplitude 
 5V peak (10V peak-to-peak) and frequency 10kHz on channel 1

~APPLY VAC V=5V WAVE=sine FREQ=10kHz TO=ch1;

.

ENDTEST;

_____________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

START example STATIC;

.

!Apply a triangular waveform with amplitude 
 10V (20V peak-to-peak), current 100mA and offset 1V ( +11V,-9V ),

!frequency 200kHz on channel ch2.

~APPLY VAC V=10 I=100mA WAVE=tri OFFSET=1V FREQ=200kHz TO=ch2; 

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved