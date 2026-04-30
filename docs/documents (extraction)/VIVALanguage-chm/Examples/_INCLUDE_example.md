# #INCLUDE example

Example 1

#INCLUDE FUNZMAC; ! Include of the functional 
 macro file FUNZMAC.lib

DECLARE CHANNEL S1=1;CLOCK=50N;

TIMING

TIM1;

PERIOD 10C;

STROBE 3C;

ENDTIMING;

START PRG1;

.

.

ENDTEST;

___________________________________________________________

Example 2

@COMPILER INCLUDE_ON; !this directive 
 allows the contents 
 of the MACRO.lib file to be included in the list file PRG2.pac 

$INCLUDE MACRO; !Includes 
 the MACRO.lib file! 

DECLARE CHANNEL DAT1=34;

DECLARE CHANNEL DAT2=35;

TIMING TIM2;

PERIOD 5C;

STROBE 4C;

ENDTIMING;

START PGR2;

.

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved