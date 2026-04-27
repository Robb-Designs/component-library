

import AlertBoxDisplay from "./components/AlertBox/AlertBoxDisplay";
import UserProfileDisplay from "./components/UserProfileCard/UserProfileDisplay";
import  ProductDisplay  from './components/ProductDisplay/ProductDisplay';
import headphonesImage from "./assets/headphones.jpg";

import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Component Library</h1>

          <div className="alert-boxes">
            <h2>Alert Components</h2>
            <AlertBoxDisplay />
            
          </div>

          <div className="user-profile-cards">
            <h2>User Profile Card Components</h2>
            <UserProfileDisplay />
          </div>
          
          <div className="user-profile-cards">
            <h2>Product Display Components</h2>
            <ProductDisplay
              product={{
                id: "1",
                name: "Wireless Headphones",
                description:
                  "Experience high-quality sound without the wires. Perfect for music lovers on the go.",
                price: 99.99,
                inStock: true,
                imageUrl: headphonesImage,
              }}
              showDescription={true}
              showStockStatus={true}
              onAddToCart={(productId) =>
                alert(`Added product with ID: ${productId} to cart`)
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
