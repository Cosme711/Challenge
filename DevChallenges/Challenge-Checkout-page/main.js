/* SELECTORS */ 
const addMore1 = document.querySelector('.cart__container__rightbox__counter__more1');
const removeOne1 = document.querySelector('.cart__container__rightbox__counter__less1');
const addMore2 = document.querySelector('.cart__container__rightbox__counter__more2');
const removeOne2 = document.querySelector('.cart__container__rightbox__counter__less2');


/*  EVENTS LISTENERS */

//Counter1
addMore1.addEventListener('click', counter1More);
removeOne1.addEventListener('click', counter1Less);

//Counter2
addMore2.addEventListener('click', counter2More);
removeOne2.addEventListener('click', counter2Less);


/* FUNCTIONS */ 

//Counter1
function counter1More() {
    count1String = count1.innerText;
    count1Integer = parseInt(count1String, 10);
    if (count1Integer < 15) {
        count1.innerHTML++;
        multiplyPriceQuantity1();
        publishResult();
    }
}

function counter1Less() {
    count1String = count1.innerText;
    count1Integer = parseInt(count1String, 10);
    if (count1Integer > 0) {
        count1.innerHTML--;
        multiplyPriceQuantity1();
        publishResult();
    }
}

//Counter2
function counter2More() {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer < 15) {
        count2.innerHTML++;  
        multiplyPriceQuantity2();
        publishResult();
    }
}

function counter2Less() {
    count2String = count2.innerText;
    count2Integer = parseInt(count2String, 10);
    if (count2Integer > 0) {
        count2.innerHTML--;
        multiplyPriceQuantity2();
        publishResult();
    }
}



//Multiply Price * Quantity
async function multiplyPriceQuantity1() {
        var priceElement1 = document.getElementById('price1');
        var quantityElement1 = document.getElementById('count1');
        var priceElement1String = priceElement1.innerText;
        var priceElement1Integer = parseInt(priceElement1String.replace("$", ""), 10);
        var quantityElement1String = quantityElement1.innerText;
        var quantityElement1Integer = parseInt(quantityElement1String.replace("p", ""), 10);
        var totalPrice1 = document.getElementById('total__price1');
        totalPrice1 = priceElement1Integer * quantityElement1Integer;
        return totalPrice1;
}

async function multiplyPriceQuantity2() {
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

//Addition price of elements
async function additionElement() {
    const value1 = await multiplyPriceQuantity1(); 
    const value2 = await multiplyPriceQuantity2();
    return value1 + value2;
}

//Publish Result
async function publishResult() {
    totalPriceContainer = additionElement().then(function(data) {
    const totalPrice = document.getElementById('total__price__global');
    totalPrice.textContent = "$" + data;
});
}
