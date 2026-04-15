# Mot-clef : ~MSG / ~COMP

Ces commandes facilitent l'interaction avec l'utilisateur et la comparaison rapide de données.

## Syntaxe

```viva
~MSG "<message>";
~COMP <variable1> <variable2>;
```

## Sémantique

- `~MSG` affiche une boîte de dialogue modale au centre de l'écran. L'exécution est suspendue jusqu'à ce que l'utilisateur clique sur "OK".
- `~COMP` compare deux variables. Si elles sont différentes, le flag d'erreur global `ERR` est mis à 1. C'est une alternative rapide à `~IF` pour des tests de conformité simples.

## Exemples

### Instruction opérateur
```viva
~MSG "Veuillez connecter le câble JTAG puis cliquez sur OK";
```

### Comparaison de signature
```viva
DECLARE RUNTIME INTEGER SIG_LUE, SIG_ATTENDUE=0XABCD;
~RG DATA_BUS INTO=SIG_LUE;
~COMP SIG_LUE SIG_ATTENDUE;
~IF (ERR == 1);
  ~WRITE "Signature incorrecte !";
~ENDIF;
```
