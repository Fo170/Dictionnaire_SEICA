# @MACRO-@ENDMACRO 

# 

# 

# 

________________________

### Syntax

@MACRO 
 macro name (arg1, arg2,...)

...

...

...

@ENDMACRO

macro name

Description of the parameter and default values

arg1, arg2,...

Arguments passed in the call to the macro. The can be three types of 
 arguments: 

- global

- local

- define 

Global arguments. These are 
 the ones defined in the DECLARE ARGUMENT. These are global and visible 
 to the entire program and to all the macros.

Local arguments. These are integer 
 type variable not declared. The local arguments are visible only in the 
 macro used and they are not visible to the rest of the program and to 
 the other macros.

It is possible therefore to have calls to macros, which use the same 
 name for the parameters, because they will be differentiated internally 
 in each macro (this operation is completely transparent to the user).

Define type arguments. These 
 are alphanumerical strings, which are simply replaced inside the macro 
 just as they are. They are visible to all the program and to all the other 
 macros. Define type arguments must be preceded by the character @. See 
 EXAMPLE 5.

__________________________

### Note

The macros must be declared 
 before the START section of the test program.

It is possible to call macros from inside a macro up to 10 nesting levels.

Up to 500 macros can be declared in a test program. 

To call a macro in the test program, use the @macro name instruction.

__________________________

### See 
 also 

@MACRO name

@COMPILER BACKUP MACRO_ON

@COMPILER BACKUP MACRO_OFF

__________________________

### Examples

@MACRO example 

Enables the definition of 
 a sequence of instructions under the form of a macro. A macro thus defined 
 can be called in the functional program.

Preprocessor R Runtime : Dynamic R 
 Static 
 R

Modules: F40

&#169;2008 
 Seica S.p.a - All rights reserved