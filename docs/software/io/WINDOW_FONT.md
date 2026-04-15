# Mot-clef : ~WINDOW / ~FONT

Ces commandes permettent de personnaliser l'interface utilisateur sur le terminal de contrôle.

## Syntaxe

```viva
~WINDOW <n> <x> <y> <largeur> <hauteur>;
~FONT "<nom_police>" <taille>;
```

- `<n>` : Numéro de la fenêtre (1 à 8).
- `<x>, <y>` : Coordonnées du coin supérieur gauche.
- `<largeur>, <hauteur>` : Dimensions en caractères.

## Sémantique

Viva permet de diviser l'écran en plusieurs zones indépendantes. Par exemple, une fenêtre pour les logs de test, une pour les erreurs et une pour les instructions à l'opérateur.

## Exemples

### Création d'une interface multi-zones
```viva
! Fenêtre principale
~WINDOW 1 0 0 80 20;
! Fenêtre de statut en bas
~WINDOW 2 0 21 80 4;

~WINDOW 1; ! Active la fenêtre 1
~WRITE "DÉMARRAGE DU TEST...";

~WINDOW 2; ! Active la fenêtre 2
~WRITE "STATUT : EN COURS";
```
