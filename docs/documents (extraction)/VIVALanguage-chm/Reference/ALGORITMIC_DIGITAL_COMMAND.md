# MATH MATL ACCI ACCD ACCH ACCL 

# ACCX ACSL ACSR ACRC

# 

# 

________________________

### Syntax

MATH pinlist 
 ;

MATL pinlist 
 ;

ACCH pinlist ;

ACCL 
 pinlist 
 ;

ACCI 
 pinlist 
 ;

ACCD pinlist 
 ;

ACSR pinlist 
 ;

ACSL pinlist 
 ;

ACCX pinlist 
 ;

ACRC pinlist 
 ;

Command

CH

ACC

CRC

Description 

MATH

>ACC

x

 x

set the channel to follow the accumulator register

MATL

>MEM

x

 x

set the channel to follow the dynamic memory (default)

ACCH

x

load>1

 x

set the corresponding bit of the accumulator

ACCL

x

load>0

 x

set the corresponding bit of the accumulator

ACCI

x

ACC+1

 x

increment the accumulator regardless of the number on pin listed

ACCD

x

ACC-1

 x

decrement the accumulator

ACSR

x

ACC>

 x

Circular right shit of the accumulator

ACSL

x

ACC<

 x

Circular left shit of the accumulator

ACCX

x

ACC^

 x

Bit complement of the accumulator 

 ACRC

 x

x

 CRC+

 calculate 
 the CRC of the enable pin of 8 channels group 

pinlist

List of signals or groups separated by "-".

The character "/" may be used to indicate contiguous 
 channels (from to).

A signal may be expressed as:

- a physical channel (number)

- a channel name previously declared with DECLARE CHANNEL

- a signal name previously declared with DECLARE GROUP 

- a channel name previously declared with DECLARE GROUP 

- a runtime variable containing the physical channel number (static 
 only)

__________________________

### Note 

Only 1 accumulator register every 8 pin,

each channel my be only tied to the corrispondant bit of the register.

the channel will chance according with the it's bit of the register 
 with the phase and format defined.

the ACCI,ACCD,ACCX,ACSL,ACSR 
 need only one pin listed per 8 channel group

only 1 operation is allowed by pattern on the same 8 channel group ( 
 last listed )

the operation 
 will the actuated at in the same pattern ( at the programmed phase)

if the channel is set for mathematical function will ignore the data 
 bit programmed by the pattern .

the ACRC command is independed 
 by the Accumulator register and can be programmed in the same pattern 
 with we other

algoritmic command 

__________________________

### See 
 also 

~CRC

__________________________

### Examples

 Example

Enable the mathematical function of the digital channel.

each channel may by tied to an 8 bit accumulator, and the accumulator 
 can perform 

mathematical function at dynamic speed

Preprocessor * Runtime : Dynamic R 
 Static 
 *

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved