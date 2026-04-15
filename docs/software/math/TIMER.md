# Mot-clef : ~TIMER / ~READ_TIMER

Les mots-clés `~TIMER` et `~READ_TIMER` permettent de mesurer des temps d'exécution ou des intervalles entre événements.

## Syntaxe

```viva
~TIMER <n> START ;
~TIMER <n> STOP ;
~TIMER <n> RESET ;
~READ_TIMER <n> INTO=<variable> ;
```

- `<n>` : Index du chronomètre (1 à 8).
- `<variable>` : Variable `FLOAT` pour stocker le temps en secondes.

## Sémantique

Les timers Viva ont une résolution de l'ordre de la microseconde. Ils sont indépendants de l'horloge système et continuent de tourner même pendant les instructions d'affichage ou d'attente.

## Exemples

### Mesure d'un temps de réponse
```viva
DECLARE RUNTIME FLOAT T_REP;
~TIMER 1 RESET;
~TIMER 1 START;
~IH COMMANDE;
~OL REPONSE; ! Attend que la réponse passe à l'état bas
~TIMER 1 STOP;
~READ_TIMER 1 INTO=T_REP;
~WRITE "Temps de réponse : ", T_REP, " s";
```
