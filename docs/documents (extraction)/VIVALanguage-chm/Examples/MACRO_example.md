# MACRO example

Example 
 1

Declaration of a macro and call to a macro inside 
 the program.

TIMING TIM3;

PERIOD 10C;

PHASE 3C 7C;

STROBE 9C;

ENDTIMING

@MACRO CLKSU;

IH CLK;

IL CLKN,BRCLK,MN15P6;

/;

@ENDMACRO;

START PRG1;

/;

.

.

.

@CLKSU;

.

.

.

ENDTEST;

________________________________________________________________ 

Example 2

Declaration of a macro with passing of global 
 parameters.

TIMING TIM1;

PERIOD 10C;

PHASE 3C 7C;

STROBE 9C;

ENDTIMING;

DECLARE ARGUMENT VAHH,VAHL,VALH,

VALL,VDHH,VDHL;

@MACRO RDROM (VAHH,VAHL,VALH,VALL,VDHH,VDHL);

IG ADDHH=VAHH;

IG ADDHL=VAHL;

IG ADDLH=VALH;

IG ADDLL=VALL;

IL FC0,FC2,SIZE0;

IH RW,FC1,SIZE1;

/;

IL ASN;

/;

IL DSN;

/;

OG DATHH=VDHH;

OG DATHL=VDHL;

/;

@ENDMACRO;

START PRG1;

/;

.

.

.

@RDROM (0X00, 0X01, 0X80, 0X 04, 0X55, 0XAA);

/;

.

.

.

ENDTEST;

________________________________________________________________ 

Example 3

Declaration of a macro with passing of local 
 parameters.

TIMING TIM2;

PERIOD 10C;

PHASE 3C 7C;

STROBE 9C;

ENDTIMING;

DECLARE VARIABLE I, J,K;

@MACRO SOMMA (J,K); !The J and K arguments 
 @CALC I=J+K; 
 are local and are seen ENDMACRO; only by the SOMMA 

macro!

START PRG2;

/;

.

.

@SOMMA (2,3);

/;

.

.

ENDTEST;

________________________________________________________________ 

Example 4

Declaration of a macro with passing of local 
 parameters.

TIMING TIM3;

PERIOD 10C;

PHASE 3C 7C;

STROBE 9C;

ENDTIMING;

DECLARE VARIABLE I, J,K;

@MACRO SOMMA (J,K); !The J and K arguments 

@CALC I=J+K; are local and are seen solo 
 @ENDMACRO; only by the SOMMA macro!

@MACRO SOTTRAI (J,K); ! 
 Even though arguments J and K have 

@CALC I=J-K; the same name as those of 
 the SOMMA

@ENDMACRO; macro, they are different from 
 the 

preceding ones, are local and are seen 

only by the SOTTRAI macro!

START PRG3;

/;

.

.

@SOMMA (2,3);

/;

.

.

@SOTTRAI (10,4);

.

.

ENDTEST;

________________________________________________________________ 

Example 5

Macro declaration with passage of define type 
 parameters. When the described macro is compiled, it will develop the 
 stimuli:

TIMING TIM4;

PERIOD 10C;

PHASE 3C 7C;

STROBE 9C;

ENDTIMING;

DECLARE CHANNEL CH1=16;

DECLARE CHANNEL CH2=45;

@MACRO CANALI (@STATO1,@STATO2);

@STATO1 CH1;

@STATO2 CH2;

@ENDMACRO; !As you can see, the define 
 type arguments must be preceded by the @ 
 character!

START PRG4;

/;

.

@CANALI (IL,IH); !This macro develops 
 the IL CH1 and IH CH2 stimuli in this pattern!

/;

@CANALI (IH,IL); !This macro develops 
 the IH 
 CH1 and IL CH2 stimuli in this pattern!

/;

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved