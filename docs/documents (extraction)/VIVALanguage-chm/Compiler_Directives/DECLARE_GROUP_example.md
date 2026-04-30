# DECLARE GROUP 
 example

Example 
 1

DECLARE CHANNEL RESETN=156;

DECLARE CHANNEL D0 = 1;

DECLARE CHANNEL D1 = 2;

DECLARE CHANNEL D2 = 3;

DECLARE CHANNEL D3 = 4;

DECLARE CHANNEL D4 =5;

DECLARE CHANNEL A0 = 20;

DECLARE CHANNEL A1 = 21;

DECLARE CHANNEL A2 = 22;

DECLARE CHANNEL A3 = 23;

DECLARE GROUP DATI =1,2,3,4;

DECLARE GROUP ADDR =A0,A1,A2,A3;

START PRG12;

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

IG DATI=B0101; !assigns the low value 
 to channels 1 and 3 and the high value to channels 2 and 4!

IG ADDR=0XC; !assigns the high value to 
 channels A0 and A1 and the low value to A2 and A3!

.

.

ENDTEST;

Example 2

DECLARE CHANNEL D0 = 1;

DECLARE CHANNEL D1 = 2;

DECLARE CHANNEL D2 = 3;

DECLARE CHANNEL D3 = 4;

DECLARE CHANNEL D4 =5;

DECLARE CHANNEL D5 = 20;

DECLARE CHANNEL D6 = 21;

DECLARE CHANNEL D7 = 22;

DECLARE CHANNEL D8 = 23;

DECLARE GROUP DATL =DO,D1,D2,D3;

DECLARE GROUP DATH =D4,D5,D6,D7;

DECLARE GROUP DATABUS =DATL,DATH;

START PRG13;

IG DATL=B0101; !assigns values to the 
 data D0..D3

/;

IG DATH=0XC; !assigns values to the data 
 D4..D7

/

IG DATABUS=0XA4; assigns a value to the 
 bus 

/;

IL DATABUS;

/;

IH DATABUS;

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved