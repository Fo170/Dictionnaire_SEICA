# DECLARE RUNTIME 

# 

# 

# 

________________________

### Syntax

DECLARE 
 RUNTIME datatype = 
 variablename1, variable name2,...;

DECLARE 
 RUNTIME datatype = 
 variablename1=initializer, variablename2=initializer,...;

 DECLARE RUNTIME 
 datatype ARRAY 
 = variablename1[dimension];

 DECLARE RUNTIME 
 datatype ARRAY 
 = variablename1[dimension]=initializer,initializer...;

datatype

Indicates the type of variable declared, which can be:

- INTEGER | BINARY signed 
 32 bit integer

- FLOAT double 
 precision floating point

- STRING 256 
 char null terminated string of char 

- LONG signed 
 64 bit integer

- SHORT signed 
 16 bit integer

- CHAR | BUFFER signed 
 8 bit char 

- SINGLE = Single precision floating point

ARRAY

Specifies that the variable is an array (mandatory) 

dimension

Specifies the dimension of the array; the keyword ARRAY 
 must be also specified

initializer

The variable can be initialized with any valid expression 

variablename1,variablename2,...

Alphanumerical string maximum 20 characters long which indicates the 
 name of the variable.

The underscore _ 
 is accepted in the variable name while other special characters such as 
 @ # $ % ~ etc... are not 
 accepted.

______________________

### Note

You may have up to 2000 variable names.

The total dimension for each datatype are:

- INTEGER 100000 
 (1M) 

- FLOAT 2000000 
 (2M)

- STRING 8192

- LONG 16384

- SHORT 65000

- CHAR 890000 

- SINGLE 16000

Runtime variables must be defined before the START instruction of the 
 program or in subroutines that declare local variables. 

The first array cell starts from address 0. Hence if an array with dimension 
 3 is defined, it means that it has 4 cells.

The variable name can also be a register REG1-100 which will be used 
 in the ~CURSOR instruction. When a register of this type is defined, it 
 is only necessary to define the one with the highest index, the other 
 ones are automatically defined. Refer to the EXAMPLE 2. 

__________________________

### See 
 also 

DECLARE VARIABLE

DECLARE

__________________________

### Examples

DECLARE RUNTIME example

DECLARE 
 RUNTIME ARRAY example

Declares a runtime variable used in the program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved