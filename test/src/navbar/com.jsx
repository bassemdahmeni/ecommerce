


function Com(props){
    return(
        <div style={{display:"flex", flexDirection:"column" ,marginTop:"20px", cursor:"pointer"}}>
            <div style={{ display:"flex" , justifyContent:"center"}}><img src={props.source} style={{height:"19px",width:"20px" }}></img></div>
            <div style={{ position:"relative" , bottom:"10px"} }><p >{props.text}</p></div>
        </div>
    )
}
export default Com