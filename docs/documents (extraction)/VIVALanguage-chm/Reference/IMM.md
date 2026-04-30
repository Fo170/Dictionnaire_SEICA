## 1. 1 
Internal Multi Meter -
IMM

The instrument IMM, located
in the ACL module allows to execute
analog measurements during the test. It is basically made up by two instruments: a voltmeter and a current meter. This
internal instrument has the following features:

- 
Real time measurements, in memory.

- 
Post processing measurements, from information stored
in buffers.

- 
One shot measurements.

- 
Types of measurements: peak values, peak to peak,
maximum, minimum, average RMS, &#916;V/&#916;T, module and phase.

- 
Current meter with virtual ground input on operational
amplifier. 

- 
64Kword memory width for measurements.

- 
Sample frequency up to 10MSp/sec.

- 
Input trigger, Output trigger and Post trigger.

- 
Several filters on vector of acquired values 

### 1.1.1 METHOD CLEAR

The method CLEAR is used in functional programs to deactivate the
instrument IMM disconnecting it from
measurement lines.

It sends to the instrument a reset command which sets its
parameters to the default values. (see Tab. 5&#8209;1, in the Appendix A).

Syntax

#### VIVA LANGUAGE

~CLEAR IMM;

### 1.1.2 METHOD SET

The method SET is used in
functional programs to program the two analog meters MEAS_V and MEAS_I. The
instrument MEAS_V is a voltmeter which allows to measure the voltage present
between the two poles INP_VPOS and INP_VNEG. The instrument MEAS_I is a current
meter which allows to measure the input current on pole INP_I, physically
connected to the internal line L1, which performs a virtual ground level and
detects I on Rs. The value of the virtual level is determined by the connection
defined for REF_I, which can be:

L3 The point REF_I is connected to the internal measurement line L3.

L7 The point REF_I is connected to the internal measurement line L7.

GND The point REF_I is connected to the ACL module ground.

The meter schedules a sense point, allowing to
compensate the presence of resistive values in the connections between the
point of measurement and the meter input. The sense point is determined by the
connection defined for point SENSE_I, which can be:

L1_I The point SENSE_I is connected
internally to the point INP_I_V2.

L5 The point SENSE_I is connected to measurement line L5.

Fig. 4&#8209;3 - ACL module: Internal instrument MEAS_I

The pole
INP_V, connected to line L1 with a 200K&#937; resistance, allows to use the
instrument MEAS_I as a second voltmeter.

The option FCMES (Floating Current Measurement) is scheduled for current measurements. It allows
to obtain a current meter with the two measurement points insulated from ground
(100VMAX). Without the FCMES option, one of the two
poles of the meter is connected to ground, as shown in Fig. 4&#8209;4.
The presence of the FCMES option allows to allows to enhance the
instrument range up to 5 Ampere, with the measurement points on the console of
the FCMES option.

Fig. 4&#8209;4 - ACL module: Internal instrument
MEAS_I and MEAS_I with FCMES option

The FCMES option also schedules the option PODAMP. The
option PODAMP, which can be connected to the FCMES option through a RJ45 phone
connector, allows to enhance the instrument range up to 20A, with remote shunt
resistances.

The Fig. 4&#8209;5 refers the connections of FCMES and PODAMP options to
instrument MEAS_I. The figure highlights
the maximum current values which can be measured with the FCMES option
according to the connection points to the probes. Specifically:

IMAX= 500mA with measurement points connected to
the system analog lines.

IMAX= 5A with measurement points connected to the console of the ac ACL
module.

IMAX= 20A with measurement points connected to option
PODAMP.

In Fig. 4&#8209;5 it is possible to notice that, using the FCMES
option, the internal line L1 is engaged; hence it is no longer available for
other activities.

Fig. 4&#8209;5 - ACL module: FCMES and PODAMP
connections to internal instrument MEAS_I 

Syntax

#### VIVA LANGUAGE

~SET
IMM [MEAS_V=[BUFF|AUTO]|
DC|AC|DV_DT|RMS|FFT]

[MEAS_I=[BUFF|AUTO]|
DC|AC|DI_DT|RMS|FFT]

[RANGE_V=NONE|200MVG|500MVG|1VG|2VG|5VG|10VG|2V|5V|10V|20V|50V|100V]

[RANGE_I=NONE|

[500MADC|250MADC|100MADC|50MADC|25MADC|10MADC|5MADC|2P5MADC|1MADC|

500UADC|250UADC|100UADC|50UADC|25UADC|10UADC|5UADC|2P5UADC|1UADC
20V|

500MAAC|250MAAC|100MAAC|50MAAC|25MAAC|10MAAC|5MAAC|2P5MAAC|1MAAC|

500UAAC|250UAAC|100UAAC|50UAAC|25UAAC|10UAAC]|

[5A|2P5A|1A|500MA|250MA|100MA|50MA|25MA10MA|5MA|2P5MA|1MA500UA|250UA|100UA|50UA|25UA|10UA|5UA|2P5UA|1UA|60MV]|[25A|10A]

[RANGE_V2=

100VDC|50VDC|20VDC|10VDC|5VDC|1VDC|500MVDC|200MVDC|10VAC|5VAC|2VAC]

[MODE=NORMAL|DEBUG|PROCESS] [INP_MEM=MEMORY|CHANNEL|ADC|INPUT]

[N_SAMPLE=value] [FREQ=value]
[ADDR=value]

[START=IMMEDIATE|CNT_START|CNT_STOP|CNT_COMP|HW1|HW2|SW1|DISABLE]

[TRIG_OUT=NONE|SW1|SW2] [DELAY_TRIG=value] [EVOLUTION=value]

[INP_VPOS=OPEN|L1|L2|L4|L6|GND|MONITOR|IDRA|IDRB|IDRC|TEMP]

[INP_VNEG=OPEN|L1|L2|L3|L4|L5|L7|GND]

[INP_I_V2=NONE|L1_I|L1_V| L2_AMP|L3_AMP|
L4_AMP|L6_AMP|L8_AMP|POD|CON]

[SENSE_I=INTERNAL|L5]

[REF_I=GND|L3|L7|| L2_AMP|L3_AMP| L4_AMP|L5_AMP|L7_AMP]

[FILTER=

NONE|PB_BW|PA_BW|PB_C1|PA_C2|MM|PB_FH|PA_FH|PBD_FH|BR_FH|PB_FB|PA_FB|

PBD_FB|BR_FB]

[ORDER=value] [FT1=value]
[FT2=value] [DOMAIN=IMM|PC|ALL];

Detail of
parameters

MEAS_V=option [[BUFF|AUTO]|
DC|AC|DV_DT|RMS|FFT|ONE_SHOT|NONE,

default: [BUFF|AUTO]

Indicates the types of
measurements to be executed with the voltmeter (MEAS_V). The parameter may have
one, more then one or even none of the values listed below:

[BUFF|AUTO] the measurement is executed and the data are stored in a 64Kbyte buffer
into the ACL module. (internal addresses: 0x960000-0x96FFFF).

DC When executing the measurement, the maximum, minimum and average values
of all DC measurements are calculated.

AC When executing the measurement the peak, peak to peak and offset values
of all AC measurements are calculated.

DV_DT When executing the measurement it is also calculated the value &#916;V/&#916;T, which represents the slope of the linear regression curve on the
acquired samples.

RMS When executing the measurement, also the Vrms for AC measurements is determined.

FFT When executing the measurement, also the module and phase values are
determined for the harmonic components of the acquired signal. These are
calculated through an FFT analysis on the vector of the acquired samples. The
result is inserted in two vectors which contain the module and the phase of the
harmonic components.

ONE_SHOT A one shot measurement is executed; i.e. a single sample is generated as
is parameter N_SAMPLE is=1.

NONE No voltage measurement is executed; the instruction ~SET
IMM is executed to program the instruments
and generate a trigger signal.

MEAS_I=option [[BUFF|AUTO]|
DC|AC|DI_DT|RMS|FFT|ONE_SHOT|NONE,

default: [BUFF|AUTO]

Indicates the kind of
measurements to be executed with the current meter (MEAS_I). The parameter may
have one, more than one or none of the possible values listed:

BUFF|AUTO The measurements are executed and data are stored in a 64Kbyte buffer
into the ACL module. (internal addresses: 0x970000-0x97FFFF).

DC When executing the measurements, also the minimum, maximum and the
average value for DC. Measurements is calculated

AC When executing the measurements are also calculated the peak, the peak
to peak and offset values for AC measurements.

DI_DT When executing the measurement, it is also calculated the value &#916;I/&#916;T, which represents the slope of the linear regression curve on the
acquired samples.

RMS When executing the measurement, is determined also the Irms value for AC measurements.

FFT When executing the measurement, also the module and phase values are
determined for the harmonic components of the acquired signal. These are
calculated through an FFT analysis on the vector of the acquired samples. The
result is inserted in two vectors which contain the module and the phase of the
harmonic components.

ONE_SHOT A one shot measurement is executed, i.e. a single sample is generated as
if parameter N_SAMPLE were=1.

NONE No current measurement is executed, the instruction ~SET
IMM is executed to program the instruments
and generate a trigger signal.

RANGE_V=option|value

[[NONE]|200MVG|500MVG|1VG|2VG|5VG|10VG|2V|5V|10V|20V|50V|
100V, default:
10VG]

Indicates the range of the
signal to be measured with instrument MEAS_V arranged to measure voltage
values, i.e. a scale range value of the instrument which includes the expected
value.
The more the scale range value approximates the measured value, the more
accurate is the resolution of the instrument. This parameter may have 13
possible values:

NONE|0 The instrument MEAS_V is not connected: no measurement is executed.

200MVG | 1 The instrument is set to measure 0,2V with input impedance > 1G&#937;.

500MVG | 2 The instrument is set to measure 0,5V with input impedance > 1G&#937;.

1VG | 3 The instrument is set to measure 1V with input impedance > 1G&#937;.

2VG | 4 The instrument is set to measure 2V with input impedance > 1G&#937;.

5VG | 5 The instrument is set to measure 5V with input impedance > 1G&#937;.

10VG | 6 The instrument is set to measure 10V with input impedance > 1G&#937;.

2V | 7 The instrument is set to measure 2V with input impedance 1M&#937; and 50pF.

5V | 8 The instrument is set to measure 5V with input impedance 1M&#937; and 50pF.

10V | 9 The instrument is set to measure 10V with input impedance 1M&#937; and 50pF.

20V | 10 The instrument is set to measure 20V with input impedance 1M&#937; and 50pF.

50V | 11 The instrument is set to measure 50V with input impedance 1M&#937; and 50pF.

100V | 12 The instrument is set to measure 100V with input impedance 1M&#937; and 50pF.

For the values of parameter
RANGE_V included between 200MVG and 10VG, the input amplifier of the instrument
is programmed with a Common Mode Voltage[1] value of 10V. For the values of the parameter RANGE_V included between 2V and 100V, the
input amplifier of the instrument is programmed with a Common Mode Voltage
value of 100V.

RANGE_I=option|value [NONE|500MADC|250MADC|100MADC|50MADC|25MADC|10MADC|

5MADC|2P5MADC|1MADC|500UADC|250UADC|100UADC|50UADC|25UADC|10UADC|5UADC|2P5UADC|1UADC|500MAAC|250MAAC|100MAAC|50MAAC|25MAAC|10MAAC|5MAAC|2P5MAAC|1MAAC|500UAAC|250UAAC|100UAAC|50UAAC|25UAAC|10UAAC,
default: NONE]

Indicates the range of the
signal to be measured with instrument MEAS_I preset to measure current values,
i.e. a instrument scale range value which contains the expected value. The more the scale
range value approximates the measured value, more accurate is the resolution of
the instrument. The possible values of the parameter are:

NONE | 0X50 The meter
is in closed loop, i.e. the amperometer
has a shunt resistance equal to 0, (no measurement is executed).

500MADC | 0X00 The
instrument is set to measure 500mA DC/AC.

250MADC | 0X01 The
instrument is set to measure 250mA DC/AC.

100MADC | 0X02 The
instrument is set to measure 100mA DC/AC.

50MADC | 0X10 The instrument is set to measure 50mA DC.

25MADC | 0X11 The instrument is set to measure 25mA DC.

10MADC | 0X12 The
instrument is set to measure 10mA DC.

5MADC | 0X20 The
instrument is set to measure 5mA DC.

2P5MADC | 0X21 The
instrument is set to measure 2,5mA DC.

1MADC | 0X22 The instrument is set to measure 1mA DC.

500UADC | 0X30 The
instrument is set to measure 500&#956;A DC.

250UADC | 0X31 The
instrument is set to measure 250&#956;A DC.

100UADC | 0X32 The
instrument is set to measure 100&#956;A DC.

50UADC | 0X40 The
instrument is set to measure 50&#956;A DC.

25UADC | 0X41 The
instrument is set to measure 25&#956;A DC.

10UADC | 0X42 The
instrument is set to measure 10&#956;A DC.

5UADC | 0X43 The
instrument is set to measure 5&#956;A DC.

2P5UADC | 0X44 The
instrument is set to measure 2,5&#956;A DC.

1UADC | 0X45 The
instrument is set to measure 1&#956;A DC.

500MAAC | 0X00 The
instrument is set to measure 500mA DC/AC.

250MAAC | 0X01 The
instrument is set to measure 250mA DC/AC.

100MAAC | 0X02 The
instrument is set to measure 100mA DC/AC.

50MAAC | 0X03 The
instrument is set to measure 50mA AC.

25MAAC | 0X04 The
instrument is set to measure 25mA AC.

10MAAC | 0X05 The
instrument is set to measure 10mA AC.

5MAAC | 0X13 The
instrument is set to measure 5mA AC.

2P5MAAC | 0X14 The
instrument is set to measure 2,5mA AC.

1MAAC | 0X15 The
instrument is set to measure 1mA AC.

500UAAC | 0X23 The
instrument is set to measure 500&#956;A AC.

250UAAC | 0X24 The
instrument is set to measure250&#956;A AC.

100UAAC | 0X25 The
instrument is set to measure100&#956;A AC.

50UAAC | 0X33 The
instrument is set to measure50&#956;A AC.

25UAAC | 0X34 The
instrument is set to measure25&#956;A AC.

10UAAC | 0X35 The
instrument is set to measure10&#956;A AC.

For current measurements the
input pole is L1 while the output pole is defined by the value of the parameter
REF_I

RANGE_I[2]=option|value [5A|2P5A|1A|500MA|250MA|100MA|50MA|25MA10MA|5MA|2P5MA|1MA

500UA|250UA|100UA|50UA|25UA|10UA|5UA|2P5UA|1UA|60MV,
default: NONE]

The group of possible values
for parameter RANGE_I is relevant only when the FCMES option is present:

5A | 0X70 The instrument is set to
measure 5A DC.

2P5A | 0X71 The
instrument is set to measure 2,5A DC.

1A | 0X72 The instrument is set to
measure 1A DC.

500MA | 0X80 The instrument is set to measure 500mA DC.

250MA | 0X81 The instrument is set to measure 250mA DC.

100MA | 0X82 The
instrument is set to measure 100mA DC.

50MA | 0X90 The
instrument is set to measure 50mA DC.

25MA | 0X91 The
instrument is set to measure 25mA DC.

10MA | 0X92 The instrument is set to measure 10mA DC.

5MA | 0XA0 The
instrument is set to measure 5mA DC.

2P5MA | 0XA1 The
instrument is set to measure 2,5mA DC.

1MA | 0XA2 The
instrument is set to measure 1mA DC.

500UA | 0XB0 The
instrument is set to measure 0,50mA DC.

250UA | 0XB1 The
instrument is set to measure 0,25mA DC.

100UA | 0XB2 The
instrument is set to measure 0,1mA DC.

50UA | 0XC0 The
instrument is set to measure 50&#956;A DC.

25UA | 0XC1 The
instrument is set to measure 25&#956;A DC.

10UA | 0XC2 The
instrument is set to measure 10&#956;A DC.

5UA | 0XD0 The
instrument is set to measure 5&#956;A DC/AC.

2P5UA | 0XD1 The
instrument is set to measure 2,5&#956;A DC.

1UA | 0XD2 The
instrument is set to measure 1&#956;A DC.

60MV | 0XE0 The
instrument scale range value is defined by the values set with the instruction ~SET
SHUNT. If the parameter
RANGE_I is =60MV, the shunt, which determines the scale range value, is
defined by the user. The shunt value must be set with the instruction ~SET
SHUNT, described in chapter 4.3.7. 

For current measurements with
FCMES option, the two poles of the meter can be connected either to the system
analog lines, or to the FCMES option console or to the PODAMP option.

RANGE_I[3]=option|value [25A|10A]

This group of possible values
for parameter RANGE_I is relevant only if the option PODAMP is present and
connected to the FCMES option:

25A | 0X60 The
instrument is set to measure 25A DC.

10A | 0X61 The
instrument is set to measure 10A DC.

For current measurements, with
option PODAMP connected to the option FCMES, the two poles of the meter are
those present in the PODAMP module output.

RANGE_I[4]/RANGE_V2

=option|value [NONE|100VDC|50VDC|20VDC|10VDC|5VDC|2VDC|1VDC|500MVDC|

200MVDC|100VAC|50VAC|20VAC|10VAC|5VAC|2VAC|,
default: NONE]

Indicates the range of the
signal to be measured with instrument MEAS_I preset to measure voltage values,
i.e. a instrument scale range value which contains the expected value. The more the scale
range value approximates the measured value, more accurate is the resolution of
the instrument. The possible values of the parameter are:

NONE | 0X50 No
measurement is executed.

100VDC | 0X30 The instrument is set to measure 100V, with a 200K&#937; input impedance.

50VDC | 0X31 The instrument is set to measure 50V, with a 200K&#937; input impedance.

20VDC | 0X32 The instrument is set to measure 20V, with a 200K&#937; input impedance.

10VDC | 0X40 The instrument is set to measure 10V, with a 200K&#937; input impedance.

5VDC | 0X41 The instrument is set to measure 5V, with a
200K&#937; input impedance.

2VDC | 0X42 The instrument is set to measure 2V, with a
200K&#937; input impedance.

1VDC | 0X43 The instrument is set to measure 1V, with a
200K&#937; input impedance.

500MVDC | 0X44 The instrument is set to measure 0,5V, with a 200K&#937; input impedance.

200MVDC | 0X45 The instrument is set to measure 0,2V, with a 200K&#937; input impedance.

100VAC | 0X23 The instrument is set to measure 100V AC, with a 200K&#937; input impedance.

50VAC | 0X24 The instrument is set to measure 50V AC, with a 200K&#937; input impedance.

20VAC | 0X25 The instrument is set to measure 20V AC, with a 200K&#937; input impedance.

10VAC | 0X33 The instrument is set to measure 10V AC, with a 200K&#937; input impedance.

5VAC | 0X34 The instrument is set to measure 5V AC, with a 200K&#937; input impedance.

2VAC | 0X35 The instrument is set to measure 2V AC, with a 200K&#937; input impedance.

For voltage measurements the
input pole is line L1 with a 200K&#937; resistance in series, while the output
pole is defined by the value of parameter REF_I

MODE=option|value [NORMAL|DEBUG|PROCES, default: NORMAL]

Defines the execution mode of the measurement performed
with the instrument IMM. There are three possible values:

NORMAL | 0 Defines the normal operating
mode of the instrument. The data learning starts after the trigger event for
measurement starting and the delay set with parameter DELAY_TRIG. The data
acquired will be processed with the modes defined by the parameters MEAS_V and
MEAS_I.

DEBUG | 16 The operation is the same as
NORMAL mode, but the data learning takes place also during the delay time set
with parameter DELAY_TRIG.

PROCES | 4 The instrument processes the
data present in the buffer memory without executing a new acquisition. The data
present in the memory buffer are those acquired by a previous measurement.

INP_MEM=option [MEMORY|CHANNEL|ADC|INPUT, default: ADC]

Defines the source of the data inserted in the
acquisition buffer in memory. The first 14 bit (bit 0&#8209;13) come from the
component ADC which digitizes the analog values coming from the measurement
points. The last 2 bits (bit 14-15) mey
come from different sources, selectable according to the value of the parameter
INP_MEM. The possible values of this parameter are:

MEMORY The data inserted in the
acquisition buffer come from the memory buffer of the drivers DRA and DRB. The
data coming from the memory buffer of the drivers DRA and DRB are those present
in the DAC components input, used to generate analog output signals from generators.

CHANNEL The data inserted in the
acquisition buffer come from the sensors of the four analog channels present on
the ACL module.

ADC The data inserted in
th acquisition buffer come from the ADC component which digitizes the analog
values coming from the meter connected to the analog measurement lines. (flag
overflow of the component)

INPUT The data inserted in the
acquisition buffer come from the signals present on the connector mounted on
the ACL module (JT0, JT1, JT2 and JT3).

The Fig. 4&#8209;6 shows the composition of the data inserted in the two
acquisition buffer of instruments MEAS-V and MEAS_I

N_SAMPLE=value [0-65.535, default: 1000]

Indicates the number of samples to be
acquired to execute the measurement. With regard to the value to assign to this
parameter it is important to consider that, to acquire a complete cycle of the
input signal, the number of samples should be higher than the ratio between the
sample frequency and the input signal frequency. 

FREQ=value [1000Hz&#8209;10.000.000Hz, default:
10.000.000Hz]

Indicates the value of the sample
frequency to digitize the acquired signal. With regard to the value to assign
to this parameter it is important to consider that the sample frequency should
have a value higher than the double of the input signal frequency. The
recommended value for the sample frequency is five/ten times the input
frequency.

ADDR=value [0&#8209;65.535, default: 0]

Indicates the starting address of the
buffer containing the acquired values into the memory used to acquire the
signal.

START=option|value [IMMEDIATE|CNT_START|CNT_STOP|CNT_COMPHW1|HW2|SW1|

DISABLE,
default:IMMEDIATE]

Indicates the
starting mode to execute the measurement. This parameter may have seven
possible values:

IMMEDIATE | 0 The measurement is executed immediately when executing
the instruction ~SET IMM.

CNT_START | 1 The measurement will start with the event Start
Trigger of the instrument SCOUNTER present on the ACL module.

CNT_STOP | 2 The measurement will start
with the event Stop Trigger of the instrument SCOUNTER present on the ACL
module.

CNT_COMP | 3 The measurement will start
with the event Compare of the
instrument SCOUNTER present on the ACL module.

HW1 | 4 The measurement will start
with the activation of the signal HW RTCIN1 coming from outside the ACL module.

HW2 | 5 The measurement will start
with the activation of the signal HW RTCIN2 coming from outside the ACL module.

SW1 | 6 The generation of the output
signal will start with the event Trigger SW1, which can be generated by the
instruments IMM and SCOUNTER.

DISABLE | 7 The driver is programmed
without starting the measurement. To start the measurement, it is necessary to
execute the instruction ~SET IMM (the parameter START shall
have a value other than DISABLE.

TRIG_OUT=option|value [NONE|SW1|SW2,
default:NONE]

Defines the kind of trigger signal output to
synchronize the instruments.

The possible values are:

NONE | 0 No trigger signal is output.

SW1 | 1 The signal trigger software
SW1 is output, aynchronous with measurement starting.

SW2 | 2 The value SW2 indicates the
possibility to create a second software trigger signal SW2. This function is
not implemented.

DELAY_TRIG=value [0,00000002-60sec, default: 0]

The parameter has a different meaning
according to the value of parameter MODE:

If MODE is programmed to value NORMAL, it indicates the
delay time programmed (in seconds) from the trigger event of measurement
starting, as defined by parameter START, and the execution of the measurement.

If MODE is programmed to DEBUG, it
indicates the number of samples acquired before the samples used to process the
acquired values.

If MODE is programmed to PROCESS, the
parameter DELAY_TRIG is not relevant.

EVOLUTION=value [0-65.535, default: 1]

Indicates the number of values acquired to
execute the measurement.

INP_VPOS=option|value [OPEN|L1|L2|L4|L6|GND|MONITOR|IDRA|IDRB|IDRC|TEMP,
default:OPEN]

Defines the connection to the positive pole of the
instrument MEAS_V, used to measure voltage; the possible values are:

OPEN | 0 The positive pole is not
connected.

L1 | 1 The positive pole is connected
to the internal measurement line L1.

L2 | 2 The positive pole is connected
to the internal measurement line L2.

L4 | 4 The positive pole is connected
to the internal measurement line L4.

L6 | 6 The positive pole is connected
to the internal measurement line L6.

GND | 9 The positive pole is connected
to the ground line of the ACL module.

MONITOR | 10 The positive pole is connected to the point of the
measurement, defined with the instruction ~SET
MONITOR, which allows to select the point monitored by the
instrument.

IDRA | 11 The positive pole is connected
internally to the output of the monitor of the current output by DRA generator.

IDRB | 12 The positive pole is connected
internally to the output of the monitor of the current output by DRB generator.

IDRC | 13 The positive pole is connected
internally to the output of the monitor of the current output by DRC
generator..

TEMP | 14 The positive pole is connected
internally to the temperature sensor of the heat sink present in the ACL module.

INP_VNEG=option|value [OPEN|L1|L2|L3|L4|L5|L7|GND,
default:OPEN]

Defines the connection to the negative pole of the
instrument MEAS_V, used for voltage measurements, pu assumere i valori:

OPEN | 0 The negative pole is not
connected.

L1 | 1 The negative pole is connected
to the internal measurement line L1.

L2 | 2 The negative pole is connected
to the internal measurement line L2.

L3 | 3 The negative pole is connected
to the internal measurement line L3.

L4 | 4 The negative pole is connected
to the internal measurement line L4.

L5 | 5 The negative pole is connected
to the internal measurement line L5.

L7 | 7 The negative pole is connected
to the internal measurement line L7.

GND | 9 The negative pole is connected
to the ground line of the ACL module.

INP_I_V2=option|value [OPEN|L1_I|L1_V|L2_AMP|L3_AMP|
L4_AMP|L6_AMP|L8_AMP|POD|CON,

default:OPEN]

Defines the connection of the clamp INP_I_V2 of the
instrument MEAS_I, the possible values are:

OPEN | 0 The point INP_I_V2 is not
connected.

L1_I | 1 The point INP_I_V2 is
connected to the internal line L1, for current measurements.

L1_V | 2 The pole INP_I_V2 is connected
to the internal line L1, for voltage measurements with 200K&#937; input
impedance.

L2_AMP | 2 The pole INP_I_V2 is connected
to the internal line L2 through the FCMES option, for current measurements. The
value L2_AMP is valid only for values of RANGE_I >= 0x60 

L3_AMP | 3 The pole INP_I_V2 is connected
to the interal line L3 through the FCMES option, for current measurements. The
value L3_AMP is valid only for values of RANGE_I >= 0x60 

L4_AMP | 4 The pole INP_I_V2 is connected
to the internal line L4 through the FCMES option, for current measurements. The
value L4_AMP is valid only for values of RANGE_I >= 0x60 

L6_AMP | 6 The pole INP_I_V2 is connected
to the internal line L6 through the FCMES option, for current measurements. The
value L6_AMP is valid only for values of RANGE_I >= 0x60 

L8_AMP | 8 The pole INP_I_V2 is connected
to the internal line L8 through the FCMES option, for current measurements. The
value L8_AMP is valid only for values of RANGE_I >= 0x60 

POD | 11 The pole INP_I_V2 is connected to the positive
measurement point of the PODAMP option through the FCMES option, for current measurements. The
value POD is valid only for values of RANGE_I >= 0x60 

CON | 12 The pole INP_I_V2 is connected
to the positive measurement point present on the console of the FCMES option,
for current measurements. The value POD is valid only for values of RANGE_I
>= 0x60 

SENSE_I=option|value [INTERNAL|L5,
default:INTERNAL]

Defines the connection of the sense point for the input
current (SENSE_I). The possible values are:

INTERNAL | 0 The point SENSE_I is connected internally to line L1.

L5 | 1 The point SENSE_I is connected
internally to line L5.

REF_I=option|value [GND|L3|L7|
L2_AMP|L3_AMP| L4_AMP|L5_AMP|L7_AMP,

default:GND]

Defines the connection of the point REF_I of the
instrument MEAS_I, the possible values are:

GND | 0 The point REF_I is connected
to the ground line of the ACL module.

L3 | 3 The point REF_I_I is connected
to the internal line L3.

L7 |7 The point REF_I is connected
to the internal line L7.

L2_AMP | 2 The pole INP_I_V2 is connected
to the internal line L2 through the FCMES option, for current measurements. The
value L2_AMP is valid only for values of RANGE_I >= 0x60 

L3_AMP | 3 The pole INP_I_V2 is connected
to the internal line L3 through the
FCMES option, for current measurements. The value L3_AMP is valid only for values
of RANGE_I >= 0x60 

L4_AMP | 4 The pole INP_I_V2 is connected
to the internal line L4 through the FCMES option, for current measurements. The
value L4_AMP is valid only for values of RANGE_I >= 0x60 

L5_AMP | 5 The pole INP_I_V2 is connected
to the internal line L5 through the FCMES option, for current measurements. The
value L5_AMP is valid only for values of RANGE_I >= 0x60 

L7_AMP | 7 The pole INP_I_V2 is connected
to the internal line L7 through the FCMES option, for current measurements. The
value L7_AMP is valid only for values of RANGE_I >= 0x60 

FILTER=option|value [NONE|PB_BW|PA_BW|PB_C1|PA_C2|MM|PB_FH|PA_FH|PBD_FH|BR_FH|

PB_FB|PA_FB|PBD_FB|BR_FB,
default:NONE|0]

Defines the kind of digital filter applied on the two
buffers containing the vectors of the voltage and current values acquired. The
result will be available in two vectors containing the values filtered by the
filter applied. The maximum size of the vectors filtered is 16 Kword. By
applying a filter, the calculations defined with parameters MEAS_V and MEAS_I
are executed reading the data from the filtered vectors and not from the
acquisition buffers.

The possible values are:

NONE | 0 No filter is applied on the
two acquisition buffers.

PB_BW | 1 A Butterworth pass low filter is
applied to the acquisition buffers.

PA_BW | 2 A Butterworth pass high filter is
applied to the acquisition buffers.

PB_C1 | 3 A Chebyshev type 1 pass low
filter is applied to the acquisition buffers.

PA_C2 | 4 A Chebyshev type 1 pass high
filter is applied to the acquisition buffers.

MM | 5 The buffers with filtered
values will contain the mobile average of the acquired values. The number of
samples use to determine the mobile average is defined by the value of
parameter FT1. When the parameter FILTER=MM, the parameter FT1 will not
indicate a frequency value but a whole number.

PB_FH | 6 A Pass Low Fir Hamming filter is
applied to the acquisition buffers.

PA_FH | 7 A Pass High Fir Hamming filter
is applied to the acquisition buffers.

PBD_FH | 8 A Pass Bandwidth Fir Hamming filter
is applied to the acquisition buffers.

BR_FH | 9 A Rejection Bandwidth Fir
Hamming filter is applied to the acquisition buffer.

PB_FB | 10 A Pass Low Fir Blackman filter is
applied to the acquisition buffers.

PA_FB | 11 A Pass High Fir Blackman filter is
applied to the acquisition buffers.

PBD_FB | 12 A Pass Bandwidth Fir Blackman filter
is applied to the acquisition buffers.

BR_FB | 13 A Rejection bandwidth filter Fir
Blackman is applied to the acquisition buffers.

ORDER=value [1-20, default: 2]

Indicates the serial number of the filter,
i.e. the speed of attenuation switching from passband bandwidth to the
attenuated band of the filter.

FT1=value [0-100.000Hz, default: 0]

Indicates the first cutoff frequency for
the kind of filter defined with parameter FILTER. When the parameter FILTER is
set to MM the parameter FT1 will not indicate a frequency value, but a whole
number identifying the number of samples used to determine the mobile media.

FT2=value [0-100.000Hz, default: 0]

Indicates the second cutoff frequency for
the kind of filter defined with parameter FILTER.

DOMAIN=option|value [IMM|PC|ALL, default: IMM]

This parameter allows to synchronize the program
execution according to the ACL module status, the IMM instrument status or of
none of them.

The possible values for this parameter are:

IMM | 0 The parameter is controlled
through the ACL module and is released at the end of the measurement.

PC | 1 The parameter is controlled
through the Main Computer without waiting the end of run DRB or of all the
other instruments.

ALL | 2 The parameter is controlled
through the ACL module and released at the end of the run of all the
instruments in use 

The default value
of the parameter DOMAIN is IMM.

Fig. 4&#8209;6 - ACL module: Data source for
MEAS_V and MEAS_I buffers

### 1.1.3 METHOD MEASURE 

The method Measure makes available the measurements
executed with the IMM, through the
method Set.

Syntax

#### VIVA LANGUAGE

~MEAS IMM [INTO=variable] [N_SAMPLE=value]
[ADDR=value] [MEAS=option|value]

Detail of Parameters

Measure Only =
value [TRUE, FALSE]

 Boolean
variable which allows to select if a SET instruction must be executed before
measurement or not.

N_SAMPLE
=value [0-1.000, default: 1]

Indicates the number of samples to be
transferred, from the acquisition buffer, to elaborate the measurement.

ADDR=value [0-65.535, default: 0]

Indicates the starting address of the
buffer containing the acquired values into the memory used to acquire the
signal.

MEAS=option|value [IST_I| IST_V|IST_V2|MAX_V|MIN_V|AVERAGE_V|RMS_V|P_V|PP_V|OFFSET_V|

DV_DT|MAX_I|MIN_I|AVERAGE_I|RMS_I|P_I|PP_I|OFFSET_I|DI_DT|

MAX_V2|MIN_V2|AVERAGE_V2|RMS_V2|P_V2|PP_V2|OFFSET_V2|

DV2_DT|PHASE_V2|MODULE_V2BUFFER_V|BUFFER_I|BUFFER_V2|

MODULE_V|PHASE_V|MODULE_I|PHASE_I|VECT_VF|VECT_IF|

REL_DRA|REL-DRB|REL_DRC|REL_MESVP|REL_MESVM|REL_MESI|

REL_MESI_REF|REL_GND|REL_PULL, default:IST_I]

Defines the type of measurement supplied by the
instrument. To speed up the execution time of the measurement, the values
assigned to the parameter must be congruent with the values of the parameters
MEAS_V and MEAS_I of the instruction ~SET IMM used to acquire the measurement.
The possible values of this parameter are:

IST_I | 0 The current one shot
measurement is supplied, in Ampere. The previous instruction ~SET
IMM shall have been executed with parameter MEAS_I=ONE_SHOT.

IST_V2 | 0 The voltage one shot measurement
is supplied, in Volt executed by the instrument MEAS_I if the previous instruction
~SET IMM has been executed with parameter INP_I_V2=L1_V and with parameter
MEAS_I=ONE_SHOT.

IST_V | 1 The voltage one shot
measurement is supplied, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=ONE_SHOT.

MAX_V | 2 It is supplied the highest
voltage value acquired, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=DC.

MIN_V | 3 It is supplied the lowest
voltage value acquired, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=DC.

AVERAGE_V | 4 It is supplied the average voltage value
of all the values acquired, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=DC.

RMS_V | 5 It is supplied the voltage Vrms
of the measured signal, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=AC.

P_V | 6 it is supplied the peak
voltage value of the measured signal, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=AC.

PP_V | 7 It is supplied the peak to
peak voltage value of the measured signal, in Volts. The previous instruction ~SET
IMM must have been executed with parameter MEAS_V=AC.

OFFSET_V | 8 It is supplied the offset value of the
measured signal, in Volts. The previous instruction ~SET IMM
must have been executed with parameter MEAS_V=AC.

DV_DT | 9 It is supplied the measurement
of the value &#916;V/&#916;T, which represents the slope of the linear regression curve on the
acquired samples, in Volt/sec. The
previous instruction~SET IMM must have been executed with
parameter MEAS_I=DV_DT.

MAX_I | 10 It is supplied the highest current
value acquired, in Ampere. The previous ~SET IMM
instruction must have been executed with parameter MEAS_I=DC.

MIN_I | 11 It is supplied the lowest current
value acquired, in Ampere. The previous ~SET IMM
instruction must have been executed with parameter MEAS_I=DC.

AVERAGE_I | 12 It is supplied the average current value of
all the values acquired, in Ampere. The previous instruction ~SET
IMM must have been executed with parameter MEAS_I=DC.

RMS_I | 13 It is supplied the Vrms current
value of the measured signal, in Ampere. The previous instruction ~SET
IMM must have been executed with parameter MEAS_I=AC.

P_I | 14 It is supplied the peak
current value of the measured signal, in Ampere. The previous instruction ~SET
IMM must have been executed with parameter MEAS_I=AC.

PP_I | 15 it is supplied the peak to peak
current value of the measured signal, in Ampere. The previous instruction ~SET
IMM must have been executed with parameter MEAS_I=AC.

OFFSET_I | 16 It is supplied the offset value of the
measured signal, in Ampere. The previous instruction ~SET IMM
must have been executed with parameter MEAS_I=AC.

DI_DT | 17 It is supplied the value &#916;I/&#916;T, which represent the slope of the
linear regression curve on the value of the acquired samples, in Ampere/sec. The
previous instruction ~SET IMM must have been executed with the
parameter MEAS_I=DI_DT.

MAX_V2 | 10 It is supplied the highest voltage value
acquired in Volt, executed with instrument MEAS_I if the previous instruction ~SET
IMM has been executed with parameter INP_I_V2=L1_V and with parameter
MEAS_V=DC.

MIN_V2 | 11 it is supplied the lowest voltage
value acquired in Volt, executed by the instrument MEAS_I if the previous
instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V and with parameter MEAS_V=DC.

AVERAGE_V2 | 12 It is supplied the average voltage value
acquired with the instrument MEAS_I if the previous instruction ~SET
IMM has been executed with parameter INP_I_V2=L1_V and with parameter
MEAS_V=DC.

RMS_V2 | 13 It is supplied the Vrms voltage value
of the measured signal, in Volt, acquired by the instrument MEAS_I, if the
previous instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V and with parameter MEAS_V=AC.

P_V2 | 14 It is supplied the peak voltage
value of the measured signal, in Volt, acquired with the instrument MEAS_I, if
the previous instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V and with parameter MEAS_V=AC.

PP_V2 | 15 It is supplied the peak to peak
voltage value of the measured signal in Volts, acquired by the instrument
MEAS_I, if the previous instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V. The previous instruction ~SET IMM must have been executed with
parameter MEAS_V=AC.

OFFSET_V2 | 16 It is supplied the offset
value of the measured signal in Volt acquired by the instrument MEAS_I, if the
previous instruction ~SET IMM has been executed with parameter INP_I_V2=L1_V and with parameter
MEAS_V=AC.

DV2_DT | 17 It is supplied the value &#916;V2/&#916;T, which represents the slope of the linear regression curve on the
acquired samples, in Volt/sec. The values are acquired with the instrument
MEAS_I, if the previous instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V and with parameter MEAS_I=DV_DT.

PHASE_V2 | 22 It is supplied the buffer containing the
values of the phase of the armonic components of the voltage values acquired,
in degrees. The values are acquired by the instrument MEAS_I, if the previous
instruction ~SET IMM has been executed with the parameter
INP_I_V2=L1_V.

MODULE_V2 | 23 it is supplied the buffer containing the
values of the modules of the armonic components of the acquired signal, in
Ampere. The values are acquired with the instrument MEAS_I, if the previous
instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V.

BUFFER_V | 18 It is supplied the buffer containing the
voltage values acquired, in Volts. 

BUFFER_I | 19 It is supplied the buffer containing the
current values acquired, in Ampere.

BUFFER_V2 | 26 It is supplied the buffer containing the
voltage values acquired, in Volt. The values are acquired with the instrument
MEAS_I, if the previous instruction ~SET IMM has been executed with parameter
INP_I_V2=L1_V.

MODULE_V | 20 It is supplied the buffer the values of
the armonic components modules of the acquired signal, in Volt.

PHASE_V | 21 it is supplied the buffer containing
the values of the phase of the armonic components of the voltage values
acquired, in degrees.

MODULE_I | 22 it is supplied the buffer containing the
values of the armonic components modules of the acquired signal, in Ampere.

PHASE_I | 23 It is supplied the buffer containing
the values of the phase of the armonic components of the current values
acquired, in degrees.

VECT_VF | 24 It is supplied the buffer containing
the voltage values acquired and filtered as defined with parameter FILTER, in
Volt.

VECT_IF | 25 It is supplied the buffer containing
the current values acquired and filtered as defined by parameter FILTER, in
Ampere.

REL_DRA | 200 Indicates the connection status of the
DRA relays. Up to now, this function is not implemented.

REL_DRB | 201 Indicates the connection status of the
DRB relays. Up to now, this function is not implemented.

REL_DRC | 202 Indicates the connection status of the
DRB relays. Up to now, this function is not implemented.

REL_MESVP | 203 Indicates the connection status of the positive pole relays
(instrument MEAS_V). Up to now this function is not implemented.

REL_MESVM | 204 Indicates the connection status of the
negative pole (instrument MEAS_V). Up to now this function is not implemented.

REL_MESI | 205 Indicates the connection status of the
positive pole relays (instrument MEAS_I). Up to now this function is not
implemented.

REL_MESI_REF | 206 Indicates the connection status of
the SENSE relays (instrument MEAS_I). Up to now this function is not
implemented.

REL_GND | 207 Indicates the connection
status of the AGND relays. Up to now this function is not implemented.

REL_PULL | 208 Indicates the connection status of the PULL
relays. Up to now this function is not implemented.

### 1.1.4 METHOD EXECUTE 

Not
implemented in this instrument.

## 1. 2 
SWITCHING
AND CONNECTION INSTRUMENTS

On the ACL module there are
instruments which supply functions of switching
and connection between the instruments of the module, the internal
measurement lines and the external analog lines.

MONITOR allows to monitor some signals of the
ACL module.

GND allows
to define the ground used by the instruments present on the module.

PULL allows to define pull-up or
pull-down resistive values.

LINE allows to define the management
with 4 or 8 measurement lines and the connection to the analog bus of the
system measurement lines.

LINE_EXT allows to define the connection with an
external analog measurement bus.

CHANNEL allows to define the connection between
a channel and the system measurement lines.

### 1.2.1 [MONITOR]

#### METHOD SET 

The method Set is used to
make available on a coaxial connector one of the 24 possible signals of the ACL
module. The signal present on the output MONITOR
may also be connected to the meter MEAS_V
when the instruction Set IMM has
been executed with parameter IPV_POS
set to MONITOR.

Syntax

##### VIVA
LANGUAGE

~SET
MONITOR [OUT=option]

Detail of
parameters

OUT=option|value [IDRA| LPDRA
| IDRB | LDRB | IDRC
|LDRC | LNDRA | TEMP
| REFP |

REFN|TH_START|TH_STOP|VOL|VOH|THL|THH|VDRB|VDRC|VDRA|SDRA|SBRB|SDRC|GDRA|GDRB,
default:IDRA]

Defines the kind of signal available on the coaxial
connector of the ACL module. The possible
values for this parameter are:

IDRA | 0 Current monitor in DRA output

LPDRA | 1 DAC positive limit DRA

IDRB | 2 Current monitor in DRB output

LDRB | 3 DAC limit DRB

IDRC | 4 Current monitor in DRC output

LDRC | 5 DAC limit DRC

LNDRA | 6 DAC negative limit DRA

TEMP | 7 Heat sink temperature

REFP | 8 Positive reference +5,5V

REFN | 9 Negative reference -5,5V

TH_START | 10 Trigger signal threshold START
(SCOUNTER)

TH_STOP | 11 Trigger signal threshold STOP
(SCOUNTER)

VOL | 12 VOL digital channels * 0,75

VOH | 13 VOH digital channels * 0,75

THL | 14 Sensor trigger threshold
Digital CH Low Status

THH | 15 Soglia di trigger sensor CH Digitali Stato High

VDRB | 16 Output voltage DRB

VDRC | 17 Output voltage DRC/10

VDRA | 18 Output voltage DRA

SDRA | 19 DAC signal DRA

SDRB | 20 DAC signal DRB

SDRC | 21 DAC signal e DRC

GDRA | 22 DAC DRA signal gain

GDRB | 23 DAC DRB signal gain

[1] The value Common Mode Voltage
indicates the maximum voltage value which can be applied to the two
differential inputs of the instrument MEAS_V, with regard to the system ground
reference GND.

[2] Values of the parameter
RANGE_I valid if the option FCMES is present.

[3] Values of the parameter
RANGE_I valid if the option PODAMP is present and connected to the FCMES
option.

[4] Values of the
parameter RANGE_I valid when the instrument MEAS_I is used as a voltmeter, i.e.
when parameter INP_I_V2 is set to L1_V. The parameter RANGE_V2 is a alias of
parameter RANGE_I.