import React, {useState} from 'react';

//hooks can only be called inside react function components, at the top level of a component and cannot be conditional
const Icon = (props) => {
    const [isHovering, setIsHovering] = useState(false); //used with the img onMouseEnter and onMouseLeave to change size of solar systems/ planets
    //When mouse enters increase size, when exits reverts to original (logic of ternary operator in image style)
    const handleMouseEnter=()=>{
        setIsHovering(true);
    };
    const handleMouseLeave=()=>{
        setIsHovering(false);
    };

  
    return (
    <div>

      <img classname='planets' src={props.src} alt={props.alt} style={{width: isHovering ? '20%':'10%', height: isHovering ? '20%':'10%'}}
      position={props.position} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    </div>
  )
}

export default Icon
