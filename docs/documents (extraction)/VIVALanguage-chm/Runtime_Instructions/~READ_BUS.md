# ~READ_BUS 

# 

# 

# 

__________________________

### Syntax

~READ_BUSn 
 variable; 

n

Whole number from 1 to 4 indicating the USB module from where the reading 
 must be done.

variable

INTEGER type runtime variable on which the value of the data can be 
 read.

__________________________

### Note

The ~READ_BUSn instruction reads the data present on lines USER-D0 - 
 USER-D7 at the specified address, on lines USER-A0 - USER-A7, from the 
 previous instruction ~SET USER_BUSWn.

__________________________

### See also 

### ~SET USER_BUSWn

__________________________

### Examples

~READ_BUS example 

Reads data from the digital bus of the 
 USB module. The reading address is present on lines USER A0- USER-A7 used 
 in the previous instruction ~SET USER_BUSWn while the data to read, is 
 present on lines USER-D0- USER-D7.

Preprocessor * Runtime : Dynamic R 
 Static 
 p

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved