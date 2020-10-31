/* Counter1 */
const addMore1 = document.querySelector('.cart__container__rightbox__counter__more1');
const removeOne1 = document.querySelector('.cart__container__rightbox__counter__less1');

addMore1.addEventListener('click', function(event) { // quand on click sur le +
    count1String = count1.innerText; // transforme en entier
    count1Integer = parseInt(count1String, 10); // transforme en entier
    if (count1Integer < 15) { // si le chiffre du compteur en inférieur a 10
        count1.innerHTML++;  // rajoute 1 au compteur
        updateCartTotal1(); // utilise la fonction qui sert a calculer le prix * la quandité
        publishResult(); // utilise la fonction qui sert a addittionner le prix des éléments
    }
});

removeOne1.addEventListener('click', function(event) { // quand on click sur le +
    count1String = count1.innerText; // transforme en entier
    count1Integer = parseInt(count1String, 10); // transforme en entier
    if (count1Integer > 0) { // si le chiffre du compteur en superieur à 0
        count1.innerHTML--; // retire 1 du compteur
        updateCartTotal1(); // utilise la fonction qui sert a calculer le prix * la quandité
        publishResult(); // utilise la fonction qui sert a addittionner le prix des éléments
    }
});



/* Counter2 */
const addMore2 = document.querySelector('.cart__container__rightbox__counter__more2');
const removeOne2 = document.querySelector('.cart__container__rightbox__counter__less2');


addMore2.addEventListener('click', function(event) {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer < 15) {
        count2.innerHTML++;  
        updateCartTotal2();
        publishResult();
    }
});

removeOne2.addEventListener('click', function(event) {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer > 0) {
        count2.innerHTML--;
        updateCartTotal2();
        publishResult();
    }
});



/* Multiply Price * Quantity */

async function updateCartTotal1() { // fonction qui calcule le prix total de ce produit (prix * quantité)
        var priceElement1 = document.getElementById('price1');
        var quantityElement1 = document.getElementById('count1');
        var priceElement1String = priceElement1.innerText; // Récupere la chaine de caractere
        var priceElement1Integer = parseInt(priceElement1String.replace("$", ""), 10); // convertie en entier
        var quantityElement1String = quantityElement1.innerText; // Récupere la chaine de caractere
        var quantityElement1Integer = parseInt(quantityElement1String.replace("p", ""), 10); // convertie en entier
        var totalPrice1 = document.getElementById('total__price1');
        totalPrice1 = priceElement1Integer * quantityElement1Integer; // prix * quantité
        return totalPrice1; // return le prix total de cette élément 
}

async function updateCartTotal2() {
    var priceElement2 = document.getElementById('price2');
    var quantityElement2 = document.getElementById('count2');
    var priceElement2String = priceElement2.innerText;
    var priceElement2Integer = parseInt(priceElement2String.replace("$", ""), 10);
    var quantityElement2String = quantityElement2.innerText;
    var quantityElement2Integer = parseInt(quantityElement2String.replace("p", ""), 10);
    var totalPrice2 = document.getElementById('total__price2');
    totalPrice2 = priceElement2Integer * quantityElement2Integer;
    return totalPrice2;
}

/* Addition price of elements */

async function additionElement() { // fonction qui fais la somme des différent produit
    const value1 = await updateCartTotal1(); 
    const value2 = await updateCartTotal2();
    return value1 + value2;
}

/* Publish Result */

async function publishResult() { // fonction qui publie la somme total de tout les éléments
    totalPriceContainer = additionElement().then(function(data) {  // récupère la promesse (return) de additionElement
    const totalPrice = document.getElementById('total__price__global');
    totalPrice.textContent = "$" + data; // et publie le résultat 
});
}


/*
const body = document.querySelector('body');

class counter {
    constructor(defaultCount, counterNumber) {
        this.defaultCount = defaultCount;
        this.counterNumber = counterNumber;
    }

    convertToInteger() {
        var counterNumberString = this.counterNumber.innerText;
        var counterNumberInteger = parseInt(counterNumberString.innerText.replace('<p id="count1"></p>',''),10);
   }
    
    addOne() {
        const addMore = document.querySelector('.cart__container__rightbox__counter__more');
        this.counterNumber.innerText = `${this.defaultCount}`;
        addMore.addEventListener('click', function(event) {
            this.counterNumber++;
            console.log(this.counterNumber);
        });
    }


    removeOne() {
        const removeOne = document.querySelector('.cart__container__rightbox__counter__less');
        removeOne.addEventListener('click', function(event){

        });
    }
}
const count1 = document.querySelector('.count1');

const element1 = new counter(0, this.count1);
element1.convertToInteger();
element1.addOne();
element1.removeOne(); 
*/ 
