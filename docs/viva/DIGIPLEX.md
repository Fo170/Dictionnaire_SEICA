# Mot-clef : ~SET DIGIPLEX

Le mot-clef `~SET DIGIPLEX` configure le multiplexeur numérique du système.

## Syntaxe

```viva
~SET DIGIPLEX ; ! Active la technique
~CLEAR DIGIPLEX ; ! Désactive
~SET DIGIPLEX PULL UP|DOWN <valeur_resistor> ;
~SET DIGIPLEX LOAD V=<volt> I=<ampere> ;
```

- `<valeur_resistor>` : 100, 1K, 10K, 100K, 1M.

## Sémantique

Digiplex permet d'utiliser les 4 canaux numériques haute performance de l'ACL sur n'importe quel point de test via le scanner analogique. Cela permet de faire du test numérique sur des connecteurs non câblés sur des drivers numériques dédiés.

## Exemples

### Activation avec Pull-up
```viva
~SET DIGIPLEX;
~SET DIGIPLEX PULL UP 10K; ! Ajoute une résistance de tirage de 10K
```

### Test de sortance (Fan-out)
```viva
~SET DIGIPLEX LOAD V=5.0 I=0.020; ! Applique une charge de 20mA sous 5V
```
