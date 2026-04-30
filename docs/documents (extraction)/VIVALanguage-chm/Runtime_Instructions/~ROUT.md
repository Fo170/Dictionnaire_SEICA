# ~ROUT 

# 

# 

# 

________________________

### Syntax

~Rout RSn 
 [*,]channel [RSn [*,]channel] 
 ; 

RSn

Parameter that programs the resistor value between the driver channel 
 and the output connector. It can assume the following values:

RS0 or OPEN: disconnects the driver channel 
 from the output connector 

RS1: insert a 0W resistor

RS2: insert a 8W resistor

RS3: insert a 10W resistor

RS4: insert a 33W resistor

[*,]

Indicates the INCREMENTAL way of connecting/disconnecting channels. 
 In the incremental mode, the previous connection is maintained and new 
 connections/disconnections indicated in the current ~ROUT instruction 
 are performed on this situation.

[,]

If, instead of the * character no character is specified, all the 
 channels of the system are connected to RS1 (0W) while the ones specified 
 are disconnected/connected to the new value, if specified.

list_of_channel

Indicates the channel or the channels to connect/disconnect to the specified 
 resistor. 

__________________________

### Note

By default, all the channels of the system 
 are connected to RS1.

__________________________

### See 
 also 

Links

__________________________

### Examples

~Rout example 

Connects/disconnects the output resistor 
 between the driver channel and the output of the connector to isolate 
 the channel from the circuit under test or adapt the impedance of the 
 transmission line of the channel.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: F40,T964

&#169;2008 
 Seica S.p.a - All rights reserved