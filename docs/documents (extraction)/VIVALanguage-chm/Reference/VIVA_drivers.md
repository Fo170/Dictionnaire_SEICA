# VIVA drivers

VIVA is equipped with proprietary drivers to manage external instruments 
 and external functions. These drivers enables us to:

 * 

Standardize in VL language the use of all instrumentation 
 on board

 * 

Maintain language compatibility

 * 

Check for syntax errors during compilation without 
 using the hardware (off line verification)

 * 

Substitute instruments on board without needing 
 to rewrite the functional test

 * 

Omit most of the instrument's parameters, since 
 they are automatically provided by the software according to their default 
 values 

The drivers are written in XML language and can be viewed from VIVA's 
 System Configuration page. Click 
 here to know more about driver 
 installation and viewing.

Every instrument driver is composed of:

 * 

a NAME 
 : this name identifies the driver, so it must be unique.

 * 

one or more METHODS: 
 a method describes a function related to the driver; there are some methods 
 that have been standardized (see list below), while others are not and 
 must be used together with the ~DRIVER instruction. 

Standard 
 methods:

CLEAR

CLOSE

DISPLAY

GET

INIT

MEAS

OPEN

PUT

RECEIVE

RESET

SEND

SET

TERM

 * 

one or more PARAMETERS: 
 the parameters are related to the METHOD of the driver; some METHODS don't 
 have any parameters. There are two types of parameters:

REG: parameters that have associated a value 
 or single keywords

FLAG: options of a REG type parameter

__________________________

### Syntax 

The Syntax to recall an instrument through a driver is:

~Method Name Parameters 
 ;

__________________________

### See also 

__________________________

### Examples

~Driver example

&#169;2008 
 Seica S.p.a - All right reserved