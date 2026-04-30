# ~BLIn 

# 

# 

# 

________________________

### Syntax

~BLIn [*], pinlist ; 

n

 Specified 
 1 of 8 board line to operate with the other line will be uneffected

 *

If specified as a first parameter it will operate as incremental

if not specified all the line will be first cleared ( open)

 pinlist

list of channel to be connected to the specified analog line

*channel

it will open the specified channel 

__________________________

### Note

Pinlist refer to board channel 
 however the board line are unique ever 32 channel (8 line config)

only one channel per board are enough to identified the right board 
 line.

extra channel of the same board will be ignored

__________________________

### See 
 also 

SCANNER

~CLEAR BLINE;

~CLEAR SCANNER;

__________________________

### Examples

Links 

for an advanced use of the 
 8 board linee of the SEICA scanner

Board line are 8 extra rele present on every scanner board used to optmize

the impedence capacitance 
 of the analog bus matrix

Preprocessor Runtime 
 : R Dynamic 
 Static 
 R

Modules: SCAEVO

&#169;2008 
 Seica S.p.a - All rights reserved