import logo from "./log.png"
import log1 from "./Fill 183.png"
import log2 from "./twitter3.png"
import log3 from "./linkedin3.png"
import log4 from "./instagram3.png"
import log5 from "./youtube3.png"
import Container from "./container"
import appstore from "./Group.png"
import google from "./googleplay.png"
import Boutton from "./button2"



function Footer(){
    return(
        <div className="container" style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgba(255,255,255,1)"}}>
            <div style={{marginLeft:"30px", position:"relative" ,bottom:"5px"}}>
               <div className="brandandlogo"  style={{display:"flex" , gap:"6px", marginTop:"10px" , marginLeft:"60px",position:"relative",top:"20px"}}>
                  <img className="logo" src={logo} style={{height:"44px" , width:"44px", opacity:"80%", marginTop:"7px"}}></img>
                   <h2 className="Brand" style={{color:"rgba(140, 183, 245, 1)"}}>Brand</h2>
               </div>
               <p style={{width:"276px",height:"48px",size:"16px",lineHeight:"24px",letterSpacing:"-0.2px",marginLeft:"62px"}}>Best information about the company gies here but now lorem ipsum is</p>
               <div style={{marginLeft:"60px",display:"flex",gap:"7px"}}>
                <img src={log1}></img>
                <img src={log2}></img>
                <img src={log3}></img>
                <img src={log4}></img>
                <img src={log5}></img>
               </div>
            </div>
            
             <div className="container2" style={{display:"flex", gap:"80px",marginTop:"20px",position:"relative",right:"50px"}}>
                <Container titre="About " val1="About Us" val2="Find store" val3="Categories" val4="Blogs"></Container>
                <Container titre="Partnership" val1="About Us" val2="Find store" val3="Categories" val4="Blogs"></Container>
                <Container titre="information" val1="Help Center" val2="Money Refund" val3="shipping" val4="Contact us"></Container>
                <Container titre="For users" val1="Login" val2="Register" val3="Settings" val4="My Orders"></Container>

             </div>
            <div className="Getapp" style={{display:"flex",flexDirection:"column",gap:"7px",marginRight:"150px",marginTop:"4px"}}>
                <h4 style={{position:"relative",top:"10px"}}>Get app</h4>
                <Boutton source={appstore}></Boutton>
                <Boutton source={google}></Boutton>

            </div>
           

        </div>
    )
}
export default Footer