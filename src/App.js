import React, { Component } from 'react'

import scrollToComponent from 'react-scroll-to-component'

import './App.css';

import About from './components/About'
import EntryPage from './components/EntryPage'
import Header from './components/Header'
import Interests from './components/Interests'
import NavBar from './components/NavBar'
import NavIcon from './components/NavIcon'
import Qualifications from './components/Qualifications'
import Skills from './components/Skills'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleNavBar: false
    }

    this.setNavBarVisibility.bind(this)
    scrollToComponent.bind(this)
  }

  setNavBarVisibility = () => {
    this.setState({visibleNavBar: !this.state.visibleNavBar})
  }

  render() {
    return (
      <div className="App">
        <NavBar
          visible={this.state.visibleNavBar}
          handleClick={this.setNavBarVisibility}
          handleNavClick={scrollToComponent}
          Start={this.Start}
          Skills={this.Skills}
          Interests={this.Interests}
          About={this.About}
          Qualifications={this.Qualifications}
        >
        </NavBar>

        <NavIcon 
          handleClick={this.setNavBarVisibility}
        >
        </NavIcon>

        <section ref={section => this.Start = section}>
          <Header></Header>
        </section>

        <EntryPage></EntryPage>

        <section ref={section => this.Skills = section}>
          <Skills></Skills>
        </section>

        <section ref={section => this.Interests = section}>
          <Interests></Interests>
        </section>

        <section ref={section => this.Qualifications = section}>
          <Qualifications></Qualifications>
        </section>

        <section ref={section => this.About = section}>
          <About></About>
        </section>
      </div>
    )
  }  
}

export default App
