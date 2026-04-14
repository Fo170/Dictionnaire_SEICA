# Mot-clef : ~WG / ~RG (Bus de données)

Les mots-clés `~WG` (Write Group) et `~RG` (Read Group) sont utilisés pour manipuler des groupes de canaux comme des bus numériques.

## Syntaxe

```viva
~WG <nom_groupe> = <expression> ;
~RG <nom_groupe> INTO=<variable> ;
```

- `<nom_groupe>` : Un groupe préalablement défini par `DECLARE GROUP`.
- `<expression>` : Valeur numérique à écrire sur le bus.
- `<variable>` : Variable de destination pour la lecture.

## Sémantique

- `~WG` convertit la valeur de l'expression en binaire et l'applique aux canaux du groupe. Le premier canal déclaré dans le groupe reçoit le bit de poids faible (LSB).
- `~RG` lit l'état logique de chaque canal du groupe et reconstruit une valeur numérique.

## Exemples

### Écriture sur un bus d'adresse
```viva
DECLARE GROUP ADDR = 1, 2, 3, 4, 5, 6, 7, 8;
~WG ADDR = 0X55; ! Applique 01010101 sur les canaux 1 à 8
```

### Lecture d'un bus de données
```viva
DECLARE GROUP DATA = 10, 11, 12, 13;
DECLARE VARIABLE INTEGER VAL_LU;
~RG DATA INTO=VAL_LU;
~IF (VAL_LU == 0X0F);
  ~WRITE "Bus à 1111";
~ENDIF;
```
