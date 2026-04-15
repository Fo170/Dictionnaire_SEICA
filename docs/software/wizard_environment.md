# Environnement Wizard (Assistant)

L'environnement Wizard de VIVA organise le développement d'un programme de test en un processus structuré en 3 étapes : **PREPARE**, **VERIFY** et **TEST**.

## 1. Étape PREPARE
Cette étape regroupe les activités de configuration initiale :
- **IMPORT DATA :** Chargement des données CAD et de la nomenclature (BOM).
- **EDIT DATA :** Modification des caractéristiques physiques de l'UUT (testabilité, forme des pastilles, diamètres).
- **CREATE PROGRAM :** Sélection des tests à exécuter et génération automatique du programme.
- **MULTIPLY BOARD :** Reproduction du layout pour les cartes en panneaux (multi-images).

## 2. Étape VERIFY
Cette étape permet de valider le programme avant la production :
- **PROGRAM SETUP :** Alignement des coordonnées physiques (points de référence, markers, codes-barres).
- **VERIFY PROGRAM :** Débogage et optimisation du programme à l'aide d'outils interactifs.

## 3. Étape TEST
- **RUN PROGRAM :** Exécution du test en environnement de production.

## Détails de l'Importation de Données
L'importation peut se faire via plusieurs onglets :
- **CAD Tab :** Supporte divers formats (SEICA, Mentor, Pcad, Protel, Cadif, Cadence, Gencad, IPC-D-356A).
- **BOM Tab :** Importation de la liste des composants pour enrichir les données de test.
- **PDF Tab :** Importation de schémas au format PDF pour référence visuelle.

![Flux de préparation du programme](../../images/software/viva_program_preparation_flow.svg)
