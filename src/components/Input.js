import React from 'react';
import '../scss/main.scss';

class Input extends React.Component {
  render() {
    const actionToPerform = this.props.actionToPerform;
    return (
      <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input js__input"
          />
          <button className="btn js__btn" onClick={actionToPerform}>
            Prueba
          </button>
        </div>
    );
  }
}

export default Input;
