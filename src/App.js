import React from 'react';
import './scss/main.scss';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      clue: 'Introduce un número y dale a Prueba',
      userNumber: 0,
      randomNumber: this.getRandomNumber(100)
    }
    
    console.log('r', this.state.randomNumber);

    this.getUserUserNumber = this.getUserUserNumber.bind(this);
    this.checkNumbers = this.checkNumbers.bind(this);
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  getUserUserNumber(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState({
      userNumber: value
    });
  }

  checkNumbers() {
    const userNumber = this.state.userNumber;
    const randomNumber = this.state.randomNumber;
    let counter = this.state.counter;

    let result = '';

    if (userNumber === randomNumber) {
      result = 'Has ganado, campeona!';
    } else if (userNumber > randomNumber) {
      result = 'Casi, por lo alto';
      counter++;
    } else {
      result = 'Casi, por lo bajo';
      counter++;
    }

    this.setState({
      clue: result,
      counter: counter
    });
    
  }

  render() {
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >{this.state.counter}</p>
        
        <Input 
          fieldAction={this.getUserUserNumber}
          buttonAction={this.checkNumbers}
        />

        
        
        <p className="resultText">{this.state.clue}</p>
      </div>
    );
  }
}

export default App;
