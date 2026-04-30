# ~BRANCH 

# 

# 

# 

________________________

### Syntax

~Branch 
 [ONERROR 
 label] [ONPASS label] ;

[ONERROR label]

Executes a jump to the specified label if the partial error flag is 
 active.

[ONPASS label]

Executes a jump to the specified label if the partial error flag is 
 not active.

If no condition is specified, the jump is 
 executed in any case.

__________________________

### Note

 * 

It is possible to 
 execute a jump with the ~BRANCH instruction within a macro, a @FOR or 
 a @WHILE loop writing:

~BRANCH=@label ;

In this way, the compiler 
 automatically creates a different label every time the same macro or subroutine 
 is called. You may also write:

~BRANCH ONPASS=@LABEL

~BRANCH ONERROR=@LABEL

 * 

A 
 compilation error is generated when the label to which the ~BRANCH instruction 
 jumps is missing.

__________________________

### See 
 also 

Label

__________________________

### Examples

~Branch example 

Executes a jump to the specified label. 
 The jump can be conditioned. In this 
 case the partial error flag is checked. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved