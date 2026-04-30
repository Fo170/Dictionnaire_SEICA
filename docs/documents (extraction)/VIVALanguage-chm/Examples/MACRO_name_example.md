# MACRO name example

Example 
 1

DECLARE CHANNEL D0=29;

DECLARE CHANNEL CK=39;

@MACRO CLOCK; macro definition

OM D0;

MH CK;

/;

ML CK;

/;

@ENDMACRO;

START PRG1;

.

.

@CLOCK; Call to the macro

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved