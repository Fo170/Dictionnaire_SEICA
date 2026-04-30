# ~READ_RAM example

Example 1

DECLARE RUNTIME INTEGER ARRAY DAT[16];

DECLARE GROUP DB=3,5,6,12,15,17;

DECLARE CHANNEL RESET=44;

START READ STATIC;

/ DYNAMIC ;

/;

IL 3 ;

ih 5,6,12,15,17;

/;

OG DB=0;

/; 

/;

OG DB=H55;

/;

/ STATIC;

~READ_RAM RESULT,2,5,DAT[0],DB; 

~READ_RAM ENABLE,2,5,DAT[0],RESET; 

ENDTEST; 

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved