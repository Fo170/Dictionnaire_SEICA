# GR example

DECLARE GROUP ADDHH = 45,46,47,48,49,50,51,52;

DECLARE GROUP DATHH =185,186,187,188,

189,190,191,192;

DECLARE VARIABLE VAL,VAL1;

START CLUS1;

/;

IG ADDHH=0X00;

/;

GR ADDHH=0X0F; !Channels 45,46,47,48 go 
 from the IL status to IH status while channels 49,50,51,52 remain in the 
 IL status. 

@CALCOLATE VAL=0X55;

OG DATHH=VAL;

/;

@CALCOLATE VAL1=0X0A;

GR DATHH=VAL1 !Channels 185,187,189,191 
 go from OH status to the OL status, channels 186,188 go from the OL status 
 to the OH status, channels 190,192 remain in the OL status. 

/;

ENDTEST;.

&#169;2008 
 Seica S.p.a - All right reserved