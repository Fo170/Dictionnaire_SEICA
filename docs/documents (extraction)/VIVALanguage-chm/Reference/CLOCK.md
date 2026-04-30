# CLOCK 

# 

# 

# 

________________________

### Syntax

CLOCK 
 value ; 

value

Indicates the clock value; it can be expressed either as a period or 
 a frequency. The accepted range is:

50ns <= value <= 1us 

1MHz <= value <= 20MHz

If the value is expressed as a period, the following letters are used:

P for ps (pico seconds)

N for ns (nano seconds)

U for ms (micro seconds)

M for ms (milli seconds)

If the value is expressed as a frequency, the following letters are 
 used:

KHZ for KHz (kilo hertz)

MHZ for MHz (mega hertz)

DEFAULT value:If the CLOCK instruction 
 is not specified in the test program, the clock period is considered to 
 be equal to 100ns.

__________________________

### Note

The resolution of the clock 
 is 1 % of the defined value.

__________________________

### See 
 also 

__________________________

### Examples

CLOCK example 

Indicates the frequency (or the period) of the main system clock used 
 to execute a dynamic burst of the program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: DMAST,MASTERCLK

&#169;2008 
 Seica S.p.a - All rights reserved