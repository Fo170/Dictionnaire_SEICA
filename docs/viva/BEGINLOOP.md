# Mot-clef : BEGINLOOP / ENDLOOP

Le bloc `BEGINLOOP / ENDLOOP` permet de répéter une séquence d'instructions un nombre précis de fois, avec des options de sortie conditionnelle.

## Syntaxe

```viva
BEGINLOOP <nombre>;
  <instructions>
ENDLOOP [ONERROR | ONPASS];
```

- `<nombre>` : Nombre de répétitions (1 à 65000).
- `ONERROR` : Sort de la boucle si une erreur survient.
- `ONPASS` : Sort de la boucle dès qu'un test réussit.

## Sémantique

Cette structure est gérée au niveau du contrôleur temps réel, ce qui la rend extrêmement rapide et précise. Elle est idéale pour les séquences de synchronisation ou les tests de robustesse.

## Exemples

### Boucle avec masque
```viva
BEGINLOOP 10;
  COPY;
  OM 1 2 3 4; ! Masque les canaux 1 à 4
  /;
ENDLOOP;
```

### Sortie sur erreur (F40)
```viva
BEGINLOOP 100;
  P1 D0;
  OL OUT1;
  /;
ENDLOOP ONERROR;
```
