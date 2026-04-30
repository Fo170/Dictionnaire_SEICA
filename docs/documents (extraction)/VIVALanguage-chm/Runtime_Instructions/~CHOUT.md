# ~CHOUT 

# 

# 

# 

________________________

### Syntax

~CHOUT 
 [*] MODE PINLIST,..., MODE PINLIST; 

~CH_OUT 
 [*] MODE PINLIST,..., MODE PINLIST; 

[*]

Maintains the previous channel settings (specified in a previous ~CHOUT 
 instruction). See Example.

mode

The following options are accepted:

DIGITAL: 
 The channels indicated in PINLIST are set as digital channels.

ANALOG 
 The channels indicated in PINLIST are set as analog channels. For the 
 F40 board, remember that setting one channel in analog mode, implies that 
 all channels of the same family are set in the analog mode. If one of 
 the channels is set in the OPEN mode you will find an ERROR, so you must 
 set that channel to the NULL mode.

HYBRID 
 The channels identified in the PINLIST are set to be used both as digital 
 or analog channels.

NULL 
 The channels identified in the PINLIST are set as not present (unusable) 
 and will not generate an ERROR.

OPEN 
 The channels identified in the PINLIST are set as open channels that are 
 not connected to the output connector of the board.

COAX 
 The channels identified in the PINLIST are set as digital channels with 
 coaxial connector output.

pinlist

Defines the channels set with the function mode indicated by the previous 
 parameter. The character / defines a contiguous group of channels, while 
 the character , or -defines non contiguous channels.

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

~Chout example 

This instruction is used in functional 
 programs to define the mode of the channels available with F40 and P300 
 boards.

Preprocessor * Runtime : Dynamic * Static R

Modules: F40,P300

&#169;2008 
 Seica S.p.a - All rights reserved