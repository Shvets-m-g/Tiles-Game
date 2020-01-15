import React, {useState, useReducer, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Game from './Components/Game';

function buttonReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state.map((item) => { 
          if (item.id === action.payload) {
            item.active = true;
          } else {item.active = false;}
          return item
        });
    default:
      return state;
  }
}

function App() {
  const buttonInitialState = [
    {
      id: 1,
      value: 12,
      active: false,
      variant: "outline-info",
      text: "4х3"
    },
    {
      id: 2, 
      value: 16,
      active: true,
      variant: "outline-info",
      text: "4x4"
    }, 
    {
      id: 3, 
      value: 20,
      active: false,
      variant: "outline-info",
      text: "4x5"
    },
    {
      id: 4, 
      value: 24,
      active: false,
      variant: "outline-info",
      text: "4x6"
    }
  ];
  const [number, setNumber] = useState(16);
  const [buttonState, setButtonState] = useReducer(buttonReducer, buttonInitialState);

  useEffect(() => {
    let buttonActive = buttonState.find(item => item.active === true);
    console.log(buttonActive)
    setNumber(buttonActive.value);
    console.log(number)
  }, [buttonState]);

  const changeState = (index) => {
    setButtonState ({type: "toggle",  payload: index})
  }

  return (
    <div className="App">
      <div className="app">
      </div>  
      <Header buttonState={buttonState} onChange={changeState}/>
      <Game number={number}></Game>
    </div>
  );
}

export default App;
