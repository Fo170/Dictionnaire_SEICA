# ONERROR example

Example 
 1

DECLARE CHANNEL OHCH=45;

START PRG1 STATIC;

.

.

.

~LI1 *,OHCH;

~OH OHCH;

/ ONERROR NOK;

~OM OHCH;

.

.

LABEL = NOK;

.

.

ENDTEST;

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved