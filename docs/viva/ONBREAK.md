# Mot-clef : ~ONBREAK

La commande `~ONBREAK` définit le comportement du programme lorsqu'une pause survient ou qu'une condition d'arrêt est rencontrée.

## Syntaxe

```viva
~ONBREAK [ABORT | CALL <subroutine> | CONTINUE];
```

## Sémantique

- `ABORT` : Arrête immédiatement l'exécution du cluster actuel.
- `CALL <subroutine>` : Appelle une sous-routine spécifique (ex: pour couper les alimentations proprement).
- `CONTINUE` : Ignore la pause et poursuit l'exécution (comportement par défaut).

Une pause peut être générée par l'instruction `~PAUSE`, `~READ_SCR` ou une erreur de test si l'option "Stop on functional errors" est active.

## Exemples

### Sécurisation sur pause
```viva
~ONBREAK CALL GESTION_URGENCE;
~PAUSE "Vérifiez le montage";
```
