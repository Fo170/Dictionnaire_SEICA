# ~FORMAT 

# 

# 

# 

__________________________

### Syntax

~Format 
 integers, decimals, format ,separator, space[AUTOCR] ; 

integers

Numbers of integers to consider in the INTEGER and FLOAT type variables

decimals

Number of decimals to consider (only in FLOAT type variables)

format

Defines the type of notation for the variables, which can be:

EXP: 
 specifies the exponential notation

DEC: 
 specifies the decimal notation

OCT: 
 specifies the octal notation

HEX: 
 specifies the hexadecimal notation

ASC: 
 converts the number introduced in the corresponding ASCII (41=A) format.

STR: 
 specifies the format for printing the strings

SPA=n: 
 specifies how many space to be inserted between the 
 fields to be printed (default is 0) 

SEP=COLON|SEMICOLON|STRING:specified 
 to insert a separator between 
 the field to be printed (default is NONE)

space[AUTOCR]

Eliminates the necessity of pressing the ENTER key to confirm the entry 
 of the data in the subsequent READ_SCR instructions. This option remains 
 active until the next ~FORMAT definition.

If the ~FORMAT instruction is not specified, 
 by default the number of decimals is 3 while the whole part is considered 
 in its entirety, rounded to the fifteenth figure. The notation is decimal.

__________________________

### Note

The format EXP or FLOAT 
 (the default format) are referred to the floating point register, the 
 associated separator and spaces will be referred only to the printing 
 of such register.

The format DEC, OCT, 
 HEX, ASC are referred to the integer register, the associated separator 
 and spaces will be referred only to the printing of such register.

The format STR is referred 
 to the string register, the associated separator and spaces will be referred 
 only to the printing of such register.

__________________________

### See 
 also 

~Aformat

~Rformat

__________________________

### Examples

~Format example 

Defines the format of the constants and 
 the FLOAT, STRING and INTEGER type variables for the input/output operations 
 to be executed with the ~WRITE, ~PRINT, ~REPORT, ~READ_SCR, ~READ_IEEE, 
 SEND_IEEE and ~PAUSE instructions.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved