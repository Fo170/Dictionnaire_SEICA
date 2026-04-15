# Mot-clef : ~REPEAT / ~UNTIL

La structure `~REPEAT` / `~UNTIL` permet de créer des boucles qui s'exécutent au moins une fois, la condition de sortie étant testée à la fin de chaque itération.

## Syntaxe

```viva
~REPEAT;
  <instructions>
~UNTIL ( <condition> );
```

## Sémantique

Cette boucle est idéale pour attendre un événement externe ou répéter une mesure jusqu'à ce qu'elle soit stable. Si la condition est FAUSSE, la boucle recommence. Si elle est VRAIE, le programme continue.

## Exemples

### Attente de stabilisation de tension
```viva
DECLARE RUNTIME FLOAT V;
~REPEAT;
  ~DELAY 100ms;
  ~MEASURE Voltage ON=ch1 INTO=V;
~UNTIL (V > 4.95); ! Boucle tant que V est <= 4.95
~WRITE "Tension stabilisée à : ", V;
```
