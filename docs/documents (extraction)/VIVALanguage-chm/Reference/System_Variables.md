# System Variables

In the in-circuit and functional test environments there are some system 
 variables used to exchange values between programs. These are:

 * 

15 string variables STR[1-15] up to 80 characters 
 long 

 * 

15 Float variables NUM[1-15] up to 80 characters 
 long 

 * 

100 FLOAT registers (REG1-100). This registers 
 are used in the ~CURSOR instruction. It is possible to write the column 
 and row number inside the registers and change them inside a FOR cycle 
 to draw simple graphs on the screen. Refer to ~CURSOR instruction for 
 more details and examples. NOTE: When the REG1-100 are declared with the 
 DECLARE RUNTIME FLOAT instruction it is possible to declare only the register 
 with bigger index and all others will be automatically.

 * 

Special variables listed in the table below : 

Variables

Description

CODPRO

Alphanumeric variable containing the PRODUCT CODE

OPERAT

Alphanumeric variable containing the OPERATOR CODE

BARCODE

Alphanumeric variable containing the BARCODE NUMBER

BATCODE

Alphanumeric variable containing the BATCH CODE

BATDATE

Alphanumeric variable containing the BATCH DATE

RICNUM

Alphanumeric variable containing the RECYCLE NUMBER of the different 
 tests

PREVVAL

Alphanumeric variable containing the last in-circuit test value

NRTEST

Numeric variable containing the number of test program executions

AR

Float type. It contains the result of arithmetic/logic expression and 
 the result of measurements

USOPT1

Numeric type. They appear in the Static Terminal and work as buttons. 
 They can have value 0 or 1. The execution flow of the program changes 
 if they are selected or not. They can be used in the same way as variables, 
 so it is possible to assign them a value or check them (with the ~IF instruction 
 for example)

USOPT2

Numeric type. They appear in the Static Terminal and work as buttons. 
 They can have value 0 or 1. The execution flow of the program changes 
 if they are selected or not. They can be used in the same way as variables, 
 so it is possible to assign them a value or check them (with the ~IF instruction 
 for example)

USOPT3

Numeric type. It appears in the Static Terminal and works as button. 
 It can have value from 0 to n (where n is an INTEGER static variable) 
 The execution flow of the program changes if it is elected or not. It 
 can be used in the same way as a variable, so it is possible to assign 
 it a value or check it (with the ~IF instruction for example)

API

Integer type. It contains the returned value from an API function.

FAIL

Integer type. It contains the number of errors occurred during the static 
 program execution.

LASTKEY

Integer type. It contains the numeric value of the last keyword stroke. 
 Example: if the A character is pressed, the variable will assume value 
 41. If the pedal is pressed, the variable will be FF

ERRPAT

Integer type. It contains the number of the failing pattern

&#169;2008 
 Seica S.p.a - All right reserved