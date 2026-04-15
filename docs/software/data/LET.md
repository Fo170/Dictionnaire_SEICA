# Mot-clef : LET

Le mot-clef `LET` est utilisé pour déclarer une variable ou assigner une valeur à une variable existante.

## Syntaxe

```viva
LET <nom_variable> = <valeur>
```

- `<nom_variable>` : Un identifiant commençant par une lettre.
- `<valeur>` : Une expression (nombre, texte, calcul) à stocker.

## Sémantique

Viva est un langage à typage dynamique. L'instruction `LET` crée la variable dans l'espace mémoire courant si elle n'existe pas, puis lui assigne la valeur évaluée de l'expression à droite du signe `=`.

## Exemples

### Assignation de nombre
```viva
LET age = 25
```

### Assignation de texte
```viva
LET message = "Bienvenue dans Viva"
```

### Utilisation d'expressions
```viva
LET total = prix * quantite
```

### Ré-assignation
```viva
LET compteur = 1
LET compteur = compteur + 1
```
