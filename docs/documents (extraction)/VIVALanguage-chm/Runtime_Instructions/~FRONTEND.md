# ~FRONTEND 

# 

# 

________________________

### Syntax

~FRONTEND 
 [*] 
 [NO_CHECK] [AUX] OCL=value, OCH=value, SVL=value, 
 SVH=value, 
 SCL=value, SCH=value, 
 SKL=value, SKH=value, 
 IMP=value, PMO=mode,TERM=value,

(group of channels), [OCL=value, 
 OCH=value, SVL=value, 
 SVH=value, 
 (group of channels)], etc. 

[*]

Maintains the previous channel settings (specified in a previous ~FRONTEND 
 instruction.

OCL=value

Specifies the value in amps sink from the channel when low

OCH=value

Specifies the value in amps sink from the channel when low

SVL=value

Specifies the value in volts high reverence of the current load

SVH=value

Specifies the value in volts LOW reverence of the current load

SCL=value

Specifies the value in amps of the sink current of the load when in 
 current mode

SCH=value

Specifies the value in amps of the source current of the load when in 
 current mode

SKL=value

Specifies the value in unit of slew rate of the falling edge 

SKH=value

Specifies the value in unit of slew rate of the rising edge 

IMP=value

Specifies the value in ohm of load when in resistive 
 mode 

 PMO=0/1/2

specified the mode for the load 0=none 1=current 2=resistive

 IMP=value

Specifies the value in ohm if series resistor of the channel output. 

 AUX 

specifies the setting of the AUXiliary channels

 NO_CHECK 

disable the congruence check of the value programmed.

Channel_list

list of channels to be associated to the specified setting

__________________________

### Note

 * 

The ~FRONTEND will 
 initialize all the channels to the default value unless the continuation 
 symbol is specified '*' 

 * 

If 
 values 
 or channel numbers in the FRONTEND instruction are passed through a variable, 
 a further check will be done runtime.

 * 

the ~FRONTEND will 
 test for all the contrain unless you specified the keyword NO_CHECK

 * 

the auxiliary channel 
 only 12 for each sequencer.

 * 

the auxiliary channel 
 has the same number of the regular channel 1/12,33/44,65/76 etc.

__________________________

### See 
 also 

~CHLEV

__________________________

### Examples

~frontend example 

Determines the frontend parameter of the 
 digital channels 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved