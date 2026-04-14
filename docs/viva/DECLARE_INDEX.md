# Déclaration : DECLARE RUNTIME INDEX

La commande `DECLARE RUNTIME INDEX` définit une variable spéciale optimisée pour servir d'index aux tableaux dans les boucles.

## Syntaxe

```viva
DECLARE RUNTIME INTEGER INDEX <nom>;
```

## Sémantique

L'utilisation d'un `INDEX` est obligatoire lorsque l'index d'un tableau varie à l'intérieur d'une boucle `~FOR` ou `~WHILE`. Le système peut gérer jusqu'à 7 index simultanément.

## Exemples

### Parcours de tableau
```viva
DECLARE RUNTIME INTEGER ARRAY DATA[5];
DECLARE RUNTIME INTEGER INDEX J;

START INIT;
  ~FOR J = 0 TO 4;
    ~CALC DATA[J] = J * 10;
  ~ENDFOR;
ENDTEST;
```
