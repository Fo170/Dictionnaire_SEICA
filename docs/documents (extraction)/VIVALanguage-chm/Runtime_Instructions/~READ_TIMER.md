# ~READ_TIMERn 

# 

# 

# 

__________________________

### Syntax

~READ_TIMERn 
 variable; 

~READ TIMERn 
 variable; 

~READ_TIMERn 
 [STATUS] 
 variable; 

0

specified the PC startup timer

n

number specified the timer to be read

STATUS

allow to read the status of the timer 

0=timer running on stop mode 

1=timer running in ARM mode

2=timer expired (only if set in ARM mode

variable

a variable where the value of the timer as to be read

the value is a float expressed in microsecs

__________________________

### See also 

~TIMER

~READ_TIME

~READ_DATE

~READ_CLOCK

__________________________

### Examples

~READ_TIMER example 

Reads the value of the specified timer 
 in microseconds. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved