# ~READ_CLOCK 

# 

# 

# 

__________________________

### Syntax

~READ_CLOCK 
 value; 

value

Can be expressed as an INTEGER or FLOAT type runtime variable.

__________________________

### See also 

~READ_TIME

~READ_DATE

__________________________

### Examples

~READ_CLOCK example 

Reads the number from a timer that starts 
 at the beginning of the program. Executing two subsequently READ_CLOCK 
 instructions and making the subtraction between the values, it is possible 
 to measure the time between one event and another one. The timer increases 
 after every ms so it is necessary to do the right conversion to obtain 
 the expected unit of measurement. 

Preprocessor * Runtime : Dynamic R 
 Static 
 p

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved