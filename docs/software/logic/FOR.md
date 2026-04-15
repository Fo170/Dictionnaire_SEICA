# Mot-clef : ~FOR (BOUCLE)

Le mot-clef `~FOR` permet de créer des boucles de répétition basées sur une condition ou un compteur.

## Syntaxe

```viva
~FOR [NOT] <variable> <condition> <expression> [TO <valeur_finale>] [STEP <pas>] [DO <action>] ;
    <instructions>
~ENDFOR ;
```

## Sémantique

La boucle s'exécute tant que la condition spécifiée est vraie. 
- Si `STEP` est utilisé, la variable est incrémentée/décrémentée à chaque itération.
- Si `DO` est utilisé, l'action spécifiée est exécutée à la fin de chaque cycle.
- Si la condition est fausse dès le départ, le corps de la boucle n'est jamais exécuté.

## Exemples

### Boucle de 1 à 10
```viva
~FOR A = 1 TO 10;
    ~WRITE "Itération : ", A;
~ENDFOR;
```

### Boucle avec un pas de 2
```viva
~FOR A = 1 TO 10 STEP 2;
    ~WRITE "Valeur : ", A;
~ENDFOR;
```

### Boucle avec action personnalisée
```viva
~FOR A = 1 TO 30 DO A = B + 3;
    ~WRITE "Cycle ", A;
    ~CALC B = B + 1;
~ENDFOR;
```
