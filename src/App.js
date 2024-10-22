import logo from './logo.svg';
import './App.css';
import {Header , Footer} from './Header';

function App() {
// let name = "Sandeep kumar chaurasiya"
// let age = 25
// let post = "ASE"

  return (
    <div className="App">
      <header className="App-header">

        <h1><Header 
        value={
         { name: "Sandeep kumar chaurasiya",
          age : 25 ,
          post : "ASE"
        }}
        /></h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Rectjs</code> 
        </p>
       {/* <h1>{name}</h1> */}

       <h1>{<Footer />}</h1>
      </header>

      
    </div>
  );
}

export default App;
  