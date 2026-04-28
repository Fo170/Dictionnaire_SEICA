# Boundary Scan (JTAG)

Le module Boundary Scan permet de tester les composants compatibles IEEE 1149.1 en utilisant leurs broches internes comme des canaux numériques virtuels.

## Déclaration de la chaîne
L'instruction `DECLARE BSCAN` définit la structure de la chaîne via un fichier `.bss` (contenant la liste des fichiers BSDL).

### Syntaxe
```viva
DECLARE BSCAN NETLIST=<nom_bss> <composant1>, <composant2>... ;
```

## Configuration du POD
L'instruction `~SET VBNPOD` configure le hardware physique utilisé pour injecter les signaux JTAG.

### Syntaxe
```viva
~SET VBNPOD <n> FR=<freq> TDI=<canal> TMS=<canal> CLK=<canal> TDO=<canal> ;
```

## Commandes de Test
- **~TEST_VBN <type>** : Exécute un test automatique (BYPASS, IDCODE, USERCODE).
- **~READ_VBN <var> [BSDL] <type>** : Lit le résultat d'un scan dans une variable.

## Pins Virtuelles
Une fois la chaîne configurée, les broches des composants sont accessibles via leur nom :
```viva
IH U1_ADD16 ; ! Force un niveau haut sur la pin ADD16 de U1
OL U1_DAT03 ; ! Vérifie le niveau bas
```
