# ~RSER 

# 

# 

# 

________________________

### Syntax

~RSER 
 [*] MODE PINLIST,..., MODE PINLIST; 

[*]

Maintains the previous channel settings (specified in a previous ~CHOUT 
 instruction). See Example.

mode

The following options are accepted:

OPEN: 
 The channels indicated in PINLIST connect the resistor

CLOSE 
 The channels indicated in PINLIST bypass the resistor default mode

LINE_1-4 
 connect 
 the resistor only for line 1 to 4 

LINE_5-8 
 connect 
 the resistor only for line 5 to 8 

pinlist

Defines the channels set with the function mode indicated by the previous 
 parameter. The character / defines a contiguous group of channels, while 
 the character , or -defines non contiguous channels.

__________________________

### Note

### Only the version 2-3 of the EVO scanner hardware have this feature

### the 
 option LINE_1-4 and LINE_5-8 are no meaning on a 4 analog line system

__________________________

### See 
 also 

__________________________

### Examples

~RSER example 

This instruction manage 
 the 100OHM resistor series of the analog channel 

Preprocessor * Runtime : Dynamic * Static R

Modules: SCAEVO

&#169;2008 
 Seica S.p.a - All rights reserved