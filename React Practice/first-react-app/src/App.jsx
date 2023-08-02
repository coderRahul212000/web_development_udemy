import './App.css';
import Slots from "./Slots"
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import TogglerCounter from './ToggleCounter';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {

  return(
    <div>   
       
      <ColorBoxGrid colors={colors}/>
      {/* <ColorBox colors = {colors}/> */}
      {/* <TogglerCounter/> */}
      {/* <Toggler/> */}
      {/* <Counter num={1}/>  */}
            {/* <Clicker message="HI!!!" buttonText=" Please Click Me" />
            <Clicker message="Please Stop Clicking Me!" buttonText="do not click"/> */}
            

    </div>
  )

}
export default App
