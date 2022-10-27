import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   proid:number=0;
   proname:string="";
   price:number=0;
   category:string="";
   qty:number=0;

   public prodArray:any[]=[];
  getProduct():void{ 
   this.prodArray =  [
      {proid : 1,proname:"Prod1",price:1000,category:"cat1",qty:3},
      {proid : 2,proname:"Prod2",price:1500,category:"cat2",qty:1},
      {proid : 3,proname:"Prod3",price:1600,category:"cat3",qty:2},
      {proid : 4,proname:"Prod4",price:1700,category:"cat4",qty:4},
      {proid : 5,proname:"Prod5",price:1800,category:"cat5",qty:7}
     ]
  }
  addProduct():void{
    let prodObj:any = {};
    prodObj.proid = this.proid;
    prodObj.proname =this.proname;
    prodObj.price = this.price;
    prodObj.category = this.category;
    prodObj.qty = this.qty;
    this.prodArray.push(prodObj);
  }
  selectProd(pid:number):void{
    let obj = this.prodArray.find(item=>item.proid == pid);
    this.proid = obj.proid;
    this.proname = obj.proname;
    this.price = obj.price;
    this.category = obj.category;
    this.qty = obj.qty;

  }
  updateProduct(pid:number):void{
    let obj = this.prodArray.find(item=>item.proid == pid);
    //alert(index);
    obj.proid = this.proid;
    obj.proname = this.proname;
    obj.price =this.price;
    obj.category = this.category;
    obj.qty = this.qty;
  }
  deleteProd(pid:number):void{
    let index = this.prodArray.findIndex(item=>item.proid == pid);
    this.prodArray.splice(index,1);
  }
 
  resetProduct():void{
      this.proid=0;
      this.proname="";
      this.price =0;
      this.category ="";
      this.qty=0;
      this.prodArray = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
