# ~MEASURE 

# 

# 

# 

________________________

### Syntax

~Measure 
 keyword ..... ; 

The keyword specifies the type of measurement 
 you want to do. The MEASURE instruction can assume the following keyword 
 options:

Measure Voltage

Measure a voltage on the board

Measure Current

Measure a current on the board

Measure Frequency

Measure a frequency on the board

Measure Counts

Measure the number of signal events on a point of the board

Measure Time

Measure time

Click on the previous links to see the parameters 
 for the MEASURE instructions.

__________________________

### Note

A compilation error will be generated when 
 compiler cannot find an instrument to satisfy the request.

__________________________

### See 
 also 

~Apply

~Connect

~Remove

__________________________

### Examples

~Measure Counts example

~Measure Current example

~Measure Frequency example

~Measure Time example

~Measure Voltage example 

The MEASURE instruction measures a signal 
 on one point of the board. This is a NVL instruction, 
 therefor it will search for an instrument in the machine that can satisfy 
 the request. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved