# Mot-clef : ~SUBR (SOUS_PROG)

Le mot-clef `~SUBR` définit le début d'une sous-routine.

## Syntaxe

```viva
~SUBR <nom> [ ( <type_argument> <argument1>, ... ) ] ;
    <instructions>
    ~RETURN;
~ENDSUBR;
```

- `<nom>` : Identifiant unique de la sous-routine (max 20 caractères).
- `<type_argument>` : `INTEGER`, `FLOAT` ou `STRING` (par défaut `INTEGER`).
- `~RETURN` : Marque la fin de l'exécution de la sous-routine et le retour au point d'appel.
- `~ENDSUBR` : Marque la fin physique de la définition.

## Sémantique

Les sous-routines permettent de regrouper des séquences d'instructions réutilisables. Elles peuvent accepter jusqu'à 20 arguments. Les variables déclarées à l'intérieur via `DECLARE` sont locales. Elles doivent être déclarées au début du programme avant l'instruction `START`.

## Exemples

### Sous-routine simple
```viva
DECLARE SUBROUTINE TEST_CANAL;

~SUBR TEST_CANAL;
    ~WRITE "TEST EN COURS...";
    ~PAUSE 1;
    ~RETURN;
~ENDSUBR;
```

### Sous-routine avec arguments
```viva
~SUBR CALCUL (FLOAT VAL1, FLOAT VAL2);
    ~CALC RESULTAT = VAL1 + VAL2;
    ~RETURN;
~ENDSUBR;
```
