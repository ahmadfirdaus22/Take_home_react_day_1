import react from "react";


const Input = (props) =>{

    return(
       <input type="number" min={0} max={100} onChange={props.isi}/>
    );
};

export default Input;