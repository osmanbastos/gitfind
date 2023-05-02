import Header from "../components/Header/Header";
import background from '../assets/background.png'
import './App.css'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <div className="container">
        <img src={background} className="background" alt="background app" />
        <div className="content">
            <Input/>
            <Button/>
        </div>
      </div>
    </div>
  );
}

export default App;
