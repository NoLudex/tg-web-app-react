import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Form from './components/Form/Form';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route index element = { <Form /> } />
      </Routes>
    </div>
  );
}

// <Route path = { 'form' } element = { <Form /> } />
export default App;
