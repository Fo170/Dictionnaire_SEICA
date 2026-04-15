# Mot-clef : ~WRITE (ECRIRE)

Le mot-clef `~WRITE` est utilisé pour afficher du texte et des valeurs de variables sur le terminal utilisateur.

## Syntaxe

```viva
~WRITE [attribut] <valeur1> [, <valeur2> ...] ;
~WRITEL [attribut] <valeur1> ... ; ! Ajoute un retour à la ligne automatique
```

### Attributs courants :
- `\CR` : Retour à la ligne.
- `\CS` : Effacer l'écran.
- `\CU\col\lig` : Positionner le curseur.
- `\CO\c1\c2` : Changer les couleurs.

## Sémantique

`~WRITE` envoie des caractères au terminal actif. Contrairement à `~PRINT`, il supporte de nombreux attributs de formatage pour gérer l'interface graphique du terminal statique.

## Exemples

### Affichage simple
```viva
~WRITE "Systeme Pret" ;
```

### Avec retour à la ligne
```viva
~WRITE "\CR", "Ligne 1" ;
~WRITE "\CR", "Ligne 2" ;
```

### Positionnement du curseur
```viva
~WRITE "\CU\010\005", "Texte a la colonne 10, ligne 5" ;
```
