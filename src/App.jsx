import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Guitar } from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {
  const { data, cart, addToCart, removeCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } =
    useCart();

  return (
    <>
      <Header
        cart={cart}
        removeCart={removeCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <>
                <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
              </>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
