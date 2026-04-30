## 1. 1 &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; GENERAL-PURPOSE RESOURCES ON THE ACL DSP MODULE

On the ACL module (ACL DSP module) there are some general-purpose hardware resources present on the two connectors USER (JP6) and FIXTURE (JP5) shown in Fig. 410. From: Fig. 411 to: Fig. 416 display the electric schemes of the signals present on the two connectors USER (JP6) and FIXTURE (JP5).

The resources available are:

&#160;

OC0-OC7&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; group of 8 outputs OPEN COLLECTOR&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (3 mA, 10 KHz Max).

RTOIS0- RTOIS3&#160;&#160;&#160;&#160;&#160;&#160; group of 4 optoisolated outputs&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (10 mA, 2 MHz Max).

JTOIS0-JTOIS1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; group of 2 optoisolated outputs&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (5 mA, 2 MHz Max).

FXO0-FXO3&#160;&#160;&#160; group of 4 optoisolated outputs&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (3 mA, 10 KHz Max).

RTI0-RTI3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; group of 4 optoisolated inputs &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (5 mA, 2 MHz Max).

JTI0-JTI3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; group of 4 optoisolated inputs &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (5 mA, 2 MHz Max).

FXI0-FXI3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; group of 4 optoisolated inputs&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; (5 mA, 10 KHz Max).

&#160;

INSTRUMENT WR_HW for operations of writing of the hardware output resources.

STRUMENTO&#160; RD_HW&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; for operations of reading of the hardware input resources.

&#160;

&#160;

&#160;

 ### 1.1.1 [WR_HW]

&#160;

Syntax

 ##### VIVA LANGUAGE

&#160;

~SET WR_HD&#160;&#160; [TYPE=OC|RT|JT|FX| [DATA=value]

&#160;

Detail of parameters

&#160;

TYPE=option|value&#160;&#160;&#160;&#160;&#160; [OC|RT|JT|FX , default: OC]

Defines the type of output hardware resource which will be set

OC | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Identifies the 8 outputs open collector, (OC0OC7).

RT | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; identifies the 4 optoisolated, (RTOIS0-RTOIS3).

JT | 2&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Identifies the two optoisolated outputs, (JTOIS0JTOIS1).

FX | 3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Identifies the 4 optoisolated outputs, (FXO0FXO3).

&#160;

DATA=value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [0255, default: 0]

Expresses the configuration of the group selected with parameter TYPE. Specifically:

If TYPE=OC&#160;&#160;&#160;&#160;&#160;&#160; the bit0-bit7, of the byte containing the value of the parameter DATA, correspond to signals OC0-OC7. A bit set to 1 defines the corresponding circuit open collector opened; a bit set to 0 defines the corresponding circuit open collector closed.

If TYPE=RT&#160;&#160;&#160;&#160;&#160;&#160; The bit0-bit3, of the byte containing the value of the paramter DATA, define the configuration of the 4 output signals: RTOIS0-RTOIS3.

If TYPE=JT&#160;&#160;&#160;&#160;&#160;&#160;&#160; The bit0-bit3, of the byte containing the value of the parameter DATA, define the configuration of the two output signals: JTOIS0 e JTOIS1.

The bit0-bit1 define the value of the signal JTOIS0, with the following meaning:

00&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS0 is maintained to logic level 0

01&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS0 is maintained to logic level 1

10&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS0 is connected to the sensor of the digital channel 0.

11&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS0 is connected to the sensor of the digital channel 1.

The bit2-bit3 define the value of the signal JTOIS1, with the following meaning:

00&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS1 is maintained to logic level 0

01&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS1 is maintained to logic level 1

10&#160;&#160;&#160;&#160;&#160;&#160; the signal JTOIS1 is connecterd to the sensor of the digital channel 2.

11&#160;&#160;&#160;&#160;&#160;&#160; The signal JTOIS1 is connected to the sensor of the digital channel 3.

Se TYPE=FX&#160;&#160;&#160;&#160; the bit0-bit3, of the byte containing the value of the parameter DATA, define the configuration of the four output signals: FXO0-FXO3.

 ### 1.1.2 &#160;[RD_HD]

 #### METHOD MEASURE

The method MEAS is used to read the hardware input resources.

&#160;

Syntax

 ##### VIVA LANGUAGE

&#160;

~MEAS RD_HD [INTO=variable] [TYPE=RT|JT|FX|]

&#160;

&#160;

&#160;

Detail of parameters

&#160;

INTO=variable&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; Indicates the variable where are transferred the data measured by the general purpose input instruments, present on the ACL DSP MODULE. According to the value of the parameter TYPE, the measured value will have the following meanings:

If TYPE=RT&#160;&#160;&#160;&#160;&#160;&#160; the bit0-bit3 of the measured value, represent the configuration of the four input signals: RTI0-RTI3.

If TYPE=JT&#160;&#160;&#160;&#160;&#160;&#160;&#160; the bit0-bit3 of the measured value represent the configuration of the four input signals: JTI0- JTI3.

If TYPE=FX&#160;&#160;&#160;&#160;&#160;&#160; the bit0-bit3 of the measured value, represent the configuration of the four input signals: FXI0-FXI3.

&#160;

TYPE=option|value&#160;&#160;&#160;&#160;&#160; [RT|JT|FX , default: RT]

Defines the source of the data:

RT | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The data come from signals RTI0RTI3.

JT | 2&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The data come from signals JTI0-JTI3.

FX | 3&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The data come from signals FXI0-FXI3.

&#160;

&#160;

&#160;