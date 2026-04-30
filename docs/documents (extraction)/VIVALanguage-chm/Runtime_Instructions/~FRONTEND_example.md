# ~FRONTEND example

Example 
 1

START FRONTEND RELOAD STATIC;

~chlev il=-4.2 IH=8.2 OL=-2.2 OH=6.2 1,2,3,4;

~chlev AUX il=-4.1 IH=8.1 OL=-2.1 OH=6.1 1,2,3,4;

~FRONTEND SVH=11.2 SVL=1.2 SCH=0.0122 SCL=0.0112 IMP=400 PMO=2 OCH=0.7 OCL=0.52 
SKH=15 SKL=15 TERM=50 1/4; 

! set the frontend parameter for the channel 1 trought 4

~FRONTEND AUX SVH=11.1 SVL=1.1 SCH=0.0121 SCL=0.01111 IMP=200 PMO=1 OCH=0.61 OCL=0.51 
SKH=14 SKL=14 TERM=10 1/4; 

! set the frontend parameter for the auxsiliary channel 1 trought 4

~AUX PHASE_1 1;

~AUX PHASE_2 2;

~AUX PHASE_3 3;

~AUX WINDOW_4 INV 4;

~CHOUT DIGITAL 1/4;

!~PULL UP 2 DOWN 1 UP DOWN 3 NONE 4 UP 5/32;

!~ROUT RS1 1/32 ;

!~CHLEV IH=14. IL=0 OH=2.4 OL=0.8 1/32;

!~FRONTEND SVH=40 SVL=1 SCH=0.01 SCL=0.01 IMP=400 PMO=2 OCH=0.7 OCL=0.8 SKH=15 
SKL=15 TERM=50 1/4; 

!~AUX PHASE_4 1 PHASE_2=4 ;

~PAUSE "FRONTEND";

ENDTEST;

________________________________________________________________ 

Example 2

&#169;2008 
 Seica S.p.a - All right reserved