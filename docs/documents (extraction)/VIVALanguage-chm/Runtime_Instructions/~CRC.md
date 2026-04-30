# ~CRC 

# 

# 

________________________

### Syntax

CRC 
 pinlist 
 ;

~CRC pinlist 
 ;

CRC 
 ARM pinlist 
 ;

CRC CLEAR 
 pinlist 
 ;

Command

Description 

ARM
execute a calculation of the crc on the selected channel

CLEAR
clear the crc generator

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

Only 1 crc generator every 8 pin;

If more the 1 pin will be tied to the crc . the generator will perform 
 a parallel crc.

Parallel crc will give different result depending from which of the 
 8 channel is enabled

instead single channel crc will give always the same result regarding 
 of the selected channel.

If all 0 are sampled, The result will be 0 regardless of the number 
 of shift.

in dynamic mode the crc generator could be 
 armed by the command ACRC 

in dynamic mode will be used the data sampled on the preceding pattern.

in static mode "ARM" will the sample the actual level present 
 on the channel.

the sample will be at the low threshold of the channel

__________________________

### See 
 also 

READ_CRC

__________________________

### Examples

 Example

link the CRC generator to the listed digital channel.

Preprocessor * Runtime : Dynamic R 
 StaticR

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved