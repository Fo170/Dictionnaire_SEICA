# ~READ_EVENT 

# 

# 

# 

__________________________

### Syntax

~READ_EVENT 
 pin; 

pin 

The event during time measure is selected according to the specified 
 pin (1 time meter every 8 pins).

__________________________

### Note

The command returns 31 MAX if the events seen are 31 or more; it counts 
 the number of falling edges if the NEG parameter is used in the ~READ_TIME 
 coomand.

__________________________

### See also 

~DIG_TIME

__________________________

### Examples

~READ_EVENT example 

Reads the number of event rising edge seen 
 during time measurement on the specified pin and copies the value to the 
 AR register. 

Preprocessor * Runtime : Dynamic R 
 Static 
 p

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved