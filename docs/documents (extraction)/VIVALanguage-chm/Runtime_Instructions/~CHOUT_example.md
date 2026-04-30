# ~CHOUT example

START example STATIC;

.....

~CHOUT DIGITAL 10,12,15, NULL 17,18, OPEN 17,18, ANALOG 19/30 HIBRYD 
 33,34 COAX 63,64;

.....

!Channels 10, 12, and 15 are set to ANALOG together 
 with 19/30 already set in the previous instruction. The other channels 
 are left unchanged.

~CHOUT * ANALOG 10,12,15; 

......

ENDTEST; 

&#169;2008 
 Seica S.p.a - All right reserved