# CALC example

Example 
 1

CLOCK 100N;

TIMING T1;

PERIOD 10C;

STROBE 9C;

ENDTIMING;

DECLARE CHANNEL D0=36;

DECLARE CHANNEL D1=88;

DECLARE CHANNEL D2=93;

DECLARE CHANNEL D3=123;

DECLARE CHANNEL A0=36;

DECLARE CHANNEL A1=88;

DECLARE CHANNEL A2=93;

DECLARE CHANNEL A3=123;

DECLARE CHANNEL A4=123;

DECLARE CHANNEL A5=123;

DECLARE CHANNEL A6=123;

DECLARE CHANNEL A7=123;

DECLARE RUNTIME INTEGER ADR PAGE ADL ADDRESS DATA PATTERN;

DECLARE RUNTIME INTEGER ARRAY RIS[256];

DECLARE RUNTIME INDEX IDX;

DECLARE VARIABLE I;

DECLARE GROUP DAT=D0,D1,D2,D3;

DECLARE GROUP ADD=A0,A1,A2,A3,A4,A5,A6,A7;

START TEST4 STATIC;

~CALC PAGE=0;

~CALC PATTERN=H55;

~FOR PAGE=0 TO HFF STEP H10;

/ DMASTER TIMING T1;

CALC DATA=PATTERN;

CALC ADL=0;

CALC ADDRESS=PAGE+ADL;

WG ADD=ADDRESS;

WG DAT=DATA;

*WRITE CYCLE

/;

@FOR I=0 TO 255;

CALC ADDRESS=ADDRESS+1;

CALC DATA=DATA^HFF;

WG DAT=DATA;

/;

@ENDFOR;

*READ CYCLE

/;

CALC IDX=0;

CALC ADDRESS=PAGE+ADL;

WG ADD=ADDRESS;

RG RIS[IDX]=DAT;

/;

@FOR I=0 TO 255;

CALC ADDRESS=ADDRESS+1;

CALC IDX=IDX+1;

RG RIS[IDX]=DAT;

/;

@ENDFOR;

/ STATIC;

~ENDFOR;

ENDTEST;

________________________________________________________________ 

Example 2

DECLARE RUNTIME INTEGER RIS,K;

DECLARE RUNTIME INDEX J;

DECLARE RUNTIME INTEGER ARRAY VALORI[3];

DECLARE CHANNEL D0=36;

DECLARE CHANNEL D1=88;

DECLARE CHANNEL D2=93;

DECLARE CHANNEL D3=123;

DECLARE GROUP DAT=D0,D1,D2,D3;

START TEST4 STATIC;

~CALC VALORI[2]=1;

~CALC K=0;

/ DMASTER TIMING T1;

CALC J=K;

RG VALORI[J]=DAT;

/;

CALC J=J+1;

RG VALORI[J]=DAT;

/;

WG VALORI[2]=DAT;

ENDTEST;

When the compiled (dynamic) session of the program 
 is executed (/ DMASTER), the compiler executes all CALC and WG insructions 
 in sequence. In a second execution phase, the compiler executes the CALC 
 and RG instructions in sequence. This mechanism allows the execution of 
 a dynamic session changing its parameters each time. (i.e. changing the 
 memory address each read/write operation in EXAMPLE 1).

Another advantage of writing/reading a memory 
 using this method is that the entire ~FOR/~ENDFOR cycle its an interpreted 
 instruction that takes few space in the object code. This feature is very 
 important when dealing with memories or components that have a lot of 
 data to write/read.

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved