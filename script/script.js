var Product = function(params) {
    this.place = params.place;
    this.price = params.price;
    this.weight = params.weight;
}

Product.prototype.find = function() {
    console.log(`This product is stored in ${this.place}.`);
    return this;
}

Product.prototype.weightItem = function(amount) {
    var totalWeight = (this.weight*amount).toFixed(2);
    console.log(`Total weight is ${totalWeight}kg.`);
    return totalWeight;
}

Product.prototype.buy = function (amount) {
    console.log(`You bought ${amount} of selected items!`);
    this.getBill(amount);
    return this;
}

Product.prototype.getBill = function (amount) {
    var curWeight = this.weightItem(amount);
    console.log(`---------------BILL-------------------`);
    console.log(`Weight - ${curWeight}kg.`);
    console.log(`Price for 1kg - ${this.price}grn.`);
    console.log(`Total price - ${this.price*curWeight}grn.`);
    console.log(`--------------------------------------`);
    return this;
}

var apple = new Product({place: "Fruits Section", weight: 0.2, price: 25});
var tomato = new Product({place: "Vegetables Section", weight: 0.1, price: 40});

apple.find().buy(6);
tomato.find().buy(9);