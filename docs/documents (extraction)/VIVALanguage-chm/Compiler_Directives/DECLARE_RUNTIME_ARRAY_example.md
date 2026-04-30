# DECLARE 
 RUNTIME ARRAY example

Example 
 1

Definition of a float type array of five cells, 
 array initialization and contents display.

DECLARE RUNTIME FLOAT ARRAY VET[4];

DECLARE VARIABLE IND;

DECLARE RUNTIME INTEGER INDEX A;

START PRO STATIC;

~CALC VET[1]=3.3; Initialization of cell 
 0. In this case the index is a constant. 

@CALCOLATE IND=1;

~CALC VET[%IND]=4.6; Initialization of 
 cell 2. In this case the index is an integer variable . 

~CALC A=2; 

~CALC VET[A]=8.6; Initialization of cell 
 3. In this case the index is an INDEX type runtime variable. 

~CALC VET[3]=VET[%IND]+1; Cells addition.

 In 
 VET[3] the value is 5.6 (4.6+1)

~FOR A=0 TO 3; contents display of the 
 vector, on video. In this case, since the index changes within a ~FOR 
 loop, it must be defined as INDEX type. 

~CURSOR 10,A;

~WRITE VET[A];

~ENDFOR;

ENDTEST; 

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved