# ~BRANCH example

Example 1

DECLARE RUNTIME INTEGER SUBERR;

DECLARE VARIABLE J;.

START TBRAN STATIC;

/;

.

.

~BRANCH TEST1; !The 
 jump to test 1 is executed in any case 

.

.

.

LABEL=TEST1;

.

.

.

~BRANCH ONPASS LAB2; !The 
 jump is executed if the partial error flag is not active 

~CALC SUBERR=SUBERR+1;

LABEL=LAB2;

.

.

.

~BRANCH ONERROR T2L2; !The jump is executed if the partial error flag 
 is active 

@FOR J= 0 TO 2;

~WRITE MAIN;

@ENDFOR;

LABEL=LAB2;

.

.

.

ENDTEST;

_______________________________________________________________________ 

Example 2

DECLARE VARIABLE J;

*Jump within the macro MESS* 

@MACRO MESS VOLTE;

@FOR J=3 TO VOLTE;

@LABEL=j;

~BRANCH=@MAC;

~WRITE "MESSAGE IN MASTER ";

label=@MAC;

@ENDFOR;

@ENDMACRO;

.

.

*Jump within the macro MESS1* 

@MACRO MESS1 VOLTE;

@FOR J=3 TO VOLTE;

@LABEL=j;

~BRANCH ONPASS=@MAC1;

~WRITE "MESSAGE IN MASTER ";

label=@MAC1;

@ENDFOR;

@ENDMACRO;

/;

*Jump within the macro MESS2* 

@MACRO MESS2 VOLTE;

@FOR J=3 TO VOLTE;

@LABEL=j;

~BRANCH ONERROR=@MAC2;

~WRITE "MESSAGE IN MASTER ";

label=@MAC2;

@ENDFOR;

@ENDMACRO;

.

.

*Call to a macro* 

@MESS 7;

/;

*Call to a macro* 

@MESS2 2;

/;

*Call to a macro* 

@MESS1 3;

/;

*Call to a macro* 

@MESS1 9;

/;

*Call to a macro* 

@MESS2 6;

.

.

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved