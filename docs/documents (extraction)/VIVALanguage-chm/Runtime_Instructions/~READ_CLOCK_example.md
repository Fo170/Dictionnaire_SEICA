# ~READ_CLOCK 
 example

Example 1

DECLARE RUNTIME INTEGER CLO, CLO1 I;

DECLARE RUNTIME FLOAT CLO2;

START LETTURA STATIC;

~READ_CLOCK CLO;

~WRITE "\CR CLOCK= " CLO;

~FOR I=1 TO 23;

~IL D0;/;~IH D0;/;

~ENDFOR;

~READ_CLOCK CLO1;

~WRITE "\CR CLOCK= " CLO1;

~CALC CLO1=CLO1-CLO;

~WRITE " \CR CLOCKD= " CLO1;

~CAlC CLO2=CLO1/1000;

~WRITE " \CR CLOCKD= " CLO2;

~PAUSE;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved