import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts}/>
      <Route path="/" component={Home}exact/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
       
    
     
    </div>
  );
}

export default App;
