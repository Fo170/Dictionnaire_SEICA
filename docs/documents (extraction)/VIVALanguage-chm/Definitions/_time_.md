# <time> 

# 

# 

# 

# ________________________

### 

### 

### Syntax

times

Defines the instant or instants of commutation within the period and 
 can be defined: 

- as multiples 
 of the clock (3c, 7c, 8c,...)

- as time (1&#956;s, 2&#956;s,...)

- as frequency (2.5KHz, 1mhz)

To express it as time, the following letters are used:

P for ps (pico seconds)

N for ns (nano seconds)

U for &#956;s (micro seconds)

M for ms (milli seconds)

To express it as frequency, use the following letters:

KHZ for KHz (kilo hertz)

MHZ for MHz (mega hertz)

For the F40 modules the accepted range of values is: 20ns to 5000ns.

For the F50 modules the accepted range of values is: 20ns to 1ms.

For the DHF modules the minimum accepted value is 50ns.

N.B. It is advisable to express the commutation times of the phase in 
 multiples of the clock (3c, 5c,...) because when the clock value is modified 
 these times are automatically referenced to the new value.

__________________________

### Note

General 
 notes: The instant or instants of commutation must be included 
 in the duration of the period.

### 

__________________________

### See 
 also 

__________________________

### Examples

time is numeric symbol 
 to specified a time of commutation in a dynamic timing 

&#169;2008 
 Seica S.p.a - All rights reserved