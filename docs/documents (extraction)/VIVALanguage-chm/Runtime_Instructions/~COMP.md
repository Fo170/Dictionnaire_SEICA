# ~COMP 

# 

# 

# 

________________________

### Syntax

~Comp 
 variable 
 [LO=value] [HI=value] [ONERROR label] [ONPASS label] ;

variable

Variable to compare with the indicated limits.

LO=expression

Defines the lower limit of the test; if the value of the variable is 
 lower than this parameter then the test fails.

HI=expression

Defines the upper limit of the test; if the value of the variable is 
 greater than this parameter then the test fails.

ONERROR label

A jump to the specified label is executed if the comparison is outside 
 of the limits or range and partial and error flags are activated.

ONPASS label 

A jump to the specified label is executed if the comparison is within 
 the limits or range.

__________________________

### Note

It is possible to define only one of the 
 limits or both of them. 

The ~COMP 
 instruction activates the partial error flag only if the comparison is 
 out of the range or limits specified; the partial error flag remains active 
 until the execution of another ~ATEST, ~CLEAR, ~COMP, ~MEAS, ~SET, ~TEST 
 or pattern ( / ) with a positive result (that is, which does not generate 
 an error) deactivates it.

__________________________

### See 
 also 

~Atest

__________________________

### Examples

~Comp example 

Executes the comparison between the value 
 of a variable and the specified limit or range. The ~COMP 
 instruction activates only the partial error flag if the comparison is 
 out of the limits or out of the range. Therefore it is possible to execute 
 a conditioned jump using the ONERROR and ONPASS options, and to execute 
 different lines of the program without having an error condition. Refer 
 to the chapter Partial error flag and global error flag for more information 
 about the error flags. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved