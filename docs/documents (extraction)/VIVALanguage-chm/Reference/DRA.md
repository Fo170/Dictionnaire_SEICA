&#160;

 ## 1. 1 &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; PRIMARY DRIVER - DRA -

The DRA driver is an instrument located in the ACL module and has the following features:

&#160;

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Programmable AC/DC current generator limited in voltage.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Programmable AC/DC voltage generator limited in current.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Arbitrary waveform generator with DDS or PPC systems.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Output signal coupling: AC/DC.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Output signal frequency: DC/1MHz (DDS) &#8211; DC/50MHz (PPC).

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Output voltage value: &#177; 10 V.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Output current value: &#177; 500 mA.

&#160;

 ### 1.1.1 METHOD CLEAR

The method CLEAR is used to deactivate the primary driver DRA disconnecting it from the measurement lines.

It sends a reset command to the instrument and sets its parameters to the default values.

These are indicated in Tab. 5&#8209;1, of Appendix A.

&#160;

&#160;

Syntax

 #### VIVA LANGUAGE

&#160;

~CLEAR DRA;

&#160;

&#160;

&#160;

 ### 1.1.2 &#160;&#160;&#160;&#160;METHOD SET

&#160;

Syntax

 #### VIVA LANGUAGE

&#160;

~SET DRA&#160; [V=value] [I=value] [OFFSET=value] [RANGE=AUTO|1V|10V|50uA|500uA|5mA|50mA|500MA]

[MODE=V|I] [VNEG=value] [FREQ=value] [TIME=value]

[WAVE=DC|SINE|TRI|RECT|ARB1-10| VECT1-10]

[START=IMMEDIATE|CNT_START|CNT_STOP|CNT_COMP|HW1|HW2|SW1|CLEAR|STOP_EVO]

[N_SAMPLE=value] [ADDR=value] [DELAY_TRIG=value] [EVOLUTION=value]

[COUPLING=DC|AC] [OUT=NONE|L1|L2|L8] [DOMAIN=DRA|PC|ALL]

[TIME_RELE=ON|OFF];

&#160;

&#160;

&#160;

&#160;

&#160;

DETAIL OF PARAMETERS

&#160;

V=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [-10-+10V, default: 0V]

Indicates the programming value of the output voltage from the instrument having the following meaning:

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Instrument output voltage value, if the instrument is programmed in the MODE=V mode,

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The value of the positive limit of the voltage supplied if the instrument is programmed in the MODE= I mode.

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; If the instrument is programmed in AC (WAVE parameter value other than DC) the value associated to parameter V indicates the peak value of the output&#160; signal from the instrument.

I=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [-0,5-+0,5A, default: 0,01A]

Indicates the programming value of output current with the following meaning:

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Output current value if the instrument is programmed in the: MODE=I mode

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The limit value of the output current if the instrument is programmed in the: MODE=V mode.

If the instrument is programmed in AC (value of parameter WAVE other than DC) the value associated to I indicates the peak to peak value of the output voltage.

&#160;

