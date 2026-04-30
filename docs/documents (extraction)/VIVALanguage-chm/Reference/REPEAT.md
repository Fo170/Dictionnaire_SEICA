# REPEAT 

# 

# 

# 

________________________

### Syntax

/ REPEAT 
 number [ONERROR] [ONPASS]

number

Indicates how many times the pattern must be repeated. It is a number 
 between 2 and 65000.

[ONERROR]

If specified, the pattern repetition is executed until the error condition 
 is present (that is until the 
 partial error flag is active).

[ONPASS]

If specified, the pattern repetition is executed until no errors are 
 present (that is until the 
 partial error flag is not active).

__________________________

### Note

In the presence of repetitive patterns 
 it is advisable to use the NOSTEP option so that the pattern numeration 
 is not listed.

The pattern with the REPEAT option with 
 the ONERROR/ONPASS options, does not give errors. The error is generated 
 on the following pattern. 

__________________________

### See 
 also 

__________________________

### Examples

REPEAT example

Repeats the pattern in question for the indicated number of times. 

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved