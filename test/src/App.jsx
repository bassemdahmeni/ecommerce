import productpic from './assets/image 33.png';
import Card from './card.jsx';
import Navbar from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
import Pagination from './paggination.jsx';
import Section from './section/section.jsx';
import background from './background.png'
import Grid from './Grid.jsx';
import im1 from './1.png'
import im2 from './4.png'
import im3 from './3.png'
import im4 from './4.png'
import im5 from './6.png'
import im6 from './7.png'
import im7 from './8.png'
import im8 from './1.png'
import im9 from './4.png'
import Paggination from './paggination.jsx';

function App() {
  return (
    <div style={{maxWidth:"100vw"}}> 
      <Navbar></Navbar>
      <br></br>
      <Section></Section>
      <br></br>
      <br></br>
      
      
      <div style={{marginLeft:"60px"}}>
        <h1 style={{ fontSize: "3rem", position:"relative",top:"20px" }}>Our Products</h1>
        <p style={{ fontSize: "1.25rem",position:"relative",left:"5px" }}>Latest Tranding</p>
      </div>
      
      
      <div style={{display:"flex",justifyContent:"center", width:"100%",backgroundColor:"rgba(239, 242, 244, 1)" }}>
        <Grid></Grid>
        
      </div>
     
      

      <div style={{backgroundColor:"rgba(239, 242, 244, 1)",height:"90px"}}> 
        <div style={{position:"relative",top:"25px"}}>
            <Paggination totalPages={3} ></Paggination>
        </div>
       
      </div>

      
      
      <br></br>
      <Footer></Footer>
      <br></br>
      <div style={{width:"100%",height:"68px",border:"1px,0px,0px,0px rgba(222, 226, 231, 1)",backgroundColor:"rgba(239, 242, 244, 1)"}}>
          <p style={{color:"rgba(96, 96, 96, 1)", position:"relative",left:"100px",top:"20px",width:"30%"}}>© 2023 Ecommerce</p>
      </div>
     
      
      
      
      
    </div>
      
     
  );
}

export default App;