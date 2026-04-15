# Opérations sur l'Accumulateur (AR)

Le registre **AR** (Accumulator Register) est un registre interne utilisé pour les calculs arithmétiques et logiques rapides pendant l'exécution.

## Chargement et Stockage
- **~LOAD <valeur>** : Charge une constante ou une variable dans le registre AR.
- **~STORE <variable>** : Stocke le contenu du registre AR dans une variable.

## Arithmétique
- **~ADD <valeur>** : Additionne la valeur au contenu de AR.
- **~SUB <valeur>** : Soustrait la valeur du contenu de AR.
- **~MULT <valeur>** : Multiplie le contenu de AR par la valeur.
- **~DIV <valeur>** : Divise le contenu de AR par la valeur.

## Logique Bit à Bit
- **~AND <valeur>** : ET logique entre AR et la valeur.
- **~OR <valeur>** : OU logique entre AR et la valeur.
- **~XOR <valeur>** : OU exclusif entre AR et la valeur.

## Décalages
- **~SHL <n>** : Décale le contenu de AR de `n` bits vers la gauche.
- **~SHR <n>** : Décale le contenu de AR de `n` bits vers la droite.

## Exemple
```viva
DECLARE RUNTIME INTEGER V1 = 10;
DECLARE RUNTIME FLOAT RESULT;

START CALC_AR STATIC;
  ~LOAD V1;
  ~ADD 5;
  ~MULT 2;
  ~STORE RESULT; ! RESULT = (10 + 5) * 2 = 30
  ~WRITE "Résultat : ", RESULT;
ENDTEST;
```
