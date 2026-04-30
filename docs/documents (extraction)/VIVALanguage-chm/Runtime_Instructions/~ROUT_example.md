# ~ROUT example

!Connects the driver channel 13 to the sensor 
 with a 0W resistor 
 while all the other channels are connected RS1. 

~ROUT RS0 13; 

!Connects the driver channel 13 to the sensor 
 with a 8W W resistor 
 while all the other channels are connected RS1. 

~ROUT RS2 13; 

!Connects channels 1, 4 and from channel 6 to 
 channel 32 with a 8W resistor 
 and leaves all the other channels unchanged. 

~ROUT RS2 *,1-4/32; 

~CALC CH=15;

!Connects channel 15 with a 8W resistor and 
 connects all the other channels to RS1. 

~ROUT RS2 CH; 

!Connects channel 15 to RS0 and channels 6 up 
 to 8 to RS3, all the other channels are connected to RS1. 

~ROUT RS0 15 RS3 6-8; 

&#169;2008 
 Seica S.p.a - All right reserved