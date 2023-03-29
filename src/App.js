
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CharacterList from './pages/CharacterList';
import { useState } from 'react';


function App() {

  const [Search, setSearch] = useState("")
  
  return (
    <div className="App">
    <NavBar></NavBar>
    <Search setSearch={setSearch}></Search>
    <CharacterList></CharacterList>

    </div>
  );
}

export default App;
