import './App.css';
import Counter from './components/Counter';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting name="egg"/>
    </div>
  );
}

export default App;
