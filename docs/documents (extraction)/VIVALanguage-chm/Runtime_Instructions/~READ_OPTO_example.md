# ~READ_OPTO example

Example 1

DECLARE RUNTIME INTEGER VAR1;

DECLARE CHANNEL CH1=45;

START PRG1 STATIC;

/;

~READ OPTO1 VAR1;

~IF VAR1= 0X06; !In this case the signals 1,4,5,6,7,8

 are worth 
 zero while 2 and 3 are 

worth 1. 

~IL CH1;

/;

~ENDIF;

/;

~IF VAR1= 8; !In this case the signals 1,2,3,5,6,7,8 are worth zero 
 while 4 is worth 1. 

/;

~IH CH1;

/;

~ENDIF;

/;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved