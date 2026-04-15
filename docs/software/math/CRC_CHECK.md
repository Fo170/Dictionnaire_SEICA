# Mot-clef : ~CRC (Contrôle d'intégrité)

Le mot-clef `~CRC` permet de calculer ou de vérifier la validité d'un flux de données numériques en utilisant un algorithme de contrôle de redondance cyclique.

## Syntaxe

```viva
~CRC <groupe> [POLY=<valeur>] [INIT=<valeur>] [INTO=<variable>];
```

- `<groupe>` : Le bus de données à analyser.
- `POLY` : Le polynôme générateur (ex: 0X1021 pour CRC-CCITT).
- `INIT` : Valeur initiale du registre CRC.
- `INTO` : Variable de destination pour le résultat.

## Sémantique

Cette commande est essentielle pour tester la validité des données lues depuis des mémoires (Flash, EEPROM) ou des bus de communication série. Elle compare le résultat calculé avec la valeur attendue pour lever un flag d'erreur.

## Exemples

### Vérification d'une trame
```viva
DECLARE GROUP DATA_BUS = 1, 2, 3, 4, 5, 6, 7, 8;
DECLARE VARIABLE INTEGER RESULT_CRC;

~CRC DATA_BUS POLY=0X8005 INIT=0 INTO=RESULT_CRC;
~ATEST RESULT_CRC VALUE=0XABCD; ! Vérifie si le CRC est correct
```
