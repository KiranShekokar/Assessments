import { useState } from "react";

function Product(){

     var[proname,setProname]=useState("");
     var[proprice,setProprice]=useState("");
     var[proqty,setProqty]=useState("");
     var[output,setOutput]=useState("");

    function selectProduct(event){
        setProname(event.target.value)
    }
    function inputProductPrice(event){
        setProprice(event.target.value)
    }
    function inputProductQty(event){
        setProqty(event.target.value)
    }
    function getTotal(){
        var total = parseInt(proprice) * parseInt(proqty);
        setOutput("The total Amount of "+ proname +" is "+ total);
    }
    
 return(
    <>
    <fieldset>
        <legend>
            Product Details for Billing
        </legend><br/>
        Product Name : <select onChange={selectProduct}>
            <option value="Phone">Phone</option>
            <option value="Tablet">Tablet</option>
            <option value="Laptop">Laptop</option>
        </select><br/><br/>
        Product Price : <input type="text" onChange={inputProductPrice}/><br/><br/>
        Product Quantity : <select onChange={inputProductQty}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <br/><br/>
        <input type="button" value="Get Amount" onClick={getTotal}/>
        <p style={{color:"red"}}>{output}</p>
    </fieldset>
    </>
 )
}
export default Product;