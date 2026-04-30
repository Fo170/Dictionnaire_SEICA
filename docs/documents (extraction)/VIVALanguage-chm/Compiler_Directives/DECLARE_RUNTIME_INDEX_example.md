# DECLARE 
 RUNTIME INDEX example

Example 
 1

Definition of a two-cells integer type array 
 and initialization.

DECLARE RUNTIME INTEGER ARRAY VET[2];

DECLARE RUNTIME INTEGER INDEX A;

START PRO STATIC;

~CALC A=1; 

~CALC VET[A]=8; Initialization 
 of cell 1.

~CALC A=A+1; 

~CALC VET[A]=2; Initialization 
 of cell 2.

~FOR A=1 TO 2; 
 Display of the contents of the vector, on video. 

~CURSOR 10,A;

~WRITE VET[A];

~ENDFOR;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved