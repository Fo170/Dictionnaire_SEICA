# ~CONNECT 

# 

# 

# 

________________________

### Syntax

~Connect 
 keyword .... ; 

The keyword specifies the type of connection 
 you want to achieve on the board. The CONNECT instruction can assume the 
 following keyword options:

connect gnd

If not connected to a channel it shields the analog bus towards the 
 machines gnd. By defining a channel to connect to gnd, you also have 
 the boards gnd connected to the machines gnd.

connect signals

Connect one or more signals to a signal, group of signals or a previous 
 connect instruction.

Click on the previous links to see the parameters 
 for the CONNECT instructions.

__________________________

### Note

__________________________

### See 
 also 

~Apply

~Measure

~Remove

__________________________

### Examples

~Connect gnd example

~Connect signals example 

The CONNECT instruction connects one or 
 more signals to a signal or group of signals. This is a NVL instruction, 
 so it will choose automatically the lines to use in the machine. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved