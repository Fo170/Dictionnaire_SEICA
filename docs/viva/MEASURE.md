# Mot-clef : ~MEASURE (MESURE)

Le mot-clef `~MEASURE` est une instruction de haut niveau (NVL) utilisée pour effectuer des mesures sur les points de test de la carte.

## Syntaxe

```viva
~MEASURE <TYPE> [PARAMETRES...] ;
```

### Types de mesures courants :
- `Voltage` (ou `V`) : Mesure de tension.
- `Current` (ou `I`) : Mesure de courant.
- `Frequency` (ou `F`) : Mesure de fréquence.
- `Time` (ou `T`) : Mesure de temps ou d'intervalle.

## Sémantique

Le compilateur choisit automatiquement l'instrument le plus approprié parmi les ressources disponibles du système (ACL, LAM, etc.) pour satisfaire la requête de mesure. Les résultats sont généralement stockés dans le registre système `AR`.

## Exemples

### Mesure de tension RMS
```viva
~MEASURE Voltage TYPE=rms RANGE=10V ON=ch1 ;
```

### Mesure de courant DC
```viva
~MEASURE Current TYPE=dc RANGE=100mA ON=ch2 ;
```

### Mesure de fréquence
```viva
~MEASURE Frequency RANGE=10V ON=ch3 ;
```
