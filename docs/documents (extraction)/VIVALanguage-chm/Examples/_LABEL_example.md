# _LABEL example

Example 
 1

START PRG1 STATIC;

~TEST VOLT HI=TOLP,LO=TOLM,MAX=15,

LI4,TIM=0.5 ;

~CURSOR 10,7;

~WRITE " LIVELLO ALTO = ";

~WRITE AR;

~BRANCH ONPASS SOTTO5;

~CALC SUBERR=SUBERR+1;

LABEL=SOTTO5;

~OM IHCH;

.

.

LABEL=FULL;

~CALC STATO_T1=0;

~CALC STATO_T2=0;

.

.

~COMP SCREEN HI="C" LO="C" ONPASS FULL;

~COMP SCREEN HI="F" LO="F" ONPASS FINSTOP;

.

.

LABEL=FINSTOP;

~CALL FINESTOP;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved