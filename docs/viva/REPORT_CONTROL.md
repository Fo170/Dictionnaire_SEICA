# Mot-clef : ~REPORT / ~RFORMAT

Ces commandes contrôlent la génération du rapport de test final, qui est essentiel pour la traçabilité en production.

## Syntaxe

```viva
~REPORT [ON | OFF | FULL | ERROR_ONLY];
~RFORMAT "<chaine_format>";
```

### Variables de formatage :
- `%N` : Nom du test.
- `%V` : Valeur mesurée.
- `%L` : Limite basse.
- `%H` : Limite haute.
- `%U` : Unité.
- `%R` : Résultat (PASS/FAIL).

## Sémantique

- `~REPORT FULL` enregistre tous les tests, qu'ils réussissent ou échouent.
- `~RFORMAT` permet de personnaliser l'apparence du rapport pour l'intégrer dans des bases de données externes ou des systèmes MES.

## Exemples

### Configuration du rapport
```viva
~REPORT FULL;
~RFORMAT "ID:%N | VAL:%V | RES:%R";

~MEASURE Voltage ON=5V INTO=AR;
~ATEST AR NAME="ALIM_5V" LO=4.9 HI=5.1;
! Le rapport affichera : ID:ALIM_5V | VAL:5.02 | RES:PASS
```
