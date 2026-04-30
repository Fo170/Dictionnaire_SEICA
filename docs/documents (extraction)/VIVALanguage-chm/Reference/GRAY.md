# @GRAY 

# 

# 

# 

________________________

### Syntax

@GRAY 
 variable = expression ; 

Variable

Destination variable. This can be an INTEGER type variable.

Expression

The expression can be a simple assignment: (@GRAY variable=value) or 
 an arithmetic/logic expression.

The values used in the expression can be:

 * 

INTEGER type variables

 * 

constants

The following operators can be used in the arithmetic/logic expression:

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

The priority of the operands is from left to right if no parentheses 
 are used. If parentheses 
 are used, the entire expression must be included between them.

__________________________

### Note

If operations are carried out between variables 
 and constants of different types and formats, each operand is converted 
 into the type and format of the destination variable. See the Variables 
 and constants chapter for the conversion between different types of variables 
 and constants.

For string type variables and constants, 
 the only valid operand is the sum (+), which is equal to the chain.

__________________________

### See 
 also 

__________________________

### Examples

@GRAY example 

Executes logical arithmetic calculations 
 and assignments between constants and variables, converts the result according 
 to the GRAY code and stores the result in the destination variable.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved