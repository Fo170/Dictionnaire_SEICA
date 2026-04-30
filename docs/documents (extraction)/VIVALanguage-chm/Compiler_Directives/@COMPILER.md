# @COMPILER 

# 

# 

# 

________________________

### Syntax

@COMPILER 
 option ;

option

COMPLEX=num 

Defines the max number of iterations for the cycles @FOR 
 - @WHILE. 

If the number of cycles exceed this number, then the cycle automatically 
 ends. 

The maximum number that can be defined is 32767.

MAX_ERROR=num

Defines the maximum number of errors considered by the compiler.

The maximum number that can be defined is 32767.

VARNAME_LEN=num

Defines the maximum number of chars to be considered for each variable 
 of the program.

The maximum number that can be defined is 20.

COMP_TEST_315

Force the compiler to use the compatibility with version 3.1.5 of S20 
 software

COMP_TEST_VIVA_141

Force the compiler to use the compatibility with version 1.4.1 and 
 old last S20 software

COMP_TEST_VIVA_143

Force the compiler to use the compatibility with version 1.4.3 

COMP_TEST_VIVA_201

Force the compiler to use the compatibility with version 2.0.1 

COMP_TEST_VIVA_202

Force the compiler to use the compatibility with version 2.0.2

COMP_TEST_VIVA_203

Force the compiler to use the compatibility with version 2.0.3 

COMP_TEST_VIVA_205

Force the compiler to use the compatibility with version 2.0.5

COMP_TEST_VIVA_221

Force the compiler to use the compatibility with version 2.2.1

COMP_TEST_VIVA_240

Force the compiler to use the compatibility with version 2.4.0

COMP_TEST_OFF

Force the compiler to use the latest features 

PROMOTION_MODE_C

Force calculations with C operand priority; all variables will be promoted 
 to the highest type of the VL expression (within the parenthesis)

PROMOTION_MODE_VBS

Force calculations with VBS operand priority; all variables will be 
 promoted to the highest type of the VL expression (within the parenthesis)

PROMOTION_MODE_L200

Force calculations with L200 COMPATIBILITY; all variables will be promoted 
 to the highest type of the VL expression (within the parenthesis)

PROMOTION_MODE_OLD

Force old method of calculating with priority from left to right end; 
 all variables are first promoted to the type of the destination variable

DIGITAL_LANGUAGE_S700

Enable the digital language similar to S700 for the separate use of 
 phase and format setting and state of digital dynamic commands

DIGITAL_LANGUAGE_L200

Enable the digital language similar to L200 for the separate use of 
 phase and format setting and state of digital dynamic commands

EXPORT_LASAR 

Force to create a file compatible with LASAR (TM)

DIGITAL_F50

allow to use the new phase capabilities of the F50

DIGITAL_F50_HIDDEN

avoid the use of hidden pattern for programming

special feature of F50

DIGITAL_F40

force to use hardware compatibility to F40

DIGITAL_LANGUAGEn 

(n= 0 to 16)

bit 1 = force a check of the asserted driver

bit 2= force a mask to asserted channel

bit 4= enable the use of IHn ILn IGn Mhn MLn MGn

SYNC_AT n

generate sync at the n pattern specified 

ENABLE_FLY_DIGIPLEX

Enable use of fly channel as digital channel 

BACKUP

Create a *.PAC file with an expanded copy of the source file

BACKUP

LOOP_ON | 
 LOOP_OFF

Control the expansion of the loop in the *.PAC

BACKUP

MACRO_ON | 
 MACRO_OFF

Control the expansion of the macro in the *.PAC

BACKUP

INCLUDE_ON | INCLUDE_OFF

Control the expansion of the include in the *.PAC

BACKUP

NUMBER_ON | NUMBER_OFF

Control the insertion of line number in the *.PAC

__________________________

### Note

The @COMPILER instruction 
 must be written at the beginning of the program, before the START instruction.

The compatibility is by default equal to the version on witch the board 
 was created; this will be overwritten by the version and promotion specified 
 in the MAINTENANCE / OPTION / FUNCTIONAL and then by what is specified 
 into each source file (before the START).

Using backward compatibility does not disable new features of the compiler, 
 only the behavioral is different.

__________________________

### See 
 also 

__________________________

### Examples

@COMPILER example 

Specifies the options to use during the 
 compilation of a .PAT file program.

Preprocessor R Runtime : Dynamic * 
 Static 
 *

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved