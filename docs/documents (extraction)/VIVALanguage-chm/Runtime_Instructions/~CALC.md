# ~CALC 

# 

# 

# 

________________________

### Syntax

~CALC 
 variable=expression ; 

variable

Destination variable. It can be a INTEGER, 
 FLOAT or STRING type variable.

expression

The expression can be a simple assignment (~CALC variable=value) or 
 an arithmetic/logic expression:

The values used in the expression can be:

- runtime variables of the type 

INTEGER

FLOAT

STRING

- constants of the type

 INTEGER

FLOAT

STRING

The operators, which can be used in the arithmetic/logic expression, 
 are:

 + 
 Addition

 - 
 Subtraction

 * 
 Multiplication

 / 
 Division

 ^ 
 Xor

 & 
 And

 | 
 Or

 <n 
 Shift n 
 bits to the left

 >n 
 Shift n 
 bits to the right

The priority between the operands is from left to right if no parentheses 
 are used. If parentheses are used, the entire expression must be enclosed 
 between them.

__________________________

### Note

If operations are performed between variables 
 and constants of different types and formats, each operand is converted 
 into the type and format of the destination variable. See the chapter 
 Variables and constants for the conversion of variables and constants 
 of different types.

For string type variables and constants, 
 the only valid operand is addition (+), which is the same as chaining.

__________________________

### See 
 also 

Links

__________________________

### Examples

~CALC example 

Executes logical arithmetic calculations 
 and assignments between constants and variables storing the result in 
 the destination variable.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved