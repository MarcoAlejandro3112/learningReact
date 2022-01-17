import './App.css'
import logo from './Giphy-logo.svg'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home/index'
import {Route, Link} from 'wouter'

function App() {
  
  return (
    <div className="App">
      <Link to="/">
        <figure className='App-logo'>
          <img alt="Giffy logo" src={logo} />
        </figure>
      </Link>
      <Route path="/" component={Home}/>
      <Route path="/search/:keyword" component={SearchResults}/>
    </div>
  );
}

export default App;
