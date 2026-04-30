# ~IF 

# 

# 

# 

________________________

### Syntax

~IF 
 ( [NOT] variable condition expression ) 
 ; 

.....

<if body>

....

~ELSE;

.....

<else body>

....

~ENDIF ;

[NOT]

Enables the execution of a NOT of the specified condition.

variable 

Variable for which the specified condition is to be verified. 

condition

Specifies the condition to apply to the variable.

expression

?

<if body>

Test code executed if the ~IF condition is true

<else body>

Test code executed if the ~IF condition is false

The condition and expression are not mandatory; 
 as in C like languages, you can write only the variable, knowing that 
 by default the ~IF branch will be executed if the variable is TRUE ( not 
 zero ).

It is possible to write more than one condition 
 in the same instruction using the keywords AND ( or the symbol && 
 ) and OR (or the symbol ||):

AND ( && )

The IF branch is executed when all the conditions are true.

~IF ( (condition1) AND (condition2)) ; 

OR ( || )

The IF branch is executed when one of the conditions is true. 

~IF ((condition1) OR (condition2)) ;

It is highly recommended to enclose in parentheses 
 each condition, as shown in the previous examples, while the arithmetic/logical 
 expression must be enclosed in parentheses (). 

__________________________

### Note

 * 

The ~IF instruction 
 must end with a ~ENDIF instruction.

 * 

The ~ELSE instrction is optional.

 * 

The ~IF ~ELSE ~ENDIF 
 instruction accepts up to 10 nesting levels.

__________________________

### See 
 also 

~Break

__________________________

### Examples

~IF example 

Verifies the condition indicated; if the 
 condition is true, the body of the 
 ~IF branch 
 is executed, otherwise the body of the ~ELSE 
 is executed.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved