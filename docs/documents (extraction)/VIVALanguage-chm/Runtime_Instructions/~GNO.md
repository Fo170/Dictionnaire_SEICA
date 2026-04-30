# ~GNO 

# 

# 

# 

________________________

### Syntax

~GNO = [*,][*] 
 [channel] ; 

[channel]

Indicates the channel or channels that corresponds to a channel board. 
 (Example: ch. 1 corresponds to channel board that contains channels from 
 1 to 32). The channel's ground of the indicated board will be connected 
 or disconnected from the output connector according to the [*,][*] fields.

The channel can be:

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

If the channel is not specified in the instruction (Example: ~GNO;), 
 the ground of all channels in the test system will be disconnected from 
 the output connector.

[*,]

Indicates the INCREMENTAL mode to connect/disconnect the ground. That 
 is, the preceding connections are maintained and the actions specified 
 in the current ~GNO instruction are executed upon this situation.

[,]

If no character is specified in place of the 
 * character, this indicates the NORMAL connect/disconnect mode. That 
 is, the ground of the channel board is connected while the ground of the 
 channel boards not specified are disconnected. If the current ~GNO instruction 
 includes the connection of channel grounds which are already connected, 
 the status of these channel board remains the same.

[*]

Indicates that the channel board indicated, must be disconnected from 
 the ground on the output connector.

[ ]

If no character is specified in place of the 
 * character, this indicates that 
 the channel board must be connected on the output connector.

__________________________

### Note

If the value of the channel is passed on 
 via a variable, any errors will come out during execution and not during 
 compilation.

__________________________

### See 
 also 

Links

__________________________

### Examples

~Gno example 

Connects or disconnects the ground of the 
 specified channels to/from the output connector of the channel board. 
 This instruction works considering the whole board, not the single channel. 
 Hence the ground is connected or disconnected for all channels in the 
 channel board (Example 1/32). It is not possible to have the ground connected/disconnected 
 on a single channel (Example: Channel 3,12,15).

Preprocessor * Runtime : Dynamic R 
 Static 
 R

Modules: F40,F32,MIS32

&#169;2008 
 Seica S.p.a - All rights reserved