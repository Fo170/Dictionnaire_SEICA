# ~PULL 

# 

# 

# 

________________________

### Syntax

~PULL 
 keyword 
 [*,]channel [keyword [*,]channel ] ;

keyword

This parameter defines if the resistor is a pull-up or pull-down. It 
 can accept the following values:

UP

DOWN

The UP DOWN parameters can also be specified in succession, in this 
 case the channel in question will be connected both the pull-up and the 
 pull-down resistor. Refer 
 to the example.

[*,]

Indicates the INCREMENTAL way of connecting/disconnecting channels. 
 That is, the previous connection is maintained and on this the actions 
 specified in the current ~PULL instruction are executed.

[,]

If instead of the * character no character is specified, all the channels 
 of the system are disconnected from the pull-up/down resistor while the 
 ones specified are connected to the new value, if specified.

channel

Indicates the channel or the channels to be connected/disconnected to 
 the specified resistor. The channel can be:

 * 

a single channel

 * 

a group of channels 

 * 

a FLOAT type runtime variable

 * 

a channel name defined with the DECLARE CHANNEL 
 instruction.

The / character is used to indicate a group of contiguous channels 
 and the , character or the - character are used to indicated non-contiguous 
 channels. 

__________________________

### Note

All the channels of the system are disconnected 
 from the pull-up and pull-down resistors by default.

__________________________

### See 
 also 

Links

__________________________

### Examples

~Pull example 

Connects/disconnects the 1KOhm pull-up 
 or pull-down resistor to the output channels. The pull-up is to the high 
 voltage threshold of the channel, while the pull-down to the low one. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved