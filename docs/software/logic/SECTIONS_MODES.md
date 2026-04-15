# Sections de Test et Modes d'Environnement

## Organisation en Sections
L'utilisation de sections permet de structurer les tests complexes et de faciliter le diagnostic.
- **TESTNAME=<nom>** : Définit le nom du test actuel.
- **SECTION <type>** : Délimite un bloc fonctionnel.
  - `USER` : Instructions utilisateur.
  - `SET` : Configuration des instruments.
  - `DIGITAL` : Patterns numériques.
  - `MEAS` : Mesures analogiques.
  - `DIAG` : Comparaisons et diagnostic.
  - `END` : Fin du test.

## Modes d'Environnement
VIVA bascule entre deux modes d'exécution principaux :
- **/ DMASTER;** : Bascule vers l'environnement **Dynamic** (exécuté par le DSP/Contrôleur temps réel). Utilisé pour les patterns haute vitesse.
- **/ STATIC;** : Retourne vers l'environnement **Static** (exécuté par le PC). Utilisé pour les calculs, l'affichage et les mesures analogiques.

## Options de Pattern
- **/ PROBE;** : Active la sonde manuelle pour ce pattern.
- **/ NOPROBE;** : Désactive la sonde.
- **/ NOSTEP;** : Le pattern est exécuté mais n'est pas enregistré comme une étape de test dans le rapport (utile pour les boucles d'attente).

## Exemple
```viva
TESTNAME=TEST_ALIM;
SECTION SET;
  ~SET PW N=1 V=5 I=1;
SECTION MEAS;
  ~MEASURE Voltage ON=1 INTO=AR;
SECTION DIAG;
  ~ATEST AR LO=4.8 HI=5.2;
ENDTESTNAME;
```
