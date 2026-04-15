# Mot-clef : ~FILE (Gestion de fichiers)

Le mot-clef `~FILE` (ou `~FILE1` à `~FILE7`) permet de manipuler des fichiers sur le disque pour enregistrer des résultats ou lire des paramètres.

## Syntaxe

```viva
~FILE N=<exp> <mode> "<nom_fichier>";
~FILE N=<exp> WRITE <valeur>;
~FILE N=<exp> READ <variable>;
~FILE N=<exp> CLOSE;
```

### Modes d'ouverture :
- `OPEN_READ` : Ouvre en lecture seule.
- `OPEN_WRITE` : Crée ou écrase un fichier pour l'écriture.
- `OPEN_APPEND` : Ouvre pour ajouter du contenu à la fin.
- `REMOVE` : Supprime le fichier du disque.

## Sémantique

Viva permet de gérer jusqu'à 19 fichiers simultanément (7 pour la syntaxe de compatibilité `~FILEn`). Les fichiers sont par défaut créés dans le répertoire de la carte de test.

## Exemples

### Écriture de résultats
```viva
DECLARE RUNTIME FLOAT TENSION;
~FILE1 OPEN_WRITE "LOG_TEST.TXT";
~FILE1 WRITE "Resultat Tension : ";
~FILE1 WRITE TENSION;
~FILE1 CLOSE;
```

### Lecture de configuration
```viva
DECLARE RUNTIME STRING CONFIG_DATA;
~FILE2 OPEN_READ "CONFIG.DAT";
~FILE2 READ CONFIG_DATA;
~FILE2 CLOSE;
```
