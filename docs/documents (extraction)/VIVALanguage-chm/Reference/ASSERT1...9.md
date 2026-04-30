# ASSERT1...16 

# 

# 

# 

________________________

### Syntax

ASSERT116=time;

time

Expresses the instant in which the channels are switched. The value 
 must be included in the period indicated in the PERIOD instruction:

__________________________

### Note

If 
 the AH, AL, AS instructions are used in the program., make sure that the 
 ASSERT time is defined in the timing, otherwise the channel behavior is 
 unpredictable.

It is possible to define 
 up to nine different assert times in a test program. For the F40 modules 
 it is possible to use only four assert times for each module at the same 
 time. But if inside the pattern a phase on the channels of the board is 
 already used, every phase precludes the use of an assert time.

The ASSERT1 instruction is 
 alias of the ASSERT instruction.

__________________________

### See 
 also 

PERIOD

Digital command

__________________________

### Examples

ASSERT example

Indicates the switching time of the channels programmed with the AH, 
 AL instructions inside the timing. All of the channels programmed with 
 the instructions will switch at the same instant, which is the one defined 
 by the ASSERT time. For the F40 modules, the ASSERT1..9 instruction can 
 be used because the module can handle up to 9 assert times. For the DHF 
 modules, only the instruction ASSERT1 or ASSERT are used.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40/DHF

&#169;2008 
 Seica S.p.a - All rights reserved