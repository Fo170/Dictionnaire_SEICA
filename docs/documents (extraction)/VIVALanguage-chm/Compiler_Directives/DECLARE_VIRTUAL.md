# DECLARE VIRTUAL 

# 

# 

# 

________________________

### Syntax

DECLARE VIRTUAL name=channel ; 

name

assign a signal name to the specified channel to be excluded from the 
 hardware

channel

channel to be used 

__________________________

### Note

VIRTUAL channel will not drive the hardware 
 nor generate error

could be useful to exclude it temporarily 
 .

The virtual channel can represent internal 
 signal of the UUT since they have no effect with the UUT

but can concur to generate the signal waveform 
 for the use of the backtrace probe 

__________________________

### See 
 also 

Links

__________________________

### Examples

Links 

Declare a channel to 
 be excluded by the use of hardware 

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved