import './App.css';
import {Routes, Route} from 'react-router-dom';
import Characters from './components/characters/Characters';

function App() {
  return (
    <div className="App">
     <Routes>
      <Routes path='/characters' element={Characters}/>
     </Routes>
    </div>
  );
}

export default App;
