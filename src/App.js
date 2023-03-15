import './App.css';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Debounce from './debouncing/Debounce';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent name={'your name'} /> */}
        {/* <FunctionalComponent name={'your name'} /> */}
        <Debounce />
      </header>
    </div>
  );
}

export default App;
