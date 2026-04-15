# Déclaration : DECLARE RUNTIME ARRAY

La commande `DECLARE RUNTIME ARRAY` permet de créer des structures de données indexées (tableaux) accessibles pendant l'exécution du programme.

## Syntaxe

```viva
DECLARE RUNTIME <type> ARRAY <nom>[<dimension>];
```

- `<type>` : `INTEGER`, `FLOAT` ou `STRING`.
- `<dimension>` : Nombre d'éléments (l'index commence à 0).

## Sémantique

Les tableaux sont essentiels pour stocker des séries de mesures, comparer des flux de données ou gérer des listes de paramètres dynamiques.

## Exemples

### Tableau de mesures
```viva
DECLARE RUNTIME FLOAT ARRAY MESURES[10];
DECLARE RUNTIME INTEGER INDEX I;

START CAPTURE;
  ~FOR I = 0 TO 9;
    ~MEASURE Voltage ON=1 INTO=MESURES[I];
  ~ENDFOR;
ENDTEST;
```
