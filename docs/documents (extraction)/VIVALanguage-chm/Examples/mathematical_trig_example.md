# mathematical 
 trigonometrical example

Example 1

DECLARE RUNTIME FLOAT VAR;

START PRG1 STATIC;

~LOAD 16.3; ! load a number into AR register

~SQUARE; ! calculate the square value of AR and store result 
 to AR

~STORE VAR; !! store the value of AR into register VAR

~WRITE "SQUARE: of 16.3 =",VAR;

~SQR ; ! calculate the square root value of AR and store result to AR

~SIN ; ! calculate sine value of AR and store result to AR

~COS ; ! calculate cosine value of AR and store result to AR

~ASIN ; ! calculate arcsine value of AR and store result to AR

~ACOS ; ! calculate arc cosine value of AR and store result to AR

~TAN ; ! calculate tangent value of AR and store result to AR

~ATAN ; ! calculate arc tangent value of AR and store result to AR

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved