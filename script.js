const inutileMaisUtile = [
    "Avec un mouton on peut faire 14 pull over",
    "Vous marcherez au cours de votre vie l’équivalent de 3 fois le tour du monde",
    "Charlie Chaplin n’a pas été retenu pour la finale d’un concours de sosies «Charlie Chaplin»",
    "Vous avez entre 75 000 et 110 000 cheveux sur la tête",
    "La probabilité de mourir en tombant du lit est d’une chance sur 2 millions",
    "La longueur de votre nez et la même que la longueur de votre pouce",
    "Dans le Maryland, une loi interdit de maltraiter les huîtres",
    "Notre sang fait le tour de notre corps 1000 fois par jour",
    "Une personne passe en moyenne 6 mois de sa vie assis devant un feu rouge",
    "Il faudrait a un homme plus de 95 ans pour pouvoir compter jusqu’à 1 milliard",
    "Le parachute a été inventé plus de 100 ans avant l’avion",
    "Les éléphants sont les seuls mammifères à posséder 4 genoux",
    "Les derniers mots d’Albert Einstein furent en Allemand, mais l’infirmière qui était a son chevet ne comprenait pas cette langue. Nous ne les connaitrons donc jamais",
    "Les chats ont plus de 32 muscles dans chaque oreille",
    "Les cacahuètes sont l'un des ingrédients principaux de la dynamite",
    "Les ours polaires sont gauchers",
    "Le cri d'un canard ne fait pas d'écho, personne ne sait pourquoi",
    "Les flamants roses peuvent dormir sur une patte",
    "Les rats et les chevaux ne peuvent pas vomir",
    "Le miel ne se gâte jamais, vous pouvez le conserver indéfiniment",
    "Les hippopotames produisent des excréments de forme cubique",
    "Le papillon de nuit atlas a une envergure de plus de 25 centimètres",
    "Le mot le plus long en anglais contient 189 819 lettres et prend plus de 3 heures à prononcer",
    "Les éléphants peuvent entendre les sons infrasons que les humains ne peuvent pas entendre",
    "Les pingouins ont des glandes situées près des yeux qui filtrent le sel de leur sang",
    "Le bourdonnement des abeilles est en fait le son de leurs muscles de vol qui battent à plus de 200 battements par seconde",
    "Les méduses n'ont pas de cerveau ni de système nerveux central",
    "Le mot 'queue' ne rime avec aucun autre mot de la langue anglaise",
    "Le chien est le seul animal qui a la capacité de lire les émotions humaines dans le visage",
];



const randomInutileMaisUtile = () => {
    const content = document.getElementById("content");

    const InutileMaisUtile = inutileMaisUtile[Math.floor(Math.random() * inutileMaisUtile.length)];

    content.innerHTML = InutileMaisUtile
};


const button = document.getElementById("button");
button.addEventListener("click", randomInutileMaisUtile);
