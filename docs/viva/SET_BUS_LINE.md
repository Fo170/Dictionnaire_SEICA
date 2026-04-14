# Mot-clef : ~SET BUS_LINE SERV

La commande `~SET BUS_LINE SERV` configure les connexions entre les lignes du module LAM et le module SE2.

## Syntaxe

```viva
~SET BUS_LINE SERV V=<valeur>;
```

- `<valeur>` : Un nombre décimal dont la représentation binaire définit l'état de chaque ligne (0 = Fermé, 1 = Ouvert). Le bit de poids faible (LSB) correspond à la ligne LI1.

## Sémantique

Cette commande est essentielle pour restaurer les connexions (LI1-LI5, LI2-LI6, etc.) lorsque les relais ALM du module LAM ont été ouverts. Elle permet de router les signaux vers les instruments de mesure via le bus de service.

## Exemples

### Connexion de LI1 à BL1
```viva
~SET BUS_LINE SERV V=254; ! 11111110 en binaire : LI1 est fermé
```
