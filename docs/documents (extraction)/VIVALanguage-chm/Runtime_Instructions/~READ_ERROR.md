# ~READ_ERROR 

# 

# 

# 

__________________________

### Syntax

 READ_ERROR 
 variable; 

~READ ERROR 
 variable; 

~READ_ERROR 
 variable; 

~READ_ERROR 
 N=0 
 variable; 

~READ_ERROR 
 N=n 
 variable; 

n parameter missig

or n=0 

Return the number of failing channel.

n>0

return the number of the nth failing channel

return -1 if no more channel failing 

n<0

return -2

variable

a variable where the value of the error as to be settled

the value is an integer

__________________________

### See also 

~READ_CH_NAME

__________________________

### Examples

~READ_ERROR example 

Reads the digital channel number failing 
 after a digital pattern 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: F40,MIS32,T964

Version: 2.2.0

&#169;2008 
 Seica S.p.a - All rights reserved