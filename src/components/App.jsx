import React ,{useState} from "react";

import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";
import notes from "../notes";



function App(){

    const [notes,setNotes] = useState([]);

    function addItems(inputText){
        setNotes((prevValue) => {
            return [...prevValue,inputText];
        })
    }

    function deleteItems(id){
        setNotes((prevValue) => {
            return prevValue.filter((noteItem,index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Heading />
            <InputArea 
                onAdd = {addItems}
                
            />
            {/* Arrow Function */}
            {notes.map((note,index) => {
                return <Note 
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {deleteItems}
                /> ;
            })}

            <Footer />
        </div>
    );
}

export default App;