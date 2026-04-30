# SYNC example

Example 
 1

DECLARE CHANNEL C1;

DECLARE CHANNEL C2;

START PRG1 SYNC_LOAD_ON;

/;

IL C1;

/;

IH C1;

/ SYNC; !The synchronism signal is generated!

IL C2;

/ SYNC; !The synchronism signal is generated!

IH C2;

/;

ENDTEST;

The timing of the synchronism signal is as follows:

As you can see, the signal is generated even 
 during the channel programming phase because it was enabled by the SYNC_LOAD_ON 
 option of the START-ENDTEST instruction.

________________________________________________________________ 

Example 
 2

DECLARE CHANNEL C1;

DECLARE CHANNEL C2;

START PRG1 SYNC_LOAD_OFF;

/;

IL C1;

/;

IH C1;

/ SYNC; !The synchronism signal is generated!

IL C2;

/ SYNC; !The synchronism signal is generated!

IH C2;

/;

ENDTEST;

The timing of the synchronism signal is as follows:

As you can see, the signal is not generated 
 during the channel programming phase because it was disabled by the SYNC_LOAD_ON 
 option of the START-ENDTEST instruction.

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved