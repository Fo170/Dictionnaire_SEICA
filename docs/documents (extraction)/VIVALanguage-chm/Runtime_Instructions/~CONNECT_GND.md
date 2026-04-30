# ~CONNECT GND 

# 

# 

# 

________________________

### Syntax

~Connect 
 gnd TYPE=option 
 TO=signal_list LABEL=name ; 

Parameters

Unit of measure

Mandatory

Options

Description

type=option

[-]

No

 Physical

Virtual 

Connect to the physical ground of the system

Connect to the ground supplied by the virtual GND generator 

to=signal_list

[-]

No

To this parameter you must assign one or more signals that must be set 
 connected to gnd 

label=name

[-]

No

ALL

Name to identify this connection

__________________________

### Note

If not connected to a channel it shields 
 the analog bus towards the machines gnd. By defining a channel to connect 
 to gnd, you also have the boards gnd connected to the machines gnd.

__________________________

### See 
 also 

~Apply

~Connect

~Connect Signals

~Measure

~Remove

__________________________

### Examples

~Connect GND example 

NVL instruction to connect a channel to 
 gnd or to shield the analog bus towards the machine's gnd.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved