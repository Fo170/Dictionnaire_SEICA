# Mot-clef : @COMPILER

Le mot-clef `@COMPILER` est une directive de pré-processeur qui définit les paramètres globaux de compilation du fichier de test.

## Syntaxe

```viva
@COMPILER <option> = <valeur>;
```

### Options courantes :
- `MAX_ERROR` : Nombre maximum d'erreurs tolérées avant l'arrêt de la compilation.
- `COMPLEX` : Nombre max d'itérations pour les boucles `@FOR` / `@WHILE` (max 32767).
- `VARNAME_LEN` : Longueur maximale des noms de variables (max 20).
- `BACKUP` : Active la création d'un fichier `.PAC` expansé.

## Sémantique

Ces directives doivent impérativement être placées au tout début du fichier source, avant l'instruction `START`. Elles influencent le comportement du compilateur et la gestion de la mémoire.

## Exemples

### Configuration standard
```viva
@COMPILER MAX_ERROR=100;
@COMPILER VARNAME_LEN=15;
@COMPILER COMPLEX=1000;
```

### Gestion des noms longs
```viva
@COMPILER VARNAME_LEN=20;
DECLARE VARIABLE INTEGER MA_VARIABLE_TRES_LONGUE;
```
