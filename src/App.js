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
    console.log('scrolling to waitlist');
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Add the Navbar component here */}
      <Navbar scrollToWaitlist={scrollToWaitlist} />
      <main>
        <Intro scrollToWaitlist={scrollToWaitlist} />
        <Problem />
        <Solution />
        <Waitlist ref={waitlistRef} />
      </main>
    </div>
  );
}

export default App;