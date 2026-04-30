# ~REMOVE example

Example 1

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

~CONNECT SIGNALS ch1, ch2, ch3, ch4;

~APPLY VDC V=5V to=ch1 label=apply_dc;

...

! Removes the previous apply instruction identified 
 by the label apply_dc.

~REMOVE LABEL=apply_dc;

.

ENDTEST;

____________________________________________________________

Example 
 2

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

~CONNECT SIGNALS ch1, ch2, ch3, ch4;

~APPLY VDC V=5V to=ch1 label=apply_dc;

...

! Remove only the last signal application (APPLY 
 VDC).

~REMOVE;

...

ENDTEST;

____________________________________________________________

Example 
 3

DECLARE CHANNEL ch1=1;

DECLARE CHANNEL ch2=2;

DECLARE CHANNEL ch3=3;

DECLARE CHANNEL ch4=4;

DECLARE RUNTIME FLOAT ris;

START example STATIC;

.

~CONNECT SIGNALS ch1, ch2, ch3, ch4;

~APPLY VDC V=5V to=ch1 label=apply_dc;

...

! Remove all previous apply or connect commands 
 (APPLY VDC and CONNECT SIGNALS).

~REMOVE ALL;

.

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved