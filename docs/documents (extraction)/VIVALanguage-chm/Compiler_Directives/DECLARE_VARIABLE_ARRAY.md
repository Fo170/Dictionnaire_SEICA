# DECLARE VARIABLE ARRAY 

# 

# 

# 

________________________

### Syntax

DECLARE 
 ARRAY 
 array name[dimension]

 or

DECLARE 
 ARRAY array name[dimension]=initialization values

array name

Alphanumerical string maximum 20 characters which indicates the name 
 of the array. The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

dimension

Array dimensions. Can be expressed as a whole number or as a INTEGER 
 type variable. The maximum dimension is 65500 considered as the total 
 sum of all INTEGER type arrays and of INTEGER runtime variables of the 
 program. 

The maximum dimension is 4100 considered as the total sum of all FLOAT 
 type arrays and of FLOAT runtime variables of the program. 

The maximum dimension is 2050 considered as the total sum of all STRING 
 type arrays and of STRING runtime variables of the program.

The array index can be: 

- a constant

- an integer type variable (defined with the declare variable instruction)

- an index type variable (defined with the DECLARE RUNTIME INTEGER INDEX 
 instruction). It is mandatory to use this type when the index within the 
 ~FOR, ~WHILE loops varies (increase or decrease). Up to 7 different indexes 
 can be defined. When an index is used, it must be preceded by the character 
 %. Refer to the example and to the description of the DECLARE RUNTIME 
 INDEX control.

Initialization values

Whole numbers separated by commas, which initialize the contents of 
 the array. It is possible to initialize the array during its definition.

__________________________

### Note

The arrays must be defined before the START instruction of the program. 

The first array cell starts from address 0. Hence if an array with dimension 
 3 is defined, it has got four cells.

Arrays are very useful to compare contents of a memory.

__________________________

### See 
 also 

__________________________

### Examples

DECLARE VARIABLE ARRAY 
 example

Declares an array of integer numbers that will be used in the program. 

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved