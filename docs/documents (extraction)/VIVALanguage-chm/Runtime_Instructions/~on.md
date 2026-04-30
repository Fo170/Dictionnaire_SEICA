# ~ON EVENT action 
 ;

# 

# 

# 

________________________

### Syntax

~ON event 
 [CALL 
 subroutine] [CLEAR] [ABORT|CONTINUE] ;

~ON_event 
 [CALL 
 subroutine] [CLEAR] [ABORT|CONTINUE] 
 ;

Event

ABORT

before the 
 user abort of the cluster

BREAK
before 
 any instruction that waits for user input (~PAUSE , 

before opening the debug enviroment)

 END
before 
 the end of the cluster

 TIMEOUT
the 
 cluster goes in time out ( if set)

 ENDBURST
after 
 the end of a dynamic burst

 DYNAMIC
before 
 a dynamic burst

 ERROR
if 
 any error occurs

 ANA_ERROR
if 
 any analogic error occurs (~atest ~test)

 DIG_ERROR
if 
 any digital error occurs (\ ; )

 STATIC_ERROR
if 
 any static digital error occurs

 BUTTON
if 
 a button on the new terminal was pressed

 TIMER
one 
 of the timer has expired

Define the action to perform in case 
 of an event.

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: ?

Action

CALL subroutine

will 
 execute the subroutine before performing the other actions listed; 

subroutine may be any valid 
 subroutine without parameters.

In case of a subroutine call, the clear will not be executed.

CLEAR

will 
 execute a clear of the system

CONTINUE
(default) 
 continue with the next instruction following the instruction that generated 
 the event 

ABORT
will end 
 the cluster

__________________________

### Note 

 Some 
 instructions may set multiple events; in this case only 1 event will take 
 place with the following priority:

 * 

 STA_ERROR,DIG_ERROR,ERROR,

 * 

 ANA_ERROR,ERROR

 * 

 ABORT,BREAK

 To intercept 
 only the digital dynamic errors use the following:

 ~ON ERROR 
 CONTINUE;

 ~ON STATIC_ERROR 
 CALL DONOTHING;

 ~ON DIG_ERROR 
 CALL HANDLE_DYNAMIC;

__________________________

### See 
 also 

__________________________

### Examples

 ~ON_example 

&#169;2008 
 Seica S.p.a - All rights reserved