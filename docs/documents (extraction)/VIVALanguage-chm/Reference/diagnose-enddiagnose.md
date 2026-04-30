# DIAGNOSE-NODE-ENDDIAGNOSE 

# 

# 

__________________________

### Syntax

DIAGNOSE signalname 
 ;

....

....

NODE signalname;

....

....

NODE signalname;

....

....

ENDDIAGNOSE ;

DIAGNOSE signalname

All the ATEST failures will refer to the signalname 
 indicated; the signalname should 
 be declared in the .DGN file (diagnostic structure file).

This section will always be executed.

NODE signalname

All the ATEST failures will refer to the signalname 
 indicated; the signalname should 
 be declared in the .DGN file (diagnostic structure file).

Only this section will be executed. 

ENDDIAGNOSE

Close the diagnostic section.

__________________________

### Note 

During normal test only the DIAGNOSE section will be executed; if one 
 test generates a fail (one of its TEST or ATEST instructions is outside 
 the specified limit)

the automatic backtracing diagnose will the triggered; the diagnostic 
 will look to the diagnostic structure (.DGN) to identify the nodes that 
 depend from the failing one.

The operator will be instructed to probe the nodes related to the failing 
 node; then the test is executed again and all tests of nodes depending 
 on the failing node are tested one at a time. This operation is repeated 
 until the software identifies the failing part or function.

____________________________

### See 
 also 

__________________________

### Examples

Diagnose example 

This instruction opens an automatic 
 analog diagnostic section.

Preprocessor * 
 Runtime R: Dynamic * 
 Static 
 R

Modules: all

&#169;2008 
 Seica S.p.a - All rights reserved