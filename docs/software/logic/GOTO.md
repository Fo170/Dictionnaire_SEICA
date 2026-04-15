# Mot-clef : ~BRANCH (VA_VERS)

Le mot-clef `~BRANCH` est utilisé pour effectuer des sauts vers des étiquettes (labels) dans le programme.

## Syntaxe

```viva
~BRANCH <label> ;
~BRANCH [ONERROR <label>] [ONPASS <label>] ;
```

- `<label>` : Le nom de l'étiquette de destination (définie par `LABEL=<nom>`).
- `ONERROR` : Le saut s'effectue uniquement si le flag d'erreur partielle est actif.
- `ONPASS` : Le saut s'effectue uniquement si le flag d'erreur partielle n'est pas actif.

## Sémantique

Si aucune condition n'est spécifiée, le saut est inconditionnel. Si une condition est spécifiée, le système vérifie l'état du test précédent pour décider si le saut doit avoir lieu. Une erreur de compilation est générée si le label de destination est manquant.

## Exemples

### Saut inconditionnel
```viva
~BRANCH FIN_TEST;
```

### Saut sur erreur
```viva
~ATEST TENSION LO=4.5 HI=5.5;
~BRANCH ONERROR GESTION_ERREUR;
```

### Utilisation avec préfixe dynamique
```viva
~BRANCH @MON_LABEL;
```
