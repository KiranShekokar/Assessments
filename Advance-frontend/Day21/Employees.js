
function Employees(){
    var EmpArr = [
        {name: "Kiara Advani" , desc:"Manager", rate : 3 ,img :"https://i2.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-19.jpg?fit=720%2C1080&ssl=1"},
        {name: "Anu Shekhawat" , desc:"Analyst", rate : 2 , img :"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&width=1200"},
        {name: "Jeet Singh" , desc:"Consultant", rate : 4 ,img :"https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"},
        {name: "Manpreet Chaddha" , desc:"Desc4", rate : 2 ,img :"https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg"},
        {name: "Rohini Singh" , desc:"Senior Analyst", rate : 4 ,img :"https://media.istockphoto.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?k=20&m=1180926773&s=612x612&w=0&h=GDpHprMlxwBoiBGgVAIDEQNfpMyHhy3-pu6pOw8H650="},
        {name: "Kiran Shekokar" , desc:"Senior Manager", rate : 3, img :"https://images.squarespace-cdn.com/content/v1/5a6661b82aeba5fa3982e344/1525798279499-UHN62V0430SOHXJDTBV7/contemporary+photography+professional+pictures+1.jpg?format=1500w"},
        {name: "Kiara Advani" , desc:"Manager", rate : 3 ,img :"https://i2.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-19.jpg?fit=720%2C1080&ssl=1"},
        {name: "Anu Shekhawat" , desc:"Analyst", rate : 2 , img :"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&width=1200"},
        {name: "Jeet Singh" , desc:"Consultant", rate : 4 ,img :"https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"},
        {name: "Manpreet Chaddha" , desc:"Desc4", rate : 2 ,img :"https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg"},
        {name: "Rohini Singh" , desc:"Senior Analyst", rate : 4 ,img :"https://media.istockphoto.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?k=20&m=1180926773&s=612x612&w=0&h=GDpHprMlxwBoiBGgVAIDEQNfpMyHhy3-pu6pOw8H650="},
        {name: "Kiran Shekokar" , desc:"Senior Manager", rate : 3, img :"https://images.squarespace-cdn.com/content/v1/5a6661b82aeba5fa3982e344/1525798279499-UHN62V0430SOHXJDTBV7/contemporary+photography+professional+pictures+1.jpg?format=1500w"}
      ];

      var Emp = EmpArr.map(item => {
        return <EmployeesDetail empObj={item}/>
      })
    return (
        <div>
            {Emp}
        </div>
    )
}
function EmployeesDetail(props){
    var rate=[];
    var starImg = "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png";
    for(var i=0;i<(props.empObj.rate);i++){
        rate.push(<img src={starImg} width="20" height="20"/>)
    }
    return(
        <div style={{border:"2px solid gray",borderTop:"5px solid darkgray",float:"left",padding:"20px",textAlign:"center",margin:"10px",borderRadius:"10px"}}>
            <img src={props.empObj.img} height="130" width="130" style={{borderRadius:"100%"}}/><br/>
            <span>{props.empObj.name}</span><br/>
            <span>{props.empObj.desc}</span><br/>
            <span>{rate}</span><br/>
            <button type="button">BOOK APPOINTMENT</button>   
        </div>
    )
}
export default Employees;