# DIGIPLEX 

# 

# 

# 

________________________

### Syntax

__________________________

### Note

WHAT IS ?

Its a technique that 
 allow to do digital 
 test ,using the 4 digital 
 channels of the ACLAM

by multiplexing them through the scanner 
 or if Flying 
 prober through the SCAFP and the probes.

 ( 
 DIGItal multiPLEXer)

Features:

 Use 
 the VL digital language and 
 the ICT digital pattern generation.

 All the analog channel ( scanner ) can 
 be used as normal digital channel

 Possibility 
 to use more then 4 resources ( by grouping channel of the same logic state)

 Edge generation controlled ( non switched)

 Autocorrection 
 ( pin not 
 connected , pin linked together and 
 or grounded)

 Use 
 the various kind 
 of channel in a mixed mode ( F50,.MIS32,VBN,DIGIPLEX,FLY)

 It may use also the virtual flying channel 
 in any combination (MAX 4-8 channel) 

 Is possible to insert user analog test 
 (1 linee only) in combination whit digital test.

 Possible to automatically insert a pull-up/down 
 resistor on the output. (test of the OC)

 Possible to insert a load programmable 
 in voltage and current +-100V 0-500ma (Test fanout 

Limitation:

 Cant be used in dynamic

 Current limit of 
 400ma max 
 of backdriving ( in case of pin grouping the current needed my exceed 
 the limit)

Use:

 Enable digiplex in MANTENANCE OPTION 
 FUNCTIONAL 

 Assign to the component the 
 digital function

 Generate or rigenerate the test.Utilizzo:

HOW DOES IT WORK?:

 Whenever during execution VIVA encounters 
 a digital command for an analog channel, it connects automaticall one 
 of the ACLAM Digital Channels to the analog channel, and sets the specific 
 digital state. In order to optimize the number of relay switching, VIVA 
 uses the digital channels in random mode. 

 The 
 four digital channels are used according to the following scheme: 

1- Connection of one or more pins of the 
 UUT to logic level L

2- Connection of one or more pins of the 
 UUT to logic level H

3- Use 
 of the channel for the generation of a singol signal, i.e. the CLOCK

4- Use 
 of the channel to act as a SENSOR, one output at a time, repeating the 
 test.

The architecture allows generation of both 
 combinatorial or sequential truth-tables in a simple but effective way. 
 The only possible limitation is if overdrive current is exceeded when 
 many pins need to be forced to logic 1 or logic 0 simultaneously.

When one of the four function is not needed, 
 the software automatically uses the channel free to drive signals in single 
 mode. 

 Generation: for allcomponents with digital 
 functionality VIVA searches in the system libraries S2074.LIB ,S20SMT.LIB,S2010.LIB,S20MIX.LIB 
 the presence of a truth-table and creates the correspondig cluster-test 
 with the associated pin-list. If nothing is found in the libraries, the 
 file with the pin-list is always crated to be filled in by the user. 

 The truth-table, when written in @L, 
 uses the symbols ( one per pin) HLhl01T. During compilation VIVA generates 
 an error if, due to the constraints, it is not possible to generate the 
 digital functions for the symbols HL01T 
 ( while ignored for the symbols hl). For example, (@L(.HL0) 
 if pins 2 
 an 3 are connected together generates an error. 

__________________________

### See 
 also 

SET DIGIPLEX

DECLARE DIGIPLEX

__________________________

### Examples

Its a technique that 
 allow to do digital 
 test ,using the 4 digital 
 channels of the ACLAM

by multiplexing them through the scanner 
 or if Flying 
 prober through the SCAFP and the probes.

Preprocessor Runtime : Dynamic Static 
 R

Modules: ACLAM,SCANNER

&#169;2008 
 Seica S.p.a - All rights reserved