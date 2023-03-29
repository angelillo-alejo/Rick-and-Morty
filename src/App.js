
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CharacterList from './pages/CharacterList';
import Search from './components/search/Search';
import { useState } from 'react';


function App() {
  let [search, setSearch] = useState("")
  
  return (
    <div className="App">
    <NavBar></NavBar>
    <Search setSearch={setSearch}></Search>
    <CharacterList></CharacterList>

    </div>
  );
}

export default App;
