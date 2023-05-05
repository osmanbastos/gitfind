import Header from "../components/Header/Header";
import background from '../assets/background.png'
import './App.css'
import ItemList from "../components/ItemList/ItemList";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState(null);

  const handleFind = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }


  return (
    <div className="App">
      <Header/>
      <hr />

      <div className="container">
        <img src={background} className="background" alt="background app" />
        <div className="content">

          <div className="finder">
              <input value={user} onChange={event => setUser(event.target.value)}/>
              <button onClick={handleFind}>Find</button>
          </div>
          {currentUser?.name ? (<>
            <div className="result">
              <img src={currentUser.avatar_url} className="photo" alt="Foto do perfil" />
              <div className="profile">
                <h3>{currentUser.name}</h3>
                <span className="tagname">{currentUser.login}</span>
                <p className="description">{currentUser.bio}</p>
              </div>
            </div>
          </>): null}

          <hr />

          {repos?.length ? (
            <div>
              <h4 className="repo">Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ): null}
        </div>
      </div>
    </div>
  );
}

export default App;
