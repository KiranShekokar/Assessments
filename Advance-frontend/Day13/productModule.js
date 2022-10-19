    var arr = [
        {name:"prod1" , id :123 ,stock:3 ,price :2000, category : "FMCG"},
        {name:"prod2" , id :124 ,stock:0 ,price :1000, category : "Crockery"},
        {name:"prod3" , id :125 ,stock:2 ,price :1500, category : "Edibles"},
        {name:"prod4" , id :126 ,stock:9 ,price :2500, category : "Technology"},
        {name:"prod5" , id :127 ,stock:0 ,price :1500, category : "Edibles"},
        {name:"prod6" , id :128 ,stock:2 ,price :1000, category : "FMCG"},
        {name:"prod7" , id :129 ,stock:2 ,price :1700, category : "Edibles"},
        {name:"prod8" , id :121 ,stock:0 ,price :1500, category : "FMCG"},
        {name:"prod9" , id :120 ,stock:2 ,price :3500, category : "Edibles"},
        {name:"prod10" , id :130 ,stock:20 ,price :1300, category : "Edibles"}
    ];

module.exports.product = function(){
    var array = arr;
    return array;
    }

module.exports.stock = function(){
   var s1 = arr.filter(item => item.stock == 0); 
   return s1;
}

module.exports.category = function(){
    var c1 = arr.filter(item=>item.category == "FMCG");
    return c1;
}

module.exports.stockpresent = function(){
    var sp1 = arr.filter(item => item.stock > 0);
    return sp1;
}

module.exports.pricerange = function(){
    var price = arr.filter(item=>item.price > 1000 && item.price <2000);
    return price;
}