import heart from "./heart.png"



function Card(props) {
    const handleHeartClick = () => {
        alert("Added to favorites");
    };

    const handleCommanderClick = () => {
        alert("Commande ajoutée à votre panier");
    };

    return (
        <div className="card">
            <img className="im" src={props.source} />
            
            <div className="content" style={{position:"relative",top:"20px", borderTop: '1px solid rgba(0, 0, 0, 0.1)', paddingTop: '10px', width:"110%" }}>
                <div style={{position:"relative",left:"30px",top:"4px"}}>
                    <h4 className="title">{props.title}</h4>
                    <div className="button2">
                        <p className="text">{props.text}</p>
                        <div style={{position:"relative",left:"15px", bottom:"15px"}}>
                            <button className="heart" onClick={handleHeartClick} style={{ height: "40px", width: "53.83px ", border: "solid 1px rgba(222,226,231,1)", borderRadius: "6px", backgroundColor: "rgba(255, 255, 255, 1)" }}>
                                <img src={heart} style={{ position: "relative", top: "2px" }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttoncont" style={{position:"relative",top:"10px"}}>
                <button className="button" onClick={handleCommanderClick}>Commander</button>
            </div>
        </div>
    );
}

export default Card;




{/* <Card source={productpic} title="99$" text="GoPro HERO6 4K Action Camera - Black" />*/ }
