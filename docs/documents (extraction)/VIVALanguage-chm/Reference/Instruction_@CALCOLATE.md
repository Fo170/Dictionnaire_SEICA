# @CALCOLATE 

# @CALC

Compiled 

R

Run-time

R

Example

Required Module:

none

R 
 Dynamic

R Static

__________________________

Description

Executes logical arithmetic 
 calculations and assignments between constants and variables, storing 
 the result in the destination variable.

__________________________

### SYNTAX

@CALCOLATE 
 variable 
 = expression 

@CALC variable 
 = expression 

Part 

Description

variable

Destination variable. This 
 can be an INTEGER type variable

expression

 The 
 expression can be a simple assignment:: (@CALCOLATE variable=value) or 
 an arithmetic/logic expression.

The values used in the expression can 
 be:

INTEGER type variables

constants

Constants can have a prefixes.

In the expression is possible use an 
 arithmetic, comparison and shift bit operators.

The priority of the operands is from 
 left to right if no parentheses are used. When using parentheses, the 
 entire expression must be enclosed by parentheses.

__________________________

Observation

If 
 operations are carried out between variables and constants of different 
 types and formats, each operand is converted into the type and format 
 of the destination variable. See the Variables and constants chapter for 
 the conversion between different types of variables and constants.

No control on overflow is done. 

For string type variables and constants, 
 the only valid operand is the sum (+), which is equal to the chain.