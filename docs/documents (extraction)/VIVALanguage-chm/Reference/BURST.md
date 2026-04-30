# BURST 

# 

# 

________________________

### Syntax

LOAD;

 Start 
 collecting pattern for runtime dynamic

LOAD_CONTINUE ;

 Continue 
 collecting pattern;

BURST ;

 LOAD 
 the pattern into the channel memory then 
 RUN it ,and wait for result

BURST LOAD 
 RUN;

 Load 
 and run only

BURST Run 
 ;

 run 
 only of the current burst into the channel memory ( must be loaded first 
 using BURST LOAD;)

BURST RESULT 
 ;

 wait 
 and collect the result

__________________________

### Note

This group of command allow compile the dynamic memory of the channel 
 runtime

and to split the operation of loading / running / waiting for result

must be encountered runt in the following order.

LOAD;

ih chn;

/ ;

BURST LOAD;

BURST RUN;

BURST RESULT; 

or simple BURST; if you do not need to get the control between load 
 and result.

__________________________

### See 
 also 

__________________________

### Examples

~BURST example 

LOAD AND RUN THE CURRENT BURST IN MEMORY

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved