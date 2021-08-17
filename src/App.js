import './App.css';
import Todo from './Components/Todo';
import {AppProvider} from './Context';
function App() {
  return (
    <AppProvider>
          <div className="App">
      <Todo/>
    </div>
    </AppProvider>

  );
}

export default App;
