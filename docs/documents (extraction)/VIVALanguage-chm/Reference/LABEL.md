# @LABEL 

# 

# 

# 

________________________

### Syntax

START 
 program 
 name THRESHOLD 
 = value 

...

...

...

ENDTEST

@LABEL 
 variable ; 

Variable

Variable, which specifies the prefix of the label. It can be expressed 
 as:

an INTEGER type variable

__________________________

### Note

The labels must be preceded by the character@.

The labels are created inserting _ (under 
 score) character between the prefix and the label name.

__________________________

### See 
 also 

Instruction ~BRANCH

__________________________

### Examples

@LABEL example 

Allows the specification of the prefix 
 for different labels within the @FOR, 
 @WHILE loops and in the @MACRO (macros).

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: None

&#169;2008 
 Seica S.p.a - All rights reserved