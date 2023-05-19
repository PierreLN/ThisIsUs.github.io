import React, { useState } from 'react';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Header/Header';

function App() {
  const [location, setLocation] = useState('home');

  const onLocationHandler = (data: any) => {
    setLocation(data)
  }

  return (
    <div className="App">
      <Header onMove={onLocationHandler}></Header>
      <MainPage selectedPage={location}></MainPage>
    </div>
  );
}

export default App;
