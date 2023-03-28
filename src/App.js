import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main/index';
import Footer from './components/Footer';

function App() {
  const [pageNum, setPageNum] = useState("1");

  return (
    <div>
      <header>
        <Header setPageNum={setPageNum}/>
      </header>
      <main>
        <Main pageNum={pageNum}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
