# @WHILE @ENDWHILE

# 

# 

# 

________________________

### Syntax

@WHILE 
 variable1 
 condition constant/variable2 

...

...

...

@ENDWHILE

Variable 1

Variable for which the specified condition must be verified. The variable 
 can be INTEGER type.

Condition

Specifies the condition to apply to the variable. The following characters 
 can be used to express the condition:

 < 
 or lt meaning less than ...

 > 
 or gt meaning greater 
 than ...

 = 
 or eq meaning equal 
 to ...

 <= 
 or le meaning less than or equal to...

 >= 
 or ge meaning greater 
 than or equal to ...

 <> 
 or ne meaning different 
 from ...

Constant/variable2

Can be:

a constant

an INTEGER type variable

__________________________

### Note

__________________________

### See 
 also 

Instruction @IF-@ELSE-@ENDIF

__________________________

### Examples

@WHILE example

Executes the body of the @WHILE loop until 
 the condition is true. When the condition is false the loop ends.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved