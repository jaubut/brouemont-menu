# broue — le menu du Brouemont

Concept de refonte du menu en ligne de la [Microbrasserie Le Brouemont](https://www.lebrouemont.com) (Bromont, QC), présenté comme une app mobile.

**Non officiel, sans affiliation** — réalisé pour un défi de design entre amis.

## Design

Langage visuel inspiré de l'app iOS **Bond** (via Mobbin) : fond quasi blanc, wordmark minuscule ultra-gras (Baloo 2), cartes polaroid inclinées pour les sections, pilule de recherche, listes iOS groupées, tab bar minimaliste à 3 onglets avec safe-area.

Données réelles : menu complet du restaurant + les ~20 bières maison (styles et % d'alcool), chaque bière portant une pastille couleur fidèle à son style.

## Stack

Statique — HTML / CSS / JS vanille, aucune dépendance, aucune build step.

```
index.html      structure + tab bar + vues
css/app.css     design tokens + composants
js/app.js       données du menu + rendu + recherche + onglets
fonts/          Baloo 2 (OFL), auto-hébergée
```

Servir localement : `python3 -m http.server 4599`
