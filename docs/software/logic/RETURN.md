# Mot-clef : ~RETURN (RETOUR)

Le mot-clef `~RETURN` est utilisé à l'intérieur d'une sous-routine pour terminer son exécution et retourner au point d'appel.

## Syntaxe

```viva
~RETURN;
~RETURN [ONERROR] [ONPASS];
```

## Sémantique

Lorsqu'il est rencontré, `~RETURN` renvoie immédiatement le contrôle à l'instruction suivant le `~CALL` qui a invoqué la sous-routine. Il peut être conditionné par l'état des erreurs (`ONERROR` ou `ONPASS`).

## Exemples

### Retour simple
```viva
~SUBR MA_ROUTINE;
    ~WRITE "Action";
    ~RETURN;
~ENDSUBR;
```

### Retour conditionnel
```viva
~SUBR VERIF;
    ~ATEST VAL LO=10;
    ~RETURN ONERROR; ! Quitte si erreur
    ~WRITE "Tout est OK";
    ~RETURN;
~ENDSUBR;
```
