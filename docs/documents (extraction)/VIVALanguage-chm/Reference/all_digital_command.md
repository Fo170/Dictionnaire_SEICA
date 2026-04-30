# Digital Command 

# 

# 

# 

________________________

### Syntax

COMMAND 
 pinlist ; 

COMMANDn 
 pinlist ; 

COMMAND 
 group=value;

COMMANDn 
 group=value;

COMMAND
 defines 
 the digital state of the channel

pinlist
any 
 channel, signal,number or group separate by colon or space

value
will 
 change the value of the group of channels; the LSB bit of the value is 
 assigned to the first channel of the group. 

n
Specifies 
 the phase or window to be used

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description 

IL

D

L

S

Nret

0

0
drive 
 low

IH

D

H

S

Nret

0

0
drive 
 high

IG

D

value

S

Nret

0

0
drive 

ML

D

L

M

Nret

0

0
drive 
 low mask

MH

D

H

M

Nret

0

0
drive 
 high mask

MG

D

value

M

Nret

0

0
drive 
 mask

OL

S

L

S

--

-

1
sense 
 low

OH

S

H

S

--

-

1
sense 
 high

OG

S

value

S

--

-

1
sense 

OM

S

--

M

--

-

1
mask 
 (default)

OM0

S

--

M

--

-

0
sense 
 at the end of the pattern

OMn

S

--

M

--

--

n
sense 
 at the strobe or window

ALn

D

L

S*

Assert

n

0
go 
 low at the assert phase

AHn

D

H

S*

Assert

n

0
go 
 high at the assert phase

AGn

D

value

S*

Assert

n

0
at 
 the assert phase

ASn

D

T

S*

assert

n

0
the 
 channel will change at the assert 

OLn

S

L

S

--

-

n
sense 
 low ad window time

OHn

S

H

S

--

-

n
sense 
 High ad window time

Pn

D

L

S

Rzero

n

0
toggle 
 at assert and return phase

Pn

D

H

S

Rone

n

0
toggle 
 at assert and return phase

Cn

D

L

M

Rzero

n

0
toggle 
 at assert and return phase mask

Cn

D

H

M

Rone

n

0
toggle 
 at assert and return phase mask

R1

--

--

--

Rone

--

--
set 
 mode to Rone

R0

--

--

--

Rzero

--

--
set 
 mode to Rzero

RZ

--

--

--

Rzeta

--

--
set 
 mode to Rzeta (tristate)

CR

--

--

--

Continuous

--

--
mode 
 clock repeatitive

NR

--

--

--

1 
 pulse

--

--
set 
 mode to toggle 1 pulse (default)

HI

--

H

--

--

--

--
change 
 only the hi-low bit

LO

--

L

--

--

--

--
change 
 only the hi-low bit

GR

--

value

--

--

--

--
change 
 only the hi-low bit

IN

D

--

--

--

--

--
change 
 only the drive-sense bit

OU

S

--

--

--

--

--
change 
 only the drive-sense bit

ZL

--

--

S

--

--

--
change 
 only the mask-sense bit

ZZ

--

--

M

--

--

--
change 
 only the mask-sense bit

ZH

--

--

M

--

--

--
change 
 only the mask-sense bit

ZG

value

--

--

--

-

1
change 
 the mask

Mode return zero

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

IL-AL

D

L

S

hold

0

0

stable 
 low

IH-AH

D

H

S

Rzero

0

0
positive 
 pulse

ML

D

L

M

hold

0

0
stable 
 low mask

MH

D

H

M

Rzero

0

0
positive 
 pulse mask 

Mode return one

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

IL-AL

D

L

S

Rone

0

0

negative 
 pulse

IH-AH

D

H

S

Hold

0

0
stable 
 high

ML

D

L

M

Rone

0

0
negative 
 pulse mask

MH

D

H

M

Hold

0

0
stable 
 high mask 

Mode return zeta

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

IL-AL

D

L

S

Nzeta

0

0

drive 
 low and return tristate

IH-AH

D

H

S

Nzeta

0

0
drive 
 high and return tristate

ML

D

L

M

Nzeta

0

0
drive 
 low and return tristate mask

MH

D

H

M

Nzeta

0

0
drive 
 high and return tristate mask 

Mode digital L200

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

IL-AL

D

L

S

--

--

0

format 
 with the last phase

IH-AH

D

H

S

--

--

0
format 
 with the last phase

ML

D

L

M

--

--

0
format 
 with the last phase

MH

D

H

M

--

--

0
format 
 with the last phase

OL

S

L

S

--

--

--
sense 
 with the last window

OH

S

H

S

--

--

--
sense 
 with the last window

PHn

--

--

--

--

n

--
select 
 the phase 

WIn

--

--

--

--

--

n
select 
 the window

Mode digital S700

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

IL

D

L

S

--

--

0

format 
 with the last phase

IH

D

H

S

--

--

0
format 
 with the last phase

ML

D

L

M

--

--

0
format 
 with the last phase

MH

D

H

M

--

--

0
format 
 with the last phase

OL

S

L

S

--

--

--
sense 
 with the last window

OH

S

H

S

--

--

--

sense with 
 the last window

ILn

D

L

S

--

n

0

last format with the n phase

IHn

D

H

S

--

n

 0

last format with the n phase

MLn

D

L

n

--

n

0

last format with the n phase

MHn

D

H

n

--

n

0

last format 
 with the n phase

OLn

S

L

n

--

--

n

sense low with the n window

 OHn

S

H

n

--

--

n

sense high with the n window

 PU

 D

--

--

RZ/RONE

--

0

pulse with the last format and the last phase

 NP

 D

--

--

NRET

--

0

no pulse assert with last phase

 PP

D

H

--

RZERO

--

0

positive pulse with last phase

 PN

 D

L

--

RONE

--

0

negative pulse with last phase

PUn

D

--

--

RZ/RONE

n

0

pulse with the last format with the n phase

 NPn

 D

 --

--

 NRET

 n

0

no pulse assert with n phase

PHn

--

--

--

--

n

--

select 
 the phase 

WIn

--

--

--

--

--

n
select 
 the window

Digital 
 T964 only

Command

D/S

L/H

M/S

FORMAT

PHASE

WINDOW

Description

OB

S

--

S

--

--

0

Output between (tristate) 

OV

S

--

S

--

--

0
Output valid ( not tristate)

OC

S

--

M

--

--

0
Output crc 

__________________________

### Note

A masked channel will continue to store the value in memory at the window 
 specified (end of pattern for driver) but does not generate an error.

All the commands can be combined or overloaded before the instruction 
 PATTERN and then are executed. 

Phase 0 is the beginning of the pattern. 

Window 0 is at the end of the pattern.

The single bit command HI-LO-IN-OU-ZL-ZH within the L200 mode and normal 
 mode

will also clear the PHASE and WINDOW

The new mode S700 (available only from version 2.4.0)

fully split the use 
 the bit mode and all the command allow to specified the window or phase.

using this method allow to define the format and the timing only once 
 at the beginning

and after write only pattern with single command like HI-LO-IN-OU-ZL-ZH-IL-IH-OL-OH-OM-ML-MH

and inherit the format and the window and phase 

__________________________

### See 
 also 

__________________________

### Examples

These instructions 
 are used to program the digital dynamic channels. 

Preprocessor R Runtime : Dynamic R 
 Static 

Modules: F40,MIS32,T964

&#169;2008 
 Seica S.p.a - All rights reserved