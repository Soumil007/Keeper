// eslint-disable-next-line
import React,{useState} from "react";


function InputArea(props){

    const [inputText,SetInputText] = useState({
       
    });

    function handleChange(event){
        const {name,value} = event.target;
        // console.log(name);
        // console.log(value);
        SetInputText((prevValue) => {
            return {
                ...prevValue,
                [name]:value
            };
        } );
    }

    function addNote(event){
        props.onAdd(inputText);
        SetInputText({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" type="text" placeholder="title" value={inputText.title}/>
                <textarea onChange={handleChange} name="content" type="text" placeholder="Take a note" value={inputText.content} rows="3" />
                <button onClick={addNote} >
                    <span>Add</span>
                </button>
            </form>
        </div>
    );
}

export default InputArea;