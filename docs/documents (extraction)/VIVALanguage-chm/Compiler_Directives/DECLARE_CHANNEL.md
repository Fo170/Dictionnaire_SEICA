# DECLARE CHANNEL 

# 

# 

# 

________________________

### Syntax

DECLARE 
 CHANNEL channel name = channel number

channel name

Alphanumerical string, which indicates the name, assigned to the physical 
 channel. The channel name length can be a maximum of 20 characters.

 channel 
 number 

Indicates the number of the physical channel.

__________________________

### Note

Up to 1024 DECLARE CHANNEL/DECLARE PIN instructions can be declared 
 in a functional program.

__________________________

### See 
 also 

DECLARE GROUP

DECLARE

__________________________

### Examples

DECLARE CHANNEL example

Assigns a name to the physical 
 system channel. The name is then used in the functional program instructions 
 with the advantage that when the physical channel number is modified, 
 the instructions are referred to the new one automatically.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved