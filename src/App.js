import { Container, Form, Nav, NavDropdown, Navbar,Button, Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBare from './components/NaveBare';
import { Formes, Mahrez } from './components/Formes';
import Arraye from './components/Arraye';
function App() {
  return (
    <div className="App">
    <NaveBare/>   
      <h1>Hello ...</h1>
      <Formes/>
      {/* <Mahrez/> */}
      <Arraye/>
      
    
    </div>
  );
}

export default App;
