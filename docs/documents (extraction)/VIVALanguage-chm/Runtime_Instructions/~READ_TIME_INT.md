# ~READ_TIME_INT 

# 

# 

# 

__________________________

### Syntax

~READ_TIME_INT 
 pin; 

pin 

The time measurement meter used for the measure is selected according 
 to the specified pin (1 time measurement meter every 8 pins).

__________________________

### Note

This instruction returns the time measured using the ~DIG_TIME 
 instruction into the register AR. 

The value already takes into account the real sampling rate applied; 
 the error is +- 1 sampling rate. 

__________________________

### See also 

~DIG_TIME

__________________________

### Examples

~READ_TIME_INT example 

Reads the last TIME INTERVAL measurement 
 on the specified pin and copies the value to the AR register. 

Preprocessor * Runtime : Dynamic R 
 Static 
 p

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved