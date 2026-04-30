# ~VI 

# 

# 

# 

________________________

### Syntax

~VI 
 vi_name NAME="parname" 
 IN|OUT 
 VALUE variable 
 ;

~VI 
 vi_name PAR="parname" 
 IN|OUT 
 ARG variable 
 ;

~VI 
 vi_name NAME="parname" 
 IN|OUT 
 VALUE LENGTH 
 = constant variable ;

 ~VI vi_name NAME="parname" 
 IN|OUT 
 VALUE INT 
 variable1 DOUBLE variable2 STRING variable3 ;

 ~VI_PANEL vi_name 
 NAME="parname" 
 IN|OUT 
 VALUE variable;

vi_name

Name of the VI driver

 NAME|PAR

string containing the name of parameter can be a 
 string variable

 IN

Parameter of input 

OUT

 Parameter 
 of output (the driver return a value and must the passed by reference 
 (POINTER *)

 ARG|VALUE

identify the value of the parameter

 LENGTH|ARRAY_LEN

identify the len of the array 

 COMREF

casting

 if the 
 variable passed is a different type must the 'casted'

cast available 

STRING,INT,LONG,FLOAT,DOUBLE,

*|POINTER for passing the reference.

value

name of the variable or constant to be pass the VI

__________________________

### Note

the parameter may be made 
 off multiple value (container) in the case the order of the parameter 
 as to the same.

if an array is to be passed the length must be specified 

if the parameter is type OUT the argument must be a variable 
 passed by reference

__________________________

### Examples

~VI EXAMPLE 

Call a procedure or a function written 
 in LABVIEW language.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved