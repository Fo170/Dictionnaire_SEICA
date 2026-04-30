# ~SWITCH / ~CASE / ~ENDCASE 

# 

# 

# 

________________________

### Syntax

~SWITCH 
 variable [CONTINUE] ; 

~CASE [NOT] 
 expression;

 ....

~CASE [NOT] 
 expression;

 ....

~CASE DEFAULT;

 .....

 .....

~ENDCASE ;

CONTINUE

if this keyword is specified, all cases of this switch will be evaluated;

otherwise when a matching expression is found it executes the code within

the case and then jumps to ~ENDCASE. 

DEFAULT

the case will be execute if none march their condition

must be declare last

[NOT]

Enables the execution of a NOT of the specified condition.

variable

Variable for which the specified condition is to be verified. 

expression

Control is transferred to the statement following that label.

The expression can be written in one of the following formats: 

 from 
 N to M 

 1,2,3,...n

 NOT 
 from N to M

 name 
 of variable

 < 
 > =

 default

It is possible to write more than one condition 
 in the same expression using the keywords && ( for AND ) and || 
 (for OR).

__________________________

### Note

 * 

The ~SWITCH ~CASE 
 ~ENDCASE instruction accepts more than one level.

__________________________

### See also 

### ~IF 

__________________________

### Examples

~SWITCH CASE example 

Allows selection among multiple 
 sections of code, depending on the value of an integral expression.

The switch statement body consists 
 of a series of case labels and 
 an optional default label. No 
 two constant expressions in case statements can evaluate to the same value. 

The default label can appear 
 only once. The labeled statements are not syntactic requirements, but 
 the switch statement is meaningless without them. The default statement 
 need not come at the end; it can appear anywhere in the body of the switch 
 statement. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved