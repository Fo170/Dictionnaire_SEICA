# STROBE1..16

# 

# 

# 

________________________

### Syntax

STROBEn time1,[time2];

time1

Defines the instant of measurement or the strobe window of the channel 
 within the period. 

time2

Defines the instant of measurement or the strobe window of the channel 
 within the period. 

For the DHF module: If two or 
 more values are indicated for the strobe time, the associated signal is 
 sampled twice, only in the indicated values. 

For the F40 module: If two values 
 are indicated for the strobe time, the signal is continuously strobed 
 between the two values (strobe window).

__________________________

### Note

The STROBE1 instruction is an alias of the STROBE instruction.

The STROBE time must always be declared in the timing.

The STROBE0 is implicit, therefore it does not have to be declared.

For the F40 module:

Up to nine different strobe times can be defined in a test program but 
 only two can be used at the same time on channels of the same module. 

Only one continuous strobe (with two values) can be defined for each 
 F40 module.

If the channel is measured with the OH0 or OL0 instruction, there can 
 be three different strobe times for each module because the two of the 
 phase and the end of pattern can be used. 

__________________________

### See 
 also 

__________________________

### Examples

STROBE example

Defines 
 the instant of measurement of the sensor and driver channels within the 
 pattern.

The F40 modules use the instruction 
 in the form STROBE1..9 while for the DHF modules, only the STROBE or STROBE1 
 instruction is allowed.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: DHF/F40

&#169;2008 
 Seica S.p.a - All rights reserved