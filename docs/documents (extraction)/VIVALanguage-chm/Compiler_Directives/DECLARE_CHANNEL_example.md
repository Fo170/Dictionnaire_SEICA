# DECLARE 
 CHANNEL example

Example 
 1

DECLARE CHANNEL RESETN = 2;

DECLARE CHANNEL S2=12;

DECLARE CHANNEL S4=22;

START PRG1;

IL RESETN; !board reset!

/;

/;

IH RESETN;

/;

/;

IL S2;

/;

IH S4;

/;

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved