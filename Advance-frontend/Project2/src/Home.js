import './Home.css';

function Home(){
    return(
        <div>
            <p align="center" style={{fontSize:"50px"}}>WELCOME TO ABC SCHOOL</p>
            <div className="row">    
                       
                <img src="https://purewows3.imgix.net/images/articles/2016_09/highschool9.jpg?auto=format,compress&cs=strip" style={{margin:"10px",marginTop:"0px"}} className="col-sm-6"/>
                <p className='col-sm-5' style={{border:"2px solid gray" , padding:"10px",fontSize:"20px",borderRadius:"30px",marginTop:"40px",backgroundColor:"bisque"}}>
                From kindergarten through primary and secondary school, and subsequently, to faculty, school is a place where we always study, grow, and establish ourselves, socialize, be a friend, help others, and love and be loved. School is a buddy that will accompany us from the beginning of our youth till the conclusion of our lives. At school, we share all of our pleasures and sorrows, and we constantly rely on one another. This is made possible through the friendships we share. They assist us in effortlessly overcoming difficulties, sharing moments of enjoyment together, and looking forward to new paths.
                </p>
            </div>
        </div>
    )
}
export default Home;