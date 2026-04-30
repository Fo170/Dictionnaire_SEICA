# ~WG 

# 

# 

# 

________________________

### Syntax

~RG 
 VALUE=channel_group ; 

value

Indicates the value, which the group of channels will have to assume. 
 The value can be expressed as:

 * 

an INTEGER type runtime constant

 * 

an INTEGER type runtime variable

channel_group

Indicates the group of channels that will assume the previously specified 
 value. The group of channels can be expressed as:

 * 

physical channel numbers

 * 

name of a group of channels defined with the DECLARE 
 GROUP instruction

 * 

channel names defined with the DECLARE CHANNEL 
 instruction

The / character is used to indicate 
 a contiguous group of channels and the , or - character is used to 
 indicate non-contiguous channels.

__________________________

### Note

 * 

The ~WG instruction 
 modifies the status of the destination channel but does not alter either 
 the direction or the mask. Therefore it is necessary to ensure that the 
 destination channels are already in driver before executing the write.

 * 

Up to 32 channels 
 can be defined in a ~WG instruction.

__________________________

### See 
 also 

~RG

__________________________

### Examples

~WG example

Assigns a value (expressed by a constant 
 or a variable) to a group of channels. The least significant bit of the 
 constant or variable is assigned to the first declared channel in the 
 group.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved