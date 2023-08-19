import Icon from "./components/Icon";
import Background from "./components/Background";

function App() {
  return (
    <div className="main-container">
      
      <Background src="/SpaceBackground.png" alt="Space background"/> 
      {/* video background */}
      <div className="planet-wrapper">
    <Icon src = "/PinkSolarSystem.png" alt="Pink solar system"
    position={{}} heading = "Intro"/> 
    {/* Left position tag empty, just adding images before deciding where they'll go */}
    <Icon src = "/PurpleSolarSystem.png" alt="Purple solar system"
    position={{}} heading = "Projects"/> 
    <Icon src = "/GreenSolarSystem.png" alt="Green solar system"
    position={{}}heading = "Contact Me"/> 
    </div>
    </div>
  );
}

export default App;
