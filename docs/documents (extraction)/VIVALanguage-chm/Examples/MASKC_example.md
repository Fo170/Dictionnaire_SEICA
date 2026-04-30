# MASKC example

Example 
 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

DECLARE CHANNEL S3=3;

DECLARE RUNTIME INTEGER OHCH,SUBERR;

START PRG1 STATIC;

~CALC SUBERR=0;

/;

~IL S1,S2;

~OH S3;

/;

~IH S1;

~OL S3;

/ MASKC; !The low measurement on channel 
 3 is masked, the partial error flag is activated, while the global flag 
 is not!

~BRANCH ONERROR NOK; !If the partial error 
 flag is active, jump to label NOK! 

/;

~LI1 *,OHCH;

~OH OHCH;

/ MASKC ONERROR NOK;

/;

LABEL=NOK;

~CURSOR 65,9;

~COLOR 1,5;

~WRITE "FAIL";

~COLOR 1,15;

~REPORT SUBERR;

~CALC SUBERR=SUBERR+1;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved