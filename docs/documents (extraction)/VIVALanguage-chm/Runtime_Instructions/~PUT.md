# ~PUT 

# 

# 

# 

________________________

### Syntax

~PUT 
 driver name" parameters ;

~PUT 
 "object" [STRING] NAME="Name" 
 [GROUP="Groupname"] [VAL=variable]; 

~PUT 
 "object" [STRING] "Name" 
 [GROUP="Groupname"] variable; 

"driver name" is 
 the name of a generic VIVA driver name See Viva 
 drivers.

object: PARAmeter

one of the parameter of the current macro

object:MEMO

one of memo parameter of the current macro

object:GLObal

one of the global variable of VIVA

object:LOCal

one of the local variable of VIVA

object:MAILbox | SYStem

one of the networking variable of VIVA 

if GROUP is nor specified will be used the VARIABLE section

object: PINLIST

one of the pinlist parameter of the current macro 

e result will be return in array as a list of channel

STRING

specified the the object are a string by default are float

GROUP="groupname"

specified the name of section where the object to the setted is contained 
 meanfull only for MEMO and MAILBOX

VAL =value

specified the value to be assigned to the object.

__________________________

### Note

 - The 
 MEMO ,MAILBOX are always string .

 - the 
 variable can't 
 be omitted 

 - The 
 PINLIST must 
 be received into an ARRAY ; 

 - if 
 the keyword NAME and VAL are omitted the 
 order must be "Name" the variable

__________________________

### See 
 also 

~GET

__________________________

### Examples

~put example 

One of the standard methods of VIVA's proprietary 
 drivers. See Viva drivers.

or one of the external object 
 of VIVA language

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: ?

&#169;2008 
 Seica S.p.a - All rights reserved