import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Route} from 'wouter'

function App() {
  
  return (
    <div className="App">
      <Route path="/gif/:keyword" component={ListOfGifs}/>
    </div>
  );
}

export default App;
