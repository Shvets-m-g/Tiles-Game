import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.css';

const Header = (props) => {
   
    
    return (
       <div className="header">
            <div className="title">Tiles game </div>
            <div className="buttons">
            { props.buttonState.map((item) => (
                <Button 
                   key={item.id} 
                   variant={item.variant} 
                   onClick={() => props.onChange(item.id)} 
                   active={item.active}>
                       {item.text}
                </Button>
            ))}
            </div>
       </div> 
    )
  }
  
  export default Header;