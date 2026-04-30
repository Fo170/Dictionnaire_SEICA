# ~COLOR 

# 

# 

# 

________________________

### Syntax

~COLOR 
 background, 
 character ; 

background

It is a number 0 to 15 that defines the background color. The number 
 can also be expressed with a FLOAT type runtime variable. Refer to the 
 following table:

COLORS TABLE

0 Black

1 Dark blue

2 Dark green

3 Blue/gray

4 Dark red

5 Violet

6 Ochre

7 Light gray

8 Dark gray

9 Light blue

10 Light green

11 Sky blue

12 Light red

13 Fuchsia

14 Yellow

15 White

character

It is a number 0 to 15 that defines the character's color. The number 
 can also be expressed with a FLOAT type runtime variable. Refer to the 
 table of colors above.

If the ~COLOR instruction is not specified, 
 the character color is white and the background is black.

__________________________

### Note

The ~COLOR 
 command can be inserted in the ~WRITE instruction using this syntax:

~WRITE \CO\character\background, 
 value1, value2

where the character and the background 
 are expressed with 3 characters each. See 
 the EXAMPLE.

__________________________

### See 
 also 

~Cursor

~Write

__________________________

### Examples

~Color example

Specifies the foreground and background 
 colors for the next output operations executed by the ~WRITE 
 instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved