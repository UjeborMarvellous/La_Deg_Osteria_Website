/* ============================================================
   La DegOsteria — i18n
   Default IT (Ancona osteria) + EN / FR / DE.
   Dish NAMES stay Italian by design (authentic menu); their
   hover "type" tags and all surrounding copy are translated.
   Values may contain trusted inline HTML (<em>, <i>, <br>).
   ============================================================ */
(function () {
  "use strict";

  var I18N = {
    /* ---------------- ITALIANO (default) ---------------- */
    it: {
      "doc.title": "La DegOsteria · Osteria nel cuore di Ancona — Terra, Mare, Verdicchio",
      "nav.story": "La Storia",
      "nav.landsea": "Terra &amp; Mare",
      "nav.kitchen": "La Cucina",
      "nav.cellar": "La Cantina",
      "nav.contact": "Orari &amp; Contatti",
      "cta.book": "Prenota un tavolo",
      "cta.book_short": "Prenota · 071 203031",

      "hero.eyebrow": "Osteria · Via Pizzecolli 3, Ancona",
      "hero.sub": "Cucina di terra e di mare nel cuore antico di Ancona.<br>Tre amici, una sola idea: <em>riscoprire il piacere di stare insieme.</em>",
      "cta.menu": "Scopri il menù",
      "hero.scroll": "scorri",
      "hero.dish_cap": "Il piatto firma · Stoccafisso all'anconitana",

      "mq.terra": "Terra", "mq.mare": "Mare", "mq.verd": "Verdicchio",
      "mq.cozze": "Cozze del Conero", "mq.trad": "Tradizione marchigiana",

      "story.label": "La Storia",
      "story.quote": "«Riscoprire il piacere<br>di stare <em>insieme</em>.»",
      "story.p1": "Nel cuore antico di Ancona, a due passi dalla cattedrale, c'è una tavola apparecchiata da tre amici. Anni di sala e di cucina, una passione condivisa e un'unica convinzione: ogni piatto racconta una storia, e le storie migliori si ascoltano in compagnia.",
      "story.p2": "Materie prime fresche, mani che conoscono il mestiere e una carta che parla la lingua delle Marche: dal ragù della tradizione alle cozze del Conero, dal Verdicchio versato giusto al dolce che strappa un sorriso.",
      "story.scrollhint": "continua a scorrere",
      "role.danilo": "In sala · l'accoglienza",
      "role.marco": "Ai fornelli · la cucina",
      "role.matteo": "Alla cantina · i vini",

      "ls.label": "Due anime, una cucina",
      "ls.title": "Terra <i>e</i> Mare",
      "ls.earth_kicker": "La brace, il ragù, la Fassona",
      "ls.earth_title": "Terra",
      "ls.earth_text": "Battuta di Fassona, tagliata al rosmarino, cappellaccio ai carciofi con ragù d'agnello. Il fuoco lento dell'entroterra marchigiano.",
      "ls.sea_kicker": "L'Adriatico nel piatto",
      "ls.sea_title": "Mare",
      "ls.sea_text": "Cozze del Conero, vongole dell'Adriatico, lo stoccafisso all'anconitana. La corrente fredda che incontra la tavola calda.",
      "flip.hint": "Tocca per vedere la preparazione",
      "flip.back": "↩ Torna",
      "flip.earth_back": "In cucina · la terra",
      "flip.sea_back": "In cucina · il mare",

      "kitchen.label": "La Cucina",
      "kitchen.title": "Il menù è la prova",
      "kitchen.intro": "Una selezione della carta. Cambia con le stagioni, con il mercato e con l'umore della brigata: l'unica costante è la mano.",
      "tab.antipasti": "Antipasti",
      "tab.primi": "Primi",
      "tab.secondi": "Secondi",
      "tab.dolci": "Dolci",
      "col.terra": "Di terra",
      "col.mare": "Di mare",
      "col.dolci": "Per finire col sorriso",
      "menu.note": "Prezzi in euro. La carta completa cambia con il mercato del giorno.",
      "menu.hint": "Passa sopra un piatto per scoprire cos'è",
      "firma.badge": "il piatto firma",

      "type.beef": "Carne · Manzo", "type.veal": "Carne · Vitello",
      "type.pork": "Carne · Maialino", "type.egg": "Vegetariano · Uovo",
      "type.tuna": "Crudo · Tonno", "type.shrimp": "Crudo · Gambero rosso",
      "type.mussels": "Mare · Cozze", "type.octopus": "Mare · Polpo",
      "type.pasta_terra": "Primo · Pasta di terra", "type.pasta_mare": "Primo · Pasta di mare",
      "type.stockfish": "Mare · Stoccafisso", "type.grill": "Mare · Grigliata",
      "type.amberjack": "Pesce · Ricciola", "type.dessert": "Dolce",

      "firma.label": "Il piatto firma",
      "firma.title": "Stoccafisso<br><em>all'anconitana</em>",
      "firma.text": "La ricetta che ad Ancona è una religione: stoccafisso, patate, pomodoro e olio dei colli, cotto piano finché il mare e la terra smettono di litigare. 22&nbsp;euro di storia cittadina.",
      "firma.cta": "Prenota per assaggiarlo",

      "booking.title": "Prenota il tuo tavolo",
      "booking.sub": "Vi richiamiamo per confermare. Nessun anticipo.",
      "booking.name": "Nome e cognome",
      "booking.guests": "Persone",
      "booking.date": "Data",
      "booking.time": "Ora",
      "booking.phone": "Telefono",
      "booking.submit": "Richiedi il tavolo",
      "booking.success": "Grazie! Abbiamo ricevuto la richiesta — vi richiamiamo a breve per confermare.",
      "booking.again": "Nuova richiesta",
      "booking.demo": "Demo: nessun dato viene inviato.",

      "cantina.label": "La Cantina",
      "cantina.title": "Il Verdicchio<br>versato <em>giusto</em>",
      "cantina.intro": "La nostra carta dei vini parla marchigiano: bianchi di collina che sanno di mandorla e di mare, scelti bottiglia per bottiglia dai produttori della regione.",
      "wine.flip_hint": "Tocca per l'abbinamento",
      "wine.verd_note": "Il bianco che ha fatto grandi le Marche. Con le cozze del Conero non si discute.",
      "wine.verd_pair": "Abbinamento · Cozze del Conero, crudi di mare, stoccafisso.",
      "wine.pass_note": "Fresca, agrumata, di poche parole: l'aperitivo che diventa cena.",
      "wine.pass_pair": "Abbinamento · Fritture, tartare di tonno, aperitivo lungo.",
      "wine.pec_note": "Nervo e sale. Il compagno giusto dei crudi e delle fritture.",
      "wine.pec_pair": "Abbinamento · Gambero rosso, polpo, primi di mare.",
      "wine.range": "Bottiglie da 17 a 34 euro · al calice ogni sera",

      "degostreet": "<strong>DegoStreet</strong> — la nostra anima street food, sempre ad Ancona. Stessa mano, meno posate.",

      "contatti.label": "Orari &amp; Contatti",
      "contatti.title": "Il tavolo<br>vi <em>aspetta</em>",
      "contatti.hours_h": "Orari",
      "day.mon": "Lunedì", "day.tuefri": "Mar – Ven", "day.sat": "Sabato", "day.sun": "Domenica",
      "closed": "chiuso",
      "contatti.where_h": "Dove siamo",
      "contatti.where_text": "Via Pizzecolli 3, Ancona<br>cuore antico della città",
      "contatti.maps": "Apri in Google Maps →",
      "contatti.book_h": "Prenota",

      "footer.tag": "Terra, mare e il piacere di stare insieme.",
      "footer.fine": "La DegOsteria · Via Pizzecolli 3, Ancona · +39 071 203031",

      "lang.label": "Lingua",
      "chat.title": "Chiedi alla DegOsteria",
      "chat.sub": "Assistente · demo",
      "chat.placeholder": "Scrivi un messaggio…",
      "chat.send": "Invia",
      "chat.open": "Apri la chat",
      "chat.greeting": "Ciao! 👋 Sono l'assistente della DegOsteria. Posso aiutarti con orari, prenotazioni, menù, vini o come arrivare. Cosa ti serve?",
      "chat.q_hours": "Orari", "chat.q_book": "Prenotare", "chat.q_menu": "Menù", "chat.q_where": "Dove siete",
      "chat.a_hours": "Siamo aperti Mar–Ven 12:30–14:30 e 19:30–22:30, Sab solo sera 19:30–22:30, Dom pranzo e cena. Lunedì chiuso. 🍷",
      "chat.a_book": "Volentieri! Puoi prenotare dal pulsante «Prenota un tavolo» qui sopra, oppure chiamarci allo 071 203031. Per quante persone e per quale sera?",
      "chat.a_menu": "La carta cambia col mercato: terra (Fassona, ragù, tagliata) e mare (cozze del Conero, tonno, stoccafisso all'anconitana). Antipasti da 12€, primi da 15€, secondi da 20€. Vuoi che ti consigli un piatto?",
      "chat.a_where": "Siamo in Via Pizzecolli 3, nel cuore antico di Ancona, a due passi dalla cattedrale. 📍",
      "chat.a_wine": "La cantina è tutta marchigiana: Verdicchio dei Castelli di Jesi, Passerina, Pecorino. Bottiglie da 17 a 34€, anche al calice ogni sera.",
      "chat.a_default": "Bella domanda! Per i dettagli più precisi chiamaci allo 071 203031 o usa «Prenota un tavolo». Posso aiutarti con orari, menù, vini o come arrivare. 🙂"
    }
  };

  /* ---------------- ENGLISH ---------------- */
  I18N.en = {
    "doc.title": "La DegOsteria · Osteria in the heart of Ancona — Land, Sea, Verdicchio",
    "nav.story": "The Story", "nav.landsea": "Land &amp; Sea", "nav.kitchen": "The Kitchen",
    "nav.cellar": "The Cellar", "nav.contact": "Opening Hours &amp; Contacts",
    "cta.book": "Book a table", "cta.book_short": "Book · 071 203031",
    "hero.eyebrow": "Osteria · Via Pizzecolli 3, Ancona",
    "hero.sub": "Cooking of land and sea in the old heart of Ancona.<br>Three friends, one idea: <em>rediscovering the pleasure of being together.</em>",
    "cta.menu": "See the menu", "hero.scroll": "scroll",
    "hero.dish_cap": "The signature dish · Ancona-style stockfish",
    "mq.terra": "Land", "mq.mare": "Sea", "mq.verd": "Verdicchio",
    "mq.cozze": "Conero mussels", "mq.trad": "Marche tradition",
    "story.label": "The Story",
    "story.quote": "«Rediscovering the pleasure<br>of being <em>together</em>.»",
    "story.p1": "In the old heart of Ancona, steps from the cathedral, a table is set by three friends. Years in the dining room and the kitchen, a shared passion and one belief: every dish tells a story, and the best stories are heard in good company.",
    "story.p2": "Fresh ingredients, hands that know the craft and a menu that speaks the language of the Marche: from traditional ragù to Conero mussels, from Verdicchio poured just right to a dessert that earns a smile.",
    "story.scrollhint": "keep scrolling",
    "role.danilo": "Front of house · the welcome",
    "role.marco": "At the stove · the kitchen",
    "role.matteo": "The cellar · the wines",
    "ls.label": "Two souls, one kitchen", "ls.title": "Land <i>and</i> Sea",
    "ls.earth_kicker": "The grill, the ragù, the Fassona", "ls.earth_title": "Land",
    "ls.earth_text": "Fassona beef tartare, sliced beef with rosemary, artichoke cappellaccio with lamb ragù. The slow fire of the Marche hinterland.",
    "ls.sea_kicker": "The Adriatic on your plate", "ls.sea_title": "Sea",
    "ls.sea_text": "Conero mussels, Adriatic clams, Ancona-style stockfish. The cold current meeting the warm table.",
    "flip.hint": "Tap to watch the prep", "flip.back": "↩ Back",
    "flip.earth_back": "In the kitchen · land", "flip.sea_back": "In the kitchen · sea",
    "kitchen.label": "The Kitchen", "kitchen.title": "The menu is the proof",
    "kitchen.intro": "A selection from the menu. It changes with the seasons, the market and the mood of the crew: the only constant is the hand.",
    "tab.antipasti": "Starters", "tab.primi": "First courses", "tab.secondi": "Mains", "tab.dolci": "Desserts",
    "col.terra": "From the land", "col.mare": "From the sea", "col.dolci": "To finish with a smile",
    "menu.note": "Prices in euros. The full menu changes with the daily market.",
    "menu.hint": "Hover a dish to see what it is", "firma.badge": "signature dish",
    "type.beef": "Meat · Beef", "type.veal": "Meat · Veal", "type.pork": "Meat · Pork",
    "type.egg": "Vegetarian · Egg", "type.tuna": "Raw · Tuna", "type.shrimp": "Raw · Red prawn",
    "type.mussels": "Sea · Mussels", "type.octopus": "Sea · Octopus",
    "type.pasta_terra": "Pasta · from the land", "type.pasta_mare": "Pasta · from the sea",
    "type.stockfish": "Sea · Stockfish", "type.grill": "Sea · Mixed grill",
    "type.amberjack": "Fish · Amberjack", "type.dessert": "Dessert",
    "firma.label": "The signature dish",
    "firma.title": "Stockfish<br><em>Ancona-style</em>",
    "firma.text": "The recipe that is a religion in Ancona: stockfish, potatoes, tomato and oil from the hills, cooked slowly until sea and land stop fighting. 22&nbsp;euros of city history.",
    "firma.cta": "Book to taste it",
    "booking.title": "Book your table", "booking.sub": "We'll call back to confirm. No deposit.",
    "booking.name": "Full name", "booking.guests": "Guests", "booking.date": "Date", "booking.time": "Time",
    "booking.phone": "Phone", "booking.submit": "Request the table",
    "booking.success": "Thank you! We've received your request — we'll call shortly to confirm.",
    "booking.again": "New request", "booking.demo": "Demo: nothing is actually sent.",
    "cantina.label": "The Cellar", "cantina.title": "Verdicchio<br>poured <em>just right</em>",
    "cantina.intro": "Our wine list speaks Marche: hillside whites with notes of almond and sea, chosen bottle by bottle from the region's growers.",
    "wine.flip_hint": "Tap for the pairing",
    "wine.verd_note": "The white that made the Marche great. With Conero mussels there's no argument.",
    "wine.verd_pair": "Pairing · Conero mussels, raw seafood, stockfish.",
    "wine.pass_note": "Fresh, citrusy, a wine of few words: the aperitivo that becomes dinner.",
    "wine.pass_pair": "Pairing · Fried plates, tuna tartare, a long aperitivo.",
    "wine.pec_note": "Nerve and salt. The right companion for raw plates and fried food.",
    "wine.pec_pair": "Pairing · Red prawn, octopus, seafood pasta.",
    "wine.range": "Bottles from 17 to 34 euros · by the glass every evening",
    "degostreet": "<strong>DegoStreet</strong> — our street-food soul, still in Ancona. Same hands, less cutlery.",
    "contatti.label": "Opening Hours &amp; Contacts", "contatti.title": "Your table<br>is <em>waiting</em>",
    "contatti.hours_h": "Hours",
    "day.mon": "Monday", "day.tuefri": "Tue – Fri", "day.sat": "Saturday", "day.sun": "Sunday",
    "closed": "closed",
    "contatti.where_h": "Where we are",
    "contatti.where_text": "Via Pizzecolli 3, Ancona<br>the old heart of the city",
    "contatti.maps": "Open in Google Maps →", "contatti.book_h": "Book",
    "footer.tag": "Land, sea and the pleasure of being together.",
    "footer.fine": "La DegOsteria · Via Pizzecolli 3, Ancona · +39 071 203031",
    "lang.label": "Language",
    "chat.title": "Ask the DegOsteria", "chat.sub": "Assistant · demo",
    "chat.placeholder": "Type a message…", "chat.send": "Send", "chat.open": "Open chat",
    "chat.greeting": "Hi! 👋 I'm the DegOsteria assistant. I can help with hours, bookings, the menu, wines or how to find us. What do you need?",
    "chat.q_hours": "Hours", "chat.q_book": "Booking", "chat.q_menu": "Menu", "chat.q_where": "Where",
    "chat.a_hours": "We're open Tue–Fri 12:30–14:30 and 19:30–22:30, Sat evenings only 19:30–22:30, Sun lunch and dinner. Closed Mondays. 🍷",
    "chat.a_book": "With pleasure! You can book from the “Book a table” button above, or call us on 071 203031. How many people and which evening?",
    "chat.a_menu": "The menu follows the market: land (Fassona, ragù, sliced beef) and sea (Conero mussels, tuna, Ancona-style stockfish). Starters from €12, first courses from €15, mains from €20. Want a recommendation?",
    "chat.a_where": "We're at Via Pizzecolli 3, in the old heart of Ancona, steps from the cathedral. 📍",
    "chat.a_wine": "The cellar is all Marche: Verdicchio dei Castelli di Jesi, Passerina, Pecorino. Bottles from €17 to €34, also by the glass every evening.",
    "chat.a_default": "Good question! For the precise details call us on 071 203031 or use “Book a table”. I can help with hours, the menu, wines or directions. 🙂"
  };

  /* ---------------- FRANÇAIS ---------------- */
  I18N.fr = {
    "doc.title": "La DegOsteria · Osteria au cœur d'Ancône — Terre, Mer, Verdicchio",
    "nav.story": "L'Histoire", "nav.landsea": "Terre &amp; Mer", "nav.kitchen": "La Cuisine",
    "nav.cellar": "La Cave", "nav.contact": "Horaires &amp; Contacts",
    "cta.book": "Réserver une table", "cta.book_short": "Réserver · 071 203031",
    "hero.eyebrow": "Osteria · Via Pizzecolli 3, Ancône",
    "hero.sub": "Cuisine de terre et de mer au cœur ancien d'Ancône.<br>Trois amis, une seule idée : <em>retrouver le plaisir d'être ensemble.</em>",
    "cta.menu": "Voir le menu", "hero.scroll": "défiler",
    "hero.dish_cap": "Le plat signature · Stockfisch à l'anconitaine",
    "mq.terra": "Terre", "mq.mare": "Mer", "mq.verd": "Verdicchio",
    "mq.cozze": "Moules du Conero", "mq.trad": "Tradition des Marches",
    "story.label": "L'Histoire",
    "story.quote": "« Retrouver le plaisir<br>d'être <em>ensemble</em>. »",
    "story.p1": "Au cœur ancien d'Ancône, à deux pas de la cathédrale, une table dressée par trois amis. Des années en salle et en cuisine, une passion partagée et une conviction : chaque plat raconte une histoire, et les meilleures se savourent en bonne compagnie.",
    "story.p2": "Des produits frais, des mains qui connaissent le métier et une carte qui parle la langue des Marches : du ragù traditionnel aux moules du Conero, du Verdicchio servi juste au dessert qui fait sourire.",
    "story.scrollhint": "continuez à défiler",
    "role.danilo": "En salle · l'accueil",
    "role.marco": "Aux fourneaux · la cuisine",
    "role.matteo": "À la cave · les vins",
    "ls.label": "Deux âmes, une cuisine", "ls.title": "Terre <i>et</i> Mer",
    "ls.earth_kicker": "La braise, le ragù, la Fassona", "ls.earth_title": "Terre",
    "ls.earth_text": "Tartare de Fassona, viande tranchée au romarin, cappellaccio aux artichauts et ragù d'agneau. Le feu lent de l'arrière-pays des Marches.",
    "ls.sea_kicker": "L'Adriatique dans l'assiette", "ls.sea_title": "Mer",
    "ls.sea_text": "Moules du Conero, palourdes de l'Adriatique, stockfisch à l'anconitaine. Le courant froid qui rencontre la table chaude.",
    "flip.hint": "Touchez pour voir la préparation", "flip.back": "↩ Retour",
    "flip.earth_back": "En cuisine · la terre", "flip.sea_back": "En cuisine · la mer",
    "kitchen.label": "La Cuisine", "kitchen.title": "Le menu est la preuve",
    "kitchen.intro": "Une sélection de la carte. Elle change avec les saisons, le marché et l'humeur de la brigade : la seule constante, c'est la main.",
    "tab.antipasti": "Entrées", "tab.primi": "Premiers plats", "tab.secondi": "Plats", "tab.dolci": "Desserts",
    "col.terra": "De la terre", "col.mare": "De la mer", "col.dolci": "Pour finir en souriant",
    "menu.note": "Prix en euros. La carte complète change selon le marché du jour.",
    "menu.hint": "Survolez un plat pour découvrir ce que c'est", "firma.badge": "plat signature",
    "type.beef": "Viande · Bœuf", "type.veal": "Viande · Veau", "type.pork": "Viande · Cochon de lait",
    "type.egg": "Végétarien · Œuf", "type.tuna": "Cru · Thon", "type.shrimp": "Cru · Gambas rouge",
    "type.mussels": "Mer · Moules", "type.octopus": "Mer · Poulpe",
    "type.pasta_terra": "Pâtes · de la terre", "type.pasta_mare": "Pâtes · de la mer",
    "type.stockfish": "Mer · Stockfisch", "type.grill": "Mer · Grillade",
    "type.amberjack": "Poisson · Sériole", "type.dessert": "Dessert",
    "firma.label": "Le plat signature",
    "firma.title": "Stockfisch<br><em>à l'anconitaine</em>",
    "firma.text": "La recette qui, à Ancône, est une religion : stockfisch, pommes de terre, tomate et huile des collines, cuit lentement jusqu'à ce que mer et terre cessent de se disputer. 22&nbsp;euros d'histoire locale.",
    "firma.cta": "Réservez pour le goûter",
    "booking.title": "Réservez votre table", "booking.sub": "Nous rappelons pour confirmer. Sans acompte.",
    "booking.name": "Nom et prénom", "booking.guests": "Personnes", "booking.date": "Date", "booking.time": "Heure",
    "booking.phone": "Téléphone", "booking.submit": "Demander la table",
    "booking.success": "Merci ! Nous avons reçu votre demande — nous rappelons bientôt pour confirmer.",
    "booking.again": "Nouvelle demande", "booking.demo": "Démo : aucune donnée n'est envoyée.",
    "cantina.label": "La Cave", "cantina.title": "Le Verdicchio<br>servi <em>juste</em>",
    "cantina.intro": "Notre carte des vins parle marchigiano : des blancs de coteaux aux notes d'amande et de mer, choisis bouteille par bouteille chez les producteurs de la région.",
    "wine.flip_hint": "Touchez pour l'accord",
    "wine.verd_note": "Le blanc qui a fait la grandeur des Marches. Avec les moules du Conero, aucun débat.",
    "wine.verd_pair": "Accord · Moules du Conero, crus de mer, stockfisch.",
    "wine.pass_note": "Frais, agrumé, peu bavard : l'apéritif qui devient dîner.",
    "wine.pass_pair": "Accord · Fritures, tartare de thon, apéritif prolongé.",
    "wine.pec_note": "Du nerf et du sel. Le bon compagnon des crus et des fritures.",
    "wine.pec_pair": "Accord · Gambas rouge, poulpe, pâtes de mer.",
    "wine.range": "Bouteilles de 17 à 34 euros · au verre chaque soir",
    "degostreet": "<strong>DegoStreet</strong> — notre âme street food, toujours à Ancône. Même main, moins de couverts.",
    "contatti.label": "Horaires &amp; Contacts", "contatti.title": "La table<br>vous <em>attend</em>",
    "contatti.hours_h": "Horaires",
    "day.mon": "Lundi", "day.tuefri": "Mar – Ven", "day.sat": "Samedi", "day.sun": "Dimanche",
    "closed": "fermé",
    "contatti.where_h": "Où nous sommes",
    "contatti.where_text": "Via Pizzecolli 3, Ancône<br>le cœur ancien de la ville",
    "contatti.maps": "Ouvrir dans Google Maps →", "contatti.book_h": "Réserver",
    "footer.tag": "Terre, mer et le plaisir d'être ensemble.",
    "footer.fine": "La DegOsteria · Via Pizzecolli 3, Ancône · +39 071 203031",
    "lang.label": "Langue",
    "chat.title": "Demandez à la DegOsteria", "chat.sub": "Assistant · démo",
    "chat.placeholder": "Écrivez un message…", "chat.send": "Envoyer", "chat.open": "Ouvrir le chat",
    "chat.greeting": "Bonjour ! 👋 Je suis l'assistant de la DegOsteria. Je peux vous aider pour les horaires, les réservations, le menu, les vins ou l'itinéraire. Que vous faut-il ?",
    "chat.q_hours": "Horaires", "chat.q_book": "Réserver", "chat.q_menu": "Menu", "chat.q_where": "Où",
    "chat.a_hours": "Nous sommes ouverts Mar–Ven 12h30–14h30 et 19h30–22h30, Sam le soir 19h30–22h30, Dim midi et soir. Fermé le lundi. 🍷",
    "chat.a_book": "Avec plaisir ! Réservez via le bouton « Réserver une table » ci-dessus, ou appelez le 071 203031. Pour combien de personnes et quel soir ?",
    "chat.a_menu": "La carte suit le marché : terre (Fassona, ragù, viande tranchée) et mer (moules du Conero, thon, stockfisch à l'anconitaine). Entrées dès 12€, premiers plats dès 15€, plats dès 20€. Une suggestion ?",
    "chat.a_where": "Nous sommes Via Pizzecolli 3, au cœur ancien d'Ancône, à deux pas de la cathédrale. 📍",
    "chat.a_wine": "La cave est toute marchigiana : Verdicchio dei Castelli di Jesi, Passerina, Pecorino. Bouteilles de 17 à 34€, aussi au verre chaque soir.",
    "chat.a_default": "Bonne question ! Pour les détails précis, appelez le 071 203031 ou utilisez « Réserver une table ». Je peux aider pour les horaires, le menu, les vins ou l'itinéraire. 🙂"
  };

  /* ---------------- DEUTSCH ---------------- */
  I18N.de = {
    "doc.title": "La DegOsteria · Osteria im Herzen von Ancona — Land, Meer, Verdicchio",
    "nav.story": "Die Geschichte", "nav.landsea": "Land &amp; Meer", "nav.kitchen": "Die Küche",
    "nav.cellar": "Der Weinkeller", "nav.contact": "Öffnungszeiten &amp; Kontakt",
    "cta.book": "Tisch reservieren", "cta.book_short": "Reservieren · 071 203031",
    "hero.eyebrow": "Osteria · Via Pizzecolli 3, Ancona",
    "hero.sub": "Küche von Land und Meer im alten Herzen von Ancona.<br>Drei Freunde, eine Idee: <em>die Freude am Zusammensein neu entdecken.</em>",
    "cta.menu": "Zur Speisekarte", "hero.scroll": "scrollen",
    "hero.dish_cap": "Das Signature-Gericht · Stockfisch nach Ancona-Art",
    "mq.terra": "Land", "mq.mare": "Meer", "mq.verd": "Verdicchio",
    "mq.cozze": "Conero-Muscheln", "mq.trad": "Marken-Tradition",
    "story.label": "Die Geschichte",
    "story.quote": "«Die Freude<br>am <em>Zusammensein</em> neu entdecken.»",
    "story.p1": "Im alten Herzen von Ancona, wenige Schritte vom Dom, deckt sich ein Tisch für drei Freunde. Jahre im Service und in der Küche, eine geteilte Leidenschaft und eine Überzeugung: Jedes Gericht erzählt eine Geschichte, und die besten hört man in guter Gesellschaft.",
    "story.p2": "Frische Zutaten, Hände, die das Handwerk kennen, und eine Karte, die die Sprache der Marken spricht: vom traditionellen Ragù bis zu den Conero-Muscheln, vom richtig eingeschenkten Verdicchio bis zum Dessert, das ein Lächeln schenkt.",
    "story.scrollhint": "weiter scrollen",
    "role.danilo": "Im Service · der Empfang",
    "role.marco": "Am Herd · die Küche",
    "role.matteo": "Im Keller · die Weine",
    "ls.label": "Zwei Seelen, eine Küche", "ls.title": "Land <i>und</i> Meer",
    "ls.earth_kicker": "Die Glut, das Ragù, die Fassona", "ls.earth_title": "Land",
    "ls.earth_text": "Fassona-Tartar, Rinderscheiben mit Rosmarin, Artischocken-Cappellaccio mit Lamm-Ragù. Das langsame Feuer des Marken-Hinterlands.",
    "ls.sea_kicker": "Die Adria auf dem Teller", "ls.sea_title": "Meer",
    "ls.sea_text": "Conero-Muscheln, Adria-Venusmuscheln, Stockfisch nach Ancona-Art. Die kalte Strömung trifft den warmen Tisch.",
    "flip.hint": "Tippen für die Zubereitung", "flip.back": "↩ Zurück",
    "flip.earth_back": "In der Küche · Land", "flip.sea_back": "In der Küche · Meer",
    "kitchen.label": "Die Küche", "kitchen.title": "Die Karte ist der Beweis",
    "kitchen.intro": "Eine Auswahl aus der Karte. Sie ändert sich mit den Jahreszeiten, dem Markt und der Laune der Brigade: konstant bleibt nur die Hand.",
    "tab.antipasti": "Vorspeisen", "tab.primi": "Erste Gänge", "tab.secondi": "Hauptgänge", "tab.dolci": "Desserts",
    "col.terra": "Vom Land", "col.mare": "Vom Meer", "col.dolci": "Zum lächelnden Abschluss",
    "menu.note": "Preise in Euro. Die vollständige Karte ändert sich mit dem Tagesmarkt.",
    "menu.hint": "Auf ein Gericht zeigen, um zu sehen, was es ist", "firma.badge": "Signature-Gericht",
    "type.beef": "Fleisch · Rind", "type.veal": "Fleisch · Kalb", "type.pork": "Fleisch · Spanferkel",
    "type.egg": "Vegetarisch · Ei", "type.tuna": "Roh · Thunfisch", "type.shrimp": "Roh · Rote Garnele",
    "type.mussels": "Meer · Muscheln", "type.octopus": "Meer · Oktopus",
    "type.pasta_terra": "Pasta · vom Land", "type.pasta_mare": "Pasta · vom Meer",
    "type.stockfish": "Meer · Stockfisch", "type.grill": "Meer · Grillteller",
    "type.amberjack": "Fisch · Bernsteinmakrele", "type.dessert": "Dessert",
    "firma.label": "Das Signature-Gericht",
    "firma.title": "Stockfisch<br><em>nach Ancona-Art</em>",
    "firma.text": "Das Rezept, das in Ancona eine Religion ist: Stockfisch, Kartoffeln, Tomate und Öl von den Hügeln, langsam gegart, bis Meer und Land aufhören zu streiten. 22&nbsp;Euro Stadtgeschichte.",
    "firma.cta": "Reservieren und probieren",
    "booking.title": "Reservieren Sie Ihren Tisch", "booking.sub": "Wir rufen zur Bestätigung zurück. Keine Anzahlung.",
    "booking.name": "Vor- und Nachname", "booking.guests": "Personen", "booking.date": "Datum", "booking.time": "Uhrzeit",
    "booking.phone": "Telefon", "booking.submit": "Tisch anfragen",
    "booking.success": "Danke! Wir haben Ihre Anfrage erhalten — wir rufen in Kürze zur Bestätigung zurück.",
    "booking.again": "Neue Anfrage", "booking.demo": "Demo: Es werden keine Daten gesendet.",
    "cantina.label": "Der Weinkeller", "cantina.title": "Der Verdicchio<br><em>richtig</em> eingeschenkt",
    "cantina.intro": "Unsere Weinkarte spricht Marken: Hügelweißweine mit Mandel- und Meeresnoten, Flasche für Flasche bei den Erzeugern der Region ausgewählt.",
    "wine.flip_hint": "Tippen für die Begleitung",
    "wine.verd_note": "Der Weißwein, der die Marken groß gemacht hat. Zu Conero-Muscheln keine Frage.",
    "wine.verd_pair": "Begleitung · Conero-Muscheln, rohe Meeresfrüchte, Stockfisch.",
    "wine.pass_note": "Frisch, zitrig, wortkarg: der Aperitif, der zum Abendessen wird.",
    "wine.pass_pair": "Begleitung · Frittiertes, Thunfisch-Tartar, langer Aperitif.",
    "wine.pec_note": "Nerv und Salz. Der richtige Begleiter für Rohes und Frittiertes.",
    "wine.pec_pair": "Begleitung · Rote Garnele, Oktopus, Meeres-Pasta.",
    "wine.range": "Flaschen von 17 bis 34 Euro · jeden Abend auch glasweise",
    "degostreet": "<strong>DegoStreet</strong> — unsere Streetfood-Seele, weiterhin in Ancona. Dieselbe Hand, weniger Besteck.",
    "contatti.label": "Öffnungszeiten &amp; Kontakt", "contatti.title": "Der Tisch<br><em>wartet</em> auf Sie",
    "contatti.hours_h": "Öffnungszeiten",
    "day.mon": "Montag", "day.tuefri": "Di – Fr", "day.sat": "Samstag", "day.sun": "Sonntag",
    "closed": "geschlossen",
    "contatti.where_h": "Wo wir sind",
    "contatti.where_text": "Via Pizzecolli 3, Ancona<br>das alte Herz der Stadt",
    "contatti.maps": "In Google Maps öffnen →", "contatti.book_h": "Reservieren",
    "footer.tag": "Land, Meer und die Freude am Zusammensein.",
    "footer.fine": "La DegOsteria · Via Pizzecolli 3, Ancona · +39 071 203031",
    "lang.label": "Sprache",
    "chat.title": "Fragen Sie die DegOsteria", "chat.sub": "Assistent · Demo",
    "chat.placeholder": "Nachricht schreiben…", "chat.send": "Senden", "chat.open": "Chat öffnen",
    "chat.greeting": "Hallo! 👋 Ich bin der Assistent der DegOsteria. Ich helfe bei Öffnungszeiten, Reservierungen, Karte, Weinen oder dem Weg zu uns. Was brauchen Sie?",
    "chat.q_hours": "Zeiten", "chat.q_book": "Reservieren", "chat.q_menu": "Karte", "chat.q_where": "Wo",
    "chat.a_hours": "Wir haben Di–Fr 12:30–14:30 und 19:30–22:30 geöffnet, Sa nur abends 19:30–22:30, So mittags und abends. Montags geschlossen. 🍷",
    "chat.a_book": "Sehr gerne! Reservieren Sie über die Schaltfläche „Tisch reservieren“ oben, oder rufen Sie 071 203031 an. Für wie viele Personen und an welchem Abend?",
    "chat.a_menu": "Die Karte folgt dem Markt: Land (Fassona, Ragù, Rinderscheiben) und Meer (Conero-Muscheln, Thunfisch, Stockfisch nach Ancona-Art). Vorspeisen ab 12€, erste Gänge ab 15€, Hauptgänge ab 20€. Eine Empfehlung?",
    "chat.a_where": "Wir sind in der Via Pizzecolli 3, im alten Herzen von Ancona, wenige Schritte vom Dom. 📍",
    "chat.a_wine": "Der Keller ist ganz Marken: Verdicchio dei Castelli di Jesi, Passerina, Pecorino. Flaschen von 17 bis 34€, jeden Abend auch glasweise.",
    "chat.a_default": "Gute Frage! Für genaue Details rufen Sie 071 203031 an oder nutzen Sie „Tisch reservieren“. Ich helfe bei Öffnungszeiten, Karte, Weinen oder dem Weg. 🙂"
  };

  /* ---------------- apply / switch ---------------- */
  var SUPPORTED = ["it", "en", "fr", "de"];
  var stored = null;
  try { stored = localStorage.getItem("dego-lang"); } catch (e) {}
  var current = SUPPORTED.indexOf(stored) > -1 ? stored : "it";

  function t(key, lang) {
    var L = I18N[lang || current];
    return (L && L[key] != null) ? L[key] : (I18N.it[key] != null ? I18N.it[key] : key);
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "it";
    current = lang;
    try { localStorage.setItem("dego-lang", lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = t(key, lang);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // format: "attr:key;attr2:key2"
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) el.setAttribute(bits[0].trim(), t(bits[1].trim(), lang).replace(/&amp;/g, "&"));
      });
    });
    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = t("doc.title", lang).replace(/&amp;/g, "&");

    // reflect on switcher buttons
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("dego:langchange", { detail: { lang: lang } }));
  }

  window.DegoI18N = {
    apply: apply,
    t: t,
    get current() { return current; },
    supported: SUPPORTED
  };

  // first paint
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { apply(current); });
  } else {
    apply(current);
  }
})();
