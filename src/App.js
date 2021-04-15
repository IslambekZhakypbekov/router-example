import './App.css';
import Home from './components/Home/Home'
import Marvel from './components/Marvel/Marvel'
import Contacts from './components/Contacts/Contacts'
import News from "./components/News/News"
import { Route } from 'react-router'
import { Link } from 'react-router-dom'


function App() {
	
  return (
    <div className="App">
     
		<nav className="nav nav-animated">     	
				<Link to="/" className="nav-link">Home</Link>
     			<Link to="/marvel"   className="nav-link">Marvel</Link>
      			<Link to="/dccomics"   className="nav-link">DS comics</Link>
				<Link to="/news"   className="nav-link">News</Link>
	
     			
    	</nav>
		<section>

				<Route path="/" component={Home}exact/>
				<Route path="/marvel" component={Marvel} />
     			<Route path="/dccomics" component={Contacts} />
				<Route path="/news" component={News} />



		</section>
      
     	
    </div>
  );
}

export default App;
