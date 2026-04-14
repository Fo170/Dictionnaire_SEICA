# Mot-clef : ~CALC (CALCUL)

Le mot-clef `~CALC` est utilisé pour effectuer des opérations arithmétiques et logiques sur des variables pendant l'exécution.

## Syntaxe

```viva
~CALC <variable> = <expression> ;
```

### Opérateurs supportés :
- `+`, `-`, `*`, `/` : Opérations arithmétiques de base.
- `^` : Puissance ou XOR (selon le contexte).
- `&` : ET logique.
- `|` : OU logique.
- `<` / `>` : Décalage de bits (shift).

## Sémantique

L'expression à droite du signe `=` est évaluée et le résultat est stocké dans la variable de destination. Viva gère automatiquement les conversions de type (INTEGER vers FLOAT par exemple) lors des calculs.

## Exemples

### Calcul simple
```viva
~CALC COMPTEUR = COMPTEUR + 1 ;
```

### Expression complexe
```viva
~CALC RESULTAT = (VAL1 + VAL2) / 2 ;
```

### Opération binaire
```viva
~CALC MASQUE = VALEUR & 0XF0 ;
```
