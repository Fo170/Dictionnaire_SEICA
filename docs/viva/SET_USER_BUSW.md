# Mot-clef : ~SET USER_BUSWn

La commande `~SET USER_BUSWn` permet d'écrire des données sur le bus numérique utilisateur du module USB.

## Syntaxe

```viva
~SET USER_BUSW<n> A=<adresse> D=<donnée>;
```

- `<n>` : Numéro du module USB (1 à 4).
- `<adresse>` : Adresse sur le bus (0 à 255).
- `<donnée>` : Valeur à écrire (0 à 255).

## Sémantique

Cette commande est utilisée pour communiquer avec des périphériques externes connectés sur la zone de prototypage (breadboard) du module USB. L'adresse est envoyée sur les lignes USER A0-A7 et la donnée sur USER D0-D7.

## Exemples

### Écriture sur un registre externe
```viva
~SET USER_BUSW1 A=0X55 D=0X3A;
```
