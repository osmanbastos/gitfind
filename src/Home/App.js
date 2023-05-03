import Header from "../components/Header/Header";
import background from '../assets/background.png'
import './App.css'
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Foto from '../assets/40010049.jpeg'
import ItemList from "../components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      <div className="container">
        <img src={background} className="background" alt="background app" />
        <div className="content">
          <div className="finder">
              <Input />
             <Button />
          </div>
          <div className="result">
            <img src={Foto} className="photo" alt="Foto do perfil" />
            <div className="profile">
              <h3>Osman Bastos</h3>
              <span className="tagname">@osmanbastos</span>
              <p className="description">FullStack Develloper Javascript | React-Native | Node.js</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repo">Repositórios</h4>
              <ItemList title="Repo1" description="repo description" />
              <ItemList title="Repo2" description="repo description" />
              <ItemList title="Repo3" description="repo description" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
