# @COMPILER example

Example 1

@COMPILER MAX_ERROR=400;

@COMPILER COMPLEX=100;

@COMPILER VARNAME_LEN=9;

declare runtime integer ABCDEFGHI, ABCDEFGHI_123;

START LENVAR STATIC;

ABCDEFGHI = 3;

ABCDEFGHI_123 = 5;

~Write "The variable ABCDEFGHI equals ", ABCDEFGHI, "\CR" 
 ;

~pause "ABCDEFGHI value";! The 
 result will be 5 because for the compiler ABCDEFGHI is the same variable 
 as ABCDEFGHI_123

endtest 

___________________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved