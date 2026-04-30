## 1.1 
 Internal 
 Multi Meter - IMM

Lo strumento IMM, 
 allocato nel modulo ACL permette 
 di eseguire le misure analogiche durante il test. Essenzialmente costituito 
 da due strumenti: un misuratore 
 di tensione e un misuratore di corrente. Le caratteristiche principali 
 di questo multimetro interno sono:

- 
 Misure 
 real time, in memoria.

- 
 Misure post processing, da 
 informazioni memorizzate in buffers.

- 
 Misure 
 istantanee (one shot).

- 
 Tipi di misure: valori picco, 
 picco a picco, massimo, minimo, medio RMS, V/T, modulo e fase.

- 
 Misuratore di corrente con 
 ingresso, su Amplificatore Operazionale, a massa virtuale.

- 
 Profondit della memoria per 
 le acquisizioni di 64Kword.

- 
 Frequenza di campionamento 
 sino a 10MSp/sec.

- 
 Input 
 trigger, Output trigger e Post trigger.

- 
 Filtri vari su vettore valori 
 acquisiti

### 1.1.1 
 METODO Clear

Il Metodo 
 CLEAR 

 utilizzato allinterno di programmi funzionali per disattivare lo strumento 
 IMM sconnettendolo dalle 
 linee di misura.

Invia 
 allo strumento un comando di reset che posiziona i parametri dello strumento 
 al valore di default. Indicati in Tab. 41, dellappendice A.

Sintassi

#### 1.1.1.1 
 VIVA LANGUAGE

~CLEAR 
 IMM;

### 1.1.2 
 METODO Set

Il metodo SET 

 utilizzato allinterno di programmi funzionali per programmare i due misuratori 
 analogici MEAS_V e MEAS_I. Lo strumento MEAS_V un misuratore di tensione 
 che permette di misurare la tensione presente tra i due poli INP_VPOS 
 e INP_VNEG. Lo strumento MEAS_I un misuratore di corrente che permette 
 di misurare la corrente in ingresso sul polo INP_I, connesso fisicamente 
 con la linea interna L1, che realizza un livello virtuale di massa e rileva 
 su Rs il valore di I. Il valore del livello virtuale determinato dalla 
 connessione definita per il punto REF_I, che pu essere:

L3 
 Il 
 punto REF_I collegato alla linea di misura L3.

L7 
 Il 
 punto REF_I collegato alla linea di misura L7.

GND 
 Il 
 punto REF_I collegato alla massa del modulo ACL.

Il 
 misuratore prevede un punto di sense, che permette di compensare la presenza 
 di valori resistivi presenti nelle connessioni tra il punto di misura 
 e lingresso del misuratore. Il punto di sense determinato dalla connessione 
 definita per il punto SENSE_I, che pu essere:

L1_I 
 Il 
 punto SENSE_I collegato 
 internamente al punto INP_I_V2.

L5 
 Il 
 punto SENSE_I collegato alla linea di misura L5.

Fig. 
 33- 
 ACL module: Internal instrument MEAS_I

Il polo INP_V, collegato alla linea L1 con una resistenza 
 da 200K, permette di utilizzare lo strumento MEAS_I come secondo misuratore 
 di tensione.

Per 
 le misure di corrente prevista lopzione FCMES( Floating Current Measurement) 
 che permette di ottenere un misuratore di corrente con i due punti di 
 misura isolati da massa (100VMAX). Senza lopzione FCMES uno dei 
 poli del misuratore connesso a massa, come indicato nei disegni di Fig. 
 34. 
 La presenza dellopzione FCMES permette di estendere le scale dello strumento 
 sino a 5 Ampere, con i punti di misura sulla console dellopzione FCMES.

Fig. 
 34- ACL module: Internal instrument 
 MEAS_I and MEAS_I with FCMES option

Lopzione 
 FCMES prevede come ulteriore espansione lopzione PODAMP. Lopzione PODAMP, 
 collegabile allopzione FCMES con connettore telefonico RJ45, permettere 
 di estendere le scale dello strumento di misura sino a 20A, con la remotizzazione 
 delle resistenze di shunt dello strumento.

In 
 Fig. 35 sono riportate le connessioni delle opzioni 
 FCMES e PODAMP allo strumento MEAS_I. 
 In figura sono evidenziati i valori massimi di corrente misurabili con 
 lopzione FCMES in funzione dei punti di collegamento ai probe di misura. 
 In particolare:

 IMAX= 
 500mA 
 con i punti di misura connessi alle line analogiche del sistema.

 IMAX= 
 5A 
 con i punti di misura connessi alla console del modulo ACL.

 IMAX= 
 20A con i punti 
 di misura connessi allopzione PODAMP.

Dalla 
 Fig. 35 si pu osservare che utilizzando lopzione 
 FCMES si impegna la linea interna L1, che pertanto non pi disponibile 
 per altre attivit.

Fig. 
 35- ACL module: FCMES and PODAMP connections 
 to internal instrument MEAS_I

Sintassi

#### 1.1.2.1 
 VIVA LANGUAGE

~SET IMM 
 [MEAS_V=[BUFF|AUTO]| 
 DC|AC|DV_DT|RMS|FFT]

[MEAS_I=[BUFF|AUTO]| DC|AC|DI_DT|RMS|FFT]

[RANGE_V=NONE|200MVG|500MVG|1VG|2VG|5VG|10VG|2V|5V|10V|20V|50V|100V]

