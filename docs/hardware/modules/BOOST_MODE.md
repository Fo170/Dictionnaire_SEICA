# Mot-clef : ~BOOST_MODE

## Syntaxe
```viva
~BOOST_MODE <mode> <pinlist> ;
```

## Sémantique
Cette instruction est utilisée pour configurer le mode de fonctionnement des canaux numériques haute tension du module **F48H** (Booster).

## Modes disponibles
- **BYPASS** : Canaux connectés directement au module F40 (basse tension).
- **STATIC** : Canaux déconnectés du F40, utilisables en mode autonome (statique).
- **DYNAMIC** : Canaux amplifiés par la carte P300 (-30V à +30V).
- **OPEN** : Canaux déconnectés du récepteur système.
- **EXTERN** : Canaux connectés à un signal externe amplifié.
- **LI1 / LI2** : Canaux connectés aux lignes analogiques LI1 ou LI2.

## Exemple
```viva
! Configure les canaux 1 à 32 en mode dynamique haute tension
~BOOST_MODE DYNAMIC 1/32;
```
