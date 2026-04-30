# ~READ_VBN

# 

# 

# 

________________________

### Syntax

READ_VBN 
 variable [BSDL] 
 test_type;

 ~READ_VBN 
 variable [BSDL] 
 test_type;

test_type=BYPASS

The components will all be 
 set in bypass mode and a fixed string will be sent through the boundary 
 scan chain

test_type=IDCODE 

Read the IDCODE of all the 
 active components

test_type=USERCODE

Read the USERCODE of all the 
 active components

BSDL

read the original string from 
 the BSDL file of the test_type specified

to be used for string checking

variable

String variable that contains 
 the result of the test

__________________________

### Note

__________________________

### See 
 also 

~SET VBNPOD

~TEST_VBN

DECLARE BSCAN

__________________________

### Examples

### 

Return the result of a particular test 
 over the boundary scan chain.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: ACLAM,MIS32,F50

&#169;2008 
 Seica S.p.a - All rights reserved