# ~FOR example

Example 1

!Executes the ~FOR loop until A is greater than 
 zero and each time decrements the variable by 1 

~FOR A;

~WRITE A= , A;

~ENDFOR;

 _____________________________________________________________________ 

Example 2

!Executes the ~FOR loop until A reaches the 
 value of 10 incrementing the variable each time by 1 

~FOR A=1 TO 10;

~WRITE A= , A;

~ENDFOR;

 _____________________________________________________________________ 

Example 3

!Executes the ~FOR 
 loop until A 
 reaches the value of 10 incrementing the variable each time by 2 

~FOR A=1 TO 10 STEP 2;

~WRITE A= , A;

~ENDFOR;

 _____________________________________________________________________ 

Example 4

!Executes the ~FOR loop the first time with 
 A=1, executes A=B+1 (A=5) executes the FOR loop the second time with A=5, 
 executes A=B+1 !(A=6) executes the FOR loop the third time with A=6, executes 
 A=B+1 (A=7) and so on until A reaches or exceeds the value 30

~CALC A=1;

~CALC B=1;

~FOR A=1 TO 30 DO A=B+3;

~WRITE CICLO, A;

~CALC B=B+1;

~ENDFOR;

 _____________________________________________________________________ 

Example 5

!The step value can also be a floating point 
 and an arithmetic expression 

 ~for 
 f2=F to (g+3.4) step (F+1.1); 

 ~write 
 "\CRF2=",F2;

 ~IF FLOAT 
 (((J=0) && (F2>1.09) && (F2<1.11) ) || ((J=1) && 
 (F2>3.29) && (F2<3.31) ) || ((J=2) && (F2>5.49) 
 && (F2<5.51) ) ) ;

 J=J;

 ~ELSE;

 ~PAUSE 
 "FAIL";

 FAIL=FAIL+1;

 ~ENDIF;

 J=J+1;

n_loop=n_loop+1;

~endfor;

&#169;2008 
 Seica S.p.a - All right reserved