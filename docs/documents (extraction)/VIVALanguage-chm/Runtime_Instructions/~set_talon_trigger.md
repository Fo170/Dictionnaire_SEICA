# ~SET TALON_TRIGGER 

# 

# 

________________________

### Syntax

~SET 
 TALON_TRIGGER [1|2|3|4] 
 ON|OFF AUXn [LOW|HIGH|RISING|FALLING] 
 INVERT [START|STEP|ALWAYS] ;

Will connect the trigger to jump to the specified 
 AUX channel and set trigger mode

~SET 
 SYSTEM_CLUTCH ON|OFF 
 AUXn [LOW|HIGH|RISING|FALLING] 
 INVERT [START|STEP|ALWAYS] ;

Will connect the system clutch to the specified 
 AUX channel and set clutch mode

~SET 
 CLUTCH1 ON|OFF 
 AUXn [LOW|HIGH|RISING|FALLING] 
 INVERT [START|STEP|ALWAYS] ;

Will connect the system clutch to the 
 specified AUX channel and set clutch mode (for Ecass)

~SET 
 PATTERN_CLUTCH [1|2] ON|OFF 
 AUXn [LOW|HIGH|RISING|FALLING] 
 INVERT [START|STEP|ALWAYS] ;

Will connect the pattern clutch to the specified 
 AUX channel and set clutch mode

~SET 
 CLUTCH2 ON|OFF AUXn 
 [LOW|HIGH|RISING|FALLING] 
 INVERT [START|STEP|ALWAYS] ;

Will connect the pattern clutch to the specified 
 AUX channel and set clutch mode (for Ecass)

~SET 
 PATTERN_RESUME [1|2] 
 AUXn|CHT1|ECLTRGn|TTLTRGn [LOW|HIGH|RISING|FALLING] 
 INVERT ;

Will connect the pattern clutch resume to 
 the specified AUX channel and set clutch resume mode

~SET 
 PHASE_RESUME [1|2|3|4] 
 AUXn [LOW|HIGH|RISING|FALLING] 
 INVERT ;

Will connect the phase trigger resume 
 to the specified AUX channel and set trigger mode

~SET 
 T0CLOCK AUXn ;

Will connect toclock to be output on the 
 specified auxiliary pin

1,2,3,4
Number of trigger 
 to be connected (default 1)

AUXn
Auxiliary 
 channel to get the trigger, from n=1 to 12 per module

ON
Enable the event 
 to be connected

OFF
Disable the 
 event 

LOW
Trigger 
 on low level

HIGH
Trigger 
 on high level

RISING
Trigger 
 on rising edge 

FALLING
Trigger 
 on falling edge

INVERT
Trigger invert

START
Reset trigger 
 only at START of pattern

STEP
Reset trigger 
 at end of STEP

ALWAYS
Reset trigger 
 ALWAYS (trigger Jump true)

n
Number of channel 
 (12 channel per module.)

__________________________

### Note

 If the channel selected is out of primary module it will 
 be routed using the vxi ttltrigger line.

 For 
 trigger use ttltrigger 2 to 5

 For system clutch ttltrigger 4

 For pattern clutch ttltrigger 5:6

 For pattern resume ttltrigger 6:7

 For phase resume ttltrigger 4:7

 Once programmed, the event my be switched on or off without 
 specifying again the channel and the mode.

 In case of conflict the driver will search for a TTLTRIGGER 
 Line free or it will give an error message.

 If the channel belongs to the first module it will be connected 
 directly and no ttl trigger will be used.

__________________________

### See 
 also 

__________________________

### Examples

~SET TALON_TRIGGER example 

Determines the source for jump trigger

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved