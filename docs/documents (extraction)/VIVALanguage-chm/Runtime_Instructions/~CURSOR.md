# ~CURSOR 

# 

# 

________________________

### Syntax

~CURSOR 
 column, 
 line [attribute1, attribute2,...] ; 

column

Specifies the column of the ~CURSOR instruction and is a number from 
 1 to 80 or a value within a register (REG1-100)

line

Specifies the column of the ~CURSOR instruction and is a number from 
 1 to 25 or a value within the register (REG1-100)

attribute

Attribute or attributes for the next output operation. This can be:

CR 
 Carriage return New line

EL 
 Erase line erases from the cursor to the end of the line.

IC 
 Insert character inserts the character to the right of the cursor.

IL 
 Insert line inserts a line above the cursor.

CS 
 Clear screen erases the contents of the Static Terminal window.

RI 
 Right moves the cursor one position to the right

DO 
 Down moves the cursor one line down.

HO 
 Home moves the cursor to line 1 column 1.

EP 
 Erase page erases from the cursor to the end of the page.

DC 
 Delete character erases the character to the left of the cursor.

DL 
 Delete line deletes the line of the cursor. 

LE 
 Left moves the cursor one character to the left.

UP 
 Up moves the cursor one line up.

__________________________

### Note

The cursor command can be inserted into 
 the ~WRITE instruction using this syntax:

~WRITE \CU\column\line, 
 value1,value2 ;

where the column and the line are expressed 
 with 3 characters each. See EXAMPLE 1.

It is possible to use the registers REG(1-100) 
 to specify the values of the lines and of the columns. This way the value 
 can change according to an index and it is possible to create simple graphs. 
 See EXAMPLE 2.

__________________________

### See 
 also 

~Color

~Write

__________________________

### Examples

~Cursor examples 

Specifies the position in terms of line 
 and column of the next input/output operation executed with the ~WRITE 
 or ~READ_SCR instruction.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved