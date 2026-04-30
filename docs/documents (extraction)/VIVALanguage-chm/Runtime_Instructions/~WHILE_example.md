# ~WHILE example

DECLARE RUNTIME INTEGER A,B;

START PRG1 STATIC;

/;

~CALC A=100;

~CALC B=1;

/;

~WHILE A >= 95 ;

~CALC A=A-1;

~WRITE "A= "A;

~ENDWHILE;

/;

~CALC B=B+1;

/;

~WHILE B<(A*2);

~WRITE "A<B";

~ENDWHILE;

&#169;2008 
 Seica S.p.a - All right reserved