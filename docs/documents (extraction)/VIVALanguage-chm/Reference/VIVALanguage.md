# Welcome

This chapter describes the programming language for developing functional 
 tests of electronic boards. It is a high level, structured, proprietary 
 language of the SEICA test systems and is composed of instructions, pattern 
 options and instrument drivers. This manual describes each single element 
 along with examples for its use.

There are two functional programming environments, the COMPILED and 
 the RUN-TIME.

Normally a test program starts in RUN-TIME ENVIRONMENT where it is possible 
 to insert messages/instructions for the operator and switch the power 
 supplies on. Here it is also possible to drive all instruments in the 
 system (switch on/off decided by programmer) and to handle the graphic 
 interface. The following step is to switch to the COMPILED ENVIRONMENT 
 where it is possible to execute the test patterns at a certain frequency 
 therefore applying test stimuli according to the timing of the UUT. It 
 is possible to use the compiled environment to execute digital functional 
 test also at high frequency.

A test system equipped with a DHF (real time controller) or F40 (high 
 freq. channel card and real time controller) and one or more hybrid channel 
 cards can use both the COMPILED and the RUN-TIME environment. 

A test system equipped only with a LAM module and channel boards as 
 a base configuration uses only the RUN-TIME environment. In this system 
 is however possible to mount external instrumentation and drive it as 
 the internal one.

INSTRUCTIONS

Instructions are divided in: compiler directives and run-time instructions. 
 The first group is composed of those constructs that begins with the @ 
 character or the DECLARE VARIABLE keyword. With the compiler directives 
 it is possible to execute macros, to do FOR-ENDFOR cycles, to use IF-THEN-ELSE 
 constructs, to perform arithmetic/logic expressions and move the functional 
 channels at a certain frequency.

The run-time instructions begins with the ~ or & character and permits 
 the programmer to change the test program execution (run-time), to handle 
 the graphic interface (static Run-time terminal) to define subroutines, 
 to execute FOR-ENDFOR cycles, to use IF-THEN-ELSE constructs, to perform 
 arithmetic/logic expressions and move the functional channels. There 
 is an overlay area between the two groups because there are constructs 
 and instructions that work both in run-time and in compiled environment. 
 The compiler directives/instruction applicability is indicated with the 
 notation listed in the previous paragraph.

MODULE 
 DESCRIPTION

LAM: logic/analogical measurement 

SER: Power supply control

SE2: Power supply control with current programming

P32: 32-hybrid channel with programmable voltage levels

F40: 32-hybrid channel high frequency (25Mhz) and real time controller

USB: User board with programmable resources (loads, OP AMP, relay,) 
 for customization

GEN: programmable waveform generator

HV: AC/DC high voltage/high current meter

EXL: Matrix to connect external instrumentation

DHF: real time controller for digital pattern up to 10Mhz

NOTES TO WRITE A TEST PROGRAM

The notes here below are usually followed when writing a functional 
 test program: 

 The command keywords are in CAPITAL LETTERS (optional but advised 
 for a better clearness)

 Variable names are in capital letters (optional but advised for a 
 better clearness)

 The ! character is used as a comment at the beginning or at the end 
 of the line.

 The * character is used as a comment at the beginning of the line 
 only

 The ; character ends the line

 The / character indicates a test pattern

 The & character is alias of ~

rel. 1.02