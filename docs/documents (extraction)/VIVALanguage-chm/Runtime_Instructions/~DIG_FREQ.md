# ~DIG_FREQ 

# 

# 

# 

________________________

### Syntax

~DIG_FREQ 
 GATE=value HISTERESIS 
 START|PREPARE 
 pinlist; 

DIG_FREQ 
 GATE=value HISTERESIS 
 START|PREPARE 
 pinlist; 

pinlist

List of pins on which you want to measure the frequency (or pulses)

START 

Force the frequency measurement to start immediately

 HISTERESIS

allow the use of the high troushould as histeresis

the commutazione will be ignored beetwen the 2 level

PREPARE

Prepares the frequency measurement; the START is given by the .... instruction

GATE=value

Specify the gate time to be used for the frequency measurement (in sec)

__________________________

### Note

To 
 read the frequency applied you can use READ_FREQ, 
 while for the gate applied use READ_GATE 
 and for the number of counts use READ_COUNT. 
 All this instructions return the value in the AR register. The gate value 
 read may be a bit different from the one programmed, because the hardware 
 has some limitations on the clock. 

Use the CHMODE instruction to select which 
 on of the eight pins you want to use as input.

the READ_FREQ already 
 take count of the adjusted GATE

the internal frequency counter is 16 bit so you can t select a gate 
 higher than 65385 clock transition

pinlist must be the last argument

__________________________

### See 
 also 

~DIG_CLOCK

~CHMODE

~READ_FREQ

~READ_COUNT

~READ_GATE

__________________________

### Examples

~CHMODE example 

This instruction allows you to measure 
 the frequency or the pulse count for the gate specified on the pin selected 
 as input; you can have one frequency measurement every 8 channels. 

Preprocessor * Runtime 
 : Dynamic 
 R Static R

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved