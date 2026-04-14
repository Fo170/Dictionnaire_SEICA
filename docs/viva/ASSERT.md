# Mot-clef : ASSERT

Le mot-clef `ASSERT` est utilisé exclusivement à l'intérieur d'un bloc `PATTERN` pour forcer une valeur sur un canal ou un groupe de canaux pendant un cycle spécifique.

## Syntaxe

```viva
ASSERT<n> <valeur>;
```

- `<n>` : Index de la phase ou du strobe associé (1 à 9).
- `<valeur>` : Valeur binaire, hexadécimale ou décimale à appliquer.

## Sémantique

`ASSERT` permet de définir dynamiquement les données envoyées lors d'un burst. C'est particulièrement utile pour les bus de données où les valeurs changent à chaque cycle d'horloge.

## Exemples

### Séquence de données
```viva
PATTERN ENVOI_DATA;
  ASSERT1 0XAA; ! Envoie 10101010 sur le bus à la phase 1
  ASSERT1 0X55; ! Envoie 01010101 au cycle suivant
ENDPATTERN;
```
