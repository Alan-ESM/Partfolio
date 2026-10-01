const skills = [
    { t: 'Cybersécurité & outils d’audit', i: 'fa-shield-halved', d: 'Imagine une maison pleine de portes et de fenêtres. La cybersécurité consiste à vérifier que chacune ferme bien, avant qu’un voleur ne l’essaie. Je m’entraîne à le faire sur mes propres ordinateurs, jamais sur ceux des autres.', s: [
        ['Nmap', 'C’est comme un facteur qui frappe à toutes les portes d’une rue pour voir lesquelles s’ouvrent. Nmap regarde un ordinateur ou un réseau et dit quelles portes, appelées ports, sont ouvertes, et qui répond derrière.'],
        ['Hydra', 'Imagine un cadenas à code. Hydra essaie les codes l’un après l’autre, très très vite. Cela montre si un mot de passe est trop facile à deviner.'],
        ['Nikto', 'C’est un inspecteur qui visite un site web avec une liste de contrôle. Il note ce qui est cassé, trop vieux ou mal fermé, pour qu’on puisse le réparer.'],
        ['Ettercap', 'Deux amis s’échangent des lettres, et quelqu’un se glisse au milieu pour les lire. Ettercap montre comment cela peut arriver, pour apprendre à l’empêcher.'],
        ['Metasploit', 'Une grande boîte remplie de fausses clés qui servent à tester si une serrure fragile peut s’ouvrir. Une fois le trou prouvé, on peut le boucher.'],
        ['MSFVenom', 'Il fabrique de tout petits programmes de test, un peu comme des clés faites sur mesure. Je m’en sers seulement en laboratoire, pour comprendre comment les attaques sont construites et comment s’en défendre.'],
        ['Hashcat', 'Quand on enregistre un mot de passe, on le transforme en un long code brouillé. Hashcat essaie de retrouver le mot de passe à partir de ce code, et montre ainsi quels mots de passe sont trop faibles.'],
        ['Apache', 'Un serveur web est comme un serveur de restaurant : tu demandes une page, il va la chercher et te l’apporte. Apache est l’un des plus connus, et je m’en sers pour mes tests.'],
        ['Flask', 'Un petit kit pour construire un site ou un service avec le langage Python, sans partir de zéro. C’est comme un jeu de construction dont les pièces de base sont déjà prêtes.']
    ] },
    { t: 'Gestion des risques', i: 'fa-scale-balanced', d: 'Avant de traverser la rue, on regarde ce qui peut arriver : une voiture, un trou. Ici, on fait pareil avec les ordinateurs et les données. On liste ce qui peut mal tourner, on juge si c’est grave, puis on décide quoi faire.', s: [
        ['Notions ISO 2700x', 'C’est un livre de règles reconnu dans le monde entier pour bien protéger les informations d’une entreprise, comme un règlement de sécurité que tout le monde respecte.'],
        ['EBIOS RM', 'Une méthode française pour se poser les bonnes questions : que faut-il protéger, qui pourrait vouloir l’attaquer, comment, et que faire ? C’est un plan d’enquête pour préparer la défense.'],
        ['Bow-Tie', 'Un dessin en forme de noeud papillon. Au milieu, le problème. À gauche, ce qui peut le causer, avec des barrières pour l’empêcher. À droite, ce qu’il provoque, avec des protections pour limiter les dégâts.']
    ] },
    { t: 'Réseaux', i: 'fa-network-wired', d: 'Un réseau, c’est un ensemble de routes qui relient des ordinateurs pour qu’ils se parlent. J’apprends à dessiner ces routes, à donner une adresse à chaque ordinateur et à guider chaque message jusqu’à la bonne destination.', s: [
        ['Cisco Packet Tracer', 'Un jeu de simulation où l’on construit un réseau à l’écran, avec de faux câbles, de faux routeurs et de faux ordinateurs. On peut tout tester sans rien casser dans la vraie vie.']
    ] },
    { t: 'Virtualisation & systèmes', i: 'fa-server', d: 'Le système est le chef d’orchestre d’un ordinateur. La virtualisation permet de faire vivre un ordinateur entier à l’intérieur d’un autre, comme une maison dans une maison, pour essayer des choses sans risque.', s: [
        ['VMware', 'Un logiciel qui crée des ordinateurs virtuels dans ton ordinateur. Si tu fais une bêtise dedans, tu reviens en arrière comme avec un bouton retour.'],
        ['VirtualBox', 'Même idée que VMware, mais gratuit : un ordinateur dans l’ordinateur. Je choisis si l’ordinateur virtuel reste seul dans sa bulle ou s’il est relié aux autres.'],
        ['Kali Linux', 'Un système rempli d’outils de détective pour la sécurité. C’est comme la mallette d’un expert qui vérifie si les serrures sont solides.'],
        ['Ubuntu', 'Un système libre et gratuit, un peu comme Windows mais avec une autre façon de faire. On lui parle souvent avec des mots tapés, comme dans un jeu à commandes.'],
        ['Windows 8', 'Une ancienne version de Windows que je sais installer et réparer. Elle m’aide à comprendre comment les systèmes ont évolué.'],
        ['Windows 10/11', 'Les versions de Windows les plus utilisées aujourd’hui. Je sais les installer, les régler, créer des comptes et résoudre les pannes courantes.'],
        ['Windows Server', 'Le Windows des grandes entreprises. Il ne sert pas à jouer mais à gérer des dizaines d’ordinateurs et de personnes : qui a le droit d’entrer, de lire, de modifier.'],
        ['Docker', 'Une boîte fermée qui contient un programme et tout ce dont il a besoin. Où qu’on la pose, le programme marche pareil, comme une boîte-repas prête à manger. J’en connais les bases.']
    ] },
    { t: 'Langages & technologies', i: 'fa-code', d: 'Un langage de programmation est une façon de donner des ordres à un ordinateur, comme on donne une recette à un cuisinier très obéissant qui ne devine rien. Chaque langage est bon pour un travail différent.', s: [
        ['Java', 'Un langage solide, utilisé dans les banques et les grandes entreprises. Il fonctionne sur presque tous les ordinateurs, comme une clé qui ouvre beaucoup de portes.'],
        ['PHP', 'Le langage qui travaille en coulisses d’un site web. Quand tu remplis un formulaire, c’est lui qui lit ta réponse, la range et prépare la page suivante.'],
        ['JavaScript', 'Ce qui rend une page web vivante : un bouton qui réagit, un menu qui s’ouvre, une image qui bouge. Sans lui, une page est comme une affiche collée au mur.'],
        ['HTML', 'Le squelette d’une page web. Il dit : ici un titre, ici une image, ici un paragraphe. Comme les os d’un corps.'],
        ['CSS', 'Les vêtements et le maquillage de la page : couleurs, tailles, positions, mouvements. C’est lui qui rend une page belle.'],
        ['React', 'Un jeu de briques pour construire des pages web. On crée une brique bouton, une brique menu, et on les réutilise partout au lieu de tout refaire.'],
        ['Spring Boot', 'Un kit de démarrage pour Java : la cuisine est déjà équipée, il ne reste qu’à ajouter sa propre recette.'],
        ['API REST', 'Une manière polie de demander des choses à un service, comme commander au comptoir : je demande, on me répond, et c’est fini. Chaque demande est indépendante des précédentes.'],
        ['Maven', 'Un assistant qui achète tous les ingrédients dont un projet Java a besoin, puis le prépare et l’emballe, sans que j’aie à courir partout.'],
        ['C', 'L’un des plus anciens langages, très proche de la machine. On y gère soi-même la mémoire, comme conduire une voiture sans boîte automatique : plus de travail, mais on comprend comment tout marche.'],
        ['C++', 'Le grand frère du C. Il permet en plus de fabriquer des objets, comme des moules à gâteaux qu’on réutilise pour faire autant de gâteaux qu’on veut.'],
        ['C#', 'Un langage moderne de Microsoft, clair et pratique. On s’en sert pour les programmes Windows et pour les jeux faits avec Unity.'],
        ['WPF', 'Une boîte à outils de Microsoft pour dessiner les fenêtres d’un programme Windows : boutons, menus, zones de texte. C’est tout le décor que voit la personne qui utilise le programme.']
    ] },
    { t: 'Développement & jeu vidéo', i: 'fa-laptop-code', d: 'Ce sont les ateliers où l’on écrit les programmes, comme le bureau d’un artiste avec ses crayons. Ils aident à écrire, à trouver les erreurs et à tester ce qu’on a fabriqué.', s: [
        ['VS Code', 'Un carnet intelligent pour écrire du code : il colore les mots, propose des suites et souligne les fautes, comme un correcteur d’orthographe.'],
        ['PyCharm Community', 'Un atelier de codage fait pour Python. Il aide à repérer les erreurs et à suivre pas à pas ce que fait le programme.'],
        ['Code::Blocks', 'Un atelier gratuit pour écrire en C et en C++. Il transforme le texte que j’écris en programme que l’ordinateur peut lancer.'],
        ['Unity', 'Un studio pour fabriquer des jeux vidéo : on place des décors et des personnages, puis on leur dit comment bouger avec du code.'],
        ['Shaders', 'De petites recettes qui disent à l’écran de quelle couleur peindre chaque point, en tenant compte de la lumière. C’est ce qui donne aux jeux leurs néons brillants et leurs reflets.']
    ] },
    { t: 'Web, déploiement & bases de données', i: 'fa-database', d: 'Pour qu’un site marche, il faut un endroit où il vit, un endroit où ranger ses informations et un moyen de le montrer au monde. Cette famille regroupe ces trois choses.', s: [
        ['WAMP', 'Un pack qui transforme ton ordinateur Windows en petit serveur web, pour tester un site à la maison avant de le publier.'],
        ['XAMPP', 'Le même genre de pack, mais qui marche sur plusieurs systèmes. C’est un mini-serveur d’entraînement pour ses sites.'],
        ['PostgreSQL', 'Une immense armoire à tiroirs très bien rangée pour garder des informations, comme des noms et des notes. On retrouve n’importe quelle donnée en un instant.'],
        ['MySQL', 'Une autre grande armoire à tiroirs, très utilisée sur Internet. Elle range les informations dans des tableaux, comme des feuilles de calcul très rapides.'],
        ['SQLite', 'Une mini-armoire contenue dans un seul fichier, sans serveur. Parfaite pour qu’un petit programme garde ses données, comme une boîte à souvenirs.'],
        ['FileZilla', 'Un camion de livraison de fichiers : il transporte les fichiers de ton ordinateur vers l’ordinateur où vit ton site, et inversement.'],
        ['Vercel', 'Un service qui publie un site sur Internet. Je lui donne mon travail, et il le met à la disposition du monde entier.'],
        ['Supabase', 'Un coffre-fort en ligne déjà construit pour garder des données, gérer les comptes des utilisateurs et stocker des fichiers, sans avoir à fabriquer le coffre soi-même.']
    ] },
    { t: 'Tests d’API', i: 'fa-vial', d: 'Une API est un guichet par lequel un programme parle à un autre. Tester une API, c’est vérifier que le guichet répond juste, vite, et ne laisse entrer que les bonnes personnes.', s: [
        ['Postman', 'Une télécommande pour parler à une API : j’envoie une demande, je regarde la réponse et je vérifie qu’elle est correcte.'],
        ['Insomnia', 'Une télécommande plus légère pour les mêmes tests. Elle range les demandes dans des dossiers et retient les accès pour moi.']
    ] },
    { t: 'Intelligence artificielle', i: 'fa-brain', d: 'Une intelligence artificielle est un programme qui a appris avec énormément d’exemples, comme un enfant qui reconnaît un chat après en avoir vu mille. On peut ensuite lui poser des questions.', s: [
        ['Gemini', 'Le cerveau artificiel de Google : on lui écrit une question et il répond, comme un grand livre qui saurait parler. Je l’ai branché dans un logiciel pour qu’il aide à écrire.'],
        ['IA multi-modèles', 'Plusieurs cerveaux artificiels, chacun avec ses forces. Un chef lit la question et choisit lequel doit répondre, comme un professeur qui envoie chaque question au meilleur spécialiste.'],
        ['Commande vocale', 'Parler à l’ordinateur au lieu de taper. Il écoute, transforme les sons en mots, puis fait ce qu’on a demandé, comme un ami qui écoute un ordre.']
    ] },
    { t: 'Algorithmique & données', i: 'fa-diagram-project', d: 'Un algorithme est une recette : des étapes claires, dans le bon ordre, pour arriver à un résultat. Cette famille regroupe les recettes de calcul, de tri et de rangement que j’ai apprises.', s: [
        ['Huffman', 'Une astuce pour faire tenir un texte dans une plus petite valise : les lettres les plus fréquentes reçoivent un code très court, les rares un code plus long. Le fichier devient plus petit sans rien perdre.'],
        ['Horner', 'Une manière maligne de calculer avec des puissances de x : au lieu de tout élever d’un coup, on avance étape par étape avec des multiplications simples. C’est plus rapide et plus sûr.'],
        ['Cardan', 'Une vieille formule pour trouver les nombres qui résolvent une équation où l’inconnue est multipliée trois fois par elle-même. Comme une carte au trésor qu’on suit pas à pas jusqu’aux solutions.'],
        ['Tri rapide (qsort)', 'Comment ranger une pile dans l’ordre, par exemple des élèves du plus jeune au plus âgé : on choisit un repère, les plus petits vont d’un côté, les plus grands de l’autre, et on recommence dans chaque tas.'],
        ['Mémoire dynamique', 'L’ordinateur a une grande étagère pour ranger ses données. La mémoire dynamique, c’est demander la place au moment où on en a besoin, puis la rendre quand on a fini, comme louer une case de casier.'],
        ['Fichiers CSV', 'Un tableau écrit en texte simple : chaque ligne est une fiche et les valeurs sont séparées par des virgules. Tous les programmes savent le lire, c’est pratique pour garder des scores ou des rapports.'],
        ['Console', 'Une fenêtre noire où l’on parle au programme avec du texte, sans boutons ni images, comme une conversation par SMS avec l’ordinateur.']
    ] },
    { t: 'Design & prototypage', i: 'fa-pen-ruler', d: 'Avant de construire une maison, on dessine des plans. Ici, on dessine à quoi ressemblera un site ou une application, pour que ce soit beau et facile à utiliser.', s: [
        ['Figma', 'Un tableau à dessin en ligne pour dessiner les écrans d’une application et faire semblant de cliquer dessus, avant même qu’elle existe.'],
        ['Canva', 'Un studio de création simple pour fabriquer des affiches, des images et des présentations à partir de modèles déjà prêts.']
    ] },
    { t: 'Bureautique', i: 'fa-briefcase', d: 'Ce sont les outils du bureau : écrire des lettres, faire des tableaux, présenter des idées. Avec un peu d’automatisme, ils peuvent même faire le travail répétitif à ta place.', s: [
        ['Microsoft Office', 'Le trio Word pour écrire, Excel pour calculer et PowerPoint pour présenter. Comme un cartable avec un cahier, une calculatrice et des affiches.'],
        ['WPS Office', 'Un cartable de bureau plus léger et gratuit, qui sait ouvrir les mêmes fichiers que Word, Excel et PowerPoint.'],
        ['Macros VBA', 'Un petit robot qu’on installe dans Excel ou Word. On lui apprend une tâche une fois, et il la refait à l’identique autant de fois qu’on veut.']
    ] }
];

