# DECLARE GROUP 

# 

# 

# 

________________________

### Syntax

DECLARE 
 GROUP group name =channel group

group name

Alphanumerical string that indicates the name assigned to the group 
 of channels. The group name can be a maximum of 20 characters long.

 channel 
 group 

Indicates the group of physical channels associated to the group. The 
 channels are separated by a comma ,.

It is possible to express the channels with a physical number or with 
 the channel names defined previously in the DECLARE CHANNEL instruction. 
 See the EXAMPLE.

A maximum of 64 channels can be defined for each DECLARE GROUP instruction, 
 but when we assign a value to the group, the instructions must be executed 
 on two groups of 32.

__________________________

### Note

A maximum of 100 DECLARE GROUP instructions 
 can be defined per functional program.

Names of groups previously defined can also be used for new DECLARE 
 GROUP. Refer to the EXAMPLE 2.

The movement or read of the channels defined in a group is carried out 
 via the IG, OG, MG, ZG, GR instructions.

N.B. The first channel defined in the DECLARE GROUP instruction will 
 correspond to the least significant bit (LSB) of the value expressed with 
 the abovementioned instructions while the last signal defined in the group 
 will correspond to the most significant bit (MSB).

Refer to the EXAMPLE.

__________________________

### See 
 also 

DECLARE CHANNEL, IG, OG, MG, ZG, GR

DECLARE

__________________________

### Examples

DECLARE GROUP example

Assigns a name to a group 
 of channels.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved