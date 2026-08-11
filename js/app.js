// broue — data + rendering. Menu réel du Brouemont (lebrouemont.com), août 2026.

const FOOD = [
  {
    id: "entrees", name: "Entrées", sub: "pour ouvrir",
    art: "radial-gradient(circle at 30% 25%, #F6C368, transparent 55%), linear-gradient(160deg, #E8A33C, #A54A1C)",
    items: [
      ["Escargots", "mozzarella · beurre à l'ail", "10 $"],
      ["Calmars frits", "", "14 $"],
      ["Soupe à l'oignon", "", "10 $"],
      ["Crevettes panées thaï", "", "10 $"],
      ["Bol de chili", "", "15 $"],
      ["Pain à l'ail", "gratiné +2 $", "7 $"],
      ["Bruschettas gratinées", "au fromage de chèvre 12 $", "10 $"],
      ["Pelures de patates", "avec porc effiloché 15 $", "10 $"],
      ["Bâtonnets de fromage (6)", "sauce marinara", "8 $"],
      ["Popcurds", "", "12 $"],
      ["Cornichons frits", "", "8 $"],
      ["Poppers (6)", "jalapeños · crème sure", "8 $"],
      ["Rondelles d'oignon", "", "8 $"],
      ["Ailes de poulet", "6 ou 12 · nature ou buffalo", "10 $ / 17 $"],
    ],
  },
  {
    id: "combos", name: "Combos", sub: "à partager",
    art: "radial-gradient(circle at 70% 70%, #FBDFA8, transparent 50%), linear-gradient(200deg, #D98A3E, #8A4512)",
    items: [
      ["6 ailes + frites", "", "14 $"],
      ["Bruschettas (4) + bâtonnets (2)", "version chèvre 14 $", "10 $"],
      ["Pelures (2) + bâtonnets (4)", "version porc effiloché 14 $", "10 $"],
    ],
  },
  {
    id: "salades", name: "Salades", sub: "petite / grande",
    art: "radial-gradient(circle at 30% 70%, #B9C46A, transparent 55%), linear-gradient(150deg, #8FA341, #4E6323)",
    note: "Garnitures : avocat 5 $ · légumes sautés 6 $ · bleu ou chèvre 7 $ · poulet grillé ou thaï 7 $ · poulet épicé, porc effiloché ou canard 8 $ · saumon grillé 10 $",
    items: [
      ["Salade du chef", "verdure · tomates · concombre · oignons · olives · pousses", "9 $ / 15 $"],
      ["Salade César", "romaine · bacon · croûtons · parmesan · mozzarella", "9 $ / 15 $"],
      ["Salade grecque", "tomates · concombres · féta · olives · oignons", "12 $ / 18 $"],
    ],
  },
  {
    id: "nachos", name: "Nachos", sub: "petit / gros",
    art: "radial-gradient(circle at 65% 30%, #F2CC5B, transparent 55%), linear-gradient(210deg, #E0A93F, #B3572D)",
    items: [
      ["Nachos classiques", "salsa · olives · jalapeños · mozzarella · cheddar", "10 $ / 15 $"],
      ["Au poulet épicé", "", "15 $ / 20 $"],
      ["Au porc effiloché", "", "15 $ / 20 $"],
      ["S&M", "salsa · bleu · bacon · mozzarella · cheddar", "15 $ / 20 $"],
    ],
  },
  {
    id: "poutines", name: "Poutines", sub: "le classique",
    art: "radial-gradient(circle at 40% 30%, #F6DFA0, transparent 55%), linear-gradient(170deg, #D9A85A, #6E4A22)",
    note: "Poutine ou mac&cheese garni — 20 $ : bacon · poulet épicé, thaï ou buffalo · bouchées de poulet · viande fumée 5 oz · porc effiloché. Canard (bacon érable, coulis balsamique) ou bavette — 24 $.",
    items: [
      ["Frites", "", "6 $"],
      ["Patates sucrées", "", "8 $"],
      ["Poutine", "", "10 $ / 14 $"],
      ["Poutine angus", "sauce · bœuf · oignons et champignons sautés", "20 $"],
    ],
  },
  {
    id: "burgers", name: "Burgers", sub: "18 façons",
    art: "radial-gradient(circle at 30% 30%, #F0B463, transparent 50%), linear-gradient(190deg, #C9762E, #5F2F14)",
    note: "Bœuf, poulet grillé ou poulet croustillant. Servis avec salade du chef ou César, ou frites-mayo.",
    items: [
      ["Canadien", "cheddar · bacon régulier ou érable-poivre", "20 $"],
      ["Suisse", "suisse · champignons sautés", "20 $"],
      ["Parisien", "bleu · bacon au choix", "21 $"],
      ["Californien", "chèvre · tomates séchées", "21 $"],
      ["Américain", "cheddar · avocat", "20 $"],
      ["Mexicain", "oka · jalapeños · salsa · guacamole", "21 $"],
      ["Aussie", "brie · portobello", "21 $"],
      ["Texan", "monterey jack · oignons sautés · BBQ à la bière", "20 $"],
      ["Sud-Ouest", "havarti · guacamole · mayo chipotle · oignons frits", "21 $"],
      ["Big Broue", "cheddar · oignons à la bière · tartare · cornichons", "21 $"],
      ["Québécois", "sauce à poutine · fromage en grains · bacon", "21 $"],
      ["Ruben", "suisse · viande fumée · choucroute · tartare", "21 $"],
      ["Cochon", "provolone · porc effiloché · salade de chou · oignons frits", "21 $"],
      ["Thaï", "cheddar · bacon · sauce thaï", "20 $"],
      ["Buffalo", "cheddar ou bleu · bacon · sauce buffalo", "21 $"],
      ["Cow-boy", "cheddar · bacon érable · cornichons frits · sauce cow-boy", "21 $"],
      ["New-York", "gouda · pommes · bacon poivré", "21 $"],
      ["Végétarien", "brie · légumes sautés · mayo pesto · bruschetta", "21 $"],
    ],
  },
  {
    id: "sandwichs", name: "Sandwichs", sub: "baguette, multigrain ou wrap",
    art: "radial-gradient(circle at 70% 25%, #F3D486, transparent 55%), linear-gradient(160deg, #CE9A48, #7A4A1E)",
    items: [
      ["Panini dinde", "brie · mayo aux canneberges", "19 $"],
      ["Panini jambon", "suisse ou cheddar · dijon-miel", "18 $"],
      ["Panini tomates séchées", "chèvre · pesto · au poulet 22 $", "19 $"],
      ["B.L.T. spécial", "bacon · laitue · tomates · fromage · avocat", "19 $"],
      ["Club sandwich", "« le Dufour » à la viande fumée 24 $", "19 $"],
      ["Poulet César", "poulet · laitue · bacon · césar · mozzarella", "19 $"],
      ["Rôti de bœuf chaud", "oignons et champignons sautés · dip", "24 $"],
      ["Canard du Lac-Brome", "brie · pommes · bacon", "24 $"],
      ["Porc effiloché", "oignons frits · salade de chou", "24 $"],
      ["Smoked meat 7 oz", "pain de seigle · moutarde · cornichons", "22 $"],
      ["Panini portobello végé", "", "19 $"],
      ["Le garni", "poulet, bœuf, porc ou canard · légumes · fromage au choix", "24 $"],
    ],
  },
  {
    id: "poisson", name: "Poisson", sub: "de la mer",
    art: "radial-gradient(circle at 35% 65%, #9FC4CB, transparent 55%), linear-gradient(150deg, #6FA3AD, #2E5B66)",
    items: [
      ["Fish & chips", "pâte à la bière maison", "22 $"],
      ["Burger de saumon grillé", "", "19 $"],
      ["Saumon sur planche de cèdre", "", "28 $"],
    ],
  },
  {
    id: "grillades", name: "Grillades", sub: "sur le gril",
    art: "radial-gradient(circle at 60% 70%, #D96A45, transparent 50%), linear-gradient(200deg, #A33B24, #3E1710)",
    note: "Servies avec salade ou frites-mayo et champignons sautés. À côté : rondelles +3 $ · patates sucrées +4 $ · grecque +4 $ · poutine +5 $",
    items: [
      ["Bavette", "", "30 $"],
      ["Filet mignon 8 oz", "", "35 $"],
      ["Côtes levées", "", "30 $"],
    ],
  },
  {
    id: "enfants", name: "Pour les petits", sub: "dessert et jus inclus",
    art: "radial-gradient(circle at 30% 30%, #F5D06E, transparent 55%), linear-gradient(180deg, #E8B44C, #B3752A)",
    items: [
      ["Doigts de poulet", "", "12 $"],
      ["Mini pogos", "", "12 $"],
      ["Mini poutine", "", "12 $"],
      ["Macaroni au fromage", "", "12 $"],
    ],
  },
  {
    id: "breuvages", name: "Breuvages", sub: "sans houblon",
    art: "radial-gradient(circle at 65% 35%, #EFE3C8, transparent 55%), linear-gradient(170deg, #C9B98F, #6E5B44)",
    note: "Mayos : régulière · ail · cari · épicée · raifort — Sauces : bleu · épicée · thaï · miel · ranch · crème sure · BBQ · aigre-douce. Taxes en sus.",
    items: [
      ["Liqueur en canette", "Pepsi · 7up · limonade · ginger ale · thé glacé", "4 $"],
      ["Jus de fruits", "pomme · orange · ananas · raisin", "3 $"],
      ["Perrier", "", "5 $"],
      ["Lait", "au chocolat 4 $", "3 $"],
      ["Chocolat chaud", "", "5 $"],
      ["Café, thé, tisane", "", "3 $"],
    ],
  },
];

