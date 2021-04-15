import './App.css';
import Home from './components/Home/Home'
import Poets from './components/Poets/Poets'
import Contacts from './components/Contacts/Contacts'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
		<nav className="nav nav-animated">
      			<Route path="/about" component={Poets} />
     			 <Route path="/contacts" component={Contacts} />
     			 <Route path="/" component={Home}exact/>
     			 <Link to="/" className="nav-link">Home</Link>
     			 <Link to="/poets"   className="nav-link">Poets</Link>
      			<Link to="/contacts"   className="nav-link">Contacts</Link>
    	</nav>
		<section>
			


		</section>
      
     	
    </div>
  );
}

export default App;
