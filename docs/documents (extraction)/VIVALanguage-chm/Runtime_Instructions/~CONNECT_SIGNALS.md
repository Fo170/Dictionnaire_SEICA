# ~CONNECT SIGNALS 

# 

# 

# 

________________________

### Syntax

~Connect 
 signals SIGNAL_LIST LABEL=name TO_LABEL=name 
 TO=signal 
 ; 

Parameters

Unit of measure

Mandatory

Options

Description

signal_list

[-]

Yes

List of signals that must be connected together. The lines of the ACLAM 
 are used for this operation. Note that this parameter does not have a 
 keyword so it is highly recommended to write this list right after the 
 command keyword. 

label=name

[-]

No

Name to identify this connection

to_label=name

[-]

No

This parameter allows you to connect a list of signals to a previous 
 CONNECT instruction identified with the variable assigned to the parameter.

to=signal

[-]

No

To this parameter you can assign a signal, meaning that the list of 
 signals will be connected to this signal.

__________________________

### Note

__________________________

### See 
 also 

~Apply

~Connect

~Connect Gnd

~Measure

~Remove

__________________________

### Examples

~Connect signals example 

NVL instruction to connect one or more 
 signals to a signal, group of signals or a previous connect instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved