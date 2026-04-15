# Mot-clef : ~SET USER_DACn

La commande `~SET USER_DACn` permet de programmer les convertisseurs numérique-analogique (DAC) du module USB.

## Syntaxe

```viva
~SET USER_DAC<n> V=<valeur>;
```

- `<n>` : Index du DAC (1 à 32 selon le nombre de modules).
- `<valeur>` : Valeur de 0 à 255 (0X00 à 0XFF).

## Sémantique

Cette commande génère une tension analogique sur les sorties utilisateur. La plage de 0 à 255 correspond linéairement à une tension de 0V à 2.56V.

## Exemples

### Génération de 1V
```viva
~SET USER_DAC1 V=0X64; ! 100 en décimal -> environ 1V
```
