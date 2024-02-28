import React, { useState, useEffect } from 'react';
import background1 from './background1.png';
import background2 from './background2.png';
import background3 from './background3.png';

function Section() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [background1, background2, background3]; 

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [backgroundIndex, backgrounds.length]); 
    return (
        <div className="container33" style={{ height: "695px", backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            <h5 style={{ fontSize: "1.75rem", fontWeight: "400" }}>Latest trending</h5>
            <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Electronic items</h2>
            <button style={{ width: "17%", height: "10%", fontSize: "1rem", fontWeight: "500", borderRadius: "5px", cursor: "pointer", border: "none" }}>Learn more</button>
            
        </div>
    );
}

export default Section;









