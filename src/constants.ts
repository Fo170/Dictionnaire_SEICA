import { Keyword } from './types';

export const VIVA_KEYWORDS: Keyword[] = [
  // --- PRÉ-PROCESSEUR & DIRECTIVES COMPILATEUR ---
  {
    id: 'COMPILER',
    name: '@COMPILER',
    frenchName: 'COMPILATEUR',
    category: 'Pré-processeur',
    syntax: '@COMPILER <option>;',
    semantics: 'Définit les options de compilation (complexité, limites d\'erreurs, expansion de macros).',
    example: '@COMPILER MAX_ERROR=400\n@COMPILER BACKUP MACRO_ON'
  },
  {
    id: 'INCLUDE',
    name: '#INCLUDE',
    frenchName: 'INCLURE',
    category: 'Pré-processeur',
    syntax: '#INCLUDE <file_name>;',
    semantics: 'Inclut un fichier bibliothèque (.LIB) dans le programme actuel.',
    example: '#INCLUDE FUNZMAC'
  },
  {
    id: 'PREPROC_CALC',
    name: '@CALCOLATE',
    frenchName: 'CALCUL_PRE',
    category: 'Pré-processeur',
    syntax: '@CALCOLATE <var> = <expression>;',
    semantics: 'Effectue des calculs arithmétiques ou logiques pendant la compilation.',
    example: '@CALCOLATE VAR = (56-5*(2/4)&0X0F|0X50);'
  },
  {
    id: 'PREPROC_GRAY',
    name: '@GRAY',
    frenchName: 'CODE_GRAY',
    category: 'Pré-processeur',
    syntax: '@GRAY <var> = <expression>;',
    semantics: 'Calcule une valeur et la convertit en code Gray.',
    example: '@GRAY VAR = 10;'
  },
  {
    id: 'PREPROC_LABEL',
    name: '@LABEL',
    frenchName: 'LABEL_PRE',
    category: 'Pré-processeur',
    syntax: '@LABEL = <prefix>;',
    semantics: 'Définit un préfixe de label pour les boucles de pré-processeur.',
    example: '@LABEL = I;'
  },
  {
    id: 'PREPROC_WHILE',
    name: '@WHILE / @ENDWHILE',
    frenchName: 'TANT_QUE_PRE',
    category: 'Pré-processeur',
    syntax: '@WHILE <condition>; ... @ENDWHILE;',
    semantics: 'Boucle de pré-processeur pour la génération dynamique de code.',
    example: '@WHILE I < 10;\n  IL I;\n  @CALCOLATE I = I + 1;\n@ENDWHILE;'
  },
  {
    id: 'L_LOGIC',
    name: '@L',
    frenchName: 'ETAT_LOGIQUE',
    category: 'Pré-processeur',
    syntax: '@L(S1, S2, ... Sn);',
    semantics: 'Assigne des états logiques (H, L, 1, 0, T, .) à une liste de canaux.',
    example: '@L(HHL01.........);'
  },
  {
    id: 'PREPROC_MACRO',
    name: '@MACRO / @ENDMACRO',
    frenchName: 'MACRO',
    category: 'Pré-processeur',
    syntax: '@MACRO <nom> [<args>]; ... @ENDMACRO;',
    semantics: 'Définit une macro-instruction expansée avant la compilation.',
    example: '@MACRO TEST_VCC V;\n  ~MEASURE Voltage ON=VCC;\n@ENDMACRO;'
  },
  {
    id: 'PREPROC_IF',
    name: '@IF / @ELSE / @ENDIF',
    frenchName: 'SI_COMPIL',
    category: 'Pré-processeur',
    syntax: '@IF <condition>; ... @ENDIF;',
    semantics: 'Compilation conditionnelle.',
    example: '@IF VERSION_PROD;\n  #INCLUDE PROD_LIB;\n@ENDIF;'
  },

  // --- DÉCLARATIONS ---
  {
    id: 'DECLARE',
    name: 'DECLARE',
    frenchName: 'DECLARER',
    category: 'Déclaration',
    syntax: 'DECLARE <object> <name> [= <initializer>];',
    semantics: 'Instruction fondamentale pour définir des variables, tableaux, canaux ou signaux.',
    example: 'DECLARE VARIABLE INTEGER COUNT = 0'
  },
  {
    id: 'DECLARE_CHANNEL',
    name: 'DECLARE CHANNEL',
    frenchName: 'CANAL',
    category: 'Déclaration',
    syntax: 'DECLARE CHANNEL <name> = <number>;',
    semantics: 'Assigne un nom symbolique à un canal physique.',
    example: 'DECLARE CHANNEL RESETN = 2'
  },
  {
    id: 'DECLARE_GROUP',
    name: 'DECLARE GROUP',
    frenchName: 'GROUPE',
    category: 'Déclaration',
    syntax: 'DECLARE GROUP <name> = <channel_list>;',
    semantics: 'Regroupe plusieurs canaux sous un seul nom.',
    example: 'DECLARE GROUP DATI = 1, 2, 3, 4'
  },
  {
    id: 'DECLARE_RUNTIME_ARRAY',
    name: 'DECLARE RUNTIME ARRAY',
    frenchName: 'TABLEAU_DYN',
    category: 'Déclaration',
    syntax: 'DECLARE RUNTIME <type> ARRAY <name>[<dim>];',
    semantics: 'Déclare un tableau de variables accessible pendant l\'exécution.',
    example: 'DECLARE RUNTIME FLOAT ARRAY VET[4];'
  },
  {
    id: 'DECLARE_SIGNAL',
    name: 'DECLARE SIGNAL',
    frenchName: 'SIGNAL',
    category: 'Déclaration',
    syntax: 'DECLARE SIGNAL <name>;',
    semantics: 'Définit un signal qui peut être manipulé comme un canal ou une variable.',
    example: 'DECLARE SIGNAL DATA_VALID'
  },
  {
    id: 'DECLARE_SUBROUTINE',
    name: 'DECLARE SUBROUTINE',
    frenchName: 'DECLARER_SOUS_PROG',
    category: 'Déclaration',
    syntax: 'DECLARE SUBROUTINE <name1>, <name2>...;',
    semantics: 'Déclare les sous-routines utilisées dans le programme.',
    example: 'DECLARE SUBROUTINE INIT_CHIP, READ_STATUS'
  },
  {
    id: 'DECLARE_FUNCTION',
    name: 'DECLARE FUNCTION',
    frenchName: 'DECLARER_FONCTION',
    category: 'Déclaration',
    syntax: 'DECLARE FUNCTION <name>;',
    semantics: 'Déclare une fonction utilisateur.',
    example: 'DECLARE FUNCTION CALCULATE_CRC'
  },
  {
    id: 'DECLARE_ARGUMENT',
    name: 'DECLARE RUNTIME ARGUMENT',
    frenchName: 'ARGUMENT_DYN',
    category: 'Déclaration',
    syntax: 'DECLARE RUNTIME ARGUMENT <type> <name>;',
    semantics: 'Déclare un argument global pour les sous-routines.',
    example: 'DECLARE RUNTIME ARGUMENT INTEGER ERR_CODE'
  },
  {
    id: 'DECLARE_BSCAN',
    name: 'DECLARE BSCAN',
    frenchName: 'JTAG_BSCAN',
    category: 'Déclaration',
    syntax: 'DECLARE BSCAN NETLIST=<file> <components>;',
    semantics: 'Déclare une chaîne Boundary Scan (JTAG) pour utiliser des canaux virtuels.',
    example: 'DECLARE BSCAN NETLIST=chain.bss U1, U2;'
  },
  {
    id: 'DECLARE_PIN',
    name: 'DECLARE PIN',
    frenchName: 'PIN_LIB',
    category: 'Déclaration',
    syntax: 'DECLARE PIN <lib_name> = <chan_name>;',
    semantics: 'Associe un nom de pin de bibliothèque à un canal déclaré.',
    example: 'DECLARE PIN P1 = CPU_CLK;'
  },
  {
    id: 'DECLARE_DIGIPLEX',
    name: 'DECLARE DIGIPLEX',
    frenchName: 'CANAL_DIGIPLEX',
    category: 'Déclaration',
    syntax: 'DECLARE DIGIPLEX <name> = <channel>;',
    semantics: 'Déclare un canal utilisant la technique de multiplexage numérique Digiplex.',
    example: 'DECLARE DIGIPLEX D0_DIG = 10;'
  },
  {
    id: 'DECLARE_INDEX',
    name: 'DECLARE RUNTIME INDEX',
    frenchName: 'INDEX',
    category: 'Déclaration',
    syntax: 'DECLARE RUNTIME INTEGER INDEX <name>;',
    semantics: 'Déclare une variable d\'index pour parcourir les tableaux.',
    example: 'DECLARE RUNTIME INTEGER INDEX A;'
  },

  // --- CONTRÔLE DE FLUX (RUN-TIME) ---
  {
    id: 'START_END',
    name: 'START / ENDTEST',
    frenchName: 'DEBUT / FIN',
    category: 'Contrôle',
    syntax: 'START <program_name> [STATIC|DYNAMIC];\n...\nENDTEST;',
    semantics: 'Délimite le bloc principal d\'exécution.',
    example: 'START MON_PROG STATIC\nENDTEST'
  },
  {
    id: 'IF_THEN_ELSE',
    name: '~IF / ~ELSE / ~ENDIF',
    frenchName: 'SI / SINON',
    category: 'Contrôle',
    syntax: '~IF ( [NOT] <var> <cond> <expr> ) ; ... [~ELSE;] ... ~ENDIF ;',
    semantics: 'Structure conditionnelle d\'exécution. Supporte jusqu\'à 10 niveaux d\'imbrication et des conditions complexes avec AND (&&) et OR (||).',
    example: '~IF ( (A > 10) && (B < 5) ) ;\n  ~WRITE "Condition OK";\n~ENDIF'
  },
  {
    id: 'FOR_ENDFOR',
    name: '~FOR / ~ENDFOR',
    frenchName: 'BOUCLE_POUR',
    category: 'Contrôle',
    syntax: '~FOR [NOT] <var> <cond> <expr> [TO <fin>] [STEP <pas>] [DO <action>];',
    semantics: 'Boucle de répétition Run-time. Par défaut (sans TO/STEP), décrémente jusqu\'à >0. L\'option DO exécute une action après chaque cycle.',
    example: '~FOR I = 1 TO 10 STEP 2;\n  ~WRITE I;\n~ENDFOR'
  },
  {
    id: 'DO_DONE',
    name: '~DO / ~DONE',
    frenchName: 'FAIRE / FAIT',
    category: 'Contrôle',
    syntax: '~DO <num>; ... ~DONE;',
    semantics: 'Exécute un bloc un nombre fixe de fois.',
    example: '~DO 80;\n  ~WRITE "--";\n~DONE;'
  },
  {
    id: 'ONBREAK',
    name: '~ONBREAK',
    frenchName: 'SUR_PAUSE',
    category: 'Contrôle',
    syntax: '~ONBREAK [ABORT | CALL <subr> | CONTINUE];',
    semantics: 'Définit l\'action lors d\'une pause ou erreur.',
    example: '~ONBREAK CALL GESTION_STOP;'
  },
  {
    id: 'ON_EVENT',
    name: '~ON <event>',
    frenchName: 'SUR_EVENEMENT',
    category: 'Contrôle',
    syntax: '~ON <event> [CALL <subr>] [ABORT|CONTINUE];',
    semantics: 'Définit l\'action à effectuer lors d\'un événement. Événements supportés : ABORT, BREAK, END, TIMEOUT, ENDBURST, DYNAMIC, ERROR, ANA_ERROR, DIG_ERROR, STATIC_ERROR, BUTTON, TIMER.',
    example: '~ON TIMEOUT CALL GESTION_DELAI;'
  },
  {
    id: 'TIMER_CTRL',
    name: '~TIMER',
    frenchName: 'CONTROLE_TIMER',
    category: 'Contrôle',
    syntax: '~TIMER <n> [CLEAR|ARM|STOP] [VAL=<s>];',
    semantics: 'Pilote les 32 timers système (0-31). CLEAR remet à zéro, ARM active l\'événement ONTIMER après VAL secondes, STOP désactive l\'événement.',
    example: '~TIMER 1 ARM VAL=5.0; ! Événement après 5s'
  },
  {
    id: 'READ_TIMER_VAL',
    name: '~READ_TIMERn',
    frenchName: 'LECTURE_TIMER',
    category: 'Entrée/Sortie',
    syntax: '~READ_TIMERN <var> [STATUS];',
    semantics: 'Lit la valeur actuelle d\'un timer en microsecondes. L\'option STATUS retourne l\'état (0:Clear, 1:Armed, 2:Expired).',
    example: '~READ_TIMER1 T_USEC;'
  },
  {
    id: 'DIGITAL_CMD_ADVANCED',
    name: 'IHn / ILn / OHn / OLn',
    frenchName: 'PILOTAGE_MULTISTROBE',
    category: 'Timing',
    syntax: 'IH<n> <pins>; OL<n> <pins>;',
    semantics: 'Versions indexées des commandes numériques. <n> correspond au numéro de PHASE (pour driver) ou de WINDOW (pour sensor) défini dans le TIMING. Permet des commutations multiples au sein d\'un même pattern.',
    example: 'START TEST DYN;\n  / TIMING T1;\n  IH1 DATA_BUS; ! Change a ASSERT1\n  IL2 DATA_BUS; ! Change a ASSERT2\n  OH1 DATA_BUS; ! Mesure au STROBE1\n  /;\nENDTEST;'
  },
  {
    id: 'DIGITAL_RETURN_MODES',
    name: 'R0 / R1 / RZ',
    frenchName: 'MODES_RETOUR_LOGIQUE',
    category: 'Timing',
    syntax: 'R0 <pins>; R1 <pins>; RZ <pins>;',
    semantics: 'Définit le mode de retour automatique. R0 (Return to 0), R1 (Return to 1), RZ (Return to Tristate). Le canal génère une impulsion et revient à son état de repos défini par la PHASE.',
    example: 'PHASE1 100N 300N;\nSTART TEST;\n  R1 CLK_PIN;\n  /! Génère une impulsion basse de 200ns puis revient à 1\nENDTEST;'
  },
  {
    id: 'BSCAN_CONTROL',
    name: '~SET VBNPOD / ~READ_VBN / ~TEST_VBN',
    frenchName: 'CONTROLE_JTAG_BSCAN',
    category: 'Instrument',
    syntax: '~SET VBNPOD <n> FR=<val> TDI=<pin> TMS=<pin>...; ~READ_VBN <var> [BSDL] <type>;',
    semantics: 'Pilote une chaîne Boundary Scan. Les pins du composant JTAG deviennent des canaux numériques virtuels manipulables par IL/IH/OL/OH. ~READ_VBN BSDL permet de lire la chaîne attendue depuis le fichier BSDL.',
    example: 'DECLARE BSCAN NETLIST=u1.bss U1;\n~SET VBNPOD 1 F50 TDI=19 TMS=20 CLK=17 TDO=18;\n/;\nIH U1_ADD16; ! Force une pin interne du composant'
  },
  {
    id: 'EXTERNAL_SCRIPTS',
    name: '~VBS / ~VI',
    frenchName: 'SCRIPTS_EXTERNES',
    category: 'Contrôle',
    syntax: '~VBS "<file.vbs>" <procedure> <params>; ~VI "<file.vi>" NAME="<p>" VALUE=<var>;',
    semantics: 'Intégration de scripts externes. ~VBS appelle du VBScript (ex: accès base de données). ~VI pilote des instruments virtuels Labview. Passage par référence possible avec l\'astérisque (*).',
    example: '~VBS "C:\\scripts\\log.vbs" WriteLog STRING "Erreur 102";\n~VI "C:\\vi\\scope.vi" PAR="Scale" IN VALUE=2.5;'
  },
  {
    id: 'READ_RAM_MEMORY',
    name: '~READ_RAM',
    frenchName: 'LECTURE_MEMOIRE_CANAL',
    category: 'Instrument',
    syntax: '~READ_RAM <type>, <start>, <stop>, <array>, <group>;',
    semantics: 'Récupère le contenu de la mémoire de capture des canaux (Post-processing). Types : DATA (IH/OH), RELEVANT (actif), ENABLE (driver actif), RESULT (état lu).',
    example: 'DECLARE RUNTIME INTEGER ARRAY DAT_BUF[100];\n~READ_RAM RESULT, 1, 50, DAT_BUF[0], DATA_BUS;'
  },
  {
    id: 'COMP_VAR',
    name: '~COMP',
    frenchName: 'COMPARAISON_LOCALE',
    category: 'Contrôle',
    syntax: '~COMP <var> [LO=v HI=v] [ONERROR <dest>];',
    semantics: 'Compare une valeur sans affecter le flag d\'erreur global. Idéal pour les boucles de recalage.',
    example: '~COMP AR LO=1.0 ONERROR RETRY;'
  },
  {
    id: 'READ_ERROR_CH',
    name: '~READ_ERROR',
    frenchName: 'LIRE_ERREUR',
    category: 'Contrôle',
    syntax: '~READ_ERROR <variable>;',
    semantics: 'Lit le numéro du canal numérique ayant échoué.',
    example: '~READ_ERROR ERR_CH;'
  },
  {
    id: 'WHILE_ENDWHILE',
    name: '~WHILE / ~ENDWHILE',
    frenchName: 'TANT_QUE',
    category: 'Contrôle',
    syntax: '~WHILE <condition>; ... ~ENDWHILE;',
    semantics: 'Boucle de répétition conditionnelle Run-time.',
    example: '~WHILE AR > 0.5;\n  ~MEASURE Voltage ON=1 INTO=AR;\n~ENDWHILE;'
  },
  {
    id: 'SWITCH_CASE',
    name: '~SWITCH / ~CASE',
    frenchName: 'SELON_CAS',
    category: 'Contrôle',
    syntax: '~SWITCH <var> [CONTINUE]; ~CASE [NOT] <expr>; ... ~ENDCASE;',
    semantics: 'Structure de branchement multiple. L\'expression peut être une plage (FROM N TO M) ou une liste. CONTINUE force l\'évaluation de tous les cas.',
    example: '~SWITCH MODE;\n  ~CASE FROM 1 TO 5;\n    ~WRITE "Cas standard";\n  ~CASE 10, 11, 12;\n    ~WRITE "Cas exceptionnel";\n~ENDCASE;'
  },
  {
    id: 'SUBR_DEF',
    name: '~SUBR / ~ENDSUBR',
    frenchName: 'DEFINITION_SOUS_PROG',
    category: 'Contrôle',
    syntax: '~SUBR <name> [(<type> <arg1>... )]; ... ~RETURN; ~ENDSUBR;',
    semantics: 'Définit une sous-routine avec passage d\'arguments (entiers, flottants, chaînes) et retour possible conditionné par les flags d\'erreur.',
    example: '~SUBR CALC_GAIN(FLOAT PIN); ... ~RETURN; ~ENDSUBR;'
  },
  {
    id: 'CALL_SOUS_PROG',
    name: '~CALL',
    frenchName: 'APPEL_SOUS_PROG',
    category: 'Contrôle',
    syntax: '~CALL <name> [(<par1>...)] [ONERROR] [ONPASS];',
    semantics: 'Appelle une sous-routine déclarée. L\'appel peut être conditionnel à l\'état du flag d\'erreur partiel.',
    example: '~CALL INIT_SYSTEM(12) ONPASS OK_LABEL;'
  },
  {
    id: 'POWER_STATUS_READ',
    name: '~READ STATUS PW',
    frenchName: 'ETAT_ALIMENTATION',
    category: 'Instrument',
    syntax: '~READ STATUS PW<n> <param>;',
    semantics: 'Lit les valeurs de programmation (V, I, VMAX, IMAX) ou l\'état (STATUS : 0=OFF, 1=ON) d\'une alimentation. Note : retourne la valeur programmée, pas la valeur réelle mesurée.',
    example: '~READ STATUS PW1 STATUS; ! Place l\'état dans AR'
  },
  {
    id: 'SCOUNTER_ADVANCED',
    name: '~SET SCOUNTER / ~MEAS SCOUNTER',
    frenchName: 'COMPTEUR_AVANCE_ACL',
    category: 'Instrument',
    syntax: '~SET SCOUNTER MODE=<mode> VAL=<exp> LEVEL_A=<v>...;',
    semantics: 'Pilote le compteur haute performance du module ACL. Modes : COUNT (impulsions), FREQ (fréquence), PERIOD (durée), TINT_AB (intervalle entre A et B). Supporte l\'hystérésis automatique.',
    example: '~SET SCOUNTER MODE=FREQ VAL=1000 INP_A=L4;\n~MEAS SCOUNTER INTO=F_VAL;'
  },
  {
    id: 'SYSTEM_OBJECTS_IO',
    name: '~PUT / ~GET',
    frenchName: 'OBJETS_SYSTEME_VIVA',
    category: 'Contrôle',
    syntax: '~PUT "MAILBOX" NAME="m" VAL=<v>; ~GET "GLOBAL" NAME="g" INTO=<v>;',
    semantics: 'Permet d\'échanger des données avec l\'environnement VIVA extérieur au cluster. Objets supportés : MAILBOX (réseau), GLOBAL (variables globales), MEMO (notes de macro), PINLIST.',
    example: '~PUT "MAILBOX" NAME="SERIAL_NUM" VAL=STR1;\n~GET "GLOBAL" NAME="TEST_VER" INTO=VER;'
  },
  {
    id: 'START_SUB_SECTION',
    name: '~START_SUB / ~END_SUB',
    frenchName: 'DELIMITEURS_SECTION_SOUS_PROG',
    category: 'Contrôle',
    syntax: '~START_SUB; ... ~END_SUB;',
    semantics: 'Identifie le début et la fin du bloc réservé à la définition des sous-routines dans une session statique.',
    example: 'START MAIN STATIC;\n  ~START_SUB;\n    ~SUBR MA_ROUTINE... \n  ~END_SUB;\nENDTEST;'
  },
  {
    id: 'EXIT_CTRL',
    name: '~EXIT',
    frenchName: 'SORTIE_PRECOCE',
    category: 'Contrôle',
    syntax: '~EXIT;',
    semantics: 'Interrompt immédiatement l\'exécution du bloc actuel (boucle, branchement multiple).',
    example: '~IF (A=1); ~EXIT; ~ENDIF;'
  },
  {
    id: 'TEST_SECTIONS',
    name: 'TESTNAME / SECTION',
    frenchName: 'SECTIONS_TEST',
    category: 'Contrôle',
    syntax: 'TESTNAME=<nom>; SECTION <type>; ... ENDTESTNAME;',
    semantics: 'Organise le programme en sections logiques (USER, SET, DIGITAL, MEAS, DIAG, END).',
    example: 'TESTNAME=ALIM;\nSECTION SET;\n  ~SET PW N=1 V=5;\nENDTESTNAME;'
  },
  {
    id: 'ENV_MODES',
    name: 'DMASTER / STATIC',
    frenchName: 'MODES_ENVIRONNEMENT',
    category: 'Contrôle',
    syntax: '/ DMASTER; / STATIC;',
    semantics: 'Bascule entre l\'environnement Run-time (Static) et l\'environnement de compilation (Dynamic).',
    example: '/ DMASTER; ! Passage en dynamique\n/ STATIC; ! Retour en statique'
  },
  {
    id: 'PATTERN_OPTIONS',
    name: 'PROBE / NOPROBE / NOSTEP',
    frenchName: 'OPTIONS_PATTERN',
    category: 'Contrôle',
    syntax: '/ PROBE; / NOPROBE; / NOSTEP;',
    semantics: 'Options de contrôle pour les patterns numériques (activation sonde, masquage étape).',
    example: '/ NOSTEP; ! Pattern non enregistré dans le rapport'
  },
  {
    id: 'REPEAT_UNTIL',
    name: '~REPEAT / ~UNTIL',
    frenchName: 'REPETER_JUSQUA',
    category: 'Contrôle',
    syntax: '~REPEAT; ... ~UNTIL ( <condition> );',
    semantics: 'Boucle de répétition avec test de condition à la fin.',
    example: '~REPEAT;\n  ~MEASURE Voltage ON=1 INTO=AR;\n~UNTIL (AR > 4.8);'
  },

  // --- INSTRUMENTS & MATÉRIEL ---
  {
    id: 'MEASURE_VOLTAGE',
    name: '~MEASURE Voltage',
    frenchName: 'MESURE_TENSION_AVANCEE',
    category: 'Instrument',
    syntax: '~MEASURE Voltage TYPE=<type> RANGE=<v> EXPECT=<v> GATE=<s> INTO=<var> [USING=<instr>];',
    semantics: 'Mesure de tension DC, RMS, Peak, etc. Paramètres : ACCV (précision), GATE (fenêtre), FREQ (échantillonnage), SYNC/TRIG (déclenchement).',
    example: '~MEASURE Voltage TYPE=max RANGE=10V GATE=500ms EXPECT=2V (5%) INTO=R_MEAS'
  },
  {
    id: 'ATEST',
    name: '~ATEST',
    frenchName: 'COMPARAISON_GLOBALE',
    category: 'Instrument',
    syntax: '~ATEST <var> [NAME="lbl"] [LO=v HI=v] [VALUE=v TOL=p] [ONERROR <lab>];',
    semantics: 'Compare une variable avec des limites numériques ou de tolérance (%). Si hors limite, active les flags d\'erreur partiels et globaux. Supporte les tolérances asymétriques (TOLM/TOLP).',
    example: '~ATEST AR NAME="VCC" VALUE=5V TOL=10% ONERROR FAIL_LABEL'
  },
  {
    id: 'SET_BUS_IEEE',
    name: '~SET BUS',
    frenchName: 'CONFIG_BUS_IEEE',
    category: 'Instrument',
    syntax: '~SET BUS <params> (UNT, UNL, MLA, MTA...);',
    semantics: 'Envoie des commandes de gestion de protocole sur le bus IEEE (GPIB).',
    example: '~SET BUS UNT, UNL, MLA, 3, MTA, 0;'
  },
  {
    id: 'SET_HV_ES_PMM',
    name: '~SET ES / ~SET PMM',
    frenchName: 'HV_RESSOURCE_METER',
    category: 'Instrument',
    syntax: '~SET ESn PLn; ~SET PMM PP=<pos> PN=<neg>;',
    semantics: 'Connecte une ressource HV aux lignes internes et configure le multimètre HV (PMM).',
    example: '~SET ES1 PL2 IP=1000; ! Limite 1A'
  },
  {
    id: 'SET_OPC',
    name: '~SET OPC',
    frenchName: 'OPEN_COLLECTOR',
    category: 'Instrument',
    syntax: '~SET OPC V=<val>;',
    semantics: 'Commande les signaux Open Collector du module LAM (1=0V, 0=FLOTTANT).',
    example: '~SET OPC=B11110000; ! Force 4 signaux à 0'
  },
  {
    id: 'SET_PW_DETAILED',
    name: '~SET PW1...8',
    frenchName: 'ALIM_DETAILS',
    category: 'Instrument',
    syntax: '~SET PW<n> V=<v> [I=<i>] [SENSE] [ON|OFF] [PREPARE];',
    semantics: 'Programmation détaillée d\'une alimentation (Tension, Courant, Sensing, Délai).',
    example: '~SET PW1 V=5 I=1 SENSEOFF INT ON;'
  },
  {
    id: 'SET_SERVICE_BUS_LAM',
    name: '~SET SERVICE_BUS',
    frenchName: 'BUS_SERVICE_LAM',
    category: 'Instrument',
    syntax: '~SET SERVICE_BUS <args> (LI3, LI4, EXS, EXG, PUL);',
    semantics: 'Configure les signaux de service du module LAM (Strobe externe, Guarding, Pull-up externe).',
    example: '~SET SERVICE_BUS LI3 EXG; ! Connecte EXL3 et EXGUARD'
  },
  {
    id: 'SET_USER_BUS_WORD',
    name: '~SET USER_BUSW / USER_WORD',
    frenchName: 'BUS_USB_CUSTOM',
    category: 'Instrument',
    syntax: '~SET USER_BUSW<n> A=<a> D=<d>; ~SET USER_WORD<n> V=<v>;',
    semantics: 'Écrit des données sur le bus numérique ou les lignes Custom du module USB.',
    example: '~SET USER_BUSW1 A=0X55 D=0X3A;'
  },
  {
    id: 'SET_USER_GEN_DETAILED',
    name: '~SET USER_GEN',
    frenchName: 'GENERATEUR_FONCTIONS_DETAILS',
    category: 'Instrument',
    syntax: '~SET USER_GEN HZ=<v> VOUT=<v> [SIN|TRI|RECT] [VPP] [GUA];',
    semantics: 'Programmation complète du générateur de fonctions (Fréquence, Amplitude, Forme, Offset).',
    example: '~SET USER_GEN HZ=1000 VOUT=3 SIN VPP;'
  },
  {
    id: 'SET_USER_LOAD',
    name: '~USER_LOAD',
    frenchName: 'CHARGE_USB',
    category: 'Instrument',
    syntax: '~USER_LOAD<n> OHM=<v> [ONLINE];',
    semantics: 'Programme les charges résistives du module USB et les connecte éventuellement aux lignes.',
    example: '~SET USER_LOAD2 OHM=1 ONLINE; ! Charge 1 ohm entre LI2/LI4'
  },
  {
    id: 'SET_ZTEST_CAL',
    name: '~SET ZTEST',
    frenchName: 'CALIBRATION_ZTEST',
    category: 'Instrument',
    syntax: '~SET ZTEST Z=<id> P1=<l1> P2=<l2>;',
    semantics: 'Connecte des composants de précision internes (résistances, capacités) pour la calibration du LAM.',
    example: '~SET ZTEST Z=Z3 P1=LL2 P2=LL4; ! Branche 10K ohms'
  },
  {
    id: 'SET_USER_DAC',
    name: '~SET USER_DACn',
    frenchName: 'DAC_UTILISATEUR',
    category: 'Instrument',
    syntax: '~SET USER_DAC<n> V=<val>;',
    semantics: 'Programme un DAC du module USB.',
    example: '~SET USER_DAC1 V=150;'
  },
  {
    id: 'MEASURE_COUNT',
    name: '~MEASURE Counts',
    frenchName: 'MESURE COMPTAGE',
    category: 'Instrument',
    syntax: '~MEASURE Counts ON=<signal> GATE=<time>;',
    semantics: 'Mesure le nombre d\'événements sur un point de test.',
    example: '~MEASURE Counts ON=ch1 GATE=100ms;'
  },
  {
    id: 'READ_COUNT_VAL',
    name: '~READ_COUNT',
    frenchName: 'LIRE_COMPTAGE',
    category: 'Instrument',
    syntax: '~READ_COUNT <pin>;',
    semantics: 'Lit le nombre de transitions vues par le fréquencemètre.',
    example: '~READ_COUNT 1;'
  },
  {
    id: 'READ_GATE_VAL',
    name: '~READ_GATE',
    frenchName: 'LIRE_PORTE',
    category: 'Instrument',
    syntax: '~READ_GATE <pin>;',
    semantics: 'Lit la fenêtre de temps (gate) utilisée par le fréquencemètre.',
    example: '~READ_GATE 1;'
  },
  {
    id: 'READ_TIME_INT_VAL',
    name: '~READ_TIME_INT',
    frenchName: 'LIRE_INTERVALLE_TEMPS',
    category: 'Instrument',
    syntax: '~READ_TIME_INT <pin>;',
    semantics: 'Lit la dernière mesure d\'intervalle de temps.',
    example: '~READ_TIME_INT 1;'
  },
  {
    id: 'BOOST_MODE_SET',
    name: '~BOOST_MODE',
    frenchName: 'MODE_BOOSTER',
    category: 'Instrument',
    syntax: '~BOOST_MODE <mode> <pinlist>;',
    semantics: 'Configure le mode de fonctionnement des canaux du module F48H (BYPASS, STATIC, DYNAMIC, etc.).',
    example: '~BOOST_MODE DYNAMIC 1/32;'
  },
  {
    id: 'FRONTEND_SET',
    name: '~FRONTEND',
    frenchName: 'FRONTEND',
    category: 'Instrument',
    syntax: '~FRONTEND <params> <pinlist>;',
    semantics: 'Définit les paramètres électriques (slew rate, charge, impédance) des canaux numériques.',
    example: '~FRONTEND SVH=5 SVL=0 TERM=50 1/8;'
  },
  {
    id: 'DIG_CLOCK_SET',
    name: '~DIG_CLOCK',
    frenchName: 'HORLOGE_NUM',
    category: 'Instrument',
    syntax: '~DIG_CLOCK FR=<hz> DUTY=<%>;',
    semantics: 'Programme le générateur d\'impulsions interne du module F50.',
    example: '~DIG_CLOCK FR=1MHZ DUTY=50 START 1;'
  },
  {
    id: 'DIG_TX_SET',
    name: '~DIG_TX',
    frenchName: 'TRANS_NUM',
    category: 'Instrument',
    syntax: '~DIG_TX TDI=<val> N=<bits>;',
    semantics: 'Programme le registre à décalage interne du module F50.',
    example: '~DIG_TX TDI=0XAAAA N=16 START 1;'
  },
  {
    id: 'APPLY_VDC',
    name: '~APPLY VDC',
    frenchName: 'APPLIQUER TENSION DC',
    category: 'Instrument',
    syntax: '~APPLY VDC V=<val> I=<lim> TO=<chan>;',
    semantics: 'Applique une tension continue (DC) sur un ou plusieurs points.',
    example: '~APPLY VDC V=5.0 I=0.5 TO=VDD;'
  },
  {
    id: 'APPLY_VAC',
    name: '~APPLY VAC',
    frenchName: 'APPLIQUER TENSION AC',
    category: 'Instrument',
    syntax: '~APPLY VAC V=<peak> WAVE=<sine|tri|rect> FREQ=<hz> TO=<chan>;',
    semantics: 'Applique une tension alternative (AC) avec forme d\'onde programmable.',
    example: '~APPLY VAC V=5 WAVE=sine FREQ=10KHZ TO=1;'
  },
  {
    id: 'APPLY_CLOCK',
    name: '~APPLY CLOCK',
    frenchName: 'APPLIQUER HORLOGE',
    category: 'Instrument',
    syntax: '~APPLY CLOCK FREQ=<hz> TO=<chan>;',
    semantics: 'Génère un signal d\'horloge numérique sur un canal.',
    example: '~APPLY CLOCK FREQ=1MHZ TO=CLK_PIN;'
  },
  {
    id: 'LEVEL_SET',
    name: '~LEVEL',
    frenchName: 'SEUILS_LOGIQUES',
    category: 'Instrument',
    syntax: '~LEVEL<famille> IL=<v> IH=<v> OL=<v> OH=<v>;',
    semantics: 'Définit les seuils de tension pour les familles de drivers/sensors.',
    example: '~LEVELA IL=0 IH=5 OL=0.8 OH=2.4;'
  },
  {
    id: 'MH_ML_FORCING',
    name: '~MH / ~ML',
    frenchName: 'FORCAGE_NON_CONTROLE',
    category: 'Instrument',
    syntax: '~MH <chan>; ~ML <chan>;',
    semantics: 'Force l\'état haut ou bas d\'un driver sans contrôle de boucle (utile pour les charges capacitives).',
    example: '~ML 1/8; ! Décharge sans erreur'
  },
  {
    id: 'OH_OL_SENSING',
    name: '~OH / ~OL',
    frenchName: 'TEST_LOGIQUE_MONITORE',
    category: 'Instrument',
    syntax: '~OH <chan>; ~OL <chan>;',
    semantics: 'Exécute un test de niveau logique haut ou bas sur un canal sensor.',
    example: '~OH CS; ! Vérifie que le signal est haut'
  },
  {
    id: 'OM_MASKING',
    name: '~OM',
    frenchName: 'MASQUAGE_CANAL',
    category: 'Instrument',
    syntax: '~OM <chan>;',
    semantics: 'Masque le contrôle sur un canal sensor pour ignorer son état (ne génère pas d\'erreur).',
    example: '~OM 1/8; ! Ignore les canaux spécifiés'
  },
  {
    id: 'ROUT_RSN',
    name: '~ROUT RSn',
    frenchName: 'RESISTANCE_SORTIE',
    category: 'Instrument',
    syntax: '~ROUT RS<n> [*,] <chan>;',
    semantics: 'Connecte une résistance de sortie (0, 8, 10, 33 ohms) entre le driver et le connecteur.',
    example: '~ROUT RS2 13; ! Insère 8 ohms'
  },
  {
    id: 'REPORT_IO',
    name: '~REPORT',
    frenchName: 'RAPPORT',
    category: 'Entrée/Sortie',
    syntax: '~REPORT <val1>, <val2>...;',
    semantics: 'Affiche des valeurs dans la fenêtre de rapport de test et les enregistre dans les statistiques.',
    example: '~REPORT "VCC=" AR;'
  },
  {
    id: 'SEND_IEEE_IO',
    name: '~SEND_IEEE',
    frenchName: 'ENVOYER_IEEE',
    category: 'Entrée/Sortie',
    syntax: '~SEND_IEEE <value>;',
    semantics: 'Envoie une commande ou une valeur sur le bus IEEE (GPIB).',
    example: '~SEND_IEEE "*IDN?";'
  },
  {
    id: 'SET_ALM_EB',
    name: '~SET ALM / EB0 / EB1',
    frenchName: 'RELAIS_MATRICE',
    category: 'Instrument',
    syntax: '~SET ALM V=<val>; ~SET EB0 V=<val>;',
    semantics: 'Contrôle les relais de matrice interne (ALM, External Bus) du module LAM.',
    example: '~SET ALM V=15; ! Ouvre les 4 premiers relais'
  },
  {
    id: 'SET_BUS_LINE_SERV',
    name: '~SET BUS_LINE SERV',
    frenchName: 'CONNEXION_LAM_SE2',
    category: 'Instrument',
    syntax: '~SET BUS_LINE SERV V=<val> | OPEN | CLOSE;',
    semantics: 'Restaure ou configure les connexions des lignes LAM (LI1-LI8) via le module SE2.',
    example: '~SET BUS_LINE SERV V=254;'
  },
  {
    id: 'SET_CKGEN_DR',
    name: '~SET CKGEN / DR1 / DR2',
    frenchName: 'GENERATEURS_LAM',
    category: 'Instrument',
    syntax: '~SET CKGEN TIM=<v> NUM=<n>; ~SET DR1 V=<v> I=<i>;',
    semantics: 'Programme les générateurs de précision du module LAM (Horloge, Tension/Courant).',
    example: '~SET DR1 V=5.0 IL LI1; ! Alim 5V sur LI1'
  },
  {
    id: 'SET_EMX_MATRIX',
    name: '~SET EMX',
    frenchName: 'MATRICE_EXTERNE',
    category: 'Instrument',
    syntax: '~SET EMX <instrument>=<line>;',
    semantics: 'Configure la matrice EMX pour connecter des instruments externes aux lignes de carte.',
    example: '~SET EMX DMM1+=FLI1 DMM1-=FLI4;'
  },
  {
    id: 'SET_HV_GUA_PUL',
    name: '~SET GUA / PUL / ISOLEV / ISORES',
    frenchName: 'GUARDING_ET_HV',
    category: 'Instrument',
    syntax: '~SET GUA DR1; ~SET PUL UP OHM=<v>;',
    semantics: 'Configuration avancée du guarding, des matrices de pull-resistors et des références flottantes HV.',
    example: '~SET PUL UP OHM=10K; ! Pull-up 10K'
  },
  {
    id: 'HV_CONTROL',
    name: '~PCT / ~PLn',
    frenchName: 'CONTROLE_HV',
    category: 'Instrument',
    syntax: '~PCT=[*]contact; ~PLn=[*]channel;',
    semantics: 'Contrôle les contacts PCT et les lignes PL1-PL4 du module Haute Tension.',
    example: '~PCT=15; ! Ferme le contact 15\n~PL1=29; ! Connecte le canal 29 à PL1'
  },
  {
    id: 'SCANNER_CLEAR',
    name: '~CLEAR SCANNER / BLINE',
    frenchName: 'RAZ_SCANNER',
    category: 'Instrument',
    syntax: '~CLEAR SCANNER; ~CLEAR BLINE;',
    semantics: 'Ouvre toutes les lignes du scanner ou libère les lignes de carte inutilisées.',
    example: '~CLEAR SCANNER;'
  },
  {
    id: 'DRIVER_METHODS',
    name: '~INIT / ~TERM / ~DRIVER',
    frenchName: 'METHODES_DRIVER',
    category: 'Instrument',
    syntax: '~INIT "<drv>"; ~TERM "<drv>"; ~DRIVER <meth> "<drv>";',
    semantics: 'Appelle les méthodes standard ou spécifiques des drivers propriétaires SEICA.',
    example: '~INIT "GPIB_DEV";\n~DRIVER RESET "GPIB_DEV";'
  },
  {
    id: 'CHLEV_CHMODE',
    name: '~CHLEV / ~CHMODE',
    frenchName: 'NIVEAUX_CANAUX',
    category: 'Instrument',
    syntax: '~CHLEV <pinlist> VIL=<v> VIH=<v> VOL=<v> VOH=<v>;',
    semantics: 'Configure les seuils électriques des drivers.',
    example: '~CHLEV DATA_BUS VIL=0.8 VIH=2.4;'
  },

  {
    id: 'SET_DIGIPLEX',
    name: '~SET DIGIPLEX',
    frenchName: 'CONFIG_DIGIPLEX',
    category: 'Instrument',
    syntax: '~SET DIGIPLEX [PULL UP|DOWN] [LOAD V=v I=a] [FREE|HOLD L1..4];',
    semantics: 'Configure l\'option Digiplex (numérique sur analogique). FREE libère une ligne pour un test analogique simultané. HOLD verrouille une ligne spécifique.',
    example: '~SET DIGIPLEX PULL UP 10K;\n~SET DIGIPLEX FREE L2;'
  },
  // --- ENTRÉE / SORTIE ---
  {
    id: 'WRITE',
    name: '~WRITE',
    frenchName: 'ECRIRE',
    category: 'Entrée/Sortie',
    syntax: '~WRITE [attribut] <valeur1>...;',
    semantics: 'Affiche du texte et des valeurs sur le terminal.',
    example: '~WRITE "\\CU\\010\\005", "Systeme Pret"'
  },
  {
    id: 'MSG_ASKUSER_IO',
    name: '~MSG / ~ASKUSER',
    frenchName: 'MESSAGE_DIALOGUE',
    category: 'Entrée/Sortie',
    syntax: '~MSG "text" [,BAR]; ~ASKUSER "text" [,ONPASS|ONERROR];',
    semantics: 'Affiche un message dans une boîte de dialogue ou sur la barre de statut (BAR). ~ASKUSER attend une réponse (OUI/NON).',
    example: '~MSG "Branchez le câble", BAR;\n~ASKUSER "Continuer ?";'
  },
  {
    id: 'CURSOR',
    name: '~CURSOR',
    frenchName: 'CURSEUR',
    category: 'Entrée/Sortie',
    syntax: '~CURSOR <col>, <line> [attributs];',
    semantics: 'Positionne le curseur sur le terminal.',
    example: '~CURSOR 10, 5, CS;'
  },
  {
    id: 'STREAM_SET',
    name: '~STREAM',
    frenchName: 'FLUX',
    category: 'Entrée/Sortie',
    syntax: '~STREAM [n] [action] <device>;',
    semantics: 'Redirige les sorties (~WRITE) vers différents périphériques (Fichier, IEEE, Imprimante, etc.).',
    example: '~STREAM 1 ADD FILE1;'
  },
  {
    id: 'RFORMAT_SET',
    name: '~RFORMAT',
    frenchName: 'FORMAT_RAPPORT',
    category: 'Entrée/Sortie',
    syntax: '~RFORMAT <integers>, <decimals>, <format>;',
    semantics: 'Définit le format d\'affichage pour les instructions ~REPORT.',
    example: '~RFORMAT 5, 2, DEC;'
  },
  {
    id: 'COLOR_SET',
    name: '~COLOR',
    frenchName: 'COULEUR',
    category: 'Entrée/Sortie',
    syntax: '~COLOR <text>, <bg>;',
    semantics: 'Définit les couleurs de texte et de fond pour le terminal.',
    example: '~COLOR 1, 2; ! Texte blanc sur fond bleu'
  },
  {
    id: 'READ_IEEE_BUS',
    name: '~READ_IEEE',
    frenchName: 'LIRE_IEEE',
    category: 'Entrée/Sortie',
    syntax: '~READ_IEEE <variable>;',
    semantics: 'Lit une valeur depuis le bus IEEE (GPIB).',
    example: '~READ_IEEE VOLT_VAL;'
  },
  {
    id: 'READ_SCR',
    name: '~READ_SCR',
    frenchName: 'ENTREE_CLAVIER',
    category: 'Entrée/Sortie',
    syntax: '~READ_SCR <variable>;',
    semantics: 'Lit une saisie utilisateur au clavier.',
    example: '~READ_SCR MA_VAR;'
  },

  // --- MATHÉMATIQUES ---
  {
    id: 'TIMING_CLOCK',
    name: 'CLOCK / CLOCKF',
    frenchName: 'HORLOGE_SYSTEME',
    category: 'Timing',
    syntax: 'CLOCK <valeur>; CLOCKF [INT]=20N;',
    semantics: 'Définit la fréquence de base du système et la résolution du timing F40.',
    example: 'CLOCK 100N\nCLOCKF INT=20N'
  },
  {
    id: 'TIMING_PERIOD',
    name: 'PERIOD / DEAD',
    frenchName: 'PERIODE_TEST',
    category: 'Timing',
    syntax: 'PERIOD <val>; DEAD <val>;',
    semantics: 'Définit la durée d\'un pattern et le temps mort de programmation.',
    example: 'PERIOD 10C\nDEAD 2C'
  },
  {
    id: 'TIMING_STROBE',
    name: 'STROBE / ASSERT',
    frenchName: 'ECHANTILLONNAGE',
    category: 'Timing',
    syntax: 'STROBE <val>; ASSERT<n> <val>;',
    semantics: 'Définit l\'instant de mesure (strobe) et de commutation (assert) dans le cycle.',
    example: 'STROBE 8C\nASSERT1 2C'
  },
  {
    id: 'F40_CLOCK_CMD',
    name: 'C1...9 / CR / NR',
    frenchName: 'HORLOGE_DYNAMIQUE_F40',
    category: 'Timing',
    syntax: 'C1 <chan>; CR <chan>; NR <chan>;',
    semantics: 'C1 force une horloge sur une phase (non monitoré). CR active l\'horloge répétitive à l\'intérieur d\'un pattern. NR désactive le mode répétitif.',
    example: 'CR CLK_PIN; ! Signal oscille sur toute la période'
  },
  {
    id: 'TIMING_PHASE',
    name: 'PHASE',
    frenchName: 'PHASE',
    category: 'Timing',
    syntax: 'PHASE<n> <start> <end> [period];',
    semantics: 'Définit une fenêtre temporelle active pour les signaux de type Pulse. L\'option period permet de définir la répétition interne.',
    example: 'PHASE1 3C 7C 5C'
  },

  // --- MATHÉMATIQUES (ACCUMULATEUR AR) ---
  {
    id: 'ARITH_ADD_SUB',
    name: '~ADD / ~SUB',
    frenchName: 'ADDITION / SOUSTRACTION',
    category: 'Mathématique',
    syntax: '~ADD <val>; ~SUB <val>;',
    semantics: 'Ajoute ou soustrait une valeur au registre accumulateur AR.',
    example: '~LOAD 10\n~ADD 5 ! AR=15'
  },
  {
    id: 'ARITH_MULT_DIV',
    name: '~MULT / ~DIV',
    frenchName: 'MULTIPLICATION / DIVISION',
    category: 'Mathématique',
    syntax: '~MULT <val>; ~DIV <val>;',
    semantics: 'Multiplie ou divise le contenu du registre AR.',
    example: '~LOAD 20\n~DIV 4 ! AR=5'
  },
  {
    id: 'ARITH_LOAD_STORE',
    name: '~LOAD / ~STORE',
    frenchName: 'CHARGER / STOCKER',
    category: 'Mathématique',
    syntax: '~LOAD <val>; ~STORE <var>;',
    semantics: 'Charge une valeur dans AR ou stocke AR dans une variable.',
    example: '~LOAD 3.14\n~STORE MA_VAR'
  },
  {
    id: 'LOGIC_BITWISE',
    name: '~AND / ~OR / ~XOR',
    frenchName: 'ET / OU / OU_EXCLUSIF',
    category: 'Mathématique',
    syntax: '~AND <val>; ~OR <val>; ~XOR <val>;',
    semantics: 'Opérations logiques bit à bit sur le registre AR.',
    example: '~LOAD 0XFF\n~AND 0X0F ! AR=0X0F'
  },
  {
    id: 'SET_USER_RELAIS',
    name: '~USER_LINE / ~URP / ~URS / ~UOP',
    frenchName: 'RELAIS_TRANSISTORS_USER',
    category: 'Instrument',
    syntax: '~USER_LINEn; ~URP=<relay>; ~UOP=<trans>;',
    semantics: 'Contrôle les relais (Reed/Power) et transistors opto-couplés sur les modules USB.',
    example: '~URP=5; ! Ferme le relais de puissance 5'
  },
  {
    id: 'ARITH_SHIFTS',
    name: '~SHL / ~SHR',
    frenchName: 'DECALAGES_BITS',
    category: 'Mathématique',
    syntax: '~SHL <n>; ~SHR <n>;',
    semantics: 'Décale les bits du registre AR vers la gauche ou la droite en insérant des zéros.',
    example: '~LOAD 0XFF\n~SHL 4 ! AR = 0XF0'
  },
  {
    id: 'TRIG_FUNCTIONS',
    name: '~SIN / ~COS / ~ATAN',
    frenchName: 'TRIGONOMETRIE',
    category: 'Mathématique',
    syntax: '~SIN; ~COS; ~ATAN;',
    semantics: 'Fonctions trigonométriques opérant sur le registre AR (valeurs en radians).',
    example: '~LOAD 1.57\n~SIN ! AR = sin(PI/2) = 1'
  },
  {
    id: 'MATH_SQUARE',
    name: '~SQR / ~SQUARE',
    frenchName: 'RACINE_CARRE_PUISSANCE',
    category: 'Mathématique',
    syntax: '~SQR; ~SQUARE;',
    semantics: 'Calcule la racine carrée (~SQR) ou le carré (~SQUARE) du registre AR.',
    example: '~LOAD 16\n~SQR ! AR = 4'
  },
  {
    id: 'PROTECTION_READ',
    name: '~PROTECTION',
    frenchName: 'LECTURE_PROTECTION',
    category: 'Instrument',
    syntax: '~PROTECTION;',
    semantics: 'Lit l\'état de la protection générale du module HV (1 si active, 0 sinon) dans AR.',
    example: '~PROTECTION;\n~IF AR=1; ~WRITE "ALERTE"; ~ENDIF;'
  },
  {
    id: 'LIN_FLIN_LINES',
    name: '~LIn / ~FLIn',
    frenchName: 'CONNEXION_LIGNES',
    category: 'Instrument',
    syntax: '~LI<n>=<chan>; ~FLI<n>=<chan>;',
    semantics: 'Connecte des canaux aux lignes analogiques (1-4) ou numériques (5-8) du système.',
    example: '~LI1=99; ! Connecte canal 99 à LI1/LI5'
  },
  {
    id: 'SYS_EXEC',
    name: '~SYS',
    frenchName: 'EXECUTION_SYSTEME',
    category: 'Contrôle',
    syntax: '~SYS [mode], [sync], "<app>", "<params>";',
    semantics: 'Exécute une application Windows externe (Notepad, Script, etc.) en mode synchrone ou asynchrone.',
    example: '~SYS NORMAL, SYNCHRON, "notepad.exe", "dati.txt";'
  },
  {
    id: 'TEST_SPECIFIC',
    name: '~TEST COUNTER / PW / PMM / VOLT',
    frenchName: 'TESTS_INSTRUMENTS_RECYCLES',
    category: 'Instrument',
    syntax: '~TEST <instr> [params] LO=v HI=v [NRC=<n>] [MRC=<mode>];',
    semantics: 'Mesure avec comparaison immédiate et gestion de recyclages. NRC définit le nombre de répétitions, MRC la modalité (M:Moyenne, H:Max, L:Min, P:Vpp).',
    example: '~TEST COUNTER LI4 TIM=10ms NRC=10 MRC=M HI=1000'
  },
  {
    id: 'ZG_MASKING_GROUP',
    name: '~ZG',
    frenchName: 'MASQUAGE_GROUPE',
    category: 'Instrument',
    syntax: '~ZG <group>=<valeur>;',
    semantics: 'Masque ou démasque un groupe de canaux sensor selon le masque binaire spécifié.',
    example: '~ZG DATI=0X0F; ! Masque les 4 premiers bits'
  },
  {
    id: 'READ_STATUS_PW',
    name: '~READ STATUS PW',
    frenchName: 'ETAT_ALIMENTATION',
    category: 'Instrument',
    syntax: '~READ STATUS PW<n> <param>;',
    semantics: 'Lit les paramètres programmés (V, I, Status) d\'une alimentation dans AR.',
    example: '~READ STATUS PW1 STATUS; ! AR=1 si ON'
  },
  {
    id: 'READ_DATE_TIME_TIMER',
    name: '~READ_DATE / ~READ_TIME / ~READ_CLOCK',
    frenchName: 'LECTURE_TEMPS_SYSTEME',
    category: 'Entrée/Sortie',
    syntax: '~READ_DATE <var>; ~READ_TIME <var>;',
    semantics: 'Récupère la date, l\'heure ou la valeur d\'un timer système.',
    example: '~READ_DATE DATS; ! DATS = "15/04/2026"'
  },
  {
    id: 'FILE_OPS_ADVANCED',
    name: '~FILE OPEN / READ / WRITE / CLOSE',
    frenchName: 'OPERATIONS_FICHIERS_ASCII',
    category: 'Entrée/Sortie',
    syntax: '~FILE N=<n> [OPEN_READ|OPEN_WRITE|OPEN_APPEND] "<file>"; ~FILE N=<n> [READ|WRITE|REWIND|REMOVE];',
    semantics: 'Gestion des fichiers ASCII sur disque. OPEN_APPEND permet l\'ajout en fin de fichier. REWIND replace le pointeur au début. REMOVE supprime le fichier physique.',
    example: '~FILE N=1 OPEN_WRITE "ris.txt";\n~FILE N=1 WRITE "DATE=";\n~FILE N=1 REWIND;\n~FILE N=1 CLOSE;'
  },
  {
    id: 'SERIAL_COM_PORT',
    name: '~COM',
    frenchName: 'PORT_SERIE_COM',
    category: 'Entrée/Sortie',
    syntax: '~COM <port>, <param>=<val>;',
    semantics: 'Pilote les communications série (RS232) sur les ports COM1 à COM4 du système.',
    example: '~COM 1, BAUDRATE=9600, PARITY=NONE;'
  },
  {
    id: 'READ_OPTO_DETAILS',
    name: '~READ_OPTO',
    frenchName: 'LECTURE_OPTO',
    category: 'Entrée/Sortie',
    syntax: '~READ_OPTO<n> <variable>;',
    semantics: 'Lit l\'état des entrées opto-couplées du module USB spécifié.',
    example: '~READ_OPTO1 VAR1;'
  },
  {
    id: 'READ_STATUS_DETAILED',
    name: '~READ STATUS',
    frenchName: 'LECTURE_STATUT',
    category: 'Instrument',
    syntax: '~READ STATUS <device> <param>;',
    semantics: 'Lit les informations de statut (Alim V/I, Registres, Protection) dans le registre AR.',
    example: '~READ STATUS PW1 V; ! Tension prog de PW1 dans AR'
  },
  {
    id: 'RG_WG_GROUP_OPS',
    name: '~RG / ~WG',
    frenchName: 'LECTURE_ECRITURE_GROUPE',
    category: 'Instrument',
    syntax: '~RG <var>=<group>; ~WG <val>=<group>;',
    semantics: 'Lit ou écrit une valeur binaire complète sur un groupe de canaux numériques déclaré.',
    example: '~RG VAR1=23,24,25,26; ! Stocke l\'état de 4 pins dans VAR1'
  },
  {
    id: 'FILE_FORMATTERS',
    name: '~FORMAT / ~AFORMAT',
    frenchName: 'FORMATTAGE_CONVERSION',
    category: 'Entrée/Sortie',
    syntax: '~FORMAT <int>,<dec>,<fmt> [AUTOCR]; ~AFORMAT <int>,<dec>,<fmt>;',
    semantics: 'Définit le format de conversion pour l\'I/O et la conversion numérique->chaîne. Formats : EXP (exponential), DEC (decimal), HEX (hexadecimal), ASC (ascii). AUTOCR valide automatiquement les saisies.',
    example: '~FORMAT 1, 0, AUTOCR; ! Saisie sans touche entrée'
  },
  {
    id: 'MATH_ADVANCED',
    name: '~EXP / ~LOG / ~SQR / ~SQUARE',
    frenchName: 'MATH_AVANCEE',
    category: 'Mathématique',
    syntax: '~EXP; ~LOG; ~SQR; ~SQUARE;',
    semantics: 'Fonctions mathématiques avancées opérant sur le registre AR (Expo, Log, Racine, Carré).',
    example: '~LOAD 16\n~SQUARE ! AR = 256'
  },
  {
    id: 'ALGO_VECTORS',
    name: 'MATH / ACCH / ACCI / ACCD / ACSR / ACSL / ACCX / ACRC',
    frenchName: 'VECTEURS_ALGO_F50',
    category: 'Mathématique',
    syntax: 'MATH <pins>; ACCI <pins>; ACSR <pins>; ACCX <pins>; ACRC <pins>;',
    semantics: 'Commandes pour l\'accumulateur matériel 8-bits du module F50. ACCI (Inc), ACCD (Dec), ACSR/L (Shift), ACCX (Not), ACRC (Calcul CRC matériel).',
    example: 'ACCI 1; ! Incrémente l\'accumulateur matériel\nMATH 1/8; ! Les canaux suivent l\'accumulateur'
  },
  {
    id: 'MATH_CONVERSIONS',
    name: 'Conversions Run-time',
    frenchName: 'CONVERSIONS_TYPES',
    category: 'Mathématique',
    syntax: '~CALC <var_cible> = <var_source>;',
    semantics: 'VIVA convertit automatiquement les types lors de l\'assignation. Float -> Integer tronque la décimale. String -> Integer retourne 0 si non numérique. Integer -> String utilise ~AFORMAT.',
    example: 'DECLARE RUNTIME FLOAT F = 3.99;\nDECLARE RUNTIME INTEGER I;\n~CALC I = F; ! I vaudra 3'
  },
  {
    id: 'CALC',
    name: '~CALC',
    frenchName: 'CALCUL',
    category: 'Mathématique',
    syntax: '~CALC <variable> = <expression>;',
    semantics: 'Effectue des opérations arithmétiques et logiques.',
    example: '~CALC COMPTEUR = COMPTEUR + 1'
  },
  {
    id: 'MATH_FUNCTIONS',
    name: '~ABS / ~SQRT / ~SIN...',
    frenchName: 'FONCTIONS MATH',
    category: 'Mathématique',
    syntax: '~CALC <var> = ~ABS(<val>);',
    semantics: 'Fonctions mathématiques intégrées.',
    example: '~CALC R = ~SQRT(A^2 + B^2);'
  }
];
