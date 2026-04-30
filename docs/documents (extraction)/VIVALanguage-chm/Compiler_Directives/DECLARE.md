# DECLARE 

# 

# 

# 

________________________

### Syntax

DECLARE 
 object name,name2;

 DECLARE 
 object name=initializer;

 DECLARE 
 object ARRAY 
 name[dimesion]=initializer,initializer,..;

 FLOAT|INTEGER|STRING 
 name=initializer;

Object list:

DECLARE

VARIABLE INTEGER

DECLARE

VARIABLE FLOAT

DECLARE

VARIABLE STRING

DECLARE

VARIABLE ARRAY

DECLARE

RUNTIME INTEGER|BINARY|INDEX

DECLARE

RUNTIME FLOAT

DECLARE

RUNTIME SINGLE

DECLARE

RUNTIME STRING

DECLARE

RUNTIME_LONG

DECLARE

RUNTIME SHORT

DECLARE

RUNTIME_CHAR |BUFFER

DECLARE

RUNTIME BUFFER

DECLARE

RUNTIME ARRAY

DECLARE

SUBROUTINE

DECLARE

FUNCTION

DECLARE

CHANNEL|PIN

DECLARE

SIGNAL

DECLARE

GROUP

DECLARE

PINLIST

DECLARE

DIGIPLEX

DECLARE

VIRTUAL

DECLARE

BSCAN

FLOAT

STRING

INTEGER

__________________________

### Note

Declarations must be defined before the 
 use of the object, outside the program code (before the START).

A local variable can be defined inside 
 the body of a subroutine; this allows the use of the same name in different 
 subroutines. For subsequent calls to the subroutine the variables retain 
 their value (local static).

Versions before 2.0.5 allow the use of 
 local variables outside the subroutine. 

The keyword FLOAT,INTEGER,STRING implied 
 DECLARE RUNTIME ( only on global declaration the word DECLARE can be omitted)

The name of the object can't be one of this reserved word or a pure 
 number.

Using as name formatted number as HA,B1,B0, may have unpredictable result

in the case a warning will generated.

__________________________

### See 
 also 

DECLARE RUNTIME

DECLARE VARIABLE

__________________________

### Examples

Links 

All the objects used in a 
 functional program must be declared first.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved