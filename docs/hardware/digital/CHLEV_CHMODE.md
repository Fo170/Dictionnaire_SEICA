# Mot-clef : ~CHLEV / ~CHMODE

Ces commandes permettent de configurer précisément le comportement électrique des drivers numériques du système.

## Syntaxe

```viva
~CHLEV <pinlist> VIL=<v> VIH=<v> VOL=<v> VOH=<v>;
~CHMODE <pinlist> <mode>;
```

### Paramètres CHLEV :
- `VIL` / `VIH` : Seuils d'entrée (Bas / Haut) pour les comparateurs.
- `VOL` / `VOH` : Niveaux de sortie (Bas / Haut) pour les drivers.

### Modes CHMODE :
- `PUSH_PULL` : Sortie active à 0 et 1.
- `OPEN_DRAIN` : Sortie active à 0, haute impédance à 1.
- `PULL_UP` / `PULL_DOWN` : Active les résistances internes.

## Sémantique

Par défaut, les canaux sont configurés en niveaux TTL (0V / 5V). `~CHLEV` est indispensable pour tester des cartes utilisant des technologies différentes (CMOS 3.3V, RS232, etc.).

## Exemples

### Configuration CMOS 3.3V
```viva
DECLARE GROUP BUS = 1, 2, 3, 4;
~CHLEV BUS VIL=0.8 VIH=2.0 VOL=0.0 VOH=3.3;
```

### Configuration d'un bus I2C
```viva
DECLARE CHANNEL SDA=10, SCL=11;
~CHMODE SDA, SCL OPEN_DRAIN;
~PULL SDA, SCL UP 4.7K;
```
