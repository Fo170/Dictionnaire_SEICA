# ~VBS 

# 

# 

# 

________________________

### Syntax

~VBS 
 file_name function/procedure 
 variable_list 
 ;

file_name

Name of the VBScript file where the procedure or function is implemented; 
 the name must be given with the complete path. 

function/procedure

Name of the VBScript procedure or function.

variable_list

The variables accepted are:

- STRING

- INT

- DOUBLE

If the value of the variable calculated within the VBScript code must 
 be visible from VL language, then the type of variable must be followed 
 by an asterisk "*: Double 
 * name of variable 

The instruction accepts up to 20 variables. 

__________________________

### Note

VBScript is a non compiled language unlike 
 the VL language, therefore the code can be modified during run-time without 
 having to re-compile the pattern; also syntax errors are acknowledged 
 only in runtime.

__________________________

### Examples

~VBS example 

Call a procedure or a function written 
 in VBScript language.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved