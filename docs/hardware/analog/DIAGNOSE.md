# Mot-clef : DIAGNOSE-NODE

Le bloc `DIAGNOSE-NODE` permet de définir des procédures de dépannage spécifiques pour chaque nœud (piste) de la carte électronique.

## Syntaxe

```viva
DIAGNOSE-NODE "<nom_du_noeud>";
  <instructions_de_guidage>
ENDDIAGNOSE;
```

## Sémantique

Lorsqu'un test échoue sur un nœud, le système de diagnostic de Viva peut appeler automatiquement ce bloc. Les instructions à l'intérieur servent généralement à guider l'opérateur (via `~WRITE` ou `~MSG`) pour vérifier des composants spécifiques ou effectuer des mesures manuelles.

## Exemples

### Diagnostic d'une alimentation
```viva
DIAGNOSE-NODE "VCC_3V3";
  ~WRITE "ÉCHEC TENSION 3.3V";
  ~WRITE "Vérifiez le régulateur U5 et le condensateur C22";
  ~PAUSE "Appuyez sur une touche après vérification";
ENDDIAGNOSE;
```
