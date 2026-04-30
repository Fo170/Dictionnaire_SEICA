# ~CHMODE example

START example STATIC;

.....

~CHMODE NORMAL 10,12,15, CLK 
 17 CLKN 18, TDI 
 19 TMS 
 20 STATIC 
 21;

!Channels 10, 12, and 15 connected 
 to the dynamic digital channel (default) 

17 will output the internal pulse generator

18 will output the negate of the pulse generator

19 are tied to 
 the first 16 bit shift register 

20 are tied to 
 the second 16 bit shift register 

21 are tied the int static internal register 
 ,The other channels are left unchanged.

~DIGCLOCK 17 
 FR=10000000 
 DUTY=50 
 PHASE=20. N=16 PREPARE ;

! PREPARE the pulse generator to produce 
 16 clock at 10Meghz on the 3th generator (channel 17/24) 

! the clock resolution is main clock of 
 the F50 max 20ns 

~TX 17 
 TDI=H1055 
 TMS=H1003 N=16 
 START;

! set both shift register to shift the data 
 simultaneous 

! will emulate a tap boundary scan where TDI,TMS,AND 
 CLK will be the channel 19,20,17

~CHMODE NORMAL 1/32 TDI 
 19 ;

19 are tied to 
 the first 16 bit shift register 

~DIGCLOCK 17 
 FR=9600 
 DUTY=50 
 PHASE=90. N=10 PREPARE ;

! PREPARE the pulse generator to produce 
 10 clock at 9600 baud on the 3th generator (channel 17/24) 

~TX 17 
 DATA=H157 
 N=10 START;

! set the 1th shift register to output the byte 
 h55 with 1 bit of parity 1 bit of stop on the channel 19

.....

~CHOUT * NORMAL 17/21; 

channel 17/21 
 are revert to its default mode (digital dynamic) 

......

ENDTEST; 

&#169;2008 
 Seica S.p.a - All right reserved