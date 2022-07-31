/* EXERCICE 1 À l'aide de la méthode Math.random , écrivez un programme qui s'arrête lorsque tous les
nombres de la plage [0;100[ sont tirés au sort. Indiquer le nombre de tirages nécessaire*/

var nbTirages = 0;
var entiers = [];

for(let i = 0; i < 100 ; i++) {
    entiers.push(false);
}

var entiersATirer = entiers.length;

do {
    var tirage = parseInt(Math.random() * 100);
    if(entiers[tirage] === false) {
        entiers[tirage] = tirage;
        entiersATirer --;
    }
    nbTirages ++;

} while (entiersATirer !=0)

console.log("Le programme a mis " + nbTirages+ " essais pour tirer au sort tous les nombres de la plage 0; 100");

/*EXERCICE 2 Trier les lettres d'une phrase par ordre alphabétique.*/

var maPhrase = "Une chaine avec des lettres dans un certain ordre pour donner du sens";
var tabMots = maPhrase.split(" ");
var tabMotsMelanges = []; 

for (let i = 0; i < tabMots.length ; i ++) {
    var tabChar = tabMots[i].split("");
    const sortedTabChar = tabChar.sort(function(a, b) {
        return a.localeCompare(b);
    });
    
    tabMots[i] = sortedTabChar.join("");
    tabMotsMelanges.push(tabMots[i]);
   
}

var sortedPhrase = tabMotsMelanges.join(" ");
console.log(sortedPhrase);

/*EXERCICE 3 Mettre en majuscule la première lettre de chaque mot d'une phrase.*/

var maPhraseSansMaj = "une phrase sans majuscule";
var tabMots2 = maPhraseSansMaj.split(" ");

for(let i = 0; i < tabMots2.length ; i++) {
    var tabChar2 = tabMots2[i].split("");
    tabChar2[0] = tabMots2[i].charAt(0).toUpperCase();
    tabMots2[i] = tabChar2.join("");
}

var maPhraseAvecMaj = tabMots2.join(" ");
console.log(maPhraseAvecMaj);