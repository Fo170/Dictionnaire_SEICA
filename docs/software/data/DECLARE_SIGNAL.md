# Déclaration : DECLARE SIGNAL

## Syntaxe
```viva
DECLARE SIGNAL <nom_du_signal>;
```

## Sémantique
Définit un signal symbolique qui peut être manipulé soit comme un nom de canal, soit comme une variable réelle. Il est possible d'effectuer des calculs arithmétiques et logiques sur un signal.

## Exemple
```viva
DECLARE SIGNAL DATA_VALID;
DECLARE CHANNEL PIN_VALID = 125;

START PROG STATIC;
~CALC DATA_VALID = PIN_VALID;
~IF (DATA_VALID = 1);
  ~WRITE "Signal valide";
~ENDIF;
ENDTEST;
```
