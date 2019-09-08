import React from 'react';
import './scss/main.scss';
// import Input from './components/Input';
// import Tries from './components/Tries';
// import Result from './components/Result';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    console.log(number);
    localStorage.setItem('RandomNumber', number);
    return number;
  }

  handleChange(event){
    const valueNumber = event.target.value;
    console.log(valueNumber);
    localStorage.setItem('ValueNumber', valueNumber)
  }

  handleClick(){
    console.log('Estoy funcionando');
    const ValueNumber = localStorage.getItem('ValueNumber');
    const RandomNumber = localStorage.getItem('RandomNumber');
    if(ValueNumber > RandomNumber){
      console.log('soy mayor')
    }
    else if (ValueNumber < RandomNumber){
      console.log('soy menor')
      this.message = 'El número que has introducido es muy pequeño, introduce un número mayor.'
    }
    else{
      console.log('Has acertado campeona')
    }
  }


  render() {
    this.getRandomNumber(100);
    const handleClick = this.handleClick;
    const handleChange = this.handleChange;
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >0</p>    
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input js__input"
            onChange = {handleChange}
          />
          <button className="btn js__btn" onClick={handleClick}>
            Prueba
          </button>
        </div>
        <p className="resultText">Introduce un número y dale a Prueba</p>
  
      </div>
    );
  }
}

export default App;