OFFSET=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [-10&#8209;+10V/-0, 5&#8209;+0, 5A, default: 0]

Indicates the offset value of the output signal and is relevant only when the instrument is programmed in AC. The parameter is related to voltage or current values according to the value associated to the parameter MODE, which defines the kind of programmed generator for DRA instrument. (MODE=V: voltage generator, MODE=I: current value.)

It is important to consider that the value OFFSET added to V or I must correspond to a value included in the parameter range, i.e. : [-10&#8209;+10V] for V and [-0,5&#8209;+0,5A] for I.

RANGE=option|value&#160;&#160;&#160;&#160; [AUTO|[1V|50uA]|10V|500uA]|5mA|50mA|500MA|500NA|5UA,

default: AUTO]

Indicates the range of the output signal, i.e. a scale range value which contains the instrument programming value. The more the scale range value approximates the instrument programming value, the more the instrument resolution is accurate. The parameter can have eight possible values with different meaning according to the instrument operating mode:

AUTO | 0&#160;&#160;&#160; the value is automatically defined according to the voltage or current proprogramming value both in mode: MODE=V or MODE=I.

1V | 50UA | 1&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 0,05mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; 1V if MODE is set toV.

10V | 500UA | 2&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 0, 5mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; 10V if MODE is set to V..

5MA | 3&#160;&#160;&#160;&#160;&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 5mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; Not relevant if MODE is set to V.

50MA | 4&#160;&#160;&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 50mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; Not relevant if MODE is set to V.

500MA | 5 the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 500mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; Not relevant if MODE is set to V.

500NA | 7&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 0,0005mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; Not relevant if MODE is set to V.

5UA | 6&#160;&#160;&#160;&#160;&#160; the parameter is set to:

-&#160;&#160;&#160;&#160;&#160;&#160; 0,005mA if MODE is set to I.

-&#160;&#160;&#160;&#160;&#160;&#160; Not relevant if MODE is set to V.

&#160;

MODE=option|value&#160;&#160;&#160;&#160;&#160;&#160; [V|I, default: V]

Indicates the instrument operating mode:

V| 0&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the instrument is programmed as a voltage generator limited in current.

I| 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the instrument is programmed as a current generator limited in voltage.

&#160;

VNEG=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [-10-0V, default: 0V]

Indicates the value of negative limit of the voltage supplied if the instrument is programmed in: MODE=I.

&#160;

FREQ=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [0,001-50.000.000Hz, default: 1.000Hz]

Indicates the output signal frequency and is relevant for the values of parameter WAVE other than DC.

It is expressed in Hertz, with possible values:

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 0,001-1.000.000 for waveforms generated with DDS technique

-&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 1000-50.000.000 for waveforms generated with PPC technique.

&#160;

TIME=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [0,00001-1 sec, default: 0,001sec]

Indicates the time needed to the generator to pass from a programming level of the output signal to the subsequent. It is relevant when WAVE =DC. In other words, it defines rising/falling ramp of the signal.

&#160;

WAVE=option|value&#160;&#160;&#160;&#160;&#160;&#160; [DC|SIN|TRI|RECT|ARB1&#8209;ARB10| VECT1-VECT10, default: DC]

Defines the output waveform with the following possible values:

DC | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The output signal is a continuous signal.

SINE | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The waveform of the output signal is sinusoidal.

TRI | 2&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The waveform of the output signal is triangular.

RECT | 3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The waveform of the output signal is rectangular.

|4|5|6|7|8|9|10|11|

12|13

 &#160;

 ARB1&#8209;ARB10 |&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The waveform of the output signal has a form described by 32 KW of values recorded into a flash memory present in the ACL module. To generate SIN, TRI, RECT, ARB1&#8209;ARB10 type waveforms the&#160; DDS technique is applied.

|14|15|16|17|18|19|

20|21|22|23

 &#160;

 VECT1&#8209;VECT10 |&#160;&#160;&#160;&#160; The waveform of the output signal is described by a variable number of values recorded into a flash memory present in the ACL module. To generate VECT1&#8209;VECT10 waveforms, the PPC technique is applied.

&#160;

START=option|value&#160;&#160;&#160;&#160;&#160; [IMMEDIATE|CNT_START|CNT_STOP|CNT_COMP|HW1|HW2|SW1

|CLEAR|STOP_EV, default:IMMEDIATE]

Indicates the starting mode to generate the signal. This parameter may have seven possible values:

IMMEDIATE | 0&#160;&#160; Indicates that the output signal is generated immediately.

CNT_START | 1&#160;&#160; Indicates that the output signal is generated at the event &#8220;Start Trigger&#8221; of the SCOUNTER instrument present on the ACL module.

CNT_STOP | 2&#160;&#160;&#160; Indicates that the output signal is generated at the event &#8220;Stop Trigger&#8221; of the SCOUNTER instrument present on the ACL module.

CNT_COMP | 3&#160;&#160;&#160; Indicates that the output signal is generated at the event &#8220;Compare&#8221; of the SCOUNTER instrument present on the ACL module.

HW1 | 4&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Indicates that the output signal is generated when the signal HW1 external to the&#160; ACL module is activated. (signal name: RTCIN1).

HW2 | 5&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Indicates that the output signal is generated when the signal HW2 external to the&#160; ACL module is activated. (signal name: RTCIN2)

SW1 | 6&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Indicates that the output signal is generated at the event &#8220;Trigger SW1&#8221;, which can be generated by the IMM and SCOUNTER instruments.

