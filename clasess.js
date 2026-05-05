class book{
    constructor(name, autor, available){

this.name = name;
this.autor= autor;
this.available = available;}

checkBook(){this.available =false ;}




    }


let book1 = new book('lord of the rings', 'j.r.r. tolkien', true);
let  book2 = new book('harry potter', 'j.k. rowling', true);
let book3 = new book('the great gatsby', 'f. scott fitzgerald', true);

console.log(book1);

book1.checkBook();

console.log(book1);


class hayabusaBank{
    constructor(owner, balance){

this.owner = owner;
this.balance = balance;}
deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
}

balanceCheck(){return this.balance;}
withdraw(amount) {
    if (amount > this.balance) {
        console.log(`Insufficient funds. Current balance: ${this.balance}`);
        return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
}

}

let account1 = new hayabusaBank('Alice', 0);




account1.deposit(100);

