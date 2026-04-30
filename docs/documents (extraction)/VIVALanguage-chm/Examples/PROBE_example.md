# PROBE example

Example 
 1

DECLARE CHANNEL RESET =39;

DECLASE CHANNEL S1=67;

DECLARE CHANNEL S3=86;

START PRG1 PROBE_OFF;

IL RESET;

/;

IH RESET;

/;

IL S1;

IH S2;

/;

IL S2;

/PROBE; !The probe is disabled for all 
 of the program but is enabled in this pattern!

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved