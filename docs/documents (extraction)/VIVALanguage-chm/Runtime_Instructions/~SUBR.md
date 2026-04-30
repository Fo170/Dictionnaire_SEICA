# ~SUBR 

# 

# 

# 

________________________

### Syntax

~SUBR 
 name (argument_type argument 1, argument 2,...) ;

...

...

...

~RETURN;

~ENDSUBR;

name

Alphanumerical string maximum length 20 characters which identifies 
 the subroutine. The name of the subroutine must not be the same as the 
 name given to a label.

argument_type

Specifies the type of parameter/parameters 
 passed in the subroutine, which can be:

 * 

INTEGER

 * 

FLOAT

 * 

STRING

The arguments can be defined as global or local (See description in 
 NOTE).

If the argument type is not declared, by default is INTEGER.

argument 1, argument 
 2, ...

Alphanumerical string maximum length 20 characters which identifies 
 the argument of the subroutine. The argument can also assume the value 
 %. Example: ~SUBR N1 (%) in this case, the argument has got the value 
 calculated by the previous subroutines. Refer to the example 1.

In any case the subroutine 
 must be ended with the instruction ~ENDSUBR. 

To recall a subroutine 
 in the program, use the ~CALL 
 name subroutine instruction.

__________________________

### Note

 * 

Up to 256 subroutines 
 can be declared in a functional program.

 * 

There can be a maximum 
 of 200 between arguments and variables in a functional program.

 * 

Arguments can be 
 defined as global or local: the global arguments can be defined and used 
 in all parts of the program and must be defined with the DECLARE RUNTIME 
 ARGUMENT instruction (refer to the example 1); the local parameters are 
 seen only inside the subroutine in which they are used and must be defined 
 in the ~SUBR instruction as follows: 

~SUBR rout1 (INTEGER, 
 par1, par2) 

both 
 par1 and par2 are local arguments of the type INTEGER.

 * 

Different types of 
 parameters can be defined within the parentheses Example: ~subr ruot2 
 (INTEGER par1, par2, FLOAT par3, par4, STRING par5). Refer to example 
 4.

 * 

It is possible to 
 have more than one ~RETURN instruction in the subroutine. The ~RETURN 
 instructions can be conditioned by the ONERROR or ONPASS options which 
 control the partial error flag. The return of the subroutine, therefore, 
 can be executed or not, depending on whether or not an error has occurred. 

__________________________

### See 
 also 

~Call

~Return

__________________________

### Examples

~Subr example 

Defines a sequence of instructions, which 
 can be called in a functional program. The 
 subroutine allows you to declare RUNTIME type variables that will be local 
 to the subroutine and will be used to acquire values from the keyboard 
 or to manage the cursor, the colors and the messages in the Static terminal. 
 The subroutines can be grouped in a library file, separated from the pattern 
 file, and included in the main program. 

All of the subroutines must be declared 
 in the declarations section and must be written before the START instruction. 
 To recall a subroutine within the program, use the ~CALL instruction. 
 The subroutine is ended with the instruction ~ENDSUBR.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved