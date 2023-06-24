
/* ************* Calcular números primos  ************ */

console.log("/* ************* Calcular números primos  ************ */");

Number.prototype.isPrime = function () {

    // console.log("nbr = " + this + ", sqr =" + Math.sqrt(this));

    // for (let i = 2; i < this; i++) {


    for (let i = 2; i <= Math.sqrt(this); i++) {

        // console.log(i);

        if (this % i === 0) {
            return false;
        }
    }

    // console.log(" Prime !!!  ===> " + this);
    return true;
}



const { performance } = require('perf_hooks');
let start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
        // console.log("......va : " + primeCount);
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


/* ************* 100,000 números primos  ************ */
console.log("/* ************* 100,000 números primos  ************ */")


// start = performance.now();
// primeCount = 0;
// num = 2; // por razones matemáticas, 1 se considera primo
// while (primeCount < 1e5) {
//     if (num.isPrime()) {
//         primeCount++;

//     }
//     num++;
// }
// console.log(`The 100,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);



/* ************* 1,000,000 números primos  ************ */

console.log("/* ************* 1,000,000 números primos  ************ */")

// start = performance.now();
// primeCount = 0;
// num = 2; // por razones matemáticas, 1 se considera primo
// while (primeCount < 1e6) {
//     if (num.isPrime()) {
//         primeCount++;

//     }
//     num++;
// }
// console.log(`The 1,000,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);



/* ************* Fibonacci  ************ */

console.log("/* ************* Fibonacci  ************ */")

// recursive

start = performance.now();

function rFib(n) {
    console.log("Ini fib para n = " + n)
    if (n < 2) {
        return n;
    }
    // console.log(`fib = ${rFib(n - 1) + rFib(n - 2)}`)

    let result_fib = rFib(n - 1) + rFib(n - 2);
    console.log(`result fib para n = ${n} es ${result_fib}`)
    return result_fib
}
let result = rFib(4);

console.log(`Result = ${result}, recursive  took ${performance.now() - start} milliseconds to run`);



// iterative
start = performance.now();

function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }

    return vals[n];
}
result = iFib(20);

console.log(`Result = ${result}, iterative  took ${performance.now() - start} milliseconds to run`);


/* ************* Invertir una cadena  ************ */

console.log("/* ************* Invertir una cadena  ************ */")

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`Method 1 took ${performance.now() - start} milliseconds to run`);


start = performance.now();
const story_arr = [...story];
let story_arr_rev;
story_arr_rev = "";

// console.log("entra al loop");

for (let i = story_arr.length - 1; i >= 0; i--) {
    story_arr_rev = story_arr_rev + story_arr[i];
    // console.log(`para i = ${i}, story_arr_rev = ${story_arr_rev}`);
}
// console.log("salio del loop");

console.log(story_arr_rev);
console.log(`Method 2 took ${performance.now() - start} milliseconds to run`);