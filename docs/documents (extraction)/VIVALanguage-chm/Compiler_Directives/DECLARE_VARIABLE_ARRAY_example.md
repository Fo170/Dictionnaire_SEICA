# DECLARE 
 VARIABLE ARRAY example

Example 
 1

DECLARE ARRAY A1[4]; Definition of array 
 A1 of five 

elements 

DECLARE ARRAY A2[4]=1,4,78,23,89; Definition 
 of array A2 of 5 
 elements and initialization

DECLARE CHANNEL CS=13;

DECLARE CHANNEL RD=77;

DECLARE CHANNEL D0=346;

DECLARE CHANNEL D1=745

DECLARE CHANNEL D2=76;

DECLARE CHANNEL D3=78;

DECLARE GROUP DATA=D0,D1,D2,D3;

DECLARE VARIABLE I;

START PRO;

@CALCOLATE A1[0]=23; Array A1. Initialization 
 of cell 0

@CALCOLATE A1[1]=A2[0]; Array A1. Initialization 
 of cell 1

@CALCOLATE A1[2]=35; Array A1. Initialization 
 of cell 2

@FOR I=0 TO 3; This loop reads from a 
 memory and compares the contents read with the contents of the array. 

IL CS;

/;

IL RD;

/;

OG DATA=A2[I]; Data comparison

/;

IH RD;

/;

IH CS;

/;

@ENDFOR;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved