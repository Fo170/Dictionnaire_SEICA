# Timing et Horloge Système

La gestion du timing est cruciale pour les tests numériques haute vitesse (modules F40/F50).

## Horloge Système
- **CLOCK <valeur>** : Définit la fréquence ou la période de l'horloge principale.
  - Exemple : `CLOCK 100N;` (100ns = 10MHz).
- **CLOCKF [INT]=20N** : Définit la période de l'horloge interne du module F40 (généralement 20ns).

## Paramètres de Pattern
- **PERIOD <valeur>** : Définit la durée totale d'un pattern (cycle de test).
  - Exprimé en cycles d'horloge (`10C`) ou en temps (`1U`).
- **DEAD <valeur>** : Définit le temps mort nécessaire à la programmation des canaux avant l'exécution.

## Échantillonnage et Commutation
- **STROBE <valeur>** : Définit l'instant précis où l'état des capteurs (sensors) est lu dans le cycle.
- **ASSERT<n> <valeur>** : Définit l'instant où les drivers commutent vers leur nouvel état.

## Fenêtres Temporelles
- **PHASE<n> <start> <end>** : Définit une fenêtre active pour les signaux de type impulsion (Pulse).

## Exemple de Configuration
```viva
CLOCK 100N;

TIMING TIM1;
  PERIOD 10C;     ! 1000ns
  ASSERT1 2C;     ! Commutation à 200ns
  STROBE 8C;      ! Lecture à 800ns
  DEAD 2C;        ! 200ns de temps mort
ENDTIMING;
```
