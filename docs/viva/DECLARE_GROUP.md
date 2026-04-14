# Mot-clef : DECLARE GROUP

Le mot-clef `DECLARE_GROUP` permet de regrouper plusieurs canaux ou signaux sous un identifiant unique pour effectuer des opérations groupées (bus de données, adresses, etc.).

## Syntaxe

```viva
DECLARE GROUP <nom_du_groupe> = <liste_de_canaux>;
```

- `<nom_du_groupe>` : Identifiant alphanumérique (max 20 caractères).
- `<liste_de_canaux>` : Liste de numéros de canaux ou de noms déclarés, séparés par des virgules.

## Sémantique

Un groupe peut contenir jusqu'à 64 canaux. Lors d'une opération sur un groupe (comme `~WG` ou `~RG`), la valeur fournie est traitée en binaire : le premier canal de la liste correspond au bit de poids faible (LSB).

## Exemples

### Définition d'un bus de données
```viva
DECLARE CHANNEL D0=1, D1=2, D2=3, D3=4;
DECLARE GROUP DATA_BUS = D0, D1, D2, D3;
```

### Écriture sur un groupe
```viva
START TEST_BUS STATIC;
  ~WG DATA_BUS = 0X0A; ! Écrit 1010 sur le bus (D3=1, D2=0, D1=1, D0=0)
ENDTEST;
```
