# ~RFORMAT 

# 

# 

# 

__________________________

### Syntax

~Rformat 
 integers, decimals, format ,separator, space ; 

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

If the ~RFORMAT is not specified, the format 
 is defined by the last instruction ~FORMAT.

__________________________

### Note

The formats EXP and FLOAT 
 (the default format) are referred to the floating point register, the 
 associated separator and spaces will be referred only to the printing 
 of such register.

The formats DEC, OCT, 
 HEX, ASC are referred to the integer register, the associated separator 
 and spaces will be referred only to the printing of such register.

The format STR is referred 
 to the string register, the associated separator and spaces will be referred 
 only to the printing of such register.

__________________________

### See 
 also 

~Format

~Aformat

__________________________

### Examples

~Rformat example 

Defines the format of the constants and 
 the FLOAT, STRING and INTEGER type variables during input/output operations 
 to be executed with the ~REPORT instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved