import HomePage from './components/home_page/HomePage';
import './App.css';
import './styles/global.css';
import './styles/custom.css';
import './styles/maps.css';
import Cont from './components/contacts/Cont';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerBg from './assets/img/banner-bg.jpg';
import weatherBg from './assets/img/weather-bg.jpg';



function App() {
  return (
   <div className='container'>
    <HomePage/>
    <Cont/>
    <img src={bannerBg} alt="Banner Background" />
    <img src={weatherBg} alt="Weather Background" />
   </div>
  );
}

export default App;
