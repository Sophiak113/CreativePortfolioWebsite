import Icon from "./components/Icon";
import Background from "./components/Background";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import TitleBar from "./components/TitleBar";

function App() {
  const handleSelectedIcon = (currentHeading) =>{
    console.log(currentHeading)
  }
  return (
    <div className="main-container">
    
        <div className="container">
          <Background src="/SpaceBackground.png" alt="Space background"/>
          {/* video background */}
          <TitleBar page="Wecome to Sophia Kinsey's portfolio"></TitleBar>
          <div className="planet-wrapper">
            {/* Could I create icons as a list as they repeat? */}
              <Icon src = "/PinkSolarSystem.png" alt="Pink solar system"
              position={{}} heading = "Intro" onSelectIcon={handleSelectedIcon()}/>
              {/* Left position tag empty, just adding images before deciding where they'll go */}
              <Icon src = "/PurpleSolarSystem.png" alt="Purple solar system"
              position={{}} heading = "Projects"/>
              <Icon src = "/GreenSolarSystem.png" alt="Green solar system"
              position={{}}heading = "Contact Me"/> 
                </div>
        </div>
      {/* making containers that can be scroll snapped to */}
    <div className="container"> 
        <Intro />
    </div>
    <div className="container">
      <Projects/>

    </div>
    <div className="container">
      <ContactMe/>
    </div>
    </div>
  );
}

export default App;
