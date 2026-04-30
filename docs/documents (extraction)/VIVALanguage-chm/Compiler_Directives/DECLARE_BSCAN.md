# DECLARE BSCAN 

# 

# 

# 

________________________

### Syntax

DECLARE 
 BSCAN NETLIST=tapfiledescription Componentname, 
 [Componentname2] ; 

Tapfiledescription

Text file with extension *.BSS with a list of BSDL files and components 
 associated in the correct order of the chain (first to last) (.BSS must 
 not be specified)

componentname

List of component names to be used as virtual nails; the name must match 
 the name of the BSS file. The components not listed will be put in bypass 
 mode.

__________________________

### Note

__________________________

### See 
 also 

~SET VBNPOD 

~READ_VBN

~TEST_VBN

__________________________

### Examples

Declare a boundary scan chain 
 to be used as virtual channels.

Preprocessor R Runtime : Dynamic Static 
 R

Modules: ACLAM,MIS32

&#169;2008 
 Seica S.p.a - All rights reserved