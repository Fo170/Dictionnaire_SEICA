# ~OH ~OL ~IH ~IL ~MH ~ML ~OM 

# 

# 

# 

________________________

### Syntax

~OH pinlist 
 ;

~OL pinlist 
 ;

~IH pinlist 
 ;

~IL pinlist 
 ;

~MH pinlist 
 ;

~ML pinlist 
 ;

~OM pinlist 
 ;

Command
 D/S
H/L
MASK
Description 

~IH
D
H
N
drive the channel HIGH and check it goes HIGH

~IL
D
L
N
drive the channel LOW and check it goes LOW

~MH
D
H
Y
drive the channel HIGH and ignore the state of sensor

~ML
D
L
Y
drive the channel LOW and ignore the state of sensor

~OH
S
H
N
check the channel to HIGH

~OL
S
L
N
check the channel to LOW

~OM
S
?
Y
ignore the state of sensor

pinlist

list of signals or groups separated by "-"

the character "/" may be used to indicate contiguous 
 channels (from to)

a signal may be expressed as:

- a physical channel (number)

- a channel name previously declared with DECLARE CHANNEL

- a signal name previously declared with DECLARE GROUP 

- a channel name previously declared with DECLARE GROUP 

- a runtime variable containing the physical channel number (static 
 only)

__________________________

### See 
 also 

__________________________

### Examples

### example

Change immediately the state of a digital channel. without using 
 the PATTERN command

Obsolete command only for the module mis32

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: MIS32

&#169;2008 
 Seica S.p.a - All rights reserved