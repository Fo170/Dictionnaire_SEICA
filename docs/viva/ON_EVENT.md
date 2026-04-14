# Mot-clef : ~ON (Gestion d'événements)

Le mot-clef `~ON` permet de définir des actions automatiques déclenchées par des événements système ou des erreurs.

## Syntaxe

```viva
~ON <evenement> <action> ;
```

### Événements :
- `ERROR` : Toute erreur d'exécution.
- `ANA_ERROR` : Erreur lors d'un test analogique (`~ATEST`).
- `DIG_ERROR` : Erreur lors d'un test numérique.
- `TIMEOUT` : Dépassement du temps imparti.
- `BREAK` : Interruption par l'utilisateur.

### Actions :
- `CALL <subroutine>` : Appelle une routine de gestion.
- `CONTINUE` : Ignore l'erreur et continue.
- `ABORT` : Arrête immédiatement le test.

## Exemples

### Gestion globale des erreurs
```viva
DECLARE SUBROUTINE GESTION_ERREUR;

~ON ERROR CALL GESTION_ERREUR;

~SUBR GESTION_ERREUR;
  ~WRITE "UNE ERREUR EST SURVENUE !";
  ~RETURN;
~ENDSUBR;
```

### Ignorer les erreurs numériques
```viva
~ON DIG_ERROR CONTINUE;
```
