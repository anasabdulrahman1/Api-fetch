
import Apifetch from './Apifetch';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import BannerCarousel from './BannerCarousel';




function App() {
  return (
    <div className="App">
      <Header/>
      <BannerCarousel/>
      <Apifetch/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
