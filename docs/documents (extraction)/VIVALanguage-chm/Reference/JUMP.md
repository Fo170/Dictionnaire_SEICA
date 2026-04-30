# JUMP 

# 

# 

# 

________________________

### Syntax

Syntax for the DHF 
 module:

[ONERROR] 
 JUMP syntax label for the DHF module

Syntax for the F40 
 module:

/ JUMP 
 label [ONERROR] [ONPASS]

label

Specifies the label to jump to. The label name can be a maximum of 9 
 characters.

[ONERROR]

If specified, the jump is executed if there is an error (partial error 
 flag activated).

[ONPASS]

If specified, the jump is executed if there is not an error (partial 
 error flag deactivated).

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

JUMP example

Executes the jump to the specified 
 label. The jump can also be executed only in the case of error.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: DHF/F40

&#169;2008 
 Seica S.p.a - All rights reserved