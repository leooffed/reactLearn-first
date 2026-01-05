/** Afficher les nombres pairs jusqu'a 100 */
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

/** avec while */
let i = 2;
while (i <= 100) {
  console.log(i);
  i += 2;
}

/** avec do while */
i = 2;
do {
  console.log(i);
  i += 2;
} while (i <= 100);

/** Calculer la somme des nombres de 1 a 100 */
let sum = 0;
for (let j = 1; j <= 100; j++) {
  sum += j;
}
console.log("La somme des nombres de 1 a 100 est : " + sum);


/** avec for..in */
let sum2 = 0;
for (let k in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  sum2 += parseInt(k);
}
console.log("La somme des nombres de 1 a 10 est : " + sum2);

/** avec for..of */
let sum3 = 0;
for (let l of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  sum3 += l;
}
console.log("La somme des nombres de 1 a 10 est : " + sum3);


/**Crée une fonction qui calcule la somme de 2 nombres. */
function calculateSum(a: number, b: number): number {
  return a + b;
}

calculateSum(5, 10); // 15

/** Filtre un tableau pour garder uniquement les pairs. */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Les nombres pairs sont : " + evenNumbers);

/** Map */
const doubledNumbers = numbers.map(n => n * 2);
console.log("Les nombres doubles sont : " + doubledNumbers);

/** Pop */
const lastNumber = numbers.pop();
console.log("Le dernier nombre est : " + lastNumber);

/** push */
numbers.push(11);
console.log("Le tableau après push est : " + numbers);

/** reduce */
const sum4 = numbers.reduce((acc, n) => acc + n, 0);
console.log("La somme des nombres du tableau est : " + sum4);


/** Crée un objet personne avec nom, âge, et une méthode saluer() */
const personne = {
  nom: "Alice",
  age: 30,
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
};
personne.saluer();

/*Sélection d’éléments HTML*/
const monElement = document.getElementById("monElement");
if (monElement) {
  monElement.style.color = "blue";
}

/*Ajout d’un écouteur d’événements*/
const monBouton = document.getElementById("monBouton");
if (monBouton) {
  monBouton.addEventListener("click", () => {
    alert("Bouton cliqué !");
  });
}

/**Modification du contenu */
const monParagraphe = document.getElementById("monParagraphe");
if (monParagraphe) {
  monParagraphe.textContent = "Contenu modifié !";
}

/**Gestion d’événements (click, submit, etc) */
const monFormulaire = document.getElementById("monFormulaire");
if (monFormulaire) {
  monFormulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulaire soumis !");
  });
}
    let description;
    if (move > 0) {
      description = 'Aller au coup #' + move;
    } else {
      description = 'Recommencer la partie';
    }

/** Global */
export const PI = 3.14159;

export function calculateCircleArea(radius: number): number {
  return PI * radius * radius;
}

/** Block */
export function calculateRectangleArea(width: number, height: number): number {
  const area = width * height;
  return area;
}

/** Montre la différence entre let et var dans des blocs. */
export function demonstrateLetVar() {
  if (true) {
    let blockScoped = "Je suis limité au bloc";
    var functionScoped = "Je suis limité à la fonction";
    console.log(blockScoped); // Fonctionne
    console.log(functionScoped); // Fonctionne
  }
  // console.log(blockScoped); // Erreur : blockScoped n'est pas défini
  console.log(functionScoped); // Fonctionne
}

/** Closures

Fonctions qui « gardent en mémoire » des variables même après exécution. */
export function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

/** Exemple d’utilisation */
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/** Exercice : Crée un compteur privé avec closure. */
export function createPrivateCounter() {
  let privateCount = 0;
  return {
    increment: function() {
      privateCount++;
    },
    getCount: function() {
      return privateCount;
    }
  }
}

/** Exemple d’utilisation */
const myCounter = createPrivateCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // 2

/** Crée un objet qui hérite d’un autre via prototype */

export function demonstratePrototypeInheritance() {
  const parent = {
    greet: function() {
      console.log("Bonjour depuis le parent !");
    }
  };

  const child = Object.create(parent);
  child.sayHello = function() {
    console.log("Salut depuis l'enfant !");
  };

  child.sayHello(); // Salut depuis l'enfant !
  child.greet();    // Bonjour depuis le parent !
}

/** Exercice : Crée une chaîne de prototypes avec 3 niveaux. */
export function createPrototypeChain() {
  const grandParent = {
    grandGreet: function() {
      console.log("Bonjour depuis le grand-parent !");
    }
  };

  const parent = Object.create(grandParent);
  parent.parentGreet = function() {
    console.log("Bonjour depuis le parent !");
  };

  const child = Object.create(parent);
  child.childGreet = function() {
    console.log("Bonjour depuis l'enfant !");
  };

  return child;
}

/** Promesses */
export function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve("Données récupérées depuis " + url);
      } else {
        reject("URL invalide");
      }
    }, 1000);
  });
}

/** Exemple d’utilisation */
fetchData("https://exemple.com")
  .then(data => console.log(data))
  .catch(error => console.error(error));

/** Exercice : Crée une promesse qui se résout après un délai. */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/** Exemple d’utilisation */
delay(2000).then(() => console.log("Délai de 2 secondes écoulé"));




/** Callback */
export function performOperation(a: number, b: number, callback: (result: number) => void): void {
  const result = a + b;
  callback(result);
}

/** Exemple d’utilisation */
performOperation(5, 10, (result) => {
  console.log("Le résultat de l'opération est : " + result);
});

/** Exercice : Crée une fonction qui utilise un callback pour traiter des données. */
export function processData(data: string[], callback: (item: string) => void): void {
  data.forEach(item => {
    callback(item);
  });
}

/** Exemple d’utilisation */
processData(["Alice", "Bob", "Charlie"], (item) => {
  console.log("Traitement de : " + item);
});

/** Async/Await */
export async function fetchAsyncData(url: string): Promise<string> {
  try {
    const data = await fetchData(url);
    return data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données : " + error);
  }
}

/** Exemple d’utilisation */
(async () => {
  try {
    const data = await fetchAsyncData("https://exemple.com");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

/** Exercice : Crée une fonction async qui attend une promesse de délai. */
export async function waitAndLog(ms: number): Promise<void> {
  await delay(ms);
  console.log(`Attente de ${ms} millisecondes terminée.`);
}

/** Exemple d’utilisation */
waitAndLog(1500);

/** Récupère des données depuis une API publique. */
export async function getPublicAPIData(endpoint: string): Promise<any> {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données depuis l'API publique");
  }
  const data = await response.json();
  return data;
}

/** Exemple d’utilisation */
getPublicAPIData("https://api.publicapis.org/entries")
  .then(data => console.log(data))
  .catch(error => console.error(error));

/** Exercice : Crée une fonction async qui récupère des données depuis une API publique. */
export async function fetchUserData(userId: number): Promise<any> {
  const endpoint = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données utilisateur");
  }
  const data = await response.json();
  return data;
}

/** Exemple d’utilisation */
fetchUserData(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));


/** Proxy */
export function createProxy(target: any, handler: any): any {
  return new Proxy(target, handler);
}

/* Reflect */
export function demonstrateReflect() {
  const obj = { a: 1, b: 2 };
  Reflect.set(obj, 'c', 3);
  const value = Reflect.get(obj, 'a');
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(value); // 1
}

/** Exemple d’utilisation */
demonstrateReflect();


/** Pour valider des formats complexes (emails, mots de passe). */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/** Exemple d’utilisation */
console.log(validateEmail("test@example.com"));