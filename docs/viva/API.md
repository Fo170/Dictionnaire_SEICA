# Mot-clef : ~API (Interface Windows)

Le mot-clef `~API` permet au langage Viva d'interagir directement avec le système d'exploitation Windows en appelant des fonctions situées dans des bibliothèques dynamiques (DLL).

## Syntaxe

```viva
~API "<nom_dll>" "<nom_fonction>" [<type_retour>] [<arguments...>];
```

- `<nom_dll>` : Chemin ou nom de la DLL (ex: "kernel32.dll").
- `<nom_fonction>` : Nom exact de la fonction exportée.
- `<type_retour>` : `INTEGER`, `FLOAT`, `STRING` ou `VOID`.

## Sémantique

Cette commande puissante permet d'étendre les capacités de Viva : gestion de périphériques USB non standards, affichage de boîtes de dialogue Windows, calculs mathématiques complexes via des bibliothèques tierces, etc.

## Exemples

### Affichage d'un message Windows
```viva
! Appel de MessageBoxA dans user32.dll
~API "user32.dll" "MessageBoxA" INTEGER 0, "Test Terminé", "Viva System", 0;
```

### Récupération du nom de l'ordinateur
```viva
DECLARE RUNTIME STRING PC_NAME;
~API "kernel32.dll" "GetComputerNameA" VOID PC_NAME, 15;
~WRITE "Exécuté sur : ", PC_NAME;
```
