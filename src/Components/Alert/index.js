import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Alert from 'react-bootstrap/Alert';

const SuccessAlert = (props) => {
    const className = props.active ? "alert active" : "alert unactive";
    return (
        <Alert variant="success" className={className} style={{position: "absolute"}}>
            <Alert.Heading> Try again? </Alert.Heading>
            <p>Click "New game" ---></p>
        </Alert>    
      );
}

export default SuccessAlert;