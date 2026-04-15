# Mot-clef : ~READ_RAM (Capture numérique)

Le mot-clef `~READ_RAM` permet de récupérer les données capturées dans la mémoire locale des drivers numériques pendant l'exécution d'un burst ou d'un pattern.

## Syntaxe

```viva
~READ_RAM <liste_canaux> INTO=<tableau> [START=<index>] [COUNT=<n>];
```

- `<liste_canaux>` : Canaux ou groupes dont on veut lire la RAM.
- `<tableau>` : Tableau `RUNTIME ARRAY` de destination.
- `START` / `COUNT` : Permet de lire une portion spécifique de la mémoire.

## Sémantique

Chaque driver numérique dispose d'une mémoire RAM qui enregistre l'état du canal à chaque cycle d'horloge. `~READ_RAM` transfère ces données vers le programme Viva pour analyse (par exemple pour vérifier une séquence de communication série).

## Exemples

### Capture et analyse
```viva
DECLARE RUNTIME INTEGER ARRAY CAPTURE[1024];
DECLARE CHANNEL MISO = 5;

! ... exécution du burst ...

~READ_RAM MISO INTO=CAPTURE;
~IF (CAPTURE[0] == 1);
  ~WRITE "Premier bit reçu est HAUT";
~ENDIF;
```
