import React from 'react';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.counter = 0;
    this.clue = 'Introduce un número y dale a Prueba';
    this.userNumber = 0;
    this.randomNumber = this.getRandomNumber(100);
    console.log('r', this.randomNumber);

    this.getUserUserNumber = this.getUserUserNumber.bind(this);
    this.checkNumbers = this.checkNumbers.bind(this);
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  getUserUserNumber(event) {
    const value = parseInt(event.currentTarget.value);
    this.userNumber = value;
  }

  checkNumbers() {
    const userNumber = this.userNumber;
    const randomNumber = this.randomNumber;
    let counter = this.counter;

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

    this.clue = result;
    this.counter = counter;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >{this.counter}</p>
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input"
            onChange={this.getUserUserNumber}
          />
          <button className="btn" onClick={this.checkNumbers}>
            Prueba
          </button>
        </div>
        <p className="resultText">{this.clue}</p>
      </div>
    );
  }
}

export default App;
