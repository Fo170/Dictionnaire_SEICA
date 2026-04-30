# SECTION 

# 

# 

# 

________________________

### Syntax

~Section 
 section_name ; 

section_name

The section name can be set to one of the following options: 

SET

DIGITAL

MEAS

DIAG

END

USER

__________________________

### Note

The sequence to be used is:

TESTNAME=testname;

! section data

SECTION USER;

! section user

SECTION SET;

! section set

SECTION USER;

! section user

SECTION DIGITAL;

! section digital

SECTION USER;

! section user

SECTION DIAG;

! section diagnose

SECTION USER;

! section user

SECTION END;

! empty

ENDTESTNAME ;

__________________________

### See 
 also 

Testname-Endtestname

__________________________

### Examples

Section example 

This instruction is automatically placed 
 by the FGE (Functional Guided Editor) to identify the beginning 
 of a group of commands. The 
 sequence of the section if FIXED.

An empty section may be omitted.

Preprocessor R Runtime : Dynamic * 
 Static 
 *

Modules: none

&#169;2008 
 Seica S.p.a - All rights reserved