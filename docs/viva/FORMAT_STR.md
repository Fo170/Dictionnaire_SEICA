# Mot-clef : ~FORMAT / ~AFORMAT

Ces commandes permettent de contrôler précisément la manière dont les valeurs des variables sont converties en texte pour l'affichage ou l'enregistrement.

## Syntaxe

```viva
~FORMAT <variable> "<chaine_de_format>";
~AFORMAT <variable> <type>;
```

### Types AFORMAT :
- `HEX` : Hexadécimal.
- `OCT` : Octal.
- `BIN` : Binaire.
- `DEC` : Décimal.

## Sémantique

- `~FORMAT` utilise une syntaxe proche du `printf` en C (ex: `%.2f` pour deux décimales).
- `~AFORMAT` change le mode de représentation par défaut d'une variable pour toutes les instructions `~WRITE` ou `~PRINT` suivantes.

## Exemples

### Formatage de tension
```viva
DECLARE RUNTIME FLOAT V = 5.0234;
~FORMAT V "%.2f V";
~WRITE V; ! Affiche "5.02 V"
```

### Affichage hexadécimal
```viva
DECLARE RUNTIME INTEGER DATA = 255;
~AFORMAT DATA HEX;
~WRITE DATA; ! Affiche "FF"
```
