# Mot-clef : DECLARE CHANNEL

Le mot-clef `DECLARE CHANNEL` permet d'associer un nom symbolique à un canal physique du système de test.

## Syntaxe

```viva
DECLARE CHANNEL <nom_du_canal> = <numero_physique>;
```

- `<nom_du_canal>` : Chaîne alphanumérique (max 20 caractères).
- `<numero_physique>` : Numéro du canal matériel (ex: 1 à 2048).

## Sémantique

Cette instruction est cruciale pour l'abstraction matérielle. En utilisant des noms symboliques, le programme de test devient indépendant du câblage physique. Si le canal physique change, il suffit de modifier la déclaration au début du programme. On peut déclarer jusqu'à 1024 canaux.

## Exemples

### Déclarations simples
```viva
DECLARE CHANNEL RESETN = 2;
DECLARE CHANNEL CLK = 1;
DECLARE CHANNEL VCC_SENSE = 125;
```

### Utilisation dans le programme
```viva
START MON_TEST STATIC;
  ~IL RESETN; ! Force le canal RESETN (physique 2) à l'état bas
  ~IH CLK;    ! Force le canal CLK (physique 1) à l'état haut
ENDTEST;
```
