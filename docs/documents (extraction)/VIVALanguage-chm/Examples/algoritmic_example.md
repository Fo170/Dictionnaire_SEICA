# algoritmic example

Example 1

TIMING T1 ;

PERIOD 400n;

ASSERT1 200N;

STROBE1 200N;

ENDTIMING;

START F50DINALG STATIC;

!! setup 
 of the channel frontend 

CHOUT DIGITAL 1/32;

CHLEV IH=5 
 IL=-1 OL=0.5 OH=2 1/32;

PULL UP DOWN 1,2,3,4,5,6,7,8;

GNO 1/32;

!! start a dynamic burst

DYNAMIC TIMING T1;

OM0 1/32;

MH CH1 CH2 CH3 CH4 CH5 CH6 CH7 CH8;

/ ;

ACCL 1,2,3,4,5,6,7,8; !! 
 preload the accumulator to 0 all used pin must be listed

/;

MATH 1,2,3,4,5,6,7,8; !! 
 connect the listed channel to the accumulator all 
 pin goes from high to low

/;

ACCI 1; !! 
 group is incremented by 
 1 

/ ;

ACCI 1; !! 
 group is incremented by 
 1 

/ ;

ACCI 1; !! 
 group is incremented by 
 1 now in configuration =3 

/ ;

ACSL 1; !! 
 group are shifted left

/;

ACSL 1; !! 
 group are shifted left pin 
 in conf = 0x0c

/;

ACCD 1; !! 
 group decremented by 
 1 pin 
 in conf = 0x0b

/;

ACSR 1; !! 
 group are shifted right pin 
 in conf = 0x85

/;

ACCX 1; !! 
 group are negated pin 
 in conf = 0x7a

/;

ACCH 1,3,5,6;

ACCL 2,4,6,8;

/ ; !! 
 group loaded to conf = 0x55

/ mask STATIC;

!! read 
 statically of the value of the accumulator

READ_ACC 1;

J=AR;

FORMAT 8 HEX;

WRITE "ACC =",J; !! 
 j should be 0x55

pause "fine";

ENDTEST;

____________________________________________________________

Example 2 TEST OF A 64K ROM 
 AT FULL SPEED

TIMING T1 ;

PERIOD 200n;

STROBE1 120N;

ENDTIMING;

START DINCRC STATIC;

!! setup 
 of the channel frontend 

CHOUT DIGITAL 1/32;

CHLEV IH=5 
 IL=0 OL=0.8 OH=2 1/32;

PULL UP DOWN 1/32;

GNO 1/32;

DECLARE GROUP ADD=16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1;

DECLARE GROUP DATA=24,23,22,21,20,19,18,17;

CRC CLEAR DATA ; !! connect the data to 
 the crc register for parallel crc and clear the crc register 

!! start a dynamic burst

DYNAMIC TIMING T1;

OM0 1/32;

ML ADD; 

OM1 DATA; !! 
 se data to be sampled at strobe1 (120ns)

/ ;

ACCL ADD; !! 
 clear 2 
 acc register for pin 1 to 16 (one every 8 pin)

/;

MATH ADD; !! 
 switch the address to the 2 acc register

/;

BEGINLOOP 256;

/;

BEGINLOOP 256;

/;

ACCI 1; !! 
 inner loop increment 256 times the low part of the address

ACRC 25; !! calc the crc for all the content 
 of the rom 

/ ENDLOOP ;

ACCI 9; !! 
 outer loop increment 256 times the high part of the address

/ ENDLOOP ;

/ mask STATIC;

!! read 
 statically of the result of the crc 

READ_CRC 25; 
 !! 
 on channel listed to identified wich register are used as crc value 
 returned in AR

J=AR;

FORMAT 8 HEX;

WRITE "CRC =",J;

pause "fine";

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved