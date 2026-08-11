// broue — data + rendering. Menu réel du Brouemont (lebrouemont.com), août 2026.
// Item: [nom, sous-titre, prix, cléPhoto, description]

const FOOD = [
  {
    id: "entrees", name: "Entrées", sub: "pour ouvrir",
    art: "radial-gradient(circle at 30% 25%, #F6C368, transparent 55%), linear-gradient(160deg, #E8A33C, #A54A1C)",
    items: [
      ["Escargots", "mozzarella · beurre à l'ail", "10 $", "escargots", "Gratinés au four dans un beurre à l'ail généreux, sous une couverture de mozzarella fondante. Du pain pour saucer serait une bonne idée."],
      ["Calmars frits", "", "14 $", "calmars", "Anneaux de calmar panés, frits jusqu'à dorés, servis avec trempette. Croustillants dehors, tendres dedans."],
      ["Soupe à l'oignon", "", "10 $", "soupe-oignon", "Le classique réconfort : oignons caramélisés, bouillon riche, croûton et fromage gratiné qui déborde du bol."],
      ["Crevettes panées thaï", "", "10 $", null, "Crevettes croustillantes enrobées de sauce thaï sucrée-piquante. Dangereusement faciles à finir."],
      ["Bol de chili", "", "15 $", "chili", "Chili maison mijoté, bien garni de bœuf et de haricots. Un repas en soi avec une rousse."],
      ["Pain à l'ail", "gratiné +2 $", "7 $", "pain-ail", "Baguette grillée au beurre à l'ail. Ajoute le gratiné — tu ne le regretteras pas."],
      ["Bruschettas gratinées", "au fromage de chèvre 12 $", "10 $", null, "Tomates fraîches, ail et basilic sur pain grillé, gratinées. En version chèvre pour les connaisseurs."],
      ["Pelures de patates", "avec porc effiloché 15 $", "10 $", null, "Pelures croustillantes garnies de fromage et bacon, crème sure à côté. La version porc effiloché joue dans une autre ligue."],
      ["Bâtonnets de fromage (6)", "sauce marinara", "8 $", null, "Six bâtonnets panés au fromage fondant, sauce marinara pour tremper."],
      ["Popcurds", "", "12 $", null, "Fromage en grains pané et frit — le péché mignon québécois en format bouchée."],
      ["Cornichons frits", "", "8 $", null, "Tranches de cornichon panées et frites. Salé, croustillant, acidulé — parfait avec une blonde."],
      ["Poppers (6)", "jalapeños · crème sure", "8 $", null, "Jalapeños farcis au fromage, panés et frits. La crème sure calme le jeu."],
      ["Rondelles d'oignon", "", "8 $", "rondelles", "Rondelles d'oignon en panure dorée, frites à la commande."],
      ["Ailes de poulet", "6 ou 12 · nature ou buffalo", "10 $ / 17 $", "ailes", "Ailes bien croustillantes, nature ou enrobées de sauce buffalo. Sauces au choix : bleu, ranch, BBQ, miel, thaï…"],
    ],
  },
  {
    id: "combos", name: "Combos", sub: "à partager",
    art: "radial-gradient(circle at 70% 70%, #FBDFA8, transparent 50%), linear-gradient(200deg, #D98A3E, #8A4512)",
    items: [
      ["6 ailes + frites", "", "14 $", "ailes", "Six ailes croustillantes et une portion de frites. Le duo d'après-ski par excellence."],
      ["Bruschettas (4) + bâtonnets (2)", "version chèvre 14 $", "10 $", null, "Le meilleur des deux mondes en une assiette à partager — ou pas."],
      ["Pelures (2) + bâtonnets (4)", "version porc effiloché 14 $", "10 $", null, "Pelures garnies et bâtonnets de fromage, pour les tables qui n'arrivent pas à choisir."],
    ],
  },
  {
    id: "salades", name: "Salades", sub: "petite / grande",
    art: "radial-gradient(circle at 30% 70%, #B9C46A, transparent 55%), linear-gradient(150deg, #8FA341, #4E6323)",
    note: "Garnitures : avocat 5 $ · légumes sautés 6 $ · bleu ou chèvre 7 $ · poulet grillé ou thaï 7 $ · poulet épicé, porc effiloché ou canard 8 $ · saumon grillé 10 $",
    items: [
      ["Salade du chef", "verdure · tomates · concombre · oignons · olives · pousses", "9 $ / 15 $", null, "Verdure fraîche, tomates, concombre, oignons, olives noires et pousses germées. Ajoute une protéine pour en faire un repas."],
      ["Salade César", "romaine · bacon · croûtons · parmesan · mozzarella", "9 $ / 15 $", "cesar", "Romaine croquante, bacon, croûtons maison, parmesan et mozzarella dans une vraie sauce césar."],
      ["Salade grecque", "tomates · concombres · féta · olives · oignons", "12 $ / 18 $", "grecque", "Tomates, concombres, féta, olives noires et oignons rouges — simple, fraîche, généreuse en féta."],
    ],
  },
  {
    id: "nachos", name: "Nachos", sub: "petit / gros",
    art: "radial-gradient(circle at 65% 30%, #F2CC5B, transparent 55%), linear-gradient(210deg, #E0A93F, #B3572D)",
    items: [
      ["Nachos classiques", "salsa · olives · jalapeños · mozzarella · cheddar", "10 $ / 15 $", "nachos", "Montagne de tortillas sous mozzarella et cheddar fondus, salsa, olives et jalapeños. Format gros : viens accompagné."],
      ["Au poulet épicé", "", "15 $ / 20 $", "nachos", "Les nachos classiques, chargés de poulet épicé. Ça réchauffe."],
      ["Au porc effiloché", "", "15 $ / 20 $", "nachos", "Porc effiloché fondant sur le lit de tortillas gratinées. Le préféré des habitués."],
      ["S&M", "salsa · bleu · bacon · mozzarella · cheddar", "15 $ / 20 $", "nachos", "La version corsée : fromage bleu et bacon par-dessus le duo mozzarella-cheddar. Pour les palais qui n'ont peur de rien."],
    ],
  },
  {
    id: "poutines", name: "Poutines", sub: "le classique",
    art: "radial-gradient(circle at 40% 30%, #F6DFA0, transparent 55%), linear-gradient(170deg, #D9A85A, #6E4A22)",
    note: "Poutine ou mac&cheese garni — 20 $ : bacon · poulet épicé, thaï ou buffalo · bouchées de poulet · viande fumée 5 oz · porc effiloché. Canard (bacon érable, coulis balsamique) ou bavette — 24 $.",
    items: [
      ["Frites", "", "6 $", null, "Frites fraîches coupées maison, bien dorées. Choix de mayo : régulière, ail, cari, épicée ou raifort."],
      ["Patates sucrées", "", "8 $", null, "Frites de patates douces, croustillantes et légèrement sucrées."],
      ["Poutine", "", "10 $ / 14 $", "poutine", "Frites, fromage en grains qui fait skouik et sauce brune chaude. La base, faite comme il faut."],
      ["Poutine angus", "sauce · bœuf · oignons et champignons sautés", "20 $", "poutine", "Poutine chargée de bœuf angus, oignons et champignons sautés. Le repas complet en un bol."],
    ],
  },
  {
    id: "burgers", name: "Burgers", sub: "18 façons",
    art: "radial-gradient(circle at 30% 30%, #F0B463, transparent 50%), linear-gradient(190deg, #C9762E, #5F2F14)",
    note: "Bœuf, poulet grillé ou poulet croustillant. Servis avec salade du chef ou César, ou frites-mayo.",
    items: [
      ["Canadien", "cheddar · bacon régulier ou érable-poivre", "20 $", "burger", "Le classique bien fait : cheddar fondant et bacon au choix — régulier ou érable-poivre pour la touche sucrée-salée."],
      ["Suisse", "fromage suisse · champignons sautés", "20 $", "burger", "Fromage suisse et champignons sautés au beurre. Sobre et efficace."],
      ["Parisien", "fromage bleu · bacon au choix", "21 $", "burger", "Le caractère du fromage bleu adouci par le bacon. Pour les palais affirmés."],
      ["Californien", "fromage de chèvre · tomates séchées", "21 $", "burger", "Chèvre crémeux et tomates séchées — le plus soleil des dix-huit."],
      ["Américain", "cheddar · avocat", "20 $", "burger", "Cheddar et avocat frais. Simple, riche, satisfaisant."],
      ["Mexicain", "oka · jalapeños · salsa · guacamole", "21 $", "burger", "Oka fondant, jalapeños, salsa et guacamole. Le Québec rencontre le Mexique."],
      ["Aussie", "brie · champignons portobello", "21 $", "burger", "Brie coulant et portobello grillé — le plus gastronomique du lot."],
      ["Texan", "monterey jack · oignons sautés · BBQ à la bière", "20 $", "burger", "Monterey jack, oignons sautés et sauce BBQ montée à la bière de la maison."],
      ["Sud-Ouest", "havarti · guacamole · mayo chipotle · oignons frits", "21 $", "burger", "Havarti doux, guacamole, mayo chipotle fumée et oignons frits croustillants."],
      ["Big Broue", "cheddar · oignons à la bière · tartare · cornichons", "21 $", "burger", "Le burger signature : oignons confits à la bière maison, cheddar, sauce tartare et cornichons."],
      ["Québécois", "sauce à poutine · fromage en grains · bacon", "21 $", "burger", "Un burger qui se prend pour une poutine : sauce brune, fromage en grains et bacon. Prévois des serviettes."],
      ["Ruben", "suisse · viande fumée · choucroute · tartare", "21 $", "burger", "Inspiré du deli : viande fumée, choucroute, suisse et tartare sur boulette."],
      ["Cochon", "provolone · porc effiloché · salade de chou · oignons frits", "21 $", "burger", "Boulette + porc effiloché + provolone + salade de chou crémeuse. Le bien-nommé."],
      ["Thaï", "cheddar · bacon · sauce thaï", "20 $", "burger", "Sauce thaï sucrée-piquante, bacon et cheddar. L'équilibre parfait entre feu et confort."],
      ["Buffalo", "cheddar ou bleu · bacon · sauce buffalo", "21 $", "burger", "Sauce buffalo, bacon, et le choix crucial : cheddar qui calme ou bleu qui en rajoute."],
      ["Cow-boy", "cheddar · bacon érable · cornichons frits · sauce cow-boy", "21 $", "burger", "Bacon à l'érable, cornichons frits et sauce cow-boy fumée. Yee-haw."],
      ["New-York", "gouda · pommes · bacon poivré", "21 $", "burger", "Gouda, pommes tranchées et bacon poivré — sucré-salé assumé."],
      ["Végétarien", "brie · légumes sautés · mayo pesto · bruschetta", "21 $", "burger", "Galette végé garnie de brie, légumes sautés, mayo pesto, bruschetta et coulis balsamique."],
    ],
  },
  {
    id: "sandwichs", name: "Sandwichs", sub: "baguette, multigrain ou wrap",
    art: "radial-gradient(circle at 70% 25%, #F3D486, transparent 55%), linear-gradient(160deg, #CE9A48, #7A4A1E)",
    items: [
      ["Panini dinde", "brie · mayo aux canneberges", "19 $", "club", "Dinde, brie fondant et mayonnaise aux canneberges, pressé jusqu'à croustillant."],
      ["Panini jambon", "suisse ou cheddar · dijon-miel", "18 $", "club", "Jambon, fromage au choix et moutarde dijon-miel dans un panini grillé."],
      ["Panini tomates séchées", "chèvre · pesto · au poulet 22 $", "19 $", "club", "Tomates séchées, chèvre et pesto. Ajoute le poulet grillé pour la version repas."],
      ["B.L.T. spécial", "bacon · laitue · tomates · fromage · avocat", "19 $", "club", "Le B.L.T. amélioré : fromage fondant et avocat en plus du trio classique."],
      ["Club sandwich", "« le Dufour » à la viande fumée 24 $", "19 $", "club", "Trois étages de poulet, bacon, laitue et tomates. En version « Dufour », la viande fumée remplace le poulet."],
      ["Poulet César", "poulet · laitue · bacon · césar · mozzarella", "19 $", "club", "Tout ce qu'on aime de la salade césar, roulé en sandwich avec du poulet grillé."],
      ["Rôti de bœuf chaud", "oignons et champignons sautés · dip", "24 $", "steak", "Rôti de bœuf tranché servi chaud, oignons et champignons sautés, jus de viande pour tremper."],
      ["Canard du Lac-Brome", "brie · pommes · bacon", "24 $", null, "Canard régional, brie, pommes et bacon — le sandwich le plus distingué du menu."],
      ["Porc effiloché", "oignons frits · salade de chou", "24 $", null, "Porc effiloché fondant, oignons frits et salade de chou dans un pain qui essaie de tout retenir."],
      ["Smoked meat 7 oz", "pain de seigle · moutarde · cornichons", "22 $", "smoked-meat", "Sept onces de viande fumée sur seigle, moutarde et cornichons. Comme sur le Boulevard, mais avec vue sur la montagne."],
      ["Panini portobello végé", "", "19 $", null, "Portobello grillé et garnitures fraîches dans un panini pressé."],
      ["Le garni", "poulet, bœuf, porc ou canard · légumes · fromage au choix", "24 $", null, "Ta protéine, champignons, oignons, poivrons et le fromage de ton choix : chèvre, brie, bleu, suisse ou havarti."],
    ],
  },
  {
    id: "poisson", name: "Poisson", sub: "de la mer",
    art: "radial-gradient(circle at 35% 65%, #9FC4CB, transparent 55%), linear-gradient(150deg, #6FA3AD, #2E5B66)",
    items: [
      ["Fish & chips", "pâte à la bière maison", "22 $", "fish-chips", "Filet dans une pâte à la bière de la maison — évidemment — frit jusqu'à doré, avec frites et sauce tartare."],
      ["Burger de saumon grillé", "", "19 $", "saumon", "Pavé de saumon grillé en burger, plus léger mais pas moins satisfaisant."],
      ["Saumon sur planche de cèdre", "", "28 $", "saumon", "Saumon cuit sur planche de cèdre pour un fumé subtil. Le plat qui surprend dans un pub."],
    ],
  },
  {
    id: "grillades", name: "Grillades", sub: "sur le gril",
    art: "radial-gradient(circle at 60% 70%, #D96A45, transparent 50%), linear-gradient(200deg, #A33B24, #3E1710)",
    note: "Servies avec salade ou frites-mayo et champignons sautés. À côté : rondelles +3 $ · patates sucrées +4 $ · grecque +4 $ · poutine +5 $",
    items: [
      ["Bavette", "", "30 $", "steak", "Bavette grillée à la cuisson demandée, champignons sautés. Tendre et goûteuse — la coupe des habitués."],
      ["Filet mignon 8 oz", "", "35 $", "steak", "Huit onces de filet mignon, la coupe la plus tendre, grillée simplement."],
      ["Côtes levées", "", "30 $", "cotes-levees", "Côtes levées laquées de sauce BBQ, cuites jusqu'à ce que la viande se détache de l'os."],
    ],
  },
  {
    id: "enfants", name: "Pour les petits", sub: "dessert et jus inclus",
    art: "radial-gradient(circle at 30% 30%, #F5D06E, transparent 55%), linear-gradient(180deg, #E8B44C, #B3752A)",
    items: [
      ["Doigts de poulet", "", "12 $", "enfants", "Doigts de poulet croustillants avec frites. Dessert et jus inclus."],
      ["Mini pogos", "", "12 $", "enfants", "Des pogos format mini, l'incontournable. Dessert et jus inclus."],
      ["Mini poutine", "", "12 $", "poutine", "Une vraie poutine, en petit. Dessert et jus inclus."],
      ["Macaroni au fromage", "", "12 $", null, "Macaroni au fromage crémeux. Dessert et jus inclus."],
    ],
  },
  {
    id: "breuvages", name: "Breuvages", sub: "sans houblon",
    art: "radial-gradient(circle at 65% 35%, #EFE3C8, transparent 55%), linear-gradient(170deg, #C9B98F, #6E5B44)",
    note: "Mayos : régulière · ail · cari · épicée · raifort — Sauces : bleu · épicée · thaï · miel · ranch · crème sure · BBQ · aigre-douce. Taxes en sus.",
    items: [
      ["Liqueur en canette", "Pepsi · 7up · limonade · ginger ale · thé glacé", "4 $", null, "Pepsi, Pepsi diète, 7up, limonade, ginger ale ou thé glacé, en canette."],
      ["Jus de fruits", "pomme · orange · ananas · raisin", "3 $", null, "Jus de pomme, d'orange, d'ananas ou de raisin."],
      ["Perrier", "", "5 $", null, "De l'eau qui pétille, pour faire changement de la bière."],
      ["Lait", "au chocolat 4 $", "3 $", null, "Un verre de lait — ou de lait au chocolat pour une piasse de plus."],
      ["Chocolat chaud", "", "5 $", null, "Chocolat chaud réconfortant, parfait après les pistes."],
      ["Café, thé, tisane", "", "3 $", "cafe", "Café filtre, thé ou tisane pour finir le repas."],
    ],
  },
];

// Bière : [nom, style, abv, couleur, {am, su, co, fr}, description]
const BEERS = [
  {
    family: "Blondes, blanches & de saison",
    items: [
      ["Blonde", "Golden ale", "5,5 %", "#E9C64F", { am: 2, su: 2, co: 2, fr: 1 }, "Dorée et céréalière, une finale nette et désaltérante. La porte d'entrée parfaite vers les vingt lignes de la maison."],
      ["Pilsner", "Pilsner allemande", "5 %", "#F0D26A", { am: 3, su: 1, co: 2, fr: 0 }, "Croquante et sèche, houblons nobles et amertume franche mais polie. Le lager des puristes."],
      ["Weizen", "Blé, hefeweizen", "5 %", "#EDD98F", { am: 1, su: 2, co: 2, fr: 3 }, "Blé voilé aux notes classiques de banane et de clou de girofle. Douce, soyeuse, sans prétention."],
      ["Blanche aux bleuets", "Blé fruité", "6 %", "#8F7BB8", { am: 1, su: 3, co: 2, fr: 4 }, "Une blanche de blé infusée aux bleuets — fruitée sans être un dessert, avec une jolie teinte violacée."],
      ["Saison d'épeautre", "Saison fermière", "5 %", "#E4C978", { am: 2, su: 1, co: 2, fr: 2 }, "Saison rustique brassée à l'épeautre : sèche, poivrée, légèrement fermière. La plus « terroir » du menu."],
      ["Framboise et miel", "Blonde fruitée", "5,5 %", "#E08A9B", { am: 1, su: 3, co: 2, fr: 4 }, "Blonde adoucie au miel et parfumée à la framboise. Sucrée juste ce qu'il faut — la favorite des terrasses d'été."],
    ],
  },
  {
    family: "Houblonnées",
    items: [
      ["India Pale Ale", "IPA américaine", "6,5 %", "#E7A93C", { am: 4, su: 1, co: 3, fr: 2 }, "IPA à l'américaine : agrumes, résine de pin et une amertume qui s'assume du début à la fin."],
      ["NEIPA Session", "IPA de session", "4,5 %", "#EBB865", { am: 2, su: 2, co: 2, fr: 3 }, "Tout le fruité juteux d'une NEIPA, dans un format léger qui permet d'en reprendre une."],
      ["Lost in the Clouds", "NEIPA voilée", "6,5 %", "#EBB865", { am: 2, su: 2, co: 3, fr: 4 }, "Voilée et veloutée, explosion de fruits tropicaux, amertume en retrait. Celle qui a fait la réputation des brasseurs."],
      ["Orange Crush", "NEIPA", "6,5 %", "#E8A34E", { am: 2, su: 2, co: 3, fr: 4 }, "Houblons orientés orange et mandarine — le jus d'orange des adultes, comme son nom le promet."],
      ["Elbows Hop", "NEIPA", "6,8 %", "#E8A34E", { am: 3, su: 2, co: 3, fr: 4 }, "Généreusement houblonnée à froid, tropicale et dense, avec un peu plus de mordant que ses sœurs voilées."],
      ["Down Under", "Double NEIPA impériale", "8 %", "#D89440", { am: 3, su: 3, co: 4, fr: 4 }, "Double NEIPA aux houblons australiens : mangue, fruits de la passion et 8 % qui ne paraissent pas. Prudence."],
    ],
  },
  {
    family: "Rousses & ambrées",
    items: [
      ["Rousse", "Red ale", "5 %", "#B0521E", { am: 2, su: 2, co: 3, fr: 1 }, "Caramel et malt grillé, finale équilibrée. La compagne idéale d'un burger ou d'une poutine."],
      ["Rousse à l'érable", "Red ale, érable", "5,5 %", "#A54A1C", { am: 2, su: 4, co: 3, fr: 1 }, "La rousse maison arrondie à l'érable québécois. Sucrée-maltée, dangereusement facile en après-ski."],
      ["Irish Red Ale", "Rousse irlandaise", "5 %", "#9E4522", { am: 2, su: 2, co: 3, fr: 0 }, "Rousse à l'irlandaise : malts biscuités, touche de caramel sec, finale propre. Sans flafla."],
    ],
  },
  {
    family: "Noires & fortes",
    items: [
      ["Scotch Ale", "Wee heavy", "8 %", "#5A3A22", { am: 2, su: 4, co: 5, fr: 1 }, "Riche et maltée, notes de caramel foncé et de fruits secs. Une bière de foyer, à siroter lentement."],
      ["Harvest Moon", "Stout au lait", "6,7 %", "#33211A", { am: 2, su: 4, co: 4, fr: 1 }, "Stout au lactose : café, chocolat noir et une rondeur crémeuse. Le dessert est déjà dans le verre."],
    ],
  },
  {
    family: "Sûres & rafraîchissantes",
    items: [
      ["Gose", "Sûre fruitée, salée", "5 %", "#E8C1A0", { am: 1, su: 2, co: 2, fr: 3 }, "Acidulée avec sa pointe de sel traditionnelle. Étonnante à la première gorgée, addictive à la troisième."],
      ["Radler Sour", "Radler", "3,5 %", "#F2D379", { am: 1, su: 3, co: 1, fr: 4 }, "Moitié bière, moitié limonade acidulée, 3,5 % — la plus désaltérante du menu, pensée pour les canicules."],
      ["Peach Ring Smoothie", "Sûre smoothie", "3 %", "#F0B47E", { am: 0, su: 4, co: 2, fr: 5 }, "Sûre épaisse à la pêche qui goûte le bonbon assumé. Aussi loin d'une pilsner qu'une bière peut aller."],
    ],
  },
];

const PALETTE_AXES = [["am", "Amertume"], ["su", "Sucré"], ["co", "Corps"], ["fr", "Fruité"]];

const $ = (sel, el = document) => el.querySelector(sel);
const totalItems = FOOD.reduce((n, s) => n + s.items.length, 0) + BEERS.reduce((n, f) => n + f.items.length, 0);
let CREDITS = {};
fetch("img/credits.json").then((r) => r.json()).then((c) => { CREDITS = c; }).catch(() => {});

function el(tag, cls, html) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderStories() {
  const wrap = $("#stories");
  const tilts = [-4, 3, -2, 4, -3, 2, -4, 3, -2, 4, -3, 2];
  const beerStory = el("button", "story");
  beerStory.style.setProperty("--tilt", "-4deg");
  beerStory.innerHTML =
    `<span class="polaroid"><span class="art" style="background:radial-gradient(circle at 30% 20%, #FBDFA8, transparent 45%), linear-gradient(180deg,#F6E9C8 0%,#F6E9C8 18%,#E8A33C 18%,#C9762E 100%)"></span><span class="badge">${BEERS.reduce((n, f) => n + f.items.length, 0)}</span></span>` +
    `<span><span class="s-name">Bières</span><span class="s-sub">brassées ici</span></span>`;
  beerStory.addEventListener("click", () => switchTab("beers"));
  wrap.appendChild(beerStory);

  FOOD.forEach((s, i) => {
    const b = el("button", "story");
    b.style.setProperty("--tilt", tilts[(i + 1) % tilts.length] + "deg");
    b.innerHTML =
      `<span class="polaroid"><span class="art" style="background:${s.art}"></span><span class="badge">${s.items.length}</span></span>` +
      `<span><span class="s-name">${s.name}</span><span class="s-sub">${s.sub}</span></span>`;
    b.addEventListener("click", () => {
      switchTab("menu");
      document.getElementById("g-" + s.id).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    wrap.appendChild(b);
  });
}

function renderFood() {
  const wrap = $("#food-groups");
  FOOD.forEach((s) => {
    const g = el("section", "group");
    g.id = "g-" + s.id;
    g.appendChild(el("h2", null, s.name));
    const card = el("div", "card");
    s.items.forEach((item) => {
      const [name, desc, price] = item;
      const row = el("button", "mrow");
      row.type = "button";
      row.dataset.q = (name + " " + desc).toLowerCase();
      row.innerHTML =
        `<div class="m-main"><div class="m-name">${name}</div>${desc ? `<div class="m-desc">${desc}</div>` : ""}</div>` +
        `<div class="m-price">${price}</div>`;
      row.addEventListener("click", () => openFoodSheet(s, item));
      card.appendChild(row);
    });
    g.appendChild(card);
    if (s.note) g.appendChild(el("p", "foot-note", s.note));
    wrap.appendChild(g);
  });
}

function renderBeers() {
  const wrap = $("#beer-groups");
  BEERS.forEach((f) => {
    const g = el("section", "group");
    g.appendChild(el("h2", null, f.family));
    const card = el("div", "card");
    f.items.forEach((item) => {
      const [name, style, abv, color] = item;
      const row = el("button", "brow");
      row.type = "button";
      row.dataset.q = (name + " " + style).toLowerCase();
      row.innerHTML =
        `<span class="keg" style="--beer:${color}"></span>` +
        `<div class="m-main"><div class="b-name">${name}</div><div class="b-style">${style}</div></div>` +
        `<span class="abv">${abv}</span>`;
      row.addEventListener("click", () => openBeerSheet(f, item));
      card.appendChild(row);
    });
    g.appendChild(card);
    wrap.appendChild(g);
  });
}

/* ————— Item modal (centered, swipeable) ————— */
let lastFocus = null;
let closeTimer = null;
let lockedScrollY = 0;
let sheetList = [];
let sheetIndex = 0;
let navigating = false;

const FOOD_FLAT = FOOD.flatMap((s) => s.items.map((item) => ({ type: "food", ctx: s, item })));
const BEER_FLAT = BEERS.flatMap((f) => f.items.map((item) => ({ type: "beer", ctx: f, item })));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function sheetHTML(entry) {
  if (entry.type === "beer") {
    const [name, style, abv, color, pal, long] = entry.item;
    const bars = PALETTE_AXES.map(([k, label]) =>
      `<div class="pal-row"><span class="pal-label">${label}</span><span class="pal-track"><span class="pal-fill" style="width:${(pal[k] / 5) * 100}%"></span></span><span class="pal-val">${pal[k]}/5</span></div>`
    ).join("");
    return `<div class="sheet-glass-wrap"><div class="glass" style="--beer:${color}"><span class="glass-foam"></span></div></div>` +
      `<div class="sheet-head"><h2 id="sheet-title">${name}</h2><span class="abv abv-big">${abv}</span></div>` +
      `<p class="sheet-kicker">${style} · ${entry.ctx.family}</p>` +
      `<div class="palette"><h3>Palette de goût</h3>${bars}</div>` +
      `<p class="sheet-desc">${long}</p>`;
  }
  const [name, desc, price, img, long] = entry.item;
  const photo = img
    ? `<div class="sheet-photo"><img src="img/${img}.jpg" alt="" loading="lazy"></div>`
    : `<div class="sheet-photo art-only" style="background:${entry.ctx.art}"></div>`;
  return photo +
    `<div class="sheet-head"><h2 id="sheet-title">${name}</h2><span class="sheet-price">${price}</span></div>` +
    `<p class="sheet-kicker">${entry.ctx.name} · ${entry.ctx.sub}</p>` +
    (desc ? `<p class="sheet-sub">${desc}</p>` : "") +
    `<p class="sheet-desc">${long}</p>` +
    (img ? creditLine(img) : "");
}

let counterTimer = null;

function renderSheet() {
  const body = $("#sheet-body");
  const hadFocusInside = body.contains(document.activeElement);
  body.innerHTML = sheetHTML(sheetList[sheetIndex]);
  if (hadFocusInside) $("#sheet-close").focus({ preventScroll: true });
  if (counterTimer) clearTimeout(counterTimer);
  counterTimer = window.setTimeout(() => {
    $("#s-counter").textContent = `${sheetIndex + 1} / ${sheetList.length}`;
    counterTimer = null;
  }, 280);
  $("#snav-prev").disabled = sheetIndex === 0;
  $("#snav-next").disabled = sheetIndex === sheetList.length - 1;
  $("#sheet-scroll").scrollTop = 0;
}

function openSheet() {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
  cancelNavTimers();
  lastFocus = document.activeElement;
  renderSheet();
  if (!document.body.classList.contains("sheet-open")) {
    lockedScrollY = window.scrollY;
    document.body.classList.add("sheet-open");
    document.body.style.position = "fixed";
    document.body.style.top = -lockedScrollY + "px";
    document.body.style.width = "100%";
  }
  $(".app").inert = true;
  $("#sheet-backdrop").hidden = false;
  const sheet = $("#sheet");
  sheet.hidden = false;
  requestAnimationFrame(() => {
    $("#sheet-backdrop").classList.add("show");
    sheet.classList.add("show");
  });
  $("#sheet-close").focus({ preventScroll: true });
}

function setBodyFx(el, x, rot, op) {
  el.style.transform = x === 0 && rot === 0 ? "" : `translateX(${x}px) rotate(${rot}deg)`;
  el.style.opacity = op === 1 ? "" : String(op);
}

let navTimer1 = null;
let navTimer2 = null;

function cancelNavTimers() {
  if (navTimer1) { clearTimeout(navTimer1); navTimer1 = null; }
  if (navTimer2) { clearTimeout(navTimer2); navTimer2 = null; }
  navigating = false;
}

function navigate(dir) {
  const ni = sheetIndex + dir;
  if (ni < 0 || ni >= sheetList.length || navigating) return;
  const body = $("#sheet-body");
  if (reducedMotion.matches) {
    sheetIndex = ni;
    renderSheet();
    setBodyFx(body, 0, 0, 1);
    return;
  }
  navigating = true;
  body.classList.remove("drag");
  body.classList.add("settle");
  setBodyFx(body, -dir * 64, -dir * 1.5, 0);
  navTimer1 = window.setTimeout(() => {
    navTimer1 = null;
    sheetIndex = ni;
    renderSheet();
    body.classList.remove("settle");
    body.classList.add("drag");
    setBodyFx(body, dir * 64, dir * 1.5, 0);
    void body.offsetWidth;
    body.classList.remove("drag");
    body.classList.add("settle");
    setBodyFx(body, 0, 0, 1);
    navTimer2 = window.setTimeout(() => {
      navTimer2 = null;
      body.classList.remove("settle");
      navigating = false;
    }, 250);
  }, 190);
}

/* Swipe: horizontal drag on the card follows the finger, then commits or springs back */
(() => {
  const sheet = $("#sheet");
  const body = $("#sheet-body");
  let startX = 0, startY = 0, dx = 0, axis = null, active = false;

  sheet.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1 || navigating) return;
    active = true; axis = null; dx = 0;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  sheet.addEventListener("touchmove", (e) => {
    if (!active) return;
    const mx = e.touches[0].clientX - startX;
    const my = e.touches[0].clientY - startY;
    if (!axis && (Math.abs(mx) > 8 || Math.abs(my) > 8)) {
      axis = Math.abs(mx) > Math.abs(my) ? "h" : "v";
    }
    if (axis !== "h") return;
    e.preventDefault();
    dx = mx;
    if (reducedMotion.matches) return;
    let vx = dx;
    const atEdge = (sheetIndex === 0 && vx > 0) || (sheetIndex === sheetList.length - 1 && vx < 0);
    if (atEdge) vx *= 0.3;
    body.classList.remove("settle");
    body.classList.add("drag");
    setBodyFx(body, vx, vx * 0.02, Math.max(0.35, 1 - Math.abs(vx) / 500));
  }, { passive: false });

  sheet.addEventListener("touchend", () => {
    if (!active) return;
    active = false;
    if (axis !== "h") return;
    const commit = Math.abs(dx) > 70;
    const dir = dx < 0 ? 1 : -1;
    const target = sheetIndex + dir;
    if (commit && target >= 0 && target < sheetList.length) {
      navigate(dir);
    } else if (!reducedMotion.matches) {
      body.classList.remove("drag");
      body.classList.add("settle");
      setBodyFx(body, 0, 0, 1);
      window.setTimeout(() => body.classList.remove("settle"), 250);
    }
    dx = 0;
  });
})();

function closeSheet() {
  const sheet = $("#sheet");
  const body = $("#sheet-body");
  cancelNavTimers();
  body.classList.remove("drag", "settle");
  setBodyFx(body, 0, 0, 1);
  $("#sheet-backdrop").classList.remove("show");
  sheet.classList.remove("show");
  $(".app").inert = false;
  document.body.classList.remove("sheet-open");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, lockedScrollY);
  closeTimer = window.setTimeout(() => {
    $("#sheet-backdrop").hidden = true;
    sheet.hidden = true;
    closeTimer = null;
  }, 240);
  if (lastFocus && lastFocus.isConnected && lastFocus.offsetParent !== null) {
    lastFocus.focus({ preventScroll: true });
  } else {
    $("#search-input").focus({ preventScroll: true });
  }
}

function creditLine(imgKey) {
  const c = CREDITS[imgKey];
  if (!c) return "";
  return `<p class="sheet-credit">Photo d'illustration — <a href="${c.url}" target="_blank" rel="noopener">${c.artist}</a> (${c.license}), Wikimedia Commons</p>`;
}

function openFoodSheet(section, item) {
  sheetList = FOOD_FLAT;
  sheetIndex = FOOD_FLAT.findIndex((e) => e.item === item);
  openSheet();
}

function openBeerSheet(family, item) {
  sheetList = BEER_FLAT;
  sheetIndex = BEER_FLAT.findIndex((e) => e.item === item);
  openSheet();
}

function switchTab(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  $("#view-" + id).classList.remove("hidden");
  document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.view === id ? "true" : "false"));
  const input = $("#search-input");
  if (input.value) {
    input.value = "";
    applySearch("");
  }
  window.scrollTo({ top: 0 });
}

function applySearch(q) {
  q = q.trim().toLowerCase();
  $("#search-chip").textContent = q ? countMatches(q) : totalItems;
  let anyVisible = false;
  document.querySelectorAll("#view-menu .group, #view-beers .group").forEach((g) => {
    let groupVisible = false;
    g.querySelectorAll("[data-q]").forEach((row) => {
      const show = !q || row.dataset.q.includes(q);
      row.style.display = show ? "" : "none";
      if (show) groupVisible = true;
    });
    g.style.display = groupVisible ? "" : "none";
    if (groupVisible) anyVisible = true;
  });
  $("#stories").style.display = q ? "none" : "";
  $("#empty").style.display = anyVisible ? "none" : "block";
}

function countMatches(q) {
  let n = 0;
  document.querySelectorAll("[data-q]").forEach((r) => { if (r.dataset.q.includes(q)) n++; });
  return n;
}

renderStories();
renderFood();
renderBeers();
$("#search-chip").textContent = totalItems;
document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => switchTab(t.dataset.view)));
$("#search-input").addEventListener("input", (e) => applySearch(e.target.value));
$("#sheet-close").addEventListener("click", closeSheet);
$("#sheet-backdrop").addEventListener("click", closeSheet);
$("#snav-prev").addEventListener("click", () => navigate(-1));
$("#snav-next").addEventListener("click", () => navigate(1));
document.addEventListener("keydown", (e) => {
  if ($("#sheet").hidden) return;
  if (e.key === "Escape") closeSheet();
  else if (e.key === "ArrowLeft") navigate(-1);
  else if (e.key === "ArrowRight") navigate(1);
});
