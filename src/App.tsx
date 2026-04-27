

import AlertBoxDisplay from "./components/AlertBox/AlertBoxDisplay";
import UserProfileDisplay from "./components/UserProfileCard/UserProfileDisplay";
//import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
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
        </div>
      </section>
    </>
  );
}

export default App;
