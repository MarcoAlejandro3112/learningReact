import './App.css'
import logo from './Giphy-logo.png'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home/index'
import {Route, Link} from 'wouter'
import {GifsContextProvider} from './context/GifsContext'
import Detail from './pages/Detail'
function App() {
  
  return (
    <div className="App">
      <Link to="/">
        <figure className='App-logo'>
          <img alt="Giffy logo" src={logo} />
        </figure>
      </Link>
      <GifsContextProvider>
        <Route path="/" component={Home}/>
        <Route path="/search/:keyword" component={SearchResults}/>
        <Route path="/gif/:id" component={Detail}/>
      </GifsContextProvider>
    </div>
  );
}

export default App;
