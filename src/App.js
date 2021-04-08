import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  //Set global state with technology category by default
  const [actualState, setActualState] = useState('technology')
  return (
    <div className="h-100">
      <h1 className="text-center text-4xl mt-4 font-bold text-white">TeckiNews</h1>
      <h2 className="text-center w-4/6 m-auto py-5 text-white">Recopilador de noticias de Tecnología, Negocios y Ciencia</h2>
      <NavBar
      setActualState={setActualState}
      actualState={actualState}
      />
      <News
        category={actualState}
      />
    </div>
  );
}

export default App;
