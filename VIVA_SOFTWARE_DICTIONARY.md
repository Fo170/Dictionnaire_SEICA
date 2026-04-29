# DICTIONNAIRE LOGICIEL SEICA
## Guide de Référence du Langage et de la Logique de Test

---

## TABLE DES MATIÈRES

1. [PRÉSENTATION DU LOGICIEL SEICA](#1-présentation-du-logiciel-seica)
2. [ENVIRONNEMENT WIZARD (ASSISTANT)](#2-environnement-wizard-assistant)
3. [ENVIRONNEMENTS DE TRAVAIL SPÉCIALISÉS](#3-environnements-de-travail-spécialisés)
4. [MÉTHODES DE MESURE & GUARDING](#4-méthodes-de-mesure--guarding)
5. [MACROS DE TEST ANALOGIQUE (R, C, L, FNODE)](#5-macros-de-test-analogique-r-c-l-fnode)
6. [MACROS SEMI-CONDUCTEURS & PUISSANCE](#6-macros-semi-conducteurs--puissance)
7. [MACROS VECTORLESS & SERVICE](#7-macros-vectorless--service)
8. [GUIDE DU LANGAGE SEICA (STATIC & DYNAMIC)](#8-guide-du-langage-seica-static--dynamic)
9. [TIMING & PATTERNS (SYNCHRONISATION)](#9-timing--patterns-synchronisation)
10. [PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR](#10-pré-processeur--directives-compilateur)
11. [DÉCLARATIONS & STRUCTURES DE DONNÉES](#11-déclarations--structures-de-données)
12. [CONTRÔLE DE FLUX & LOGIQUE](#12-contrôle-de-flux--logique)
13. [GESTION D'ÉVÉNEMENTS & COMPARAISONS](#13-gestion-dévénements--comparaisons)
14. [SECTIONS DE TEST & MODES D'ENVIRONNEMENT](#14-sections-de-test--modes-denvironnement)
15. [OUTILS VNL (SEICA NATIVE LANGUAGE)](#15-outils-vnl-seica-native-language)
16. [ENTRÉE / SORTIE & INTERFACE UTILISATEUR](#16-entrée--sortie--interface-utilisateur)
17. [FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME](#17-fonctions-mathématiques--variables-système)
18. [OPÉRATIONS SUR L'ACCUMULATEUR (AR)](#18-opérations-sur-laccumulateur-ar)
19. [COMMUNICATION & SCRIPTS EXTERNES (API, VBS)](#19-communication--scripts-externes-api-vbs)
20. [SYNTAXE DES BIBLIOTHÈQUES NUMÉRIQUES (.LIB)](#20-syntaxe-des-bibliothèques-numériques-lib)

![Environnements VIVA](../../images/software/viva_environments.svg)

---

## 1. PRÉSENTATION DU LOGICIEL SEICA

### [Aperçu et Gestion des Utilisateurs](./docs/software/viva_overview.md)
Le logiciel VIVA centralise le développement, le débogage et l'exécution des tests.
- **Rôles :** Opérateur, Développeur, Administrateur.
- **Gestionnaires :** System Manager, User Manager, Program Manager.

---

## 2. ENVIRONNEMENT WIZARD (ASSISTANT)

### [Flux de Travail Wizard](./docs/software/wizard_environment.md)
Procédure guidée en trois étapes pour la création de programmes.
- **PREPARE :** Importation CAD/BOM, édition de données, création automatique.
- **VERIFY :** Setup du programme, alignement optique, vérification.
- **TEST :** Exécution en production.

---

## 3. ENVIRONNEMENTS DE TRAVAIL SPÉCIALISÉS

### Wizard (CTRL+W)
Procédure guidée pour la création de programmes (Import, Create, Verify, Run).

### Graphic (CTRL+G)
Gestion visuelle du layout de la carte et des propriétés des points de test.

### Programming (CTRL+P)
Environnement de développement pour créer des fonctions, macros et labels.

### Debug (CTRL+D)
Mise au point des tests, visualisation graphique des mesures et modification des paramètres en temps réel.

---

## 4. MÉTHODES DE MESURE & GUARDING

### [Configurations de Mesure](./docs/software/measurement_methods.md)
VIVA supporte des mesures complexes pour garantir la précision.
- **Modes :** 2, 3, 4 (Kelvin) et 6 fils.
- **Guarding :** Active et Passive pour l'isolation des composants in-circuit.
- **Instruments :** Pilotage via le bus analogique interne (8 lignes).

---

## 5. MACROS DE TEST ANALOGIQUE (R, C, L, FNODE)

### [Composants Passifs](./docs/software/analog_macros.md)
Macros pour la mesure de précision des composants R, C, L.
- **FNODE :** Analyse harmonique par FFT pour le test de réseaux.
- **Tolérances :** Gestion des limites symétriques et asymétriques.

---

## 6. MACROS SEMI-CONDUCTEURS & PUISSANCE

### [Composants Actifs & Alimentation](./docs/software/power_active_macros.md)
Pilotage des semi-conducteurs et des unités de puissance.
- **Semi-conducteurs :** Diode, Zener, SCR, Triac, Transistor.
- **Power :** Séquences de mise sous tension sécurisées.
- **Soldering :** Paramètres du brasage laser "Donut".

---

## 7. MACROS VECTORLESS & SERVICE

### [Tests Vectorless & Utilitaires](./docs/software/vectorless_service_macros.md)
Tests avancés hors tension et fonctions de service.
- **Vectorless :** AUTIC, JSCAN, OPENFIX (sonde capacitive).
- **Service :** Jumper, Fuse, Discharge (protection UUT).
- **Interface :** Message et AskUser via VBScript.

---

## 8. GUIDE DU LANGAGE SEICA (STATIC & DYNAMIC)

### [Concepts Fondamentaux](./docs/software/language/VIVA_Language_Guide.md)
Le langage VIVA est un langage structuré de haut niveau gérant les tests statiques (PC) et dynamiques (DSP).

---

## 9. TIMING & PATTERNS (SYNCHRONISATION)

### [Gestion du Timing](./docs/software/language/Timing_and_Patterns.md)
Définition de la synchronisation temporelle pour les tests haute vitesse (F40/DHF).
- **Paramètres :** PERIOD, DEAD, OVERLAY, PHASE, ASSERT, STROBE.
- **Patterns :** Unité d'exécution dynamique séparée par `/`.
- **Boucles :** `BEGINLOOP` / `ENDLOOP` avec conditions d'arrêt (`ONERROR`, `ONPASS`).

![Timing VIVA](../../images/software/viva_timing_diagram.svg)

---

## 10. PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR

### @COMPILER
Définit les paramètres globaux de compilation.
- **Syntaxe :** `@COMPILER <option> = <valeur>;`
- **Options :** `MAX_ERROR`, `COMPLEX`, `VARNAME_LEN`, `BACKUP`.

### #INCLUDE
Inclut un fichier bibliothèque externe (.LIB).
- **Syntaxe :** `#INCLUDE <nom_fichier>;`

### @CALCOLATE
Effectue des calculs pendant la compilation.
- **Syntaxe :** `@CALCOLATE <variable> = <expression>;`

### @GRAY
Convertit automatiquement en code Gray à la compilation.
- **Syntaxe :** `@GRAY <variable> = <expression>;`

### @L (Logic States)
Assigne des états logiques denses à une liste de canaux.
- **États :** `H`, `L`, `1`, `0`, `T`, `.`.

### @MACRO / @ENDMACRO
Définit des blocs de code expansés à la compilation.

### @IF / @ELSE / @ENDIF
Compilation conditionnelle.

### @FOR / @WHILE
Génération dynamique de code source.

---

## 11. DÉCLARATIONS & STRUCTURES DE DONNÉES

### DECLARE
Définit des objets (variables, canaux, signaux).
- **Types :** `VARIABLE INTEGER`, `VARIABLE FLOAT`, `VARIABLE STRING`, `CHANNEL`, `SIGNAL`.

### DECLARE RUNTIME ARRAY / INDEX
Structures de données pour l'exécution.
- **Syntaxe :** `DECLARE RUNTIME <type> ARRAY <nom>[<dim>];`
- **Syntaxe :** `DECLARE RUNTIME INTEGER INDEX <nom>;`

---

## 12. CONTRÔLE DE FLUX & LOGIQUE

### START / ENDTEST
Délimite le bloc principal du programme.

### ~IF / ~ELSE / ~ENDIF
Conditionnelle Runtime avec support pour conditions complexes (AND, OR).

### ~FOR / ~ENDFOR / ~WHILE
Boucles de répétition et de contrôle de flux Run-time.

### ~SUBR / ~RETURN / ~ENDSUBR
[Définition de Sous-routines](./docs/software/math/ACCUMULATOR_OPS.md) avec passage d'arguments et retours conditionnés.

### ~BRANCH (GOTO)
Sauts vers des labels (`ONERROR`, `ONPASS`).

### ~SWITCH / ~CASE / ~ENDCASE
Branchements multiples avec option `CONTINUE`.

---

## 13. GESTION D’ÉVÉNEMENTS & COMPARAISONS

### ~ATEST / ~COMP
Deux types de comparaison :
- **~ATEST :** Comparaison globale. Active le flag d'erreur système `ERR` si hors limites.
- **~COMP :** Comparaison locale. N'affecte pas l'état global du test (idéal pour les recalages).

### [Gestion d'Événements (~ON)](./docs/software/logic/ON_EVENT.md)
Définit les actions lors d'erreurs ou d'interruptions (ERROR, BREAK, TIMEOUT).

---

## 14. SECTIONS DE TEST & MODES D'ENVIRONNEMENT

### [Organisation et Modes d'Exécution](./docs/software/logic/SECTIONS_MODES.md)
Structure du programme en blocs logiques et basculement entre les environnements Static et Dynamic.
- **Sections :** USER, SET, DIGITAL, MEAS, DIAG, END.
- **Modes :** DMASTER, STATIC.
- **Options :** PROBE, NOPROBE, NOSTEP.

---

## 15. OUTILS VNL (SEICA NATIVE LANGUAGE)

### [Outils et Méthodes VNL](./docs/software/logic/VNL_TOOLS.md)
Le VNL est une approche orientée objet pour le pilotage des ressources.
- **TEST :** Gestion de l'affichage et des paramètres.
- **EXPRESSION :** Calculs et assignations.
- **VBS :** Exécution de scripts Visual Basic.
- **SYSTEM :** Fonctions globales et clusters.

---

## 16. ENTRÉE / SORTIE & INTERFACE UTILISATEUR

### ~WRITE / ~WRITEL / ~REPORT
Affichage terminal, messages de statut et boîtes de dialogue interactives.

### [Flux et Couleurs (~STREAM, ~COLOR)](./docs/software/io/STREAM_COLOR.md)
Redirection des extrants et personnalisation visuelle.

### ~CURSOR / ~WINDOW / ~FONT
Gestion multi-fenêtres et polices de caractères.

### ~FILE / ~FORMAT
Manipulation de fichiers ASCII (OPEN, READ, WRITE, REWIND, REMOVE).

---

## 17. FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME

### ~CALC
Opérations arithmétiques et logiques. Supporte les [Conversions de Types](./docs/software/math/ACCUMULATOR_OPS.md).

### FONCTIONS INTÉGRÉES
`~ABS`, `~SQRT`, `~SIN`, `~COS`, `~TAN`, `~EXP`, `~LOG`.

---

## 18. OPÉRATIONS SUR L'ACCUMULATEUR (AR)

### [Manipulation du Registre AR](./docs/software/math/ACCUMULATOR_OPS.md)
Instructions de bas niveau pour les calculs rapides.
- **Transfert :** `~LOAD`, `~STORE`.
- **Arithmétique :** `~ADD`, `~SUB`, `~MULT`, `~DIV`.
- **Trigonométrie :** `~SIN`, `~COS`, `~ATAN`, `~EXP`, `~LOG`.
- **Logique :** `~AND`, `~OR`, `~XOR`, `~SHL`, `~SHR`.

---

## 19. COMMUNICATION & SCRIPTS EXTERNES (API, VBS)

### ~API
Appel de fonctions dans des DLL Windows.

### ~VBS
Exécution de scripts VBScript avec échange de données.

### ~SYS (Appel Système)
Exécute une application externe Windows.

---

## 17. SYNTAXE DES BIBLIOTHÈQUES NUMÉRIQUES (.LIB)

### [Structure des fichiers .LIB](./docs/hardware/modules/digiplex_option.md)
Les bibliothèques définissent les composants pour le test numérique (DIGIPLEX).
- **#CompName** : Nom et liste des pins.
- **!CompType** : Type de composant (D=Digital).
- ***PI** : Direction des pins (I=Input, O=Output).
- ***TY** : Alimentations (G=GND, V=VCC).
- **@L** : Lignes de la table de vérité (H, L, T, ., 1, 0).

---

## ANNEXE : MOTS-CLEFS LOGICIELS

### ~API (Interface Windows)
- **Syntaxe :** `~API "<nom_dll>" "<nom_fonction>" [<type_retour>] [<arguments...>];`

### ~CALC (CALCUL)
- **Syntaxe :** `~CALC <variable> = <expression> ;`

### ~FILE (Gestion de fichiers)
- **Syntaxe :** `~FILE N=<exp> <mode> "<nom_fichier>";`

### ~FORMAT / ~AFORMAT
Contrôle la conversion des valeurs en texte.

### ~ONBREAK
Définit le comportement lors d'une pause ou erreur (ABORT, CALL, CONTINUE).

### ~ON (Gestion d'événements)
Définit des actions déclenchées par des événements système (ERROR, etc.).

### ~PRINT (IMPRIME)
Envoie des données vers une imprimante ou la console.

### ~SHL / ~SHR
Décalage de bits sur le registre AR.

### ~SET DIGIPLEX (Option Digiplex)
Configure les ressources numériques sur canaux analogiques.
- **Syntaxe :** `~SET DIGIPLEX [PULL UP|PULL DOWN|LOAD|HOLD] <params>;`
- **Exemple :** `~SET DIGIPLEX PULL UP 1K;`

### ~STORE / ~LOAD
Transfert entre variables et le registre AR.

### ~SUB / ~MULT / ~DIV / ~ADD
Opérations arithmétiques sur le registre AR.

### ~TIMER / ~READ_TIMER
Mesure de temps d'exécution (8 timers).

### ~XOR / ~AND / ~OR
Opérations logiques bit à bit sur le registre AR.

---
*Fin du Dictionnaire SEICA - Version 1.2 (Logiciel)*
