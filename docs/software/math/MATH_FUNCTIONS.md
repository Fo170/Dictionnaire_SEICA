# Fonctions Mathématiques

Viva propose une bibliothèque de fonctions mathématiques utilisables à l'intérieur de l'instruction `~CALC` pour effectuer des calculs complexes sur les résultats de mesure.

## Liste des fonctions

| Fonction | Description |
| :--- | :--- |
| `~ABS(x)` | Valeur absolue |
| `~SQRT(x)` | Racine carrée |
| `~SIN(x)` / `~COS(x)` / `~TAN(x)` | Fonctions trigonométriques (en radians) |
| `~ASIN(x)` / `~ACOS(x)` / `~ATAN(x)` | Fonctions trigonométriques inverses |
| `~EXP(x)` | Exponentielle |
| `~LOG(x)` | Logarithme népérien |
| `~LOG10(x)` | Logarithme décimal |

## Sémantique

Toutes ces fonctions prennent un argument de type `FLOAT` ou `INTEGER` et retournent un résultat de type `FLOAT`. Les angles pour les fonctions trigonométriques doivent être fournis en radians.

## Exemples

### Calcul d'hypoténuse
```viva
DECLARE RUNTIME FLOAT A=3.0, B=4.0, C;
~CALC C = ~SQRT(A^2 + B^2); ! C vaudra 5.0
```

### Conversion Degrés en Radians
```viva
DECLARE RUNTIME FLOAT DEG=45.0, RAD, S;
~CALC RAD = DEG * (3.14159 / 180.0);
~CALC S = ~SIN(RAD);
```
