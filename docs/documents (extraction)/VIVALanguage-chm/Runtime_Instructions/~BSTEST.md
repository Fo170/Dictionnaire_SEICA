# ~TEST_VBN ~MEAS_VBN 

# 

# 

# 

________________________

### Syntax

~TEST_VBN 
 test_type; ! 

~MEAS_VBN 
 test_type;

 test_type

BYPASS

using all component in bypass it will sent a fixed string trough 

the chain

IDCODE 

it will scan for reading the IDCODE of all active component 

USERCODE 

it will scan for reading the IDCODE of all active component

__________________________

### Note

__________________________

### See 
 also 

~SET VBNPOD

~READ_VBN

__________________________

### Examples

Execute a particular test over the boundary 
 scan chain.

and check the result against the code found in the BSDL file,in case 
 of fail will set

the partial error flag

~TEST_VBN in 
 case of fail will also set an error and force the cluster to fail.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: ACLAM,MIS32

&#169;2008 
 Seica S.p.a - All rights reserved