# ~FILE1..7 

# 

# 

# 

________________________

### Syntax

~FILE N=expression 
 mode file name;

~FILE N=expression 
 action ;

~FILE N=expression 
 WRITE value;

~FILE N=expression 
 READ variable;

~FILE N=expression 
 mode_get variable;

Compatibility syntax: 

~FILEn mode 
 file name;

~FILEn 
 mode NO_AUTOCLOSE 
 file name;

~FILEn 
 action ;

~FILEn 
 WRITE value;

~FILEn 
 READ variable;

~FILEn 
 mode_get variable;

N=expression

Identifies a file with a mathematical expression; the numbers accepted 
 are between 1 and 19

n

number from 1 to 7 to identify the file 

mode

OPEN_READ
open 
 the file in read mode; if the file does not exist set the PARTIAL error 
 flag 

mode

OPEN_WRITE
open 
 the file in write mode; if the file does not exist it will be created, 
 if the file exist it will be cleared

mode

OPEN_APPEND
open 
 the file in append mode; if the file does not exist, set the PARTIAL error 
 flag

mode

REMOVE
The 
 specified file will be removed from the disk; if the file does not exist, 
 the PARTIAL error flag will be set

action

CLOSE
Close 
 the file previously opened

action

REWIND
Set 
 the file to the beginning for the subsequent read/write.

mode_get

READ_STATUS
return 
 in variable 
 the status of the selected file: 

 * 

1=open

 * 

0=close

mode_get

READ_ACCESS
return 
 in variable 
 the access of the selected file: 

 * 

0=close

 * 

1=write

 * 

2=read

 * 

3=read_write

mode_get

READ_MODE
return 
 in variable 
 the mode of the file selected: 

 * 

0=close

 * 

1=old

 * 

2=new

 * 

3=append

mode_get

READ_FILENAME

return 
 in variable 
 the directory and the filename of the select file 

 flag

 NO_AUTOCLOSE

force do close the file only automatically only at the end of program

File name

Name 
 and extension of the file. 

Example: Dati.txt

If 
 there the path name is missing in the file name, the file is created in 
 the directory of the board, example: (:\S20WIN\BOARD\Piastra1). Otherwise, 
 if the path is specified in the file name, the file is created in the 
 directory specified. Example: D:\Dati\Lettura.txt. The Lettura.txt file 
 is created under the D\Dati directory.

value

Value 
 to be written to the file: 

 * constant

 * runtime variable of the INTEGER, FLOAT,STRING 
 type

variable

variable 
 to store the read data: 

 * runtime variable of the INTEGER, FLOAT,STRING 
 type

__________________________

### Note 

The data is written at the 
 beginning of a line within the file. If more writing operations are done 
 while the file is open, the data are written one for every line. If the 
 file is opened, written, closed, opened again in WRITE mode and written, 
 it will start writing from the first line of the file, therefore the previous 
 data will be overwritten. To avoid the overwriting, the file has to be 
 opened in APPEND mode with the ~FILEn OPEN_APPEND instruction.

All file from 1 to 7 if opened with the old syntax will be automatically 
 closed at the end of the cluster

unless the flag NO_AUTOCLOSE is used.

If using the Streaming cabability to write a file the command to cursor 
 or or font will the replaced 

by a carriage return. 

FILENAME 

the file will be opened in the board directory unless:

if the name contain the crt ':' the file will the opened in the directory 
 specified

if the name start with the crt '\' the file will be opened in the specified 
 subdirectory 
 of board directory

if the mail box GROUP=$PATH NAME="CURRENT" the file will be 
 opened in that directory see ~PUT MAILBOX

the directory must exist willnot created.

__________________________

### See 
 also 

~WRITE;

~STREAM;

__________________________

### Examples

~FILE example

Manages files for general purpose input-output.

Each write instruction will write a whole 
 line into the specified file.

Each read instruction will read a whole 
 line from the file and convert the data in appropriate format in 
 the specified variable.

In case of error, the partial error flag 
 will be set.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved