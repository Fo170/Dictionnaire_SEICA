# ~READ_IEEE example

Example 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE RUNTIME FLOAT VAR1;

START PRG1 STATIC ;

~IH S1;

/;

~READ_IEEE VAR1; !Reads a float number 
 and stores it in the VAR1 variable!

/;

~PRINT VAR1;

~IL S1 S2;

/;

~IH S1;

/;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved