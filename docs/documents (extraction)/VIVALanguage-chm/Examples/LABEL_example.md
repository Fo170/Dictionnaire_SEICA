# @LABEL example

Example 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

DECLARE RUNTIME INTEGER J;

DECLARE VARIABLE I;

START PRG1 STATIC;

/;

~CALC J=4;

@FOR I=1 TO 5;

@LABEL=I; !Definition of the label prefix 

~CALC J=J+1;

~IF J=7; !If J=7 jumps to the label I_EQ7 
 where I assumes a different value at every @FOR loop 

~BRANCH @EQ7;

~ENDIF;

~BRANCH @NOTEQ; !If J is different from 
 7, high at label I_NOTEQ where I assumes a different value at each @FOR 

LABEL=@EQ7;

~WRITE "J=7";

~BRANCH @ENDCY; !Jumps to the I_ENDCY 
 label where I 
 assumes a different value at each @FOR loop 

LABEL=@NOTEQ;

/;

~WRITE "J NOT 7";

LABEL=@ENDCY;

~PAUSE J;

@ENDFOR;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved