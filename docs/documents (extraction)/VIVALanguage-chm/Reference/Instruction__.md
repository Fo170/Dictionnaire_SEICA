# PATTERN / 

# 

# 

# 

________________________

### Syntax

/ 
 Option ; 

 /label 
 Option ; 

PATTERN Option ; 

__________________________

option

DEAD

DMASTER

JUMP

MASK

MASKC

label

NOPROBE

NOSTEP

ONERROR

ONPASS

PROBE

REPEAT

STATIC

SYNC

TIMING

label 

 Defines 
 a label which is taken as reference by the jump instructions.

__________________________

### Note

A program step is considered from the / 
 instruction to the preceding one. See the example. The PATTERN instruction 
 can be used in the same way as the / 
 instruction, 
 since they are identical.

It is advisable to use the / also as closing 
 of a runtime pattern because with 
 this instruction the error flags are activated.

__________________________

### See 
 also 

__________________________

### Examples

Instruction / example 

Defines a step of a functional program. 
 With the / instruction, the stimuli of the pattern are applied through 
 the driver channels and the sensor channels are measured.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved