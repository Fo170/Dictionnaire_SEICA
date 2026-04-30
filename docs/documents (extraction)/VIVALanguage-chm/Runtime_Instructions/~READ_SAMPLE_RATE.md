# ~READ_SAMPLE_RATE 

# 

# 

# 

__________________________

### Syntax

~READ_SAMPLE_RATE 
 pin; 

pin 

The sampling rate used for the time measure is selected according to 
 the specified pin (1 time meter every 8 pins).

__________________________

### Note

### If the SAMPLE_RATE is not specified in 
 the ~DIG_TIME command the sampling rate will be 50MHz, otherwise 
 it will the closest possible to the one programmed.

__________________________

### See also 

~DIG_TIME

__________________________

### Examples

~READ_SAMPLE_RATE example 

Reads the actual sampling rate used by 
 time measurement system on the specified pin and copies the value to the 
 AR register. 

Preprocessor * Runtime : Dynamic R 
 Static 
 p

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved