# ~SEND_IEEE example

Example 
 1

DECLARE RUNTIME STRING string1;

START PRG1 STATIC;

string1 = "PWM:STAT OFF";

/;

~SEND_IEEE 11.22; !Send a constant 
 on the IEEE bus

/;

~SEND_IEEE string1; !Send a string on 
 the IEEE bus

/;

ENDTEST; 

&#169;2008 
 Seica S.p.a - All right reserved