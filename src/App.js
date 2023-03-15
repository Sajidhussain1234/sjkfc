import AddToCartState from "./context/AddToCartState";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-dark">
      <AddToCartState>
        <Home />
      </AddToCartState>
    </div>
  );
}

export default App;
