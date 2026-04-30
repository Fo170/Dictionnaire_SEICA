LINE_EXT

Syntax

~CLEAR 
 LINE_EXT;

#### METHOD SET

Syntax

The method 
 SET 
 defines the connection to an 
 external analog measurement bus.

~SET 
 LINE_EXT 
 [OUT=option] 
 [TIME_RELE=option]

Detail of parameters

OUT=option|value 
 [NONE|L1|L2|L3|L4|L5|L6|L7|L8|, 
 default: OPEN]

Defines 
 which internal lines of the ACL module are connected to a possible bus 
 of external analog measurement lines. The possible values of the parameter 
 are:

OPEN | 0XFF 
 All the 8 
 lines of the ACL module are disconnected from the external bus.

L1 | 0XFE 
 The line L1 
 of the ACL module is connected to the external bus.

L2 | 0XFD 
 The line L2 
 of the ACL module is connected to the external bus.

L3 | 0XFB 
 The line L3 
 of the ACL module is connected to the external bus.

L4 | 0XF7 
 The line L4 
 of the ACL module is connected to the external bus.

L5 | 0XEF 
 The line L5 
 of the ACL module is connected to the external bus.

L6 | 0XDF 
 The line L6 
 of the ACL module is connected to the external bus.

L7 | 0XBF 
 The line L7 
 of the ACL module is connected to the external bus.

L8 | 0X7F 
 The line L8 
 of the ACL module is connected to the external bus.

The 
 lines from L1 to L8 are associated to the bits, from bit0 to bit7, of 
 the value which can be assigned to the paramter OUT. The value 0 of a 
 bit defines the connection of the line associated to the external bus. 
 Using the sintax which schedules to assign a numeric value to the parameter, 
 it is possible to connect more than one line to the external bus. For 
 example, the value 0XF8 defines the connection of the lines L1, L2 and 
 L3 to the external bus.

TIME_RELE=option|value 
 [ON|OFF, default: ON]

Defines 
 if the output of the instruction ~SET 
 LINE_EXT must 
 wait the switching time of the relays used to program the instrument. 
 The possible values of the paramter are:

ON 
 Before the 
 exit from the command, its waited the switching time of the relays

OFF 
 After programming, 
 the switching time of the relays is not waited before the exit from the 
 command.

The 
 parameter can be useful in case of sequential programming of different 
 instruments: all the programmings but the last, can be executed with this 
 parameter set to OFF, only the last one must be executed with this parameter 
 set to ON.