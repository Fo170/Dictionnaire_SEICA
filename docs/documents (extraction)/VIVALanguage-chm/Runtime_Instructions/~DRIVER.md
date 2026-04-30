# ~DRIVER 

# 

# 

# 

________________________

### Syntax

The compiler accepts both the following syntax: 

~Driver 
 method name parameters ; 

~Driver 
 name method parameters ;

name

Name of the driver you want to use; the specified driver must be among 
 the ones installed on your machine, or else the compiler will give you 
 an error. 

method

Keyword that indicates the type of operation you want to achieve with 
 the instruction; the method specified must belong to the functions of 
 the chosen driver or else the compiler will give you an error. 

parameters

List of parameters accepted by the function of the selected driver.

__________________________

### Note

This instruction can also 
 be used with the standard methods, for example you can either write:

~DRIVER SET DRA ... ;

or

~SET DRA.... ;

__________________________

### See 
 also 

Viva Drivers

Driver installation

__________________________

### Examples

Links 

This instruction belongs to 
 the group of instructions that allows you to manage external instruments 
 and all external functions of VIVA. The ~DRIVER instruction allows you 
 to call methods that are different from the standard ones. Click here 
 to learn more about VIVA's drivers.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: ?

&#169;2008 
 Seica S.p.a - All rights reserved