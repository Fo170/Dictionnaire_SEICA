# Mot-clef : ~SET PW ALL

La commande `~SET PW ALL` permet de piloter globalement l'état de toutes les alimentations du système SE2.

## Syntaxe

```viva
~SET PW ALL [ON|OFF];
```

## Sémantique

Cette commande agit sur toutes les alimentations qui ont été préalablement configurées avec l'option `PREPARE`. Elle garantit que toutes les tensions sont appliquées ou coupées simultanément, évitant ainsi des états transitoires dangereux pour la carte sous test.

## Exemples

### Séquence d'allumage sécurisée
```viva
~SET PW1 V=5 I=1 PREPARE ON;
~SET PW2 V=12 I=0.5 PREPARE ON;
~SET PW ALL ON; ! Allume PW1 et PW2 en même temps
```
