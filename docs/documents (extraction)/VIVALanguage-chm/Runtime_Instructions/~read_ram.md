# ~READ_RAM 

# 

# 

# 

________________________

### Syntax

~READ_RAM 
 type, starting_pattern,stop_pattern, integer runtime 
 array[n], group_of channel ; 

type

DATA

RELEVANT

ENABLE

LEARN/RESULT

Specified the type of data to be retrieved from the memory

get a 1 if the channel are IH MH OH OB otherwise 0

get a 1 if the channel are IH IL OH OL OB OV otherwise 0

get a 1 if the channel are IH MH IL IH otherwise 0

get a 1 if the channel are actually at 1 (see note)

starting pattern 

any number between 1 to 256K 

is the number of pattern for starting read the channel memory 

stop pattern 

any number between 1 to 256K 

is the number of pattern for stop read the channel memory 

integer runtime variable array

 is the array that will hold the data read from the memory

 it must be declared big enough to hold all the pattern 

 dim>=(stop_pattern-starting_pattern) <32k

N is the position of the array from where the data will be recorded

(usually 0)

group_of_channel
group of channel to be read (max 32) 

__________________________

### Note

The LEARN DATA depends also from the record_mode.

With RECORD_ERROR get 
 1 if the channel is IH OH and not failing and if is OL IL and are failing 
 otherwise is 0

__________________________

### See 
 also 

RG ,~RG

__________________________

### Examples

~READ_RAM example 

Reads the memory status of a group of channels 
 for the specified group of patterns.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: T964

&#169;2008 
 Seica S.p.a - All rights reserved