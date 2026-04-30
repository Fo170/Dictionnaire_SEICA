# PHASE1..16 

# 

# 

# 

________________________

### 

### 

### Syntax

 PHASEn 
 time1,time2,[time3];

time1

Defines the assert time (first instant 
 of commutation) 
 within the period.

rising or follow edge is determined by the current format of the signal. 

 time2

Defines the return time (second instant of commutation) within the period.

rising or follow edge is determined by the current format of the signal. 

time3

If specified defines the period for repetitions of the phase if the 
 signal as a clock repeat format.

__________________________

### Note

General 
 notes:

The instant or instants of commutation 
 must be included in the duration of the period.

For 
 the DHF module: 

From 1 to 250 commutations can be defined 
 within the period.

If in the timing PHASE2 and PHASE3 are 
 defined or PHASE1 and PHASE3 with the same commutation values, a WARNING 
 is inserted in the File.lis and the instants are automatically moved , 
 one from the other, by one clock pulse.

For 
 the F50 module: only two commutation times can be specified in 
 the phase. 

Up to 16 different phases can be defined 
 in a test program but only 5 phases can be used at the same time for each 
 module. 

If the clock repeat format is selected the phase will have a period 
 specified by TIME3.

if TIME3 is not specified the period of repetition will 
 be TIME2.

Limitation: 

the repetition can't be coincide with the period , or in between assert 
 and return time.

__________________________

### See 
 also 

TIMING DEFINITION

__________________________

### Examples

PHASE example

Defines the instants of commutation of the driver channels associated 
 to the phase within the period. The channels associated to the phase will 
 be moved by the P1 or C1...9 instruction.

For the F40 module the instruction in the form PHASE19 can be used 
 while for the DHF module the instruction in the form PHASE13 is used.

For the F40 module the R1, R0 and RZ instructions can be used.

Preprocessor * Runtime : Dynamic R 
 Static 
 R

Modules: DHF/F40

&#169;2008 
 Seica S.p.a - All rights reserved