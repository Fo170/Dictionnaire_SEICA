# Mot-clef : ~SWITCH / ~CASE

Le mot-clef `~SWITCH` permet de réaliser des branchements multiples en fonction de la valeur d'une variable.

## Syntaxe

```viva
~SWITCH <variable> [CONTINUE] ;
  ~CASE <valeur> ;
    <instructions>
  ~CASE from <min> to <max> ;
    <instructions>
  ~CASE NOT <valeur> ;
    <instructions>
  ~CASE DEFAULT ;
    <instructions>
~ENDCASE ;
```

## Sémantique

- Par défaut, dès qu'un cas correspond, le code est exécuté et le système sort du `~SWITCH`.
- L'option `CONTINUE` force l'évaluation de tous les cas suivants même si une correspondance a été trouvée.
- `~CASE DEFAULT` est exécuté si aucun autre cas ne correspond.

## Exemples

### Sélection simple
```viva
~SWITCH CODE_ERREUR;
  ~CASE 0;
    ~WRITE "Succès";
  ~CASE 1;
    ~WRITE "Erreur Tension";
  ~CASE DEFAULT;
    ~WRITE "Erreur Inconnue";
~ENDCASE;
```

### Plages de valeurs
```viva
~SWITCH TENSION;
  ~CASE from 0 to 5;
    ~WRITE "Niveau Bas";
  ~CASE from 6 to 12;
    ~WRITE "Niveau Haut";
~ENDCASE;
```
