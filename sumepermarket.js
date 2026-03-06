let input = document.getElementById('input')
let checkPrice = document.getElementById('check')
let filterProducts = document.getElementById('filterProducts')
let add = document.getElementById('add')
let total = document.getElementById('total')

let p = document.getElementById('p') 
let pT = document.getElementById('pT') 





const superMarketProducts = [{name:'onion', price:10, type:'vegtable'},{name:'carrot', price:20, type:'vegtable'},
    {name:'cabage', price:30, type:'vegtable'}, {name:'spinach', price:40, type:'fruit'}, {name:'cucumber', price:50, type:'fruit'}, {name:'corn', price:60, type:'fruit'}]


const newCart = []


function findP(){ 
    let inputValue = input.value 
    let inputValueLow = inputValue.toLowerCase()

let addProduct = superMarketProducts.find(arrayV => arrayV.name === inputValueLow)

   if(addProduct)
{p.innerText =`${addProduct.name} price$ ${addProduct.price}`}
   else{
    {p.innerText =`product not found`}
   }
    
}

function checkIt(){
    let inputValue = input.value
    let inputValueLow = inputValue.toLowerCase()
    let addProduct = superMarketProducts.filter(arrayV => arrayV.type === inputValueLow)

if(addProduct.length > 0) {
    // Map through each product and display them all
    let displayText = addProduct.map(p => `${p.name} $${p.price}`).join('<br>')
    p.innerHTML = displayText
} else {
    p.innerText = 'no products found'
}
    
}



function addC(){
    let inputValue = input.value
    let inputValueLow = inputValue.toLowerCase()
    let addProduct = superMarketProducts.find(arrayV => arrayV.name === inputValueLow)


    newCart.push(addProduct)

    p.innerHTML = newCart.map(item => `${item.name} $${item.price}`).join('<br>')



}






function totalV(){
   
    let finalarray = newCart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price
}, 0)
pT.innerText = `Total: $${finalarray}`

}


add.addEventListener('click', addC)


filterProducts.addEventListener('click', checkIt)



checkPrice.addEventListener('click', findP)

total.addEventListener('click',totalV)


