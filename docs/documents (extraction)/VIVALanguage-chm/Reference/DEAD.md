# DEAD 

# 

# 

# 

________________________

### Syntax

DEAD 
 value

value

Expresses the minimum 
 time provided for programming the channels before the executive phase 
 of the pattern.

The value 
 can be expressed:

- as a multiple of the clock (3c, 7c, 8c,...)

- as time (1&#956;s, 2&#956;s,...)

- as frequency (2.5KHz, 1mhz)

To express it as time, the following letters are used:

P for ps (pico seconds)

N for ns (nano seconds)

U for &#956;s (micro seconds)

M for ms (milli seconds)

To express it as frequency, use the following notation:

KHZ for KHz (kilo hertz)

MHZ for MHz (mega hertz)

__________________________

### Note

The dead time is inserted outside of the 
 duration of the pattern defined in the PERIOD instruction. If the DEAD 
 time is not sufficient for programming the channels of the pattern, an 
 EXTRADEAD time is automatically inserted and a WARNING is generated during 
 the compilation of the functional program. If the programming time of 
 the channels is less than the duration of the DEAD time, this time is 
 inserted anyway.

For the F40 module in a STATIC session 
 of the program, the dead time establishes the time between the application 
 of stimuli and the reading of the answers (strobe of channels) and can 
 be programmed in the interval from 40ns and 30s. Default=5Us.

__________________________

### See 
 also 

__________________________

### Examples

DEAD example

Indicates, at pattern level, the minimum 
 time provided for programming the channels before the executive phase 
 of the pattern.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40/DHF

&#169;2008 
 Seica S.p.a - All rights reserved