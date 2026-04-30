# ~REPORT

# 

# 

# 

________________________

### Syntax

~REPORT 
 value1,value2 ; 

value1,value2...

The values can be expressed as:

- a constant

- a runtime variable INTEGER, FLOAT, STRING type

- a string of characters

__________________________

### Note

The report of this 
 instruction is written automatically in the statistics files if the statistics 
 mode is enabled.

The ~CURSOR 
 and ~COLOR. instructions are not managed for the ~REPORT instruction.

Several arguments can be specified (Example: 
 arg1=constant, arg2= variable runtime float) in the same ~REPORT instruction.

__________________________

### See 
 also 

~FORMAT

__________________________

### Examples

~REPORT example 

Displays the specified value or values 
 in the TEST REPORTS window of the test environment. It is also reported 
 the name of the cluster in question.

Preprocessor R Runtime : Dynamic R 
 Static 
 *

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved