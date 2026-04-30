# DECLARE RUNTIME ARRAY 

# 

# 

# 

________________________

### Syntax

DECLARE 
 RUNTIME INTEGER ARRAY array name[dimension]

DECLARE 
 RUNTIME FLOAT ARRAY array name[dimension]

DECLARE 
 RUNTIME STRING ARRAY array name[dimension]

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

__________________________

### Note

Arrays must be defined before the START instruction of the program or 
 in subroutines that declare local variables. 

The first array cell starts from address 0. Hence if an array with dimension 
 3 is defined, it has got four cells.

__________________________

### See 
 also 

DECLARE RUNTIME INDEX instruction.

DECLARE

__________________________

### Examples

DECLARE RUNTIME ARRAY example

Declares a runtime array that will be used later in the program. The 
 static arrays must be considered as a group of runtime variables and for 
 this reason, all properties of run-time variables can be here applied. 
 Arrays are very useful to compare the contents of a memory. 

Arrays can be of three types: INTEGER, FLOAT and STRING.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved