# ~CONNECT 
 SIGNALS example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

START example STATIC;

.

! Connect together on a line the four channels

~CONNECT SIGNALS ch1, ch2, ch3, ch4 ;

.

ENDTEST;

___________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

START example STATIC;

.

! Connect together (using a line) channels ch1 
 and ch2.

~CONNECT SIGNALS ch1, ch2 LABEL=conn1;

....

! Connect channels ch3 and ch4 to the same line 
 used by the instruction CONNECT identified with the label conn1. The result 
 is that all four !channels are connected together on the same line.

~CONNECT SIGNALS ch3, ch4 TO_LABEL=conn1 LABEL=conn2;

.

ENDTEST;

___________________________________________________________

Example 
 3

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

START example STATIC;

.

! Connect together 
 (using a line) channels ch1 and ch2.

~CONNECT SIGNALS ch1, ch2 LABEL=conn1;

....

! Connect channels ch3 and ch4 together on a 
 line and connect this line to channel ch1. The result of this operation, 
 unlike example 2, is !that all four channels are connected together but 
 this time we are using two different lines, one connecting ch1 and ch2, 
 the other !connecting ch3 and ch4; the two lines are then connected together. 

~CONNECT SIGNALS ch3, ch4 TO=ch1; 

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved