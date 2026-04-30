# ~READ_SCR example

Example 1

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE RUNTIME FLOAT VAR1;

DECLARE RUNTIME INTEGER IN1;

DECLARE RUNTIME STRING ST1;

CLOCK=50N;

START TREAD STATIC ;

~IH S1;

/;

~WRITE Enter a number: ; !Read of a 
 float number and stores it in the VAR1 variable! 

~READ_SCR VAR1;

/;

~WRITEEnter a whole number: ; !Read 
 of a whole number and stores it in the IN1 variable !~READ_SCR IN1;

/;

~WRITEEnter a string: ; !Read of a string 
 and stores it in the ST1 variable !

~READ_SCR ST1;

/;

~IL S1 S2;

/;

~IH S1;

/;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved