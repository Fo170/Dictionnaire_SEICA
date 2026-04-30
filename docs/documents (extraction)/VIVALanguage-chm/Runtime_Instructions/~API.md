# ~API 

# 

# 

# 

________________________

### Syntax

~API module 
 name,function name, parameters

module name

Name of the DLL module which contains the API 

function name

Name of the API function

parameters

Parameters of the API function

__________________________

### Note

The return value of the API function is stored in the INTEGER type system 
 variable API.

A cast 
 must be executed on the parameters using the following key words:

CHAR, INT, LONG, FLOAT, DOUBLE, UNSIGNED, POINTER

If the cast 
 is not executed, the parameters are considered to be long variables.

__________________________

### See 
 also 

~SYS

__________________________

### Examples

~API example 

Allows the API function (Application Program 
 Interface) present in a DLL (Dynamic Link Library) to be called. The return 
 parameter of the 
 function is stored in the API register.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved