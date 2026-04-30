# ~TIMER 

# 

# 

# 

__________________________

### Syntax

~TIMER n [action] [VAL=expression]; 

TIMER n [action] [VAL=expression]; 

TIMER N=expression 
 [action] [VAL=expression]; 

n

number of timer to be selected; the range is 1 to 31

N=expression

expression to evaluate the number of timer; the range is 1 to 31

action

CLEAR stops 
 the selected timer and sets it to current time 

ARM enables generation of the 
 ONTIMER event when the timer expires 

STOP disables the ONTIMER event 
 (the timer continues to run) 

VAL=[expression]

sets the timer to expire after the specified time (in seconds) and generates 
 the event ONTIMER if ARMed

__________________________

### Note

### If the ~WINDOW is not 
 specified, the standard terminal will be used.

### 

### See 
 also 

~ON

~READ_TIMER

__________________________

### Examples

~TIMER example 

Set a runtime TIMER operation (available 
 from VIVA version 2.0.5).

Viva has 32 timers that count the elapsed 
 time in microseconds from the start of the program; except timer 0, all 
 the timers can be cleared to start counting from the current time

or setup to count from a particular time 
 (setup to a negative value). When a timer reaches the 0 an ONTIMER event 
 will be generated.

Timer 0 counts the time from the power 
 on of the PC and can't be modified.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved