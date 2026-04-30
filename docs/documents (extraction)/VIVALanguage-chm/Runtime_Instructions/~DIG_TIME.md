# ~DIG_TIME / 
 DIG_TIME

# 

# 

# 

________________________

### Syntax

~DIG_TIME 
 SAMPLE_RATE=value 
 EVENT=value SINGLE|CONTINOUS PERIOD 
 POS|NEG 
 HISTERESIS 
 START|PREPARE 
 pinlist; 

pinlist

List of pins on which you want to measure the time interval

START 

Force the time measurement to start immediately

HISTERESIS

allow the use of the high threshold as hysteresis,

the commutation will be ignored between the 2 level

PREPARE

Prepares the frequency measurement; the START is given by the .... instruction

CONTINUOUS

Measure all the events 

SINGLE

measure only one event 

POS

measure positive pulse or period from rising to rising edge

NEG

measure negative pulse or period from falling to falling edge

EVENT=value

specified the Nth event to be measured (default first)

max 31. 

SAMPLE_RATE=value

Specify the sampling frequence for the time meas (in sec)

range 50MHZ to 1khz 

__________________________

### Note

To 
 read the time measured you can use READ_TIME_INT, 
 while for the rate sample applied use READ_SAMPLE_RATE 
 and for the number of counts use READ_COUNT. 
 while READ_EVENT 

retrun 
 the number of event seen by the time measurement. All this instructions 
 return the value in the AR register. The gate value read may be a bit 
 different from the one programmed, because the hardware has some limitations 
 on the clock. 

Use the CHMODE instruction to select which 
 on of the eight pins you want to use as input.

the READ_TIME already 
 take count of the adjusted SAMPLE_RATE

the internal time counter is 16 bit so you can"t select a sample 
 rate higher 65385 times the 

time to be measured

pinlist must be the last argument

__________________________

### See 
 also 

~DIG_CLOCK

~CHMODE

~READ_TIME_INT

~READ_COUNT

~READ_SAMPLE_RATE

~READ_EVENT

__________________________

### Examples

~CHMODE example 

This instruction allows you to measure 
 the various time intervals of a specified digital pin selected as input; 
 you can have one time measurement every 8 channels. 

Preprocessor * Runtime 
 : Dynamic 
 R Static R

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved