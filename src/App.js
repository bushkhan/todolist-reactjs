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
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((item) => {
          return <Note key={1} title={item.title} content={item.content} />
        })
      }

      <Footer />
    </div>

  );
}

export default App;
