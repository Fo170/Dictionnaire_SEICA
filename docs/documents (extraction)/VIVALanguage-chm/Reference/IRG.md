# IRG 

# 

# 

# 

________________________

### Syntax

IRG 
 value = channel_group ; 

value

Indicates the destination variable. It can be:

 * 

an INTEGER type RUNTIME variable defined with 
 the DECLARE RUNTIME INTEGER instruction 

 * 

an integer type runtime array, defined with the 
 DECLARE RUNTME INTEGER ARRAY instruction.

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

The RG instruction reads the channel's condition 
 without checking them, therefore no error is generated.

 * 

This instruction does not modify the condition 
 of the channel.

 * 

Also driver channels or masked channels can be 
 read, the value stored in a variable will be the one of the channel in 
 that particular instant.

 * 

the IRG command can only be issued in static mode,

 * 

the IRG command is executed immediately without 
 the need of pattern execution

 * 

the group used by the IRG can contain any kind 
 of signal 
 DIGITAL (of different kind) DIGIPLEX,VBN

 * 

Up to 32 channels can be read with the IRG instruction.

### __________________________

### See 
 also 

IWG

__________________________

### Examples

RG example 

Reads the value of the group of channels 
 and assigns it to the specified variable. The value is assigned to the 
 variable in binary format. The first declared channel in the group corresponds 
 to the least significant bit of the variable.

Preprocessor * Runtime : Dynamic R 
 Static 
 *

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved