# Compteur Universel (SCOUNTER)

L'instrument SCOUNTER du module ACL permet de mesurer des fréquences, des intervalles de temps et de compter des impulsions avec une grande précision.

## Modes de fonctionnement
- **FREQ** : Mesure de fréquence (Hz).
- **PERIOD** : Mesure de la période d'un signal (s).
- **TINT_AB** : Intervalle de temps entre un événement sur le canal A et un événement sur le canal B.
- **COUNT** : Comptage pur d'impulsions.

## Programmation (~SET SCOUNTER)
### Syntaxe
```viva
~SET SCOUNTER MODE=<mode> VAL=<val_attendue> LEVEL_A=<seuil> SLOPE_A=POS|NEG INP_A=L4|L6 ;
```
- **VAL** : Valeur théorique attendue (permet le réglage automatique des échelles).
- **LEVEL** : Seuil de déclenchement (V).
- **SLOPE** : Front montant (POS) ou descendant (NEG).

## Lecture de mesure (~MEAS SCOUNTER)
### Syntaxe
```viva
~MEAS SCOUNTER [INTO=<variable>] ;
```
Le résultat est placé dans le registre `AR` ou dans la variable spécifiée.

## Exemple
```viva
! Mesure d'un signal de 10kHz sur la ligne 4
~SET SCOUNTER MODE=FREQ VAL=10000 LEVEL_A=2.5 SLOPE_A=POS INP_A=L4 ;
~MEAS SCOUNTER INTO=MA_FREQ ;
~WRITE "Fréquence lue : ", MA_FREQ ;
```
