# ~API example

Example 
 1

Call to the Windows API Message 
 Box function

START PRG1 STATIC;

/;

~API "User32.dll","MessageBoxA",INT 0,"User 
 Windows", "MY BOX",INT 1;

/;

ENDTEST;

________________________________________________________________ 

Example 2

Call to the API function 
 GetPrivateProfileIntA for reading from the S20.INI 
 file, section Installation and returning the integer value of the variable 
 Help

START PRG2 STATIC;

/;

~API "KERNEL32.DLL","GetPrivateProfileIntA","Installation",

"Help", INT 333, "S20.INI";

~CALC API=API&0x0000FFFF;

~COLOR 9,15;

~CURSOR 12,12;

~WRITE API;

~PAUSE 1;/;

ENDTEST;

________________________________________________________________ 

Example 3

Call to the API function GetCursorPos. Note 
 that the return parameter is loaded in REGL

DECLARE RUNTIME INTEGER REGL,MOUSEX,MOUSEY;

START PRG3 STATIC;

/;

~API "USER32.dll","GetCursorPos",POINTER REGL;

~CALC mouseX=REGL&0x0000FFFF;

~CALC mouseY=REGL&0xFFFF0000;

~CALC mouseY=mouseY>16;

~COLOR 5,1;

~CURSOR 10,8;

~WRITE "POSIZIONE CURSORE:";

~COLOR 5,1;

~CURSOR 10,9;

~WRITE mouseX;

~COLOR 5,9;

~CURSOR 10,10;

~WRITE mouseY;

~PAUSE 65;

/;

ENDTEST; 

________________________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved