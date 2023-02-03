import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponet from './components/FirstComponet';
import Hooks from './components/Hooks';
import Images from './components/Images';
import Lista from './components/Lista';
import RenderCondicional from './components/RenderCondicional';

function App() {
  return (
    <div className='App'>
      <h2>Começando</h2>
      <FirstComponet />
      <AnotherComponent />
      <Images />
      <Hooks />
      <Lista />
      <RenderCondicional x={8} />
    </div>
  );
}

export default App;
