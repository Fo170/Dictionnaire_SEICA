# ~SWITCH CASE 
 example

Example 1

declare runtime INTEGER NC, J;

START NEWCASE STATIC;

NC=11;

J=6;

! In this switch, when one of the cases is true 
 and the corresponding code is executed, the compiler will 

! exit the switch instruction, no other cases 
 will be evaluated

~SWITCH NC;

~CASE from 
 3 to 4 ; ! 
 Case NC=3 or NC=4 

~PAUSE "from 3 to 4";

~CASE from 
 1 to 10 ; 
 ! case NC between 1 and 10

~PAUSE " from 1 to 10";

~CASE NOT from 1 to 
 10 ; ! case NC not between 1 and 10

~PAUSE "not from 1 to 10";

! This switch 
 has the keyword CONTINUE meaning that all cases will be evaluated 

~switch j continue ; 

~case 6 ;

~pause "j=6";

~exit; ! nel caso di switch 
 continue si puo' usare exit

~case not 7;

~pause "not j=7";

~endcase;

~CASE 4,5,6,7; ! 
 case NC=4 or NC=5 or NC=6 or NC=7

~pause "4,5,6,7";

~CASE >6; ! case NC > 
 6

~pause "nc>6";

~CASE >=8 && nc<10 ; ! case NC >=8 
 and NC < 10

~IF NC =2 ;

~PAUSE "if2";

~ENDIF;

~pause ">=9 <10";

~exit;

~PAUSE 2;

~CASE 4 ;

~PAUSE 4;

~CASE j; ! 
 Use of variables: case NC=j 

~PAUSE "=j";

~CASE DEFAULT; ! case No condition

~PAUSE "DEFAULT";

~ENDCASE;

ENDTEST; 

___________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved