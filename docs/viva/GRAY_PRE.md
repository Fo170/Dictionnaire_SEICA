# Directive : @GRAY

La directive `@GRAY` calcule une expression arithmétique ou logique et convertit automatiquement le résultat en code Gray avant de le stocker.

## Syntaxe

```viva
@GRAY <variable> = <expression>;
```

- `<variable>` : Variable de destination (INTEGER).
- `<expression>` : Expression arithmétique ou logique standard.

## Sémantique

Le code Gray est un codage binaire où un seul bit change entre deux nombres consécutifs. Cette directive est particulièrement utile pour générer des signaux de bus ou des compteurs qui minimisent les parasites de commutation.

## Exemples

### Conversion simple
```viva
DECLARE VARIABLE INTEGER VAL_GRAY;
@GRAY VAL_GRAY = 10; ! Stocke la représentation Gray de 10
```
