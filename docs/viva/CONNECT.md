# Mot-clef : ~CONNECT (Matrice de commutation)

Le mot-clef `~CONNECT` gère la matrice de commutation (scanner) du système pour relier les points de test aux instruments.

## Syntaxe

```viva
~CONNECT <point_test> TO <ressource> ;
~DISCONNECT <point_test> FROM <ressource> ;
~CLEAR SCANNER ; ! Déconnecte tout
```

- `<point_test>` : Canal ou signal déclaré.
- `<ressource>` : Instrument interne (ACL_CH1, LAM, BUS_A, etc.).

## Sémantique

Cette commande contrôle les relais physiques. Il est important de noter que `~MEASURE` gère souvent les connexions automatiquement, mais `~CONNECT` est nécessaire pour des configurations personnalisées ou des injections de signaux externes.

## Exemples

### Connexion manuelle pour oscilloscope
```viva
DECLARE CHANNEL TP_SIGNAL = 45;
~CONNECT TP_SIGNAL TO BUS_A; ! Relie le point 45 au bus interne A
~PAUSE "Branchez l'oscilloscope sur la sortie BUS_A";
```

### Nettoyage
```viva
~CLEAR SCANNER; ! Ouvre tous les relais pour isoler la carte
```
