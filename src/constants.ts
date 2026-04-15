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
    id: 'CALCOLATE_PRE',
    name: '@CALCOLATE',
    frenchName: 'CALCUL_PRE',
    category: 'Pré-processeur',
    syntax: '@CALCOLATE <var> = <expression>;',
    semantics: 'Effectue des calculs arithmétiques ou logiques pendant la compilation.',
    example: '@CALCOLATE VAR = (56-5*(2/4)&0X0F|0X50);'
  },
  {
    id: 'GRAY_PRE',
    name: '@GRAY',
    frenchName: 'CODE_GRAY',
    category: 'Pré-processeur',
    syntax: '@GRAY <var> = <expression>;',
    semantics: 'Calcule une valeur et la convertit en code Gray.',
    example: '@GRAY VAR = 10;'
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
