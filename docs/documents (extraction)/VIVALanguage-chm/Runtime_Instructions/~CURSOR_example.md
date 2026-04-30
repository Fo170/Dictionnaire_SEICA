# ~CURSOR examples

EXAMPLE 1

DECLARE RUNTIME FLOAT TEMP,TEMP1,TEMP2;

START PRG1;

/;

~CALC TEMP1=100;

~CALC TEMP2= 3.3;

/;

~CALC TEMP=TEMP1/TEMP2*1000;

/;

~CURSOR 10,5;

~WRITE Channel impedance on positive voltage = ;

~WRITE TEMP;

/;

~WRITE \CU\001\025\ CHANNEL NR. 
 CAN; !Moves the cursor on the column1, line 
 25 and writes CHANNEL NR. 

~WRITE \CU\002\030\ CAN1;

~WRITE \CU\001\025\ CAN CHANNEL NR. CAN1;

~WRITE \CR FINE; !New line, and writes FINE 

/;

ENDTEST;

________________________________________________________ 

EXAMPLE 2

!Creation of a graph on video

DECLARE RUNTIME FLOAT REG2; !When the 
 registers REG1-100 are defined it is also possible to declare only the 
 biggest, in this case REG2, the others will be automatically declared. 

DECLARE RUNTIME INTEGER I;

START PROFUN1 STATIC;

~CALC REG1=1;

~FOR I=REG1 TO 10;

~MEAS VOLT LI1 MAX=2 TIM=1;

~CALC REG2=1;

~CURSOR (REG1, REG2);

~WRITE ".";

~CALC REG1=REG1+1;

~ENDFOR;

~PAUSE;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved