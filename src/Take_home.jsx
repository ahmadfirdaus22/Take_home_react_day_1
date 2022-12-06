import React, {useState} from "react";
import Button from "./components/Button/Button";
import './Take_home.style.css';

const Take_home = () => {
    
    const [ids,setIndex] = useState(0)
    const [note,setNote]= useState([]);
    const [input,setInput] = useState('');

    const newInput = (e) => {
        setInput(e.target.value);
    }

    const addNote = () => {
        if(input.length === 0){
            return;
        }
        setInput('');
        setIndex(ids + 1);
        setNote([...note, {id: ids, name:input}]);
    }

    const deleteNote = (index) => {
        setNote(note.filter((a)=> a.id !== index))

        console.log(index)
    }

    return(
        <div className="App">
            <div className="name">
                <h1>Todo List</h1>
                    {note.map((note) => (
                            <p  key={note.id}>{note.name}&emsp;&emsp;&emsp;<Button  isi={() => {
                                deleteNote(note.id)}} nama={'X'}/></p>
                        ))}
                <input type="text" value={input} onChange={newInput} />
                <Button isi={addNote} nama={'Tambah'}/>
            </div>
        </div>
    );
};

export default Take_home;