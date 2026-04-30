# ~CHMODE 

# 

# 

# 

________________________

### Syntax

CHMODE 
 [*] MODE PINLIST,..., MODE PINLIST; 

~CHMODE 
 [*] MODE PINLIST,..., MODE PINLIST; 

~CH_MODE 
 [*] MODE PINLIST,..., MODE PINLIST; 

[*]

Maintains the previous channel settings (specified in a previous ~CHOUT 
 instruction. See Example.)

mode

The following options are accepted:

NORMAL: 
 The channels indicated in PINLIST are set in normal dynamic operation.

CLK The channels indicated 
 in PINLIST are connected to the internal pulse 
 generator.

CLKN 
 The channels indicated in PINLIST are connected to the negated internal 
 pulse generator.

CLK2 
 The channels indicated in PINLIST are connected to a programmable divider 
 of the internal pulse generator.

CLK2N 
 The channels indicated in PINLIST are connected to a negated programmable 
 divider of the internal pulse generator.

TDI 
 The channels indicated in the PINLIST are connected to the first internal 
 shift 16 bit shift register. 

TMS 
 The channels indicated in the PINLIST are connected to the second internal 
 shift 16 bit shift register. 

STATIC 
 The channels indicated in the PINLIST are connected to the internal static 
 register for fast static programming or for fault injection.

 IN (TDO) indicate the this channel is routed 
 to the internal frequency 

 time 
 measurement only 1 channel my be routed at a time for every

 group 
 of 8 channel the output channel are not effected

 IN_COUNTER 
 select the internal input to of the internal time

 measurament 
 as output

 IN_COUNTER_NEG 
 select the inverted internal input to of the internal 

 time measurament as output 

 IN_FILTER 
 select 
 the internal 
 filtered input (specified by IN) 
 as

 output 

 IN_FILTER_NEG 
 select 
 the inverted internal filtered input

 (specified 
 by IN) as output 

 IN_LEVEL_L 
 select 
 the internal 
 low thrushould input 
 (specified by IN)

 as output 

 IN_LEVEL_H 
 select 
 the internal 
 high thrushould input(specified 
 by IN)

 as 
 output

 STUCK0 
 Select a fixed low level in output

 STUCK1 
 Select a fixed high level in output

 f50t 
 only

 IN_H_TO_L2 
 send a output TTL equivalent to analog line 2 (high level )

 IN_L_TO_L2 
 send a output TTL equivalent to analog line 2 (low level )

 IN_H_TO_L4 
 send a output TTL equivalent to analog line 4 (high level )

 IN_L_TO_L4 
 send a output TTL equivalent to analog line 4 (low level )

 IN_F_TO_L2 
 send a output TTL equivalent to analog line 2 (digital filter )

 IN_F_TO_L4 
 send a output TTL equivalent to analog line 4 (digital fllter )

pinlist

Defines the channels set with the operational mode indicated by the 
 parameter mode. The character 
 / defines a contiguous group of channels, while the character , or 
 -defines non contiguous channels.

__________________________

### Note

 The 
 signal inputted to the time measurement as also a histeresis filter selectble 
 with the command ~DIGTIME 

 the 
 resulting signal is due by the 2 logic thrushould used.

 Routing 
 the input channel to the output channel is only possible within the same 
 group of 8 channel

 and is 
 useful for building high speed high impedence buffer or inverter.

 routing 
 the filtered version is 
 only possible for 1 signal every 8

 however 
 is possible to send the troushould ttl equivalent of any digital signal 
 of the system.

 the signal 
 to the analog line it will be ttl communting within the troushould programmed 
 to the channel selected

 digital 
 filter ( 1 filter every 8 channel ) 

 from 
 both level low will commute ( high ) at the first transition of low troushould

 from 
 both level high will commute ( low ) at the first transition of high troushould

__________________________

### See 
 also 

~DIGCLOCK

~TX

__________________________

### Examples

~CHMODE example 

The instruction ~CHMODE is used to define 
 the internal operational mode of the channels available with the F50 module.

Preprocessor * Runtime 
 : Dynamic 
 R Static R

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved