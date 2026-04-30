# ~CHLEV example

~BOOST_MODE BYPASS 
 1/10 DYNAMIC 11/16;

~CHLEV IH=5 
 IL=0 OH=4.4 
 OL=0.8 
 1/15 IH=15 
 IL=-5 OH=4.4 
 OL=0.8 
 IHB=25 
 ILB=10 
 OHB=14.4 
 OLB=10.8 
 11/16; 

~FAMILY B 
 15 16 ; 

~CHLEV *; IH=4.5 IL=0.2 
 OH=2.4 
 OL=0.8 
 1/15; !It changes the values for channels 
 1/15 only and it keeps the previous settings for all other channels.

&#169;2008 
 Seica S.p.a - All right reserved