import GeneralInfo from "./components/generalInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <h1>CV-Project</h1>
      <form>
        <GeneralInfo></GeneralInfo>
        <Education></Education>
        <Experience></Experience>
      </form>
    </div>
  );
};

export default App;
