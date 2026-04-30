# ~DIG_CLOCK 

# 

# 

# 

________________________

### Syntax

~DIG_CLOCK 
 FR=value DUTY=value PHASE=value 
 N=value DIV=value 
 START|STOP|PREPARE 
 pinlist ; 

DIG_CLOCK 
 FR=value DUTY=value PHASE=value 
 N=value DIV=value 
 START|STOP|PREPARE 
 pinlist ; 

pinlist

since there a complete logic every group of 8 channel the pinlist is 
 used 

to indentify the pulse generator to program 

 START 

Force the pulse generator to start immediately

 STOP

force the generator to stop at the and of the current clock

 PREPARE

setup the generator for stating syncro with the dynamic burst

FR=value

setup the frequence of the generator in Hertz

DUTY=value

setup the duty cycle of the shape of the clock in percentage of part 
 high

PHASE=value

setup the phase in degree of position of the rising 
 edge of the clock

N=value

set the number of evolution to be generated 0=continuos 

max 256 (16bit)

DIV=value

program a 8 bit square wave divider of the main clock 

__________________________

### Note

__________________________

### See 
 also 

~CHMODE

~DIG_TX

__________________________

### Examples

~CHMODE example 

~DIG_CLOCK allows to program the internal 
 pulse generator 
 of the F50 module, 

one complete pulse generator every 8 channels

Preprocessor * Runtime 
 : Dynamic 
 R Static R

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved