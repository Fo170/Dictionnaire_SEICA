# NOSTEP example

Example 
 1

START PRG1;

/; !pattern 1!

IL 2;

IH 3;

/; !pattern2!

IH 3;

IL 2;

/ NOSTEP; !pattern3 this pattern is not 
 stored in the File.pac or in the status file!

IL 34;

/; !pattern4!

IH 35;

/ NOSTEP; !pattern5 this pattern is not 
 stored in the File.pac or in the status file!

/; !pattern6!

ENDTEST;

________________________________________________________________ 

Example 2

At the beginning of the program a 
 synchronization on signal the FF2 low is carried out, then the simulated 
 program is executed. Patterns 1 to 205 therefore are not stored in the 
 status file because they have the NOSTEP pattern option.

DECLARE CHANNEL RES=59;

DECLARE CHANNEL CLK=2;

DECLARE CHANNEL FF2=63;

DECLARE CHANNEL S1=5;

DECLARE CHANNEL S2=89;

START PRG2;

/ NOSTEP; !pattern1!

IL RES;

@FOR I=1 TO 100

IL CLK;

/ NOSTEP;

IH CLK;

/ NOSTEP; !pattern 203!

@ENDFOR;

/LAB1 NOSTEP; !pattern 204!

IL CLK;

OL FF2;

/ NOSTEP; !pattern 205!

IH CLK;

JUMP LAB1;

/; !Start simulated program!

IH S1;

/;

IL S2;

/;

.

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved