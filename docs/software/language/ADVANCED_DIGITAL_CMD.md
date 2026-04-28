# Commandes Numériques Avancées

Pour les tests dynamiques complexes, VIVA propose des commandes permettant un pilotage fin au sein d'un cycle (pattern).

## Commandes Indexées (Multistrobe)
Si votre TIMING définit plusieurs PHASES ou WINDOWS, vous pouvez indexer vos commandes :
- **IHn / ILn** : Force le canal à l'instant de PHASE <n>.
- **OHn / OLn** : Mesure le canal à l'instant de WINDOW <n>.

```viva
! Exemple : Deux transitions dans le même pattern
IH1 CLK_PIN; ! Monte au temps défini dans PHASE1
IL2 CLK_PIN; ! Descend au temps défini dans PHASE2
```

## Modes de Retour Automatique
Permet de générer des impulsions sans multiplier les patterns.
- **R0 (Return to 0)** : Si le canal est au repos à 0, il fait une impulsion à 1 puis revient à 0.
- **R1 (Return to 1)** : Si le canal est au repos à 1, il fait une impulsion à 0 puis revient à 1.
- **RZ (Return to Z)** : Le canal revient en haute impédance (tristate) après son action.

## Horloges Répétitives
- **CR (Clock Repetitive)** : Le canal oscille continuellement selon les temps de sa PHASE jusqu'à la fin de la période du pattern.
- **NR (Not Repetitive)** : Désactive le mode répétitif.

## Exemple complet
```viva
TIMING T1;
  PERIOD 1U;
  PHASE1 100N 400N; ! Pulse de 300ns
ENDTIMING;

START DYN_TEST;
  / TIMING T1;
  R1 CLK; ! Génère un pulse négatif à chaque pattern
  CR DATA;! DATA oscille sur toute la durée de 1U
  /;
ENDTEST;
```
