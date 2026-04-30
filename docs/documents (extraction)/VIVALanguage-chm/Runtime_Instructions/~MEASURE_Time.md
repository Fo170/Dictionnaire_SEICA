# ~MEASURE Time 

# 

# 

# 

________________________

### Syntax

The syntax varies if you want to measure 
 time on one signal or between events of two different signals.

### 

Time 
 measurement on one signal

~Measure 
 Time 
 TYPE=option RANGE=value 
 ACCF=value EXPECT=value LO=value 
 HI=value N_SAMPLE=value

 TRIG_LEVEL=value TRIG_SLOPE=option 
 DELAY=value GATE=value ON=signal 
 REF=signal 

LABEL=name 
 SYNC=name TRIG=name 
 INTO=variable JUMP_ONERROR=name USING=instrument 
 ; 

Parameters

Unit of measure

Mandatory

Options

Description

TYPE=option

[-]

No

period

interval

fall

rise

duty 

Period of the waveform.

Time measure between a start and stop event.

Time required to go from 90% to 10% of amplitude in first negative edge 
 of signal.

Time required to go from 10% to 90% of amplitude in first positive edge 
 of signal.

Time that the signal is ON in a total signal period.

RANGE=value

[V]

No

(recommended)

Full scale required for the measurement. It is highly recommended to 
 define this value or the value of the parameter expect in order to set 
 correctly the instruments scale.

ACCF=value

[%] o [Hz]

No

Frequency accuracy required

EXPECT=value

[s]

No

Expected value for the measure. This value accepts also a tolerance 
 that can be expressed either in percentage or in seconds. 

Example:

..Expect=1s (10%)

..Expect=1s (50ms) this means 50ms.

The parenthesis are not required.When this value is defined, the result 
 of the measure will be automatically confronted with the expected value, 
 and in case of error (meaning the measured value is greater or less than 
 the expected value) the failing result is printed onto Vivas Report only 
 in the case a label was defined for this measure instruction.

LO=value

[s]

No

Minimum value expected

HI=value

[s]

No

Maximum value expected

N_SAMPLE=value

[-]

No

Number of samples to acquire for the measure

TRIG_LEVEL=value

[V]

No

Trigger level

TRIG_SLOPE=option

[-]

No

Pos

Neg

Active edge of the signal is the rising edge

Active edge of the signal is the falling edge

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
 that where synchronized with this trigger. Example:

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

Time 
 measurement between two different signals

~Measure 
 Time TYPE=option RANGE_START=value 
 RANGE_STOP=value ACCF=value EXPECT=value 
 LO=value

HI=value N_SAMPLE=value TRIG_LEVEL_START=value 
 TRIG_LEVEL_STOP=value

TRIG_SLOPE_START=option 
 TRIG_SLOPE_STOP=option DELAY=value GATE=value

START_ON=signal 
 STOP_ON=signal REF=signal 
 LABEL=name SYNC=name 
 TRIG=name

INTO=variable 
 JUMP_ONERROR=name USING=instrument ;

Parameters

Unit of measure

Mandatory

Options

Description

TYPE=option

[-]

No

period

interval

fall

rise

duty 

Period of the waveform.

Time measure between a start and stop event.

Time required to go from 90% to 10% of amplitude in first negative edge 
 of signal.

Time required to go from 10% to 90% of amplitude in first positive edge 
 of signal.

Time that the signal is ON in a total signal period.

RANGE_START=value

[V]

No

(recommended)

Full scale of the signal that generates the start event. It is highly 
 recommended to define this value or the value of the parameter expect 
 in order to set correctly the instruments scale.

RANGE_STOP=value

[V]

No

(recommended)

Full scale of the signal that generates the stop event. It is highly 
 recommended to define this value or the value of the parameter expect 
 in order to set correctly the instruments scale.

ACCF=value

[%] o [Hz]

No

Frequency accuracy required

EXPECT=value

[s]

No

Expected value for the measure. This value accepts also a tolerance 
 that can be expressed either in percentage or in seconds. 

Example:

..Expect=1s (10%)

..Expect=1s (50ms) this means 50ms.

The parenthesis are not required.When this value is defined, the result 
 of the measure will be automatically confronted with the expected value, 
 and in case of error (meaning the measured value is greater or less than 
 the expected value) the failing result is printed onto Vivas Report only 
 in the case a label was defined for this measure instruction.

LO=value

[s]

No

Minimum value expected

HI=value

[s]

No

Maximum value expected

N_SAMPLE=value

[-]

No

Number of samples to acquire for the measure

TRIG_LEVEL_START=value

[V]

No

Trigger level for the start event

TRIG_LEVEL_STOP=value

[V]

No

Trigger level for the stop event

TRIG_SLOPE_START=option

[-]

No

Pos

Neg

Active edge of the signal is the rising edge

Active edge of the signal is the falling edge

TRIG_SLOPE_STOP=option

[-]

No

Pos

Neg

Active edge of the signal is the rising edge

Active edge of the signal is the falling edge

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

START_ON=signal

[-]

Yes

Signal that starts the measure

STOP_ON=signal

[-]

Yes

Signal that stops the measure

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
 that where synchronized with this trigger. Example:

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
 is MEASURE T, but it is also accepted MEASURE TIME.

__________________________

### See 
 also 

~Measure

__________________________

### Examples

~Measure Time example

NVL instruction to measure time on a test 
 point or between two test points of the board; the compiler will automatically 
 choose an instrument of the machine that satisfies the request.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

ACLAM,

external instruments

&#169;2008 
 Seica S.p.a - All rights reserved