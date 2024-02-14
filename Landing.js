import React, {useState, useRef} from "react";
import './landing.css';
import myImage from './Rectangle3.png';
import myImage1 from './Rectangle6.png';


const Landing = () => {
    const [backgroundColor, setBackgroundColor] = useState('#171718'); 
    
    const [showThunder, setShowThunder] = useState(false);
    const cloudRef1 = useRef(null);
    const cloudRef2 = useRef(null);

    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

const handleCloudsCollision = () => {
    const cloud1 = cloudRef1.current;
    const cloud2 = cloudRef2.current;
    
    cloud1.style.transform = 'translateX(-50px)';
    cloud2.style.transform = 'translateX(50px)';

    // Check for collision (you may need to adjust the conditions based on your images)
    // if (
    //   cloud1.right > cloud2.left &&
    //   cloud1.left < cloud2.right &&
    //   cloud1.bottom > cloud2.top &&
    //   cloud1.top < cloud2.bottom
    // ) 
    
      setShowThunder(true);

      // Reset thunder animation after a short delay
      setTimeout(() => {
        cloud1.style.transform = 'translateX(0)';
        cloud2.style.transform ='translateX(0)';
        setShowThunder(false);
      }, 1000);
    
  };



    return (

        <div className="page-container" style={{ backgroundColor, minHeight: '100vh', padding: '20px', backgroundAttachment: 'fixed' }}>
            <h1 className="text-container" >Efficient energy, profitable <br/> operations!</h1>
            <button className="custom-button">Join Us</button>
            
            <img src={myImage} alt="bulb" className="bulb-container" />
        
            
            <img ref={cloudRef1} src={myImage1} alt="cloud" className="cloud-container" onClick={handleCloudsCollision} />
            {showThunder && <div className="thunder"></div>}
            
            <img  ref={cloudRef2} src={myImage1} alt="cloud" className="clou-container" onClick={handleCloudsCollision} />
            
            
        </div>
    );
};
export default Landing;