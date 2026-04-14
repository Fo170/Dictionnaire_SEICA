# Mot-clef : JUMP / REPEAT (Contrôle de Burst)

Ces instructions permettent de créer des boucles et des branchements à l'intérieur d'une séquence numérique (`PATTERN`), gérés directement par le matériel pour garantir le temps réel.

## Syntaxe

```viva
/LABEL <nom>;
JUMP <nom>;
REPEAT <n>;
```

## Sémantique

- `/LABEL` : Définit un point de destination pour un saut.
- `JUMP` : Effectue un saut inconditionnel vers un label.
- `REPEAT` : Répète le vecteur précédent `n` fois.

## Exemples

### Boucle infinie de test
```viva
PATTERN BOUCLE_DATA;
  /DEBUT;
  0001;
  0010;
  0100;
  1000;
  JUMP DEBUT;
ENDPATTERN;
```

### Attente longue
```viva
PATTERN ATTENTE;
  0000;
  REPEAT 1000; ! Répète l'état 0000 pendant 1000 cycles
ENDPATTERN;
```
