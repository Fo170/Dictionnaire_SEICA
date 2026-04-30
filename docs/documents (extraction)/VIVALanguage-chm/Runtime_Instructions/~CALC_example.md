# ~CALC example

Example 
 1

DECLARE RUNTIME INTEGER INT1;

DECLARE RUNTIME FLOAT FLT1;

DECLARE RUNTIME STRING STR1;

START PGR1 STATIC;

/;

~CALC INT1=478;

~CALC FLT1=23986.4713;

~CALC STR1=IL VALUE DI TENSIONE E: ;

/;

~CALC INT1=B010110;

~CALC INT1=D76;

~CALC INT1= -7474;

~CALC INT1=O7156;

~CALC INT1= -0XFE4;

~CALC INT1=HA7F9;

/;

~CALC INT1=INT1+5/2*4^2-8;

~WRITE INT1;

~PAUSE 1;

/;

~CALC INT1=INT1&0XF0;

~CURSOR 1,2;

~WRITE INT1;

~PAUSE 2;

/;

~CALC INT1=INT1<4;

~CURSOR 1,3;

~WRITE INT1;

~PAUSE 3;

/;

~CALC INT1=INT1|B110001;

~CURSOR 1,4;

~WRITE INT1;

~PAUSE 3;

/;

!in the following ~CALC instruction, all of 
 the operands are first converted into integer variables in decimal format, 
 and then the operation is executed.!

~CALC INT1=B01011+D7586+O1721+0XFA2+15.32;

~CURSOR 1,5;

~WRITE INT1;

~PAUSE 4;

~CALC STR1=IL +VALUE E: ;

~CURSOR 1,6;

~WRITE STR1;

~PAUSE 5;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved