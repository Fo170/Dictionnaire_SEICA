# ~CHLEV 

# 

# 

________________________

### Syntax

~CHLEV 
 [*] 
 [NO_CHECK] [AUX] IL=value, 
 IH=value, OL=value, 
 OH=value, [ILB=value, 
 IHB=value, OLB=value, 
 OHB=value] ,

(group of channels), [IL=value, 
 IH=value, OL=value, 
 OH=value, (group of channels)], 
 etc. 

[*]

Maintains the previous channel settings (specified in a previous ~CHLEV 
 instruction.

IL=value

Specifies the value in volts of the low level of the driver channels.

IH=value

Specifies the value in volts of the high level of the driver channels.

OL=value

Specifies the value in volts of the low level of the sensor channels.

OH=value

Specifies the value in volts of the high level of the sensor channels. 

ILB=value

Specifies the value in volts of the low level of the driver channels 
 for the B FAMILY of P300 board.

IHB=value

Specifies the value in volts of the high level of the driver channels 
 for the B FAMILY of P300 board. 

OLB=value

Specifies the value in volts of the low level of the sensor channels 
 for the B FAMILY of P300 board. 

 NO_CHECK

disable the congruence check of the value programmed.

 AUX

specifies the setting of the AUXiliary channels (T964 only)

OHB=value

Specifies the value in volts of the high level of the sensor channels 
 for the B FAMILY of P300 board. 

Channel_list

Group of channels to be associated to the specified setting

If the ~CHLEV instruction is not specified, 
 the default values are: IH=3V, IL=0V, OL=2.4V, OL=0.8V.

These values are valid also for P300 Family 
 B.

__________________________

### Note

 * 

The ~CHLEV will initialize 
 all the channels to the default value unless the continuation symbol is 
 specified '*' 

 * 

If 
 one pin is set twice in the same ~CHLEV instruction, only the last value 
 will be valid. 

 * 

the hardware do not 
 allow to have different setting on the same group of channel 

 MIS32 = group of 4 channels 

 F40 = group of 8 channels

 P300 = 2 family by pin group of 32 channels

 T964 = by pin

 * 

When working with 
 a P300 card: 

 * 

the 
 ~BOOST_MODE instruction must be written prior to the ~CHLEV instruction. 
 In fact the ~CHLEV sets the 
 channels in a different way according to the BOOST_MODE parameters (BYPASS; 
 STATIC, DYNAMIC) because it uses the channel card's voltage limits. Also 
 the card programming is different according to the output card selected.

 * 

If one of the 
 group of 8 channel is used as dynamic booster , the remaining BYPASS channels 
 must belong to the range TTL (IH>2.4 and IH<5.6, IL<0.8 and IL=>0, 
 0.8<OL<1.4, 1.4<OH<2.4).

 * 

If 
 values 
 or channel numbers in the CHLEV instruction are passed through a variable, 
 a further check will be done runtime.

 * 

the ~CHLEV will test 
 for all the contrain unless you specified the keyword NO_CHECK

__________________________

### See 
 also 

~Boost_mode

~Family

__________________________

### Examples

~Chlev example 

Determines the programming voltage threshold 
 of the driver and sensor channels for the families defined in the instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

F40,MIS32,P300,T964

&#169;2008 
 Seica S.p.a - All rights reserved