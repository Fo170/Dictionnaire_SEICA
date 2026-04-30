# TIMING example

Example 
 1

TIMING TIM1

PERIOD 10C;

PHASE1 3C 7C;

STROBE 9C;

ENDTIMING;

TIMING TIM2;

PERIOD 7C;

STROBE 5C;

DEAD 2C;

PHASE1 2C 3C;

ENDTIMING;

START PRG1;

/;

IL S2;

/ TIMING TIM1; !Associates TIM1 to this 
 pattern!

IH S2;

IL S1;

/; !TIM1 is implicitly associated to this 
 pattern!

IL S2;

/; !TIM1 is implicitly associated to this 
 pattern!

IH S2;

/ TIMING TIM2; !Associates TIM2 to this 
 pattern!

IL S2;

IH S1;

/; !TIM2 is implicitly associated from 
 here, on!

/;

/;

/;

ENDTEST

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved