import com1 from "./person.png"
import com2 from "./message.png"
import com3 from "./heartl.png"
import com4 from "./chariot.png"
import logo from "./logo.png"
import Com from "./com.jsx"


function Navbar(){
    return(
        <div className="nav" style={{display:"flex" , justifyContent:"space-between", msFlexDirection:"row" }}>
            
            <div className="brandandlogo"  style={{display:"flex" , gap:"6px", marginTop:"10px" , marginLeft:"60px"}}>
                <img className="logo" src={logo} style={{height:"44px" , width:"44px", opacity:"80%", marginTop:"7px"}}></img>
                <h3 className="Brand" style={{color:"rgba(140, 183, 245, 1)"}}>BRAND</h3>
            </div>
            <div className="Search" style={{ marginTop: "17px", border: "1px rgba(13, 110, 253, 1)", display: "flex", alignItems: "center" ,position:"relative",bottom:"13px"}}>
    <input type="text" placeholder="search" style={{ width: '410px', height: "27px", borderRadius: '5px 0px 0px 5px', borderBottom: '3px solid #0D6EFD', borderTop: '3px solid #0D6EFD', borderLeft: '3px solid #0D6EFD', paddingLeft: '10px', fontSize: '1rem', color: 'rgba(140, 183, 245, 0.8)' }}></input>
    <select className="select" style={{ width: "145px", height: "34px", fontSize: "1rem", textAlign: "center", fontWeight: "400px", borderBottom: "3px solid #0D6EFD", borderTop: "3px solid #0D6EFD", borderLeft: "3px solid  #0D6EFD", borderRight: "3px solid #0D6EFD" }} >
        <option value="">All category</option>
        <option value="">tech </option>
        <option value="">medical</option>
    </select>
    <button type="submit" style={{ color: "white", width: "100px", height: "34px", fontSize: "1rem", fontWeight: "500px", backgroundColor: "#0D6EFD", border: "3px solid #0D6EFD", borderRadius: "0px 3px 3px 0px" }}>search</button>
</div>




            <div className="Coms"  style={{display:"flex" , gap:"20px" , marginRight:"60px",position:"relative",top:"3px"}}>
              <Com text="profile" source={com1}></Com>
              <Com text="message" source={com2}></Com>
              <Com text="orders" source={com3}></Com>
              <Com text="my cart" source={com4}></Com>
                 
            </div>

        </div>
    )

}
export default Navbar