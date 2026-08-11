# broue — le menu du Brouemont

Concept de refonte du menu en ligne de la [Microbrasserie Le Brouemont](https://www.lebrouemont.com) (Bromont, QC), présenté comme une app mobile.

**Non officiel, sans affiliation** — réalisé pour un défi de design entre amis.

## Design

Langage visuel inspiré de l'app iOS **Bond** (via Mobbin) : fond quasi blanc, wordmark minuscule ultra-gras (Baloo 2), cartes polaroid inclinées pour les sections, pilule de recherche, listes iOS groupées, tab bar minimaliste à 3 onglets avec safe-area.

Données réelles : menu complet du restaurant + les ~20 bières maison (styles et % d'alcool), chaque bière portant une pastille couleur fidèle à son style.

## Stack

Statique — HTML / CSS / JS vanille, aucune dépendance, aucune build step.

```
index.html      structure + tab bar + vues + coquille du bottom sheet
css/app.css     design tokens + composants + bottom sheet
js/app.js       données du menu + rendu + recherche + onglets + modales
fonts/          Baloo 2 (OFL), auto-hébergée
img/            photos d'illustration (Wikimedia Commons, CC) + credits.json
```

Chaque item ouvre un bottom sheet : photo, description complète, et pour les bières une palette de goût (amertume / sucré / corps / fruité) avec un verre rendu en CSS dans la couleur du style. Les photos sont des illustrations libres (CC) de Wikimedia Commons — l'attribution s'affiche dans chaque modale via `img/credits.json`.

Servir localement : `python3 -m http.server 4599`
