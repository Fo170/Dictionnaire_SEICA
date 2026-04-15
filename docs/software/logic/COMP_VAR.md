# Mot-clef : ~COMP (Comparaison)

## Syntaxe
```viva
~COMP <variable> [LO=<valeur>] [HI=<valeur>] [ONERROR <label>] [ONPASS <label>] ;
```

## Sémantique
L'instruction `~COMP` effectue une comparaison entre la valeur d'une variable et des limites spécifiées. Contrairement à `~ATEST`, elle n'active que le flag d'erreur partiel, permettant des branchements logiques sans arrêter le test global.

## Paramètres
- **LO** : Limite inférieure.
- **HI** : Limite supérieure.
- **ONERROR** : Saut vers un label si la valeur est hors limites.
- **ONPASS** : Saut vers un label si la valeur est dans les limites.

## Exemple
```viva
~COMP AR LO=4.8 HI=5.2 ONERROR AJUSTEMENT;
~WRITE "Tension correcte";
~BRANCH FIN;

LABEL=AJUSTEMENT;
~WRITE "Tension hors limites, ajustement en cours...";
...
LABEL=FIN;
```
