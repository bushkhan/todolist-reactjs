import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";


function App() {
  return (
    <div>
      <Header/>
      <CreateArea/>
      <Note key={1} title="Note Title" content="Note content"/>
      <Footer/>
    </div>
   
  );
}

export default App;
