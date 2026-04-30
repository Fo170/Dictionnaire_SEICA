# ~SET FCLOCK 

# 

# 

________________________

### Syntax

~SET 
 FCLOCK FR=value OFFSET=value INT|EXT|EXT_AUXn|EXT_SYNT|EXT_PULSE|EXT_TOCLOK 
 RISING|FALLING|BOTH DIVIDE;

Will setup the frequency and the source for 
 the system's main clock.

 FR=value
frequency 
 to be programmed

OFFSET=value
offset 
 to be programmed

INT
use 
 internal clock (default)

EXT_AUXn
Auxiliary 
 channel to synchronize the clock 

EXT_SYNT
source 
 clock by the synthesizer 

EXT_PULSE
source 
 clock by the pulse generator 

EXT_T0CLOCK
source 
 clock by the t0clock (default)

RISING
clock 
 on rising edge 

FALLING
clock 
 on falling edge

BOTH
clock 
 in both edges

DIVIDE
clock 
 divide by 2

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

~SET FCLOCK example 

Setup for the main system clock.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved