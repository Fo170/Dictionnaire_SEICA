# DECLARE VARIABLE 

# 

# 

# 

________________________

### Syntax

DECLARE 
 VARIABLE name1, 
 name2,...

DECLARE 
 VARIABLE FLOAT 
 name1, 
 name2,...

DECLARE 
 VARIABLE STRING 
 name1, 
 name2,...

 DECLARE VARIABLE 
 datatype 
 name2=initialer;

 DECLARE VARIABLE 
 datatype 
 ARRAY 
 name2[dimension]=Initializer,initializer;

VARIABLE

Integer variable 

VARIABLE FLOAT

Floating point variable

VARIABLE STRING

String variable

name1,name2

Alphanumerical string maximum 20 characters long that indicates the 
 name of the variable. The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

dimension

Specifies the array dimension.

It can be expressed as a whole number or as a INTEGER type variable. 
 The maximum dimension is: 

 * 

128000 for INTEGERS, considered as the total sum 
 of all INTEGER type arrays and of INTEGER runtime variables of the program. 

 * 

128000 for FLOAT, considered as the total sum 
 of all FLOAT type arrays and of FLOAT runtime variables of the program. 

 * 

8192 for STRING, considered as the total sum of 
 all STRING type arrays and of STRING runtime variables of the program.

initializer

Integer number to initialize the variable 

__________________________

### Note

Variables must be defined before the START instruction.

The INTEGER type variables express whole numbers, and the range of values 
 is:

-0x7FFFFFFF >= variable <= 0x7FFFFFFF

Up to 128.000 variables/arguments can be defined in a functional program.

__________________________

### See 
 also 

DECLARE 
 RUNTIME

__________________________

### Examples

DECLARE VARIABLE example

DECLARE 
 VARIABLE ARRAY example

Declares an INTEGER type variable used in the program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved