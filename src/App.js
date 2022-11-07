// import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import background from './ASSETS FOLDER/pattern-background-desktop (1).svg'

function App() {
  return (
    <div className="App">
      <Component1 />



      <div className='me' style={{ backgroundImage: `url(${background})` }} >

      </div>

    </div>
  );
}

export default App;
