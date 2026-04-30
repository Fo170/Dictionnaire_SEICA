# DECLARE 
 RUNTIME ARGUMENT example

Example 
 1

DECLARE CHANNEL CLK=34;

DECLARE RUNTIME INTEGER I;

DECLARE RUNTIME ARGUMENT INTEGER NUMCLK

START PRG1 STATIC;

~START_SUB;

~SUBR CLOCK(NUMCLK);

~FOR I=1 TO NUMCLK;

~IL CLK;

/;

~IH CLK;

/;

~ENDFOR;

~RETURN;

~END_SUB;

~CALL CLOCK(23);

~CALL CLOCK(*); !Since the argument is 
 global, if it is recalled in this way, the previous value of NUMCLK is 
 taken, that is 23. 

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved