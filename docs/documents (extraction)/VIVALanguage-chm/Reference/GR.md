# GR 

# 

# 

# 

________________________

### Syntax

~GR group 
 name = value ;

group name 

Indicates the name of the group of channels to modify. This name must 
 equal to the one defined in the DECLARE GROUP instruction.

value

Expresses the modification values of the channel group. Refer to the 
 table in the FUNCTION section.

The value can be :

- an INTEGER type constant

- an INTEGER type variable

The integer constants can have the following prefixes:

B indicates a constant in binary format

D or no character indicates a constant in decimal format 

H or 0X indicates a constant in hexadecimal format

O indicates a constant in octal format

N.B. The first channel defined in the DECLARE GROUP instruction will 
 correspond to the least significant bit (LSB) of the variable, while the 
 last signal defined in the DECLARE GROUP instruction will correspond to 
 the most significant bit (MSB) of the variable. See the EXAMPLE.

__________________________

### See 
 also 

Instruction DECLARE GROUP

Instruction IG

Instruction MG

Instruction OG0..OG9

Instruction ZG

__________________________

### Examples

GR example

Allows the modification of 
 the logic level of a 
 group of driver or sensor channels according to the specified value. The 
 new value assumed by the channel following the GR instruction is illustrated 
 in the following table:

PREVIOUS STATUS OF THE CHANNEL

VALUE SPECIFIED IN THE GR INSTRUCTION

NEW STATUS OF THE CHANNEL

IL

1

IH

IL

0

IL

IH

1

IH

IH

0

IL

OL

1

OH

OL

0

OL

OH

1

OL

OH

0

OH

Preprocessor * Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved