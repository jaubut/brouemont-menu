// broue — data + rendering. Menu réel du Brouemont (lebrouemont.com), août 2026.
// Item : { n, d, pd, price|sizes, vgroups, extras, pair, img, long }
//   pd = prix affiché en liste · sizes = [[label, prix]] · vgroups = [{t, opts:[[label, +delta]]}]
//   extras = [[label, +prix]] · pair = nom d'une bière maison

const BURGER_VG = [
  { t: "Base", opts: [["Bœuf", 0], ["Poulet grillé", 0], ["Poulet croustillant", 0]] },
  { t: "Accompagnement", opts: [["Frites-mayo", 0], ["Salade du chef", 0], ["Salade César", 0]] },
];
const SAND_VG = [{ t: "Pain", opts: [["Baguette", 0], ["Multigrain", 0], ["Wrap", 0]] }];
const GARNITURES = [["Avocat", 5], ["Légumes sautés", 6], ["Fromage bleu", 7], ["Fromage de chèvre", 7], ["Poulet grillé", 7], ["Poulet thaï", 7], ["Poulet épicé", 8], ["Porc effiloché", 8], ["Canard", 8], ["Saumon grillé", 10]];
const SIDES = [["Rondelles d'oignon", 3], ["Patates sucrées", 4], ["Salade grecque", 4], ["Poutine", 5]];

const FOOD = [
  {
    id: "entrees", name: "Entrées", sub: "pour ouvrir",
    art: "radial-gradient(circle at 30% 25%, #F6C368, transparent 55%), linear-gradient(160deg, #E8A33C, #A54A1C)",
    items: [
      { n: "Escargots", d: "mozzarella · beurre à l'ail", pd: "10 $", price: 10, img: "escargots", pair: "Blonde", long: "Gratinés au four dans un beurre à l'ail généreux, sous une couverture de mozzarella fondante. Du pain pour saucer serait une bonne idée." },
      { n: "Calmars frits", d: "", pd: "14 $", price: 14, img: "calmars", pair: "Pilsner", long: "Anneaux de calmar panés, frits jusqu'à dorés, servis avec trempette. Croustillants dehors, tendres dedans." },
      { n: "Soupe à l'oignon", d: "", pd: "10 $", price: 10, img: "soupe-oignon", pair: "Rousse", long: "Le classique réconfort : oignons caramélisés, bouillon riche, croûton et fromage gratiné qui déborde du bol." },
      { n: "Crevettes panées thaï", d: "", pd: "10 $", price: 10, pair: "NEIPA Session", long: "Crevettes croustillantes enrobées de sauce thaï sucrée-piquante. Dangereusement faciles à finir." },
      { n: "Bol de chili", d: "", pd: "15 $", price: 15, img: "chili", pair: "Rousse", long: "Chili maison mijoté, bien garni de bœuf et de haricots. Un repas en soi avec une rousse." },
      { n: "Pain à l'ail", d: "", pd: "7–9 $", price: 7, vgroups: [{ t: "Style", opts: [["Nature", 0], ["Gratiné", 2]] }], img: "pain-ail", pair: "Blonde", long: "Baguette grillée au beurre à l'ail. Prends le gratiné — tu ne le regretteras pas." },
      { n: "Bruschettas", d: "tomates · ail · basilic", pd: "10–12 $", price: 10, vgroups: [{ t: "Version", opts: [["Gratinées", 0], ["Fromage de chèvre", 2]] }], pair: "Saison d'épeautre", long: "Tomates fraîches, ail et basilic sur pain grillé. La version chèvre ajoute une couche de crémeux qui vaut ses deux piasses." },
      { n: "Pelures de patates", d: "fromage · bacon · crème sure", pd: "10–15 $", price: 10, vgroups: [{ t: "Version", opts: [["Classiques", 0], ["Porc effiloché", 5]] }], pair: "Rousse", long: "Pelures croustillantes garnies de fromage et bacon. La version porc effiloché joue dans une autre ligue." },
      { n: "Bâtonnets de fromage (6)", d: "sauce marinara", pd: "8 $", price: 8, pair: "Pilsner", long: "Six bâtonnets panés au fromage fondant, sauce marinara pour tremper." },
      { n: "Popcurds", d: "", pd: "12 $", price: 12, pair: "Blonde", long: "Fromage en grains pané et frit — le péché mignon québécois en format bouchée." },
      { n: "Cornichons frits", d: "", pd: "8 $", price: 8, pair: "Gose", long: "Tranches de cornichon panées et frites. Salé, croustillant, acidulé — l'accord avec la Gose est réel." },
      { n: "Poppers (6)", d: "jalapeños · crème sure", pd: "8 $", price: 8, pair: "Framboise et miel", long: "Jalapeños farcis au fromage, panés et frits. Le sucré de la Framboise et miel éteint le feu." },
      { n: "Rondelles d'oignon", d: "", pd: "8 $", price: 8, img: "rondelles", pair: "Blonde", long: "Rondelles d'oignon en panure dorée, frites à la commande." },
      { n: "Ailes de poulet", d: "sauces au choix", pd: "10–17 $", sizes: [["6 ailes", 10], ["12 ailes", 17]], vgroups: [{ t: "Enrobage", opts: [["Nature", 0], ["Buffalo", 0]] }], img: "ailes", pair: "India Pale Ale", long: "Ailes bien croustillantes, nature ou enrobées de sauce buffalo. Trempettes au choix : bleu, ranch, BBQ, miel, thaï, aigre-douce, épicée ou crème sure." },
    ],
  },
  {
    id: "partager", name: "À partager", sub: "pour la table",
    art: "radial-gradient(circle at 65% 30%, #F2CC5B, transparent 55%), linear-gradient(210deg, #E0A93F, #B3572D)",
    items: [
      { n: "Nachos", d: "salsa · olives · jalapeños · mozzarella · cheddar", pd: "10–20 $", sizes: [["Petit", 10], ["Gros", 15]], vgroups: [{ t: "Garniture", opts: [["Classique", 0], ["Poulet épicé", 5], ["Porc effiloché", 5], ["S&M — bleu et bacon", 5]] }], img: "nachos", pair: "Pilsner", long: "Montagne de tortillas sous mozzarella et cheddar fondus, salsa, olives et jalapeños. Choisis ta garniture — le porc effiloché est le préféré des habitués, la S&M (fromage bleu et bacon) est pour les palais qui n'ont peur de rien." },
      { n: "6 ailes + frites", d: "", pd: "14 $", price: 14, img: "ailes", pair: "India Pale Ale", long: "Six ailes croustillantes et une portion de frites. Le duo d'après-ski par excellence." },
      { n: "Bruschettas (4) + bâtonnets (2)", d: "", pd: "10–14 $", price: 10, vgroups: [{ t: "Version", opts: [["Régulière", 0], ["Fromage de chèvre", 4]] }], pair: "Saison d'épeautre", long: "Le meilleur des deux mondes en une assiette à partager — ou pas." },
      { n: "Pelures (2) + bâtonnets (4)", d: "", pd: "10–14 $", price: 10, vgroups: [{ t: "Version", opts: [["Régulière", 0], ["Porc effiloché", 4]] }], pair: "Rousse", long: "Pelures garnies et bâtonnets de fromage, pour les tables qui n'arrivent pas à choisir." },
    ],
  },
  {
    id: "salades", name: "Salades", sub: "fraîches et garnissables",
    art: "radial-gradient(circle at 30% 70%, #B9C46A, transparent 55%), linear-gradient(150deg, #8FA341, #4E6323)",
    items: [
      { n: "Salade du chef", d: "verdure · tomates · concombre · oignons · olives · pousses", pd: "9 $ / 15 $", sizes: [["Petite", 9], ["Grande", 15]], extras: GARNITURES, pair: "Radler Sour", long: "Verdure fraîche, tomates, concombre, oignons, olives noires et pousses germées. Ajoute une protéine pour en faire un repas." },
      { n: "Salade César", d: "romaine · bacon · croûtons · parmesan · mozzarella", pd: "9 $ / 15 $", sizes: [["Petite", 9], ["Grande", 15]], extras: GARNITURES, img: "cesar", pair: "Blonde", long: "Romaine croquante, bacon, croûtons maison, parmesan et mozzarella dans une vraie sauce césar." },
      { n: "Salade grecque", d: "tomates · concombres · féta · olives · oignons", pd: "12 $ / 18 $", sizes: [["Petite", 12], ["Grande", 18]], extras: GARNITURES, img: "grecque", pair: "Gose", long: "Tomates, concombres, féta, olives noires et oignons rouges — simple, fraîche, généreuse en féta." },
    ],
  },
  {
    id: "poutines", name: "Frites & poutines", sub: "le classique",
    art: "radial-gradient(circle at 40% 30%, #F6DFA0, transparent 55%), linear-gradient(170deg, #D9A85A, #6E4A22)",
    items: [
      { n: "Frites", d: "", pd: "6 $", price: 6, vgroups: [{ t: "Mayo", opts: [["Régulière", 0], ["Ail", 0], ["Cari", 0], ["Épicée", 0], ["Raifort", 0]] }], pair: "Pilsner", long: "Frites fraîches coupées maison, bien dorées, avec la mayo de ton choix." },
      { n: "Patates sucrées", d: "", pd: "8 $", price: 8, pair: "Rousse à l'érable", long: "Frites de patates douces, croustillantes et légèrement sucrées." },
      { n: "Poutine", d: "fromage en grains · sauce brune", pd: "10 $ / 14 $", sizes: [["Petite", 10], ["Grande", 14]], img: "poutine", pair: "Rousse", long: "Frites, fromage en grains qui fait skouik et sauce brune chaude. La base, faite comme il faut." },
      { n: "Poutine angus", d: "bœuf · oignons et champignons sautés", pd: "20 $", price: 20, img: "poutine", pair: "Scotch Ale", long: "Poutine chargée de bœuf angus, oignons et champignons sautés. Le repas complet en un bol." },
      { n: "Poutine ou mac&cheese garni", d: "choix de base et de viande", pd: "20–24 $", price: 20, vgroups: [{ t: "Base", opts: [["Poutine", 0], ["Mac&cheese", 0]] }, { t: "Viande", opts: [["Bacon au choix", 0], ["Poulet épicé", 0], ["Poulet thaï", 0], ["Poulet buffalo", 0], ["Bouchées de poulet", 0], ["Viande fumée 5 oz", 0], ["Porc effiloché", 0], ["Canard — bacon érable, balsamique", 4], ["Bavette", 4]] }], img: "poutine", pair: "Rousse à l'érable", long: "Choisis ta base — poutine ou mac&cheese — puis ta viande. Le canard vient avec bacon à l'érable et coulis balsamique." },
    ],
  },
  {
    id: "burgers", name: "Burgers", sub: "18 façons",
    art: "radial-gradient(circle at 30% 30%, #F0B463, transparent 50%), linear-gradient(190deg, #C9762E, #5F2F14)",
    note: "Tous nos burgers : base bœuf, poulet grillé ou poulet croustillant, avec accompagnement au choix.",
    items: [
      { n: "Canadien", d: "cheddar · bacon régulier ou érable-poivre", pd: "20 $", price: 20, vgroups: BURGER_VG, ing: [["cheese", "Cheddar"], ["bacon", "Bacon au choix"]], pair: "Rousse", long: "Le classique bien fait : cheddar fondant et bacon au choix — régulier ou érable-poivre pour la touche sucrée-salée." },
      { n: "Suisse", d: "fromage suisse · champignons sautés", pd: "20 $", price: 20, vgroups: BURGER_VG, ing: [["cheese", "Suisse"], ["mushroom", "Champignons"]], pair: "Irish Red Ale", long: "Fromage suisse et champignons sautés au beurre. Sobre et efficace." },
      { n: "Parisien", d: "fromage bleu · bacon au choix", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Bleu"], ["bacon", "Bacon"]], pair: "Scotch Ale", long: "Le caractère du fromage bleu adouci par le bacon. Pour les palais affirmés." },
      { n: "Californien", d: "fromage de chèvre · tomates séchées", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Chèvre"], ["tomato", "Tomates séchées"]], pair: "Saison d'épeautre", long: "Chèvre crémeux et tomates séchées — le plus soleil des dix-huit." },
      { n: "Américain", d: "cheddar · avocat", pd: "20 $", price: 20, vgroups: BURGER_VG, ing: [["cheese", "Cheddar"], ["avocado", "Avocat"]], pair: "Blonde", long: "Cheddar et avocat frais. Simple, riche, satisfaisant." },
      { n: "Mexicain", d: "oka · jalapeños · salsa · guacamole", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Oka"], ["chili", "Jalapeños"], ["avocado", "Guacamole"], ["tomato", "Salsa"]], pair: "India Pale Ale", long: "Oka fondant, jalapeños, salsa et guacamole. Le Québec rencontre le Mexique." },
      { n: "Aussie", d: "brie · champignons portobello", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Brie"], ["mushroom", "Portobello"]], pair: "Down Under", long: "Brie coulant et portobello grillé. L'accord avec la double NEIPA australienne s'imposait." },
      { n: "Texan", d: "monterey jack · oignons sautés · BBQ à la bière", pd: "20 $", price: 20, vgroups: BURGER_VG, ing: [["cheese", "Monterey jack"], ["onion", "Oignons sautés"], ["drop", "BBQ à la bière"]], pair: "Rousse", long: "Monterey jack, oignons sautés et sauce BBQ montée à la bière de la maison." },
      { n: "Sud-Ouest", d: "havarti · guacamole · mayo chipotle · oignons frits", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Havarti"], ["avocado", "Guacamole"], ["drop", "Mayo chipotle"], ["rings", "Oignons frits"]], pair: "NEIPA Session", long: "Havarti doux, guacamole, mayo chipotle fumée et oignons frits croustillants." },
      { n: "Big Broue", d: "cheddar · oignons à la bière · tartare · cornichons", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Cheddar"], ["onion", "Oignons à la bière"], ["drop", "Tartare"], ["pickle", "Cornichons"]], pair: "Rousse à l'érable", long: "Le burger signature : oignons confits à la bière maison, cheddar, sauce tartare et cornichons." },
      { n: "Québécois", d: "sauce à poutine · fromage en grains · bacon", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["curds", "Fromage en grains"], ["drop", "Sauce à poutine"], ["bacon", "Bacon"]], pair: "Rousse à l'érable", long: "Un burger qui se prend pour une poutine : sauce brune, fromage en grains et bacon. Prévois des serviettes." },
      { n: "Ruben", d: "suisse · viande fumée · choucroute · tartare", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Suisse"], ["smoked", "Viande fumée"], ["cabbage", "Choucroute"], ["pickle", "Cornichons"]], pair: "Irish Red Ale", long: "Inspiré du deli : viande fumée, choucroute, suisse et tartare sur boulette." },
      { n: "Cochon", d: "provolone · porc effiloché · salade de chou · oignons frits", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Provolone"], ["pork", "Porc effiloché"], ["cabbage", "Salade de chou"], ["rings", "Oignons frits"]], pair: "Rousse", long: "Boulette + porc effiloché + provolone + salade de chou crémeuse. Le bien-nommé." },
      { n: "Thaï", d: "cheddar · bacon · sauce thaï", pd: "20 $", price: 20, vgroups: BURGER_VG, ing: [["cheese", "Cheddar"], ["bacon", "Bacon"], ["drop", "Sauce thaï"]], pair: "NEIPA Session", long: "Sauce thaï sucrée-piquante, bacon et cheddar. L'équilibre parfait entre feu et confort." },
      { n: "Buffalo", d: "cheddar ou bleu · bacon · sauce buffalo", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["flame", "Sauce buffalo"], ["cheese", "Cheddar ou bleu"], ["bacon", "Bacon"]], pair: "India Pale Ale", long: "Sauce buffalo, bacon, et le choix crucial : cheddar qui calme ou bleu qui en rajoute." },
      { n: "Cow-boy", d: "cheddar · bacon érable · cornichons frits · sauce cow-boy", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["maple", "Bacon érable"], ["pickle", "Cornichons frits"], ["drop", "Sauce cow-boy"]], pair: "Rousse à l'érable", long: "Bacon à l'érable, cornichons frits et sauce cow-boy fumée. Yee-haw." },
      { n: "New-York", d: "gouda · pommes · bacon poivré", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Gouda"], ["apple", "Pommes"], ["bacon", "Bacon poivré"]], pair: "Blanche aux bleuets", long: "Gouda, pommes tranchées et bacon poivré — sucré-salé assumé." },
      { n: "Végétarien", d: "brie · légumes sautés · mayo pesto · bruschetta", pd: "21 $", price: 21, vgroups: BURGER_VG, ing: [["cheese", "Brie"], ["herb", "Mayo pesto"], ["tomato", "Bruschetta"]], pair: "Saison d'épeautre", long: "Galette végé garnie de brie, légumes sautés, mayo pesto, bruschetta et coulis balsamique." },
    ],
  },
  {
    id: "sandwichs", name: "Sandwichs", sub: "pressés ou montés",
    art: "radial-gradient(circle at 70% 25%, #F3D486, transparent 55%), linear-gradient(160deg, #CE9A48, #7A4A1E)",
    items: [
      { n: "Panini dinde", d: "brie · mayo aux canneberges", pd: "19 $", price: 19, vgroups: SAND_VG, img: "club", pair: "Blonde", long: "Dinde, brie fondant et mayonnaise aux canneberges, pressé jusqu'à croustillant." },
      { n: "Panini jambon", d: "suisse ou cheddar · dijon-miel", pd: "18 $", price: 18, vgroups: SAND_VG, img: "club", pair: "Pilsner", long: "Jambon, fromage au choix et moutarde dijon-miel dans un panini grillé." },
      { n: "Panini tomates séchées", d: "chèvre · pesto", pd: "19–22 $", price: 19, vgroups: [SAND_VG[0], { t: "Version", opts: [["Végé", 0], ["Avec poulet", 3]] }], img: "club", pair: "Saison d'épeautre", long: "Tomates séchées, chèvre et pesto. Ajoute le poulet grillé pour la version repas." },
      { n: "B.L.T. spécial", d: "bacon · laitue · tomates · fromage · avocat", pd: "19 $", price: 19, vgroups: SAND_VG, img: "club", pair: "Blonde", long: "Le B.L.T. amélioré : fromage fondant et avocat en plus du trio classique." },
      { n: "Club sandwich", d: "poulet · bacon · laitue · tomate", pd: "19–24 $", price: 19, vgroups: [{ t: "Version", opts: [["Classique au poulet", 0], ["« Le Dufour » — viande fumée", 5]] }], img: "club", pair: "Blonde", long: "Trois étages de poulet, bacon, laitue et tomates. En version « Dufour », la viande fumée remplace le poulet." },
      { n: "Poulet César", d: "poulet · laitue · bacon · césar · mozzarella", pd: "19 $", price: 19, vgroups: SAND_VG, img: "club", pair: "Blonde", long: "Tout ce qu'on aime de la salade césar, roulé en sandwich avec du poulet grillé." },
      { n: "Rôti de bœuf chaud", d: "oignons et champignons sautés · dip", pd: "24 $", price: 24, img: "steak", pair: "Irish Red Ale", long: "Rôti de bœuf tranché servi chaud, oignons et champignons sautés, jus de viande pour tremper." },
      { n: "Canard du Lac-Brome", d: "brie · pommes · bacon", pd: "24 $", price: 24, pair: "Scotch Ale", long: "Canard régional, brie, pommes et bacon — le sandwich le plus distingué du menu." },
      { n: "Porc effiloché", d: "oignons frits · salade de chou", pd: "24 $", price: 24, pair: "Rousse", long: "Porc effiloché fondant, oignons frits et salade de chou dans un pain qui essaie de tout retenir." },
      { n: "Smoked meat 7 oz", d: "pain de seigle · moutarde · cornichons", pd: "22 $", price: 22, img: "smoked-meat", pair: "Irish Red Ale", long: "Sept onces de viande fumée sur seigle, moutarde et cornichons. Comme sur le Boulevard, mais avec vue sur la montagne." },
      { n: "Panini portobello végé", d: "", pd: "19 $", price: 19, vgroups: SAND_VG, pair: "Saison d'épeautre", long: "Portobello grillé et garnitures fraîches dans un panini pressé." },
      { n: "Le garni", d: "champignons · oignons · poivrons · fromage au choix", pd: "24 $", price: 24, vgroups: [{ t: "Viande", opts: [["Poulet", 0], ["Bœuf", 0], ["Porc", 0], ["Canard", 0]] }, { t: "Fromage", opts: [["Chèvre", 0], ["Brie", 0], ["Bleu", 0], ["Suisse", 0], ["Havarti", 0]] }], pair: "Rousse", long: "Ta protéine, légumes sautés et le fromage de ton choix. Le sandwich sur mesure de la maison." },
    ],
  },
  {
    id: "poisson", name: "Poisson", sub: "de la mer",
    art: "radial-gradient(circle at 35% 65%, #9FC4CB, transparent 55%), linear-gradient(150deg, #6FA3AD, #2E5B66)",
    items: [
      { n: "Fish & chips", d: "pâte à la bière maison", pd: "22 $", price: 22, img: "fish-chips", pair: "Pilsner", long: "Filet dans une pâte à la bière de la maison — évidemment — frit jusqu'à doré, avec frites et sauce tartare." },
      { n: "Burger de saumon grillé", d: "", pd: "19 $", price: 19, vgroups: [BURGER_VG[1]], img: "saumon", pair: "Blanche aux bleuets", long: "Pavé de saumon grillé en burger, plus léger mais pas moins satisfaisant." },
      { n: "Saumon sur planche de cèdre", d: "", pd: "28 $", price: 28, img: "saumon", pair: "Saison d'épeautre", long: "Saumon cuit sur planche de cèdre pour un fumé subtil. Le plat qui surprend dans un pub." },
    ],
  },
  {
    id: "grillades", name: "Grillades", sub: "sur le gril",
    art: "radial-gradient(circle at 60% 70%, #D96A45, transparent 50%), linear-gradient(200deg, #A33B24, #3E1710)",
    note: "Servies avec salade ou frites-mayo et champignons sautés.",
    items: [
      { n: "Bavette", d: "", pd: "30 $", price: 30, extras: SIDES, img: "steak", pair: "Scotch Ale", long: "Bavette grillée à la cuisson demandée, champignons sautés. Tendre et goûteuse — la coupe des habitués." },
      { n: "Filet mignon 8 oz", d: "", pd: "35 $", price: 35, extras: SIDES, img: "steak", pair: "Scotch Ale", long: "Huit onces de filet mignon, la coupe la plus tendre, grillée simplement." },
      { n: "Côtes levées", d: "sauce BBQ", pd: "30 $", price: 30, extras: SIDES, img: "cotes-levees", pair: "Rousse à l'érable", long: "Côtes levées laquées de sauce BBQ, cuites jusqu'à ce que la viande se détache de l'os." },
    ],
  },
  {
    id: "enfants", name: "Pour les petits", sub: "dessert et jus inclus",
    art: "radial-gradient(circle at 30% 30%, #F5D06E, transparent 55%), linear-gradient(180deg, #E8B44C, #B3752A)",
    items: [
      { n: "Repas enfant", d: "un choix · dessert et jus inclus", pd: "12 $", price: 12, vgroups: [{ t: "Choix", opts: [["Doigts de poulet", 0], ["Mini pogos", 0], ["Mini poutine", 0], ["Macaroni au fromage", 0]] }], img: "enfants", long: "Un choix parmi quatre valeurs sûres, avec dessert et jus inclus. Zéro négociation requise." },
    ],
  },
  {
    id: "breuvages", name: "Breuvages", sub: "sans houblon",
    art: "radial-gradient(circle at 65% 35%, #EFE3C8, transparent 55%), linear-gradient(170deg, #C9B98F, #6E5B44)",
    note: "Les taxes ne sont pas incluses.",
    items: [
      { n: "Liqueur en canette", d: "", pd: "4 $", price: 4, vgroups: [{ t: "Choix", opts: [["Pepsi", 0], ["Pepsi diète", 0], ["7up", 0], ["Limonade", 0], ["Ginger ale", 0], ["Thé glacé", 0]] }], long: "Le pétillant classique, en canette bien froide." },
      { n: "Jus de fruits", d: "", pd: "3 $", price: 3, vgroups: [{ t: "Choix", opts: [["Pomme", 0], ["Orange", 0], ["Ananas", 0], ["Raisin", 0]] }], long: "Jus de pomme, d'orange, d'ananas ou de raisin." },
      { n: "Perrier", d: "", pd: "5 $", price: 5, long: "De l'eau qui pétille, pour faire changement de la bière." },
      { n: "Lait", d: "", pd: "3–4 $", price: 3, vgroups: [{ t: "Version", opts: [["Nature", 0], ["Au chocolat", 1]] }], long: "Un verre de lait — ou de lait au chocolat pour une piasse de plus." },
      { n: "Chocolat chaud", d: "", pd: "5 $", price: 5, long: "Chocolat chaud réconfortant, parfait après les pistes." },
      { n: "Café, thé, tisane", d: "", pd: "3 $", price: 3, img: "cafe", long: "Café filtre, thé ou tisane pour finir le repas." },
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

/* ————— Icônes ingrédients — traits fins, dessinées en code ————— */
const ICONS = {
  cheese: '<path d="M3.5 16.5 17 8.5l3.5 2.8v5.2H3.5z"/><circle cx="9" cy="14.5" r="1.1"/><circle cx="14" cy="13" r="0.9"/>',
  curds: '<circle cx="7.5" cy="14.5" r="2.6"/><circle cx="12.5" cy="9.5" r="2.4"/><circle cx="16.5" cy="15" r="2.6"/>',
  bacon: '<path d="M4 8.5c2-2.2 3.5 2 5.5 0s3.5 2 5.5 0 3-1.6 5-2.3"/><path d="M4 12.5c2-2.2 3.5 2 5.5 0s3.5 2 5.5 0 3-1.6 5-2.3"/><path d="M4 16.5c2-2.2 3.5 2 5.5 0s3.5 2 5.5 0 3-1.6 5-2.3"/>',
  mushroom: '<path d="M4.5 12a7.5 6 0 0 1 15 0z"/><path d="M9.8 12.2v4.3a2.2 2.2 0 0 0 4.4 0v-4.3"/>',
  onion: '<path d="M12 5.8c3.6 2 5.6 4.7 5.6 7.7a5.6 5.6 0 0 1-11.2 0c0-3 2-5.7 5.6-7.7z"/><path d="M12 5.8c1.3 2 2.2 4.9 2.2 7.9"/><path d="M12 5.8c-1.3 2-2.2 4.9-2.2 7.9"/><path d="M12 3v2.8"/>',
  rings: '<circle cx="9.2" cy="12" r="4.8"/><circle cx="14.8" cy="12" r="4.8"/>',
  avocado: '<path d="M12 4.5c2.8 3 5.5 5.7 5.5 9.3a5.5 5.5 0 0 1-11 0c0-3.6 2.7-6.3 5.5-9.3z"/><circle cx="12" cy="14.5" r="2.3"/>',
  chili: '<path d="M18.5 8.5c0 6-4.8 9.5-10.5 9.5-1.4 0-2-1.3-.8-1.9 4.6-.6 7.3-3.6 7.3-7.6"/><path d="M14.5 8.5c0-2 1.8-3.2 4-3"/>',
  tomato: '<circle cx="12" cy="13.5" r="6"/><path d="M12 7.5V4.5"/><path d="M12 7.5l2-1.6"/><path d="M12 7.5l-2-1.6"/>',
  apple: '<path d="M12 7.5c-3.6-1.8-6.5.7-6.5 4.3S8.5 20 12 20s6.5-4.6 6.5-8.2-2.9-6.1-6.5-4.3z"/><path d="M12 7.5c0-2 1-3.2 2.5-4"/>',
  pickle: '<path d="M9 4.5h6c0 6.2 0 11.5-3 15.5-3-4-3-9.3-3-15.5z"/><circle cx="11" cy="9" r="0.5"/><circle cx="13" cy="13" r="0.5"/><circle cx="11.5" cy="16.5" r="0.5"/>',
  cabbage: '<circle cx="12" cy="12.5" r="6.8"/><path d="M12 5.7c-2.8 3.2-2.8 10.4 0 13.6"/><path d="M12 5.7c2.8 3.2 2.8 10.4 0 13.6"/><path d="M5.4 11h13.2"/>',
  smoked: '<rect x="5" y="5.5" width="14" height="3.4" rx="1.7"/><rect x="5" y="10.3" width="14" height="3.4" rx="1.7"/><rect x="5" y="15.1" width="14" height="3.4" rx="1.7"/>',
  pork: '<path d="M4 14.5c2.2-3 3.8 1.2 6-1.6s3.8 1.2 6-1.6 2.6-2 4-2.6"/><path d="M5.5 18.5h13"/>',
  maple: '<path d="M12 3.5l1.6 3.2 3.4-.8-.8 3.3 3.3 1.8-3.3 1.8.8 3.3-3.4-.8-1.6 3.2-1.6-3.2-3.4.8.8-3.3-3.3-1.8 3.3-1.8-.8-3.3 3.4.8z"/>',
  flame: '<path d="M12 3.5c.8 3.6 4.8 5 4.8 9.4a4.8 4.8 0 0 1-9.6 0c0-2.7 1.7-4 2.7-6.4.9 1.5 2.1 2 2.1-3z"/>',
  drop: '<path d="M12 4.5c2.8 3.6 5.5 6.4 5.5 10a5.5 5.5 0 0 1-11 0c0-3.6 2.7-6.4 5.5-10z"/>',
  herb: '<path d="M12 20.5V8"/><path d="M12 12.5c-3 0-5.2-2.2-5.2-5.2 3 0 5.2 2.2 5.2 5.2z"/><path d="M12 16.5c3 0 5.2-2.2 5.2-5.2-3 0-5.2 2.2-5.2 5.2z"/>',
};

function icon(name, size = 24) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

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

function fmt(n) { return `${n} $`; }

function itemQ(it) {
  return `${it.n} ${it.d || ""}`.toLowerCase();
}

function findBeer(name) {
  for (const f of BEERS) {
    const item = f.items.find((b) => b[0] === name);
    if (item) return { type: "beer", ctx: f, item };
  }
  return null;
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
    if (s.note) g.appendChild(el("p", "g-note", s.note));
    const card = el("div", "card");
    s.items.forEach((item) => {
      const row = el("button", "mrow");
      row.type = "button";
      row.dataset.q = itemQ(item);
      const cfg = (item.sizes || item.vgroups || item.extras) ? `<span class="cfg-hint">personnalisable</span>` : "";
      const mini = item.ing
        ? `<div class="ing-mini" aria-hidden="true">${item.ing.map(([ic]) => icon(ic, 15)).join("")}</div>`
        : "";
      row.innerHTML =
        `<div class="m-main"><div class="m-name">${item.n}</div>${item.d ? `<div class="m-desc">${item.d}</div>` : ""}${mini}</div>` +
        `<div class="m-right"><div class="m-price">${item.pd}</div>${cfg}</div>`;
      row.addEventListener("click", () => openFoodSheet(s, item, row));
      card.appendChild(row);
    });
    g.appendChild(card);
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
      row.addEventListener("click", () => openBeerSheet(f, item, row));
      card.appendChild(row);
    });
    g.appendChild(card);
    wrap.appendChild(g);
  });
}

/* ————— Item modal (centered, swipeable, configurable) ————— */
let lastFocus = null;
let closeTimer = null;
let lockedScrollY = 0;
let sheetList = [];
let sheetIndex = 0;
let navigating = false;
let cfg = { size: 0, v: [], extras: new Set() };
let pairReturn = null;

const FOOD_FLAT = FOOD.flatMap((s) => s.items.map((item) => ({ type: "food", ctx: s, item })));
const BEER_FLAT = BEERS.flatMap((f) => f.items.map((item) => ({ type: "beer", ctx: f, item })));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function computeTotal(it) {
  let total = it.sizes ? it.sizes[cfg.size][1] : (it.price || 0);
  (it.vgroups || []).forEach((g, gi) => { total += g.opts[cfg.v[gi] || 0][1]; });
  (it.extras || []).forEach((ex, xi) => { if (cfg.extras.has(xi)) total += ex[1]; });
  return total;
}

function pairingHTML(it) {
  if (!it.pair) return "";
  const b = findBeer(it.pair);
  if (!b) return "";
  const [name, style, abv, color] = b.item;
  return `<div class="pairing"><h3>Accord bière</h3>` +
    `<button type="button" class="pair-card" data-pair="${name}">` +
    `<span class="keg" style="--beer:${color}"></span>` +
    `<span class="pair-main"><span class="b-name">${name}</span><span class="b-style">${style} · ${abv}</span></span>` +
    `<span class="pair-go">Voir ›</span></button></div>`;
}

function sheetHTML(entry) {
  if (entry.type === "beer") {
    const [name, style, abv, color, pal, long] = entry.item;
    const bars = PALETTE_AXES.map(([k, label]) =>
      `<div class="pal-row"><span class="pal-label">${label}</span><span class="pal-track"><span class="pal-fill" style="width:${(pal[k] / 5) * 100}%"></span></span><span class="pal-val">${pal[k]}/5</span></div>`
    ).join("");
    const back = pairReturn
      ? `<button type="button" class="pair-back" data-return="1">‹ Retour au plat</button>`
      : "";
    return back +
      `<div class="sheet-glass-wrap"><div class="glass" style="--beer:${color}"><span class="glass-foam"></span></div></div>` +
      `<div class="sheet-head"><h2 id="sheet-title">${name}</h2><span class="abv abv-big">${abv}</span></div>` +
      `<p class="sheet-kicker">${style} · ${entry.ctx.family}</p>` +
      `<div class="palette"><h3>Palette de goût</h3>${bars}</div>` +
      `<p class="sheet-desc">${long}</p>`;
  }
  const it = entry.item;
  const photo = it.ing
    ? `<div class="ing-hero${it.ing.length > 3 ? " n4" : ""}" role="img" aria-label="Ingrédients : ${it.ing.map((x) => x[1]).join(", ")}">` +
      it.ing.map(([ic, label]) => `<span class="ing-cell">${icon(ic, 38)}<span class="ing-l">${label}</span></span>`).join('<span class="ing-sep" aria-hidden="true"></span>') +
      `</div>`
    : it.img
      ? `<div class="sheet-photo"><img src="img/${it.img}.jpg" alt="" loading="lazy"></div>`
      : `<div class="sheet-photo art-only" style="background:${entry.ctx.art}"></div>`;
  let html = photo +
    `<div class="sheet-head"><h2 id="sheet-title">${it.n}</h2><span class="sheet-price" id="sheet-total" aria-live="polite">${fmt(computeTotal(it))}</span></div>` +
    `<p class="sheet-kicker">${entry.ctx.name} · ${entry.ctx.sub}</p>` +
    (it.d ? `<p class="sheet-sub">${it.d}</p>` : "") +
    `<p class="sheet-desc">${it.long}</p>`;
  let gid = 0;
  if (it.sizes) {
    const hid = `cfg-h-${gid++}`;
    html += `<div class="cfg" role="group" aria-labelledby="${hid}"><h3 id="${hid}">Format</h3><div class="seg">` +
      it.sizes.map(([label, p], i) =>
        `<button type="button" class="seg-b${i === cfg.size ? " on" : ""}" data-size="${i}" aria-pressed="${i === cfg.size}">${label}<small>${fmt(p)}</small></button>`).join("") +
      `</div></div>`;
  }
  (it.vgroups || []).forEach((g, gi) => {
    const hid = `cfg-h-${gid++}`;
    html += `<div class="cfg" role="group" aria-labelledby="${hid}"><h3 id="${hid}">${g.t}</h3><div class="opts">` +
      g.opts.map(([label, delta], oi) =>
        `<button type="button" class="opt${(cfg.v[gi] || 0) === oi ? " on" : ""}" data-vg="${gi}" data-oi="${oi}" aria-pressed="${(cfg.v[gi] || 0) === oi}"><span>${label}</span><span class="opt-p">${delta ? "+" + fmt(delta) : ""}</span></button>`).join("") +
      `</div></div>`;
  });
  if (it.extras) {
    const hid = `cfg-h-${gid++}`;
    html += `<div class="cfg" role="group" aria-labelledby="${hid}"><h3 id="${hid}">Extras suggérés</h3><div class="opts">` +
      it.extras.map(([label, p], xi) =>
        `<button type="button" class="opt x${cfg.extras.has(xi) ? " on" : ""}" data-extra="${xi}" aria-pressed="${cfg.extras.has(xi)}"><span>${label}</span><span class="opt-p">+${fmt(p)}</span></button>`).join("") +
      `</div></div>`;
  }
  html += pairingHTML(it);
  if (it.img) html += creditLine(it.img);
  return html;
}

let counterTimer = null;

function renderSheet(resetCfg = true) {
  const entry = sheetList[sheetIndex];
  if (resetCfg && entry.type === "food") {
    cfg = { size: 0, v: (entry.item.vgroups || []).map(() => 0), extras: new Set() };
  }
  const body = $("#sheet-body");
  const hadFocusInside = body.contains(document.activeElement);
  body.innerHTML = sheetHTML(entry);
  if (hadFocusInside) $("#sheet-close").focus({ preventScroll: true });
  if (counterTimer) clearTimeout(counterTimer);
  counterTimer = window.setTimeout(() => {
    $("#s-counter").textContent = `${sheetIndex + 1} / ${sheetList.length}`;
    counterTimer = null;
  }, 280);
  $("#snav-prev").disabled = sheetIndex === 0;
  $("#snav-next").disabled = sheetIndex === sheetList.length - 1;
  if (resetCfg) $("#sheet-scroll").scrollTop = 0;
}

function creditLine(imgKey) {
  const c = CREDITS[imgKey];
  if (!c) return "";
  return `<p class="sheet-credit">Photo d'illustration — <a href="${c.url}" target="_blank" rel="noopener">${c.artist}</a> (${c.license}), Wikimedia Commons</p>`;
}

function openFoodSheet(section, item, trigger) {
  sheetList = FOOD_FLAT;
  sheetIndex = FOOD_FLAT.findIndex((e) => e.item === item);
  openSheet(trigger);
}

function openBeerSheet(family, item, trigger) {
  sheetList = BEER_FLAT;
  sheetIndex = BEER_FLAT.findIndex((e) => e.item === item);
  openSheet(trigger);
}

function openSheet(trigger) {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
  cancelNavTimers();
  pairReturn = null;
  lastFocus = trigger || document.activeElement;
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

function setBodyFx(el2, x, rot, op) {
  el2.style.transform = x === 0 && rot === 0 ? "" : `translateX(${x}px) rotate(${rot}deg)`;
  el2.style.opacity = op === 1 ? "" : String(op);
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

/* Config interactions (event delegation — DOM is re-rendered per item) */
$("#sheet-body").addEventListener("click", (e) => {
  const entry = sheetList[sheetIndex];
  const backBtn = e.target.closest("[data-return]");
  if (backBtn && pairReturn) {
    cancelNavTimers();
    sheetList = pairReturn.list;
    sheetIndex = pairReturn.index;
    pairReturn = null;
    renderSheet(false);
    $("#sheet-close").focus({ preventScroll: true });
    return;
  }
  const pairBtn = e.target.closest("[data-pair]");
  if (pairBtn) {
    const b = findBeer(pairBtn.dataset.pair);
    if (b) {
      cancelNavTimers();
      pairReturn = { list: sheetList, index: sheetIndex };
      sheetList = BEER_FLAT;
      sheetIndex = BEER_FLAT.findIndex((x) => x.item === b.item);
      renderSheet();
      $("#sheet-close").focus({ preventScroll: true });
    }
    return;
  }
  if (!entry || entry.type !== "food") return;
  const it = entry.item;
  const seg = e.target.closest("[data-size]");
  const opt = e.target.closest("[data-vg]");
  const ext = e.target.closest("[data-extra]");
  let refocusSel = null;
  if (seg) {
    cfg.size = Number(seg.dataset.size);
    refocusSel = `[data-size="${seg.dataset.size}"]`;
  } else if (opt) {
    cfg.v[Number(opt.dataset.vg)] = Number(opt.dataset.oi);
    refocusSel = `[data-vg="${opt.dataset.vg}"][data-oi="${opt.dataset.oi}"]`;
  } else if (ext) {
    const xi = Number(ext.dataset.extra);
    if (cfg.extras.has(xi)) cfg.extras.delete(xi); else cfg.extras.add(xi);
    refocusSel = `[data-extra="${xi}"]`;
  } else return;
  const body = $("#sheet-body");
  const hadFocusInside = body.contains(document.activeElement);
  const keepScroll = $("#sheet-scroll").scrollTop;
  renderSheet(false);
  $("#sheet-scroll").scrollTop = keepScroll;
  if (hadFocusInside && refocusSel) {
    const again = body.querySelector(refocusSel);
    if (again) again.focus({ preventScroll: true });
  }
});

/* Swipe: horizontal drag on the card follows the finger, then commits or springs back */
(() => {
  const sheet = $("#sheet");
  const body = $("#sheet-body");
  let startX = 0, startY = 0, dx = 0, axis = null, active = false;

  sheet.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1 || navigating) return;
    if (e.target.closest(".seg, .opts, .pair-card, .pair-back")) return;
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
  if (sheet.hidden || !sheet.classList.contains("show")) return;
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
  if (lastFocus && lastFocus !== document.body && lastFocus.isConnected && lastFocus.offsetParent !== null) {
    lastFocus.focus({ preventScroll: true });
  } else if (lastFocus && lastFocus !== document.body) {
    const tab = document.querySelector('.tab[aria-selected="true"]');
    if (tab) tab.focus({ preventScroll: true });
  }
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
  if (e.key === "Escape") { closeSheet(); return; }
  if (document.activeElement && document.activeElement.closest(".cfg")) return;
  if (e.key === "ArrowLeft") navigate(-1);
  else if (e.key === "ArrowRight") navigate(1);
});
