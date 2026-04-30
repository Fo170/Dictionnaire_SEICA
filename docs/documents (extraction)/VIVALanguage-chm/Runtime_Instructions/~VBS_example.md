# ~VBS example

DECLARE RUNTIME FLOAT F,F1,F2;

DECLARE RUNTIME STRING mess;

START VBS STATIC;

F=12.34;

F1=1112.34;

F2=2212.34;

mess = "ciao";

~VBS "D:\Vivaboard\VBoard\PROVA.vbs" 
 "FUN2" 
 STRING mess ;

~WRITE mess,"\CR"; 

~pause;

~VBS " 
 D:\Vivaboard\VBoard\PROVA.vbs " "FUN1" 
 DOUBLE 
 * F ;

~write "F=" F,\CR;

~PAUSE API;

ENDTEST;

VBScript 
 file PROVA.VBS

Option Explicit

Function FUN1 ( p, q, r )

p = p + 3;

q = q + 5;

PROVA = 333.444

End Function

Sub FUN2( M )

MsgBox M

End Sub

&#169;2008 
 Seica S.p.a - All right reserved