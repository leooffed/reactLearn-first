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