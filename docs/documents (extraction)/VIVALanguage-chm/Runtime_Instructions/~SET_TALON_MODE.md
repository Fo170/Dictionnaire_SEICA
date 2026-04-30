# ~SET TALON_MODE 

# 

# 

________________________

### Syntax

~SET 
 TALON_MODE TEMPERATURE=degree ;

 Set 
 the temperature otherthan will generate an Alert

~SET 
 TALON_MODE DISABLE_ALERT|ENABLE_ALERT ;

 Enable/disable 
 the Alert generation

~SET 
 TALON_MODE DISABLE_CASS_MODE|ENABLE_CASS_MODE ;

 Enable/disable 
 the CASS_MODE (channel connected by default)

~SET 
 TALON_MODE TRACE|NOTRACE;

 Enable/disable 
 the trace mode onto the file T964.log ( if exist)

~SET 
 TALON_MODE CRC16|CRC32;

 select 
 the kind of crc (for the whole system)

~SET 
 TALON_MODE PIPELINE_ON|PIPELINE_OFF|PIPELINE_EX;

 Set 
 the pipeline mode.

~SET 
 TALON_MODE PATTERN_MASK;

 Set 
 an old methode to mask the entire pattern by changing OL/OH into OM 

 provided 
 only for campatibility

~SET 
 TALON_MODE RECOD_ERROR|RECORD_RESPONSE;

 Set 
 the mode of recording of the channel 

__________________________

### Note

__________________________

### See 
 also 

__________________________

### Examples

~SET TALON_MODE example 

Select the various mode of operation and 
 option

Preprocessor * Runtime : Dynamic * 
 Static 
 R

Modules: 

T964

&#169;2008 
 Seica S.p.a - All rights reserved