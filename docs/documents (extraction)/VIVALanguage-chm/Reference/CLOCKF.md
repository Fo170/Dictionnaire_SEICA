# CLOCKF 

# 

# 

# 

________________________

### Syntax

CLOCKF [INT]=value

value

The value can only be: 

20N that means 20ns

INT

This parameter must be specified only if in the system there is not 
 the DHF module and indicates that the clock used as reference is generated 
 inside the F40 module. 

__________________________

### Note

The CLOCK instruction set 
 at 100N must be specified besides the CLOCKF if there is also the DHF 
 module in the system.

CLOCKF, is always derived by the main system CLOCK using a PLL in the 
 F40 or a fixed multipleyer by 4 in the F50

value can by smootely varied by changing the MAIN clock.

the real value can vary 
 between 18n to 1U taking count that some extreme value my be critical.

__________________________

### See 
 also 

CLOCK 

__________________________

### Examples

CLOCKF example

Sets the period of the clock referred to 
 the F40 module. This signal is used as reference for the timing generation.

WARNING: This instruction is only listed 
 for compatibility with the previous versions. From the rel. 3.14 the CLOCKF 
 can be omitted because times are automatically set (to 20ns for clockf 
 and to 100ns for clock).

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved