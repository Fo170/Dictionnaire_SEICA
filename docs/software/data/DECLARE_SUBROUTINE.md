# Déclaration : Sous-routines et Fonctions

## DECLARE SUBROUTINE
### Syntaxe
```viva
DECLARE SUBROUTINE <nom1>, <nom2>...;
```
### Sémantique
Déclare les sous-routines qui seront définies plus loin dans le programme (via `~SUBR`).

## DECLARE FUNCTION
### Syntaxe
```viva
DECLARE FUNCTION <nom>;
```
### Sémantique
Déclare une fonction utilisateur.

## Exemple
```viva
DECLARE SUBROUTINE INIT_SYSTEM, READ_DATA;

START MAIN STATIC;
  ~CALL INIT_SYSTEM;
  ~CALL READ_DATA;
ENDTEST;

~SUBR INIT_SYSTEM;
  ~WRITE "Initialisation...";
  ~RETURN;
~ENDSUBR;
```
