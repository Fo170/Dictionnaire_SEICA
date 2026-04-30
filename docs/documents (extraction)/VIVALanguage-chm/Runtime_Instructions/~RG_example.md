# ~RG example

DECLARE CHANNEL D0=23;

DECLARE CHANNEL D1=24

DECLARE CHANNEL D2=25;

DECLARE CHANNEL D3=26

DECLARE CHANNEL D4=27;

DECLARE CHANNEL D5=28

DECLARE CHANNEL D6=29;

DECLARE CHANNEL D7=30;

DECLARE CHANNEL DATB=139;

DECLARE RUNTIME INTEGER VAR1,VAR2,VAR3;

START PRG1 STATIC;

/;

!The least significant bit of the VAR1 
 variable will contain the status of channel 23, while the most significant 
 bit will contain that of channel 30 

~RG VAR1=23,24,25,26,27,28,29,30; 

/;

~RG VAR2=D0,D1,D2,D3;

/;

~RG VAR3=DATB;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved