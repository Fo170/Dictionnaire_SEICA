# Mot-clef : ~IF (SI)

Le mot-clef `~IF` permet l'exécution conditionnelle d'instructions pendant l'exécution (runtime).

## Syntaxe

```viva
~IF ( [NOT] <variable> <condition> <expression> ) ;
    <instructions_si_vrai>
[~ELSE;
    <instructions_si_faux>]
~ENDIF ;
```

### Opérateurs de condition :
- `<` ou `lt` : Inférieur à.
- `>` ou `gt` : Supérieur à.
- `=` ou `eq` : Égal à.
- `<=` ou `le` : Inférieur ou égal.
- `>=` ou `ge` : Supérieur ou égal.
- `<>` ou `ne` : Différent de.

## Sémantique

L'expression entre parenthèses est évaluée. Si elle est vraie, le bloc suivant est exécuté. Si une clause `~ELSE` est présente et que l'expression est fausse, c'est ce second bloc qui est exécuté. Il est possible d'imbriquer jusqu'à 10 niveaux de `~IF`.

## Exemples

### Comparaison simple
```viva
~IF (A > 10) ;
    ~WRITE "A est supérieur à 10";
~ELSE;
    ~WRITE "A est inférieur ou égal à 10";
~ENDIF;
```

### Conditions multiples
```viva
~IF ( (J == 0) && (F2 > 1.09) ) ;
    ~WRITE "Condition complexe remplie";
~ENDIF;
```
