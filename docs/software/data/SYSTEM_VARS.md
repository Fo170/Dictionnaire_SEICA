# Variables Système

Le langage Viva réserve certains noms de variables pour des usages système spécifiques. Ces variables sont accessibles globalement et ne nécessitent pas de déclaration `DECLARE`.

## Liste des variables principales

### AR (Analog Register)
C'est le registre de destination par défaut pour toutes les mesures analogiques (`~MEASURE`). Il stocke une valeur de type `FLOAT`.

### NC (Numeric Counter)
Utilisé principalement comme compteur par défaut pour les boucles ou les opérations numériques. Type `INTEGER`.

### ERR (Error Flag)
Indique l'état d'erreur global du programme.
- `0` : Pas d'erreur.
- `1` : Erreur détectée (analogique ou numérique).

### TIME / DATE
Contiennent l'heure et la date système sous forme de chaînes de caractères (`STRING`).

## Exemples d'utilisation

### Utilisation de AR et ERR
```viva
~MEASURE Voltage ON=ch1 INTO=AR;
~ATEST AR LO=4.5 HI=5.5;
~IF (ERR == 1);
  ~WRITE "Tension hors limites : ", AR;
~ENDIF;
```

### Affichage de l'heure
```viva
~WRITE "Test démarré à : ", TIME;
```
