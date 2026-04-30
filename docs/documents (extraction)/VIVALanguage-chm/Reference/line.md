### LINE

&#160;

&#160;

 #### METHOD CLEAR

&#160;

The method CLEAR, deactivates the instrument LINE and disconnects it from the measurement line.

It sends a reset command to set the instrument parameters to the default values. (See Tab. 51, in Appendix A.

&#160;

&#160;

&#160;

Syntax

 ##### VIVA LANGUAGE

&#160;

~CLEAR LINE;

&#160;

&#160;

&#160;

&#160;

 #### METHOD SET

&#160;

The method SET defines the programming with 4 or 8 internal measurement lines and the connection to the analog bus of the system measurement lines.

&#160;

&#160;

Syntax

 ##### VIVA LANGUAGE

&#160;

~SET LINE&#160;&#160;&#160;&#160;&#160;&#160;&#160; [OUT=option] [MODE=option] [INT_LINEE=option] [TIME_RELE=option] [IN=option]

&#160;

Detail of parameters

&#160;

OUT=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [OPEN|1_4_CLOSE|5_8_CLOSE|CLOSE, default: CLOSE]

Defines the internal lines of the ACL module which will be connected to the system analog lines bus. The possible values of the parameter are:

OPEN | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; All the 8 internal lines of the ACL module are not connected to the system analog bus.

1_4_CLOSE | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The lines L1, L2, L3 and L4 are connected to the system analog bus.

5_8_CLOSE | 2&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The lines L5, L6, L7 and L8 are connected to the system analog bus.

CLOSE | 3&#160;&#160;&#160;&#160;&#160;&#160; All the 8 measurement lines of the ACL module are connected to the system analog bus.

&#160;

MODE=option|value&#160;&#160;&#160;&#160;&#160;&#160; [8L|4L, default: 4L]

Defines the management mode of the ACL module internal measurement lines. The possible values are:

8L | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The ACL module is programmed to operate with 8 measurement lines.

4L | 1&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; The ACL module is programmed to operate with 4 measurement lines. The line L1 is connected with line L5, the line L2 is connected to line L6, the line L3 is connected with line L7 and line L4 is connected to line L8,

&#160;

INT_LINEE=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [MEAS_I|L1-ALL|L5_ALL|ALL, default: ALL]

Defines the internal management mode of the measurement lines L1 e L5. The possible values for this parameter are:

MEAS_I | 0&#160;&#160;&#160; On lines L1 and L5 can be connected only the instrument MEAS_I, all the other instruments are disconnected from L1 and L5.

L1_ALL | 1&#160;&#160;&#160;&#160; The line L1 is enabled to be connected with all the instruments.

L5_ALL | 2&#160;&#160;&#160;&#160; The line L5 is enabled to be connected with all the instruments.

ALL | 3&#160;&#160;&#160;&#160;&#160;&#160; The lines L1 and L5 are enabled to be connected with all the instruments.

.

&#160;

TIME_RELE=option|value&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; [ON|OFF, default: ON]

Defines if the output of the instruction~SET LINEmust wait the switching time of the relays use to program the instrument. The possible values of the parameter are:

ON | 0&#160;&#160;&#160;&#160;&#160;&#160;&#160; Before the exit from the command, its waited the switching time of the relays

OFF | 1&#160;&#160;&#160;&#160;&#160;&#160; After programming, the switching time of the relays is not waited before the exit from the command.

The parameter can be useful in case of sequential programming of different instruments: all the programmings but the last one, may be executed with this parameter set to OFF, only the last one must be executed with this parameter set to ON.

The default value of the parameter TIME_RELE is ON.

&#160;

 #### METHOD CLEAR

The method CLEAR&#160; deactivates the instrument LINE_EXT disconnecting it from the measurement lines.

It sends the instrument a reset command which sets its parameters to the default value. (see Tab. 51, in the Appendix A).

&#160;

&#160;