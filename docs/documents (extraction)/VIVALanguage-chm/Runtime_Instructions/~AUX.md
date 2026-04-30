# ~AUX 

# 

# 

________________________

### Syntax

~AUX 
 [*] 
 [ON] [OFF] [INV] modes 
 (channel_list),[ modes, (channel_list)], etc. 

[*]

Maintains the previous channel settings (specified in a previous ~AUX 
 instruction.

ON

connect the channel frontend (only the first 4 channel by sequence) 
 see ~CHOUT

OFF

disconnect the channel frontend (only the first 4 channel by sequence)

 INV
invert the function selected

 modes

"Phase_1", 
 0 TAT964_AUXS_PH1

"Phase_2", 
 1 TAT964_AUXS_PH2

"Phase_3", 
 2 TAT964_AUXS_PH3

"Phase_4", 
 3 TAT964_AUXS_PH4

"Window_1", 4 TAT964_AUXS_WIN1

"Window_2", 5 TAT964_AUXS_WIN2

"Window_3", 6 TAT964_AUXS_WIN3

"Window_4", 7 TAT964_AUXS_WIN4

"Waveform_1", 8 TAT964_AUXS_WF1

"Waveform_2", 9 TAT964_AUXS_WF2

"Waveform_3", 10 TAT964_AUXS_WF3

"Waveform_4", 11 TAT964_AUXS_WF4

"Sync_1", 
 12 TAT964_AUXS_S1

"Sync_2", 13 
 TAT964_AUXS_S2

"Idle_Active", 14 TAT964_AUXS_IDLE

"Sequence_Active", 15 TAT964_AUXS_SEQ

"CH1_Good_1", 16 TAT964_AUXS_CH1G1

"CH1_Good_0", 17 TAT964_AUXS_CH1G0

"CH32_Good_1", 18 TAT964_AUXS_CH32G1

"CH32_Good_0", 19 TAT964_AUXS_CH32G0

"AUX1_Input", 20 TAT964_AUXS_AUX1I

"AUX2_Input", 21 TAT964_AUXS_AUX2I

"AUX3_Input", 22 TAT964_AUXS_AUX3I

"AUX4_Input", 23 TAT964_AUXS_AUX4I

"Sequence_Flag_1", 24 TAT964_AUXS_SF1

"Sequence_Flag_2", 25 TAT964_AUXS_SF2

"T0CLK", 
 26 TAT964_AUXS_T0CLK

"Pattern_Clock", 27 TAT964_AUXS_PCLK

"SEQ_CLK_In", 28 TAT964_AUXS_SEQCLKI

"Jump_In", 29 
 TAT964_AUXS_JUMPIN

"Error_In", 30 TAT964_AUXS_ERRIN

"SEQCLKD_In", 31 TAT964_AUXS_SEQCLKDI

"T0CLK_Out", 32 TAT964_AUXS_T0CLKO

"SEQ_CLK_Out", 33 TAT964_AUXS_SEQCLKO

"Jump_Out", 34 TAT964_AUXS_JUMPO

"SEQCLKD_Out", 35 TAT964_AUXS_SEQCLKDO

"Misc_1", 36 
 TAT964_AUXS_MISC1

"Misc_2", 37 
 TAT964_AUXS_MISC2

"Misc_3", 38 
 TAT964_AUXS_MISC3

"Misc_4", 39 
 TAT964_AUXS_MISC4

"Misc_5", 40 
 TAT964_AUXS_MISC5

"Misc_6", 41 
 TAT964_AUXS_MISC6

"Misc_7", 42 
 TAT964_AUXS_MISC7

"Misc_8", 43 
 TAT964_AUXS_MISC8

"Misc_9", 44 
 TAT964_AUXS_MISC9

"Misc_10", 45 TAT964_AUXS_MISC10

"Misc_11", 46 TAT964_AUXS_MISC11

"Misc_12", 47 TAT964_AUXS_MISC12

"Load_Sequence_Register", 48 TAT964_AUXS_LSR

"Load_Loop_Count", 
 49 TAT964_AUXS_LLC

"Counter_Active", 
 50 TAT964_AUXS_CA

"Clocks_Per_Pattern_Done",51 TAT964_AUXS_CPPD

"Last_Word", 
 52 TAT964_AUXS_LW

"Burst_Count_Done", 
 53 TAT964_AUXS_BCD

"Loop_Count_Done", 
 54 TAT964_AUXS_LCD

"Gosub_Active", 
 55 TAT964_AUXS_INSUB

"Counted_Loop", 
 56 TAT964_AUXS_CLOOP

"Subroutine_Return", 
 57 TAT964_AUXS_SR

"Return_Flag", 
 58 TAT964_AUXS_RTN

"Last_Sequence", 
 59 TAT964_AUXS_LS

"Misc_13", 
 60 TAT964_AUXS_MISC13

"Misc_14", 
 61 TAT964_AUXS_MISC14

"Misc_15", 
 62 TAT964_AUXS_MISC15

"Misc_16", 
 63 TAT964_AUXS_MISC16

Channel_list

list of channels to be associated to the specified setting

__________________________

### Note

 * 

the auxiliary channel 
 only 12 for each sequencer.

 * 

the auxiliary channel 
 has the same number of the regular channel 1/12,33/44,65/76 etc.

__________________________

### See 
 also 

~CHLEV, ~FRONTEND ~CHOUT

__________________________

### Examples

~frontend example 

Determines the mode for the auxiliary channel 

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved