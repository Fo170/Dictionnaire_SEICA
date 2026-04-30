# ~BOOST_MODE 

# 

# 

# 

________________________

### Syntax

~Boost_mode 
 MODE PINLIST,..MODE 
 PINLIST ; 

mode

Defines the function mode of the channels identified with PINLIST setting. 
 The MODE options are the following:

BYPASS: 
 Channels belonging to the list indicated in the PINLIST are connected 
 directly to the channels of the F40 board that is part of the F48 module.

STATIC: 
 Channels belonging to the list indicated in the PINLIST are not connected 
 to the channels of the F40 board that is part of the F48 module. With 
 this mode, channels can be used in the stand-alone mode, static with high 
 voltage channels.

DYNAMIC: 
 Channels belonging to the list indicated in the PINLIST come from the 
 F40 board and are amplified by the P300 board. The channels of P300 board, 
 connected to the system's receiver and to the UUT, are high voltage digital 
 channels (-30V+30V), while channels connected to the F40 board are low 
 voltage digital channels (-3V+12V).

OPEN: 
 Channel belonging to the list indicated in the PINLIST are disconnected 
 from the system's receiver. For channels listed in PINLIST, connections 
 to modules F40 and S64 are opened as well.

EXTERN: 
 Channels belonging to the list indicated in PINLIST are connected to an 
 external signal amplified (with a fixed voltage gain of 3) from the booster 
 of the P300 board.

LI1: 
 Channels belonging to the list indicated in the PINLIST are connected 
 to the analog line LI1 and amplified by the booster of the P300 board. 
 In this mode, channels listed in PINLIST can only have a value corresponding 
 to the first of the last two channels of P300 board (Ch31 for the first 
 board).

LI2: 
 Channels belonging to the list indicated in the PINLIST are 
 connected to the analog line LI2 and amplified by the booster of the P300 
 board. In this mode, channels listed in PINLIST can only have a value 
 corresponding to the first of the last two channels of P300 board (Ch32 
 for the first board).

Channel_list

Defines the list of channels to which the mode defined by the previous 
 parameter will be applied. 

__________________________

### Note

The digital channels of the F40 board, 
 belonging to the same F40 family of a channel used through the P300 board, 
 become low voltage analog channels with TTL levels (-1V+6V) instead of 
 levels: -3V+12V. 

F40 are grouped in 4 families of 8 channels 
 each.

__________________________

### See 
 also 

Info on modules

__________________________

### Examples

~BOOST_MODE example 

The instruction ~BOOST_MODE is used in 
 functional programs to set the function mode of channels available with 
 the F48H module.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

F40,F48,P300

&#169;2008 
 Seica S.p.a - All rights reserved