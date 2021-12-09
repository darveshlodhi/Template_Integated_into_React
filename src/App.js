
import './App.css';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Furnitures from './components/furnitures';
import Contact from './components/contact';
import Footer from './components/footer';
import AboutFull from './components/AboutFull';
//import {Route, BrowserRouter,  Switch} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <>
   
  
        
        
        {/* <Route path="/logout">
          <Logout />
        </Route> */}
        

    <div   class="header_section">
    <Header/>
    <Router>
    <Route exact path = "/" component = {Home}></Route>
    <Route exact path = "/About" component = {About}></Route>
    <Route exact path = "/Furnitures" component = {Furnitures}></Route>
    <Route exact path = "/Contact" component = {Contact}></Route>
    
   
    </Router>
    <Footer/>
   </div>
    {/* <About/>
    <Furnitures/>
    <Contact/>
    <Footer/>
    < BrowserRouter>
    <Switch>
   
            <Route exact path = "/About" component = {AboutFull}></Route>
            
          </Switch>
          </BrowserRouter> */}
          
    </>
  );
}

export default App;
