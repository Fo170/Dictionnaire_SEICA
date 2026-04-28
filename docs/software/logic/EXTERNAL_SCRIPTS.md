# Intégration de Scripts Externes

Le langage VIVA permet d'étendre ses capacités en appelant des scripts VBScript ou des instruments virtuels Labview.

## ~VBS (VBScript)
### Syntaxe
```viva
~VBS "<chemin_fichier.vbs>" "<nom_procedure>" <params> ;
```
### Sémantique
Appelle une procédure ou fonction définie dans un fichier `.vbs`. 
- **Passage par référence** : Utilisez une astérisque (`*`) devant le type pour que VIVA récupère la valeur modifiée par le script.
- **Types supportés** : STRING, INT, DOUBLE.

### Exemple
```viva
! Appel simple
~VBS "C:\scripts\db.vbs" "InitConnection" ;

! Passage par référence (récupère le résultat dans RESULT)
~VBS "C:\scripts\db.vbs" "GetInfo" DOUBLE * RESULT ;
```

## ~VI (Labview)
### Syntaxe
```viva
~VI "<chemin_fichier.vi>" PAR="<nom>" VALUE=<valeur> ;
```
### Sémantique
Pilote un instrument virtuel Labview. Chaque paramètre est identifié par son nom (`PAR` ou `NAME`) et sa valeur (`VALUE`).

### Exemple
```viva
! Envoie une échelle au scope Labview
~VI "C:\Labview\DSO.vi" NAME="Scale" VALUE=2.5 ;
```
