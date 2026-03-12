import DaisyNav from "./components/daisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <DaisyNav /> */}
      <h1 className="text-2xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
