# Vecteurs Algorithmiques et Accumulateur F50

Le module F50 permet d'effectuer des opérations mathématiques à la vitesse des patterns numériques grâce à un accumulateur matériel 8 bits.

## Commandes de l'Accumulateur
- **MATH <pinlist>** : Force les canaux spécifiés à suivre l'état de l'accumulateur.
- **MATL <pinlist>** : Retourne au mode mémoire dynamique standard (par défaut).
- **ACCH / ACCL** : Charge '1' ou '0' dans le bit correspondant de l'accumulateur.
- **ACCI / ACCD** : Incrémente ou décrémente l'accumulateur.
- **ACSR / ACSL** : Décalage circulaire à droite ou à gauche.
- **ACCX** : Complément à 1 de l'accumulateur.

## Calcul de CRC
- **ACRC <pinlist>** : Calcule le CRC matériel en temps réel sur un groupe de 8 canaux.

## Exemple
```viva
DECLARE GROUP DATA = 1,2,3,4,5,6,7,8;

START TEST_ALGO;
  ! Initialise l'accumulateur à 0
  ACCL DATA;
  ! Les canaux DATA suivent maintenant l'accumulateur
  MATH DATA;
  
  /! Pattern 1 : DATA = 0
  ACCI DATA; ! Prépare l'incrément
  
  /! Pattern 2 : DATA = 1
  ACCI DATA;
  
  /! Pattern 3 : DATA = 2
  ACRC DATA; ! Calcule le CRC sur les données passées
ENDTEST;
```
