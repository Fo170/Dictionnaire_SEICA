# DECLARE 
 PINLIST example

Example 
 1

DECLARE PINLIST = 1,2,3,4,5,6,7,8,9,10,11,12,13,14;

START PRG1;

@L(HHL01.........); !Channel 1 and 2 are 
 forced high, channel 3 is forced low, channel 4 is measured low, channel 
 5 is measured high, the other channels are masked!

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

ENDTEST;

________________________________________________________________ 

Example 2

DECLARE CHANNEL A1=22;

DECLARE CHANNEL A2=23;

DECLARE CHANNEL A3=24;

DECLARE CHANNEL A4=25;

DECLARE PINLIST= A1,A2,A3,A4;

.

.

.

&#169;2008 
 Seica S.p.a - All right reserved