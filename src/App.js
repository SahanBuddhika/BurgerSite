import React, { Component } from 'react';
import './App.css';
import P from './Person/Person';

class App extends Component {       //react component
  state = {
    persons:[
      { name:'Sahan' , age:'25'},
      { name:'Buddhika' , age:'28'},
      { name:'kamal' , age:'24'},
      { name:'Nimal' , age:'30'}

    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        { name:'Anil' , age:'30'},
        { name:'Sunil' , age:'35'},
        { name:'Winil' , age:'40'},
        { name:'Ranil' , age:'45'}
  
      ]
    })
  }

  
  render() {    //render method ....this method render somehting to the screen

    const style = {
      backgroundColor : 'grey',
      font : 'inherit' ,
      border:'1px solid blue ',
      padding : '8px',
      
    }

    return (
      <div className="App">
        <h1>My First  React Application</h1>
        <p>Sahan Buddhika</p>
        
        <button style= {style} onClick = { () => this.switchNameHandler('kamalSahabandu')}>Switch</button>
        {/* <P name='Sahan' age='25'>Richmond College</P>
        <P name='Buddhika' age='26'>Mahinda College</P>
        <P name='Padma' age='48'>Royal College</P>
        <P name='Himasena' age='58'>Siridhamma College</P> */}

        <P name={this.state.persons[0].name} age={this.state.persons[0].age}>Richmond College</P>
        <P name={this.state.persons[1].name} age={this.state.persons[1].name}>Mahinda College</P>
        <P name={this.state.persons[2].name} age={this.state.persons[2].name} click = {this.switchNameHandler.bind(this,'AnilHettige')}>Royal College</P>
        <P name={this.state.persons[3].name} age={this.state.persons[3].name}>Siridhamma College</P>

      </div>

    );

    // return React.createElement('div',{className :"App"},React.createElement('h1',null,'Sahan Buddhika'));
  }
}

export default App; //export this then we can use this class in another module
