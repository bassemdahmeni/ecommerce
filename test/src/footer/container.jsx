


function Container(props){
  return(
    <div style={{lineHeight:"0.60"}}>
       <h4>{props.titre}</h4>
       <p style={{paddingBottom:""}}>{props.val1}</p>
       <p >{props.val2}</p>
       <p >{props.val3}</p>
       <p >{props.val4}</p>
    </div>
  )
    
}
export default Container