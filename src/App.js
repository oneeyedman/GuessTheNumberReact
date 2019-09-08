import React from 'react';
import './scss/main.scss';
import Input from './components/Input';
import Tries from './components/Tries';
import Result from './components/Result';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.forceUpdate();
    console.log('Estoy funcionando');
  }
  render() {
    const handleClick = this.handleClick;
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <Tries />
        <Input actionToPerform = {handleClick}/>
        <Result />
      </div>
    );
  }
}

export default App;
