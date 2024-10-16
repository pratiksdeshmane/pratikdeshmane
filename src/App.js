import React from 'react';
import { Button } from '@mui/material';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        My MUI Button
      </Button>
      <Home/>
    </div>
  );
}

export default App;
