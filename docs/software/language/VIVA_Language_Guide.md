# Guide du Langage VIVA (Static & Dynamic)

## Environnements de Programmation
Le langage VIVA s'exécute dans deux environnements distincts selon les ressources matérielles :

### 1. Environnement STATIQUE (`STATIC`)
- **Usage :** Initialisation, messages opérateur, pilotage manuel des instruments, gestion de l'interface graphique.
- **Exécution :** Gérée par le PC principal (Main PC).
- **Instructions :** Commencent généralement par `~` ou `&`.

### 2. Environnement DYNAMIQUE (`DYNAMIC` / `DMASTER`)
- **Usage :** Exécution de patterns de test à haute fréquence (temps réel).
- **Exécution :** Gérée par le contrôleur de module (DSP/DHF/F40).
- **Instructions :** Directives de compilateur (`@`) et patterns (`/`).

---

## Structure d'un fichier de test (.pat)
Un programme fonctionnel suit une hiérarchie précise :
1. **Directives Compilateur :** `@COMPILER ...`
2. **Déclaration du TIMING :** `TIMING ... ENDTIMING;`
3. **Déclarations d'objets :** `DECLARE CHANNEL`, `DECLARE GROUP`, `DECLARE VARIABLE`.
4. **Déclarations de Macros :** `@MACRO ... @ENDMACRO;`
5. **Déclarations de Sous-routines :** `~SUBR ... ~ENDSUBR;`
6. **Bloc Principal :** `START <nom> STATIC; ... ENDTEST;`

---

## Gestion des Flags d'Erreur
VIVA utilise deux types de drapeaux pour le contrôle du flux :
- **Partial Error Flag :** Activé par l'échec du test courant. Utilisé pour les branchements (`~BRANCH ONERROR`).
- **Global Error Flag :** Activé dès qu'une erreur survient. Détermine le résultat final (PASS/FAIL) du programme.

![Hiérarchie VIVA](../../images/software/viva_programming_hierarchy.svg)
