# ~IF example

Example 1

DECLARE RUNTIME INTEGER A,B;

START PRG1 STATIC;

/;

~CALC A=1;

~CALC B=1;

/;

~IF A>10;

~WRITE A>10;

~ELSE;

~WRITE A<10;

~ENDIF;

/;

~IF A lt 10;

~WRITE A>10;

~ELSE;

~WRITE A<10;

~ENDIF;

/;

~CALC B=B+1;

/;

~IF A<(B*2);

~WRITE "A<B";

~ELSE;

~WRITE "A>B";

~ENDIF;

/;

~IF B>(A+C*(D+2));

~CALC B=B+1;

~ELSE;

~CALC E=E+1;

~ENDIF;

/;

ENDTEST;

____________________________________________________________

Example 
 2

declare runtime integer i=1, i2=2,i3=2,I0=0;

decLARE RUNTIME float F=1.1;

declare runtime float a=1.1,b=4.3,c=3.3,d=1.8;

DECLARE RUNTIME INTEGER N_TEST=0;

start newif static;

! The IF body will be executed because F is 
 different from zero

~IF (F);

N_TEST=N_TEST+1;

~else;

FAIL=FAIL+1;

~BREAK;

~ENDIF;

! Example of writing more than one condition: 
 the If branch is executed if both the conditions are true

~IF ((i3 = i2) && (I <=I2) );

N_TEST=N_TEST+1;

~else;

FAIL=FAIL+1;

~BREAK;

~ENDIF;

! Example of writing 
 more than one condition: the If branch is executed if one of the conditions 
 is true

~IF ((i3 < i2) || (I <=I2) );

N_TEST=N_TEST+1;

~else;

FAIL=FAIL+1;

~BREAK;

~ENDIF;

! Example of a 
 complex if using arithmetic and logic expressions: the IF branch is executed 
 if the second and third conditions are true or if !the 
 first condition is true

~if ( (b<c) || ( (a<c) && ( (d+1.4) <C ) ) );

N_TEST=N_TEST+1;

~else;

FAIL=FAIL+1;

~BREAK;

~endif;

&#169;2008 
 Seica S.p.a - All right reserved