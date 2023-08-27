import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";


function App() {
  const [notes, setNotes] = useState([]);


  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((item, index) => {
          return <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote} />
        })
      }
      <Footer />
    </div>

  );
}

export default App;
