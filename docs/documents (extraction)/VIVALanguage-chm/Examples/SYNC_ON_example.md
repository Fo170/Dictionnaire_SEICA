# SYNC_ON example

DECLARE CHANNEL C1;

DECLARE CHANNEL C2;

START PRG1;

/;

IL C1;

/;

IH C1;

SYNC_ON;

IL C2;

/ !Synchro signal here 

IH C2;

/; !Synchro signal here 

/; !Synchro signal here 

SYNC_OFF;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved