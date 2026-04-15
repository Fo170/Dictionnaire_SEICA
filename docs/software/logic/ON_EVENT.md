# Mot-clef : ~ON (Gestion d'événements)

## Syntaxe
```viva
~ON <event> [CALL <subroutine>] [CLEAR] [ABORT|CONTINUE] ;
```

## Événements supportés
- **ERROR** : Déclenché par n'importe quelle erreur.
- **ANA_ERROR** : Erreur analogique (~ATEST, ~TEST).
- **DIG_ERROR** : Erreur numérique dynamique.
- **STATIC_ERROR** : Erreur numérique statique.
- **BREAK** : Avant une instruction attendant une saisie utilisateur (~PAUSE).
- **TIMEOUT** : Si le cluster dépasse le temps imparti.
- **ENDBURST** : Après la fin d'un burst dynamique.
- **BUTTON** : Si un bouton du terminal est pressé.
- **TIMER** : Expiration d'un timer.

## Actions
- **CALL <subroutine>** : Exécute une sous-routine spécifique.
- **CLEAR** : Effectue un "clear" du système.
- **CONTINUE** : Continue l'exécution à l'instruction suivante (comportement par défaut).
- **ABORT** : Arrête immédiatement l'exécution du cluster.

## Exemples
### Gestion globale des erreurs
```viva
~ON ERROR CALL GESTION_ERREUR;
```

### Ignorer les erreurs numériques
```viva
~ON DIG_ERROR CONTINUE;
```
