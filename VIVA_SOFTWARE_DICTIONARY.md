# DICTIONNAIRE LOGICIEL VIVA (SEICA)
## Guide de Référence du Langage et de la Logique de Test

---

## TABLE DES MATIÈRES

1. [ENVIRONNEMENTS DE TRAVAIL](#1-environnements-de-travail)
2. [GUIDE DU LANGAGE VIVA (STATIC & DYNAMIC)](#2-guide-du-langage-viva-static--dynamic)
3. [TIMING & PATTERNS (SYNCHRONISATION)](#3-timing--patterns-synchronisation)
4. [PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR](#4-pré-processeur--directives-compilateur)
5. [DÉCLARATIONS & STRUCTURES DE DONNÉES](#5-déclarations--structures-de-données)
6. [CONTRÔLE DE FLUX & LOGIQUE](#6-contrôle-de-flux--logique)
7. [OUTILS VNL (VIVA NATIVE LANGUAGE)](#7-outils-vnl-viva-native-language)
8. [ENTRÉE / SORTIE & INTERFACE UTILISATEUR](#8-entrée--sortie--interface-utilisateur)
9. [FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME](#9-fonctions-mathématiques--variables-système)
10. [COMMUNICATION & SCRIPTS EXTERNES (API, VBS)](#10-communication--scripts-externes-api-vbs)

![Environnements VIVA](../../images/software/viva_environments.svg)

---

## 1. ENVIRONNEMENTS DE TRAVAIL

### Wizard (CTRL+W)
Procédure guidée pour la création de programmes (Import, Create, Verify, Run).

### Graphic (CTRL+G)
Gestion visuelle du layout de la carte et des propriétés des points de test.

### Programming (CTRL+P)
Environnement de développement pour créer des fonctions, macros et labels.

### Debug (CTRL+D)
Mise au point des tests, visualisation graphique des mesures et modification des paramètres en temps réel.

---

## 2. GUIDE DU LANGAGE VIVA (STATIC & DYNAMIC)

### [Concepts Fondamentaux](./docs/software/language/VIVA_Language_Guide.md)
Le langage VIVA est un langage structuré de haut niveau gérant les tests statiques (PC) et dynamiques (DSP).
- **Types :** INTEGER, FLOAT, STRING, ARRAYS.
- **Flags :** Gestion des erreurs partielles et globales.
- **Syntaxe :** Directives `@` (compilation) et instructions `~` (runtime).

---

## 3. TIMING & PATTERNS (SYNCHRONISATION)

### [Gestion du Timing](./docs/software/language/Timing_and_Patterns.md)
Définition de la synchronisation temporelle pour les tests haute vitesse.
- **Paramètres :** PERIOD, DEAD, OVERLAY, PHASE, ASSERT, STROBE.
- **Patterns :** Unité d'exécution dynamique séparée par `/`.
- **Boucles :** `BEGINLOOP` / `ENDLOOP` avec conditions d'arrêt.

![Timing VIVA](../../images/software/viva_timing_diagram.svg)

---

## 4. PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR

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

## 2. DÉCLARATIONS & STRUCTURES DE DONNÉES

### DECLARE
Définit des objets (variables, canaux, signaux).
- **Types :** `VARIABLE INTEGER`, `VARIABLE FLOAT`, `VARIABLE STRING`, `CHANNEL`, `SIGNAL`.

### DECLARE RUNTIME ARRAY / INDEX
Structures de données pour l'exécution.
- **Syntaxe :** `DECLARE RUNTIME <type> ARRAY <nom>[<dim>];`
- **Syntaxe :** `DECLARE RUNTIME INTEGER INDEX <nom>;`

---

## 3. CONTRÔLE DE FLUX & LOGIQUE

### START / ENDTEST
Délimite le bloc principal.

### ~IF / ~ELSE / ~ENDIF
Conditionnelle Runtime.

### ~FOR / ~ENDFOR
Boucle Runtime avec compteur.

### ~WHILE / WEND
Boucle tant que.

### ~REPEAT / ~UNTIL
Boucle avec test à la fin.

### ~DO / ~DONE
Répétition fixe rapide.

### ~SUBR / ~RETURN / ~ENDSUBR
Sous-routines avec passage d'arguments.

### ~BRANCH (GOTO)
Sauts vers des labels (`ONERROR`, `ONPASS`).

### ~SWITCH / ~CASE / ~ENDCASE
Branchements multiples.

## 5. OUTILS VNL (VIVA NATIVE LANGUAGE)

### [Outils et Méthodes VNL](./docs/software/logic/VNL_TOOLS.md)
Le VNL est une approche orientée objet pour le pilotage des ressources.
- **TEST :** Gestion de l'affichage et des paramètres.
- **EXPRESSION :** Calculs et assignations.
- **VBS :** Exécution de scripts Visual Basic.
- **SYSTEM :** Fonctions globales et clusters.

---

## 6. ENTRÉE / SORTIE & INTERFACE UTILISATEUR

### ~WRITE / ~WRITEL
Affichage terminal avec attributs de formatage.

### ~READ_SCR
Saisie utilisateur au clavier.

### ~MSG
Boîte de dialogue modale.

### ~CURSOR
Positionnement du curseur.

### ~WINDOW / ~FONT
Gestion multi-fenêtres et polices.

### ~FILE
Manipulation de fichiers (OPEN, WRITE, READ, REMOVE).

---

## 5. FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME

### ~CALC
Opérations arithmétiques et logiques Runtime.

### FONCTIONS INTÉGRÉES
`~ABS`, `~SQRT`, `~SIN`, `~COS`, `~TAN`, `~EXP`, `~LOG`, `~LOG10`.

### VARIABLES SYSTÈME
- `AR` : Registre analogique (FLOAT).
- `NC` : Compteur numérique (INTEGER).
- `ERR` : Flag d'erreur global (0=OK, 1=KO).
- `TIME`, `DATE` : Heure et date système.

---

## 6. COMMUNICATION & SCRIPTS EXTERNES (API, VBS)

### ~API
Appel de fonctions dans des DLL Windows.

### ~VBS
Exécution de scripts VBScript avec échange de données.

### ~SYS (Appel Système)
Exécute une application externe Windows.

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

### ~STORE / ~LOAD
Transfert entre variables et le registre AR.

### ~SUB / ~MULT / ~DIV / ~ADD
Opérations arithmétiques sur le registre AR.

### ~TIMER / ~READ_TIMER
Mesure de temps d'exécution (8 timers).

### ~XOR / ~AND / ~OR
Opérations logiques bit à bit sur le registre AR.
