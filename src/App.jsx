// import Search from "./pages/Search";
import "./App.css";
import SlideImage from "./components/sliderImage/SlideImage";
import{slides} from "./data/carouselData.json"
const App = () => {
  return (
    <div className="app">

      <SlideImage data={slides}/>
    </div>
  )
};

export default App;
