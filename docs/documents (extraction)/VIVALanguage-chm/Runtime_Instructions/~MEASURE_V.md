# ~MEASURE Voltage 

# 

# 

# 

________________________

### Syntax

~Measure 
 Voltage 
 TYPE=option RANGE=value 
 ACCV=value EXPECT=value LO=value 
 HI=value N_SAMPLE=value

 FREQ=value DELAY=value 
 GATE=value ON=signal 
 REF=signal LABEL=name SYNC=name

 TRIG=name INTO=variable 
 JUMP_ONERROR=name 
 USING=instrument 
 ; 

Parameters

Unit of measure

Mandatory

Options

Description

TYPE=option

[-]

No

dc

average

rms

pp

peak

min

max

instant

offset

slope 

DC voltage value 

Average voltage value

RMS voltage value 

Peak to peak value

Peak value

Minimum value

Maximum value

Instant value

Offset value

Slope of the edge [V/s]

RANGE=value

[V]

No

(recommended)

Full scale required for the measurement. It is highly recommended to 
 define this value or the value of the parameter expect in order to set 
 correctly the instruments scale.

ACCV=value

[%] o [V]

No

Voltage accuracy required

EXPECT=value

[V]

No

Expected value for the measure. This value accepts also a tolerance 
 that can be expressed either in percentage or in volts. 

Example:

...Expect=5V (10%)

 Expect=5V (500mV) this means 500mV.

The parenthesis are not required. When this value is defined, the result 
 of the measure will be automatically confronted with the expected value, 
 and in case of error (meaning the measured value is greater or less than 
 the expected value) the failing result is printed onto Vivas Report only 
 in the case a label was defined for this measure instruction.

LO=value

[V]

No

Minimum value expected

HI=value

[V]

No

Maximum value expected

N_SAMPLE=value

[-]

No

Number of samples to acquire for the measure

FREQ=value

[Hz]

No

Sampling frequency

DELAY=value

[s]

No

Time between the trigger event and the start of the measure 

GATE=value

[s]

No

Acquisition window (length of time during which the signal is measured)This 
 parameter affects the parameters of Freq and N_sample according to the 
 formula:

Freq=N_sample*Gate

ON=signal

[-]

Yes

Where to measure 

REF=signal

[-]

No

Reference signal (commonly GND)

LABEL=name

[-]

No

Identification for this measure. If the parameters Hi, Lo or Expect 
 are defined, then this is the name that appears in Vivas Report in case 
 of a fail. 

SYNC=name

[-]

No

Identification name of the trigger that will start the measurement.

TRIG=name

[-]

No

This trigger event will start execution of all previous instructions 
 that where synchronized with this trigger.

Example:

~ . SYNC=Pluto;

~.. TRIG=Pluto.;

The first instruction will start execution at the same time as the second 
 instruction, because it is synchronized to its trigger event.

INTO=variable

[-]

No

Name of a declared variable in which you want to store the measured 
 value. If this parameter is not defined, the value is stored in the register 
 AR. 

JUMP_ONERROR=name

[-]

No

This parameter has meaning only if used together with parameters expect, 
 hi or low. It defines where to jump in case the measured value is greater 
 or less than the expected value. For this instruction to work, you must 
 also declare a label to 
 jump to with the instruction LABEL=name (see functional language manual). 
 This parameter works in the same way as a ~branch instruction.

USING=instrument

[-]

no

Name of the instrument you want to use

__________________________

### Note

The mandatory keyword for this instruction 
 is MEASURE V, but it also accepted MEASURE VOLTAGE.

__________________________

### See 
 also 

~Measure

__________________________

### Examples

~Measure Voltage example 

NVL instruction to measure a voltage on 
 a test point of the board; the compiler will automatically choose an instrument 
 of the machine that satisfies the request.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved