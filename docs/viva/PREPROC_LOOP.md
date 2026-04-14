# Mot-clef : @FOR / @WHILE (Pré-processeur)

Les boucles de pré-processeur permettent de générer dynamiquement du code source Viva avant la phase de compilation. C'est un outil puissant pour gérer des structures répétitives sans écrire manuellement chaque ligne.

## Syntaxe

```viva
@FOR <variable> = <debut> TO <fin>;
  <code_a_generer>
@ENDFOR;
```

## Sémantique

- La variable de boucle (ex: `@I`) peut être utilisée dans le code généré en utilisant le préfixe `@`.
- Le pré-processeur remplace `@I` par sa valeur actuelle à chaque itération.
- Très utile pour déclarer des centaines de canaux ou générer des tests répétitifs.

## Exemples

### Déclaration massive de canaux
```viva
@FOR I = 1 TO 16;
  DECLARE CHANNEL DATA@I = @I;
@ENDFOR;
! Génère : DECLARE CHANNEL DATA1 = 1; ... DECLARE CHANNEL DATA16 = 16;
```

### Génération de tests
```viva
@FOR I = 1 TO 5;
  ~MEASURE Voltage ON=TP@I INTO=AR;
  ~ATEST AR NAME="TEST_TP@I" LO=4.5 HI=5.5;
@ENDFOR;
```
