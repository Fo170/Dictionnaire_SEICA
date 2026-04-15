# Mot-clef : ~SET VBNPOD (Boundary Scan)

Le mot-clef `~SET VBNPOD` configure l'interface JTAG/Boundary Scan.

## Syntaxe

```viva
~SET VBNPOD <n> FR=<freq> OL=<val> OH=<val> IH=<val> IL=<val>
  TDI=<ch> TMS=<ch> CLK=<ch> TDO=<ch> [TRST=<ch>] ;
```

- `<n>` : Index de la chaîne Boundary Scan.
- `FR` : Fréquence d'horloge TCK.
- `TDI, TMS, CLK, TDO` : Canaux physiques utilisés pour les signaux JTAG.

## Sémantique

Cette commande initialise le contrôleur Boundary Scan. Une fois configurée, les broches des composants de la chaîne peuvent être manipulées comme des canaux numériques standards via leurs noms BSDL.

## Exemples

### Configuration d'une chaîne JTAG
```viva
~SET VBNPOD 1 FR=1000000 OL=0.4 OH=2.4 IH=2.0 IL=0.8
  TDI=10 TMS=11 CLK=12 TDO=13;
```

### Utilisation après configuration
```viva
! On peut maintenant tester les pins du composant U1 défini dans le .DGN
~OH U1_ADD16; ! Teste si la broche ADD16 de U1 est à l'état haut
```
