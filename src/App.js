import "./App.css";
import Boxes from "./Components/Boxes";
import Footer from "./Components/Footer";
import Instructors from "./Components/Instructors";
import LearnSectionRight from "./Components/LearnSectionRight";
import LearnSectionsLeft from "./Components/LearnSectionsLeft";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";
import QuestionAccordion from "./Components/QuestionAccordion";
import Showcase from "./Components/ShowCase";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <NewsLetter />
      <Boxes />
      <LearnSectionsLeft />
      <LearnSectionRight />
      <QuestionAccordion />
      <Instructors />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
