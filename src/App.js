import './App.css';
import Header from './components/Header';
import BannerMain from './components/BannerMain';
import Services from './components/services/Services';
import Details from './components/details/Details';
import Fleet from './components/Fleet/Fleet';
import BannerBottom from './components/BannerBottom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <BannerMain />
    <Services/>
    <Details/>
    <Fleet />
    <BannerBottom />
    <Footer />
    </div>
  );
}

export default App;
