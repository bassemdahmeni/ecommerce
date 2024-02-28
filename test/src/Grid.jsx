import Card from './card'
import im1 from './1.png'
import im2 from './4.png'
import im3 from './3.png'
import im4 from './4.png'
import im5 from './6.png'
import im6 from './7.png'
import im7 from './8.png'
import im8 from './1.png'
import im9 from './4.png'


function Grid(){
    const cardData = [
        { id: 1, source:im1, title: "99$",  text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 2, source:im2, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 3, source:im3, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 4, source:im4, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 5, source:im5, title: "99$", text: "GoPro HERO6 4K Action Camera - Black"},
        { id: 6, source:im6, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 7, source:im7, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 8, source:im8, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        { id: 9, source:im9, title: "99$", text: "GoPro HERO6 4K Action Camera - Black" },
        
      ];


    return(
      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)",gap:"5px"}}>
          {cardData.map((card, index) => (
          <Card key={card.id} source={card.source} title={card.title} text={card.text} />
           ))}
      </div>
    )
}
export default Grid 