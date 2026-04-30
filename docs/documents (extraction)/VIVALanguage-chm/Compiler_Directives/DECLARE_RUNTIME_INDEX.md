# DECLARE RUNTIME INDEX 

# 

# 

# 

________________________

### Syntax

DECLARE 
 RUNTIME INDEX index name

index name

Alphanumerical string maximum 20 characters, which indicates the name 
 of the index. The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

__________________________

### Note

Up to seven different indexes can be defined in the program. 

__________________________

### See 
 also 

DECLARE RUNTIME ARRAY

__________________________

### Examples

DECLARE RUNTIME INDEX example

Declares an INDEX type variable to use as index for runtime type arrays. 
 It is necessary to define this variable if the array index changes within 
 the ~FOR or ~WHILE loops.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved