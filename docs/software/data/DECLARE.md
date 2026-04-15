# Mot-clef : DECLARE (SOIT)

Le mot-clef `DECLARE` est utilisé pour définir des objets (variables, canaux, signaux, etc.) avant leur utilisation dans le programme.

## Syntaxe

```viva
DECLARE <objet> <nom> [, <nom2> ...];
DECLARE <objet> <nom> = <valeur_initiale>;
DECLARE <objet> ARRAY <nom>[<dimension>] = <valeur1>, <valeur2>, ...;
```

### Types d'objets courants :
- `VARIABLE INTEGER` : Entier 32 bits.
- `VARIABLE FLOAT` : Nombre à virgule flottante double précision.
- `VARIABLE STRING` : Chaîne de caractères (jusqu'à 256 caractères).
- `RUNTIME INTEGER|FLOAT|STRING` : Variables utilisables pendant l'exécution.
- `CHANNEL` : Définit un canal physique.
- `SIGNAL` : Définit un signal logique.

## Sémantique

Les déclarations doivent être faites en dehors du code principal du programme (avant l'instruction `START`). Viva utilise ces déclarations pour allouer de la mémoire ou mapper des ressources matérielles. Les variables déclarées à l'intérieur d'une sous-routine sont locales à celle-ci.

## Exemples

### Déclaration de variables simples
```viva
DECLARE VARIABLE INTEGER COMPTEUR;
DECLARE VARIABLE FLOAT TENSION = 5.0;
DECLARE VARIABLE STRING MESSAGE = "PRET";
```

### Déclaration d'un tableau
```viva
DECLARE RUNTIME INTEGER ARRAY VALEURS[10];
```

### Déclaration de canaux et signaux
```viva
DECLARE CHANNEL RESET = 5;
DECLARE SIGNAL DATA = 23;
```
