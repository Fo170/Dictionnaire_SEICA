# DECLARE PINLIST 

# 

# 

# 

________________________

### Syntax

DECLARE 
 PINLIST =channel name1, channel name2,...

channel name1, channel name2,...

List of channels in the pinlist. The / is used to indicated a contiguous 
 group of channels and the , character is used to indicate non-contiguous 
 channels.

It is possible to express the channels with the physical numbers or 
 with the channel names defined previously in the DECLARE CHANNEL instruction.

Up to 256 channels can be defined for each pinlist.

__________________________

### Note

If more DECLARE PINLIST instructions are defined in a functional program, 
 only the last one is considered valid. 

The DECLARE PINLIST allows the declaration of up to 256 channels.

The correspondence between @L instruction and the DECLARE instruction 
 is as follows:

DECLARE PINLIST=CH1,CH2,...CHn;

@L(S1,S2,.......Sn);

The first status defined in the @L instruction (S1) is associated to 
 the first channel defined in the DECLARE PINLIST instruction (CH1), status 
 2 (S2) to channel 2 (CH2),.... status n (Sn) is associated to channel 
 n (Chn). See EXAMPLE 1.

__________________________

### See 
 also 

@L, DECLARE CHANNEL

DECLARE

__________________________

### Examples

DECLARE PINLIST example

Allows the declaration of a group of channels which will be moved with 
 the @L instruction in which the status each channel must assume is specified 
 (driver high, driver low,...).

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved