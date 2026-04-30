# COPY example

Example 
 1

DECLARE CHANNEL CH1=48;

START PRG1;

/; !pattern1!

COPY;

IH CH1;

/; !pattern2 CH1 is programmed high!

/; !pattern3 CH1 is programmed high!

/; !pattern4 CH1 is programmed high!

/; !pattern5 CH1 is programmed high!

/; !pattern6 CH1 is programmed high! 

IH CH1;

/; !pattern7 CH1 is programmed high! 

ENDTEST;

We will now compare the EXAMPLE just described 
 of the COPY instruction with that of the INCREMENTAL instruction.

DECLARE CHANNEL CH1=48;

START PRG1;

/; !pattern1!

INCREMENTAL;

IH CH1;

/; !pattern2 CH1 is programmed high!

/; !pattern3 the channel is not programmed!

/; !pattern4 the channel is not programmed!

/; !pattern5 the channel is not programmed!!

/; !pattern6 the channel is not programmed!

IH CH1;

/; !pattern7 the channel is not programmed 
 because the channel is already high!

ENDTEST; 

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved