# WG 

# 

# 

# 

________________________

### Syntax

WG value = channel_group ; 

value

Indicates the destination variable. It can be a runtime variable defined 
 with the DECLARE RUNTIME INTEGER instruction.

channel_group

Indicates the group of channels to read. The group of channels can be 
 expressed as: 

 * 

physical numbers of channel 

 * 

channel names defined with the DECLARE CHANNEL 
 instruction

The / character is used to indicate a group of contiguous 
 channels and the ,or the - character is used to indicated non-contiguous 
 channels.

__________________________

### Note

 * 

The WG instruction modifies the status of the 
 destination channel but it does not change the direction nor the mask. 
 Therefore it is necessary to guarantee that the destination channels are 
 already in driver before executing the writing. 

 * 

Up to 32 channels can be defined in a ~WG instruction.

### __________________________

### See 
 also 

RG

IWG

IRG

__________________________

### Examples

WG example 

Assigns the value (expressed through a 
 variable) at a group of channels. The least significant bit of the constant 
 or of the variable is assigned to the first channel declared in the group.

Preprocessor * Runtime : Dynamic R 
 Static 
 *

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved