# ~GNO example

!We assume to work with two F32 boards in the 
 following example 

DECLARE RUNTIME INTEGER CH;

DECLARE CHANNEL A3=12;

START PRG1 STATIC;

~LI2=12; !Connects channel 12 to line 
 2 

~GNO=12; !Connects the ground of channels 
 from 1 to 32 on the output connector (because channel 12 is on channel 
 board from 1 to 32). 

~GNO=*12; !Disconnects the ground of channels 
 from 1 to 32 from the output connector 

~GNO; !Disconnects the ground of all channels 
 from the output connector 

~CALC CH=34; !Connects the ground of channels 
 from 33 to 64 on the output connector (because channel 34 is on channel 
 board from 33 to 64). 

~LI2=CH;

~GNO=CH;

~GNO;

~LI2; !Sconnects all channels from line 
 2 

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved