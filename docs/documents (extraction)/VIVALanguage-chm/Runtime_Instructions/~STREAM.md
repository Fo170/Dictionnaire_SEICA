# ~STREAM n 
 ADD|DEL|SEL|GET|CLEAR|RESET device ;

# 

# 

# 

__________________________

### Syntax

~Stream 
 [n] [action] 
 device,[...device]; 

~Stream 
 STREAM=expression [action] 
 device,[...device]; 

~Stream 
 [n] [action] DEVICE=expression; 

~Stream 
 [n] GET DEVICE=0; 
 (return in the system register STRDEV the number of device attached 

n

Number range 1 to 9, defines the number of the device to operate on 
 (default n=1)

action

ATTach|ADD attach the 
 following list of devices to the selected stream

DETach|DEL detach 
 the following list of devices from the selected stream

SELect select the specified 
 stream (no attach or detach)

CLEAR detach all device from the selected 
 stream

RESET clear all the streams 
 and add device to the default 
 stream (see default)

GET|GET_DEV return information of 
 the device attached to the selected stream into STRDEV reg.

(default) detach all devices then attach the list of devices to the 
 select stream 

GET_STR return the stream with the 
 specified device attached

devices

TERMinal the user virtual terminal

REPOrt | DIAGnostic 
 the diagnostic report

PRINter the direct write to the printer 

IEEE the ieee bus, if 
 open

FILE the file 1, 
 if open 

FILEn the file n, if open (n 
 ranges from 1 to 7 see ~FILE) 

WINn n=1 
 to 9, selects as output a window of the new terminal

EDITn n=1 to 9, selects as input 
 an edit field of the new terminal

LAST last attached (only 
 for GET and DEL)

many return to how many streams the 
 device is attached (l200 emulation)

DEVICE=expression
Allows 
 to pass the device using a register 

DEVICE=1 TERMinal 

DEVICE=2 PRINter the direct write 
 to the printer

DEVICE=3 REPOrt | DIAGnostic 
 the diagnostic report

DEVICE=4 LOG VIVA log file (append 
 mode)

DEVICE=5 IEEE the ieee 
 bus if open

DEVICE=11:19 FILE 
 the file 1:9 

DEVICE=21:29 WIN 
 the 
 window terminal 1:9

DEVICE=31:39 EDIT 
 the 
 edit terminal 1:9

DEVICE=139:145 FILE the 
 file 1:7 (L200 EMULATION) 

STREAM=expression

Allow to specify the stream using a register

STREAM=1:9 stream 1:9

STREAM=129:134 stream 1:6 
 (L200 EMULATION) 

$OPERATOR stream 11 by default 
 attached to terminal

$REPORT stream 12 by default 
 attached to report

$S2KLOG stream 10 by default 
 attached to VIVA log file (append mode)

$DIAGNOSTIC stream 13 by default 
 attached to terminal and to the report

__________________________

### Note

If the ~STREAM instruction is not specified, 
 by default the selected stream is $OPERATOR with only the terminal attached.

 The device must be specified 
 for last. 

### 

### See 
 also 

~WRITE

__________________________

### Examples

~Stream example 

Redefine the outputs of ~WRITE, 
 to other devices instead of the default device Terminal.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved