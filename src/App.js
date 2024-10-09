import './styles/App.css';
import Intro from './pages/Intro';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Waitlist from './pages/Waitlist';

function App() {
  return (
    <main className="App">
      <Intro />
      <Problem />
      <Solution />
      <Waitlist />
    </main>
  );
}

export default App;
