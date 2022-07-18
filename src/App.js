import "./App.css";
import Boxes from "./Components/Boxes";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";
import Showcase from "./Components/ShowCase";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <NewsLetter />
      <Boxes />
    </div>
  );
}

export default App;
