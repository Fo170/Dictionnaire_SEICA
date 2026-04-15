# Générateurs et Registres (F50)

## ~DIG_CLOCK (Générateur d'impulsions)
### Syntaxe
```viva
~DIG_CLOCK FR=<valeur> DUTY=<%> PHASE=<deg> N=<cycles> START|STOP|PREPARE <pinlist> ;
```
### Sémantique
Programme le générateur d'impulsions interne du module F50 (un générateur par groupe de 8 canaux).
- **FR** : Fréquence en Hertz.
- **DUTY** : Cycle de travail (%).
- **PHASE** : Phase du front montant.
- **N** : Nombre de cycles (0 = continu).

## ~DIG_TX (Registre à décalage)
### Syntaxe
```viva
~DIG_TX TDI=<valeur> N=<bits> START|PREPARE <pinlist> ;
```
### Sémantique
Programme les registres à décalage internes (16 bits) du module F50.
- **TDI** : Données à décaler.
- **N** : Nombre de bits à décaler (max 16).

## Exemple
```viva
! Génère une horloge de 1MHz sur le canal 1
~DIG_CLOCK FR=1MHZ DUTY=50 START 1;

! Envoie une trame série de 16 bits
~DIG_TX TDI=0xABCD N=16 START 1;
```
