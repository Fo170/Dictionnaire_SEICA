# PERIOD example

Example 
 1

FCLOCK 20N;

TIMING TIM1;

PERIOD 14C; ! 280NS 14 FCLOCK

STROBE 12C; ! 240NS 12 FCLOCK

ENDTIMING;

TIMING TIM2;

PERIOD 200U;

STROBE 1OU;

ENDTIMING;

TIMING TIM3;

PERIOD 1U;

NCLOCK=20;

STROBE 1OU;

ENDTIMING;

TIMING TIM4;

PERIOD 1U;

NCLOCK=AUTO;

STROBE 1OU;

ENDTIMING;

START PRG1;

/ DYNAMIC TIMING TIM1;

IH 1;

OL 2;

/ ; ! Duration 280n 14*fclock

/ timing TIM2 ; ! 
 duration 200US 

/ timing TIM3 ; ! 
 duration 20Us 

/ timing TIM4 NCLOCK=30 ; ! 
 duration 30Us 1u*NCLOCK 

/ timing TIM4 NCLOCK=6 ; ! 
 duration 6Us no sense on S2 THE STROBE IS OUTSIDE THE PERIOD 

/ timing TIM4 NCLOCK=123 ; ! 
 duration 123Us no sense of signal S2 at 10US

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved