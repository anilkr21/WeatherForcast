
import './App.css';
import WeatherNow from './components/WeatherNow';
import Home from './scenes/global/Home';


function App() {
  return (
    <div className="app">
       
        <Home />
        <WeatherNow />
    </div>
  );
}

export default App;
