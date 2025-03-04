import logo from './logo.svg';
import './App.css';
import { RenderButton } from './AppComponents/Button';
import { Timer } from './AppComponents/Timer';
function App() {
  return (
    <div>
      
      <RenderButton name="Start"/>
      <RenderButton name="Stop"/>
      <RenderButton name="Reset"/>
    </div>
  );
}

export default App;
