

function App() {

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

 var customerArr = [
  {name:"Kiran",age:22,city:"Pune"},
  {name:"Anu",age:22,city:"Hyd"},
  {name:"Urvashi",age:22,city:"Delhi"},
  {name:"Nikhil",age:22,city:"UK"},
  {name:"Riya",age:22,city:"Pune"}
 ];

 var customer = customerArr.map(item =>{
   return <p>{item.name},<span>{item.age},</span><span>{item.city}</span></p> ;
 });
 
var product = arr.map(item =>{
  return <tr><td>{item.name}</td>
  <td>{item.id}</td>
  <td>{item.stock}</td>
  <td>{item.price}</td>
  <td>{item.category}</td>
  </tr>
});
   
  return (
   <div> <h1 align="center">REACT DEMO</h1><hr/> 
   <table border="2" width="1000px">
      <tr>
        <th>Product Name</th>
        <th>Product ID</th>
        <th>Product Stock (Quantity) </th>
        <th>Product Price</th>
        <th>Product Category</th>
      </tr>

      {product} 

   </table>
   <div>{customer}</div>
   </div>
  );
}
export default App;
