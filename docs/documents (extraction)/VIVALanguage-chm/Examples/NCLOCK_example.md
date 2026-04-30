# NCLOCK example

Example 1

Timing TSET1;

Period 1u;

NCLOCK= 4;

strobe1 =3800n;

Endtiming;

Timing TSET2;

Period 1u;

PHASE1,300N,500N;

NCLOCK= AUTO;

strobe1 =3800n;

Endtiming;

DECLARE CHANNEL RESET =39;

DECLASE CHANNEL S1=67;

DECLARE CHANNEL S3=86;

START PRG1 PROBE_OFF;

IL RESET;

/ timing TSET1 ; ! 
 Duration 1U*4; period*NCLOCK

IH RESET;

/;

P1 S1;

CR S1; ! 
 generate 2 clock 

OH S2; ! 
 no check of the signal (the strobe is other the total period

/ TIMING TSET2 NCLOCK=2; !! duration 1u*2 

OL S2; ! 
 the signal s2 is checked at the window specifief

 ! 
 s1 will generate 6 clock.

/ NCLOCK=6; 
 !! duration 
 1u*6 

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved