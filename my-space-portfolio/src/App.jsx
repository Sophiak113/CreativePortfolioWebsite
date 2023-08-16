import Icon from "./components/Icon";
import './App.css'
function App() {
  return (
    <div style={{
      // Below puts a backgroundimage for app will appear behind all components
      backgroundImage:"url(/SpaceBackground.png)",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    margin:"0px"}}>
    <Icon src = "/PinkSolarSystem.png" alt="Pink solar system"
    position={{}}/> 
    {/* Left position tag empty, just adding images before deciding where they'll go */}
    <Icon src = "/PurpleSolarSystem.png" alt="Purple solar system"
    position={{}}/> 
    <Icon src = "/GreenSolarSystem.png" alt="Green solar system"
    position={{}}/> 
    </div>
  );
}

export default App;
