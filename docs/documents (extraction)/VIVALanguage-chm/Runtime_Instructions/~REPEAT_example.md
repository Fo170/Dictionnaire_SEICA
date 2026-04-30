# ~REPEAT examples

EXAMPLE 1

declare runtime INTEGER NC=4,J=6;

declare runtime integer number=1;

START NEWUNTIL STATIC;

! Repeat the instruction between REPEAT and 
 UNTIL until the parameter number is less than 10

~REPEAT; 

~Write "write number ", number, "\CR"; 

~Pause "I'm in repeat";

number = number+1 ;

~UNTIL ( number < 10 );

~REPEAT;

J=J-1;

NC=NC-1;

~WRITE "\CR UNTIL NC=",NC," J=",J,"\CR";

~PAUSE NC;

~if j ;

~if nc = 2 ;

 ~Write 
 "Jump to end","\CR";

 ~pause 
 "EXIT";

 ~EXIT; 
 ! 
 jump out of the REPEAT/UNTIL cycle

 ~endif;

~endif;

~UNTIL (NC 
 > 0 || J > 0 );

~PAUSE "FINE UNTIL" ;

~PAUSE "The end";

ENDTEST;

__________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved