# ~FLIn,~LIn,~VFLIn,~VLIn 

# 

# 

# 

________________________

### Syntax

~FLIn [*], pinlist ; 

~LIm [*], pinlist ; use 
 on a 4 line system 

~VFLIn [*], pinlist ; 

~VLIm [*], pinlist ; 

m

 Specified 
 1 of 4 line to operate with the other line will be uneffected

n

 Specified 
 1 of 8 line to operate with the other line will be uneffected

 *

If specifiead as a first parameter it will operate as incremental

if not specified all the line will be first cleared ( open)

 pinlist

list of channel to be connected to the specified analog line

*channel

it will open the specified channel 

__________________________

### Note

~LIm used 
 on a 8 line system it will force do close both line 

 m=1 
 Close line 1 and 5

 m=2 
 Close line 2 and 6

 m=3 
 Close line 3 and 7

 m=4 
 Close line 4 and 8

~FLIn used 
 on a 4 line system will not connect the line 4 to 8 on odd channels and 
 the line 1 to 4 on the even channels

 this 
 allow to use up to 8 line simultaneus even on a 4 line 
 system 

The V series is compatible with the use of the Com technology 

and is mandatory if the scanner is also managed by external enviroment 
 (Like Labview 
 ,Lab Windows) 

__________________________

### See 
 also 

~BLIn

~CLEAR BLINE;

~CLEAR SCANNER;

__________________________

### Examples

Links 

manage the 8 linee of the SEICA scanner

Preprocessor Runtime 
 : R Dynamic 
 Static 
 R

Modules: SCA64,SCAEVO,S32

&#169;2008 
 Seica S.p.a - All rights reserved