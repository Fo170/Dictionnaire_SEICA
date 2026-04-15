# L'OPTION DIGIPLEX (DIGItal multiPLEXer)
## Guide de Référence pour le Test Numérique sur Canaux Analogiques

L'option **DIGIPLEX** est une technique Seica permettant d'effectuer des tests numériques en utilisant les 4 canaux numériques de l'ACLAM, multiplexés via le scanner (systèmes à lit de clous) ou via le SCAFP et les sondes (systèmes Flying Prober).

---

## 1. CARACTÉRISTIQUES PRINCIPALES

- **Multiplexage :** Utilise les canaux analogiques du scanner comme des canaux numériques standards.
- **Langage VL :** Compatible avec le langage numérique VL et la génération de patterns ICT.
- **Edge Control :** Commutation via les canaux numériques plutôt que par relais pour éviter les oscillations d'état.
- **Auto-correction :** Détection automatique des pins non connectées, liées ou à la masse.
- **Mode Mixte :** Supporte l'utilisation simultanée de différents types de canaux (F50, MIS32, VBN, DIGIPLEX, FLY).
- **Test Analogique Intégré :** Possibilité d'insérer un test analogique (1 ligne) pendant un test numérique (ex: test de convertisseurs DAC/ADC).
- **Résistances intégrées :** Insertion automatique de Pull-up/Pull-down sur les sorties (test Open Collector).
- **Charge Programmable :** Insertion d'une charge programmable ($\pm 100V$, 0-500mA) pour les tests de fan-out.

### Limitations
- Ne peut pas être utilisé en mode **dynamique**.
- Courant limite de **400mA** max en back-driving.

---

## 2. CONFIGURATION ET ACTIVATION

### Activation logicielle
1. Dans **Board Options** -> **Functional Settings**.
2. Régler **Enable DIGIPLEX (Y/N)** sur **Y**.

### Assignation de Macro
Dans l'environnement de programmation, la fonction **DIGITAL** doit être associée à la macro **CLUSTER_POWER**.
*Note : Sur les versions antérieures à 3.0, la macro était simplement CLUSTER.*

---

## 3. STRUCTURE DES BIBLIOTHÈQUES (.LIB)

Les bibliothèques sont stockées dans le dossier `VivaBoard`. Les fichiers par défaut sont :
- `S2074.LIB` : Famille TTL 74xx.
- `S2010.LIB` : Famille CMOS 40xx.
- `S20MIX.LIB` : Composants mixtes.
- `S20ALIAS` : Fichier gérant les alias (ex: 74ACTQ00 pointant vers 7400).

### Syntaxe des fichiers .LIB
- **#CompName(Comm, Pin1, Pin2, ...);** : Définition du composant et de sa liste de pins (max 20 caractères pour le nom).
- **!CompType, SectionNr, CompPinNr;** : Type (A=Analog, D=Digital, X=Not Defined).
- ***PI(PinInformation);** : Définit les pins comme Entrée (**I**) ou Sortie (**O**).
- ***TY(PinType);** : Définit les pins spéciales (**G**=GND, **V**=VCC).
- **!SectionPinNr, InPinNr, OutPinNr, BidirPinNr, EnablePinNr, Pin1, ...;** : Structure détaillée d'une section du composant.
- **@C(InHVal, InLVal, OutHVal, OutLVal, ...);** : Niveaux de tension pour les états logiques.

### Table de Vérité (@L)
Chaque ligne commençant par `@L` définit une étape du test :
- `H` / `L` : Force l'entrée à l'état Haut / Bas.
- `h` / `l` : Force l'état Haut / Bas (ignoré en cas d'erreur de génération).
- `T` : Signal d'horloge (Clock).
- `.` : Haute Impédance (High Impedance).
- `1` / `0` : Attend une sortie à l'état Haut / Bas.

---

## 4. COMMANDES AVANCÉES (RUNTIME)

Ces commandes permettent de configurer dynamiquement les ressources DIGIPLEX pendant le test :

### Pull-Up / Pull-Down
```viva
~SET DIGIPLEX PULL UP 1K;    ! Force une sortie haute (Open Collector)
~SET DIGIPLEX PULL DOWN 100; ! Force une sortie basse (Open Drain)
```

### Charge Programmable (Fan-out)
```viva
~SET DIGIPLEX LOAD V=4.5 I=0.2; ! Charge programmable de 0 à 100V / 500mA
```

### Mode Mixte (Hold)
```viva
~SET DIGIPLEX HOLD L3; ! Garde la ligne sélectionnée libre pour un canal analogique
```
