import './App.css';
import Navbar from "./components/Navbar.js"
import Footer from './components/Footer/Footer.js';
import Deal from './components/Deal.js';
import HomeNav from './components/HomeNav.js';
import Services from './components/Services.js';
function App() {
  return (
    <div >
    <Navbar/>
    <HomeNav></HomeNav>
    <Services></Services>
    <Deal></Deal>
    <Footer></Footer>
    </div>
  );
}

export default App;
