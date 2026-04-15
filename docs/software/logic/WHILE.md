# Mot-clef : WHILE

Le mot-clef `WHILE` permet de répéter un bloc d'instructions tant qu'une condition reste vraie.

## Syntaxe

```viva
WHILE <condition>
    <instructions>
WEND
```

- `<condition>` : L'expression logique testée au début de chaque cycle.
- `WEND` : (While End) Marque la fin du bloc de la boucle.

## Sémantique

La condition est évaluée avant chaque passage dans la boucle. Si elle est fausse dès le début, le bloc n'est jamais exécuté. Si elle est vraie, les instructions sont exécutées, puis le programme revient au `WHILE` pour ré-évaluer la condition.

## Exemples

### Boucle de base
```viva
LET n = 1
WHILE n <= 10
    PRINT n
    LET n = n + 1
WEND
```

### Attente d'une valeur
```viva
LET reponse = ""
WHILE reponse <> "OUI"
    INPUT "Voulez-vous continuer ? (OUI/NON) ", reponse
WEND
```
