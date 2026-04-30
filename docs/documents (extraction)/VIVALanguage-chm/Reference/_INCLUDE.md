# #INCLUDE 

# 

# 

# 

________________________

### Syntax

#Include 
 file_name ; 

$Include file_name ; 

file_name

Name of the file to be included. The maximum length of file name is 
 32 characters. 

If not specified the default extension is .LIB

__________________________

### Note

### The file must reside in the board 
 directory and must be readable and writable. 

It is possible to include up to 300 different 
 files (also nested) in a File.pat. To include more than one file, write 
 as many #INCLUDE 
 lines as required. It is possible to insert the contents of the library 
 file in the list file File.pac with the compiler directives @COMPILER 
 INCLUDE_ON and @COMPILE INCLUDE_OFF. The compiler directives @COMPILER 
 INCLUDE_ON/OFF must precede the #INCLUDE instruction in order to insert 
 the contents in to the list file File.pac.

__________________________

### Examples

#INCLUDE example

Allows one or more library files File.lib 
 to be included in the functional program File.pat. In this way, the instructions 
 written in the library files will be completely visible in the File.pat. 
 The library file has to be under the board directory.

Preprocessor R Runtime : Dynamic * 
 Static 
 *

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved