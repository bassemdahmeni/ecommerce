



function Boutton(props){
    return(
        <div >
           <button style={{ width: "124px", height: "42px", padding: "0", position: "relative", overflow: "hidden",backgroundColor:"black",cursor:"pointer",borderRadius:"5px" }}>
             <img src={props.source} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: "0", left: "0" }} />
           </button>

        </div>
    )
}
export default Boutton 