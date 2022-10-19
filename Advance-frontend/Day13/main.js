var prodDetails = require("./productModule");

var arr = prodDetails.product();
for(var item of arr){
    console.log(`Name : ${item.name} ,id :${item.id}, Price : ${item.price} , Category : ${item.category}`);
}

var p2 = prodDetails.category();
for(var item of p2){
    console.log(`Product details of a product with category : ${item.category} 
     ${item.name}`);
}

var p3 = prodDetails.stockpresent();
console.log("Product currently in stock :")
    for(var item of p3){
        console.log(`Name : ${item.name} , Price : ${item.price} , Category : ${item.category}`);
    }

var p1 = prodDetails.stock();
console.log("Product currently out of stock :")
    for(var item of p1){
       console.log(`Name : ${item.name} , Price : Rs.${item.price}, Category : ${item.category}`);
    }

var price = prodDetails.pricerange();
console.log("Product with price range of 1000-2000 is :")
for(var item of price){
    console.log(item.name);
}
