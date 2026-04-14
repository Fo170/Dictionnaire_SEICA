# Mot-clef : @MACRO / @ENDMACRO

Les macros permettent de définir des blocs de code réutilisables qui sont expansés par le pré-processeur avant la compilation. Contrairement aux sous-routines (`~SUBR`), les macros n'ont pas de surcoût à l'exécution car le code est copié directement.

## Syntaxe

```viva
@MACRO <nom_macro> [<arg1>, <arg2>...];
  <instructions>
@ENDMACRO;
```

## Sémantique

- Les arguments sont remplacés textuellement dans le corps de la macro.
- Les macros sont idéales pour des séquences de test répétitives avec de légères variations (ex: tester plusieurs rails d'alimentation).
- On peut utiliser des étiquettes locales à l'intérieur d'une macro en utilisant le préfixe `@`.

## Exemples

### Macro de test de tension
```viva
@MACRO TEST_ALIM NOM, CANAL, CIBLE;
  ~MEASURE Voltage ON=CANAL INTO=AR;
  ~ATEST AR NAME=NOM LO=CIBLE-0.1 HI=CIBLE+0.1;
@ENDMACRO;

! Appel de la macro
TEST_ALIM "5V_DIG", 5, 5.0;
TEST_ALIM "12V_ANA", 12, 12.0;
```
