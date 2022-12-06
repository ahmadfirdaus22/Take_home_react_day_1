import react from "react";
import './Button.style.css';

const Button = (props) => {
    

    return (
        <button className="button-1"  onClick={props.isi}>{props.nama}</button>
    );
};

export default Button;