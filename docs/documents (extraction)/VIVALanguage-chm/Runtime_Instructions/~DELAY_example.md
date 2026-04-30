# ~DELAY example

Example 1

DECLARE RUNTIME INTEGER NCAN, SUBERR, MAXERR;

START PRG1 STATIC;

/;

~DO NCAN;

~CURSOR 60,3;

~WRITE "CHANNEL N. " CAN;

~CALC CAN=CAN+1;

~COMP SUBERR HI=MAXERR ONERROR FINE;

~DELAY 1M;

~DONE;

LABEL=FINE;

/;

ENDTEST;

_________________________________________________________ 

Example 2 

DECLARE RUNTIME INTEGER T1;

START PRG2 STATIC;

/;

~CALC T1=10;

~DELAY T1;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved