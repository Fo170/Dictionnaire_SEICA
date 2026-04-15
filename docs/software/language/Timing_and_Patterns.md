# Timing et Patterns (Synchronisation Haute Vitesse)

## Le Timing du Pattern
Le timing définit comment les stimuli sont appliqués à l'UUT pendant la phase exécutive d'un pattern.

### Paramètres de Temps Clés :
- **PERIOD :** Durée totale de la phase exécutive (application des stimuli).
- **DEAD :** Temps minimal pour la programmation des canaux avant la phase opérationnelle.
- **OVERLAY :** Temps de programmation des canaux *pendant* la phase exécutive pour optimiser la vitesse.
- **PHASE (1-9) :** Instants précis de commutation des drivers à l'intérieur de la période.
- **ASSERT :** Instant où tous les canaux programmés par `AL`, `AH`, `AS` commutent simultanément.
- **STROBE :** Instant précis où les réponses de l'UUT sont lues sur les capteurs (sensors).

![Diagramme de Timing VIVA](../../images/software/viva_timing_diagram.svg)

---

## Spécificités du Module F40
Le module F40 permet une synchronisation extrêmement fine (résolution de 20ns) :
- Jusqu'à **9 phases** et **9 strobes** par programme.
- **Strobe Window :** Possibilité de définir une fenêtre de lecture continue entre deux instants.
- **Return to 0/1 (R0/R1) :** Mode impulsionnel automatique où le canal revient à son état initial après un temps défini par une phase.

---

## Contrôle du Flux Dynamique
- **/ JUMP :** Saut vers un label à l'intérieur d'un pattern.
- **/ REPEAT :** Répétition d'un pattern un nombre défini de fois (jusqu'à 65000).
- **BEGINLOOP / ENDLOOP :** Boucles imbriquées (jusqu'à 3 niveaux) pour les séquences répétitives.
