# ~PAUSE example

DECLARE RUNTIME INTEGER CAN;

DECLARE RUNTIME FLOAT VAR1;

START PRG1 STATIC;

/;

~CALC CAN=12;

~CURSOR 60,20;

~WRITE CAN;

~PAUSE;

~CALC CAN=CAN+1;

/;

~CURSOR 60,21;

~WRITE CAN;

~PAUSE;

/;

~CALC CAN=CAN+1;

~CALC VAR1=3.56;

~PAUSE VAR1; !Displays the contents of 
 the VAR1 variable in the Pause Message box and executes a pause 

/;

~PAUSE 11111; !Displays the constant and 
 executes a pause 

/;

~PAUSE PROBE SU U4-6; !Displays the 
 string and executes a pause 

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved