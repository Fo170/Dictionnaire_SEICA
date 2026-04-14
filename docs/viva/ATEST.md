# Mot-clef : ~ATEST (TEST_ANALOGIQUE)

Le mot-clef `~ATEST` est utilisé pour comparer une valeur mesurée ou une variable avec des limites spécifiées.

## Syntaxe

```viva
~ATEST <variable> [NAME="nom_test"] [LO=<limite_basse>] [HI=<limite_haute>] [ONERROR <label>] [ONPASS <label>] ;
~ATEST <variable> [VALUE=<valeur>] [TOL=<tolerance>] [ONERROR <label>] ;
```

- `<variable>` : La variable à tester.
- `LO` / `HI` : Limites absolue basse et haute.
- `VALUE` / `TOL` : Valeur nominale et tolérance en pourcentage.
- `ONERROR` / `ONPASS` : Sauts conditionnels selon le résultat du test.

## Sémantique

L'instruction compare la valeur de la variable avec les limites. Si la valeur est hors limites, le flag d'erreur globale et le flag d'erreur partielle sont activés. Le nom spécifié dans `NAME` apparaîtra dans le rapport de test en cas d'échec.

## Exemples

### Test avec limites absolues
```viva
~ATEST testValue NAME="TEST1" LO=4.5 HI=5.5 ;
```

### Test avec tolérance
```viva
~ATEST testValue NAME="TEST_VCC" VALUE=5.0 TOL=10 ; ! 5V +/- 10%
```

### Saut sur erreur
```viva
~ATEST testValue LO=1.0 HI=2.0 ONERROR LABEL_ERREUR ;
```
