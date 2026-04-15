# Mot-clef : ~FRONTEND

## Syntaxe
```viva
~FRONTEND [*] [AUX] [NO_CHECK] <paramètres> <pinlist> ;
```

## Sémantique
Définit les paramètres électriques détaillés des canaux numériques. Cette instruction est particulièrement utilisée avec les modules de test haute performance (T964).

## Paramètres principaux
- **SVL / SVH** : Références de tension basse et haute pour la charge de courant.
- **SCL / SCH** : Courant source et sink de la charge.
- **SKL / SKH** : Slew rate des fronts descendants et montants.
- **IMP** : Valeur de la charge en mode résistif.
- **PMO** : Mode de la charge (0=Aucun, 1=Courant, 2=Résistif).
- **TERM** : Résistance de terminaison série.

## Exemple
```viva
! Configure les canaux 1 à 8 avec une terminaison de 50 ohms
~FRONTEND TERM=50 1/8;

! Configure une charge de courant sur les canaux 1 à 4
~FRONTEND SVH=5 SVL=0 SCH=0.01 SCL=0.01 PMO=1 1/4;
```
