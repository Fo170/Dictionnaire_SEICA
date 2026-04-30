# ~ATEST 

# 

# 

# 

________________________

### Syntax

~ATEST 
 variable 
 [NAME=testname] [LO=value] [HI=value] [ONERROR 
 label] [ONPASS label] ;

~ATEST 
 variable 
 [NAME=testname] [LO=value] [HI=value] [CALL subrountine] 
 ;

~ATEST 
 variable 
 [NAME=testname] [VALUE=value] [TOL=value] [ONERROR 
 label] [ONPASS label] ;

~ATEST 
 variable 
 [NAME=testname] [VALUE=value] [TOLM=value] 
 [TOLP=value] [ONERROR label] [ONPASS label] ;

variable

Variable to compare with the indicated limits.

NAME=testname

Reference name for the test; this is the name 
 that will appear in VIVA's Report in case this test fails. 

LO=expression
Defines 
 the lower limit of the test; if the value of the variable is lower than 
 this parameter then the test fails. 

HI=expression
Defines 
 the upper limit of the test; if the value of the variable is greater than 
 this parameter then the test fails. 

VALUE=expression
Defines 
 the reference value for the test (expected value). 

TOL=expression
Defines 
 the lower and upper limit of the test referred to the percentage 
 of the VALUE parameter 

TOLM=expression
Defines 
 the lower limit of the test referred to the percentage 
 of the VALUE parameter 

TOLP=expression
Defines 
 the upper limit of the test referred to the percentage 
 of the VALUE parameter 

HI=expression

Defines the upper limit of the test; if the value of the variable is 
 greater than this parameter then the test fails.

ONERROR label

A jump to the specified label is executed if the comparison is outside 
 of the limits or range and partial and error flags are activated.

ONPASS label 
A 
 jump to the specified label is executed if the comparison is within the 
 limits or range. 

CALL subroutine

A call to the specified subroutine is executed if the comparison is 
 outside the limits or range.

__________________________

### Note

It is possible to define only one of the 
 limits or both of them. 

The ~ATEST instruction activates the partial 
 and global error flags only if the comparison is out of the specified 
 range or limits. The global error flag remains active until the end of 
 the program; the partial error flag remains active until another ~ATEST, 
 ~CLEAR, ~COMP, ~MEAS, ~SET, ~TEST instruction or a pattern ( / ) with 
 a positive result (that is, which does not generate an error) deactivates 
 it.

The use of the TOL,TOLM,TOLP parameters 
 will overload the HI and LO parameters and they should be used together 
 with the VALUE parameter.

The parameter NAME will force also an automatic 
 report in case of Fail.

You cannot call a subroutine with parameters.

__________________________

### See 
 also 

~Comp

__________________________

### Examples

~Atest example 

Executes the comparison between the value 
 of the variable and the limits or range specified. The ~ATEST instruction 
 activates the partial error flag and the global error flag if the comparison 
 is outside of the limits or range, therefore it is possible to execute 
 jumps on condition using the ONERROR and ONPASS options. See the section 
 Partial error flag and global error flag for more information about the 
 error flags. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved