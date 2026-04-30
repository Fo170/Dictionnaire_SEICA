# BGU file

Under construction.

________________________

### General Rules

### 

________________________

### Keywords

The first field specifies the type and the name of the element to update; 
 the options for the first field are listed here below:

|BOARD=name

Meaning that the options stated in this instruction are valid for all 
 the elements listed in this file; this instruction is useful to assign 
 defaults.

|SIGNAL=name

Meaning that the options stated in this instruction are valid for all 
 the elements with the specified signal name.

|CHANNEL=name

Meaning that the options stated in this instruction are valid only for 
 the channel node; 

|COMPONENT=name

Meaning that the options stated in this instruction are valid for all 
 the node with the same component name 

|NODE=name-pin

Meaning that the options stated in this instruction are valid only for 
 the node specified

|OPTION=name

LOOP=Y enable a special checking 
 of the loop situation

RETRY=Y enable to reprobe after 
 a fault are found

STOP_ONFAULT=Y stop the diagnose 
 analisis after a fault was found

DETAIL=Y/F select the amount 
 of detail to be written during diagnose

PATH=N assume the path integrity 
 are not to check

PROMPT=N do not request probing 
 on unnecessary pin

The other fields that can be changed are the following:

|MES=message 
 or

|MSG=message

This message will be shown when using the probe, so it should be a message 
 that helps the operator find the place where he needs to go probing.

The message can contain up to 100 characters.

|DIA=message

This is an additional message 

The message can contain up to 100 characters.

|PINName=name

|VERIFY=pattern

|TYPE=pinType

|TL=value

|TH=value

|WINdow=number

|MODE=option

The options available are:

- ANA for an analog node

- DIG for a digital node

|PROBE=option

The options available are:

- X1 

- X2

- X10

- FINal

- WINdow

- GLItch

- EDGe

- L200

- HIDden

You can state more that one option, but every option must be indicated 
 with PROBE=.

|DEPEN=list

list of node that concurrent to generate the referred node (dependency)

|ACTive=

node,H/L(,node,H) state of the node or order to calc the driving state 
 of the referred node

ALWAYS,NEVER,WEAK

__________________________

### Note

__________________________

### See 
 also 

Links

__________________________

### Examples

Links