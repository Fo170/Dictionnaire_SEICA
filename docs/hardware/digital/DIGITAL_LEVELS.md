# Mot-clef : ~IH / ~IL / ~OH / ~OL (Niveaux logiques)

Ces commandes sont les briques de base du test numérique statique. Elles permettent de forcer ou de vérifier l'état logique des broches.

## Syntaxe

```viva
~IH <pinlist>; ! Force à l'état HAUT (Drive High)
~IL <pinlist>; ! Force à l'état BAS (Drive Low)
~OH <pinlist>; ! Vérifie l'état HAUT (Sense High)
~OL <pinlist>; ! Vérifie l'état BAS (Sense Low)
```

## Sémantique

- `~IH` / `~IL` : Le testeur agit comme une source de tension (VOH/VOL).
- `~OH` / `~OL` : Le testeur agit comme un comparateur. Si l'état lu ne correspond pas à l'état attendu, un flag d'erreur numérique est levé.

## Exemples

### Test d'une porte inverseuse
```viva
DECLARE CHANNEL ENTREE=1, SORTIE=2;

~IL ENTREE;    ! On met l'entrée à 0
~OH SORTIE;    ! On vérifie que la sortie est à 1

~IH ENTREE;    ! On met l'entrée à 1
~OL SORTIE;    ! On vérifie que la sortie est à 0
```
