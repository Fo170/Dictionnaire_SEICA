# NOPROBE example

Example 
 1

DECLARE CHANNEL RESET =39;

DECLARE CHANNEL S1=67;

DECLARE CHANNEL S3=86;

START PRG1 PROBE_ON;

IL RESET;

/;

IH RESET;

/;

IL S1;

IH S2;

/;

IL S2;

/ NOPROBE; !The probe is enabled for all of the program, but is disabled 
 for this pattern!

IL S2;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved