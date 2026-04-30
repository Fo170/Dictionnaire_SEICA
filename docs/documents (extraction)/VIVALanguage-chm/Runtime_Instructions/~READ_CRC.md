# ~READ_CRC 

# 

# 

# 

__________________________

### Syntax

~READ_CRC 
 pin; 

READ_CRC 
 pin; 

pin 

Specifies on which pin to read the CRC value

__________________________

### Note 

F50 as the CRC logic every group of 8 adiacent channel

T964 CRC is available in a per pin basis

__________________________

### See also 

ALGORITMIC COMMAND

~CRC

__________________________

### Examples

~READ_CRC example 

Reads the actual value of the crc 
 register of the specified pin and copies the value to the AR register. 

Preprocessor * Runtime : Dynamic R 
 Static 
 R

Modules: F50,T964

&#169;2008 
 Seica S.p.a - All rights reserved