# ~CALL 

# 

# 

# 

________________________

### Syntax

~Call 
 name [(parameter1,parameter2,...)] [ONERROR] [ONPASS] ;

name

Alphanumeric string maximum 9 characters which identifies the subroutine.

[(parameter1,parameter2,...)]

Parameter/parameters to pass to the subroutine; these can be expressed 
 as:

 * 

runtime constant of the type INTEGER, FLOAT or 
 STRING

 * 

runtime variable of the type INTEGER, FLOAT or 
 STRING

__________________________

### See 
 also 

~Return

~Subr

__________________________

### Examples

~Call example 

Executes a call to a subroutine. The call 
 can be conditioned by the ONERROR and ONPASS options, which carry out 
 a check on the partial error flag.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved