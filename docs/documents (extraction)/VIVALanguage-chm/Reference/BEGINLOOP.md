# BEGINLOOP-ENDLOOP 

# 

# 

# 

________________________

### Syntax

BEGINLOOP 
 num

...

instructions

...

ENDLOOP 
 Valid syntax for the DHF module

BEGINLOOP 
 num

...

instructions

...

ENDLOOP 
 [ONERROR] [ONPASS] Valid syntax for the F40 module

num

Whole number that indicates how many times the loop must be repeated. 
 The range of num is as follows:

1 <= num <= 16384 For the DHF module

2 <= num <= 65000 For the F40 module

[ONERROR]

If specified, executes the loop until the error is present or until 
 the set number 
 of loops is reached. 

[ONPASS]

If specified, executes the loop until the error is NOT present or until 
 the set number 
 of loops is reached. 

__________________________

### Note

There can be up to 3 nesting levels with 
 the BEGINLOOP/ENDLOOP instruction.

With repetitive patterns it is recommended 
 to use the NOSTEP option so that the numeration of all repeated patterns 
 is NOT listed.

The pattern with the ENDLOOP option with 
 the ONERROR/ONPASS options, doesnt report any error. The error is generated 
 by the next pattern.

It is not advisable to use the MASK option 
 when the options ONERROR or ONPASS are present.

__________________________

### See 
 also 

__________________________

### Examples

BEGINLOOP-ENDLOOP example 

Executes a loop, which is repeated as many 
 times as specified by num.

Preprocessor * Runtime : Dynamic R 
 Static 
 R

Modules: F40,DHF

&#169;2008 
 Seica S.p.a - All rights reserved