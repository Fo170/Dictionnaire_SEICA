# ~FONT 

# 

# 

# 

________________________

### Syntax

~FONT 
 font ; 

font

It is a number 0 to 15 that defines the font. The number can also be 
 expressed with a FLOAT type runtime variable. Refer to the following table:

FONT TABLE 

0 = 12 Courier New

1 = 10 Courier New

2 = 12 Courier New

3 = 16 Courier New

4 = 20 Courier New

5 = 24 Courier New

6 = 36 Courier New

7 = 48 Courier New

8 = 72 Courier New

9 = 12 Consolas New

10 = 12 Courier New

11 = 24 Consolas New

12 = 24 Courier New

13 = 36 Consolas New

14 = 36 Courier New

15 = 48 Consolas New

If the ~FONT instruction is not specified, 
 the character font is 2.

__________________________

### Note

The ~FONT 
 command can be inserted in the ~WRITE instruction using this syntax:

~WRITE \FO\003\000 

where the value is expressed with 3 characters 
 each, value1 is the font ,value2 must be 000. See 
 the EXAMPLE.

__________________________

### See 
 also 

~Cursor

~Write

~Color

__________________________

### Examples

~FONT example

Specifies the font to be used by the next 
 output operations executed by the ~WRITE instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved