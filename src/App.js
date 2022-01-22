import logo from './logo.svg';
import './App.css';
import Fibonacci from './Fibonacci.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
			Aplikacja obliczająca n-ty element ciągu Fibonacciego
        </p>
        </a>
				<Fibonacci/>
		
		
      </header>
	  <div class="content">
	  </div>
    </div>
  );
}

export default App;
