# Outils et Méthodes VNL (VIVA Native Language)

## Présentation
Le VNL est le langage graphique utilisé dans l'environnement de programmation (CTRL+P) pour construire des macros. Il repose sur l'utilisation d'**Outils** (Tools) qui exposent des **Méthodes** (Methods).

![Hiérarchie VIVA](../../images/software/viva_programming_hierarchy.svg)

---

## Outil TEST
L'outil le plus utilisé pour la gestion des paramètres et de l'affichage.

### Méthodes principales :
- `TEST.Clear()` : Réinitialise l'affichage analogique-numérique.
- `TEST.Set(unit, low, meas, high)` : Configure les échelles et les limites de l'indicateur.
- `TEST.Measure(value, error, view)` : Affiche la valeur mesurée et gère le statut Pass/Fail.
- `TEST.GetParN / GetParS / GetParP` : Récupère la valeur d'un paramètre (Number, String, Pinlist).
- `TEST.SetParN / SetParS / SetParP` : Assigne une valeur à un paramètre.
- `TEST.WriteMessage(msg)` : Affiche un message dans la zone "Info".
- `TEST.WriteReport(msg)` : Ajoute une ligne au rapport de test.

---

## Outil EXPRESSION
Utilisé pour les calculs et assignations de variables.

### Méthode :
- `Expression.Assign(Var, Expression)` : Équivalent à `Var = Expression`. Supporte les opérateurs arithmétiques (+, -, *, /) et logiques (==, !=, >, <).

---

## Outil VBS (Visual Basic Script)
Permet d'exécuter du code scripté complexe.

### Méthodes :
- `VBS.Clear()` : Initialise l'environnement VBS.
- `VBS.Execute(instruction)` : Exécute une ligne de code VBS. Utile pour les boîtes de dialogue (`MsgBox`) ou les calculs avancés.

---

## Outil SYSTEM
Gère les fonctions système globales et l'intégration des anciens programmes S20Win.

### Méthodes notables :
- `SYSTEM.Cluster(name, file, flags)` : Exécute un cluster fonctionnel (.pat).
- `SYSTEM.Autolearn()` : Lance la procédure d'apprentissage automatique.
- `SYSTEM.AutoAdjustment()` : Lance l'ajustement automatique des limites.
