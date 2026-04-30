# ~ATEST example

declare runtime float d=1.23;

declare runtime float c=4.32; 

declare runtime float testValue;

START example STATIC;

testValue=2.4;

~ATEST testValue NAME="TEST1" 
 LO=d HI= 
 c ;

testValue=11.34 ;

~ATEST testValue NAME="TEST2" 
 LO=(d+10.1) 
 HI=(c+10.1) 
 ;

! This test will fail so it won't jump to the 
 label TEST7P 

testValue=11.32 ;

~ATEST testValue NAME="TEST3" 
 LO=(d+10.1) 
 HI=(c+10.1) 
 ONPASS test7P ;

.....

LABEL=TEST7P;

! This test will fail so it will jump to the 
 label TESTFAIL

testValue=5 ;

~ATEST testValue NAME="TEST4" 
 LO=(d+10.1) 
 HI=(c+10.1) 
 ONERROR testfail ;

.....

! This test will fail the limit are set to <19,>21 
(5 % of 20) 

testValue=22 ;

~ATEST testValue NAME="TEST5" 
 VALUE=20 TOL=5;

.....

! This test will pass the limit are set to <19 
(5 % of 20) no upper limit

testValue=22 ;

~ATEST testValue NAME="TEST6" 
 VALUE=20 TOLM=5;

.....

! This test will fail the limit are set to >21 
(5 % of 20) no upper limit

testValue=22 ;

~ATEST testValue NAME="TEST7" 
 VALUE=20 TOLP=5;

.....

LABEL=TESTFAIL;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved