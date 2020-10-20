import React from 'react';

import './App.css';

import About from './components/About'
import EntryPage from './components/EntryPage'
import Header from './components/Header'
import Interests from './components/Interests'
import NavBar from './components/NavBar'
import Qualifications from './components/Qualifications'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <EntryPage></EntryPage>
      <Skills></Skills>
      <Interests></Interests>
      <Qualifications></Qualifications>
      <About></About>
    </div>
  );
}

export default App;