CLEAR | 7&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Indicates that the driver is programmed without starting the output signal generation from the instrument. To start the output signal generation it is necessary to execute the instruction ~SET DRA with START parameter value other than CLEAR.

STOP_EVO | 8&#160;&#160;&#160; Stops the continuos generation of the signal set with parameter EVOLUTION=0 of the previous ~SET DRA instruction.

&#160;

N_SAMPLE=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [0&#8209;32.768, default: 1.000]

Indicates the number of samples to be used when the waveform is generated using the PPC technique.

&#160;

ADDR=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [0&#8209;32.768, default: 0]

Indicates the starting address, within the range of the memory addresses&#160; which describe the waveform selected with parameter WAVE, where starts the scan of values to generate the output signal.

DELAY_TRIG=value&#160;&#160;&#160;&#160;&#160; [0,00000002&#8209;60sec, default: 0sec]

Indicates the programmed delay time of the trigger event to generate the output signal.The trigger event indicates the starting mode to generate the signal, defined with parameter START.

&#160;

EVOLUTION=value&#160;&#160;&#160;&#160;&#160;&#160; [0&#8209;65.535, default: 1]

Indicates the number of repetitions of a complete cycle of the selected waveform; it is relevant when parameter WAVE has values other than DC.

If the value of this parameter is set to 0, this means CONTINUE, i.e. continuous generation of the output signal.

&#160;

COUPLING=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [DC|AC, default: DC]

Indicates the coupling of the generator output signal:

DC | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160; the output signal is coupled in DC.

AC | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the output signal is coupled in AC.

&#160;

OUT=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [NONE|L1|L2|L8, default: NONE]

Defines the ACL module line to which is connected the DRA instrument output, the possible values are:

NONE | 0&#160;&#160;&#160; the instrument is not connected to an internal measurement line.

L1 | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the instrument is connected to the internal measurement line L1.

L2 | 2&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the instrument is connected to the internal measurement line L2.

L8 | 8&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; the instrument is connected to the internal measurement line L8.

&#160;

DOMAIN=option|value&#160; [DRA|PC|ALL, default: DRA]

This parameter allows to synchronize the program execution according to the ACL module status, of the DRA instrument status or none of them.

The possible values are:

DRA | 0&#160;&#160;&#160;&#160;&#160; The parameter is controlled through the ACL module and is released at the end of the run of DRA

PC | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The parameter is controlled through the Main Computer without waiting the end of the run of DRA or of the other instruments.

ALL | 2&#160;&#160;&#160;&#160;&#160;&#160; The parameter is controlled through the ACL module and is released at the end of the run of all the instruments in use

TIME_RELE=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [ON|OFF, default: ON]

It determines if, before quitting the command it is necessary to elapse the switching time of the relays used to program the instrument; the possible values are:

ON | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160; before quitting the command the switching time of the relays is elapsed

OFF | 1&#160;&#160;&#160;&#160;&#160;&#160; after programming, the switching time of the relays is not elapsed to quit the command.

This parameter can be useful in case of sequential programming for different instruments before using them: all the programmings previous to the last one, can be executed setting this parameter to OFF, only to execute the last one the parameter must be set to ON.

&#160;

Tab. 5&#8209;1- ACL module: Instructions, syntax and default value

&#160;

INSTRUCTION

PARAMETERS

&#160;

PARAMETER=<value>

PARAMETER=<option>

DEFAULT

&#160;

SET DRA

V=<value>

&#160;

0V

&#160;

I=<value>

&#160;

0,01A

&#160;

OFSET=<value>

&#160;

0V/A

&#160;

RANGE=0|1|2|3|4|5|6|7

RANGE=AUTO|[1V|50uA]|10V|500uA]|5mA|

50mA|500MA|500NA|5UA

0|AUTO

&#160;

MODE=0|1

MODE=V|I

0|V

&#160;

VNEG=<value>

&#160;

0V

&#160;

FREQ=<value>

&#160;

1.000Hz

&#160;

TIME=<value>

&#160;

0.001sec

&#160;

WAVE=0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23

WAVE=DC|SINE|TRI|RECT|ARB1|ARB2|ARB3|

ARB4|ARB5|ARB6|ARB7|ARB8|ARB9|ARB10|

VECT1|VECT2|VECT3|VECT4|VECT5|VECT6|

VECT7|VECT8|VECT9|VECT10

0|DC

&#160;

START=0|1|2|3|4|5|6|7|8

START=IMMEDIATE|CNT_START|CNT_STOP|

CNT_COMP|HW1|HW2|SW1|CLEAR|

STOP_EVO

0|IMMEDIATE

&#160;

N_SAMPLE=<value>

&#160;

1.000

&#160;

ADDR=<value>

&#160;

0

&#160;

DELAY_TRIG=<value>

&#160;

0sec

&#160;

EVOLUTION=<value>

EVOLUTION=CONTINUE|<value>

1

&#160;

COUPLING=0|1

COUPLING=DC|AC

0|DC

&#160;

OUT=0|1|2|8

OUT=NONE|L1|L2|L8

0|NONE

&#160;

DOMAIN=0|1|2

DOMAIN=DRA|PC|ALL

0|DRA

&#160;

TIME_RELE=0|1

TIME-RELE=ON|OFF

0|ON

&#160;

&#160;

&#160;

&#160;

&#160;

 ### 1.1.3 EXAMPLE OF USE OF DRAINSTRUMENT

The following instructions refer some examples of use of DRA resource from Functional Program.

&#8230;

TESTNAME=001;

SECTION SET;

~CLEAR DRA ;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; !Clear DRA: Hardware reset

~SET DRA ;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; !Set DRA to default parameters

~LI1 33 1;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; !Connect analog measure line L1 to channels 33 and 1

SECTION MEAS;

SECTION END;

ENDTESTNAME;

&#160;

TESTNAME=002;&#160;&#160; !On channels 33 and 1: 300mV DC, 100ma Max,

SECTION SET;

~SET DRA V=.3 I=.01 OFFSET=0 RANGE=10V MODE=V TIME=1 WAVE=DC&#160; OUT=L1 ;

SECTION END;

ENDTESTNAME;

&#160;

TESTNAME=003;&#160;&#160; !On channels 33 and 1: 0,5mA DC, 700mV Max, -300mV Min

SECTION SET;

~SET DRA V=.700 I=0.01 OFFSET=0 RANGE=500UA MODE=I VNEG=.300 TIME=0.001 DC&#160; OUT=L1 ;

SECTION END;

ENDTESTNAME;

&#160;

TESTNAME=004;&#160;&#160; !On channels 33 and 1: 300mV AC, 100ma Max, Offset: 500mV, Wave: sine.

SECTION SET;

~SET DRA V=1 I=0.010 OFFSET=0 FREQ=1000 MODE=SINE RANGE=10V EVOLUTION=5 OUT=L1 ;SECTION END;

ENDTESTNAME;

&#160;

TESTNAME=005;&#160;&#160; !On channels 33 and 1:Volt DC variable output,

SECTION SET;

~for f=0 to .999 step 0.01 ;

&#160; ~delay 2m;

&#160; ~SET DRA V=f I=.010 OFFSET=0 TIME=0.0005 DC RANGE=10V DELAY_trig=0.0 out=l1 ;

&#160; ~delay 2m;

&#160; ~SET DRA V=.500 I=0.010 OFFSET=0 TIME=0.0005 DC RANGE=10V DELAY_trig=0.0 OUT=L1 ;

~endfor;

SECTION END;

ENDTESTNAME;

&#160;

The figures below represent the trend of the values supplied by the primary driver DRA on channels 33 and 1 according to the programming executed in the tests from TESTNAME002 to TESTNAME005

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

&#160;

Fig.4&#8209;1-&#160; ACL module: Examples of DRA output

&#160;

The following instructions reproduce an example of subroutine, which could be inserted in a library file, to execute the function ~GET DRA. The value of the parameters for the instrument is displayed either on the STATIC TERMINAL of the functional environment or&#160; in the dialog TEST REPORT of the in-circuit test environment.

~SUBR GETDRA (FLOAT OUT);

&#160;

DECLARE RUNTIME FLOAT F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18;

&#160;

~GET DRA

&#160;V=F1

&#160;I=F2

&#160;OFFSET=F3

&#160;RANGE=F4

&#160;MODE=F5

&#160;VNEG=F6

&#160;FREQ=F7

&#160;TIME=F8

&#160;WAVE=F9

&#160;START=F10

&#160;N_SAMPLE=F11

&#160;ADDR=F12

&#160;DELAY_TRIG=F13

&#160;EVOLUTION=F14

&#160;COUPLING=F15

&#160;OUT=F16

&#160;DOMAIN=F17

&#160;TIME_RELE=F18 ;

&#160;

~FORMAT 10&#160; 4 ;

~IF OUT=0; &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; !Output on STATIC TERMINAL of the functional test environment

&#160;&#160;&#160; ~WRITE "V&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F1 ;~CURSOR CR ;&#160;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~WRITE "I&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F2 ;~CURSOR CR ;&#160;&#160; &#160;&#160;&#160;

&#160;&#160;&#160; ~WRITE "OFFSET&#160;&#160;&#160;&#160; =" F3 ;~CURSOR CR ;&#160;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~WRITE "RANGE&#160;&#160;&#160;&#160;&#160; =" F4 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "MODE&#160;&#160;&#160;&#160;&#160;&#160; =" F5 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "VNEG&#160;&#160;&#160;&#160;&#160;&#160; =" F6 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "FREQ&#160;&#160;&#160;&#160;&#160;&#160; =" F7 ;~CURSOR CR ;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~WRITE "TIME&#160;&#160;&#160; &#160;&#160;&#160;=" F8 ;~CURSOR CR ;&#160;&#160;&#160;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~WRITE "WAVE&#160;&#160;&#160;&#160;&#160;&#160; =" F9 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "START&#160;&#160;&#160;&#160;&#160; =" F10 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "N_SAMPLE&#160;&#160; =" F11 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "ADDR&#160;&#160;&#160;&#160;&#160;&#160; =" F12 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "DELAY_TRIG =" F13 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "EVOLUTION&#160; =" F14 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "COUPLING&#160;&#160; =" F15 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "OUT&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F16 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "DOMAIN&#160;&#160;&#160;&#160; =" F17 ;~CURSOR CR ;&#160;

&#160;&#160;&#160; ~WRITE "TIME_RELE&#160; =" F18 ;~CURSOR CR ;

~ELSE; &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; !Output on TEST REPORT dialog of the in-circuit test environment

&#160;&#160;&#160; ~REPORT "V&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F1 ;&#160;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~REPORT "I&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F2 ;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~REPORT "OFFSET&#160;&#160;&#160;&#160; =" F3 ;&#160;&#160;&#160;&#160;&#160;

&#160;&#160;&#160; ~REPORT "RANGE&#160;&#160;&#160;&#160;&#160; =" F4 ;

&#160;&#160;&#160; ~REPORT "MODE&#160;&#160;&#160;&#160;&#160;&#160; =" F5 ;&#160;

&#160;&#160;&#160; ~REPORT "VNEG&#160;&#160;&#160;&#160;&#160;&#160; =" F6 ;

&#160;&#160;&#160; ~REPORT "FREQ&#160;&#160;&#160;&#160;&#160;&#160; =" F7 ;&#160;&#160;&#160;

&#160;&#160;&#160; ~REPORT "TIME&#160;&#160;&#160;&#160;&#160;&#160; =" F8 ;&#160;

&#160;&#160;&#160; ~REPORT "WAVE&#160;&#160;&#160;&#160;&#160;&#160; =" F9 ;

&#160;&#160;&#160; ~REPORT "START&#160;&#160;&#160;&#160;&#160; =" F10 ;&#160;

&#160;&#160;&#160; ~REPORT "N_SAMPLE&#160;&#160; =" F11 ;&#160;

&#160;&#160;&#160; ~REPORT "ADDR&#160;&#160;&#160;&#160;&#160;&#160; =" F12 ;&#160;

&#160;&#160;&#160; ~REPORT "DELAY_TRIG =" F13 ;&#160;

&#160;&#160;&#160; ~REPORT "EVOLUTION&#160; =" F14 ;&#160;

&#160;&#160;&#160; ~REPORT "COUPLING&#160;&#160; =" F15 ;

&#160;&#160;&#160; ~REPORT "OUT&#160;&#160;&#160;&#160;&#160;&#160;&#160; =" F16 ;

&#160;&#160;&#160; ~REPORT "DOMAIN&#160;&#160;&#160;&#160; =" F17 ;

&#160;&#160;&#160; ~REPORT "TIME_RELE&#160; =" F18 ;

~ENDIF;

&#160;

&#160;

&#160;

&#160;