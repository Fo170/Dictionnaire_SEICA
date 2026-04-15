# Déclaration : DECLARE RUNTIME ARGUMENT

## Syntaxe
```viva
DECLARE RUNTIME ARGUMENT <type> <nom>;
```

## Sémantique
Déclare un argument global qui peut être passé aux sous-routines. Ces arguments sont visibles dans tout le programme et dans toutes les sous-routines.

## Types supportés
- **INTEGER**
- **FLOAT**
- **STRING**

## Exemple
```viva
DECLARE RUNTIME ARGUMENT INTEGER ERR_CODE;
DECLARE SUBROUTINE CHECK_STATUS;

START TEST STATIC;
  ~CALL CHECK_STATUS(ERR_CODE);
ENDTEST;

~SUBR CHECK_STATUS(ERR_CODE);
  ~IF (ERR_CODE > 0);
    ~WRITE "Erreur détectée : ", ERR_CODE;
  ~ENDIF;
  ~RETURN;
~ENDSUBR;
```
