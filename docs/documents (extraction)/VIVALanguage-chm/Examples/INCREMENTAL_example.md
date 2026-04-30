# INCREMENTAL 
 example

Example 
 1

DECLARE CHANNEL CH1=48;

START PRG1;

/; !pattern1!

INCREMENTAL;

IH CH1;

/; !pattern2 CH1 is programmed high!

/; !pattern3 the channel is not programmed!

IH CH1

/; !pattern4 CH1 is programmed low! 

/; !pattern5 the channel is not programmed!

/; !pattern6 the channel is not programmed!

IL CH1;

/; !pattern7 the channel is not programmed 
 because the channel is already low!

ENDTEST;

________________________________________________________________ 

Example 2

We now compare the example just described of 
 the INCREMENTAL instruction with that of the COPY instruction.

DECLARE CHANNEL CH1=48;

START PRG1;

/; !pattern1!

COPY;

IH CH1;

/; !pattern2 CH1 is programmed high!

/; !pattern3 CH1 is programmed high!

/;

IL CH1; !pattern4 CH1 is programmed low!

/; !pattern5 CH1 is programmed low!

/; !pattern6 CH1 is programmed low!

IL CH1;

/; !pattern7 CH1 is programmed low!

ENDTEST;

________________________________________________________________ 

Example 3

DECLARE CHANNEL S1=1;

DECLARE CHANNEL S2=2;

START PRG1;

/; !pattern 1!

INCREMENTAL;

IH S1;

/; !pattern 2!

~ATEST VAR1 LO=2 HI=5 ONERROR LAB1;

/; !pattern 3!

IL S1;

/; !pattern 4!

/; !pattern 5!

LABEL=LAB1;

/; !pattern 6!

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved