import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer';

function App() {
  const [pageNum, setPageNum] = useState("1");

  return (
    <div>
        <Header setPageNum={setPageNum}/>
        <Main pageNum={pageNum}/>
        <Footer />
    </div>
  );
}

export default App;
