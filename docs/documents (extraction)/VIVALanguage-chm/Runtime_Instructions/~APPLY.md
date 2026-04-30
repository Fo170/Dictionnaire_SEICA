# ~APPLY 

# 

# 

# 

________________________

### Syntax

~Apply 
 keyword ..... ; 

The keyword specifies the type of signal 
 you want to apply to the board. The APPLY instruction can assume the following 
 keyword options:

Apply VDC

Apply a DC voltage

Apply VAC

Apply an AC voltage

Apply IDC

Apply a DC current

Apply IAC

Apply an AC current

Apply CLOCK

Apply a digital clock

Click on the previous links to see the parameters 
 for the Apply instructions.

__________________________

### Note

A compilation error will be generated when 
 the compiler cannot find an instrument to satisfy the request.

__________________________

### See 
 also 

~Connect

~Measure

~Remove

__________________________

### Examples

~Apply VDC example

~Apply VAC example

~Apply IDC example

~Apply IAC example

~Apply CLOCK example 

The APPLY instruction applies a signal 
 to one or more points on the board. This is a NVL instruction, 
 therefor it will search for an instrument in the machine that can satisfy 
 the request. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external 
 instruments

&#169;2008 
 Seica S.p.a - All rights reserved