import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNotes] = useState({
        title:"",
        content:""
    });


    function getInput(event){
        const {name, value} = event.target
        setNotes((preVal)=>{
            return { 
                ...preVal,
                [name]: value
            }
        });
    
    }

    function submitNote(event){
        props.onAdd(note);
        setNotes({
            title:"",
            content:""
        })
        event.preventDefault();

    }   
  return (
    <div>
      <form>
        <input onChange={getInput} value={note.title} name="title" placeholder="Title" />
        <textarea  onChange={getInput} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
