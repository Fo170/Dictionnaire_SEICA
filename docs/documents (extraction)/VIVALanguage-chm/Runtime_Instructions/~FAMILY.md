# ~FAMILY 

# 

# 

# 

________________________

### Syntax

~FAMILY 
 family pinlist, family pinlist ;

family

Defines the family of channels identified in the PINLIST parameter. 
 It can have the following values:

DRIVERA Channels belonging to 
 the list indicated by PINLIST will have setting values IL and IH defined 
 by the previous instruction ~LEVELA or ~CHLEV.

DRIVERB Channels belonging to 
 the list indicated by PINLIST will have setting values IL and IH defined 
 by the previous instruction ~LEVELB or ~CHLEV.

SENSORA Channels belonging to 
 the list indicated by PINLIST will have setting values OL and OH defined 
 by the previous instruction ~LEVELA or ~CHLEV.

SENSORB Channels belonging to 
 the list indicated by PINLIST will have setting values OL and OH defined 
 by the previous instruction ~LEVELB or ~CHLEV.

SENSORLA Channels belonging 
 to the list indicated by the PINLIST parameter will have setting values 
 OL defined by the previous instruction ~LEVELA or ~CHLEV.

SENSORLB Channels belonging 
 to the list indicated by the PINLIST parameter will have setting values 
 OL defined by the previous instruction ~LEVELB or ~CHLEV.

SENSORHA Channels belonging 
 to the list indicated by the PINLIST parameter will have setting values 
 OH defined by the previous instruction ~LEVELA or ~CHLEV.

SENSORHB Channels belonging 
 to the list indicated by the PINLIST parameter will have setting values 
 OH defined by the previous instruction ~LEVELB or ~CHLEV.

A Channels belonging to the 
 list indicated by the PINLIST parameter will have setting values IL, IH, 
 OL and OH defined by the previous instruction ~LEVELA 
 or ~CHLEV.

pinlist

Defines the list of channels to which the mode defined by the previous 
 parameter will be applied. The 
 character / defines a contiguous group of channels, while the character 
 , or -defines non contiguous channels. DA METTERE in LINK?

__________________________

### See 
 also 

~Chlev

__________________________

### Examples

~Family example 

The ~FAMILY instruction is used in functional 
 programs to define composed families of P300 board channels. A family 
 is a group of channels that have the same voltage values for drivers and 
 sensors. The values are defined with the ~LEVELn and ~CHLEV instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: P300,T964

&#169;2008 
 Seica S.p.a - All rights reserved