# Méthodes des Drivers VIVA

Les drivers propriétaires SEICA exposent des méthodes standard pour le pilotage des instruments complexes.

## Méthodes Standard
- **~INIT** : Initialise le driver et l'instrument associé.
- **~TERM** : Termine proprement la session du driver.
- **~OPEN / ~CLOSE** : Ouvre ou ferme la communication avec l'instrument.
- **~RESET** : Réinitialise l'instrument à son état par défaut.
- **~SEND / ~RECEIVE** : Envoie ou reçoit des données brutes.
- **~DISPLAY** : Affiche l'interface graphique (panel) du driver.
- **~DRIVER** : Accès direct aux fonctions bas niveau du driver.

## Syntaxe Générale
```viva
~<METHODE> "<nom_du_driver>" [paramètres...];
```

## Exemple
```viva
START TEST_IEEE STATIC;
  ~INIT "GPIB_DEV1";
  ~SEND "GPIB_DEV1" "*IDN?";
  ~RECEIVE "GPIB_DEV1" INTO=STR_VAR;
  ~WRITE "Instrument ID: ", STR_VAR;
  ~TERM "GPIB_DEV1";
ENDTEST;
```
