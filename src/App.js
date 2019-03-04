import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx'
import HeroList from './components/hero-list/hero-list.jsx'
import Settings from './components/settings/settings.jsx'
import AddHero from './components/addHero/AddHero.jsx'
import HeroPics from './components/heroPics/heroPics.jsx'
import {Route} from  'react-router-dom'

class App extends Component   {
  constructor() {
    super();

    this.state = {
      appName: 'Hero Book', 
      heroList: [
            {
              name: 'Genji',
              desc: 'TAAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'Hanzo',
              desc: 'SHAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'McCree',
              desc: 'CHIIII',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'Tracer',
              desc: 'DAAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            }
          ]

       }
    }


  render() {

    let heroPics = this.state.heroList.map(hero => {
      return hero.img;

    })

    console.log(heroPics);

    return (
      <>
      <Navbar appName={this.state.appName}/>
        <Route exact path ="/"
            render={(props) => <HeroList heroes={this.state.heroList}/>}/>
        <Route path ="/addHero" component={AddHero}/>
        <Route path ="/settings" component={Settings}/>
        <Route path ="/heroPics"
            render={(props) => <HeroPics pics={heroPics}/>}/>
      </>
    )     
  }
}

export default App;
