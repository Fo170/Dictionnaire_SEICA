# ~FILE example

Example 
 1

writing data to a file and reading back .

DECLARE RUNTIME FLOAT VAL,TENS; 
 !Declaration of the integer type variable

DECLARE RUNTIME STRING RES; !Declaration 
 of the STRING type variable

START TRYFILE STATIC; !Beginning of the 
 program

~MEAS VOLT LI1,MAX=2,TIM=1; !Voltage measure 
 executed on the line 1 with end scale equal to 2V and time equal to 1ms. 
 The result is stored in the accumulator.

~STORE TENS; !Assignment of the value 
 in the accumulator to the variable TENS

~FILE1 OPEN_WRITE Risultati.txt !Opening 
 for writing of the file Risultati.txt under the directory .\S20WIN\BOARD\ATD23. 

~BRANCH ONERROR ERR; ! branch if the file 
 can't be created

~FILE1 WRITE TENS; !Writing of the voltage 
 value, container in the variable TENS in the file.

~BRANCH ONERROR ERR; ! branch if can't 
 access the file (write proctected)

~FILE1 WRITE PASS; !Writing of the string 
 PASS on the first line of the file

~FILE1 CLOSE; !Closing of the file.

~FILE1 OPEN_APPEND Risultati.txt !Opening 
 of the file in APPEND 
 mode.

~BRANCH ONERROR ERR; ! branch if the file 
 do not exist

TENS=TENS+1;

~FILE1 WRITE TENS; !Append the value of 
 variable TENS

~BRANCH ONERROR ERR; ! branch if can't 
 access the file (write proctected)

~FILE1 WRITE FAIL; !Append of the string FAIL, at the end of the file

~FILE1 CLOSE; !Closing of the file.

~FILE1 OPEN_READ Risultati.txt !Opening 
 in reading mode of the file Risultati.txt under the directory .\S20WIN\BOARD\ATD23. 

~BRANCH ONERROR ERR; ! branch if the file 
 do not exist

~FILE1 READ VAL; !Reading 
 of the first line of the file, the value is stored in the variable VAL

~BRANCH ONERROR ERR; ! branch if end of 
 file reached

~CURSOR 10,10; !Positioning 
 of the cursor

~WRITE VALUE DEL FILE: VAL; 
 !Display of the first value of the file 

~FILE1 REWIND; !Positioning 
 of the cursor at the beginning of the file

~FILE1 READ VAL; !Second reading of the 
 first line of the, the value is stored in the variable VAL.

~FILE1 READ VAL; !Reading 
 of the second value of the file and store in VAL

~FILE1 READ RES; !Reading 
 the third line e store in the variable RES

~CURSOR 20,10; !Positioning 
 of the cursor

~WRITE VALUE DEL FILE: VAL," TEST ",RES; 
 !Display of the second value of the file 
 and the string (result of the test) 

~FILE1 CLOSE; !Closing 
 of the file.

~FILE1 REMOVE Risultati.txt !delete 
 from the disk the file Risultati.txt 

~EXIT; !ending the the program 

LABEL=ERR; !Error 
 handling.

~WRITE "Error during file management";

FAIL=1; ! Set 
 error flag.

ENDTEST; End of 
 the program.

_______________________________________________________ 

&#169;2008 
 Seica S.p.a - All right reserved