const BEERS = [
  {
    family: "Blondes, blanches & de saison",
    items: [
      ["Blonde", "Golden ale", "5,5 %", "#E9C64F"],
      ["Pilsner", "Pilsner allemande", "5 %", "#F0D26A"],
      ["Weizen", "Blé, hefeweizen", "5 %", "#EDD98F"],
      ["Blanche aux bleuets", "Blé fruité", "6 %", "#8F7BB8"],
      ["Saison d'épeautre", "Saison fermière", "5 %", "#E4C978"],
      ["Framboise et miel", "Blonde fruitée", "5,5 %", "#E08A9B"],
    ],
  },
  {
    family: "Houblonnées",
    items: [
      ["India Pale Ale", "IPA américaine", "6,5 %", "#E7A93C"],
      ["NEIPA Session", "IPA de session", "4,5 %", "#EBB865"],
      ["Lost in the Clouds", "NEIPA voilée", "6,5 %", "#EBB865"],
      ["Orange Crush", "NEIPA", "6,5 %", "#E8A34E"],
      ["Elbows Hop", "NEIPA", "6,8 %", "#E8A34E"],
      ["Down Under", "Double NEIPA impériale", "8 %", "#D89440"],
    ],
  },
  {
    family: "Rousses & ambrées",
    items: [
      ["Rousse", "Red ale", "5 %", "#B0521E"],
      ["Rousse à l'érable", "Red ale, érable", "5,5 %", "#A54A1C"],
      ["Irish Red Ale", "Rousse irlandaise", "5 %", "#9E4522"],
    ],
  },
  {
    family: "Noires & fortes",
    items: [
      ["Scotch Ale", "Wee heavy", "8 %", "#5A3A22"],
      ["Harvest Moon", "Stout au lait", "6,7 %", "#33211A"],
    ],
  },
  {
    family: "Sûres & rafraîchissantes",
    items: [
      ["Gose", "Sûre fruitée, salée", "5 %", "#E8C1A0"],
      ["Radler Sour", "Radler", "3,5 %", "#F2D379"],
      ["Peach Ring Smoothie", "Sûre smoothie", "3 %", "#F0B47E"],
    ],
  },
];

const $ = (sel, el = document) => el.querySelector(sel);
const totalItems = FOOD.reduce((n, s) => n + s.items.length, 0) + BEERS.reduce((n, f) => n + f.items.length, 0);

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
    s.items.forEach(([name, desc, price]) => {
      const row = el("div", "mrow");
      row.dataset.q = (name + " " + desc).toLowerCase();
      row.innerHTML =
        `<div class="m-main"><div class="m-name">${name}</div>${desc ? `<div class="m-desc">${desc}</div>` : ""}</div>` +
        `<div class="m-price">${price}</div>`;
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
    f.items.forEach(([name, style, abv, color]) => {
      const row = el("div", "brow");
      row.dataset.q = (name + " " + style).toLowerCase();
      row.innerHTML =
        `<span class="keg" style="--beer:${color}"></span>` +
        `<div class="m-main"><div class="b-name">${name}</div><div class="b-style">${style}</div></div>` +
        `<span class="abv">${abv}</span>`;
      card.appendChild(row);
    });
    g.appendChild(card);
    wrap.appendChild(g);
  });
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
