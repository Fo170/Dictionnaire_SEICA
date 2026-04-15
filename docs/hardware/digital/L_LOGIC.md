# Directive : @L

La directive `@L` (Logic states) permet d'assigner des états logiques à une liste de canaux préalablement définie.

## Syntaxe

```viva
@L(<états>);
```

- `<états>` : Une chaîne de caractères représentant l'état de chaque canal dans l'ordre de déclaration de `DECLARE PINLIST`.

### États possibles :
- `H` : Force le driver au niveau haut (High).
- `L` : Force le driver au niveau bas (Low).
- `1` : Teste si le capteur est au niveau haut.
- `0` : Teste si le capteur est au niveau bas.
- `T` : Force le driver à suivre la phase 1 et mesure au strobe.
- `.` : Masque le canal (pas de test).

## Sémantique

`@L` est l'outil principal pour définir des vecteurs de test denses. Chaque caractère de la chaîne correspond à un canal physique.

## Exemples

### Définition d'un vecteur
```viva
DECLARE PINLIST = 1, 2, 3, 4, 5;
START TEST_LOGIQUE;
  @L(HHL01); ! Force 1 et 2 à H, 3 à L, teste 4=0 et 5=1
ENDTEST;
```
