# @CALCOLATE 

# 

# 

# 

________________________

### Syntax

@CALCOLATE 
 variable=expression

variable

Destination variable. This can be an INTEGER type variable.

expression

The expression can be a simple assignment:: (@CALCOLATE variable=value) 
 or an arithmetic/logic expression.

The values used in the expression can be:

- INTEGER type variables

- constants

Constants can have the following prefixes:

 B 
 indicates a constant in binary format

 D 
 or no character: indicates a constant in decimal format

 H 
 or 0X: indicates a constant in hexadecimal format

 O 
 indicates a constant in octal format

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
 Shift of n bits to the left

 >n 
 Shift of n bits to the right

The priority of the operands is from left to right if no parentheses 
 are used. When using parentheses, the entire expression must be enclosed 
 by parentheses.

__________________________

### Note

If operations are carried out between 
 variables and constants of different types and formats, each operand is 
 converted into the type and format of the destination variable. See the 
 Variables and constants chapter for the conversion between different types 
 of variables and constants.

No control on overflow is done. 

For string type variables and constants, 
 the only valid operand is the sum (+), which is equal to the chain.

__________________________

### See 
 also 

Links

__________________________

### Examples

@CALCOLATE example 

Executes logical arithmetic calculations 
 and assignments between constants and variables, storing the result in 
 the destination variable. 

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved