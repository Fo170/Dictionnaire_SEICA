# ~SET VBNPOD 

# 

# 

________________________

### Syntax

~SET 
 VBNPOD n 
 FR=value 
 OL=value 
 OH=value IH=value IL=value

 TDI=Channel 
 TMS=Channel CLK=Channel 
 TDO=Channel TRST=Channel 
 VCC=Channel 
 GND=Channel 

 F50|ACLAM|MIS32|TEMENTO RESTART 
 8L 4L ;

~SET VBNPOD 
 TEMENTO CLOSE PRoJECT=projectname 
 CONNECT=conectionname; 

 FR=value
Clock 
 frequency to be programmed (ACLAM only)

IL=value
Low 
 value to be used for driving

IH=value
High 
 value to be used for driving

OL=value

Low value to be used for sensor

OH=value
High 
 value to be used for sensor

channel
channel 
 to the connected to the BOUNDARY SCAN function 

ACLAM
use 
 the 4 digital channels as TAP hardware

F50

use any of 8 pin group of a F50 hardware as TAP controller 

MIS32

use any 
 P32 digital channels as TAP hardware 

TEMENTO

use the Temento hardware 
 and software to drive the chain

projectname

directory e name of the project if not specified it will search for 
 a project

with the same name of the directory

if no \ symbol in the name it will search for the project with the projectname 
 specified (TEMENTO only)

connectionname

name of the connection to be used (TEMENTO 
 only)

CLOSE

it will close the connection and disconnect the POD (TEMENTO 
 only)

4L

to be used on 4 line system and digital pod (F50)

8L

Allow 
 to split the line in a 4 line system (ACLAM 
 only)

RESTART
restart 
 the TAP state machine ad every pattern

n
identify 
 the chain to be used 

__________________________

### Note

### After 
 the SET VBNPOD instruction the pin 
 of the component in the chain will act exactly as 
 a digital channel, so the commands IL, IH, OL, OH, OM can be used.

### The Declare BSCAN instruction 
 generates automatically two identifiers for each cell of the component; 
 one identifier is composed by the name of the component in the chain and 
 the number of pin 
 separated by an underscore (example U1_13), while the second identifier 
 is composed by the name of the component in the chain and the name of 
 the pin declared in the BSDL file of the component separated by an underscore 
 (example U1_ADD16).

__________________________

### Note

### When using 8L with ACLAM 
 on a 4 line system: 

 * ### CLK 
 signal will be on the LI1 and the channel must be any odd number channel

 * ### TDI 
 signal 
 will be on the LI2 and the channel must be any odd number channel

 * ### TMS 
 signal 
 will be on the LI3 if the channel is an odd number, or LI5 if it is an 
 even number

 * ### TDO 
 signal 
 will be on the LI4 if the channel is an odd number, or LI8 if it is an 
 even number

 * ### TRST/RST 
 signal 
 will be on the LI6 driven by DRC

 * ### VCC 
 used to short the TRST signal with VCC on LI6 instead of using DRC

 * ### GND 
 used to 
 connect the system ground on line LI7

### This line arrangement 
 leaves some free lines for pin testing.

__________________________

### See 
 also 

~TEST_VBN

~READ_VBN 

__________________________

### Examples

~SET VBNPOD example 

Connect a Boundary scan POD to the TAP 
 of the boundary scan.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 
 ACLAM,MIS32,F50

&#169;2008 
 Seica S.p.a - All rights reserved