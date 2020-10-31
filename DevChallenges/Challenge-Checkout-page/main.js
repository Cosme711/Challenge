/* TOTAL */
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const prix1 = document.getElementById('price1');
const prix2 = document.getElementById('price2');
const totalPrice = document.getElementById('total-price');

/* COUNTER */

/*1*/
const addMore1 = document.querySelector('.cart__container__rightbox__counter__more1');
const removeOne1 = document.querySelector('.cart__container__rightbox__counter__less1');
var count1Multiply = 0;

addMore1.addEventListener('click', function(event) {
    count1String = count1.innerText;
    count1Integer = parseInt(count1String, 10);
    if (count1Integer < 10) {
        count1.innerHTML++;  
        return count1Multiply++;
    }
});

removeOne1.addEventListener('click', function(event) {
    count1String = count1.innerText;
    count1Integer = parseInt(count1String, 10);
    if (count1Integer > 0) {
        count1.innerHTML--;
        return count1Multiply--;
    }
});



/*2*/
const addMore2 = document.querySelector('.cart__container__rightbox__counter__more2');
const removeOne2 = document.querySelector('.cart__container__rightbox__counter__less2');
var count2Multiply = 0;


addMore2.addEventListener('click', function(event) {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer < 10) {
        count2.innerHTML++;  
        return count2Multiply++;
    }
});

removeOne2.addEventListener('click', function(event) {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer > 0) {
        count2.innerHTML--;
        return count2Multiply--;
    }
});

/* MULTIPLY */

var prix1String = prix1.innerText;
var prix1Integer = parseInt(prix1String.replace("$",""),10);

var prix2String = prix2.innerText;
var prix2Integer = parseInt(prix2String.replace("$",""),10);



totalPriceResult = prix1Integer * count1Multiply + prix2Integer * count2Multiply;
totalPrice.innerText = "$" + totalPriceResult;












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
