# ~RG 

# 

# 

# 

________________________

### Syntax

~RG 
 VALUE=channel_group ; 

value

Indicates the destination variable; it can be an INTEGER type runtime 
 variable.

channel_group

Indicates the group of channels to read. The group of channels can be 
 expressed as:

 * 

physical channel numbers

 * 

channel names defined with the DECLARE CHANNEL 
 instruction

The / character is used to indicate 
 a contiguous group of channels and the , or - character is used to 
 indicate non-contiguous channels.

__________________________

### Note

 * 

The ~RG instruction 
 simply executes a read of the status of the channels without testing them, 
 therefore no error is generated. This instruction does not modify the 
 status of the channel.

 * 

Driver or masked 
 channels can also be read; the value which the channels assume in that 
 moment will be passed on to the variable.

 * 

Up to 32 channels 
 can be read with ~RG instruction.

__________________________

### See 
 also 

~WG

__________________________

### Examples

~RG example 

Reads the value of the group of channels 
 and assigns it to the specified variable. The value is assigned to the 
 variable in binary form. The first channel declared in the group corresponds 
 to the least significant bit of the variable.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved