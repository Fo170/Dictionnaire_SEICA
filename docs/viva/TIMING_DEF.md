# Mot-clef : PERIOD / PHASE / STROBE (Timings)

Ces instructions définissent la structure temporelle d'un cycle de test numérique (Burst). Elles sont essentielles pour synchroniser le testeur avec le composant testé (DUT).

## Syntaxe

```viva
PERIOD <valeur_temps>;
PHASE <n> <temps_debut> <temps_fin>;
STROBE <n> <temps_capture>;
```

- `PERIOD` : Définit la durée totale d'un cycle (ex: 100ns pour 10MHz).
- `PHASE` : Définit quand un signal de sortie (Drive) doit être actif dans le cycle.
- `STROBE` : Définit le moment précis où le testeur doit lire l'état de la broche (Capture).

## Sémantique

Viva supporte jusqu'à 9 phases et 9 strobes par cycle. Ces paramètres permettent de simuler des protocoles complexes comme le SPI, l'I2C ou des bus mémoires avec des contraintes de setup/hold précises.

## Exemples

### Configuration d'un cycle de 1MHz
```viva
PERIOD 1us;
PHASE 1 100ns 600ns; ! Signal actif de 10% à 60% du cycle
STROBE 1 800ns;      ! Capture la réponse à 80% du cycle
```

### Utilisation dans un PATTERN
```viva
PATTERN TEST_SEQ;
  ! Format : <canal> <valeur> <phase_ou_strobe>
  CLK 1 PH1;
  DATA 1 PH1;
  MISO 0 ST1;
ENDPATTERN;
```
