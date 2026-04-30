## 1.1 
 Driver HV - DRC -

Il driver DRC uno 
 strumento allocato nel modulo ACL e presenta le seguenti caratteristiche:

- 
 Generatore DC con tensione 
 e limite di corrente programmabili

- 
 Funzionamento nei quattro quadranti

- 
 Valore della tensione in uscita: 
 100V

- 
 Valore della corrente in uscita: 
 0,1A

- 
 Due portate in corrente (10/100mA 
 e 0,1/10mA)

- 
 Slew 
 rate: 10V/s

- 
 Risoluzione per i valori di 
 corrente e tensione su 14 bit

Sintassi

#### 1.1.1.1 
 VIVA LANGUAGE

~CLEARDRC;

~SET 
 DRC 
 [V=value] 
 [I=value] [OUT=NONE|L1|L2|L4|L6|]

[START=IMMEDIATE|SW1];

DETTAGLIO Parametri

V=value 
 [-100 
 +100V, default: 0V]

Indica 
 il valore di programmazione della tensione in uscita dallo strumento.

I=value 
 [0,0001 
 0,1A, default: 0,01A]

Indica 
 il valore di programmazione della massima corrente erogata dallo strumento.:

OUT=option|value 
 [NONE|L1|L2|L4|L6, default: NONE]

Definisce 
 la linea del modulo ACL alla quale verr collegato luscita dello strumento 
 DRC, pu assumere i valori:

NONE | 0 
 lo strumento non collegato ad alcuna 
 linea interna di misura.

L1 | 1 
 luscita dello strumento collegato 
 alla linea interna di misura L1.

L2 | 2 
 luscita dello strumento collegato 
 alla linea interna di misura L2.

L4 | 4 
 luscita dello strumento collegato 
 alla linea interna di misura L4.

L6 | 6 
 luscita dello strumento collegato 
 alla linea interna di misura L6.

START=option|value 
 [IMMEDIATE|SW1, 
 default:IMMEDIATE]

Indica 
 la modalit di partenza per la generazione del segnale. Il parametro pu 
 assumere sette possibili valori:

IMMEDIATE | 0 
 indica che la generazione del segnale 
 in uscita inizier immediatamente.

SW1 | 1 
 indica che la generazione del segnale 
 in uscita inizier al manifestarsi dellevento Trigger SW1, che pu 
 essere generato dagli strumenti IMM e SCOUNTER.