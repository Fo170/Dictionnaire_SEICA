# ~DIG_TX / 
 DIG_TX

# 

# 

# 

________________________

### Syntax

~DIG_TX 
 TDI=value TMS=value N=value 
 START|PREPARE 
 pinlist 
 ; 

~DIG_TX 
 DATA=value DATAN=value N=value 
 START|PREPARE 
 pinlist 
 ; 

pinlist

since there a complete logic every group of 8 channel the pinlist is 
 used 

to indentify the pulse generator to program 

 START 

Force both shift register start immediately

 PREPARE

setup the shift registerr for starting syncro with the dynamic burst

TDI|DATA=value

set the data to be shifted by the first shift register

TMS|DATAN=value

set the data to be shifted by the second shift register

N=value

set the number of shifted 

max 16

__________________________

### Note

All the shift register as shift clock the 
 corresponding pulse generator

so using the shift register will effect 
 the use of the pulse generator. 

__________________________

### See 
 also 

~DIG_CLOCK

~CHMODE

__________________________

### Examples

~CHMODE example 

~TX allow to program the internal shift 
 register of the f50

2 shift register (16 bit) every 8 channels

Preprocessor * Runtime 
 : Dynamic 
 R Static R

Modules: F50

&#169;2008 
 Seica S.p.a - All rights reserved