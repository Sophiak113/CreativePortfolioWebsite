import Icon from "./Icon";

function App() {
  return (
    <div style={{
      // Below puts a backgroundimage for app will appear behind all components
      backgroundImage:"url(/SpaceBackground.png)",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover"}}>
    <Icon src = "/PinkSolarSystem.png" alt="Pink solar system" width="20%" height ="20%"
    style={{}}/> 
    {/* Left style tag empty, just adding images before deciding where they'll go */}
    <Icon src = "/PurpleSolarSystem.png" alt="Purple solar system" width="20%" height ="20%"
    style={{}}/> 
    <Icon src = "/GreenSolarSystem.png" alt="Green solar system" width="20%" height ="20%"
    style={{}}/> 
    </div>
  );
}

export default App;
