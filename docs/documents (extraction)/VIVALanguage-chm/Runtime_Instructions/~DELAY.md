# ~DELAY 

# 

# 

# 

________________________

### Syntax

~Delay 
 value ; 

value

Value, which indicates the delay time, which can be expressed as:

 * 

time (1ms, 2ms,...)

 * 

FLOAT type runtime variable

To express the value as time the following letters are used:

P for ps (pico seconds)

N for ns (nano seconds)

U for ms (micro seconds)

M for ms (milli seconds)

If no letter is specified, the measuring unit is seconds, for example:

~DELAY 100; means a delay of 100 seconds.

__________________________

### Note

The minimum delay time that can be defined 
 with the ~DELAY 
 instruction is 1ms.

__________________________

### See 
 also 

~Pause

__________________________

### Examples

~Delay example 

Executes the specified delay.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved