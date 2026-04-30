# ~FOR 

# 

# 

# 

________________________

### Syntax

~FOR 
 [NOT] variable 
 condition expression [TO final_value] [STEP step_value] [DO action] ;

...

...

...

~ENDFOR 
 ;

[NOT]

Enables the execution of a NOT of the specified condition.

variable 

Variable for which the specified condition is to be verified. 

condition

Specifies the condition to apply to the variable.

expression

?

to final_value

The value that must be reached by the variable. If this value and the 
 STEP value are both omitted, the default condition is > 0 and the stp 
 value is -1 (see example 1).

step step_value

Step with which the variable reaches the limit value. NOTE: The field 
 STEP is 
 alternative to the field DO. It means that if the STEP value is present 
 there cant be the action of DO at the same time. If the STEP field is 
 not present, the variable of the FOR cycle increase its value by 1 at 
 every cycle. 

If the step is omitted, by default it is +1 (see example 2). 

do action

If the key word DO is present, the ~FOR cycle is executed followed by 
 the DO action; at this point, if the condition is still valid the cycle 
 is executed again, followed by the DO action and so on, otherwise it ends. 
 NOTE: the DO action is an alternative to the STEP field. That is if the 
 DO action is present the STEP field cannot exist at the same time. When 
 there is the DO action, the increasing of the FOR cycle variable is not 
 automatically managed, therefore it has to be increased/decreased within 
 the cycle with the instruction ~CALC.

If this keyword is omitted, no action is carried out by default. 

The ~FOR instruction must always be terminated 
 with a ~ENDFOR instruction.

__________________________

### Note

If the condition is false, the ~FOR loop 
 ends without executing the body of the instruction.

The ~FOR- 
 ~ENDFOR instruction accepts a nesting level of 10.

__________________________

### See 
 also 

@For

__________________________

### Examples

~For example 

Executes the instructions 
 contained in the ~FOR cycle 
 until the condition is true.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved