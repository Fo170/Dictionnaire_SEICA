# ~WRITE 

# 

# 

________________________

### Syntax

~WRITE 
 attribute 
 value1,value2,... ; 

~WRITEL 
 attribute 
 value1,value2,... ; automatically 
 adds a carriage return at the end of write

~WRITE[L] 
 ON=stream 
 attribute value1,value2,... ; select 
 a specified stream for output

~WRITE[L] 
 ON_TMP=stream attribute 
 value1,value2,... ; select first the specified stream for 
 output and then restore the current stream for the output 

~WRITE[L] 
 USING="fortran format string" attribute value1,value2,... 
 ; use the specified string for formatting output, 

 instead 
 of the ~FORMAT definition (L200 emulation).

~WRITEL 
 QUOTE ON=stream attribute 
 value1,value2,... ; disable 
 the automatic carriage return

attribute

2 uppercase characters preceded br the crt '\'

The attributes for the ~WRITE instruction can be:

\CR 
 Carriage return = new line.

\EL 
 Erase line = deletes from cursor to the end of the line 

\IC 
 Insert character = inserts character to the right of the cursor 

\IL 
 Insert line = inserts a line above the cursor 

\CS 
 Clear screen = deletes the contents of the Static Terminal window

\RI 
 Right = moves cursor one position to the right 

\DO 
 Down = moves cursor a line above 

\HO 
 Home = moves cursor in line 1 column 1 position 

\EP 
 Erase page = deletes from cursor at the end of the page 

\DC 
 Delete character = deletes the character to the left of the cursor 

\DL 
 Delete line = deletes the line where the cursor is

\LE 
 Left = moves cursor a character to the left

\UP 
 Up = moves cursor a line under 

 \BL 
 Begin Line = moves cursor to beginning of the line

 \BE Bell = ring the pc bell

 \ND Not Draw=do not draw command to the 
 terminal ( but update)

 \DR DRaw=dRaw the terminal (used for 
 fast terminal update)

 \SC Save = 
 Save the Cursor actual position 

 \RC Save = 
 Restore the Cursor to the previous saved position 

 \CU Cursor = set the cursor position 
 \colum\line

 \CO Color = 
 set the color \background\foreground

 \FO font = 
 set the font dimension. \font\000

The attributes must be inserted in the instruction with this syntax:

~WRITE \string attribute;

that is: ~WRITE \CR Protection active;

A new line is inserted and the instruction 
 writes Protection active.

USING

specified the formatting string

In INTEGER n crt

Bn binary n crt

On octal

Ln exdecimal

Fw.p real number total w crt 
 p number of significant digit

Ew.p exponential notation of 
 total w crt p number of significant digit

Gw.p best fit between E and 
 F 

nX space

nP multiplier

nHstring fixed string of n crt

value1,value2,...

The value can be expressed as:

 * 

a constant

 * 

an INTEGER, FLOAT, STRING type runtime variable

 * 

a string of characters enclosed by quotation marks

 * 

a FLOAT type register (REG1-REG100) enclosed by 
 quotation marks and preceded by 
 the \ character

 * 

an octal value enclosed by quotation marks and 
 preceded by the % 
 character.

__________________________

### Note

It is possible to display an ASCII character 
 by indicating the corresponding value in octal format. The octal value 
 can be contained in a FLOAT type register or can be passed on by a constant. 
 Refer to EXAMPLES 3 and 4.

WRITEL insert automatically 
 a carriage return after the write of all variable.

WRITEL QUOTE do not insert the carriage returm

the attribute CO,CU,FO are followed by 8 crt with the fixed format \CO\NNN\NNN

__________________________

### See 
 also 

~Color

~Cursor

~Format

__________________________

### Examples

~Write examples 

Outputs the specified value or values to 
 the screen.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved