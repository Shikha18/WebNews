import logo from './logo.svg';
import './App.css';
import Api from './API/Api';
import Navbar from './Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Api />
    </div>
  );
}

export default App;

