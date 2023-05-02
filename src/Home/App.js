import Header from "../components/Header/Header";
import background from '../assets/background.png'
import './App.css'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Foto from '../assets/40010049.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <div className="container">
        <img src={background} className="background" alt="background app" />
        <div className="content">
          <div className="finder">
              <Input/>
             <Button/>
          </div>
          <div className="result">
            <img src={Foto} className="foto" alt="Foto do perfil" />
            <div className="profile">
              <h3>Osman Bastos</h3>
              <p className="tagname">@osmanbastos</p>
              <p className="description">FullStack Develloper Javascript | React-Native | Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
