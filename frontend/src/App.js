import './styles/App.css';
import Intro from './pages/Intro';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Waitlist from './pages/Waitlist';
import { useRef } from 'react';

// Add this import
import Navbar from './components/Navbar';

function App() {
  const waitlistRef = useRef(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="App">
      <Navbar scrollToWaitlist={scrollToWaitlist} />
      <Intro scrollToWaitlist={scrollToWaitlist} />
      <Problem />
      <Solution />
      <Waitlist ref={waitlistRef} />
    </main>
  );
}

export default App;