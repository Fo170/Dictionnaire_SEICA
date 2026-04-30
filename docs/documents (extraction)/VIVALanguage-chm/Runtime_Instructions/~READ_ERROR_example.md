# ~READ_ERROR 
 example

Example 1

integer j,k,i;

string s1;

declare channel chan1=1;

declare channel chan2=2;

declare channel chan3=3;

TIMING T1 ;

PERIOD 4000N;

PHASE1 100N,200N;

STROBE1 1100N,1200N;

ENDTIMING;

START F50ERR STATIC;

read_ch_name n=2 s1; !! 
 read the name of channel 2 into string s1

writel "ch2=",s1;

read_ch_name n=1 s1; !! read the name 
 of channel 1 into string s1

writel "ch1=",s1;

read_ch_name n=4 s1; !! 
 return 4 into string s1 since channel 4 as no name

writel "ch4=",s1;

~pull down 1/32;

DYNAMIC TIMING T1;

OM0 1/32;

OH chan2 
 chan3 ;

/ ;

/ STATIC; !! 
 channel 2 & 3 fail

read error j; 
 !! 
 return number of failing channel 2

for i=1 to j; !! scroll for all channel 
 errors

read error n=i k; !! read the number of 
 ith channel fail return 2 then 
 3

read_ch_name n=k s1; !! read the given 
 name of the channel

writel "fail signal=",s1; !! 
 print it 

endfor;

ENDTEST;

____________________________________________________________

&#169;2008 
 Seica S.p.a - All right reserved