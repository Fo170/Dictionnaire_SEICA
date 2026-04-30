# TIMING DEFINITION

# 

# 

________________________

### Syntax

TIMING 
 timing name option

...

 PERIOD 
 time;

 STROBEn 
 time1,[time2];

 ASSERTn 
 time1;

 PHASEn 
 time1,time2,[time3];

 PROBEn 
 time1,time2;

...

ENDTIMING

timing name

Alphanumerical string maximum 20 characters which defines the name of 
 the timing.

option

Indicates the option which can be associated to the timing; this can 
 be:

optimize. The programming of 
 the channel data is inserted in the first clock of the executive phase 
 of the pattern. This enables faster program execution, up to pattern rates 
 of 10MHz.

share. Indicates that the current 
 timing can also be used by another functional program File.pat without 
 having to be declared again.

noshare. Indicates that the 
 timing can only be used in the current functional program and not in other 
 File.pat functional programs.

PERIOD

time

define the total duration of the timing

PHASE 

n 

time1,time2,time3

1 to 15 phase can be described

 ASSERT

n

time1

1 to 15 assert can be described

 STROBE

n

time1,time2

1 to 15 stobe can be described

 PROBE

n

time1,time2

1 to 31 probe can be described

NCLOCK|CPP

number

specified the number of ripetition of the phase within the period 

__________________________

### Note

The TIMING - ENDTIMING section must always 
 be declared.

Up to 220 timings can be declared in the 
 functional program. However, if there are timings 
 with more than 128 clock pulses, these occupy the space of two or more 
 timings, in multiples of 128.

Up to 250 commutations can be declared 
 for each timing.( DHF ONLY)

To recall the timing during the program, 
 it is sufficient to use the pattern option:

TIMING timing 
 name;

The timing is associated to the pattern 
 in which it is written and is maintained also for the patterns which follow, 
 until a new timing is associated.

__________________________

### See 
 also 

TIMING pattern option.

__________________________

### Examples

TIMING example 

Defines the declaration section of the 
 timing. The pattern duration, the strobe, the assert time, the various 
 phases. etc. are defined in this section. The timing will then be used 
 at pattern level during the program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F50/DHF/TALON

&#169;2008 
 Seica S.p.a - All rights reserved