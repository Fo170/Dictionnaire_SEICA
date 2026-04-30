# <Channels_list> 

# 

# 

# 

________________________

### Syntax

number

any number from 1/2048 (logical address) 

channel

any name declared as channel

signal

any name declared as signal

 group of channel
any group of channels 

 variable 
any floating point variable (limited to the first 100 
 variable declared)

Separator

 -(dash), (semicolon) or white space 

/ (slash)
 from channel to channel

__________________________

### Note

__________________________

### See 
 also 

Links

__________________________

### Examples

DECLARE CHANNEL RESET=5; 

DECLARE CHANNEL CLK=9;

DECLARE SIGNAL DATA=23;

DECLARE SIGNAL DATA2=25;

DECLARE GROUP ADD=15,17,DATA,DATA2 ;

START EX1 STATIC;

~CHOUT DIGITAL 1,3 10/13 RESET/CLK , DATA, ADD ;

! SET IN DIGITAL MODE THE CHANNELS 1,3,10,11,12,13,5,6,7,8,9,23,15,17,23,25 

ENDTEST; 

Specify the channels involved 
 in the command

Preprocessor * Runtime : Dynamic * 
 Static 
 *

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved