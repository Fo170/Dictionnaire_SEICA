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
    syntax: '~IF ( <condition> ) ; ... [~ELSE;] ... ~ENDIF ;',
    semantics: 'Structure conditionnelle d\'exécution.',
    example: '~IF (A > 10) ;\n  ~WRITE "OK";\n~ENDIF'
  },
  {
    id: 'FOR_ENDFOR',
    name: '~FOR / ~ENDFOR',
    frenchName: 'BOUCLE_POUR',
    category: 'Contrôle',
    syntax: '~FOR <var> = <deb> TO <fin> [STEP <pas>];',
    semantics: 'Boucle de répétition Run-time.',
    example: '~FOR I = 1 TO 10;\n  ~WRITE I;\n~ENDFOR'
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
    semantics: 'Définit l\'action à effectuer lors d\'un événement (ERROR, BREAK, TIMEOUT, etc.).',
    example: '~ON ERROR CALL GESTION_ERREUR;'
  },
  {
    id: 'COMP_VAR',
    name: '~COMP',
    frenchName: 'COMPARER',
    category: 'Contrôle',
    syntax: '~COMP <var> [LO=<val>] [HI=<val>] [ONERROR <lab>] [ONPASS <lab>];',
    semantics: 'Compare une variable avec des limites et effectue un saut conditionnel.',
    example: '~COMP AR LO=4.8 HI=5.2 ONERROR FAIL_LABEL;'
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
    syntax: '~SWITCH <var>; ~CASE <val>; ... ~ENDCASE;',
    semantics: 'Structure de branchement multiple Run-time.',
    example: '~SWITCH MODE;\n  ~CASE 1;\n    ~WRITE "INIT";\n  ~CASE 2;\n    ~WRITE "RUN";\n~ENDCASE;'
  },
  {
    id: 'BRANCH_GOTO',
    name: '~BRANCH',
    frenchName: 'SAUT',
    category: 'Contrôle',
    syntax: '~BRANCH [ONERROR|ONPASS] <label>;',
    semantics: 'Exécute un saut vers un label, éventuellement conditionné par les flags d\'erreur.',
    example: '~BRANCH ONERROR ECHEC_TEST;'
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
    frenchName: 'MESURE TENSION',
    category: 'Instrument',
    syntax: '~MEASURE Voltage TYPE=<opt> RANGE=<val> ON=<signal>;',
    semantics: 'Mesure une tension sur un point de test.',
    example: '~MEASURE Voltage TYPE=rms RANGE=10V ON=ch1'
  },
  {
    id: 'ATEST',
    name: '~ATEST',
    frenchName: 'TEST_ANA',
    category: 'Instrument',
    syntax: '~ATEST <var> [LO=<val>] [HI=<val>];',
    semantics: 'Compare une variable avec des limites.',
    example: '~ATEST testValue NAME="VCC" LO=4.5 HI=5.5'
  },
  {
    id: 'SET_PW_ALL',
    name: '~SET PW ALL',
    frenchName: 'ALIM_TOUTES',
    category: 'Instrument',
    syntax: '~SET PW ALL [ON|OFF];',
    semantics: 'Active/désactive toutes les alimentations.',
    example: '~SET PW ALL ON;'
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
    syntax: '~SET DIGIPLEX [PULL UP|PULL DOWN|LOAD|HOLD] <params>;',
    semantics: 'Configure les ressources numériques sur canaux analogiques (Option Digiplex).',
    example: '~SET DIGIPLEX PULL UP 1K;\n~SET DIGIPLEX LOAD V=4.5 I=0.2;'
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
    id: 'TIMING_PHASE',
    name: 'PHASE',
    frenchName: 'PHASE',
    category: 'Timing',
    syntax: 'PHASE<n> <start> <end>;',
    semantics: 'Définit une fenêtre temporelle active pour les signaux de type Pulse.',
    example: 'PHASE1 3C 7C'
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
    id: 'ALGO_VECTORS',
    name: 'MATH / ACCH / ACCI / ACRC',
    frenchName: 'VECTEURS_ALGO',
    category: 'Mathématique',
    syntax: 'MATH <pins>; ACCI <pins>; ACRC <pins>;',
    semantics: 'Commandes pour les vecteurs algorithmiques et l\'accumulateur matériel F50.',
    example: 'MATH 1/8; ! Canal suit l\'accumulateur\nACCI 1; ! Incrémente l\'accumulateur'
  },
  {
    id: 'MATH_ADVANCED',
    name: '~EXP / ~LOG / ~SQR',
    frenchName: 'MATH_AVANCEE',
    category: 'Mathématique',
    syntax: '~EXP; ~LOG; ~SQR;',
    semantics: 'Fonctions mathématiques avancées opérant sur le registre AR.',
    example: '~LOAD 2\n~EXP ! AR = e^2'
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
