# @IF-@ELSE-@ENDIF 

# 

# 

# 

________________________

### Syntax

@IF 
 variable1 
 condition constant / variable2 

...

@ELSE

...

@ENDIF

Variable1

Variable for which the specified condition must be verified. The variable 
 can be INTEGER type.

Condition

Specifies the condition to be applied to the variable. The following 
 characters can be used to express the condition:

< or lt meaning less than ...

> or gt meaning greater 
 than ...

= or eq meaning equal 
 to ...

<= or le meaning less than or equal to...

>= or ge meaning greater 
 than or equal to ...

<> or ne meaning different 
 from ...

variable2

Can be:

 * 

a constant

 * 

an INTEGER type variable 

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

@WHILE

__________________________

### Examples

@IF example 

Verifies the condition indicated. If this 
 condition is true, the body of the @IF branch is executed, otherwise the 
 body of the @ELSE branch is executed.

Preprocessor R Runtime : Dynamic R 
 Static 
 p

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved