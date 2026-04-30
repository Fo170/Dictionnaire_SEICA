# ~COMP example

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=4;

DECLARE VARIABLE VAR1;

DECLARE RUNTIME FLOAT RREG;

DECLARE RUNTIME INTEGER RVAR2;

DECLARE RUNTIME STRING PAROLA;

CLOCK=50N;

START TCOMP STATIC;

/;

~CALC RREG=2;

~CALC RVAR2=3;

~CALC PAROLA=CHANNEL1;

IH S1 S2;

/;

IL S1 S2;

/;

~COMP RREG LO=3 HI=5; !Instruction ~COMP 
 specifying the test range 

/;

~COMP RREG LO=3; !Instruction ~COMP specifying 
 only the lower limit. If the RREG value is smaller than 3 the partial 
 error flag is activated 

/;

~COMP RREG HI=5; !Instruction ~COMP specifying 
 only the upper limit. If the RREG value is bigger than 5 the partial error 
 flag is activated 

/;

~COMP RREG LO=3 HI=5 ONERROR LAB1; !If 
 the RREG is out of the specified range, the system jumps to label LAB1 

/;

~COMP RREG LO=3 HI=5 ONPASS LAB1; !If 
 the RREG is within the specified range, the system jumps 
 to label LAB1 

/;

~COMP RREG LO=VAR1 HI=5 ONERROR LAB1; !The 
 value of the lower limit is specified by a variable 

/;

~COMP RREG LO=3 HI=(RVAR2+5) ONERROR LAB1; !The 
 value of the upper limit is specified by an expression 

/;

~COMP PAROLA LO=CHANNEL3 HI=CHANNEL3; !The 
 variable to compare is a string type 

/;

IH S2;

/;

/;

IH S1;

/;

LABEL LAB1;

~WRITE Comparison done ! ;

/;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved