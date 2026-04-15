# Mot-clef : ~PRINT (IMPRIME)

Le mot-clef `~PRINT` est utilisé pour envoyer des données vers une imprimante ou la console de sortie.

## Syntaxe

```viva
~PRINT <valeur1> [, <valeur2> ...] ;
```

- `<valeur>` : Peut être une constante, une variable (INTEGER, FLOAT, STRING) ou une chaîne de caractères entre guillemets.

## Sémantique

L'instruction évalue les expressions fournies et les envoie au flux de sortie configuré. Contrairement à `~WRITE`, `~PRINT` est traditionnellement orienté vers l'impression physique ou les rapports formels.

## Exemples

### Affichage simple
```viva
~PRINT "RAPPORT DE TEST" ;
```

### Affichage de variables
```viva
DECLARE RUNTIME FLOAT TENSION = 12.5;
~PRINT "TENSION MESUREE : ", TENSION ;
```

### Utilisation dans un programme
```viva
10 DECLARE RUNTIME INTEGER CAN = 256;
20 ~PRINT "CHANNEL NR. ", CAN;
```