[RANGE_I=NONE|

[500MADC|250MADC|100MADC|50MADC|25MADC|10MADC|5MADC|2P5MADC|1MADC|

500UADC|250UADC|100UADC|50UADC|25UADC|10UADC|5UADC|2P5UADC|1UADC 
 20V|

500MAAC|250MAAC|100MAAC|50MAAC|25MAAC|10MAAC|5MAAC|2P5MAAC|1MAAC|

500UAAC|250UAAC|100UAAC|50UAAC|25UAAC|10UAAC]|

[5A|2P5A|1A|500MA|250MA|100MA|50MA|25MA10MA|5MA|2P5MA|1MA500UA|250UA|100UA|50UA|25UA|10UA|5UA|2P5UA|1UA|60MV]|[25A|10A]

[RANGE_V2=

100VDC|50VDC|20VDC|10VDC|5VDC|1VDC|500MVDC|200MVDC|10VAC|5VAC|2VAC]

[MODE=NORMAL|DEBUG|PROCESS] [INP_MEM=MEMORY|CHANNEL|ADC|INPUT]

[N_SAMPLE=value] 
 [FREQ=value] [ADDR=value]

[START=IMMEDIATE|CNT_START|CNT_STOP|CNT_COMP|HW1|HW2|SW1|DISABLE]

[TRIG_OUT=NONE|SW1|SW2] 
 [DELAY_TRIG=value] [EVOLUTION=value]

[INP_VPOS=OPEN|L1|L2|L4|L6|GND|MONITOR|IDRA|IDRB|IDRC|TEMP]

[INP_VNEG=OPEN|L1|L2|L3|L4|L5|L7|GND]

[INP_I_V2=NONE|L1_I|L1_V|L2_AMP|L3_AMP| 
 L4_AMP|L6_AMP|L8_AMP|POD|CON]

[SENSE_I=INTERNAL|L5]

[REF_I=GND|L3|L7|| 
 L2_AMP|L3_AMP| L4_AMP|L5_AMP|L7_AMP]

[FILTER=

NONE|PB_BW|PA_BW|PB_C1|PA_C2|MM|PB_FH|PA_FH|PBD_FH|BR_FH|PB_FB|PA_FB|

PBD_FB|BR_FB]

[ORDER=value] 
 [FT1=value] [FT2=value] [DOMAIN=IMM|PC|ALL];

MEAS_V=option 
 [[BUFF|AUTO]| DC|AC|DV_DT|RMS|FFT|ONE_SHOT|NONE,

default: 
 [BUFF|AUTO]

Indica 
 il tipo di misure che saranno eseguite con il misuratore di tensione (MEAS_V). 
 Il parametro pu assumere uno, pi o nessuno dei possibili valori elencati:

[BUFF|AUTO] 
 La 
 misura viene eseguita ed i dati saranno memorizzati in un buffer di 64Kbyte 
 allinterno del modulo ACL. 
 (indirizzi interni: 0x9600000x96FFFF).

DC 
 Con 
 lesecuzione della misura vengono calcolati anche i valori massimo, minimo 
 e medio per le misure DC.

AC 
 Con 
 lesecuzione della misura vengono calcolati anche i valori picco, picco 
 a picco e offset per le misure AC.

DV_DT 
 Con 
 lesecuzione della misura viene calcolato anche il valore V/T, che rappresenta 
 la pendenza della curva di regressione lineare sul valore dei campioni 
 acquisiti.

RMS 
 Con 
 lesecuzione della misura viene calcolato anche il valore Vrms 
 per le misure in AC.

FFT 
 Con 
 lesecuzione della misura vengono calcolati anche i valori di modulo e 
 fase delle componenti armoniche del segnale acquisito. Il calcolo ottenuto 
 con unanalisi FFT sul vettore dei campioni acquisiti. Il risultato del 
 calcolo sar inserito in due vettori contenenti il modulo e la fase delle 
 componenti armoniche.

ONE_SHOT 
 Viene 
 eseguita una misura istantanea, cio viene generato un solo campione come 
 se il parametro N_SAMPLE avesse valore 1.

NONE 
 Non 
 viene eseguita alcuna misura in tensione, listruzione ~SET IMM eseguita 
 per programmare gli strumenti e generare un segnale di trigger.

MEAS_I=option 
 [[BUFF|AUTO]| DC|AC|DI_DT|RMS|FFT|ONE_SHOT|NONE,

default: 
 [BUFF|AUTO]

Indica 
 il tipo di misure che saranno eseguite con il misuratore di corrente (MEAS_I). 
 Il parametro pu assumere uno, pi o nessuno dei possibili valori elecati:

BUFF|AUTO 
 La 
 misura viene eseguita ed i dati saranno memorizzati in un buffer di 64Kbyte 
 allinterno del modulo ACL. 
 (indirizzi interni: 0x9700000x97FFFF).

DC 
 Con 
 lesecuzione della misura vengono calcolati anche i valori massimo, minimo 
 e medio per le misure DC.

AC 
 Con 
 lesecuzione della misura vengono calcolati anche i valori picco, picco 
 a picco e offset per le misure AC.

DI_DT 
 Con 
 lesecuzione della misura viene calcolato anche il valore I/T, che rappresenta 
 la pendenza della curva di regressione lineare sul valore dei campioni 
 acquisiti.

RMS 
 Con 
 lesecuzione della misura viene calcolato anche il valore Irms 
 per le misure in AC.

FFT 
 Con 
 lesecuzione della misura vengono calcolati anche i valori di modulo e 
 fase delle componenti armoniche del segnale acquisito. Il calcolo ottenuto 
 con unanalisi FFT sul vettore dei campioni acquisiti. Il risultato del 
 calcolo sar inserito in due vettori contenenti il modulo e la fase delle 
 componenti armoniche.

ONE_SHOT 
 Viene 
 eseguita una misura istantanea, cio viene generato un solo campione come 
 se il parametro N_SAMPLE avesse valore 1.

NONE 
 Non 
 viene eseguita alcuna misura in corrente, listruzione ~SET IMM eseguita 
 per programmare gli strumenti e generare un segnale di trigger.

RANGE_V=option|value 
 [[NONE]|200MVG|500MVG|1VG|2VG|5VG|10VG|2V|5V|10V|20V|50V| 
 100V, default: 10VG]

Indica 
 il range del segnale che si vuole misurare con lo strumento MEAS_V predisposto 
 a misurare valori di tensione, ovvero un valore di fondo scala dello strumento 
 che contenga il valore che si prevede di misurare. Pi 
 il valore del fondo scala prossimo al valore misurato pi la risoluzione 
 dello strumento sar precisa. Il parametro pu assumere tredici possibili 
 valori:

NONE|0 
 Indica 
 che lo strumento MEAS_V scollegato: nessuna misura verr eseguita.

200MVG | 
 1 
 Lo 
 strumento impostato per la misura di 0,2V con unimpedenza dingresso 
 > 1G.

500MVG | 
 2 
 Lo 
 strumento impostato per la misura di 0,5V con unimpedenza dingresso 
 > 1G.

1VG | 3 
 Lo 
 strumento impostato per la misura di 1V con unimpedenza dingresso 
 > 1G.

2VG | 4 
 Lo 
 strumento impostato per la misura di 2V con unimpedenza dingresso 
 > 1G.

5VG | 5 
 Lo 
 strumento impostato per la misura di 5V con unimpedenza dingresso 
 > 1G.

10VG | 6 
 Lo 
 strumento impostato per la misura di 10V con unimpedenza dingresso 
 > 1G.

2V | 7 
 Lo 
 strumento impostato per la misura di 2V con unimpedenza dingresso 
 di 1M e 50pF.

5V | 8 
 Lo 
 strumento impostato per la misura di 5V con unimpedenza dingresso 
 di 1M e 50pF.

10V | 9 
 Lo 
 strumento impostato per la misura di 10V con unimpedenza dingresso 
 di 1M e 50pF.

20V | 10 
 Lo 
 strumento impostato per la misura di 20V con unimpedenza dingresso 
 di 1M e 50pF.

50V | 11 
 Lo 
 strumento impostato per la misura di 50V con unimpedenza dingresso 
 di 1M e 50pF.

100V | 12 
 Lo 
 strumento impostato per la misura di 100V con unimpedenza dingresso 
 di 1M e 50pF.

Per 
 valori del parametro RANGE_V compresi tra 200MVG e 10VG, lamplificatore 
 dingresso dello strumento sar programmato con un valore di 
 Common Mode Voltage[1] 
 di 10V. Per valori del parametro RANGE_V compresi tra 2V e 100V, lamplificatore 
 dingresso dello strumento sar programmato con un valore di 
 Common Mode Voltage di 100V.

RANGE_I=option|value 
 [NONE|500MADC|250MADC|100MADC|50MADC|25MADC|10MADC|

5MADC|2P5MADC|1MADC|500UADC|250UADC|100UADC|50UADC|25UADC|10UADC|5UADC|2P5UADC|1UADC|500MAAC|250MAAC|100MAAC|50MAAC|25MAAC|10MAAC|5MAAC|2P5MAAC|1MAAC|500UAAC|250UAAC|100UAAC|50UAAC|25UAAC|10UAAC, 
 default: NONE]

Indica 
 il range del segnale che si vuole misurare con lo strumento MEAS_I predisposto 
 a misurare valori di corrente, ovvero un valore di fondo scala dello strumento 
 che contenga il valore che si prevede di misurare. Pi 
 il valore del fondo scala prossimo al valore misurato pi la risoluzione 
 dello strumento sar precisa. Il parametro pu assumere i seguenti possibili 
 valori:

NONE | 
 0X50 
 Indica che il misuratore 
 chiuso in loop, cio lamperometro ha una resistenza di shunt uguale 
 a 0, ovvero non esegue alcuna misura.

500MADC 
 | 0X00 
 Lo 
 strumento impostato per la misura di 500mA DC/AC.

250MADC 
 | 0X01 
 Lo 
 strumento impostato per la misura di 250mA DC/AC.

100MADC 
 | 0X02 
 Lo 
 strumento impostato per la misura di 100mA DC/AC.

50MADC | 
 0X10 
 Lo 
 strumento impostato per la misura di 50mA DC.

25MADC | 
 0X11 
 Lo 
 strumento impostato per la misura di 25mA DC.

10MADC | 
 0X12 
 Lo 
 strumento impostato per la misura di 10mA DC.

5MADC | 
 0X20 
 Lo 
 strumento impostato per la misura di 5mA DC.

2P5MADC 
 | 0X21 
 Lo 
 strumento impostato per la misura di 2,5mA DC.

1MADC | 
 0X22 
 Lo 
 strumento impostato per la misura di 1mA DC.

500UADC 
 | 0X30 
 Lo 
 strumento impostato per la misura di 500A DC.

250UADC 
 | 0X31 
 Lo 
 strumento impostato per la misura di 250A DC.

100UADC 
 | 0X32 
 Lo 
 strumento impostato per la misura di 100A DC.

50UADC | 
 0X40 
 Lo 
 strumento impostato per la misura di 50A DC.

25UADC | 
 0X41 
 Lo 
 strumento impostato per la misura di 25A DC.

10UADC | 
 0X42 
 Lo 
 strumento impostato per la misura di 10A DC.

5UADC | 
 0X43 
 Lo 
 strumento impostato per la misura di 5A DC.

2P5UADC 
 | 0X44 
 Lo 
 strumento impostato per la misura di 2,5A DC.

1UADC | 
 0X45 
 Lo 
 strumento impostato per la misura di 1A DC.

500MAAC 
 | 0X00 
 Lo 
 strumento impostato per la misura di 500mA DC/AC.

250MAAC 
 | 0X01 
 Lo 
 strumento impostato per la misura di 250mA DC/AC.

100MAAC 
 | 0X02 
 Lo 
 strumento impostato per la misura di 100mA DC/AC.

50MAAC | 
 0X03 
 Lo 
 strumento impostato per la misura di 50mA AC.

25MAAC | 
 0X04 
 Lo 
 strumento impostato per la misura di 25mA AC.

10MAAC | 
 0X05 
 Lo 
 strumento impostato per la misura di 10mA AC.

5MAAC | 
 0X13 
 Lo 
 strumento impostato per la misura di 5mA AC.

2P5MAAC 
 | 0X14 
 Lo 
 strumento impostato per la misura di 2,5mA AC.

1MAAC | 
 0X15 
 Lo 
 strumento impostato per la misura di 1mA AC.

500UAAC 
 | 0X23 
 Lo 
 strumento impostato per la misura di 500A AC.

250UAAC 
 | 0X24 
 Lo 
 strumento impostato per la misura di 250A AC.

100UAAC 
 | 0X25 
 Lo 
 strumento impostato per la misura di 100A AC.

50UAAC | 
 0X33 
 Lo 
 strumento impostato per la misura di 50A AC.

25UAAC | 
 0X34 
 Lo 
 strumento impostato per la misura di 25A AC.

10UAAC | 
 0X35 
 Lo 
 strumento impostato per la misura di 10A AC.

Nelle 
 misure di corrente il polo di input la linea L1 mentre il polo di output 
 definito dal valore assunto dal parametro REF_I

RANGE_I[2]=option|value [5A|2P5A|1A|500MA|250MA|100MA|50MA|25MA10MA|5MA|2P5MA|1MA

500UA|250UA|100UA|50UA|25UA|10UA|5UA|2P5UA|1UA|60MV, 
 default: NONE]

Questo 
 gruppo di valori che il parametro RANGE_I pu assumere significativo 
 solo se presente lopzione FCMES:

5A | 
 0X70 
 Lo 
 strumento impostato per la misura di 5A DC.

2P5A | 
 0X71 
 Lo 
 strumento impostato per la misura di 2,5A DC.

1A | 
 0X72 
 Lo 
 strumento impostato per la misura di 1A DC.

500MA | 
 0X80 
 Lo 
 strumento impostato per la misura di 500mA DC.

250MA | 
 0X81 
 Lo 
 strumento impostato per la misura di 250mA DC.

100MA | 
 0X82 
 Lo 
 strumento impostato per la misura di 100mA DC.

50MA | 
 0X90 
 Lo 
 strumento impostato per la misura di 50mA DC.

25MA | 
 0X91 
 Lo 
 strumento impostato per la misura di 25mA DC.

10MA | 
 0X92 
 Lo 
 strumento impostato per la misura di 10mA DC.

5MA | 
 0XA0 
 Lo 
 strumento impostato per la misura di 5mA DC.

2P5MA | 
 0XA1 
 Lo 
 strumento impostato per la misura di 2,5mA DC.

1MA | 
 0XA2 
 Lo 
 strumento impostato per la misura di 1mA DC.

500UA | 
 0XB0 
 Lo 
 strumento impostato per la misura di 0,50mA DC.

250UA | 
 0XB1 
 Lo 
 strumento impostato per la misura di 0,25mA DC.

100UA | 
 0XB2 
 Lo 
 strumento impostato per la misura di 0,1mA DC.

50UA | 
 0XC0 
 Lo 
 strumento impostato per la misura di 50A DC.

25UA | 
 0XC1 
 Lo 
 strumento impostato per la misura di 25A DC.

10UA | 
 0XC2 
 Lo 
 strumento impostato per la misura di 10A DC.

5UA | 
 0XD0 
 Lo 
 strumento impostato per la misura di 5A DC/AC.

2P5UA | 
 0XD1 
 Lo 
 strumento impostato per la misura di 2,5A DC.

1UA | 
 0XD2 
 Lo 
 strumento impostato per la misura di 1A DC.

60MV | 
 0XE0 
 Il 
 valore di fondo scala dello strumento definito con i valori impostati 
 con listruzione ~SET 
 SHUNT. Con il valore del parametro RANGE_I uguale a 60MV, lo 
 shunt, che determina il fondo scala inserito dallutente. Il valore 
 dello shunt inserito va impostato con listruzione ~SET 
 SHUNT, descritta nel capitolo Errore. 
 L'origine riferimento non stata trovata..

Nelle 
 misure di corrente, con lopzione FCMES, i due poli del misuratore possono 
 essere collegati o alle linee analogiche del sistema o alla console dellopzione 
 FCMES o allopzione PODAMP.

RANGE_I[3]=option|value [25A|10A]

Questo 
 gruppo di valori che il parametro RANGE_I pu assumere significativo 
 solo se presente lopzione PODAMP collegata allopzione FCMES:

25A | 
 0X60 
 Lo 
 strumento impostato per la misura di 25A DC.

10A | 
 0X61 
 Lo 
 strumento impostato per la misura di 10A DC.

Nelle 
 misure di corrente, con lopzione PODAMP collegata allopzione FCMES, 
 i due poli del misuratore sono quelli presenti in uscita del modulo PODAMP.

RANGE_I[4]/RANGE_V2

=option|value 
 [NONE|100VDC|50VDC|20VDC|10VDC|5VDC|2VDC|1VDC|500MVDC|

200MVDC|100VAC|50VAC|20VAC|10VAC|5VAC|2VAC|, 
 default: NONE]

Indica 
 il range del segnale che si vuole misurare con lo strumento MEAS_I predisposto 
 a misurare valori di tensione, ovvero un valore di fondo scala dello strumento 
 che contenga il valore che si prevede di misurare. Pi 
 il valore del fondo scala prossimo al valore misurato pi la risoluzione 
 dello strumento sar precisa. Il parametro pu assumere tredici possibili 
 valori:

NONE | 0X50 
 Indica che il misuratore 
 non esegue alcuna misura.

100VDC | 
 0X30 
 Lo 
 strumento impostato per la misura di 100V, con unimpedenza 
 dingresso di 200K.

50VDC | 
 0X31 
 Lo 
 strumento impostato per la misura di 50V, con unimpedenza dingresso 
 di 200K.

20VDC | 
 0X32 
 Lo 
 strumento impostato per la misura di 20V, con unimpedenza dingresso 
 di 200K..

10VDC | 
 0X40 
 Lo 
 strumento impostato per la misura di 10V, con unimpedenza dingresso 
 di 200K.

5VDC | 0X41 
 Lo 
 strumento impostato per la misura di 5V, con unimpedenza dingresso 
 di 200K.

2VDC | 0X42 
 Lo 
 strumento impostato per la misura di 2V, con unimpedenza dingresso 
 di 200K.

1VDC | 0X43 
 Lo 
 strumento impostato per la misura di 1V, con unimpedenza dingresso 
 di 200K.

500MVDC 
 | 0X44 
 Lo 
 strumento impostato per la misura di 0,5V, con unimpedenza 
 dingresso di 200K.

200MVDC 
 | 0X45 
 Lo 
 strumento impostato per la misura di 0,2V, con unimpedenza 
 dingresso di 200K.

100VAC | 
 0X23 
 Lo 
 strumento impostato per la misura di 100V AC, con unimpedenza 
 dingresso di 200K.

50VAC | 
 0X24 
 Lo 
 strumento impostato per la misura di 50V AC, con unimpedenza 
 dingresso di 200K.

20VAC | 
 0X25 
 Lo 
 strumento impostato per la misura di 20V AC, con unimpedenza 
 dingresso di 200K.

10VAC | 
 0X33 
 Lo 
 strumento impostato per la misura di 10V AC, con unimpedenza 
 dingresso di 200K.

5VAC | 0X34 
 Lo 
 strumento impostato per la misura di 5V AC, con unimpedenza 
 dingresso di 200K.

2VAC | 0X35 
 Lo 
 strumento impostato per la misura di 2V AC, con unimpedenza 
 dingresso di 200K.

Nelle 
 misure di tensione il polo di input la linea L1 con una resistenza in 
 serie di 200K, mentre il polo di output definito dal valore assunto 
 dal parametro REF_I

MODE=option|value 
 [NORMAL|DEBUG|PROCES, 
 default: NORMAL]

Definisce 
 la modalit di escuzione della misura eseguita con lo strumento IMM. Il 
 parametro pu assumere tre possibili valori:

NORMAL | 0 
 Definisce il modo normale di funzionamento 
 dello strumento. Lacquisizione dei dati inizia dopo levento di trigger 
 per linizio misura ed il ritardo impostato con il parametro DELAY_TRIG. 
 I dati acquisiti saranno processati con le modalit definite dai parametri 
 MEAS_V e MEAS_I.

DEBUG | 16 
 Il funzionamento analogo alla modalit 
 NORMAL ma lacquisizione dei dati avviene anche durante il tempo di ritardo 
 impostato con il parametro DELAY_TRIG.

PROCES | 4 
 Lo strumento processa i dati presenti 
 nei buffer di memoria senza eseguire una nuova acquisizione. I dati presenti 
 nei buffer di memoria sono quelli acquisiti da una precedente misura.

INP_MEM=option 
 [MEMORY|CHANNEL|ADC|INPUT, 
 default: ADC]

Definisce 
 la sorgente dei dati che vengono inseriti nei buffer di acquisizione in 
 memoria. I primi 14 bit (bit 013) provengono dal componente ADC che digitalizza 
 i valori analogici provenienti dai punti di misura del misuratore. Gli 
 ultimi 2 bit (bit 1415) 
 possono provenire da sorgenti diverse, selezionabili in funzione del valore 
 assunto dal parametro INP_MEM. Il parametro pu assumere quattro possibili 
 valori:

MEMORY 
 Indica che i dati inseriti nei buffer di acquisizione provengono dai buffer 
 di memoria dei driver DRA e DRB. I dati provenienti dai buffer di memoria 
 dei driver DRA e DRB sono quelli presenti in ingresso ai coponenti DAC, 
 utilizzati per la generazione dei segnali analogici di uscita dai generatori.

CHANNEL 
 Indica che i dati inseriti nei buffer di acquisizione provengono dai sensor 
 dei quattro canali analogici presenti sul modulo ACL.

ADC 
 Indica che i dati inseriti nei buffer di acquisizione provengono dal componente 
 ADC che digitalizza i valori analogici provenienti dal misuratore collegato 
 alle linee analogiche di misura. (flag overflow del componente)

INPUT 
 Indica che i dati inseriti nei buffer di acquisizione provengono dai segnali 
 presenti su un connettore montato sul modulo ACL (JT0, JT1, JT2 e JT3).

La 
 Fig. 36illustra la composizione dei dati che vengono 
 inseriti nei due buffer di acquisizione degli strumenti MEAS-V e MEAS_I

N_SAMPLE=value 
 [065.535, default: 1000]

Indica 
 il numero di campioni da acquisire per lesecuzione della misura. Per 
 il valore da assegnare a questo parametro opportuno tener presente che, 
 per acquisire un ciclo completo del segnale dingresso, il numero di campioni 
 da acquisire dovrebbe essere superiore al rapporto tra la frequenza di 
 campionamento e la frequenza del segnale dingresso.

FREQ=value 
 [1000Hz10.000.000Hz, default: 10.000.000Hz]

Indica 
 il valore della frequenza di campionamento per la digitalizzazione del 
 segnale acquisito. Per il valore da assegnare a questo parametro opportuno 
 tener presente che la frequenza di campionamento dovrebbe avere un valore 
 superiore al doppio della frequenza del segnale dingresso. Il valore 
 consigliato per la frequenza di campionamento di cinque/dieci volte 
 la frequenza dingresso.

ADDR=value 
 [065.535, 
 default: 0]

Indica 
 lindirizzo di partenza, allinterno della memoria utilizzata per lacquisizione 
 del segnale, del buffer che conterr i valori acquisiti.

START=option|value 
 [IMMEDIATE|CNT_START|CNT_STOP|CNT_COMPHW1|HW2|SW1|

DISABLE, 
 default:IMMEDIATE]

Indica 
 la modalit di partenza per lesecuzione della misura. Il parametro pu 
 assumere sette possibili valori:

IMMEDIATE | 0 
 Indica che la misura verr eseguita immediatamente 
 con lesecuzione dellistruzione ~SET 
 IMM.

CNT_START | 1 
 indica che la misura inizier al manifestarsi 
 dellevento Start Trigger dello strumento SCOUNTER presente sul modulo 
 ACL.

CNT_STOP | 2 
 indica che la misura inizier al manifestarsi 
 dellevento Stop Trigger dello strumento SCOUNTER presente sul modulo 
 ACL.

CNT_COMP | 3 
 indica che la misura inizier al manifestarsi 
 dellevento Compare dello strumento SCOUNTER presente sul modulo ACL.

HW1 | 4 
 indica che la misura inizier con lattivazione 
 del segnale HW RTCIN1 proveniente dallesterno del modulo ACL.

HW2 | 5 
 indica che la misura inizier con lattivazione 
 del segnale HW RTCIN2 proveniente dallesterno del modulo ACL.

SW1 | 6 
 indica che la generazione del segnale 
 in uscita inizier al manifestarsi dellevento Trigger SW1, che pu 
 essere generato dagli strumenti IMM e SCOUNTER.

DISABLE | 7 
 indica che il driver verr programmato 
 senza far partire la misura. Per far partire la misura sar necessario 
 eseguire una istruzione ~SET 
 IMMcon il valore assegnato al parametro START diverso da DISABLE.

TRIG_OUT=option|value [NONE|SW1|SW2, 
 default:NONE]

Definisce 
 il tipo di segnale di trigger generato per la sicronizzazione con altri 
 strumenti.

Il parametro 
 pu assumere tre possibili valori:

NONE | 0 
 Non viene generato alcun segnale di trigger.

SW1 | 1 
 Viene generato il segnale di trigger software SW1, sincrono con linizio 
 della misura.

SW2 | 2 
 Il valore SW2 indica la possibilit di generare un secondo segnale di 
 trigger software SW2. Per ora questa funzione non implementata.

DELAY_TRIG=value 
 [0,0000000260sec, 
 default: 0]

Il 
 parametro ha un significato diverso in funzione del valore assunto dal 
 parametro MODE:

Se 
 il parametro MODE programmato al valore NORMAL, indica il ritardo programmato, 
 in secondi, dallevento di trigger di inizio misura, come definito dal 
 parametro START, e lesecuzione della misura.

Se 
 il parametro MODE programmato al valore DEBUG, indica il numero di campioni 
 che saranno acquisiti prima dei campioni che saranno utilizzati per processare 
 i valori acquisiti.

Se 
 il parametro MODE programmato al valore PROCESS, il parametro DELAY_TRIG 
 non significativo.

EVOLUTION=value 
 [065.535, 
 default: 1]

Indica 
 il numero di acquisizioni che saranno eseguite per lesecuzione della 
 misura.

INP_VPOS=option|value [OPEN|L1|L2|L4|L6|GND|MONITOR|IDRA|IDRB|IDRC|TEMP, 
 default:OPEN]

Definisce 
 il collegamento al polo positivo dello strumento MEAS_V, utilizzato per 
 misure di tensione, pu assumere i valori:

OPEN | 0 
 Il polo positivo non colllegato.

L1 | 1 
 Il polo positivo collegato alla linea 
 interna di misura L1.

L2 | 2 
 Il polo positivo collegato alla linea 
 interna di misura L2.

L4 | 4 
 Il polo positivo collegato alla linea 
 interna di misura L4.

L6 | 6 
 Il polo positivo collegato alla linea 
 interna di misura L6.

GND | 9 
 Il polo positivo collegato alla linea 
 di massa del modulo ACL.

MONITOR | 10 
 Il polo positivo collegato al punto 
 di misura, definito con lisruzione ~SET 
 MONITOR, che 
 permette di scegliere il punto che sar monitorato dallo strumento.

IDRA | 11 
 Il polo positivo collegato internamente 
 alluscita del monitor di corrente erogata dal generatore DRA.

IDRB | 12 
 Il polo positivo collegato internamente 
 alluscita del monitor di corrente erogata dal generatore DRB.

IDRC | 13 
 Il polo positivo collegato internamente 
 alluscita del monitor di corrente erogata dal generatore DRC.

TEMP | 14 
 Il polo positivo collegato internamente 
 al sensore di temperatura del dissipatore presente sul modulo ACL.

INP_VNEG=option|value [OPEN|L1|L2|L3|L4|L5|L7|GND, 
 default:OPEN]

Definisce 
 il collegamento al polo negativo dello strumento MEAS_V, utilizzato per 
 misure di tensione, pu assumere i valori:

OPEN | 0 
 Il polo negativo non colllegato.

L1 | 1 
 Il polo negativo collegato alla linea 
 interna di misura L1.

L2 | 2 
 Il polo negativo collegato alla linea 
 interna di misura L2.

L3 | 3 
 Il polo negativo collegato alla linea 
 interna di misura L3.

L4 | 4 
 Il polo negativo collegato alla linea 
 interna di misura L4.

L5 | 5 
 Il polo negativo collegato alla linea 
 interna di misura L5.

L7 | 7 
 Il polo negativo collegato alla linea 
 interna di misura L7.

GND | 9 
 Il polo positivo collegato alla linea 
 di massa del modulo ACL.

INP_I_V2=option|value 
 [OPEN|L1_I|L1_V|L2_AMP|L3_AMP| 
 L4_AMP|L6_AMP|L8_AMP|POD|CON,

default:OPEN]

Definisce 
 il collegamento del morsetto INP_I_V2 dello strumento MEAS_I, pu assumere 
 i valori:

OPEN | 0 
 Il punto INP_I_V2 non collegato.

L1_I | 1 
 Il punto INP_I_V2 collegato alla linea 
 interna di misura L1, per misure di corrente.

L1_V | 2 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L1, per misure di tensione con unimpedenza dingresso 
 di 200K.

L2_AMP | 2 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L2 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L2_AMP valido solo per valori di RANGE_I >= 0x60

L3_AMP | 3 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L3 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L3_AMP valido solo per valori di RANGE_I >= 0x60

L4_AMP | 4 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L4 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L4_AMP valido solo per valori di RANGE_I >= 0x60

L6_AMP | 6 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L6 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L6_AMP valido solo per valori di RANGE_I >= 0x60

L8_AMP | 8 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L8 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L8_AMP valido solo per valori di RANGE_I >= 0x60

POD | 11 
 Il polo INP_I_V2 collegato al punto 
 di misura positivo dellopzione PODAMP attraverso lopzione FCMES, per 
 misure di corrente. Il valore POD valido solo per valori di RANGE_I 
 >= 0x60

CON | 12 
 Il polo INP_I_V2 collegato al punto 
 di misura positivo presente 
 sulla console dellopzione FCMES, per misure di corrente. Il valore POD 
 valido solo per valori di RANGE_I >= 0x60

SENSE_I=option|value 
 [INTERNAL|L5, 
 default:INTERNAL]

Definisce 
 il collegamento del punto di sense per la corrente dingresso (SENSE_I). 
 Il parametro pu assumere i valori:

INTERNAL | 0 
 Il punto SENSE_I connesso internamente 
 alla linea L1.

L5 | 1 
 Il punto SENSE_I connesso internamente 
 alla linea L5.

REF_I=option|value 
 [GND|L3|L7| L2_AMP|L3_AMP| 
 L4_AMP|L5_AMP|L7_AMP,

default:GND]

Definisce 
 il collegamento del punto REF_I dello strumento MEAS_I, pu assumere i 
 valori:

GND | 0 
 Il punto REF_I colllegato alla linea 
 di massa del modulo ACL.

L3 | 3 
 Il punto REF_I_I collegato alla linea 
 di misura interna L3.

L7 |7 
 Il punto REF_I collegato alla linea 
 di misura interna L7.

L2_AMP | 2 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L2 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L2_AMP valido solo per valori di RANGE_I >= 0x60

L3_AMP | 3 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L3 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L3_AMP valido solo per valori di RANGE_I >= 0x60

L4_AMP | 4 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L4 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L4_AMP valido solo per valori di RANGE_I >= 0x60

L5_AMP | 5 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L5 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L5_AMP valido solo per valori di RANGE_I >= 0x60

L7_AMP | 7 
 Il polo INP_I_V2 collegato alla linea 
 interna di misura L7 attraverso lopzione FCMES, per misure di corrente. 
 Il valore L7_AMP valido solo per valori di RANGE_I >= 0x60

FILTER=option|value 
 [NONE|PB_BW|PA_BW|PB_C1|PA_C2|MM|PB_FH|PA_FH|PBD_FH|BR_FH|

PB_FB|PA_FB|PBD_FB|BR_FB, 
 default:NONE|0]

Definisce 
 il tipo di filtro digitale che verr applicato sui due buffer che contengono 
 i vettori dei valori di tensione e corrente acquisiti. Il risultato sar 
 disponibile in due vettori che conterrrano i valori filtrati con il tipo 
 di filtro scelto. La dimensione massima dei vettori filtrati di 16 Kword. 
 Con lapplicazione di un filtro, i calcoli definiti con i parametri MEAS_V 
 e MEAS_I sono eseguiti leggendo i dati dai vettori filtrati e non dai 
 buffer di acquisizione.

Il parametro 
 pu assumere i valori:

NONE | 0 
 Non viene applicato alcun filtro sui due buffer di acquisizione.

PB_BW | 1 
 I buffer di acquisizione saranno filtrati con un filtro Passa Basso Butterworth.

PA_BW | 2 
 I buffer di acquisizione saranno filtrati con un filtro Passa Alto Butterworth.

PB_C1 | 3 
 I buffer di acquisizione saranno filtrati con un filtro Passa Basso Chebyshev 
 tipo 1.

PA_C2 | 4 
 I buffer di acquisizione saranno filtrati con un filtro Passa Alto Chebyshev 
 tipo 1.

MM | 5 
 I buffer con i i valori filtrati conterranno la media mobile dei valori 
 acquisiti. Il numero di campioni utilizzati per il calcolo della media 
 mobile definito dal valore assunto dal parametro FT1. Quando il parametro 
 FILTER ha valore MM il parametro FT1 non indicher un valore di frequenza, 
 ma un numero intero.

PB_FH | 6 
 I buffer di acquisizione saranno filtrati con un filtro Passa Basso Fir 
 Hamming.

PA_FH | 7 
 I buffer di acquisizione saranno filtrati con un filtro Passa Alto Fir 
 Hamming.

PBD_FH | 8 
 I buffer di acquisizione saranno filtrati con un filtro Passa Banda Fir 
 Hamming.

BR_FH | 9 
 I buffer di acquisizione saranno filtrati con un filtro 
 a Reiezione di Banda Fir Hamming.

PB_FB | 10 
 I buffer di acquisizione saranno filtrati con un filtro Passa Basso Fir 
 Blackman.

PA_FB | 11 
 I buffer di acquisizione saranno filtrati con un filtro Passa Alto Fir 
 Blackman.

PBD_FB | 12 
 I buffer di acquisizione saranno filtrati con un filtro Passa Banda Fir 
 Blackman.

BR_FB | 13 
 I buffer di acquisizione saranno filtrati con un filtro 
 a Reiezione di Banda Fir Blackman.

ORDER=value 
 [020, default: 10]

Indica 
 il numero dordine del filtro. In altre parole indica la velocit di attenuazione 
 nel passaggio dalla banda passante alla banda attenuata del filtro.

FT1=value 
 [0100.000Hz, default: 0]

Indica 
 la prima frequenza di taglio per il tipo di filtro definito con il parametro 
 FILTER. Quando il parametro FILTER 
 ha valore MM il parametro FT1 non indicher un valore di frequenza, 
 ma un numero intero che identifica il numero di campioni utilizzati per 
 il calcolo della media mobile.

FT2=value 
 [0100.000Hz, default: 0]

Indica 
 la seconda frequenza di taglio per il tipo di filtro definito con il parametro 
 FILTER.

DOMAIN=option|value 
 [IMM|PC|ALL, default: IMM]

Questo 
 parametro permette di sincronizzare lesecuzione del programma in funzione 
 dello stato del modulo ACL, dello strumento IMM o di nessuno dei due.

Il parametro 
 pu assumere i valori:

IMM | 0 
 Indica che il controllo sar posseduto 
 dal modulo ACL che lo liberer al termine della misura.

PC | 1 
 Indica che il controllo restr posseduto 
 Main Computer senza eseguire alcuna attesa sul fine run DRB o fine run 
 di tutti gli strumenti.

ALL | 2 
 Indica che il controllo sar posseduto 
 dal modulo ACL che lo liberer al termine del fine run di tutti gli strumenti 
 utilizzati

Il 
 valore di default del parametro DOMAIN IMM.

Fig. 
 36- ACL module: Data source for MEAS_V 
 and MEAS_I buffers

Sintassi

#### 1.1.2.2 
 VIVA LANGUAGE

~MEAS 
 IMM [INTO=variable] 
 [N_SAMPLE=value] [ADDR=value] [MEAS=option|value]

DETTAGLIO Parametri

Measure Only =value 
 [TRUE, FALSE]

 Variabile booleana che permette di selezionare se eseguire un istruzione 
 SET prima

 della Measure , oppure No.

N_SAMPLE =value 
 [01.000, 
 default: 1]

Indica 
 il numero di campioni da trasferire, dal buffer di acquisizione, per lelaborazione 
 della misura.

ADDR=value 
 [065.535, 
 default: 0]

Indica 
 lindirizzo di partenza, allinterno della memoria utilizzata per lacquisizione 
 del segnale, del buffer che conterr i valori acquisiti.

MEAS=option|value 
 [IST_I| IST_V|IST_V2|MAX_V|MIN_V|AVERAGE_V|RMS_V|P_V|PP_V|OFFSET_V|

DV_DT|MAX_I|MIN_I|AVERAGE_I|RMS_I|P_I|PP_I|OFFSET_I|DI_DT|

MAX_V2|MIN_V2|AVERAGE_V2|RMS_V2|P_V2|PP_V2|OFFSET_V2|

DV2_DT|PHASE_V2|MODULE_V2BUFFER_V|BUFFER_I|BUFFER_V2|

MODULE_V|PHASE_V|MODULE_I|PHASE_I|VECT_VF|VECT_IF|

REL_DRA|REL-DRB|REL_DRC|REL_MESVP|REL_MESVM|REL_MESI|

REL_MESI_REF|REL_GND|REL_PULL, 
 default:IST_I]

Definisce 
 il tipo di misura fornita dallo strumento. Per velocizzare il tempo di 
 esecuzione della misura, i valori assegnati al parametro devono essere 
 congruenti con i valori assegnati ai parametri MEAS_V e MEAS_I dellistruzione 
 ~SET IMM con la quale 
 si eseguita lacquisizione della misura. Il parametro 
 pu assumere i seguenti valori:

IST_I | 0 
 Viene fornita la misura istantanea di corrente, in Ampere. Listruzione 
 ~SET IMM precedente 
 deve essere stata eseguita con il parametro MEAS_I=ONE_SHOT.

IST_V2 | 0 
 Viene fornita la misura istantanea di tensione, in Volt eseguita dallo 
 strumento MEAS_I se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V 
 e con 
 il parametro MEAS_I=ONE_SHOT.

IST_V | 1 
 Viene fornita la misura istantanea di tensione, in Volt. Listruzione 
 ~SET IMM precedente 
 deve essere stata eseguita con il parametro MEAS_V=ONE_SHOT.

MAX_V | 2 
 Viene fornita la misura del valore massimo di tensione acquisita, in Volt. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=DC.

MIN_V | 3 
 Viene fornita la misura del valore minimo di tensione acquisita, in Volt. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=DC.

AVERAGE_V | 4 
 Viene fornita la misura del valore medio dei valori di tensione acquisiti, 
 in Volt. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=DC.

RMS_V | 5 
 Viene fornita la misura del valore di tensione Vrms del segnale misurato, 
 in Volt. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=AC.

P_V | 6 
 Viene fornita la misura del valore di tensione di picco del segnale misurato, 
 in Volt. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=AC.

PP_V | 7 
 Viene fornita la misura del valore di tensione picco a picco del segnale 
 misurato, in Volt. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=AC.

OFFSET_V | 8 
 Viene fornita la misura del valore di offset del segnale misurato, in 
 Volt. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=AC.

DV_DT | 9 
 Viene fornita la misura del valore di valore 
 V/T, 
 che rappresenta la pendenza della curva di regressione lineare sul valore 
 dei campioni acquisiti, in Volt/sec. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=DV_DT.

MAX_I | 10 
 Viene fornita la misura del valore massimo di corrente acquisita, in Ampere. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=DC.

MIN_I | 11 
 Viene fornita la misura del valore minimo di corrente acquisita, in Ampere. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=DC.

AVERAGE_I | 12 
 Viene fornita la misura del valore medio dei valori di corrente acquisiti, 
 in Ampere. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=DC.

RMS_I | 13 
 Viene fornita la misura del valore di corrente Vrms del segnale misurato, 
 in Ampere. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=AC.

P_I | 14 
 Viene fornita la misura del valore di corrente di picco del segnale misurato, 
 in Ampere. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=AC.

PP_I | 15 
 Viene fornita la misura del valore di corrente picco a picco del segnale 
 misurato, in Ampere. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=AC.

OFFSET_I | 16 
 Viene fornita la misura del valore di offset del segnale misurato, in 
 Ampere. Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=AC.

DI_DT | 17 
 Viene fornita la misura del valore di valore 
 I/T, 
 che rappresenta la pendenza della curva di regressione lineare sul valore 
 dei campioni acquisiti, in Ampere/sec. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_I=DI_DT.

MAX_V2 | 10 
 Viene fornita la misura del valore massimo di tensione acquisita in Volt, 
 eseguita dallo strumento MEAS_I se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V 
 econ 
 il parametro MEAS_V=DC.

MIN_V2 | 11 
 Viene fornita la misura del valore minimo di tensione acquisita in Volt, 
 eseguita dallo strumento MEAS_I se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V 
 econ 
 il parametro MEAS_V=DC.

AVERAGE_V2 | 12 
 Viene fornita la misura del valore medio dei valori di tensione acquisiti 
 con lo strumento MEAS_I se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V 
 e con il parametro MEAS_V=DC.

RMS_V2 | 13 
 Viene fornita la misura del valore di tensione Vrms del segnale misurato 
 in Volt, acquisito con lo strumento MEAS_I, se listruzione ~SET IMM precedente stata 
 eseguita con il parametro INP_I_V2=L1_V e 
 con il parametro MEAS_V=AC.

P_V2 | 14 
 Viene fornita la misura del valore di tensione di picco del segnale misurato 
 in Volt, acquisito con lo strumento MEAS_I, se listruzione ~SET IMM precedente stata 
 eseguita con il parametro INP_I_V2=L1_V e 
 con il parametro MEAS_V=AC.

PP_V2 | 15 
 Viene fornita la misura del valore di tensione picco a picco del segnale 
 misurato in Volt, acquisito con lo strumento MEAS_I, se listruzione 
 ~SET IMM precedente 
 stata eseguita con il parametro INP_I_V2=L1_V. 
 Listruzione ~SET 
 IMM precedente deve essere stata eseguita con il parametro MEAS_V=AC.

OFFSET_V2 | 16 
 Viene fornita la misura del valore di 
 offset del segnale misurato in Volt acquisito con lo strumento MEAS_I, 
 se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V 
 e con 
 il parametro MEAS_V=AC.

DV2_DT | 17 
 Viene fornita la misura del valore di V2/T, 
 che rappresenta la pendenza della curva di regressione lineare sul valore 
 dei campioni acquisiti, in Volt/sec. 
 I valori sono acquisiti con lo strumento MEAS_I, se listruzione 
 ~SET IMM precedente 
 stata eseguita con il parametro INP_I_V2=L1_V e con il parametro MEAS_I=DV_DT.

PHASE_V2 | 22 
 Viene fornito il buffer contenente i valori della fase delle componenti 
 armoniche dei valori di tensione del segnale acquisito, in gradi. I valori 
 sono acquisiti con lo strumento MEAS_I, se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V.

MODULE_V2 | 23 
 Viene fornito il buffer contenente i valori del moduli delle componenti 
 armoniche del segnale acquisito, in Ampere. I valori sono acquisiti con 
 lo strumento MEAS_I, se listruzione ~SET 
 IMM precedente stata eseguita con il parametro INP_I_V2=L1_V.

BUFFER_V | 18 
 Viene fornito il buffer contenente i valori di tensione acquisiti, in 
 Volt.

BUFFER_I | 19 
 Viene fornito il buffer contenente i valori di corrente acquisiti, in 
 Ampere.

BUFFER_V2 | 26 
 Viene fornito il buffer contenente i valori di tensione acquisiti, in 
 Volt. I valori sono acquisiti con lo strumento MEAS_I, se listruzione 
 ~SET IMM precedente 
 stata eseguita con il parametro INP_I_V2=L1_V.

MODULE_V | 20 
 Viene fornito il buffer contenente i valori del moduli delle componenti 
 armoniche del segnale acquisito, in Volt.

PHASE_V | 21 
 Viene fornito il buffer contenente i valori della fase delle componenti 
 armoniche dei valori di tensione del segnale acquisito, in gradi.

MODULE_I | 22 
 Viene fornito il buffer contenente i valori del moduli delle componenti 
 armoniche del segnale acquisito, in Ampere.

PHASE_I | 23 
 Viene fornito il buffer contenente i valori della fase delle componenti 
 armoniche dei valori di corrente del segnale acquisito, in gradi.

VECT_VF | 24 
 Viene fornito il buffer contenente i valori di tensione acquisiti e filtrati 
 con il filtro definito con il parametro FILTER, in Volt.

VECT_IF | 25 
 Viene fornito il buffer contenente i valori di corrente acquisiti e filtrati 
 con il filtro definito con il parametro FILTER, in Ampere.

REL_DRA | 200 
 Viene fornito lo stato della connessione dei rel dello strumento DRA. 
 Per ora questa funzione non implementata.

REL_DRB | 201 
 Viene fornito lo stato della connessione dei rel dello strumento DRB. 
 Per ora questa funzione non implementata.

REL_DRC | 202 
 Viene fornito lo stato della connessione dei rel dello strumento DRC. 
 Per ora questa funzione non implementata.

REL_MESVP | 203 
 Viene fornito lo stato della connessione dei rel del polo positivo dello 
 strumento MEAS_V. Per ora questa funzione non implementata.

REL_MESVM | 204 Viene 
 fornito lo stato della connessione dei rel del polo negativo dello strumento 
 MEAS_V. Per ora questa funzione non implementata.

REL_MESI | 205 
 Viene fornito lo stato della connessione dei rel del polo positivo dello 
 strumento MEAS_I. Per ora questa funzione non implementata.

REL_MESI_REF | 206Viene 
 fornito lo stato della connessione dei rel del polo SENSE dello strumento 
 MEAS_I. Per ora questa funzione non implementata.

REL_GND | 207 
 Viene fornito lo stato della connessione dei rel dello strumento AGND. 
 Per ora questa funzione non implementata.

REL_PULL | 208 
 Viene fornito lo stato della connessione dei rel dello strumento PULL. 
 Per ora questa funzione non implementata.

[1] 
 Il valore di Common Mode Voltage indica il valore massimo di tensione 
 applicabile ai due ingressi differenziali dello strumento MEAS_V, rispetto 
 al riferimento di massa dal sistema GND.

[2] 
 Valori del parametro RANGE_I validi in presenza dellopzione FCMES.

[3] 
 Valori del parametro RANGE_I validi in presenza dellopzione PODAMP collegata 
 allopzione FCMES.

[4] 
 Valori del parametro RANGE_I validi quando si vuole utilizzare lo strumento 
 MEAS_I come misuratore di tensione, ovvero con il parametro INP_I_V2 impostato 
 con il valore L1_V. Il parametro RANGE_V2 un alias del parametro RANGE_I.