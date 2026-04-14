# Déclaration : DECLARE ARGUMENT

La commande `DECLARE ARGUMENT` permet de définir des paramètres globaux qui seront passés aux macros lors de leur appel.

## Syntaxe

```viva
DECLARE ARGUMENT = <nom1>, <nom2>...;
```

## Sémantique

Ces arguments sont visibles dans tout le programme et dans toutes les macros. Ils servent de pont pour transmettre des données de configuration ou des valeurs dynamiques aux blocs de code réutilisables.

## Exemples

### Déclaration globale
```viva
DECLARE ARGUMENT = VAHH, VAHL, VALH, VALL;

@MACRO RDROM (VAHH, VAHL);
  IG ADDHH = VAHH;
  IG ADDHL = VAHL;
@ENDMACRO;
```
