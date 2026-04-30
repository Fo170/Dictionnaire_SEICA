# ~ON example

timing t1;

period 1u;

strobe 500;

endtiming;

~SUBR ERROR;

!~PAUSE "EVENT ON_ERROR";

~WRITE "\CREVENT ON_ERROR";

ev=ev|1;

~RETURN;

~ENDSUBR;

~SUBR EV_dynamic;

!~PAUSE "EVENT ON_dynamic";

~WRITE "\CREVENT ON_dynamic";

ev=ev|h100;

~RETURN;

~ENDSUBR;

~SUBR EV_endburst;

!~PAUSE "EVENT ON_endburst";

~WRITE "\CREVENT ON_endburst";

ev=ev|h200;

~RETURN;

~ENDSUBR;

~SUBR EV_ANA_ERROR;

!~PAUSE "EVENT ON_ana_ERROR";

~WRITE "\CREVENT ON_ana_ERROR";

ev=ev|h2;

~RETURN;

~ENDSUBR;

~SUBR EV_DIG_ERROR;

!~PAUSE "EVENT ON_DIG_ERROR";

~WRITE "\CREVENT ON_DIG_ERROR";

ev=ev|h4;

~RETURN;

~ENDSUBR;

~SUBR EV_sta_ERROR;

!~PAUSE "EVENT ON_sta_ERROR";

~WRITE "\CREVENT ON_sta_ERROR";

ev=ev|h8;

~RETURN;

~ENDSUBR;

~SUBR EV_timeout;

!~PAUSE "EVENT ON_timeout";

~set cluster_timeout val=100;

~WRITE "\CREVENT ON_timeout";

ev=ev|h10;

~RETURN;

~ENDSUBR;

~SUBR BREAK;

ev=ev|h20;

!~PAUSE "EVENT ON_BREAK";

~WRITE "\CREVENT ON_BREAK";

~RETURN;

~ENDSUBR;

~SUBR ABORT;

ev=ev|h40;

!~PAUSE "EVENT ON_ABORT";

~WRITE "\CREVENT ON_ABORT";

t=200; ! to end the loop waiting for esc

~RETURN;

~ENDSUBR;

~SUBR EV_END;

ev=ev|h80;

!~PAUSE "EVENT ON_END";

~WRITE "\CREVENT ON_END";

~if ev=h3ff;

~WRITE "\CRFOUND ALL EVENT PASS";

~clear fail;

~else;

~FORMAT HEX;

~WRITE "\CRSOME EVENT MISSING FAIL ",EV ;

~set fail;

~endif;

~RETURN;

~ENDSUBR;

DECLARE RUNTIME INTEGER T,ev;

DECLARE SUBROUTINE ERROR,BREAK,EV_END,ABORT,EV_ana_ERROR,EV_dig_ERROR,EV_sta_ERROR,ev_endburst,ev_dynamic,ev_timeout;

START EVENT STATIC;

~ON ERROR CALL ERROR ;

! generic error handling

~WRITE "\CR ~ATEST";

~atest ar lo=1 hi=-1 name="test2";

~ON static_ERROR CALL EV_sta_ERROR ;

~ON ana_ERROR CALL EV_ana_ERROR ;

~ON dig_ERROR CALL EV_dig_ERROR ;

~ON dynamic CALL EV_dynamic ;

~ON endburst CALL EV_endburst ;

~ON BREAK CALL BREAK;

~ON END CALL EV_END;

~ON_ABORT CALL ABORT ;

~on_timeout call ev_timeout ;

~WRITE "\CRWAIT TESTING CLUSTER TIMEOUT";

~set cluster_timeout val=500m;

~FOR T=1 TO 100;

~DELAY 10M;

~ENDFOR;

~set cluster_timeout val=20;

~WRITE "\CRTYPE ESC IN 20 SECOND TO TEST ABORT";

~FOR T=1 TO 200;

~DELAY 50M;

~ENDFOR;

~set cluster_timeout val=20;

/ dmaster timing t1;

ol 1;

/;

oh 1;

/;

/ static;

ol 1;

/;

oh 1;

/;

~WRITE "\CR ~ATEST";

~atest ar lo=1 hi=-1 name="test1";

~WRITE "\CR SET FAIL";

~SET FAIL;

~WRITE "\CR BREAK";

~BREAK ALWAYS;

~BREAK ;

ENDTEST;

&#169;2008 
 Seica S.p.a - All right reserved