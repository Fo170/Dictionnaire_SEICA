# Mot-clef : ~VBS (Scripts VBScript)

Le mot-clef `~VBS` permet d'exécuter des scripts VBScript externes et d'échanger des données entre Viva et le script.

## Syntaxe

```viva
~VBS "<chemin_script>" "<nom_procedure>" [<arguments...>];
```

## Sémantique

Contrairement à `~API` qui appelle des fonctions compilées, `~VBS` interprète des fichiers texte `.VBS`. C'est idéal pour des manipulations de chaînes complexes ou des interactions avec Excel/Word via COM.

## Exemples

### Appel d'un script de calcul
```viva
DECLARE RUNTIME FLOAT RESULTAT;
! Le script calcule une valeur et la stocke dans RESULTAT
~VBS "C:\VIVA\SCRIPTS\CALCUL.VBS" "CalculerMoyenne" RESULTAT;
~WRITE "Moyenne : ", RESULTAT;
```

### Contenu type du fichier .VBS
```vbscript
' Fichier CALCUL.VBS
Sub CalculerMoyenne(ByRef res)
    res = (10.5 + 12.4) / 2
End Sub
```
