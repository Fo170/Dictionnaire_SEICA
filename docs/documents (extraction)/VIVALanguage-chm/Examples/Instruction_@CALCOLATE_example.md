Example of instruction @CALCOLATE

EXAMPLE 1

DECLARE VARIABLE VAR,VAR1;

START PRG1;

/;

@CALCOLATE VAR=1;

@CALCOLATE VAR1=10;

/;

@CALCOLATE VAR=VAR1+15;

@CALCOLATE VAR=(56-5*(2/4)&0X0F|0X50);

/;

ENDTEST;

--------------------------------------------------------------------------------