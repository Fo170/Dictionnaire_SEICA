# Mot-clef : CLOCK / NCLOCK

Les instructions `CLOCK` et `NCLOCK` (Not Clock) définissent les signaux d'horloge utilisés lors des tests numériques haute vitesse.

## Syntaxe

```viva
CLOCK <n> <phase>;
NCLOCK <n> <phase>;
```

- `<n>` : Numéro de l'horloge (1 à 4).
- `<phase>` : La phase temporelle (définie par `PHASE`) pendant laquelle l'horloge est active.

## Sémantique

- `CLOCK` génère une impulsion positive (0 -> 1 -> 0) pendant la phase spécifiée.
- `NCLOCK` génère une impulsion négative (1 -> 0 -> 1).
Ces horloges sont synchronisées avec le `PERIOD` global du burst.

## Exemples

### Définition d'une horloge système
```viva
PERIOD 100ns;
PHASE 1 20ns 80ns;
CLOCK 1 PH1; ! L'horloge 1 sera haute de 20ns à 80ns dans chaque cycle
```

### Utilisation dans un PATTERN
```viva
PATTERN TEST;
  CLK1 1; ! Utilise l'horloge 1 pour ce cycle
ENDPATTERN;
```
