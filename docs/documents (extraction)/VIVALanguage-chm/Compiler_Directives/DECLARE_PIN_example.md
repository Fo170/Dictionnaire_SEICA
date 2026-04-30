# DECLARE PIN 
 example

Example 
 1

DECLARE CHANNEL S1=34;

DECLARE CHANNEL S2=39;

DECLARE CHANNEL S3=40;

DECLARE PIN P1=S1;

DECLARE PIN P2=S2;

DECLARE PIN P3=S3;

DECLARE PIN P4=S4;

START PRG1;

/;

IL S1,S3;

/;

OH S2,S4;

/;

IH S1,S3;

/;

OL S2,S4;

/;

ENDTEST;

Library file

**************************

**************************

*****FILE S20LOG.LIB *****

**************************

**************************

#7400(COMM,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14)

!D,4,14;

*PI(IIOIIO.OIIOII.);

*TY(......G......V);

!3,2,1,0,0,P1,P2,P3; !These names

!3,2,1,0,0,P4,P5,P6; are associated to

!3,2,1,0,0,P9,P10,P8; the channel names!

!3,2,1,0,0,P12,P13,P11;

@C(4.7,0,2.4,.8,.1,1,P,C);

@L(HH0...........);

@L(Lh1...........);

@L(hL1...........);

@L(...HH0........);

@L(...Lh1........);

@L(...hL1........);

@L(.......0HH....);

@L(.......1Lh....);

@L(.......1hL....);

@L(..........0HH.);

@L(..........1Lh.);

@L(..........1hL.);

.

.

.

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved