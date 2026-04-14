# Mot-clef : PATTERN / BURST

Le `PATTERN` définit une séquence de vecteurs numériques, tandis que le `BURST` déclenche l'exécution de cette séquence à haute vitesse par le matériel.

## Syntaxe

```viva
PATTERN <nom_sequence>;
  <vecteur1>;
  <vecteur2>;
  ...
ENDPATTERN;

BURST <nom_sequence>;
```

## Sémantique

- Un vecteur est une ligne de bits représentant l'état de tous les canaux numériques à un instant T.
- Le `BURST` envoie ces vecteurs au rythme défini par l'instruction `PERIOD`.
- C'est la méthode la plus performante pour tester des circuits logiques complexes (FPGA, Microcontrôleurs).

## Exemples

### Séquence d'initialisation
```viva
DECLARE GROUP BUS = 1, 2, 3, 4;

PATTERN INIT_SEQ;
  0000;
  1010;
  1111;
  0000;
ENDPATTERN;

START TEST STATIC;
  BURST INIT_SEQ;
ENDTEST;
```
