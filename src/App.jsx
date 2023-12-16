import { MainRouter } from "./Routes/MainRouter";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
}

export default App;
