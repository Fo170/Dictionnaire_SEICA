# Mot-clef : ~STREAM / ~COLOR

## ~STREAM (Redirection de flux)
### Syntaxe
```viva
~STREAM [n] [action] <device> ;
```
### Sémantique
Redirige les sorties des instructions `~WRITE` vers d'autres périphériques que le terminal par défaut.
- **Devices** : `TERMinal`, `REPOrt`, `PRINter`, `IEEE`, `FILE1...9`, `WIN1...9`.

## ~COLOR (Couleurs du terminal)
### Syntaxe
```viva
~COLOR <texte>, <fond> ;
```
### Sémantique
Définit les couleurs pour les prochaines opérations d'affichage sur le terminal.
- **Exemple** : `~COLOR 1, 2;` (Texte blanc sur fond bleu).

## Exemple combiné
```viva
START PROG STATIC;
~STREAM 1 ADD FILE1; ! Envoie les logs vers le fichier 1 en plus du terminal
~COLOR 1, 5; ! Texte blanc sur fond rouge
~WRITE "ALERTE : ERREUR DETECTEE";
ENDTEST;
```
