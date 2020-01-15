import React, {useEffect, useReducer, useState} from 'react';
import Tile from '../Tile';
import SuccessAlert from '../Alert';

function shuffleColors(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        return state.map(item => {
          if (action.payload === item.id) {
            item.open = !item.open;
          }
          return item
        })
      case "untoggle":
        return state;
      case "reset": 
        return state = action.payload ; 
      default:
        return state
  }
}

function createList(number) {
const colors = ['#FFFF66', '#0099FF', '#FFCC33', '#66CC66', '#FF6666', '#9933CC', '#66CCCC', '#FF6600', '#FF3300', '#CCCC66', '#3333CC', '#660066','#999999', '#663300', "red", "green", "lightgreen", "black", "purple"];
let colorsList = colors.slice(0, number/2);
colorsList = colorsList.concat(colorsList);
colorsList = shuffleColors(colorsList);
const list = colorsList.map((item, index) => ({
    id: index,
    open: false,
    color: colorsList[index]
    })
);
    return list;
}

let idOpened = [];

const Game = (props) => {
    const number = props.number;
    let list = createList(number);
    let count = 0;
    let id = [];
    const [state, dispatch] = useReducer(reducer, list);
    const [alert, showAlert] = useState(0);

    useEffect(() => {
      showAlert(false);
      console.log("use effect");
      dispatch ({type: "reset",  payload: createList(number)}) 
  }, [props.number])
    
    useEffect(() => {
        state.forEach((item,index) => {
          if(item.open === true) {
            if (!(idOpened.includes(item.id))) {
                id.push(index);
                count++;
            }
          }
        });
        if (count === 2) {
          if (state[id[0]].color === state[id[1]].color) {
            idOpened.push(state[id[0]].id,state[id[1]].id);
            id = [];
          } else { 
            setTimeout(() => {
              dispatch ({type: "toggle",  payload: id[0]})
              dispatch ({type: "toggle",  payload: id[1]})
            }, 200);
          }
        }
        if (number === idOpened.length) {
          showAlert(true);
          idOpened = [];
        }
     }, [state]);

    return (
        <div>
          <SuccessAlert active={alert}/>
          <div className={`list ${(number === 24) ? "list-24" : (number === 20) ? "list-20" : ""}`}>
            {state.map((item, index) => (
              <Tile
              isOpen={item.open}
              key={item.id}
              color={item.color}
              onClick={(!item.open) ? () => dispatch ({type: "toggle",  payload: item.id}) : () => {}}
              />
          ))}
          </div>
        </div>
    )
}

export default Game;