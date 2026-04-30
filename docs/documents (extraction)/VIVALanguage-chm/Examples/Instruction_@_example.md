Example of instruction @

EXAMPLE 1

DECLARE CHANNEL D0=29;

DECLARE CHANNEL CK=39;

@MACRO CLOCK; !Macro 
 definition !Definizione della macro

OM D0;

MH CK;

/;

ML CK;

/;

@ENDMACRO;

START PRG1;

.

.

@CLOCK; !Call 
 to the macro !Chiamata alla macro

.

.

ENDTEST;

--------------------------------------------------------------------------------