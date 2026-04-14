# Directive : @CALCOLATE

La directive `@CALCOLATE` permet d'effectuer des calculs arithmétiques ou logiques pendant la phase de compilation du programme Viva.

## Syntaxe

```viva
@CALCOLATE <variable> = <expression>;
```

- `<variable>` : Une variable de type INTEGER définie par `DECLARE VARIABLE`.
- `<expression>` : Une combinaison de constantes, de variables et d'opérateurs (+, -, *, /, ^, &, |, <n, >n).

## Sémantique

Contrairement à `~CALC`, qui s'exécute pendant le test, `@CALCOLATE` est résolu par le compilateur. Cela permet d'optimiser le code en pré-calculant des valeurs qui ne changent pas pendant l'exécution.

## Exemples

### Calcul complexe de masque
```viva
DECLARE VARIABLE INTEGER MASQUE;
@CALCOLATE MASQUE = (0XFF & 0XF0) | 0X05;
```

### Utilisation avec des parenthèses
```viva
@CALCOLATE VAR = (56 - 5 * (2 / 4));
```
