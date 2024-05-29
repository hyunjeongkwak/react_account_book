import { useState } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Router from './shared/Router';
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" element={<Home selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />} />
        <Route path="/Works/ :id" element={<Works />} />
      </Router>
    </>
  );
}

export default App;
