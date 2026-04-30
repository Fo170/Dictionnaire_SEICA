# ~PULL example

!Connects channel 13 to the 1KW pull-up 
 resistor. All the other channels are disconnected from pull-up/down resistors. 

~PULL UP 13; 

!Connects channel 23 to the pull-down 
 resistor and leaves all the other channels unchanged. 

~PULL DOWN *,23; 

!Connects channels 1, 4 and from channel 6 to 
 channel 32 to the pull-down resistor, leaves all the other channel unchanged.

~PULL DOWN *,1-4/32; 

!Disconnects 
 all the channels connected to pull-up/down 
 resistors. 

~PULL; 

~CALC CH=15;

!Connects channel 15 to the pull-up resistor. 
 All the 
 other channels are unchanged. 

~PULL UP CH; 

!Connects channel 15 to the pull-up resistor 
 while channels 6 and 8 to the pull-down resistor. Disconnects the other channels that might 
 be connected. 

~PULL UP 15 DOWN 6-8; 

!Channel 7 in this case will be connected both 
 to the pull-up and pull-down resistor. Disconnects the 
 other 
 channels that might be connected.

~PULL UP 15 DOWN 6-8 UP DOWN 7; 

&#169;2008 
 Seica S.p.a - All right reserved