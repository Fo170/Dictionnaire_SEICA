# Macros de Test de Semi-conducteurs et Puissance

Ces macros gèrent les composants actifs et les séquences d'alimentation.

## DIODE / ZENER
Vérification de la tension de seuil et de la zener.
- **Macros :** `DIODE`, `DIODE_INV`, `ZENER`, `ZENER_DIR`.
- **Paramètres :** Value (V), TolPos, TolNeg, Anode, Cathode.
- **Modes :** Direct ou Invert (pour tester la polarité).

## TRANSISTOR (BJT / MOSFET)
Test de commutation (Saturation / Cut-off).
- **Paramètres :** Technology (NPN, PNP, NMOS, PMOS), ValueON, ValueOFF, Emitter/Source, Base/Gate, Collector/Drain.
- **Note :** La fonction "Transistor" utilise souvent les macros DIODE en complément pour vérifier les jonctions.

## POWER / POWER_CHECK
Gestion des alimentations UUT.
- **POWER :** Active (`PowerOn`) ou désactive (`PowerOff`) les unités PW1-PW8.
- **Paramètres :** VOLT, CURRENT, DELAY, SENSE, EXTINT.
- **POWER_CHECK :** Vérifie la présence d'une tension spécifique sur un point de l'UUT après la mise sous tension.

## SOLD (Brasage Laser)
Paramètres avancées pour le système de brasage laser "DONUT".
- **Phases :** Pre-heat, Soldering, Reflow.
- **Paramètres :** TempGradient, SoldTemp, WireLength, WireSpeed, AngleRotation, LaserID.
