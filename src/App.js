import './styles/App.css';
import Intro from './pages/Intro';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Waitlist from './pages/Waitlist';
import { useRef } from 'react';
function App() {

  const waitlistRef = useRef(null);

  const scrollToWaitlist = () => {
    console.log('scrolling to waitlist');
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="App">
      <Intro scrollToWaitlist={scrollToWaitlist} />
      <Problem />
      <Solution />
      <Waitlist ref={waitlistRef} />
    </main>
  );
}

export default App;
