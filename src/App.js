
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CharacterList from './pages/CharacterList';
import Search from './components/search/Search'
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState("")
  
  return (
    <div className="App">
    <NavBar></NavBar>
    <Search/>
    <CharacterList/>
    </div>
  );
}

export default App;
