var cart_items = document.getElementById('cart-value');
var cart_value = 0;

var items = [];
var price = [];

function adder(i, p){
    cart_value++;
    cart_items.textContent = cart_value;
    items.push(i);
    price.push(p);
}

function count(){
    var counter = {};
    items.forEach(book => {
        if(counter[book]){
            counter[book] += 1;
        }else{
            counter[book] = 1;
        }
    });
    var counter_one = {};
    price.forEach(cost => {
        if(counter_one[cost]){
            counter_one[cost] += 1;
        }else{
            counter_one[cost] = 1;
        }
    });
    let one = Object.keys(counter);
    let two = Object.values(counter);
    for(let i = 0; i<one.length; i++){
        console.log(`Item name: ${one[i]} - Quantity: ${two[i]}`);
    }

    let one_1 = Object.keys(counter_one);
    let two_2 = Object.values(counter_one);
    var total = 0;
    for (let i = 0; i<one_1.length; i++){
        let t= one_1[i]*two[i];
        total+=t;
    }
    let decimal = 1-(Math.ceil(total)-total);
    console.log(`The total amount is :${Math.floor(total)}$ ${Math.ceil(decimal*100)} Cents`);
}
