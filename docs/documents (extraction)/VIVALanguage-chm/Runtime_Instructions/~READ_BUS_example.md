# ~READ_BUS example

Example 1

DECLARE RUNTIME INTEGER VAR1;

START PRG1 STATIC;

/;

~SET USER_BUSW1 A=0XAA D=0XAF; !Writing 
 on the address 0XAA of the 0XAF 
 data on the USB module nr. 1

~READ BUS1 VAR1; !Reading of the data 
 0XAF in the VAR1 variable 

/;

~IF VAR1=0XAF;

~WRITE TEST OK;

~ELSE;

~WRITE TEST NOK;

~ENDIF;

/;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved