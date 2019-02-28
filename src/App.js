import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx'
import HeroList from './components/hero-list/hero-list.jsx'
import Settings from './components/settings/settings.jsx'
import AddHero from './components/addHero/AddHero.jsx'
import {Route} from  'react-router-dom'

class App extends Component   {
  constructor() {
    super();

    this.state = {
      appName: 'Hero Book', 
      heroList: [
            {
                name: 'Genji',
                desc: 'TAAAA'
            },
            {
              name: 'Hanzo',
              desc: 'SHAAA'
            }
          ]

       }
    }


  render() {
    return (
      <>
      <Navbar appName={this.state.appName}/>
        <Route exact path ="/"
            render={(props) => <HeroList heroes={this.state.heroList}/>}/>
        <Route path ="/addHero" component={AddHero}/>
        <Route path ="/settings" component={Settings}/>
      </>
    )     
  }
}

export default App;