const projects = [
    { n: 'Gravity', u: 'https://github.com/Alan-ESM/Gravity.git', d: 'Endless runner 3D cyberpunk où le joueur inverse la gravité pour courir au sol, au plafond et sur les murs. Dix héros aux pouvoirs uniques, shaders néon et gameplay mobile rapide : réflexes, stratégie et style.', t: ['Unity', 'C#', 'Shaders'] },
    { n: 'Jarvis', u: 'https://github.com/Alan-ESM/Jarvis.git', d: 'Application desktop native pour Windows, pensée comme un assistant IA local, modulaire et extensible. Superviseur multi-modèles, recherche web, contrôle vocal, interface futuriste et accès à des dossiers autorisés avec permissions explicites.', t: ['IA multi-modèles', 'Commande vocale'] },
    { n: 'Système de réservation', u: 'https://github.com/Alan-ESM/System-de-Reservation.git', s: 'Suspendu', d: 'Plateforme d’enregistrement pour invités : formulaire simple (nom, prénom, ville), PDF avec QR code unique, liste actualisée en temps réel et carrousel photos animé. Gestion d’événements simplifiée.', note: 'Site suspendu : l’objectif pour lequel il a été créé a été atteint.', t: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Vercel'] },
    { n: 'API-RESET', u: 'https://github.com/Alan-ESM/API-RESET.git', d: 'API de gestion d’étudiants et de détection de faux billets, répartie en deux branches.', b: [['ETD', 'Gestion des étudiants'], ['FB', 'Détection de faux billets']], t: ['API REST', 'Flask', 'Postman'] },
    { n: 'Aurea', u: 'https://github.com/Alan-ESM/Aurea.git', d: 'Éditeur de documents Windows en C# et WPF : créer, ouvrir, modifier et exporter des documents, avec mise en forme, tableaux, images, IA Gemini, dictée vocale, caméra, sauvegardes SQLite, recherche, styles et publipostage.', note: 'Sécurité et tests à renforcer.', t: ['C#', 'WPF', 'SQLite', 'Gemini', 'Commande vocale'] },
    { n: 'AyanoCrushy', u: 'https://github.com/Alan-ESM/AyanoCrushy.git', d: 'Application console en C pour gérer des étudiants : ajout, modification et suppression de profils, gestion des cours, notes et absences, puis rapports CSV. Un scénario inspiré de l’univers otaku la rend originale.', t: ['C', 'Console', 'Fichiers CSV'] },
    { n: 'Compress-Kami', u: 'https://github.com/Alan-ESM/Compress-Kami.git', d: 'Application WPF qui compresse et décompresse des dossiers au format propriétaire .keyce grâce à l’algorithme de Huffman. Elle prend aussi en charge les fichiers ZIP et conserve l’arborescence des dossiers.', note: 'Format à tester, sécuriser et mieux documenter.', t: ['C#', 'WPF', 'Huffman'] },
    { n: 'Devine le nombre', u: 'https://github.com/Alan-ESM/Devine-le-nombre.git', d: 'Jeu console en C# à deux modes : deviner le nombre choisi par la machine, ou lui en faire deviner un. Niveaux de difficulté, vies, indices, chronomètre et classement sauvegardé dans un fichier CSV.', t: ['C#', 'Console', 'Fichiers CSV'] },
    { n: 'Équation du 3e degré', u: 'https://github.com/Alan-ESM/Equation-3eme-degre.git', d: 'Programme console qui résout les équations cubiques ax³+bx²+cx+d=0 avec une méthode classique et la méthode de Cardan, puis affiche les racines réelles, multiples ou complexes.', t: ['Cardan', 'Console'] },
    { n: 'EquationHorner', u: 'https://github.com/Alan-ESM/EquationHorner.git', d: 'Programme console pédagogique en C# qui évalue un polynôme avec la méthode de Horner, à partir du degré, des coefficients et de la valeur de x.', note: 'Tests, option pour recommencer et documentation à compléter.', t: ['C#', 'Horner', 'Console'] },
    { n: 'GestStock', u: 'https://github.com/Alan-ESM/Gest-Stock.git', d: 'Application console en C de gestion d’inventaire : afficher, ajouter, modifier, supprimer et rechercher des produits, gérer achats et quantités, calculer des statistiques et générer des factures.', t: ['C', 'Console'] },
    { n: 'Mini_Jeu', u: 'https://github.com/Alan-ESM/Mini_Jeu--pair-ou-impair-.git', d: 'Programme console en C avec deux activités : vérifier si un nombre est pair ou impair et calculer son carré, ou saisir puis trier des nombres et des étudiants par âge.', t: ['C', 'Console', 'Mémoire dynamique', 'Tri rapide (qsort)'] }
];

const grid = document.getElementById('skillsGrid');
const panel = document.getElementById('skillPanel');

grid.innerHTML = skills.map(({ t, i, s }, c) =>
    `<article class="skill-card hud"><button class="skill-head" data-c="${c}"><i class="fas ${i}"></i><h3>${t}</h3></button><div class="skill-chips">${s.map(([n], j) => `<button class="chip" data-c="${c}" data-s="${j}">${n}</button>`).join('')}</div></article>`
).join('');

const show = (c, j) => {
    const cat = skills[c];
    const tool = j === null ? null : cat.s[j];
    grid.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    grid.querySelector(tool ? `.chip[data-c="${c}"][data-s="${j}"]` : `.skill-head[data-c="${c}"]`).classList.add('active');
    panel.innerHTML = `<div class="panel-head"><h3>${tool ? tool[0] : cat.t}</h3><span>${tool ? cat.t : 'Domaine'}</span></div><p>${tool ? tool[1] : cat.d}</p>${tool ? '' : `<div class="panel-tags">${cat.s.map(([n], k) => `<button class="tag" data-c="${c}" data-s="${k}">${n}</button>`).join('')}</div>`}`;
};

[grid, panel].forEach(el => el.addEventListener('click', ({ target }) => {
    const b = target.closest('button[data-c]');
    if (b) show(+b.dataset.c, b.dataset.s === undefined ? null : +b.dataset.s);
}));

const repo = u => u.replace(/\.git$/, '');

document.getElementById('projectsGrid').innerHTML = projects.map((p, i) =>
    `<article class="project-card hud"><div class="project-index"><span>${String(i + 1).padStart(2, '0')}</span>${p.s ? `<em class="status">${p.s}</em>` : ''}</div><h3>${p.n}</h3><p>${p.d}</p>${p.note ? `<p class="project-note">${p.note}</p>` : ''}${p.b ? `<div class="branches">${p.b.map(([k, v]) => `<a class="branch" href="${repo(p.u)}/tree/${k}" target="_blank" rel="noopener"><b>${k}</b><span>${v}</span></a>`).join('')}</div>` : ''}<div class="tags">${p.t.map(x => `<span class="tag">${x}</span>`).join('')}</div><a class="project-link" href="${repo(p.u)}" target="_blank" rel="noopener">Ouvrir le dépôt</a></article>`
).join('');

document.getElementById('skillTotal').dataset.target = skills.reduce((n, c) => n + c.s.length, 0);
document.getElementById('domainTotal').dataset.target = skills.length;
document.getElementById('projectTotal').dataset.target = projects.length;

const navbar = document.getElementById('navbar');
const toggle = document.getElementById('navToggle');
const menu = document.querySelector('.nav-links');

const setMenu = open => {
    menu.classList.toggle('open', open);
    toggle.firstElementChild.className = open ? 'fas fa-xmark' : 'fas fa-bars';
};

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => e.target.closest('a') && setMenu(false));
addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 80), { passive: true });

