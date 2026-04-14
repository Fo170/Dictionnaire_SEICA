# Mot-clef : ~READ_SCR (ENTREE)

Le mot-clef `~READ_SCR` permet de lire une saisie utilisateur depuis le clavier.

## Syntaxe

```viva
~READ_SCR <variable>;
```

- `<variable>` : Une variable de type INTEGER, FLOAT ou STRING où sera stockée la valeur saisie.

## Sémantique

L'exécution du programme s'interrompt et une boîte de saisie apparaît sur le terminal statique à la position actuelle du curseur. Le programme attend que l'opérateur saisisse une valeur et valide. La valeur est ensuite convertie selon le type de la variable de destination.

## Exemples

### Saisie d'un nombre
```viva
~WRITE "Entrez une tension : ";
~READ_SCR TENSION_VAR;
```

### Saisie d'un texte
```viva
~WRITE "Quel est votre nom ? ";
~READ_SCR NOM_STR;
~WRITE "Bonjour ", NOM_STR;
```
