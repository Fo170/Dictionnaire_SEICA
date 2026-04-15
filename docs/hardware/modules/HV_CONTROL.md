# Contrôle du Module Haute Tension (HV)

Le module HV est utilisé pour les tests d'isolement et de rigidité diélectrique.

## Contacts PCT
- **~PCT=[*]contact** : Contrôle l'ouverture ou la fermeture d'un contact PCT (1 à 144).
  - `~PCT=15` : Ferme le contact 15 et ouvre les autres.
  - `~PCT=*15` : Ferme le contact 15 (mode incrémental).
  - `~PCT=**15` : Ouvre le contact 15.

## Lignes PLn
- **~PLn=[*]canal** : Connecte un canal HV sur l'une des 4 lignes internes (PL1 à PL4).
  - `~PL1=29` : Connecte le canal 29 à la ligne PL1.

## Mesures et Seuils
- **~SET PMM** : Configure le multimètre HV interne.
- **~SET ISOLEV** : Définit les niveaux de tension flottante.

## Exemple
```viva
START TEST_HV STATIC;
  ! Ferme le contact 1 pour l'isolement
  ~PCT=1;
  ! Connecte le canal 10 à la ligne PL1
  ~PL1=10;
  ! Effectue la mesure haute tension
  ~MEASURE Voltage USING=PMM ON=PL1 INTO=AR;
ENDTEST;
```
