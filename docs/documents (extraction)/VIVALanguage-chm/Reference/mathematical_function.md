# MATHEMATICAL FUNCTION 

# 

# 

# 

________________________

### Syntax

~ABS;

~ACOS;

~ASIN;

~ADD 
 value ;

~AND 
 value ; 

~ATAN;

~COS;

~DIV 
 value ;

~EXP;

~LOAD 
 value ;

~LOG 
 ;

~MULT 
 value ; 

~OR 
 value ; 

~SHL 
 value ;

~SHR 
 value ; 

~SIN;

~SQUARE; 

~SQR; 

~STORE 
 variable ; 

~SUB 
 value ; 

 ~TAN;

 ~XOR value 
 ;

value

Value to be added to the AR register that can be expressed as a: 

 * constant

 * runtime variable of the INTEGER, FLOAT type

variable

Runtime variable in which the contents of the AR register are stored. 
 The variable must be FLOAT type.

__________________________

ABS

Calculates the absolute value of the AR 
 register.

ADD

Adds the specified value to the contents 
 of the AR register.

AND
Calculates 
 the AND between the contents of the AR register and the specified value

ATAN

Calculates the arc tangent of the contents 
 of the AR register. The AR value must be expressed in radiants.

TAN

Calculates the tangent of the contents 
 of the AR register. The AR value must be expressed in radiants.

COS
Calculates 
 the cosine of the contents of the AR register. The AR register must be 
 expressed in radiants.

ACOS
Calculates 
 the arc cosine of the contents of AR register. The AR register must 
 be expressed in radiants.

DIV
Divides 
 the contents of the AR register (dividend) by the specified value (divisor).

EXP
Calculates 
 the EXP value where X is the value contained in the AR register.

LOAD
Loads 
 the value contained in the specified variable into the AR register.

LOG
Calculates 
 the natural logarithm of the AR register.

OR

Calculates the OR between the contents of the AR register and the specified 
 value

MULT

Multiplies the contents 
 of the AR register by the specified value.

SIN
Calculates 
 the sine of the contents of the AR register. The AR register must be expressed 
 in radiants.

ASIN
Calculates 
 the arc sine of the contents of AR register. The AR register must be expressed 
 in radiants.

STORE
Copy 
 the contents of the AR register into the specified variable.

SQUARE

Calculates the square of the contents of 
 the AR register.

SQR

Calculates the square root of the contents 
 of the AR register.

SUB
Subtracts 
 the specified value from the contents of the AR register.

XOR

Calculates the XOR between the contents 
 of the AR register and the specified value.

SHL

Shifts the contents of the AR register 
 to the left by the specified number of bits. It enters the 0 value.

SHR

Shifts the contents of the AR register 
 to the right by the specified number of bits. It enters the 0 value.

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

### Trigonometric_example

Calculate various mathematical functions 
 of the AR register.

Stores the result in the AR register.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved