# @L 

# 

# 

# 

________________________

### Syntax

@L(logic 
 states)

logic states

Sequence of logic states to assign to the channels defined in the DECLARE 
 PINLIST instruction.

The correspondence between @L instruction and the DECLARE PINLIST is 
 the following:

DECLARE PINLIST CH1,CH2,...CHn;

@L(S1,S2,.......Sn);

The first state defined in the @L (S1) instruction is associated to 
 the first channel defined in the DECLARE PINLIST (CH1) instruction, state 
 2 (S2) to channel 2 (CH2),.... state n (Sn) is associated to channel n 
 (CHn).

The logic states can be:

H Executes an unmonitored forcing 
 of the driver to high logic level (equal to an MH channel instruction).

L Executes an unmonitored forcing 
 of the driver channel to low logic level (equal to an ML instruction ).

1 Executes a test of the sensor 
 channel at high logic level (equal to an OH instruction).

0 Executes a test of the sensor 
 channel at low logic level (equal to an OL instruction).

h Executes an unmonitored forcing 
 of the channel to high logic level. This condition is not indispensable 
 to obtain valid outputs.

L Executes an unmonitored forcing 
 of the channel to low logic level. This condition is not indispensable 
 to obtain valid outputs.

T Executes the monitored forcing 
 of the driver channel so that it follows phase 1. The channel is measured 
 at the strobe time (equal to a P1 instruction).

. Masks the sensor channel (equal 
 to an OM instruction).

__________________________

### Note

Itxxxxxxxxxxxxxxxx

__________________________

### See 
 also 

DECLARE PINLIST

__________________________

### Examples

@L example 

Assigns the indicated logic states to the 
 channels declared with the DECLARE PINLIST.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved