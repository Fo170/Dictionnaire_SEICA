# Instruction 
 / example

Example 1

DECLARE CHANNEL WR=56

DECLARE CHANNEL RD=86

TIMING TIM1;

PERIOD 4C;

STROBE 3C;

ENDTIMING;

START PRG1;

/ TIMING TIM1;

IL WR;

IH RD;

/; !Pattern 
 1

IH WR;

IL; RD;

/; !Pattern 
 2

ENDTEST

--------------------------------------------------------------------------------

EXAMPLE 2

DECLARE CHANNEL WR=56;

DECLARE CHANNEL RD=86;

TIMING TIM1;

PERIOD 4C;

STROBE 3C;

ENDTIMING;

START PRG1;

PATTERN TIMING TIM1;

IL WR; 

IH RD;

PATTERN; !Pattern 
 1

IH WR;

IL; RD;

PATTERN; !Pattern 
 2

ENDTEST

&#169;2008 
 Seica S.p.a - All right reserved