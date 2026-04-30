# DECLARE RUNTIME ARGUMENT 

# 

# 

# 

________________________

### Syntax

DECLARE 
 RUNTIME ARGUMENT argument type name 
 argument 1, argument 2,...

DECLARE RUNTIME ARGUMENT argument type name 
 argument 1, argument 2,...

variable type Indicates the type of variable declared, which can be:

- INTEGER

- FLOAT

- STRING

The INTEGER type variables express whole numbers, and the range of values 
 is:

-0x7FFFFFFF variable +0x7FFFFFFF

The FLOAT type variables express floating-point numbers and the range 
 of values is:

-1.7E+308 variable + 1.7E+308

The STRING type variables express strings of characters, and can accept:

up to 80 characters enclosed in quotation marks ()

argument name 1,

argument name 2,... Alphanumerical string maximum 20 characters which 
 indicates the name of the argument.

The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

variable type

Indicates the type of variable declared, which can be:

- INTEGER

- FLOAT

- STRING

The INTEGER type variables express whole numbers, and the range of values 
 is:

-0x7FFFFFFF <= variable >= 0x7FFFFFFF

The FLOAT type variables express floating-point numbers and the range 
 of values is:

-1.7E+308 <= variable >= 1.7E+308

The STRING type variables express strings of characters, and can accept:

up to 80 characters enclosed in quotation marks ()

argument name 1,argument name2,...

Alphanumerical string maximum 20 characters which indicates the name 
 of the variable.

The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

__________________________

### Note

__________________________

### See 
 also 

DECLARE RUNTIME 
 VARIABLE

DECLARE VARIABLE

__________________________

### Examples

DECLARE RUNTIME ARGUMENT 
 example

Declares a runtime argument used afterwards in a subroutine. The argument 
 thus defined is a global type that is it is seen by all subroutines 
 of the program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved