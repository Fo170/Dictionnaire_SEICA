# CLOCK2 

# 

# 

# 

________________________

### Syntax

CLOCK2 
 value ; 

value

Indicates the value of the frequency of period of the clock and the 
 accepted range is:

16.66ns <= value <= 6666.66ns or

150Khz <= value <= 60Mhz

To express the value as time, the 
 following letters are used:

P for ps (pico seconds)

N for ns (nano seconds)

U for &#956;s (micro seconds)

M for ms (milli seconds)

To express the value as frequency, use the following letters:

KHZ for KHz (kilo hertz)

MHZ for MHz (mega hertz)

P = ps pico seconds

N = ns nano seconds

U = ms micro seconds

M = ms milli seconds

kHz = KHz kilo hertz

MHZ = MHz mega hertz

DEFAULT value: By default the 
 auxiliary clock frequency is 14.192Mhz, during the execution of the functional 
 program.

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

CLOCK2 example 

Indicates the oscillating frequency (or period) of the 
 auxiliary clock present on the BNC of the digital controller during the 
 execution of the functional program. The auxiliary clock is a square waveform 
 with a 
 width of 5V referenced to system ground. The resolution of the clock is 
 !% of the defined frequency. It can be used to synchronize with external 
 instruments.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: DMASTER

&#169;2008 
 Seica S.p.a - All rights reserved