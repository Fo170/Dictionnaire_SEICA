# ~WHILE 

# 

# 

# 

________________________

### Syntax

~While 
 [NOT] variable1 
 condition constant/variable2/expression ; 

... [Instructions] 

...

...

~Endwhile ;

[NOT]

Enables the execution of a NOT of the specified condition.

variable1

Variable for which the specified condition is to be verified. The variable 
 can be INTEGER, FLOAT, STRING type and the system 
 variables NUM e STR.

condition

Specifies the condition to apply to the variable. A relational operator 
 can be used to express the condition.

constant/variable2/expression

Can be:

 * 

a constant 

 * 

an INTEGER, FLOAT, STRING type runtime variable 

 * 

an expression that use arithmetic, logical and 
 shift bit operators. The expression must be enclosed by parentheses (). 
 There can be several levels in the expression inside the global parentheses.

The ~WHILE instruction must be ended with 
 an ~ENDWHILE instruction.

__________________________

### Note

 * 

The ~WHILE- ~ENDWHILE 
 instruction accepts up to 10 nesting levels.

 * 

If operations between 
 variables and constants of different types or formats are performed, each 
 operand is converted into the type and format of the destination variable 
 unless it is modified using the ~FORMAT 
 instruction.

 * 

For 
 string type variables or constants, the only valid operand is addition 
 (+), which is the same as chaining.

__________________________

### See 
 also 

~Do

~For

__________________________

### Examples

~While example 

Executes the body of the ~WHILE 
 loop until the condition is true.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved