## 1. 
 1 
 DIGITAL CHANNELS - LOGIC-

The module LOGIC present on the ACL 
 system, is made up by 4 digital bi-directional 
 channels with tristate output with the following features:

 VOH/VOL/VIH/VIL programmable 12V

 IOH/IOL 
 max 500 mA

 frequency 
 max 10 MHz

 Driver channel memory 
 32Kbit 

 Sensor channel memory 
 32Kbit

 Programmable clock generator

To use this instrument, 
 the following functions:

 LOGIC_LEVEL 
 defines the voltage values for the drivers and sensors of the channels.

 LOGIC_MODE 

 Defines the data flow and the connection of the channels.

 LOGIC 

 Writes and reads through the channels in static environment.

Fig. 
 Errore. 
 Nel documento non esiste testo dello stile specificato.1- 
 ACL module: Internal instrument Digital Channels

### LOGIC LEVEL

#### METHOD CLEAR

The 
 method CLEAR resets 
 the instrument.

It sets the 
 voltage values for high and low levels of 
 the channels driver (VOH, 
 VOL) and the voltage values 
 for the threshold high and low of the channels sensor (THH, 
 THL) to the default condition. 
 (See Errore.L'origine riferimento non stata trovata., 
 in the Appendix A).

Syntax

##### VIVA 
 LANGUAGE

~CLEAR 
 LOGIC_LEVEL;

#### METHOD SET

The method 
 SETprograms 
 the voltage values for high 
 and low levels for the channels driver (VOH, 
 VOL) and the voltage values for the threshold high and low of the 
 channels sensor (THH, 
 THL).

Syntax

##### VIVA 
 LANGUAGE

~SET 
 LOGIC_LEVEL [IH=value], 
 [IL=value], 
 [OH=value], 
 [OL=value],

Detail of parameters

IH=value 
 [-12-+12V, default: 2,4V]

Defines 
 the voltage value for the high level of the channels driver, in Volts.

IL=value 
 [-12-+12V, 
 default: 0V]

Defines 
 the voltage value for the low level of the channels driver in Volts.

OH=value 
 [-12-+12V, default: 1,2V]

Defines 
 the voltage value for the high level of the channels sensor in Volts.

OL=value 
 [-12-+12V, default: 0,8V]

Defines 
 the voltage value for the low level of the channels sensor in Volts.

### LOGIC MODE

#### METHOD CLEAR

The 
 method CLEAR resets 
 the instrument.

It sets the 
 default values (see 
 Errore. L'origine riferimento non stata trovata., 
 in the Appendix A, related to the section SET 
 LOGIC_MODE.

Syntax

##### VIVA 
 LANGUAGE

~CLEAR 
 LOGIC_MODE;

#### METHOD SET

The 
 method SET programs the data flow to the 
 four channels and the connection of the channels with the measurement 
 lines of the ACL module .

Syntax

##### VIVA 
 LANGUAGE

~SET 
 LOGIC_MODE [INP_CH1=DSP|RAM|CLKH_IMM|JTAG], 

[INP_CH3=DSP|RAM|CLK_IMM|JTAG], 
 [INP_CH4=DSP|RAM|CLK_PLL|JTAG],

[OUT1=OUT1|L1], 
 [OUT2=OUT2|L2], [OUT3=OUT3|L3], [OUT4=OUT4|L4]

[CLK_PLL=value], 
 [N_STEP=value], 
 [PERIOD=value];

Detail of parameters

INP_CH1=option|value[DSP|RAM|CLK_IMM|JTAG, default: DSP]

This 
 parameter defines the source or the internal destination of the data of 
 channel CH1: The meaning of the four possible value is:

DSP | 0 
 If parameter 
 BURST of the instruction ~SET 
 LOGIC is 
 OFF, the logic levels of the channel are defined by paramter CHi of the 
 instruction ~SET 
 LOGIC.

If 
 parameter BURST of the instruction ~SET 
 LOGICis 
 ON (DYNAMIC environment of execution), the logic levels of the channel 
 are defined by a sequence of instructions preloaded in the DSP memory. 
 (max 64Kbytes pattern). The channel is bidirectional.

RAM | 1 
 The value 
 RAM for the parameter INP_CH1 is relevant only in the mode BURST (DYNAMIC 
 execution environment). For channel CH1 it indicates that the channel 
 is used as sensor. The measured value is stored in the bit 14 of the DSP 
 RAM reserved for the acqusition buffer of the instrument MEAS_V. In this 
 mode, to activate the reading, start the meter MEAS_V. The channel is 
 always sensor.

CLK_IMM | 2 
 The driver 
 of the channel is programmed to output a synchronic clock with the acquisition 
 clock of the instrument IMM. The channel is always driver.

JTAG | 3 
 The channel 
 is programmed to operate as driver. The datuum procedes from the CLK signal 
 defined in the standard IEEE 1149 related to JTAG technology. (pin JTI0 
 of the JTAG connector present on the ACL module). The channel is always 
 driver.

INP_CH2=option|value[DSP|RAM|CLK_PLL|JTAG, default: DSP]

The 
 parameter defines the source or the internal destination of the data of 
 channel CH2: The meaning of the four possible values of the parameter 
 is:

DSP | 0 
 If the parameter 
 BURST of the instruction ~SET 
 LOGIC is=OFF, 
 the logic levels of the channel are defined with parameter CHi of the 
 instruction ~SET 
 LOGIC.

If 
 the parameter BURST of the instruction ~SET 
 LOGICis=ON 
 (DYNAMIC execution environment), the logic levels of the channel are defined 
 by a sequence of instructions preloaded in the DSP memory. The channel 
 is bidirectional.

RAM | 1 
 The value 
 RAM for the parameter INP_CH2 is relevant only in the BURST mode (DYNAMIC 
 execution environment). For channel CH2, it indicates that the channel 
 is used as sensor. The measured value is recorded in the bit 15 of the 
 DSP RAM reserved for the acquisition buffer of the instrument MEAS_V. 
 In this mode, to activate the reading, start the meter MEAS_V. The channel 
 is always sensor.

CLK_PLL | 2 
 The driver 
 of the channel is programmed to output a synchronic clock with the clock 
 generated by the PLL present on the ACL module. The channel is always 
 driver.

JTAG | 3 
 The channel 
 is programmed to operate as driver. The datuum procedes from the TMS signal 
 defined in the standard IEEE 1149 related to JTAG technology. (pin JTI1 
 of the JTAG connector, present on the ACL module). The channel is always 
 driver.

INP_CH3=option|value[DSP|RAM|CLK_IMM|JTAG, default: DSP]

The 
 parameter defines the source or the internal destination of the data of 
 CH3: The meaning of the four possible values of the parameter is:

DSP | 0 
 If parameter 
 BURST of the instruction ~SET 
 LOGIC is=OFF, 
 the logic levels of the channel are defined with the parameter CHi of 
 the instruction ~SET 
 LOGIC.

If 
 parameter BURST of the instruction ~SET 
 LOGICis=ON 
 (DYNAMIC execution environment), the logic levels of the channel are defined 
 by a sequence of instructions stored in a file and preloaded in the DSP 
 memory. The channel is bidirectional.

RAM | 1 
 The value 
 RAM for parameter INP_CH3 is relevant only in the BURST mode (DYNAMIC 
 execution environment). For channel CH3 it indicates that the channel 
 is used as driver and sensor. The bits 14 and 15 of the RAM reserved for 
 DRA driver are used as driver: the bit 14 is used for the output signal 
 and bit 15 is used to manage the communication Driver/Sensor of the channel. 
 As sensor, the measured 
 value is recorded in the RAM of bit 14 DSP of the acquisition buffer of 
 the instrument MEAS_I. In the mode BURST from RAM, to activate the reading, 
 start synchronically the DRA generator and the meter MEAS_I. The channel 
 is bidirectional.

CLK_IMM | 2 
 The driver 
 of the channel is programmed to output a synchronic clock with the acquisition 
 clock of the instrument IMM. The channel is always driver.

JTAG | 3 
 The channel 
 is programmed to operate as driver. The datuum procedes from the TDI signal 
 defined in the standard IEEE 1149 related to JTAG technology. (pin JTI2 
 of the JTAG connector, present on the ACL module). The channel is always 
 driver.

INP_CH4=option|value[DSP|RAM|CLK_PLL|JTAG, default: DSP]

The 
 parameter defines the source or the internal destination of the data of 
 channel CH4: The meaning of the four possible values of the parameter 
 is:

DSP | 0 
 If parameter 
 BURST of the instruction ~SET 
 LOGIC is=OFF, 
 the logic levels of the channel are defined by parameter CHi of the instruction 
 ~SET 
 LOGIC.

If 
 parameter BURST of the instruction ~SET 
 LOGICis= 
 ON (DYNAMIC execution environment), the logic levels of the channel are 
 defined by a sequence of instructions recorded in a file and preloaded 
 in the DSP memory. The channel isbidirectional.

RAM | 1 
 The value 
 RAM for parameter INP_CH4 is relevant only in the BURST mode (DYNAMIC 
 execution environment). For channel CH4 it indicates that the channel 
 is used as driver and sensor. As driver the bits 14 and 15 of the RAM 
 reserved for driver DRB: the bit 14 is used for the output signal and 
 the bit 15 is used to manage the switching Driver/Sensor of the channel. 
 As sensor, the value read is recorded in the DSP RAM in bit 15 of the 
 acquisition buffer of the instrument MEAS_I. In the mode BURST from RAM, 
 to activate the reading, it is necessary to start synchronically the DRB 
 generator and the meter MEAS_I. The channel is bidirectional.

CLK_PLL | 2 
 The driver 
 of the channel is programmed to output a synchronic clock with the clock 
 generated by the PLL present on the ACL module. The channel is always 
 driver.

JTAG | 3 
 The channel 
 is programmed to operate as sensor. The data procede from the TDO signal 
 defined in the standard IEEE 1149 related to JTAG technology. (pin JTO1 
 of the JTAG connector, present on the ACL module). The channel is always 
 sensor.

OUT_CH1=option|value 
 [NONE|L1, default: NONE]

The 
 parameter defines the connection of channel CH1 with the measurement lines 
 of the ACL module. The possible values of the parameter are:

NONE | 0 
 Channel CH1 
 is not connected to the measurement lines.

L1 | 1 
 Channel CH1 
 is connected to line L1.

OUT_CH2=option|value 
 [NONE|L2, default: NONE]

The 
 parameter defines the connection of channel CH2 to the measurement lines 
 of the ACL module. The possible values are:

NONE | 0 
 Channel CH2 
 is not connected to the measurement lines.

L2 | 2 
 Channel CH2 
 is connected to line L2.

OUT_CH3=option|value 
 [NONE|L3|L5, default: NONE]

The 
 parameter defines the connection of channel CH3 to the measurement lines 
 of the ACL module. The possible values are:

NONE | 0 
 Channel CH3 
 is not connected to the measurement lines.

L3 | 3 
 The channel 
 CH3 is connected to measurement line L3.

L5 | 5 
 The channel 
 CH3 is connected to the measurement line L5

OUT_CH4=option|value 
 [NONE|L4|L8, default: NONE]

The 
 parameter defines the connection of channel CH4 with the measurement lines 
 of the ACL module. The possible values of the parameter are:

NONE | 0 
 Channel CH4 
 is not connected to the measurement lines.

L4 | 4 
 Channel CH4 
 is connected to measurement line L4.

L8 | 8 
 Channel CH4 
 is connected to measurement line L8.

PLL_FREQ=value 
 [1-+10.000.000Hz, default: 500.000Hz]

The 
 parameter definces the frequency of the clock generated by the PLL, present 
 on the ACL module, output by the channel when the parameter INP_CHi of 
 the channel is CLK_PLL.

N_STEP=value 
 [0X0000-0XFFFF, default: 0X0000]

The 
 parameter defines the dimension of the file which contain the 
 instructions preloaded in the DSP memory. The 
 parameter is expressed with a hexadecimal number, value range: 0001-FFFF.

The 
 default value for N_STEP is 0, meaning STATIC environment with instructions 
 in the memory of the main PC.

PERIOD=value 
 [0,000005-1, 
 default: 0,0000016sec]

In 
 the STATIC environment, the parameter defines the delay time between the 
 activation of the detection of the channel status.

In 
 the DYNAMIC environment, the parameter defines the scan time of the instructions 
 preloaded in the DSP memory. In this mode, the parameter defines the execution 
 speed of the patterns.

The following 
 figures show the data flow and the connection of channel CH3 
 in the DYNAMIC environment.

Fig.Errore. Nel documento non esiste testo 
 dello stile specificato.2- ACL module: CH3 burst from DSP-RAM 
 Fig. Errore. 
 Nel documento non esiste testo dello stile specificato.3 - ACL module: CH3 burst from 
 DRA-RAM

Fig.Errore. Nel documento non esiste testo 
 dello stile specificato.4- ACL module: CH3 burst from CKH1 
 Fig. Errore. 
 Nel documento non esiste testo dello stile specificato.5 - ACL module: CH3 burst from 
 JTAG

### LOGIC

#### METHOD CLEAR

The 
 method CLEAR resets 
 the instrument. Sets 
 the default values 
 (see Errore. L'origine riferimento non stata trovata., 
 in the appendix A), related to the section SET 
 LOGIC.

Syntax

##### VIVA 
 LANGUAGE

~CLEAR 
 LOGIC;

Syntax

##### VIVA 
 LANGUAGE

~SET 
 LOGIC [CH1=IL|IH|ML|MH|OL|OH|OM], 
 [CH2= IL|IH|ML|MH|OL|OH|OM],

[CH3= 
 IL|IH|ML|MH|OL|OH|OM], [CH4= IL|IH|ML|MH|OL|OH|OM],

[BURST=OFF|ON];

Detail of parameters

CHi=option|value 
 [IL|IM|ML|MH|OL|OH|OM, default: IL]

The 
 parameter indicates the operating mode of the channel (driver or sensor) 
 and the corresponding logic levels (0 or 1). The possible values for CHi 
 are: CH1, CH2, CH3 and CH4 and for each channel the meaning of the four 
 possible values of the parameter is:

IL | 0 
 The channel 
 is programmed to operate as driver. The driver is forced to a logic level=0, 
 i.e. the voltage value defined with parameter VOL with the instruction 
 ~SET 
 LOGIC_LEVEL. The channel is programmed to operate in controlled mode. 
 In other words, after activated the driver, the channel is switched to 
 sensor to check that the level forced with the driver has been reached. 
 On the channel switched to sensor, the reading is made after the time 
 defined by parameter PERIOD.

IH | 1 
 The channel 
 is programmed to operate as a driver. On the driver is forced the logic 
 level 1, i.e. the voltage value is defined by the parameter VOH with the 
 instruction ~SET 
 LOGIC_LEVEL. The channel is programmed to operate in controlled mode. 
 In other words, after activating the driver, the channel is switched to 
 sensor to check that the level forced with the driver is reached. On the 
 channel switched to sensor the reading is made after the time defined 
 by parameter PERIOD.

ML | 4 
 The channel 
 is programmed to operate as driver. On the driver it is forced the logic 
 level 0, i.e. the voltage value defined with parameter VOL ( instruction 
 ~SET 
 LOGIC_LEVEL). The channel is programmed to operate in non controlled 
 mode. In other words, after activating the driver it is not checked 
 if the level forced by the driver has been reached.

MH | 5 
 The channel 
 is programmed to operate as driver. On the driver is forced the logic 
 level 1, i.e. the voltage value defined by the parameter VOH with the 
 instruction ~SET 
 LOGIC_LEVEL. The channel is programmed to operate in non controlled 
 mode. In other words, after activating the driver, it is not checked 
 if the level forced by the driver has been reached.

OL | 2 
 The channel 
 is programmed to operate as sensor. On the sensor is checked the presence 
 of the logic level 0, i.e. a voltage value lower or equal to the value 
 defined by the parameter THL with the instruction ~SET 
 LOGIC_LEVEL.

OH | 3 
 The channel 
 is programmed to operate as sensor. On the sensor is checked the presence 
 of logic level 1, i.e. a voltage value higher or equal to the value defined 
 by the parameter THH with the instruction ~SET 
 LOGIC_LEVEL.

OM\ 6 
 The channel 
 is programmed to operate as sensor. On the sensor, it is not checked the 
 presence of a logic level, i.e. the channel is not in driver 
 mode; for the test system the channel is in tristate.

BURST=option|value 
 [OFF|ON, default: OFF]

The 
 parameter defines the execution environment of the functional program 
 for the channel. A functional program may be executed in STATIC or DYNAMIC 
 environment.

In 
 the STATIC environment the program is made up by instructions stored in 
 the memory of the Main PC, executed in sequence one at once.

In 
 the DYNAMIC environment, the program is first preloaded in the DSP memory 
 (which manages the ACL module) and then executed in the BURST mode, i.e. 
 like a unique block of instructions. To be executed in the DYNAMIC mode, 
 the program can be preloaded in two different areas of the memory: either 
 in an area of the memory reserved to the program or in an area of the 
 memory reserved to DRA and DRB generators. The possible values for parameter 
 BURST are:

OFF | 0 
 Defines the 
 STATIC execution environment. The channels are managed using the values 
 specified by parameter CHi of the instruction 
 ~SET 
 LOGIC stored in the memory of the Main PC.

ON | 1 
 Defines the 
 DYNAMIC execution environment. If the program has been preloaded in the 
 area reserved to the program, or pattern file, it starts the program execution. 
 If the program has been preloaded in the area reserved to DRA and DRB 
 generators the program starts with the generators, synchronic with the 
 starting of the meters

SW1 | 3 
 It is generated the trigger signal software SW1, synchronic to the starting 
 of the program preloaded in the area reserved to the program, or pattern 
 file.

#### METHOD MEASURE

The 
 method MEAS 
 measures/checks 
 the status of the four digital channels present on the ACL module.

Syntax

~MEAS 
 LOGIC [INTO variable];

Detail of parameters

INTO 
 variable 
 Indicates the variable where is inserted the measured value. If no variable 
 is specified, the result of the measurement is inserted in the variable 
 AR. The parameter variable is a word. Its 16 bits are used to 
 describe the status of the four digital channels of the instrument LOGIC. 
 The bits of the less relevant byte, from BIT0 to BIT7, are used to describe 
 the programming status sent to instrument LOGIC with the instruction 
 SET 
 LOGIC. The 
 bits of the most relevant byte, from BIT8 to BIT15, are used to describe 
 the status detected on the 4 digital channels when the instruction 
 MEAS 
 LOGIC.

BIT[1:0] 
 Indicates 
 the last programming executed for channel CH1:

00: CH1 programmed as 
 driver, forced to low logic level.

01 CH1 programmed 
 as driver, forced to high logic level.

10: 
 CH1 programmed as sensor, to check the presence of a low logic level.

11: CH1 programmed as 
 sensor, to check the presence0 of a high logic level.

BIT[3:2] 
 Indicates 
 the last programming executed for channel CH2:

00: CH2 programmed as 
 driver, forced to low logic level.

01 CH2 programmed 
 as driver, forced to high logic level.

10: CH2 programmed as 
 sensor, to check the presence of a low logic level.

11: CH2 programmed as 
 sensor, to check the presence of a high logic level.

BIT[5:4] 
 Indicates 
 the last programming executed for channel CH3:

00: CH3 programmed as 
 driver, forced to low logic level.

01 CH3 programmed 
 as driver, forced to high logic level.

10: CH3 programmed as 
 sensor, to check the presence of a low logic level.

11: CH3 programmed as 
 sensor, to check the presence of a high logic level.

BIT[7:6] 
 Indicates 
 the last programming executed for channel CH4:

00: CH4 programmed as 
 driver, forced to low logic level.

01 CH4 programmed 
 as driver, forced to high logic level.

10: CH4 programmed as 
 sensor, to check the presence of a low logic level.

11: CH4 programmed as 
 sensor, to check the presence of a high logic level.

BIT[9:8] 
 Indicates 
 the status detected on channel CH1:

10: CH1 has been detected 
 to a low logic level.

01 CH1 has 
 been detected to a high logic level.

11: CH1 has been detected 
 to a value lower thant the high logic level and higher than the low logic 
 level.

00: CH1 has been detected 
 at the same time lower than the low logic level and higher than the high 
 logic level. This is an error condition (*) since 
 it is not possible to assiciate a logic level to the detected signal.

BIT[11:10] 
 Indicates 
 the status detected on channel CH2:

10: CH2 has been detected 
 to a low logic level.

01 CH2 has 
 been detected to a high logic level.

11: CH2 has been detected 
 to a value lower than the high logic level and higher than the low logic 
 level.

10: CH2 has been detected 
 at the same time lower than the low logic level and higher than the high 
 logic level. This is an error condition (*) since 
 it is not possible to associate a logic level to the signal detected.

BIT[13:12] 
 Indicates 
 the status detected on channel CH3:

10: CH3 has been detected 
 to a low logic level.

01 CH3 has 
 been detected to a high logic level.

11: CH3 has been detected 
 at a value lower than the high logic level and higher than the low logic 
 level.

00: CH3 has been detected 
 at the same time lower than the low logic level and higher than the high 
 logic level. This is an error condition (*) since 
 it is not possible to associate a logic level to the signal detected.

BIT[15:14] 
 Indicates 
 the status detected on channel CH4:

10: CH4 has been detected 
 at a low logic level at a low logic level.

01 CH4 has 
 been detected at a high logic level.

11: CH4 has been detected 
 at a value lower than the high logic level and higher than the low logic 
 level.

00: CH4 has been detected 
 at the same time lower than the low logic level and higher than the high 
 logic level. This is an error condition (*) since 
 it is not possible to associate a logic value to the signal detected.

(*) 
 Condition which takes place when the 
 distance between the values OH 
 and OL previously set with 
 the methos SET 
 LOGIC_LEVEL is too low.

Or, 
 condition which takes place always if it is programmed an OH 
 value lower than OL value; 
 always using the method SET LOGIC_LEVEL.