const animateCounters = () => {
    const els = [...document.querySelectorAll('.stat-number')];
    const start = performance.now();
    const tick = now => {
        const p = Math.min((now - start) / 2200, 1);
        const e = 1 - (1 - p) ** 3;
        els.forEach(el => el.textContent = Math.round(el.dataset.target * e));
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
};

const reveal = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    target.classList.add('visible');
    if (target.id === 'apropos') animateCounters();
    reveal.unobserve(target);
}), { threshold: 0.1 });

const sections = document.querySelectorAll('section[id]');
sections.forEach(s => {
    s.classList.add('fade-in');
    reveal.observe(s);
});

const links = [...document.querySelectorAll('.nav-links a')];
const spy = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) links.forEach(a => a.classList.toggle('active', a.hash === '#' + target.id));
}), { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => spy.observe(s));

const vids = [...document.querySelectorAll('.bg-video')];
const FADE = 1200;
let cur = 0;
let busy = false;

const crossfade = () => {
    if (busy) return;
    busy = true;
    const a = vids[cur];
    const b = vids[1 - cur];
    a.classList.remove('top');
    b.currentTime = 0;
    b.classList.add('top');
    b.play().then(() => b.classList.add('on')).catch(() => {});
    setTimeout(() => {
        a.classList.remove('on');
        a.pause();
        a.currentTime = 0;
        cur = 1 - cur;
        busy = false;
    }, FADE + 150);
};

vids.forEach((v, i) => {
    v.addEventListener('timeupdate', () => {
        if (i === cur && v.duration && v.duration - v.currentTime <= FADE / 1000 + 0.4) crossfade();
    });
    v.addEventListener('ended', () => i === cur && crossfade());
});
