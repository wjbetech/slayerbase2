import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header';
import { Favorites } from './Components/Favorites';
import { MonsterCards } from './Components/MonsterCards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Favorites />
        <MonsterCards />
      </div>
    </div>
  );
}

export default App;
