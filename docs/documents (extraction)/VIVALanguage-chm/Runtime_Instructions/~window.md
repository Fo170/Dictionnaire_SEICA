# ~WINDOW 

# 

# 

# 

__________________________

### Syntax

~WINDOW 
 n [Type] 
 [action] [NAME="string"] [POSX=x] 
 [POSY=y] DIMX=x1 
 DIMY=y1 FONT=f; 

~WINDOW 
 n [Type] 
 [action] [NAME="string"] [POSX=x] 
 [POSY=y] x1 y1 f; 

~WINDOW 
 n [Type] 
 [action] [NAME="string"] 0 0 f; 

~WINDOW 
 n [Type] 
 [action] [NAME="string"] 0 0 0; 

~WINDOW 
 0 [Type] [action] [NAME="string"] 
 [POSX=x] [POSY=y] 
 DIMX=x1 DIMY=y1; 

~WINDOW 
 n [Type] 
 [action] [NAME="string"] BMP="filename"; 

n

0

Number range 1 to 9 defines which window to operate on.

The main window must be opened first. 

action

OPEN

SEL select as current window 
 for input/output

CLOSE destroy the window

HIDE hidden window 

Type
default 
 Window for formatted output (terminal) 

CHECK for boolean selection

EDIT for string input 

BUTTON for event generation (see 
 ~ON_BUTTON)

NAME
SET 
 the caption of the window; for the type EDIT the initial value will 
 be set.

BMP
Display 
 the selected bitmap file to be shown in the window (instead of character 
 to the window); on window 0, the image will be used as background. The 
 image will be automatically fitted to the window dimension. 

If the image name has no path and does not start with ' \', the compiler 
 will search for the image in the board directory.

x,y
Position 
 (in pixel) referring to window 0. By default or 0: 

 * 

TERMINAL, from left-top to right-bottom

 * 

BUTTON from bottom-right to bottom-left 

 * 

CHECK from bottom-left to bottom-right

 * 

TERMINAL 0 always in pixel

x1,y1
Dimension 
 of the window in chars or in pixel if f=0 . 

If 0 or missing: 

 * 

TERMINAL: the whole remaining space 

 * 

BUTTON ,CHECK their default dimension is 80*30

 * 

EDIT their default dimension is 100*40

f

Range 1 to 15: dimension of the character to be used for calculating 
 the dimension.

If 0 the dimension is in pixel.

This parameter is available only for type TERMINAL; for types BUTTON 
 ,CHECK and EDIT, the parameter is not available.

__________________________

### Note

### If the ~WINDOW is not 
 specified, the standard terminal will be used.

### 

### See 
 also 

~STREAM

~WRITE

~FONT

__________________________

### Examples

~WINDOW example 

Open and define the structure of the new 
 terminal for input and output operations. 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved