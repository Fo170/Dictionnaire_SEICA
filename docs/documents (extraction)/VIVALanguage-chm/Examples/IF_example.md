# @IF example

Example 1

DECLARE CHANNEL CH1=54;

DECLARE VARIABLE A,B;

START PRG1;

/;

@CALCOLATE A=12;

@CALCOLATE B=20;

/;

@IF A eq B;

IH CH1;

/;

@ELSE;

IL CH1;

/;

@ENDIF;

/;@CALCOLATE A=1;/;

@IF A < 15;

IH CH1;

/;IL CH1;/;

@ENDIF;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved