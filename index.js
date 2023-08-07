function pizzaOven(crustType, sourceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sourceType = sourceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var inhouse = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var inhouse2 = pizzaOven("hand tossed", "marinara",["mozzarella", "feta"], ["mushrooms", "olives,", "onions"]);
var nuYork = pizzaOven("Thin crust", "tomatoe sauce", ["mozzarella", "provel"], ["oregano", "chilli flakes"]);
var greek = pizzaOven("deep dish", "tomatoe sauece", ["mozzarella", "feta"], ["kalamata olives","tomatoes", "oregano"]);
console.log(inhouse);
console.log(inhouse2);
console.log(nuYork);
console.log(greek);

function randomPizza(nuYork,inhouse2,inhouse,greek) {
    const keys = Object.values(pizzaOven(inhouse, inhouse2,nuYork,greek));
    return keys[Math.floor(Math.random() * keys.length)];
}
console.log(randomPizza(nuYork,inhouse2,inhouse,greek));