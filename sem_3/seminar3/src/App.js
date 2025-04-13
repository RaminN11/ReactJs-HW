import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import Counter from './components/counter';
import MessageList from './components/MessageList';
import ThemeSwitcher from './components/ThemeSwitcher';
import TextDisplayForm from './components/TextDisplay';
function App() {
  return (
    <div className="App">
      {/* <Greeting name = "Taylor"/>
      <Greeting name = "Mike"/>
      <Counter /> */}
      <TextDisplayForm />
    </div>
  );
}

export default App;
