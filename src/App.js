import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterComponent from './Components/CounterComponent';
import AnotherComponent from './Components/AnotherComponent';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
        <AnotherComponent />
      </div>
    </Provider>
  );
}

export default App;
