class product{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

sell(quantity){
if (quantity > this.stock) { console.log(`insufficient stock. Current stock: ${this.stock}`); return;} 
this.stock -= quantity;
console.log(`Sold ${quantity} units. New stock: ${this.stock}`);     
}

restock(quantity){
this.stock += quantity;
console.log(`Restocked ${quantity} units. New stock: ${this.stock}`);
}

checkStock(){
    return this.stock;
}   
}

let product1 = new product('laptop', 1000, 10);
console.log(product1.checkStock());
