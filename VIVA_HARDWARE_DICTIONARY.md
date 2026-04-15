# DICTIONNAIRE MATÉRIEL SEICA
## Guide de Référence des Modules et Instruments de Test

---

## TABLE DES MATIÈRES

1. [GESTION DE L'ALIMENTATION (POWERON / POWEROFF)](#1-gestion-de-lalimentation-poweron--poweroff)
2. [COMMANDES NUMÉRIQUES DÉTAILLÉES (MODES & FORMATS)](#2-commandes-numériques-détaillées-modes--formats)
3. [INSTRUMENTS ANALOGIQUES & MESURES](#3-instruments-analogiques--mesures)
4. [MODULE HAUTE TENSION (HV - HIGH VOLTAGE)](#4-module-haute-tension-hv---high-voltage)
5. [MODULE USB & ZONE UTILISATEUR](#5-module-usb--zone-utilisateur)
6. [MODULE GÉNÉRATEUR DE FONCTIONS (GEN)](#6-module-générateur-de-fonctions-gen)
7. [MODULE F40 (HIGH FREQUENCY)](#7-module-f40-high-frequency)
8. [MODULE SE2 (POWER CONTROL)](#8-module-se2-power-control)
9. [COMMUNICATION IEEE / GPIB](#9-communication-ieee--gpib)
10. [VECTEURS ALGORITHMIQUES (MATH SUR CANAUX)](#10-vecteurs-algorithmiques-math-sur-canaux)
11. [BOUNDARY SCAN (JTAG)](#11-boundary-scan-jtag)
12. [OPTION DIGIPLEX (DIGITAL MULTIPLEXER)](#12-option-digiplex-digital-multiplexer)

![Architecture Système Viva](./docs/images/software/viva_architecture.svg)
*Figure 1 : Vue d'ensemble des modules matériels Seica.*

---

## 1. GESTION DE L'ALIMENTATION (POWERON / POWEROFF)

### [Carte SE5 (Power Supply Management)](./docs/hardware/modules/SE5_Board.md)
Module de nouvelle génération pour la gestion de l'alimentation (remplace SE2).
- **Capacité :** Jusqu'à 8 unités PW.
- **Matrice :** Alimentation de l'UUT via sondes jusqu'à 2A.
- **Précision :** Sensing et programmation 16 bits.

### SECTIONS POWERON / POWEROFF
Délimitent les tests nécessitant que la carte (UUT) soit sous tension.
- **POWERON :** Active les alimentations via la macro POWER.
- **POWEROFF :** Désactive les alimentations en fin de test.

### MACRO POWER
Macro système pour configurer les alimentations PW1-PW8.
- **Paramètres :** VOLT, CURRENT, DELAY, SENSE, EXTINT, SET.

---

## 2. COMMANDES NUMÉRIQUES DÉTAILLÉES (MODES & FORMATS)

### STRUCTURE DES COMMANDES
- **D/S :** Driver (Sortie) / Sensor (Entrée).
- **L/H :** État logique Bas / Haut.
- **M/S :** Masked (Ignoré) / Sensed (Mesuré).
- **FORMAT :** Nret, Rzero, Rone, Rzeta.

### COMMANDES D'ASSERTION
- **ALn / AHn :** Force l'état à la phase `n`.
- **AGn :** Valeur de groupe à la phase `n`.
- **ASn :** Toggle à la phase `n`.

### MODES DE COMPILATION
- **Mode S700 :** Sépare la logique du timing (moderne).
- **Mode L200 :** Mode de compatibilité historique.

---

## 3. INSTRUMENTS ANALOGIQUES & MESURES

### ~MEASURE
Instruction de haut niveau pour les mesures (Voltage, Current, Frequency, Time).

### ~ATEST
Comparaison avec limites (LO, HI) et gestion d'erreurs.

### ~CONNECT / ~DISCONNECT
Contrôle manuel de la matrice de commutation (Scanner).

### Outils Orientés Objet (VNL)
Approche logicielle moderne pour le pilotage des ressources :
- **[Resistor.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Mesure de résistance avec gestion des tolérances.
- **[Capacitor.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Mesure de capacité.
- **[Inductor.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Mesure d'inductance.
- **[Diode.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Test de jonction diode.
- **[Transistor.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Test de transistors (BJT, FET, MOS).
- **[Fnode.Measure()](./docs/hardware/analog/ACL_IMM.md) :** Analyse de nœud (Bipôle électrique).

---

## 4. MODULE HAUTE TENSION (HV - HIGH VOLTAGE)

### ~PCT
Contrôle les contacts PCT.

### ~PLn
Connexion des canaux HV sur les lignes PL1-PL4.

### ~SET ISOLEV / ~SET ISORES
Références de tension flottante et charges résistives.

### ~SET PMM
Configuration du multimètre HV.

---

## 5. MODULE USB & ZONE UTILISATEUR

### ~SET USER_BUSW / ~SET USER_DAC
Bus numériques et convertisseurs DAC utilisateur.

### ~SET USER_LOAD / ~SET USER_WORD
Charges résistives et lignes CUSTOM.

### ~READ_OPTO
Lecture des entrées opto-couplées.

---

## 6. MODULE GÉNÉRATEUR DE FONCTIONS (GEN)

### ~SET USER_GEN
Configuration du générateur (HZ, VOUT, WAVE).

### ~MEAS USER_GEN
Mesure RMS vers DC via le module GEN.

---

## 7. MODULE F40 (HIGH FREQUENCY)

### [Timing & Synchronisation](./docs/software/language/Timing_and_Patterns.md)
Module de test numérique haute vitesse (25MHz).
- **Gestion du Timing :** Phases, strobes et fenêtres de lecture.
- **Instructions Spécifiques :**
    - `~ROUT RSn` : Résistance de terminaison (adaptation d'impédance).
    - `~PULLUP/DOWN` : Résistances de tirage 1KΩ.
    - `~MUXOUT` : Commutation des relais SERANA et COAX.

---

## 8. MODULE SE2 (POWER CONTROL)
Module de pilotage des alimentations avec programmation de courant.
- **~SET PW1...8 :** Configuration individuelle des alimentations (V, I, Delay, Sense).
- **~MEAS PW1...8 :** Mesure de tension ou courant sur l'unité spécifiée (résultat dans `AR`).
- **~SET GNDREF :** Contrôle du relais de masse commune (GND_REF).
- **~SET ZTEST :** Connexion de composants de précision internes pour l'auto-étalonnage du module LAM.

---

## 9. COMMUNICATION IEEE / GPIB

### ~SET BUS / ~SEND_IEEE / ~READ_IEEE
Pilotage d'instruments externes via bus GPIB.

---

## 10. VECTEURS ALGORITHMIQUES (MATH SUR CANAUX)

### ACCI / ACCD / ACSR / ACSL
Opérations sur l'accumulateur matériel (F50).

### ACRC
Calcul de CRC matériel en temps réel.

---

## 11. BOUNDARY SCAN (JTAG)

### ~SET VBNPOD / DECLARE BSCAN
Configuration de l'interface JTAG et des chaînes de composants.

---

## 12. OPTION DIGIPLEX (DIGITAL MULTIPLEXER)

### [Technique Digiplex](./docs/hardware/modules/digiplex_option.md)
Permet le test numérique sur les canaux analogiques du scanner.
- **Canaux :** Utilise les 4 canaux numériques de l'ACLAM.
- **Multiplexage :** Via scanner ou SCAFP/probes.
- **Fonctions :** Pull-up/down automatiques, charge programmable, mode mixte.

---

## ANNEXE : MOTS-CLEFS MATÉRIELS

### ~ATEST (TEST_ANALOGIQUE)
- **Syntaxe :** `~ATEST <variable> [NAME="str"] [LO=<v>] [HI=<v>];`

### ~CHLEV / ~CHMODE
Configuration électrique des drivers numériques.

### ~MEASURE (MESURE)
- **Types :** `Voltage`, `Current`, `Frequency`, `Time`.

### ~SET PW ALL
Contrôle global des alimentations.

### ~WG / ~RG (Bus de données)
Écriture et lecture sur des groupes de canaux.
