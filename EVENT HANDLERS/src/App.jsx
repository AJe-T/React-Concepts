import "./App.css";
import Counter from "./Components/Counter";
import Navbar from "./Components/NavBar";
function App() {
  return (
    <>
      <Navbar color={"bg-danger"} />
      <Counter />
    </>
  );
}

export default App;
