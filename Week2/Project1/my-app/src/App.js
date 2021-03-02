import React from 'react'
import Header from './Header'
import Bloglist from './Bloglist'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className = "header">
        <Header />
      </div>
      <div className="bloglist">
        <Bloglist />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
