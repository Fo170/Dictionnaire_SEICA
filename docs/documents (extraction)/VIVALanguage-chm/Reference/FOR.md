# @FOR @ENDFOR 

# 

# 

# 

________________________

### Syntax

@FOR 
 variable initial 
 value TO 
 final value .[step]

...

...

...

@ENDFOR

Variable

Variable of the @FOR loop. It is an INTEGER type variable.

Initial value

The initial value of the variable of the @FOR loop, and can be expressed 
 as:

a constant

an INTEGER type variable

an arithmetic/logic expression, whose operators can be: 

+ Addition

- Subtraction

* Multiplication

/ Division

^ Xor

& And

| Or

Final value

Expresses the final value of the variable of the @FOR loop. The body 
 of the @FOR 
 loop is repeated until the var variable has reached this value. The 
 final value can be expressed as: 

 * 

a constant

 * 

an INTEGER type variable

[step]

 Expresses 
 the step value with which the variable must be incremented or decremented 
 in order to reach the final value. The step value can be expressed as:

 * 

a constant

 * 

an INTEGER type variable

If an increment of the step value must be expressed, it must be preceded 
 by the character + or by nothing. If a decrement must be expressed, 
 the step value must be preceded by the character -.

__________________________

### Note

Default value: If no increment or decrement 
 is specified, the step value is equal to 1.

__________________________

### See 
 also 

__________________________

### Examples

@FOR example 

Executes the body of the @FOR 
 loop until the variable indicated assumes the specified final value.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved