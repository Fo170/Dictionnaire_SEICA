# ~SET DIGIPLEX 

# 

# 

________________________

### Syntax

~SET 
 DIGIPLEX ;

 Enable 
 the technique 

~CLEAR 
 DIGIPLEX ;

 Disable 
 the technique and 
 free the resource used by

~SET 
 DIGIPLEX FREE|HOLD 
 L1|L2|L3|L4|NONE ;

 Advanced 
 use to free 1 analog linee 

~SET 
 DIGIPLEX PULL UP|DOWN 100|1K|10K|100K|1M ;

 Automatically 
 connect the specified resistor on the outputs during the test

~SET 
 DIGIPLEX LOAD V=volt i=ampere;

 Automatically 
 connect the specified load on the outputs during the test

 V=value
Voltage for the load 0 to 100v

I=value
Current for of the load 0 to 100ma

PULL
set the pull mode (on line 4)

LOAD
set 
 the load mode (on line 4) 

UP|DOWN
connect 
 the pull to the internal VCC(+5v) or gnd 

100|1k|10k|100K|1M
select thevalue of the pull resistor

HOLD
inhibit the use of the specified line

FREE
free temporanous the specified line for analog test 

L1|L2|L3|L4
specified line

__________________________

### Note

* ENDTEST FLOAT; Implied 
 a clear DIGIPLEX;

* DIGIPLEX my be enabled automatically by on option onto the 

MAINTENANCE

 BOARD 
 OPTION

 FUNCTIONAL

 DIGIPLEX

in this case it will take place at the first need 

(digital pattern with a non digital channel involved)

* all the line will be used in a random mode unless the an HOLD command 
 will be issue.

* the PULL or LOAD mode override the HOLD mode. and will use the DRB 
 or DRC or PULL

__________________________

### See 
 also 

DIGIPLEX

__________________________

### Examples 

Enable the use of the DIGIPLEX tecnique 
 e setup tit's option 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

SCA64 ACLAM

&#169;2008 
 Seica S.p.a - All rights reserved