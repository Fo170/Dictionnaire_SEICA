# ~SUBR example

Example 1

! Subroutine declaration 

DECLARE SUBROUTINE PROVA;

~SUBR PROVA;

~CURSOR 1,1;

~WRITE "TEST SUBROUTINE " 

~PAUSE 1;

~RETURN;

~ENDSUBR;

START PROFUN STATIC ;

~CALL PROVA;

ENDTEST;

___________________________________________________________ 

Example 2

!Subroutine with internal variable declaration. 
 Note that the variable J defined in the subroutine PROVA is DIFFERENT 
 from the variable J !defined in PROVA2 even though the have the same name. 
 Therefore the variables are local to their subroutine. 

DECLARE SUBROUTINE PROVA PROVA2;

~SUBR PROVA;

DECLARE RUNTIME FLOAT J;

~CALC J=4.4;

~CURSOR 1,1;

~WRITE "VALUE 1" J;

~PAUSE J;

~RETURN;

~ENDSUBR;

~SUBR PROVA2;

DECLARE RUNTIME FLOAT J;

~CALC J=3.4;

~CURSOR 1,2;

~WRITE "VALUE 2";

~PAUSE J;

~RETURN;

~ENDSUBR;

START PROFUN STATIC ;

~CALL PROVA;

~CALL PROVA2;

ENDTEST;

___________________________________________________________ 

Example 3

!Inclusion of a subroutine library file. File 
 MIESUB.lib 
 written under the directory \\BOARD\nomeboard 

DECLARE SUBROUTINE PROVA PROVA2;

~SUBR PROVA;

DECLARE RUNTIME FLOAT J;

~CALC J=4.4;

~CURSOR 1,1;

~WRITE "VALUE 1" J;

~PAUSE J;

~RETURN;

~ENDSUBROUTINE;

~SUBR PROVA2;

DECLARE RUNTIME FLOAT J;

~CALC J=3.4;

~CURSOR 1,2;

~WRITE "VALUE 2";

~PAUSE J;

~RETURN;

~ENDSUBR;

directory \\BOARD\nomeboard 

#INCLUDE MIESUB;

START PROFUN STATIC ;

~CALL PROVA;

~CALL PROVA2;

ENDTEST;

___________________________________________________________ 

Example 4

! Definition of a subroutine with global arguments. 

DECLARE CHANNEL CS=40;

DECLARE CHANNEL RD=17;

DECLARE CHANNEL CLK=19;

DECLARE CHANNEL DAT0=67;

DECLARE RUNTIME ARGUMENT INTEGER SUBERR;

DECLARE SUBROUTINE SUB1, SUB2;

~SUBR SUB1 (SUBERR);

~DELAY SUBERR;

~WRITE DELAY TIME EQUAL TO: , SUBERR;

~RETURN;

~ENDSUBR;

~SUBR SUB2 (SUBERR);

~FOR I=1 TO SUBERR;

~IL CLK;

/;

~IH CLK;

/;

~ENDFOR;

~RETURN;

~ENDSUBR;

START PROG1 STATIC

IL CS;

/;

IL RD;

/;

~CALL SUB2 (100);

~CALL SUB1 (10);

~CALL SUB2 (%); !In this case the previous 
 value of SUBERR is recalled, which is equal to 10. 

OH DAT0;

/;

ENDTEST;

___________________________________________________________ 

Example 5

!Subroutine definition with local arguments. 

DECLARE CHANNEL CS=40;

DECLARE CHANNEL RD=17;

DECLARE CHANNEL CTR=143;

DECLARE CHANNEL LINE0=10;

DECLARE CHANNEL DAT0=67;

DECLARE SUBROUTINE SUB2, TEST_TRI;

~SUBR SUB2 (INTEGER P1, STRING P2);

~DELAY P1;

~WRITE P2;

~RETURN;

~ENDSUBR;

~SUBR TEST_TRI (INTEGER TRICH);

~CALC SUBERR=0;

~LI4=TRICH;

~SET PUL UP OHM=1K;

~TEST VOLT HI=POSVOLT,LO=4,MAX=6,LI4,TIM=0.1;

~RETURN

~ENDSUBR;

START PGR1 STATIC;

IL CS;

/;

IL RD;

/;

OH DAT1;

/;

IH CTR;

/;

~CALL SUB2 (100, CICLO1); /;/;

~CALL TEST_TRI (10)

.. 

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved