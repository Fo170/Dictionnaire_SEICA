# MODULE example

CLOCK 200NS;

TIMING DEFAULT;

STROBE 8C;

PERIOD 10C;

PHASE1 4C,6C;

ENDTIMING;

MODULE U1;

DECLARE PINLIST = 191,31,32,33,34,35,36,123,136,75,100,0,188,187,186,185, 
 184,183,2,117;

DECLARE GROUP DBUS=31,32,33,34,35,36;

DECLARE GROUP OBUS=183,184,185,186,187,188;

DECLARE CHANNEL WRCK = 191;

DECLARE CHANNEL RD4 = 100;

DECLARE VARIABLE = I,J;

@MACRO WRITE;

IG DBUS=I;

IH WRCK RD4;

/;

IL WRCK;

/;

IH WRCK;

/;

/;

@ENDMACRO;

@MACRO READ;

/;

IH RD4;

/;

IL RD4;

OG OBUS=J;

/;

OM OBUS;

IH RD4;

/;

@ENDMACRO;

START U1;

!!! DIGITAL GUARDING

MH 157 103 162 89 78 171 79 100 172 192 173 99;

/ timing default;

/;

!!! DIGITAL GUARDING

/;

@CALCOLATE I=0X3F;

@WRITE;

/;

@CALCOLATE J=0X3F;

@READ;

/;

ENDTEST;

ENDMODULE;

MODULE U10;

DECLARE PINLIST = 103,5,23,24,6,7,31,32,8,75,121,9,33,34,10,11,35,36,12;

START U10;

!!! DIGITAL GUARDING

MH 157 103 162 89 78 171 79 100 172 192 173 99;

/ timing default;

/;

!!! DIGITAL GUARDING

@L(L.........L.........);

@L(L1H.......T.........);

@L(L0L.......T.........);

@L(L..H1.....T.........);

@L(L..L0.....T.........);

@L(L....1H...T.........);

@L(L....0L...T.........);

@L(L......H1.T.........);

@L(L......L0.T.........);

@L(L.........T1H.......);

@L(L.........T0L.......);

@L(L.........T..H1.....);

@L(L.........T..L0.....);

@L(L.........T....1H...);

@L(L.........T....0L...);

@L(L.........T......H1.);

@L(L.........T......L0.);

ENDTEST;

ENDMODULE;

&#169;2008 
 Seica S.p.a - All right reserved