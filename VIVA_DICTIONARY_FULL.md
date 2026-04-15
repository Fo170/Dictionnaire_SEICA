# DICTIONNAIRE COMPLET DU LANGAGE VIVA (SEICA)
## Guide de Référence pour la Programmation de Tests

> **Note :** Ce dictionnaire est également disponible en versions spécialisées :
> - [**Dictionnaire LOGICIEL**](./VIVA_SOFTWARE_DICTIONARY.md) (Langage, Logique, Pré-processeur)
> - [**Dictionnaire MATÉRIEL**](./VIVA_HARDWARE_DICTIONARY.md) (Modules HV, USB, GEN, JTAG, Alimentations)

![Architecture Système Viva](./docs/images/software/viva_architecture.svg)
*Figure 1 : Vue d'ensemble de l'architecture logicielle et matérielle Viva.*

---

## TABLE DES MATIÈRES

1. [ENVIRONNEMENTS DE TRAVAIL](#1-environnements-de-travail)
2. [PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR](#2-pré-processeur--directives-compilateur)
3. [DÉCLARATIONS & STRUCTURES DE DONNÉES](#3-déclarations--structures-de-données)
4. [CONTRÔLE DE FLUX & LOGIQUE](#4-contrôle-de-flux--logique)
5. [OUTILS VNL (VIVA NATIVE LANGUAGE)](#5-outils-vnl-viva-native-language)
6. [INSTRUMENTS & MATÉRIEL (ANALOGIQUE & NUMÉRIQUE)](#6-instruments--matériel-analogique--numérique)
7. [GESTION DE L'ALIMENTATION (POWERON / POWEROFF)](#7-gestion-de-lalimentation-poweron--poweroff)
8. [COMMANDES NUMÉRIQUES DÉTAILLÉES (MODES & FORMATS)](#8-commandes-numériques-détaillées-modes--formats)
9. [MODULE HAUTE TENSION (HV - HIGH VOLTAGE)](#9-module-haute-tension-hv---high-voltage)
10. [MODULE USB & ZONE UTILISATEUR](#10-module-usb--zone-utilisateur)
11. [MODULE GÉNÉRATEUR DE FONCTIONS (GEN)](#11-module-générateur-de-fonctions-gen)
12. [COMMUNICATION IEEE / GPIB](#12-communication-ieee--gpib)
13. [VECTEURS ALGORITHMIQUES (MATH SUR CANAUX)](#13-vecteurs-algorithmiques-math-sur-canaux)
14. [ENTRÉE / SORTIE & INTERFACE UTILISATEUR](#14-entrée--sortie--interface-utilisateur)
15. [FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME](#15-fonctions-mathématiques--variables-système)
16. [COMMUNICATION & INTERFACES EXTERNES (API, VBS, JTAG)](#16-communication--interfaces-externes-api-vbs-jtag)

![Environnements VIVA](./docs/images/software/viva_environments.svg)

---

## 1. ENVIRONNEMENTS DE TRAVAIL

### Wizard (CTRL+W)
Procédure guidée en 8 étapes pour la création complète d'un programme de test (Import, Create, Verify, Run).

### Graphic (CTRL+G)
Gestion visuelle du layout de la carte, des composants et des propriétés des points de test (Side, Testability, Shape).

### Programming (CTRL+P)
Environnement de développement orienté objet pour créer des fonctions, macros et labels en utilisant le VNL.

### Debug (CTRL+D)
Mise au point des tests, visualisation graphique des mesures, exécution pas à pas et modification des paramètres.

### Camera (CTRL+I)
Apprentissage optique des coordonnées physiques et gestion des mires (Markers) pour les systèmes Flying Probe.

### Functional (CTRL+F)
Développement de patterns numériques haute vitesse (.pat) organisés en clusters.

---

## 2. PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR

### @COMPILER
Définit les paramètres globaux de compilation.
- **Syntaxe :** `@COMPILER <option> = <valeur>;`
- **Options :** `MAX_ERROR` (erreurs max), `COMPLEX` (itérations max), `VARNAME_LEN` (longueur noms), `BACKUP` (fichier .PAC).
- **Exemple :** `@COMPILER MAX_ERROR=100; @COMPILER VARNAME_LEN=20;`

### #INCLUDE
Inclut un fichier bibliothèque externe.
- **Syntaxe :** `#INCLUDE <nom_fichier>;`
- **Exemple :** `#INCLUDE MA_LIB_TEST;`

### @CALCOLATE
Effectue des calculs pendant la compilation (optimisation).
- **Syntaxe :** `@CALCOLATE <variable> = <expression>;`
- **Exemple :** `@CALCOLATE MASQUE = (0XFF & 0XF0) | 0X05;`

### @GRAY
Convertit automatiquement en code Gray à la compilation.
- **Syntaxe :** `@GRAY <variable> = <expression>;`
- **Exemple :** `@GRAY VAL_GRAY = 10;`

### @L (Logic States)
Assigne des états logiques denses à une liste de canaux.
- **Syntaxe :** `@L(<états>);`
- **États :** `H` (High), `L` (Low), `1` (Sense H), `0` (Sense L), `T` (Toggle), `.` (Mask).
- **Exemple :** `@L(HHL01.........);`

### @MACRO / @ENDMACRO
Définit des blocs de code expansés à la compilation (sans surcoût runtime).
- **Syntaxe :** `@MACRO <nom> [<args>]; ... @ENDMACRO;`
- **Exemple :**
```viva
@MACRO TEST_VCC V;
  ~MEASURE Voltage ON=VCC INTO=AR;
  ~ATEST AR LO=V-0.1 HI=V+0.1;
@ENDMACRO;
```

### @IF / @ELSE / @ENDIF
Compilation conditionnelle.
- **Syntaxe :** `@IF <condition>; ... @ENDIF;`

### @FOR / @WHILE
Génération dynamique de code source.
- **Exemple :**
```viva
@FOR I = 1 TO 16;
  DECLARE CHANNEL DATA@I = @I;
@ENDFOR;
```

---

## 2. DÉCLARATIONS & STRUCTURES DE DONNÉES

### DECLARE
Définit des objets (variables, canaux, signaux).
- **Syntaxe :** `DECLARE <type> <nom> [= <valeur>];`
- **Types :** `VARIABLE INTEGER`, `VARIABLE FLOAT`, `VARIABLE STRING`, `CHANNEL`, `SIGNAL`.

### DECLARE CHANNEL / GROUP
Mappage matériel.
- **Syntaxe :** `DECLARE CHANNEL <nom> = <numéro>;`
- **Syntaxe :** `DECLARE GROUP <nom> = <liste_canaux>;`

### DECLARE RUNTIME ARRAY / INDEX
Structures de données pour l'exécution.
- **Syntaxe :** `DECLARE RUNTIME <type> ARRAY <nom>[<dim>];`
- **Syntaxe :** `DECLARE RUNTIME INTEGER INDEX <nom>;`

---

## 3. CONTRÔLE DE FLUX & LOGIQUE

### START / ENDTEST
Délimite le bloc principal.
- **Syntaxe :** `START <nom> [STATIC|DYNAMIC]; ... ENDTEST;`

### ~IF / ~ELSE / ~ENDIF
Conditionnelle Runtime (jusqu'à 10 niveaux d'imbrication).
- **Opérateurs :** `<`, `>`, `=`, `<=`, `>=`, `<>`, `&&`, `||`, `!`.

### ~FOR / ~ENDFOR
Boucle Runtime avec compteur.
- **Syntaxe :** `~FOR <var> = <deb> TO <fin> [STEP <pas>];`

### ~WHILE / WEND
Boucle tant que.
- **Syntaxe :** `WHILE <condition> ... WEND`

### ~REPEAT / ~UNTIL
Boucle avec test à la fin.
- **Syntaxe :** `~REPEAT; ... ~UNTIL ( <condition> );`

### ~DO / ~DONE
Répétition fixe rapide.
- **Syntaxe :** `~DO <n>; ... ~DONE;`

### ~SUBR / ~RETURN / ~ENDSUBR
Sous-routines avec passage d'arguments (jusqu'à 20).

### ~BRANCH (GOTO)
Sauts vers des labels.
- **Syntaxe :** `~BRANCH <label> [ONERROR | ONPASS];`

### ~SWITCH / ~CASE / ~ENDCASE
Branchements multiples.
- **Options :** `CONTINUE`, `DEFAULT`, `from <min> to <max>`.

---

## 5. OUTILS VNL (VIVA NATIVE LANGUAGE)

### [Outils et Méthodes VNL](./docs/software/logic/VNL_TOOLS.md)
Le VNL est une approche orientée objet pour le pilotage des ressources.
- **TEST :** Gestion de l'affichage analogique-numérique et des paramètres de macro.
- **EXPRESSION :** Évaluation d'expressions arithmétiques et logiques complexes.
- **VBS :** Exécution de code Visual Basic Script pour des fonctions avancées.
- **SYSTEM :** Fonctions globales, gestion des clusters et portage S20Win.
- **Instruments OO :** `Resistor`, `Capacitor`, `Inductor`, `Diode`, `Transistor`, `Fnode`.

![Hiérarchie VIVA](./docs/images/software/viva_programming_hierarchy.svg)

---

## 6. INSTRUMENTS & MATÉRIEL (ANALOGIQUE & NUMÉRIQUE)

### ~MEASURE
Instruction de haut niveau pour les mesures.
- **Types :** `Voltage`, `Current`, `Frequency`, `Time`.
- **Exemple :** `~MEASURE Voltage TYPE=rms RANGE=10V ON=ch1;`

### ~ATEST
Comparaison avec limites et gestion d'erreurs.
- **Syntaxe :** `~ATEST <var> [LO=<val>] [HI=<val>] [VALUE=<v> TOL=<t>] [NAME=<str>];`

### ~SET PW ALL
Contrôle global des alimentations.
- **Syntaxe :** `~SET PW ALL [ON|OFF];`

### ~CHLEV / ~CHMODE
Configuration électrique des canaux numériques.
- **Modes :** `PUSH_PULL`, `OPEN_DRAIN`, `PULL_UP`, `PULL_DOWN`.

### ~WG / ~RG
Écriture et lecture sur des bus (Groupes).
- **Syntaxe :** `~WG <groupe> = <val>;` / `~RG <groupe> INTO=<var>;`

### ~SET DIGIPLEX
Utilisation des ressources ACL sur n'importe quel point via scanner.

### PATTERN / BURST
Séquences numériques haute vitesse.
- **Instructions Burst :** `JUMP`, `REPEAT`, `ASSERT`, `/LABEL`.

### PERIOD / PHASE / STROBE
Définition des timings numériques (jusqu'à 9 phases/strobes).

---

## 5. GESTION DE L'ALIMENTATION (POWERON / POWEROFF)

### SECTIONS POWERON / POWEROFF
Ces sections délimitent les tests nécessitant que la carte (UUT) soit sous tension.
- **POWERON :** Contient généralement le composant `POWERON_COMP`. Exécute la macro POWER pour activer les alimentations.
- **POWEROFF :** Contient généralement le composant `POWEROFF_COMP`. Exécute la macro POWER pour désactiver les alimentations en fin de test.
- **Note :** Entre ces deux sections, tous les composants et tests sont exécutés avec la carte alimentée.

### MACRO POWER
Macro système gérant les paramètres des alimentations (PW1 à PW8).
- **PowerMode :** ON (active) ou OFF (désactive).
- **Paramètres par PWn :** VOLT, CURRENT, DELAY, SENSE, EXTINT, SET.
- **Note Matérielle :** Sur les systèmes récents, ces fonctions sont gérées par la [Carte SE5](./docs/hardware/modules/SE5_Board.md) qui permet également l'alimentation via sondes (Power Matrix).

---

## 6. COMMANDES NUMÉRIQUES DÉTAILLÉES (MODES & FORMATS)

### STRUCTURE DES COMMANDES
Chaque commande numérique est définie par plusieurs attributs matériels :
- **D/S (Driver/Sensor) :** Définit si le canal est en sortie (D) ou en entrée (S).
- **L/H (Low/High) :** État logique bas ou haut.
- **M/S (Masked/Sensed) :** Définit si l'erreur est ignorée (M) ou surveillée (S).
- **FORMAT :** Comportement temporel (Nret, Rzero, Rone, Rzeta).

![Tableau des Commandes Numériques](./docs/images/hardware/digital_command_table.png)
*Figure 2 : Tableau récapitulatif des modes et formats de commande numérique.*

### COMMANDES D'ASSERTION & TIMING
- **ALn / AHn :** Force l'état Bas (L) ou Haut (H) à la phase `n`.
- **AGn :** Applique une valeur de groupe à la phase `n`.
- **ASn :** Bascule (Toggle) l'état du canal à la phase `n`.
- **OLn / OHn :** Mesure l'état Bas ou Haut à la fenêtre `n`.

### MODES DE RETOUR (FORMATS)
- **R0 (Return Zero) :** Le canal retourne à l'état '0' après l'impulsion.
- **R1 (Return One) :** Le canal retourne à l'état '1' après l'impulsion.
- **RZ (Return Zeta) :** Le canal retourne à l'état haute impédance (Tristate).
- **NR (No Return) :** Mode standard "1 pulse" sans retour automatique.
- **CR (Continuous) :** Mode horloge répétitive à l'intérieur du pattern.

### MANIPULATION DE BITS SPÉCIFIQUES
- **HI / LO / GR :** Change uniquement l'état logique (H/L) sans modifier la direction ou le masque.
- **IN / OU :** Change uniquement la direction (Entrée/Sortie).
- **ZL / ZZ / ZH / ZG :** Change uniquement l'état du masque (Sensed/Masked).

### MODES DE COMPILATION SPÉCIAUX
- **Mode L200 :** Format compatible avec les anciens systèmes, utilisant la dernière phase définie.
- **Mode S700 :** Sépare le timing/format de la commande logique. Les commandes héritent de la configuration précédente.

---

## 7. MODULE HAUTE TENSION (HV - HIGH VOLTAGE)

### ~PCT
Contrôle les contacts PCT du module Haute Tension.
- **Syntaxe :** `~PCT = [*,][*]contact;`
- **Options :** `*` pour incrémental, `*` devant le numéro pour ouvrir.

### ~PLn
Contrôle la connexion des canaux HV sur les lignes internes (PL1 à PL4).
- **Syntaxe :** `~PLn = [*,][*]canal;`

### ~SET ISOLEV
Programme une référence de tension DC flottante.
- **Syntaxe :** `~SET ISOLEV N=<ref> mV=<val> ON|OFF;`

### ~SET ISORES
Programme les charges résistives du module HV.
- **Syntaxe :** `~SET ISORES N=<charge> OHM=<val> ON|OFF;`

### ~SET PMM
Configure le multimètre HV pour des mesures de tension ou courant.
- **Syntaxe :** `~SET PMM PP=<pos> PN=<neg> MODE=<rms|dir> <ac|dc>;`

### ~PROTECTION
Lit l'état de la protection générale du module HV.
- **Résultat :** `AR=1` si active, `0` sinon.

### ~PCT (Module HV)
Contrôle les contacts PCT du module Haute Tension.
- **Syntaxe :** `~PCT = [*,][*]contact;`
- **Exemple :** `~PCT=*15; ! Ferme le contact 15 incrémentalement`

### ~PLn (Module HV)
Connecte ou déconnecte un canal HV sur une ligne interne (PL1-PL4).
- **Syntaxe :** `~PLn = [*,][*]canal;`
- **Exemple :** `~PL2=29; ! Connecte ch 29 à PL2`

### ~SET ISOLEV (Module HV)
Programme une référence de tension DC flottante.
- **Syntaxe :** `~SET ISOLEV N=<ref> mV=<val> ON|OFF;`
- **Exemple :** `~SET ISOLEV N=3 mV=5000 ON; ! 5V sur ref 3`

### ~SET ISORES (Module HV)
Programme les charges résistives du module HV.
- **Syntaxe :** `~SET ISORES N=<charge> OHM=<val> ON|OFF;`
- **Exemple :** `~SET ISORES N=1 OHM=10500 ON;`

### ~SET PMM (Module HV)
Configure le multimètre HV pour des mesures de tension ou courant.
- **Syntaxe :** `~SET PMM PP=<pos> PN=<neg> MODE=<rms|dir> <ac|dc>;`
- **Exemple :** `~SET PMM PP=PL1N PN=PL1P MODE=DIR DC;`

### ~READ_OPTO (Module USB)
Lit l'état des entrées opto-couplées du module USB.
- **Syntaxe :** `~READ_OPTO<n> <variable>;`
- **Exemple :** `~READ_OPTO1 VAR1;`

### ~SET USER_BUSW (Module USB)
Écrit des données sur le bus numérique utilisateur.
- **Syntaxe :** `~SET USER_BUSW<n> A=<addr> D=<data>;`
- **Exemple :** `~SET USER_BUSW1 A=0X55 D=0X3A;`

### ~SET USER_DAC (Module USB)
Programme les DAC du module USB (0V à 2.56V).
- **Syntaxe :** `~SET USER_DAC<n> V=<0-255>;`
- **Exemple :** `~SET USER_DAC1 V=100; ! ~1V`

### ~SET USER_LINE (Module USB)
Ferme les relais USB connectés aux lignes système.
- **Syntaxe :** `~SET USER_LINE<n>;`
- **Exemple :** `~USER_LINE1; ! Ferme relais 1 sur LI1`

### ~SET USER_LOAD (Module USB)
Programme les charges résistives utilisateur.
- **Syntaxe :** `~SET USER_LOAD<n> OHM=<val> [ONLINE];`
- **Exemple :** `~SET USER_LOAD1 OHM=500 ONLINE;`

### ~SET USER_WORD (Module USB)
Écrit sur les lignes CUSTOM1-15 de la zone breadboard.
- **Syntaxe :** `~SET USER_WORD<n> V=<val>;`
- **Exemple :** `~SET USER_WORD1 V=0X5AF2;`

---

## 8. MODULE USB & ZONE UTILISATEUR

### ~SET USER_BUSWn
Écrit des données sur le bus numérique utilisateur (A0-A7, D0-D7).
- **Syntaxe :** `~SET USER_BUSW<n> A=<addr> D=<data>;`

### ~SET USER_DACn
Programme les convertisseurs numérique-analogique (0V à 2.56V).
- **Syntaxe :** `~SET USER_DAC<n> V=<0-255>;`

### ~SET USER_LINEn
Ferme les relais USB connectés aux lignes système.
- **Syntaxe :** `~SET USER_LINE<n>;`

### ~SET USER_LOADn
Programme les charges résistives utilisateur.
- **Syntaxe :** `~SET USER_LOAD<n> OHM=<val> [ONLINE];`

### ~SET USER_WORDn
Écrit sur les lignes CUSTOM1-15 de la zone breadboard.
- **Syntaxe :** `~SET USER_WORD<n> V=<val>;`

### ~READ_OPTOn
Lit l'état des entrées opto-couplées.
- **Syntaxe :** `~READ_OPTO<n> <variable>;`

---

## 9. MODULE GÉNÉRATEUR DE FONCTIONS (GEN)

### ~SET USER_GEN
Configure le générateur de fonctions (5Hz à 5MHz).
- **Syntaxe :** `~SET USER_GEN HZ=<val> VOUT=<val> [SIN|TRI|RECT] [VPP] [GUA];`

### ~MEAS USER_GEN
Mesure RMS vers DC via le module GEN.
- **Syntaxe :** `~MEAS USER_GEN HZ=<val> MAX=<val> [DIR|LI3|GAIN];`

---

## 10. COMMUNICATION IEEE / GPIB

### ~SET BUS
Envoie des commandes de contrôle sur le bus IEEE (DCL, LLO, MLA, MTA, etc.).
- **Syntaxe :** `~SET BUS <paramètres>;`

### ~SEND_IEEE
Envoie une chaîne de caractères ou une valeur à un instrument.
- **Syntaxe :** `~SEND_IEEE <valeur>;`

### ~READ_IEEE
Lit une valeur depuis un instrument IEEE.
- **Syntaxe :** `~READ_IEEE <variable>;`

---

## 11. VECTEURS ALGORITHMIQUES (MATH SUR CANAUX)

### MATH / MATL
Active/Désactive le mode accumulateur sur un canal numérique.
- **MATH :** Suit le registre accumulateur (ACC).
- **MATL :** Suit la mémoire dynamique (par défaut).

### ACCH / ACCL
Charge '1' ou '0' dans l'accumulateur du groupe de canaux.

### ACCI / ACCD
Incrémente ou décrémente l'accumulateur de 1.

### ACSR / ACSL
Décalage circulaire (Shift) à droite ou à gauche.

### ACCX
Complément à 1 (Inversion) de l'accumulateur.

### ACRC
Calcule le CRC d'un groupe de 8 canaux en temps réel.

---

## 12. ENTRÉE / SORTIE & INTERFACE UTILISATEUR

### ~WRITE / ~WRITEL
Affichage terminal avec attributs (`\CR`, `\CS`, `\CU`, `\CO`).

### ~READ_SCR
Saisie utilisateur au clavier.

### ~MSG
Boîte de dialogue modale.

### ~CURSOR
Positionnement précis du curseur.

### ~WINDOW / ~FONT
Gestion multi-fenêtres et polices.

### ~FILE
Manipulation de fichiers (jusqu'à 19 simultanés).
- **Modes :** `OPEN_READ`, `OPEN_WRITE`, `OPEN_APPEND`, `REMOVE`.

---

## 13. FONCTIONS MATHÉMATIQUES & VARIABLES SYSTÈME

### ~CALC
Opérations arithmétiques et logiques Runtime.
- **Opérateurs :** `+`, `-`, `*`, `/`, `^`, `&`, `|`, `<`, `>`.

### FONCTIONS INTÉGRÉES
`~ABS`, `~SQRT`, `~SIN`, `~COS`, `~TAN`, `~EXP`, `~LOG`, `~LOG10`.

### VARIABLES SYSTÈME
- `AR` : Registre analogique (FLOAT).
- `NC` : Compteur numérique (INTEGER).
- `ERR` : Flag d'erreur global (0=OK, 1=KO).
- `TIME`, `DATE` : Heure et date système.

---

## 14. COMMUNICATION & INTERFACES EXTERNES

### ~API
Appel de fonctions dans des DLL Windows.
- **Exemple :** `~API "user32.dll" "MessageBoxA" INTEGER 0, "Msg", "Title", 0;`

### ~VBS
Exécution de scripts VBScript avec échange de données.

### ~SET VBNPOD
Configuration du Boundary Scan (JTAG).

### ~CRC
Calcul de redondance cyclique sur bus.

### ~CONNECT / ~DISCONNECT
Contrôle manuel de la matrice de commutation.

---
*Fin du Dictionnaire Viva - Version Complète*

## EXEMPLES DE PROGRAMMES COMPLETS

### 1. Test de Tension avec Diagnostic
Ce programme configure une alimentation, mesure la tension et guide l'opérateur en cas d'erreur.

```viva
@COMPILER MAX_ERROR=10;
DECLARE CHANNEL VCC_PIN = 125;
DECLARE VARIABLE FLOAT V_READ;

START TEST_ALIM STATIC;
  ~WRITE "\CS", "Démarrage du test d'alimentation...";
  ~SET PW1 V=5.0 I=1.0 PREPARE ON;
  ~SET PW ALL ON;
  ~DELAY 500ms;
  
  ~MEASURE Voltage ON=VCC_PIN INTO=V_READ;
  ~ATEST V_READ NAME="VCC_5V" LO=4.75 HI=5.25;
  
  ~IF (ERR == 1);
    ~WRITE "\CR", "ERREUR : Tension incorrecte (", V_READ, "V)";
    ~ONBREAK CALL GESTION_ERREUR;
  ~ELSE;
    ~WRITE "\CR", "Tension OK : ", V_READ, "V";
  ~ENDIF;
  
  ~SET PW ALL OFF;
ENDTEST;

~SUBR GESTION_ERREUR;
  ~WRITE "\CR", "Vérifiez le court-circuit sur C12.";
  ~PAUSE "Appuyez sur OK pour continuer";
  ~RETURN;
~ENDSUBR;
```

### 2. Test Numérique (Bus de Données)
Utilisation des groupes et des niveaux logiques pour tester une mémoire.

```viva
DECLARE GROUP DATA = 1, 2, 3, 4, 5, 6, 7, 8;
DECLARE CHANNEL CS = 10, WE = 11;
DECLARE RUNTIME INTEGER I, VAL_LU;

START TEST_MEMOIRE STATIC;
  ~CHLEV DATA VIL=0.8 VIH=2.4;
  ~CHMODE DATA PUSH_PULL;
  
  ~IH CS; ~IH WE; ! Désactive la mémoire
  
  ~FOR I = 0 TO 255;
    ~IL CS; ~IL WE;
    ~WG DATA = I; ! Écrit la valeur I sur le bus
    ~IH WE; ~IH CS;
    
    ~IL CS;
    ~RG DATA INTO=VAL_LU; ! Lit la valeur
    ~COMP VAL_LU I;
    ~IF (ERR == 1);
      ~WRITE "Erreur à la valeur ", I, " (Lu: ", VAL_LU, ")";
    ~ENDIF;
    ~IH CS;
  ~ENDFOR;
ENDTEST;
```

## EXEMPLES PAR MODULE MATÉRIEL

### 1. Module Haute Tension (HV)
Test de rigidité diélectrique et mesure de courant de fuite.

```viva
START TEST_HV STATIC;
  ~SET ES1 PL1 IP=5000; ! Connecte ressource 1 à ligne PL1, protection 5A
  ~SET ISOLEV N=1 mV=2500 ON; ! Applique 2.5V DC flottant
  ~SET PMM PP=PL1P PN=GND MODE=DIR DC; ! Configure multimètre HV
  ~MEAS PMM MAX=1000 TIM=100; ! Mesure tension
  ~ATEST AR LO=2400 HI=2600 NAME="HV_REF_2V5";
  ~SET ISOLEV N=1 OFF;
ENDTEST;
```

### 2. Module USB (Zone Utilisateur)
Interaction avec des composants sur la breadboard utilisateur.

```viva
DECLARE RUNTIME INTEGER DATA_READ;

START TEST_USB STATIC;
  ~SET USER_DAC1 V=0X64; ! Génère ~1V sur DAC1
  ~SET USER_BUSW1 A=0X55 D=0XAA; ! Écrit AA à l'adresse 55
  ~DELAY 10M;
  ~READ BUS1 DATA_READ; ! Lit le bus
  ~COMP DATA_READ 0XAA;
  ~READ_OPTO1 DATA_READ; ! Lit les entrées opto
  ~SET USER_LOAD1 OHM=1000 ONLINE; ! Connecte charge 1K entre LI1/LI2
ENDTEST;
```

### 3. Module Générateur (GEN)
Génération et mesure de signaux complexes.

```viva
START TEST_GEN STATIC;
  ~SET USER_GEN HZ=1000 VOUT=3 SIN VPP; ! Sine 1kHz, 3Vpp
  ~CONNECT TP1 TO LI3;
  ~MEAS USER_GEN HZ=1000 MAX=10 DIR; ! Mesure RMS sur sortie directe
  ~ATEST AR LO=0.9 HI=1.1 NAME="GEN_RMS_1V";
ENDTEST;
```

### 4. Communication IEEE / GPIB
Pilotage d'un multimètre externe (ex: HP34401A).

```viva
DECLARE RUNTIME FLOAT DMM_VAL;

START TEST_IEEE STATIC;
  ~SET BUS UNT, UNL, MLA, 3, MTA, 0; ! Configure adresses
  ~SEND_IEEE ":MEAS:VOLT:DC? 10,0.001"; ! Requête de mesure
  ~SET BUS UNT, UNL, MLA, 0, MTA, 3; ! Passe en lecture
  ~READ_IEEE DMM_VAL; ! Récupère le résultat
  ~WRITE "Valeur DMM : ", DMM_VAL;
ENDTEST;
```

### 5. Boundary Scan (JTAG)
Test d'infrastructure sur une chaîne de composants.

```viva
DECLARE BSCAN NETLIST=board_jtag U1, U2, U3;

START TEST_JTAG STATIC;
  ~SET VBNPOD 1 FR=1000000 TDI=10 TMS=11 CLK=12 TDO=13;
  ~TEST_VBN IDCODE; ! Lit les IDCODE de la chaîne
  ~READ_VBN ID_STR IDCODE;
  ~WRITE "IDCODE Chaîne : ", ID_STR;
ENDTEST;
```

### 6. Séquence d'Alimentation (POWERON/OFF)
Exemple de configuration sécurisée d'une alimentation 5V avec Sense.

```viva
! Dans la section POWERON
! La macro POWER est configurée via l'interface VIVA :
! PW1: SET=ON, VOLT=5.0, CURRENT=2.0, DELAY=0.5, SENSE=ON, EXTINT=INT
! PowerMode=ON

! Dans la section POWEROFF
! PW1: SET=ON, VOLT=0, CURRENT=0, DELAY=0.2, SENSE=OFF, EXTINT=INT
! PowerMode=OFF
```

## ANNEXE : DÉTAILS PAR MOT-CLEF

### ~API (Interface Windows)
Le mot-clef `~API` permet au langage Viva d'interagir directement avec le système d'exploitation Windows en appelant des fonctions situées dans des bibliothèques dynamiques (DLL).
- **Syntaxe :** `~API "<nom_dll>" "<nom_fonction>" [<type_retour>] [<arguments...>];`
- **Exemple :** `~API "user32.dll" "MessageBoxA" INTEGER 0, "Test Terminé", "Viva System", 0;`

### ALn / AHn / AGn / ASn (Assertion)
Commandes de forçage numérique à une phase `n` spécifique.
- **ALn :** Force l'état Bas (Low) à la phase `n`.
- **AHn :** Force l'état Haut (High) à la phase `n`.
- **AGn :** Applique une valeur de groupe à la phase `n`.
- **ASn :** Bascule (Toggle) l'état du canal à la phase `n`.

### ~APPLY (Instructions NVL)
Instructions de haut niveau pour appliquer des signaux.
- **~APPLY VDC :** Applique une tension DC. `~APPLY VDC V=5 I=0.5 TO=ch1;`
- **~APPLY VAC :** Applique une tension AC. `~APPLY VAC V=5 WAVE=sine FREQ=1kHz TO=ch1;`
- **~APPLY IDC / IAC :** Applique un courant DC ou AC.
- **~APPLY CLOCK :** Applique un signal d'horloge. `~APPLY CLOCK FREQ=100kHz TO=ch1;`

### ASSERT
Le mot-clef `ASSERT` est utilisé exclusivement à l'intérieur d'un bloc `PATTERN` pour forcer une valeur sur un canal ou un groupe de canaux pendant un cycle spécifique.
- **Syntaxe :** `ASSERT<n> <valeur>;`
- **Exemple :** `ASSERT1 0XAA; ! Envoie 10101010 sur le bus à la phase 1`

### ~ATEST (TEST_ANALOGIQUE)
Le mot-clef `~ATEST` est utilisé pour comparer une valeur mesurée ou une variable avec des limites spécifiées.
- **Syntaxe :** `~ATEST <variable> [NAME="nom_test"] [LO=<limite_basse>] [HI=<limite_haute>] [ONERROR <label>] [ONPASS <label>] ;`
- **Exemple :** `~ATEST testValue NAME="TEST1" LO=4.5 HI=5.5 ;`

### BEGINLOOP / ENDLOOP
Le bloc `BEGINLOOP / ENDLOOP` permet de répéter une séquence d'instructions un nombre précis de fois, avec des options de sortie conditionnelle.
- **Syntaxe :** `BEGINLOOP <nombre>; <instructions> ENDLOOP [ONERROR | ONPASS];`
- **Exemple :** `BEGINLOOP 10; COPY; OM 1 2 3 4; /; ENDLOOP;`

### ~CALC (CALCUL)
Le mot-clef `~CALC` est utilisé pour effectuer des opérations arithmétiques et logiques sur des variables pendant l'exécution.
- **Syntaxe :** `~CALC <variable> = <expression> ;`
- **Exemple :** `~CALC COMPTEUR = COMPTEUR + 1 ;`

### @CALCOLATE
La directive `@CALCOLATE` permet d'effectuer des calculs arithmétiques ou logiques pendant la phase de compilation du programme Viva.
- **Syntaxe :** `@CALCOLATE <variable> = <expression>;`
- **Exemple :** `@CALCOLATE MASQUE = (0XFF & 0XF0) | 0X05;`

### ~CHLEV / ~CHMODE
Ces commandes permettent de configurer précisément le comportement électrique des drivers numériques du système.
- **Syntaxe :** `~CHLEV <pinlist> VIL=<v> VIH=<v> VOL=<v> VOH=<v>;`
- **Syntaxe :** `~CHMODE <pinlist> <mode>;`
- **Exemple :** `~CHLEV BUS VIL=0.8 VIH=2.0 VOL=0.0 VOH=3.3;`

### ~PULL
Contrôle les résistances de tirage (Pull-up/Pull-down) sur les canaux.
- **Syntaxe :** `~PULL <pinlist> [UP | DOWN] <valeur>;`
- **Valeurs :** 100, 1K, 10K, 100K, 1M.

### ~SET FCLOCK
Définit la fréquence de l'horloge système pour les modules de capture.
- **Syntaxe :** `~SET FCLOCK <frequence>;`
- **Exemple :** `~SET FCLOCK 10MHz;`

### CLOCK / NCLOCK
Les instructions `CLOCK` et `NCLOCK` (Not Clock) définissent les signaux d'horloge utilisés lors des tests numériques haute vitesse.
- **Syntaxe :** `CLOCK <n> <phase>;`
- **Exemple :** `CLOCK 1 PH1; ! L'horloge 1 sera haute pendant la phase 1`

### @COMPILER
Le mot-clef `@COMPILER` est une directive de pré-processeur qui définit les paramètres globaux de compilation du fichier de test.
- **Syntaxe :** `@COMPILER <option> = <valeur>;`
- **Exemple :** `@COMPILER MAX_ERROR=100;`

### ~CONNECT (Matrice de commutation)
Le mot-clef `~CONNECT` gère la matrice de commutation (scanner) du système pour relier les points de test aux instruments.
- **Syntaxe :** `~CONNECT <point_test> TO <ressource> ;`
- **Exemple :** `~CONNECT TP_SIGNAL TO BUS_A;`

### ~CRC (Contrôle d'intégrité)
Le mot-clef `~CRC` permet de calculer ou de vérifier la validité d'un flux de données numériques.
- **Syntaxe :** `~CRC <groupe> [POLY=<valeur>] [INIT=<valeur>] [INTO=<variable>];`
- **Exemple :** `~CRC DATA_BUS POLY=0X8005 INIT=0 INTO=RESULT_CRC;`

### DECLARE (SOIT)
Le mot-clef `DECLARE` est utilisé pour définir des objets (variables, canaux, signaux, etc.) avant leur utilisation.
- **Syntaxe :** `DECLARE <objet> <nom> [= <valeur_initiale>];`
- **Exemple :** `DECLARE VARIABLE INTEGER COMPTEUR;`

### DECLARE ARGUMENT
La commande `DECLARE ARGUMENT` permet de définir des paramètres globaux qui seront passés aux macros.
- **Syntaxe :** `DECLARE ARGUMENT = <nom1>, <nom2>...;`
- **Exemple :** `DECLARE ARGUMENT = VAHH, VAHL;`

### DECLARE CHANNEL
Le mot-clef `DECLARE CHANNEL` permet d'associer un nom symbolique à un canal physique du système de test.
- **Syntaxe :** `DECLARE CHANNEL <nom_du_canal> = <numero_physique>;`
- **Exemple :** `DECLARE CHANNEL RESETN = 2;`

### DECLARE GROUP
Le mot-clef `DECLARE_GROUP` permet de regrouper plusieurs canaux ou signaux sous un identifiant unique.
- **Syntaxe :** `DECLARE GROUP <nom_du_groupe> = <liste_de_canaux>;`
- **Exemple :** `DECLARE GROUP DATA_BUS = D0, D1, D2, D3;`

### DECLARE BSCAN
Déclare une chaîne Boundary Scan (JTAG) à utiliser comme canaux virtuels.
- **Syntaxe :** `DECLARE BSCAN NETLIST=<file.bss> <components>;`
- **Exemple :** `DECLARE BSCAN NETLIST=chain1 U1, U2;`

### DECLARE RUNTIME INDEX
La commande `DECLARE RUNTIME INDEX` définit une variable spéciale optimisée pour servir d'index aux tableaux dans les boucles.
- **Syntaxe :** `DECLARE RUNTIME INTEGER INDEX <nom>;`
- **Exemple :** `DECLARE RUNTIME INTEGER INDEX J;`

### DECLARE RUNTIME ARRAY
La commande `DECLARE RUNTIME ARRAY` permet de créer des structures de données indexées (tableaux) accessibles pendant l'exécution.
- **Syntaxe :** `DECLARE RUNTIME <type> ARRAY <nom>[<dimension>];`
- **Exemple :** `DECLARE RUNTIME FLOAT ARRAY MESURES[10];`

### ~DO / ~DONE
Exécute un bloc d'instructions un nombre fixe de fois. Très rapide car géré par le contrôleur.
- **Syntaxe :** `~DO <n>; ... ~DONE;`
- **Exemple :** `~DO 80; ~WRITE "-"; ~DONE;`

### ~DELAY / ~PAUSE
Instructions de temporisation et d'arrêt.
- **Syntaxe :** `~DELAY <temps>; ~PAUSE ["<message>"];`
- **Exemple :** `~DELAY 100ms; ~PAUSE "Vérifiez le cavalier J1";`

### #INCLUDE
Inclut un fichier bibliothèque (.LIB) dans le programme actuel.
- **Syntaxe :** `#INCLUDE <nom_fichier>;`
- **Exemple :** `#INCLUDE FUNZMAC;`

### ~SET DIGIPLEX
Le mot-clef `~SET DIGIPLEX` configure le multiplexeur numérique du système pour utiliser les ressources ACL sur n'importe quel point.
- **Syntaxe :** `~SET DIGIPLEX; ~SET DIGIPLEX PULL UP|DOWN <valeur>;`
- **Exemple :** `~SET DIGIPLEX PULL UP 10K;`

### ~IH / ~IL / ~OH / ~OL (Niveaux logiques)
Ces commandes permettent de forcer ou de vérifier l'état logique des broches.
- **Syntaxe :** `~IH <pinlist>; ~IL <pinlist>; ~OH <pinlist>; ~OL <pinlist>;`
- **Exemple :** `~IL ENTREE; ~OH SORTIE;`

### ~FILE (Gestion de fichiers)
Le mot-clef `~FILE` permet de manipuler des fichiers sur le disque.
- **Syntaxe :** `~FILE N=<exp> <mode> "<nom_fichier>";`
- **Modes :** `OPEN_READ`, `OPEN_WRITE`, `OPEN_APPEND`, `REMOVE`.
- **Exemple :** `~FILE1 OPEN_WRITE "LOG.TXT"; ~FILE1 WRITE "Resultat"; ~FILE1 CLOSE;`

### ~FOR (BOUCLE)
Le mot-clef `~FOR` permet de créer des boucles de répétition basées sur une condition ou un compteur.
- **Syntaxe :** `~FOR <var> = <deb> TO <fin> [STEP <pas>];`
- **Exemple :** `~FOR A = 1 TO 10; ~WRITE A; ~ENDFOR;`

### ~FORMAT / ~AFORMAT
Ces commandes permettent de contrôler la conversion des valeurs en texte.
- **Syntaxe :** `~FORMAT <var> "<format>"; ~AFORMAT <var> <type>;`
- **Exemple :** `~FORMAT V "%.2f V"; ~AFORMAT DATA HEX;`

### ~SUBR (SOUS_PROG)
Le mot-clef `~SUBR` définit le début d'une sous-routine réutilisable.
- **Syntaxe :** `~SUBR <nom> [ ( <args> ) ] ; ... ~RETURN; ~ENDSUBR;`
- **Exemple :** `~SUBR TEST_CANAL; ~WRITE "TEST..."; ~RETURN; ~ENDSUBR;`

### ~BRANCH (VA_VERS)
Le mot-clef `~BRANCH` est utilisé pour effectuer des sauts vers des étiquettes (labels).
- **Syntaxe :** `~BRANCH <label> [ONERROR | ONPASS];`
- **Exemple :** `~BRANCH ONERROR GESTION_ERREUR;`

### @GRAY
La directive `@GRAY` convertit automatiquement le résultat d'un calcul en code Gray.
- **Syntaxe :** `@GRAY <variable> = <expression>;`
- **Exemple :** `@GRAY VAL_GRAY = 10;`

### ~IF (SI)
Le mot-clef `~IF` permet l'exécution conditionnelle d'instructions pendant l'exécution.
- **Syntaxe :** `~IF ( <condition> ) ; ... [~ELSE;] ... ~ENDIF ;`
- **Exemple :** `~IF (A > 10) ; ~WRITE "OK"; ~ENDIF;`

### ~READ_SCR (ENTREE)
Le mot-clef `~READ_SCR` permet de lire une saisie utilisateur depuis le clavier.
- **Syntaxe :** `~READ_SCR <variable>;`
- **Exemple :** `~READ_SCR TENSION_VAR;`

### JUMP / REPEAT (Contrôle de Burst)
Instructions de branchement à l'intérieur d'un `PATTERN`.
- **Syntaxe :** `JUMP <label>; REPEAT <n>;`
- **Exemple :** `JUMP DEBUT; REPEAT 1000;`

### LET
Le mot-clef `LET` est utilisé pour déclarer ou assigner une valeur à une variable (typage dynamique).
- **Syntaxe :** `LET <nom> = <valeur>`
- **Exemple :** `LET age = 25`

### @L (Logic states)
La directive `@L` assigne des états logiques à une liste de canaux.
- **Syntaxe :** `@L(<états>);`
- **Exemple :** `@L(HHL01);`

### FONCTIONS MATHÉMATIQUES
Viva propose : `~ABS`, `~SQRT`, `~SIN`, `~COS`, `~TAN`, `~EXP`, `~LOG`, `~LOG10`.
- **Exemple :** `~CALC C = ~SQRT(A^2 + B^2);`

### ~MEASURE (MESURE)
Instruction de haut niveau pour effectuer des mesures analogiques.
- **Types :** `Voltage`, `Current`, `Frequency`, `Time`.
- **Exemple :** `~MEASURE Voltage TYPE=rms RANGE=10V ON=ch1;`

### ~MSG / ~COMP
Interaction utilisateur et comparaison rapide.
- **Syntaxe :** `~MSG "<message>"; ~COMP <v1> <v2>;`
- **Exemple :** `~MSG "Connectez le câble"; ~COMP VAL1 VAL2;`

### ~ONBREAK
Définit le comportement lors d'une pause ou erreur.
- **Syntaxe :** `~ONBREAK [ABORT | CALL <subr> | CONTINUE];`
- **Exemple :** `~ONBREAK CALL GESTION_STOP;`

### ~ON (Gestion d'événements)
Définit des actions déclenchées par des événements système.
- **Syntaxe :** `~ON <evenement> <action> ;`
- **Exemple :** `~ON ERROR CALL GESTION_ERREUR;`

### Pn / Cn (Bascule / Toggle)
Commandes de bascule (Toggle) synchronisées sur les phases.
- **Pn :** Bascule à l'assertion et retour à la phase de repos (monitoré).
- **Cn :** Bascule à l'assertion et retour à la phase de repos (masqué).

### R1 / R0 / RZ (Modes de Retour)
Définit le format de retour pour les impulsions numériques.
- **R1 :** Retour à l'état Haut (1).
- **R0 :** Retour à l'état Bas (0).
- **RZ :** Retour à l'état haute impédance (Tristate).

### HI / LO / GR (Logique Seule)
Modifie uniquement la valeur logique du canal.
- **HI :** Passe à l'état Haut sans changer la direction.
- **LO :** Passe à l'état Bas sans changer la direction.
- **GR :** Applique une valeur de groupe (logique seule).

### IN / OU (Direction Seule)
Modifie uniquement la direction du canal.
- **IN :** Configure le canal en entrée (Sensor).
- **OU :** Configure le canal en sortie (Driver).

### ZL / ZZ / ZH / ZG (Masquage Seul)
Modifie uniquement l'état du masque de mesure.
- **ZL :** Mesure active (Sensed) - niveau Bas.
- **ZH :** Mesure active (Sensed) - niveau Haut.
- **ZZ :** Masqué (Masked).
- **ZG :** Applique un masque de groupe.

### OB / OV / OC (Spécificités T964)
Commandes avancées pour le module T964.
- **OB :** Output Between (test de l'état haute impédance).
- **OV :** Output Valid (test de l'état non-tristate).
- **OC :** Output CRC (calcul de signature matérielle).

### MODES S700 / L200
Modes de fonctionnement du compilateur numérique.
- **L200 :** Mode de compatibilité utilisant la dernière phase globale.
- **S700 :** Mode moderne séparant la logique du timing. Permet l'héritage des formats.
- **PU / PUn (S700) :** Impulsion (Pulse) avec le dernier format et la phase `n`.
- **NP / NPn (S700) :** Pas d'impulsion (No Pulse) avec la phase `n`.
- **PP (S700) :** Impulsion positive (Positive Pulse) avec la dernière phase.
- **PN (S700) :** Impulsion négative (Negative Pulse) avec la dernière phase.

### OM / OM0 / OMn (Modes de Masquage)
Définit quand le canal sensor est mesuré.
- **OM :** Masqué par défaut (Masked).
- **OM0 :** Mesuré à la fin du pattern (End of pattern).
- **OMn :** Mesuré au strobe ou à la fenêtre `n`.

### @FOR / @WHILE (Pré-processeur)
Boucles pour générer dynamiquement du code source.
- **Exemple :** `@FOR I = 1 TO 16; DECLARE CHANNEL DATA@I = @I; @ENDFOR;`

### @MACRO / @ENDMACRO
Blocs de code réutilisables expansés avant la compilation.
- **Exemple :** `@MACRO TEST_ALIM N, C, V; ~MEASURE Voltage ON=C; @ENDMACRO;`

### ~PRINT (IMPRIME)
Envoie des données vers une imprimante ou la console de sortie.
- **Syntaxe :** `~PRINT <valeur1>, <valeur2>...;`
- **Exemple :** `~PRINT "RAPPORT DE TEST", TENSION;`

### ~READ_VBN / ~TEST_VBN (JTAG)
Exécute des tests Boundary Scan et récupère les résultats.
- **~TEST_VBN :** BYPASS, IDCODE, USERCODE.
- **~READ_VBN :** Récupère la chaîne de résultat dans une variable.

### ~SET BUS / ~SEND_IEEE / ~READ_IEEE
Communication avec des instruments externes via GPIB.
- **~SET BUS :** Commandes de gestion (MLA, MTA, UNL, UNT).
- **~SEND_IEEE :** Envoie des commandes SCPI ou données.
- **~READ_IEEE :** Lit la réponse de l'instrument.

### ~SET USER_GEN / ~MEAS USER_GEN
Pilotage du module générateur de fonctions.
- **~SET USER_GEN :** HZ=fréq, VOUT=tension, WAVE=forme.
- **~MEAS USER_GEN :** Mesure RMS, GAIN ou DIR.

### ~SYS (Appel Système)
Exécute une application externe Windows.
- **Syntaxe :** `~SYS [display], [mode], "app", "params";`
- **Exemple :** `~SYS MAXIMIZED, SYNCHRON, "NOTEPAD.EXE", "LOG.TXT";`

### ~TEST (Instructions de Test Spécifiques)
- **~TEST COUNTER :** Mesure de fréquence/comptage avec limites.
- **~TEST PWn :** Mesure de tension/courant sur alimentation avec limites.
- **~TEST PMM :** Mesure HV avec limites.
- **~TEST VOLT :** Mesure de tension LAM avec limites.

### ~URP / ~URS / ~UOP (Relais USB)
- **~URP :** Relais de puissance double contact.
- **~URS :** Relais Reed.
- **~UOP :** Transistors opto-couplés (Saturation/Blocage).

### ~SHL / ~SHR
Décalage de bits à gauche ou à droite sur le registre AR.
- **Syntaxe :** `~SHL <n>; ~SHR <n>;`

### ~SIN / ~COS / ~TAN / ~ATAN
Fonctions trigonométriques sur le registre AR (en radians).

### ~SQR / ~SQUARE / ~EXP / ~LOG
Opérations mathématiques avancées sur le registre AR.
- **~SQR :** Racine carrée.
- **~SQUARE :** Carré.
- **~EXP :** Exponentielle (e^x).
- **~LOG :** Logarithme népérien.

### ~STORE / ~LOAD
Transfert de données entre variables et le registre accumulateur AR.
- **~LOAD :** Charge une valeur dans AR.
- **~STORE :** Stocke le contenu de AR dans une variable FLOAT.

### ~SUB / ~MULT / ~DIV / ~ADD
Opérations arithmétiques sur le registre AR.
- **Syntaxe :** `~SUB <valeur>; ~MULT <valeur>; ~DIV <valeur>; ~ADD <valeur>;`

### ~REPEAT / ~UNTIL
Boucle s'exécutant au moins une fois avec test à la fin.
- **Syntaxe :** `~REPEAT; ... ~UNTIL ( <condition> );`
- **Exemple :** `~REPEAT; ~DELAY 100ms; ~UNTIL (V > 4.95);`

### ~REPORT / ~RFORMAT
Contrôle de la génération du rapport de test final.
- **Syntaxe :** `~REPORT [ON|OFF|FULL]; ~RFORMAT "<format>";`
- **Exemple :** `~RFORMAT "ID:%N | VAL:%V | RES:%R";`

### ~RETURN (RETOUR)
Termine l'exécution d'une sous-routine.
- **Syntaxe :** `~RETURN [ONERROR | ONPASS];`

### ~SET BUS_LINE SERV
Configure les connexions entre le module LAM et SE2 via le bus de service.
- **Syntaxe :** `~SET BUS_LINE SERV V=<valeur>;`

### ~SET PW ALL
Pilote globalement l'état de toutes les alimentations.
- **Syntaxe :** `~SET PW ALL [ON|OFF];`

### MACRO POWER (Gestion Alimentation)
Macro système pour configurer et piloter les alimentations PW1-PW8.
- **PowerMode :** `ON` (Mise sous tension) ou `OFF` (Coupure).
- **VOLT :** Tension de sortie en Volts.
- **CURRENT :** Limite de courant en Ampères (protection UUT).
- **DELAY :** Temps d'attente après activation (typiquement 0.2s à 1s).
- **EXTINT :** `INT` (connexion interne) ou `EXT` (alimentation externe).
- **SENSE :** `ON` (utilise les fils de feedback) ou `OFF`.
- **SET :** `ON` (géré par la macro), `OFF` (toujours coupé), `NO` (non géré).

### ~SET USER_BUSWn / ~SET USER_DACn
Contrôle des bus numériques et DAC utilisateur du module USB.
- **Syntaxe :** `~SET USER_BUSW<n> A=<a> D=<d>; ~SET USER_DAC<n> V=<v>;`

### ~SET VBNPOD (Boundary Scan)
Configure l'interface JTAG/Boundary Scan.
- **Syntaxe :** `~SET VBNPOD <n> FR=<f> TDI=<ch> TMS=<ch> CLK=<ch> TDO=<ch>;`

### ~SWITCH / ~CASE
Branchements multiples selon la valeur d'une variable.
- **Syntaxe :** `~SWITCH <var>; ~CASE <val>; ... ~ENDCASE;`

### VARIABLES SYSTÈME
- `AR` : Registre analogique.
- `NC` : Compteur numérique.
- `ERR` : Flag d'erreur global.
- `TIME`, `DATE` : Heure et date système.

### ~TIMER / ~READ_TIMER
Mesure de temps d'exécution ou d'intervalles (8 timers disponibles).
- **Syntaxe :** `~TIMER <n> START|STOP|RESET; ~READ_TIMER <n> INTO=<var>;`

### PERIOD / PHASE / STROBE (Timings)
Définition de la structure temporelle d'un cycle numérique.
- **Syntaxe :** `PERIOD <t>; PHASE <n> <t1> <t2>; STROBE <n> <t>;`

### ~VBS (Scripts VBScript)
Exécution de scripts VBScript externes avec échange de données.
- **Syntaxe :** `~VBS "<chemin>" "<procedure>" [args...];`

### ~WG / ~RG (Bus de données)
Écriture et lecture sur des groupes de canaux (Bus).
- **Syntaxe :** `~WG <groupe> = <val>; ~RG <groupe> INTO=<var>;`

### WHILE / WEND
Boucle tant que (test au début).
- **Syntaxe :** `WHILE <condition> ... WEND`

### ~WINDOW / ~FONT
Personnalisation de l'interface utilisateur (fenêtres et polices).
- **Syntaxe :** `~WINDOW <n> <x> <y> <w> <h>; ~FONT "<nom>" <taille>;`

### ~WRITE / ~WRITEL
Affichage de texte et valeurs avec attributs de formatage.
- **Syntaxe :** `~WRITE [attribut] <valeur1>...;`
- **Exemple :** `~WRITE "\CU\010\005", "Systeme Pret";`

### ~XOR / ~AND / ~OR
Opérations logiques bit à bit sur le registre accumulateur AR.
- **Syntaxe :** `~AND <valeur>; ~OR <valeur>; ~XOR <valeur>;`
- **Exemple :** `~LOAD 0X55; ~AND 0X0F; ~STORE RESULT; ! RESULT = 0X05`

### VECTEURS ALGORITHMIQUES (F50)
Instructions pour manipuler l'accumulateur matériel (ACC) de 8 bits par groupe de canaux.
- **ACCI / ACCD :** Incrémente ou décrémente la valeur de l'accumulateur de 1 à chaque cycle.
- **ACSL / ACSR :** Effectue un décalage circulaire des bits vers la gauche ou la droite.
- **ACCX :** Inverse tous les bits de l'accumulateur (complément à 1).
- **ACCH / ACCL :** Force un bit spécifique de l'accumulateur à '1' ou '0'.
- **ACRC :** Calcule un CRC matériel sur un flux de données de 8 bits.
- **MATH / MATL :** Définit si le canal doit sortir la valeur de l'accumulateur (MATH) ou celle de la mémoire de pattern standard (MATL).
